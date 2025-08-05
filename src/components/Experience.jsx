import path318 from "../images/Path318.png"
import group2 from "../images/Group2.png"
import group4 from "../images/Group4.png"
import musicicon from "../images/musicicon.png"
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      <img src={path318} alt="path318" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon={group2} title="For Live Music" />
        <Feature icon={musicicon} title="For Daily Music" />
        <Feature icon={group4} title="For Artists" />
      </div>
    </div>
  );
}

export default Experience;