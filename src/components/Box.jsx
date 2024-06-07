// Box.jsx
import React from "react";

export const Box = ({ onClose, onProceed }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[90%] lg:w-[700px] h-auto lg:h-[400px] rounded-2xl shadow-lg">
        <div className="bg-[#fff] p-4 lg:p-8 rounded-t-2xl">
          <h2 className="text-lg lg:text-2xl font-semibold text-[#1a202c]">Instructions</h2>
        </div>
        <div className="p-4 lg:p-8">
          <p className="text-base lg:text-lg text-[#333]">
            Please read the instructions carefully before proceeding with the assessment.
          </p>
        </div>
        <div className="flex justify-end p-4 lg:p-8 space-x-4">
          <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
            Close
          </button>
          <button onClick={onProceed} className="bg-blue-600 text-white px-4 py-2 rounded">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};
