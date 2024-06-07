import React, { useState, useEffect, useRef } from "react";
import { AssessmentAnd } from "./components/AssessmentAnd";
import { Box } from "./components/Box";
import Webcam from "react-webcam";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

export const App = () => {
  const [showBox, setShowBox] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      const model = await cocoSsd.load();
      if (videoLoaded) {
        detectFrame(webcamRef.current, model);
      }
    };

    const detectFrame = (video, model) => {
      model.detect(video).then((predictions) => {
        renderPredictions(predictions);
        requestAnimationFrame(() => detectFrame(video, model));
      });
    };

    const renderPredictions = (predictions) => {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      predictions.forEach((prediction) => {
        ctx.beginPath();
        ctx.rect(
          prediction.bbox[0],
          prediction.bbox[1],
          prediction.bbox[2],
          prediction.bbox[3]
        );
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.stroke();
        ctx.fillText(
          `${prediction.class}: ${Math.round(prediction.score * 100)}%`,
          prediction.bbox[0],
          prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10
        );
      });
    };

    if (webcamRef.current && canvasRef.current) {
      startVideo();
      loadModel();
    }
  }, [videoLoaded]);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        webcamRef.current.srcObject = stream;
        webcamRef.current.addEventListener('loadedmetadata', () => {
          webcamRef.current.play();
          setVideoLoaded(true); // Set videoLoaded to true once the stream is loaded
        });
      })
      .catch((error) => {
        console.error("Error accessing the camera:", error);
      });
  };

  const handleTakePicture = () => {
    setShowBox(true);
  };

  const handleProceed = () => {
    setShowBox(false);
  };

  const handleClose = () => {
    setShowBox(false);
  };

  return (
    <div className="container mx-auto p-4">
      <AssessmentAnd onTakePicture={handleTakePicture} />
      {showBox && <Box onClose={handleClose} onProceed={handleProceed} />}
      <div className="relative">
        <Webcam
          ref={webcamRef}
          className="absolute inset-0 w-full h-full object-cover"
          width="640"
          height="480"
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          width="640"
          height="480"
        />
      </div>
    </div>
  );
};
