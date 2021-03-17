import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "./SvgComponents";

const footerVariants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.footer
      ref={ref}
      className="flex items-center w-screen justify-between md:h-32 bg-FooterColor rounded-t-5xl pt-4 px-8 lg:px-12"
      variants={footerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-start w-full">
        <div className="flex rounded-full items-center justify-center bg-FooterLogoColor px-4 h-28 w-28 mt-4 mb-4">
          <div className="flex relative justify-center h-20 w-16 px-4 pt-2 pb-3 bg-FooterLogoColor rounded-full images-shadow mt-4 mb-8">
            <Image
              src="/static/images/dev_logo.png"
              layout="fill"
              alt="Darwin Lozada dev Logo"
            />
          </div>
        </div>
        <p className="text-gray-300 text-lg md:text-xl md:ml-6 text-center md:text-left">
          Developed and designed by{" "}
          <span className="text-white">Darwin Lozada</span>
        </p>
      </div>
      <div className="hidden md:flex gap-6 items-center">
        <a
          href="https://github.com/DarwinLozada"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubIcon
            ClassNames={
              "flex transition-all duration-300 text-red-300 w-14 h-14 hover:ring-2 rounded-full cursor-pointer ring-bgGradientSecond"
            }
            fillColor={"#654EA3"}
          />
        </a>
      </div>
    </motion.footer>
  );
}
