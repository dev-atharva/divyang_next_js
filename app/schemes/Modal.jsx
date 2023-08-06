"use client";
import React from "react";

const Modal = ({ isOpen, onClose, scheme }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg">
        {/* Add your static information here */}

        <div className="schemeName ">
          <p className="text-left">{scheme.name}</p>
        </div>

        <div className="type-of-disability">
          <h3 className="font-medium">Types of disabilities:</h3>
          <ul>
            {scheme.beneficiary.map((benefactor, id) => {
              <li key={id} className="list-disc">
                {benefactor}
              </li>;
            })}
          </ul>
        </div>

        <div className="schemeType">
          <h3 className="font-medium">Type of scheme:</h3>
          <p>{scheme.type}</p>
        </div>

        <div className="eligibility">
          <h3 className="font-medium">Eligibilty Criteria:</h3>
          <ul>
            {scheme.eligiblity.map((eligible, id) => (
              <li key={id} className="list-disc">
                {" "}
                {eligible}
              </li>
            ))}
          </ul>
        </div>

        <div className="schemeInfo">
          <h3 className="font-medium">Information about scheme:</h3>
          <p>{scheme.description}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
