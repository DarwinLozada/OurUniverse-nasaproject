import { motion } from "framer-motion";

export default function PageIntro() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial="hidden"
      animate="visible"
      variants={variants}
      whileTap={{ scale: 1.5 }}
      className="w-40 h-40 bg-blue-400"
    >
      <h1>Hola</h1>
    </motion.div>
  );
}
