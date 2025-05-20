import { toast, Slide } from "react-toastify";

interface ToastOptions {
  position?:
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  theme?: "light" | "dark" | "colored";
  transition?: typeof Slide;
}

const defaultOptions: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  transition: Slide,
};

export const showSuccessToast = (message: string, options?: ToastOptions) => {
  toast.success(message, { ...defaultOptions, ...options });
};

export const showErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, { ...defaultOptions, ...options });
};
