import React from "react";

export default function ConfirmModal({
  children,
  modalStyles,
  viewModal = 0,
}: any) {
  return (
    viewModal && (
      <div className="fixed z-20 flex h-full w-full flex-col items-center justify-center bg-black/60">
        <div
          className={`flex flex-col items-center justify-center bg-Red px-10 py-8 ${modalStyles}`}
        >
          {children}
        </div>
      </div>
    )
  );
}
