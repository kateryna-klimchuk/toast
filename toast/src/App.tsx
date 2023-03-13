import { useState } from "react";
import { ToastCard } from "./components/toast/toastCard";

export const Toast = () => {
  const [showNotification, setShowNotification] = useState(false);

  const onHandleClick = () => {
    setShowNotification(!showNotification);
  };
  return (
    <div className="text-center">
      <h1 className="p-2 mb-2">
        The library, which help you to provide the best notification
      </h1>
      <button
        onClick={onHandleClick}
        className="border rounded border-spacing-2 border-orange-500 px-2 py-1 mb-2 bg-orange-300"
      >
        Add notification
      </button>
      {showNotification && <ToastCard />}
    </div>
  );
};
