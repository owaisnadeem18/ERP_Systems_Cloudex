import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom theme styling (Cloudex style feel)
const toastConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark", // cloudex vibe = dark modern UI
};

export const showSuccess = (msg) => {
  toast.success(msg, toastConfig);
};

export const showError = (msg) => {
  toast.error(msg, toastConfig);
};

export const showInfo = (msg) => {
  toast.info(msg, toastConfig);
};

export default function ToastProvider() {
  return <ToastContainer />;
}