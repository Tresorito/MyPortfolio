import React from "react";

const ServiceStatus: React.FC = () => {
  
  return (
    <React.Fragment>
        <div className="status p-4 rounded-xl flex flex-row items-center">
          <div className="status-icon w-[2rem] h-[2rem] rounded-3xl relative mr-4">
            <div
              className={`status-icon-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4  rounded-[inherit]`}
            ></div>
            <div
              className={`status-icon-wave  w-[inherit] h-[inherit] rounded-[inherit]  animate-ping `}
            ></div>
          </div>
          <p className={`status-text`}>Status: Active</p>
        </div>
    </React.Fragment>
  );
};

export default ServiceStatus;
