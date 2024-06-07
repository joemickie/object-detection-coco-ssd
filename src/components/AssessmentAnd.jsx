import React, { useRef } from "react";
import { Eye } from "./Eye";
import { LampCharge } from "./LampCharge";
import { MonitorRecorder } from "./MonitorRecorder";
import { TimerStart } from "./TimerStart";
import { Wifi } from "./Wifi";
import Webcam from "react-webcam";

export const AssessmentAnd = ({ onTakePicture }) => {
  const webcamRef = useRef(null);

  return (
    <div className="bg-[#f8f9fb] flex flex-col lg:flex-row justify-center w-full p-4 lg:p-0">
      <div className="bg-[#f8f9fb] lg:w-[1359px] h-auto lg:h-[846px] relative">
        <div className="w-full h-[98px] bg-white flex items-center justify-between p-4">
          <div className="w-[63px] h-[62px] bg-secondary rounded-xl flex items-center justify-center">
            <div className="relative w-[47px] h-[27px]">
              <div className="absolute w-[27px] h-[27px] rounded-[13.5px] border-[6px] border-solid border-white" />
              <div className="absolute w-[27px] h-[27px] left-5 rounded-[13.5px] border border-solid border-white" />
              <img className="absolute w-[5px] h-4 top-1.5 left-5" alt="Ellipse" src="ellipse-65.svg" />
            </div>
          </div>
          <div className="w-[180px] h-11 bg-[#ebe7ff] rounded-lg flex items-center justify-center">
            <p className="text-lg text-center text-[#755ae2]">
              <span className="font-bold">29:10</span>
              <span className="text-sm font-medium"> time left</span>
            </p>
            <div className="w-6 h-6 bg-[#e5e0ff] rounded-xl flex items-center justify-center ml-2">
              <TimerStart className="w-4 h-4" />
            </div>
          </div>
          <div className="w-[30px] h-[30px] bg-[#e5e0ff] rounded-[15px] flex items-center justify-center">
            <Eye className="w-5 h-5" />
          </div>
        </div>
        <div className="px-4 lg:px-0 lg:pl-[180px]">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-xl font-medium text-black">Frontend developer</h2>
              <p className="text-sm text-helper-text">Skill assessment test</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[20px] p-4 lg:p-12 mx-4 lg:mx-auto mt-4 lg:mt-12 lg:w-[832px]">
          <h2 className="text-xl font-medium text-black mb-4">System check</h2>
          <p className="text-sm text-body-text mb-4">
            We utilize your camera image to ensure fairness for all participants, and we also employ both your camera
            and microphone for a video questions where you will be prompted to record a response using your camera or
            webcam, so it's essential to verify that your camera and microphone are functioning correctly and that
            you have a stable internet connection. To do this, please position yourself in front of your camera,
            ensuring that your entire face is clearly visible on the screen. This includes your forehead, eyes, ears,
            nose, and lips. You can initiate a 5-second recording of yourself by clicking the button below.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-start">
            <Webcam
              className="w-full lg:w-[275px] h-auto lg:h-[168px] object-cover rounded-lg mb-4"
              ref={webcamRef}
              autoPlay
              playsInline
              muted
            />
            <div className="grid grid-cols-2 gap-4 lg:ml-4">
              <div className="w-[93px] h-[71px] bg-violet-50 rounded-[10px] flex flex-col items-center justify-center">
                <MonitorRecorder className="w-[18px] h-[18px] mb-2" />
                <p className="text-[10px] text-body-text">Webcam</p>
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
              <div className="w-[93px] h-[71px] bg-violet-50 rounded-[10px] flex flex-col items-center justify-center">
                <Wifi className="w-[18px] h-[18px] mb-2" />
                <p className="text-[10px] text-body-text">Internet</p>
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
              <div className="w-[93px] h-[71px] bg-violet-50 rounded-[10px] flex flex-col items-center justify-center">
                <LampCharge className="w-[18px] h-[18px] mb-2" />
                <p className="text-[10px] text-body-text">Microphone</p>
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
              <div className="w-[93px] h-[71px] bg-violet-50 rounded-[10px] flex flex-col items-center justify-center">
                <LampCharge className="w-[18px] h-[18px] mb-2" />
                <p className="text-[10px] text-body-text">Speakers</p>
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
            </div>
          </div>
          <button
            onClick={onTakePicture}
            className="bg-primary text-white w-full lg:w-auto py-2 px-4 rounded-lg mt-4"
          >
            Take picture and continue
          </button>
        </div>
      </div>
    </div>
  );
};
