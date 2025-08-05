import appStore from "../images/AppStore.png"
import android from "../images/GooglePlay.png"


function DownloadAds() {
    const downloadImgStyle = "border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]"

  return (
    <div className="download">
        <div className="download_images flex">
            <img src={appStore} alt="Ios" className={downloadImgStyle + ` mr-[2rem] `} />
            <img src={android} alt="android" className={downloadImgStyle} />
        </div>
    </div>
  )
}

export default DownloadAds