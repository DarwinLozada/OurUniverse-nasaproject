import ReactDOM from "react-dom";
import { motion } from "framer-motion";

const wrapperVariants = {
  invisible: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

export default function ImageModal({ src, setShowImageModal }) {
  return ReactDOM.createPortal(
    <motion.div
      initial="invisible"
      animate="visible"
      exit="invisible"
      variants={wrapperVariants}
      className="justify-center flex items-center fixed w-screen h-screen z-10"
    >
      <img
        src={src}
        className="absolute opacity-100 z-20 max-w-md max-h-96 md:max-h-36rem md:max-w-6xl xl:max-h-40rem xl:max-w-6xl images-opaque-shadow"
      />
      <div
        className="absolute bg-black w-full h-full opacity-60"
        onClick={() => setShowImageModal(false)}
      ></div>
    </motion.div>,
    document.getElementById("image-wrapper-modal")
  );
}
