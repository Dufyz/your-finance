import Image from "next/image";
import React from "react";

const DonateModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="donate-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100vh] max-h-full backdrop-blur-[7px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className="relative p-4 w-full max-w-2xl max-h-full"
        id="donate-modal-content"
      >
        <div className="relative bg-[#f1f3f5] rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <div>
              <Image
                src="/logo.svg"
                alt="YourFinance logo"
                width={48}
                height={48}
              />
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-title-primary rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="default-modal"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y- flex flex-col items-center justify-center">
            <p className="text-text-primary text-start text-[20px] sm:text-center">
              Our diverse and driven team propels your financial journey,
              empowering you to achieve your goals with precision. Agile and
              committed, we pride ourselves on delivering excellence.
            </p>
            <div>
              <Image
                src="/qr-code.svg"
                alt="Donate qrcode"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;
