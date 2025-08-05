import MusicPlayer from "./MusicPlayer"
import backgraphics from "../images/backgraphics.png"
import d1 from "../images/d1.png"
import d2 from "../images/d2.png"
import d3 from "../images/d3.png"
import d4 from "../images/d4.png"
import search from "../images/search.png"
import path318 from "../images/Path318.png"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Search() {

   const { ref, inView } = useInView({
    threshold: 0.3,
  });

   const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };

  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
        <div className="left flex-1">

            <motion.img 
             variants={bg}
            animate={`${inView}`}
            transition={{
            duration: 1,
            type: "ease-out",
          }}
            src={backgraphics} 
            alt="backgrapics" 
            className="absolute top-[22rem] left-[-47rem]"/>

            <motion.img 
            src={d1} 
            alt="d1" 
            className="absolute w-[16rem] top-[26rem]" />{" "}

            <motion.img 
            src={d2} 
            alt="d2" 
            className="absolute w-[9rem] top-[32.7rem] left-[7rem]" />{" "}

            <motion.img 
            variants={redimg}
            animate={`${inView}`}
            transition={{
            duration: 1.2,
            type: "ease-out",
          }}
            src={d3} 
            alt="d3" 
            className="absolute w-[9rem] top-[33rem] left-[17rem]" />

            <motion.img
             variants={musicimg}
            animate={`${inView}`}
            transition={{
            duration: 1,
            type: "ease-out",
          }}
            src={d4} 
            alt="d4" 
            className="absolute w-[17rem] top-[50rem] left-[2rem]" />

        </div>
        
        <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem] pl-[12rem]">
                <div className="searchbar flex justify-start w-[100%] pb-[1rem]">
                    <input type="text"
                    placeholder="Enter the keyword or URL"
                    className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
                    />
                    <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
                        <img src={search} alt="search" className="w-[1.5rem]"/>
                    </div>
                </div>
                <div className="tild flex justify-startmt-7 items-center w-[100%]">
                    <img src={path318} alt="path318" className="w-[5rem]"/>
                </div>
                <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        <div ref={ref}>
        <MusicPlayer />
        </div>
            </div>
        </div>
  )
}

export default Search