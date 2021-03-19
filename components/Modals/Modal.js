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

export default function Modal({
  children,
  toggleModal,
  closeModalClickingOutside,
}) {
  return ReactDOM.createPortal(
    <motion.div
      initial="invisible"
      animate="visible"
      exit="invisible"
      variants={wrapperVariants}
      className="justify-center flex items-center fixed w-screen h-screen z-10"
    >
      {children}

      <div
        className="absolute bg-black w-full h-full opacity-80"
        onClick={() => {
          if (closeModalClickingOutside) toggleModal(false);
        }}
      ></div>
    </motion.div>,
    document.getElementById("modal")
  );
}
