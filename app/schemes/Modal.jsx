import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg">
        {/* Add your static information here */}
      
        <div className="schemeName ">
            <p className="text-left">
            Special Education and vocational Training through Government institutions
            </p>
        </div>

        <div className="type-of-disability">
            <h3 className="font-medium">Types of disabilities:</h3>
            <ul>
                <li className="list-disc">Mobility</li>
                <li className="list-disc">Hearing</li>
                <li className="list-disc">Vision</li>
            </ul>
        </div>

        <div className="schemeType">
            <h3 className="font-medium">Type of scheme:</h3>
            <p>Education</p>
        </div>

        <div className="eligibility">
            <h3 className="font-medium">Eligibilty Criteria:</h3>
            <ul>
                <li className="list-disc"> Application in the given format submitted to concerned government</li>
                <li className="list-disc">Applicant should hvae minimum of 40% disability</li>
                <li className="list-disc">Applicant should have the residential proof of the region</li>
            </ul>
        </div>

        <div className="schemeInfo">
            <h3 className="font-medium">Information about scheme:</h3>
            <p>
                Special education is provided to disabled children between age 
                group 6 to 18 in the governemnt special schools.
                Vocational training is also provided. 
            </p>
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
