import CenterMenu from "./CenterMenu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]"
    
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[25rem] pt-[10rem] mt-[-8rem] relative z-[-1]">
        <CenterMenu />
        <div className="flex w-[100%] justify-center mt-14">
            <div className={SocialStyle}>
                <FacebookIcon />
            </div>
            <div className={SocialStyle}>
                <TwitterIcon />
            </div>
          <div className={SocialStyle}>
                <YouTubeIcon />
            </div>
        <div className={SocialStyle}>
                <LinkedInIcon />
            </div>
        </div>
        
            <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
        
    </div>
  )
}

export default Footer