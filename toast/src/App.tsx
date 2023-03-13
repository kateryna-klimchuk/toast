import { useState } from "react";
import { ToastCard } from "./components/toast/toastCard";

export const DownArrow = () => (
  <svg
    className="text-blue-600 w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 13L12 18L17 13M7 6L12 11L17 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Toast = () => {
  const [showNotification, setShowNotification] = useState(false);

  const onHandleClick = () => {
    setShowNotification(!showNotification);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-2 mb-2 flex items-center">
        <h1 className="mr-2">Please, press the button to see a notification</h1>
        <DownArrow />
      </div>
      <button
        onClick={onHandleClick}
        className="border rounded border-spacing-2 border-orange-500 px-2 py-1 mb-2 bg-orange-300"
      >
        Add a notification
      </button>
      {showNotification && (
        <ToastCard
          type={"success"}
          title={"Hooray"}
          fullColor
          description={"This notification was successfully shown!"}
        />
      )}
    </div>
  );
};
