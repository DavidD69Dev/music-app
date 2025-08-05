import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Feature({ icon, title }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // l'animation se relance à chaque scroll
    threshold: 0.3, // % visible avant déclenchement
  });

  const variant = {
    visible: {
      scale: 1,
      transition: { duration: 1, type: "easeOut" },
    },
    hidden: {
      scale: 0.5,
    },
  };

  return (
    <div ref={ref} className="feature flex items-center justify-center flex-col relative text-center mx-12">
      {/* Icone animée */}
      <motion.div
        variants={variant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="icon bg-[#081730] rounded-2xl p-4"
      >
        <img src={icon} alt="icon" className="w-[3rem]" />
      </motion.div>

      {/* Titre et texte */}
      <span className="mt-5">{title}</span>
      <span className="text-[#707070] mt-4">
        Nunc elementum, dolor vitae lacinia pulvinar, augue felis scelerisque
        libero, sit amet laoreet lorem.
      </span>

      <span className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer">
        Learn more
      </span>
    </div>
  );
}

export default Feature;
