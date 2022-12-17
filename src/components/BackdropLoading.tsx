import React, { ReactNode } from "react";

const BackdropLoading = ({ open }: { open: boolean }) => {
  return open ? (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden
      overflow-y-auto md:inset-0 h-modal md:h-full bg-[rgba(0,0,0,.9)]"
    >
      <div className="relative w-full h-full max-w-md md:h-auto mx-auto top-[20%]">
        <div className="relative">
          <div className="p-6 text-center flex justify-center">
            <div className="base-loader base-loader-light w-24 h-24" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default BackdropLoading;
