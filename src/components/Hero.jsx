import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import backgraphics from "../images/backgraphics.png"
import p1 from "../images/p1.png"
import p2 from "../images/p2.png"
import p3 from "../images/p3.png"
import p4 from "../images/p4.png"

import DownloadAds from "./DownloadAds"

function Hero() {
    const { ref, inView } = useInView({
    threshold: 0.3,
  });

    const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };

  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };

  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };

  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  return (
    <div
    ref={ref}
    className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]"
        >
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
            <span>Experience the</span>{" "}
            <span>
                <b>Best Quality Music</b>
                </span>
                <span className="text-[15px] text-[#525D6E]">
                    Donec laoret nec velit vitae aloquam. Ut quis tincidunt pursus.
                    <br />
                    Suspendisse in leo non risus tincidunt lobortis.
                </span>
                <div>
                    <span className="text-[13px]">Donwload now on IOS and Android</span>
                    <DownloadAds />
                </div>
        </div>
        <div className="images relative w-[50%]">
            <motion.img
            variants={bg}
            animate={`${inView}`}
            transition={{duration: 1, type: "ease-out"}}
            src={backgraphics} 
            alt="backgraphics" 
            className="absolute top-[-8rem] left-[19rem]" />

            <img src={p1} alt="p1" className="absolute top-[-15rem] h-[34rem] left-[13rem]"/>

            <motion.img
            variants={musicPlayer}
            animate={`${inView}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
             src={p2} 
             alt="p2" 
             className="absolute left-[235px] top-[94px] w-[175px]"/>

            <motion.img
            variants={rect}
            animate={`${inView}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={p3} 
            alt="p3" 
            className="absolute w-[5rem] left-[13rem] top-[12rem]"/>

            <motion.img
            variants={heart}
            animate={`${inView}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={p4} 
            alt="p4" 
            className="absolute w-[5rem] left-[12.5rem] top-[12rem]"/>

        </div>
    </div>
    
  )
}

export default Hero