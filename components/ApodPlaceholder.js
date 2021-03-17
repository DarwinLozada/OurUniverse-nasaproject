import { motion } from "framer-motion";

export default function ApodPlaceholder() {
  return (
    <motion.div
      initial="invisible"
      animate="visible"
      exit="invisible"
      key="apodInfo"
      className="w-full"
      transition={{ duration: 1 }}
      variants={{
        invisible: { opacity: 0, scale: 0.6, y: 100 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
        },
      }}
    >
      <div className="animate-pulse w-full h-12 rounded-full bg-gray-500 xl:w-1/3"></div>
      <div className="animate-pulse w-4/6 h-8 rounded-full bg-gray-500 mt-4 xl:w-1/4"></div>
      <article className="flex flex-col xl:flex-row-reverse">
        <div className="animate-pulse w-full bg-gray-500 h-72 rounded mt-8 xl:h-96"></div>
        <section className="w-full xl:mr-12">
          <div className="animate-pulse w-full h-6 bg-gray-500 rounded-full mt-16"></div>
          <div className="animate-pulse w-full h-6 bg-gray-500 rounded-full mt-6"></div>
          <div className="animate-pulse w-full h-6 bg-gray-500 rounded-full mt-6"></div>
          <div className="animate-pulse w-full h-6 bg-gray-500 rounded-full mt-6"></div>
          <div className="hidden xl:block animate-pulse w-full h-6 bg-gray-500 rounded-full mt-6"></div>
          <div className="hidden xl:block animate-pulse w-full h-6 bg-gray-500 rounded-full mt-6"></div>
        </section>
      </article>
    </motion.div>
  );
}
