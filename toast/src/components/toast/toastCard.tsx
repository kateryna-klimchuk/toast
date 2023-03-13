import { z } from "zod";
import clsx from "clsx";
import { SuccessIcon } from "../icon/SuccessIcon";
import { ErrorIcon } from "../icon/ErrorIcon";
import { InfoIcon } from "../icon/InfoIcon";
import { useState } from "react";

export const ToastSchema = z.object({
  type: z.enum(["success", "error", "info", "loading"]),
  title: z.string().optional(),
  description: z.string(),
  fullColor: z.boolean().optional(),
  position: z
    .enum(["top-right", "top-left", "bottom-right", "bottom-left"])
    .optional(),
});

export type ToastType = z.infer<typeof ToastSchema>;

export const ToastCard: React.FunctionComponent<ToastType> = ({
  type,
  title,
  description,
  fullColor,
  position = "bottom-right",
}) => {
  const [close, setClose] = useState(false);

  const [containerStyle] = {
    success: ["bg-green-50 hover:bg-green-100"],
    error: ["bg-red-50 hover:bg-red-100"],
    info: ["bg-yellow-50 hover:bg-yellow-100"],
    loading: [],
  }[type];

  const [toastPosition]: any = {
    "top-right": ["right-4 top-2"],
    "top-left": ["left-4 top-2"],
    "bottom-right": ["right-4 bottom-2"],
    "bottom-left": ["left-4 bottom-2"],
  }[position];

  const onHandleCloseNotification = () => {
    setClose(true);
    setTimeout(() => {}, 300);
  };

  return (
    <div
      className={clsx(
        "border rounded w-96 p-4 fixed shadow-md hover:bg-gray-50",
        toastPosition,
        close ? "invisible" : fullColor ? containerStyle : ""
      )}
    >
      <button
        className="absolute top-0 right-2 rotate-45 text-gray-400 hover:text-gray-500"
        onClick={onHandleCloseNotification}
      >
        +
      </button>

      <div className="flex items-center">
        {type === "success" ? (
          <SuccessIcon />
        ) : type === "error" ? (
          <ErrorIcon />
        ) : (
          <InfoIcon />
        )}
        <div>
          <p className="font-medium">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
