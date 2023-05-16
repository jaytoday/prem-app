import Header from "./headers/Header";
import WarningLogo from "../../assets/images/warning.svg";
import commentInfo from "../../assets/images/comment-info.svg";
import appleLogo from "../../assets/images/apple.svg";

type DownloadDockerWall = {
  handleCheckIsDockerRunning: () => void;
};

const DownloadDockerWall = ({
  handleCheckIsDockerRunning,
}: DownloadDockerWall) => {
  return (
    <section className="docker-not-detected flex flex-wrap bg-lines relative">
      <Header />
      <div className="flex items-center w-full modal-height">
        <div className="docker-modal-wrap mx-auto md:max-w-[600px] max-w-[350px] w-full rounded-xl">
          <div className="docker-not-detected__modal rounded-xl p-[18px]">
            <div className="max-w-[450px] mx-auto relative z-10">
              <img
                className="mx-auto w-[109px] h-[109px] mt-[30px]"
                src={WarningLogo}
                alt="WarningLogo"
              />
              <div className="text-center mx-auto mt-5">
                <h1 className="text-2xl dark:text-brightgray">
                  Docker not Detected
                </h1>
                <p className="dark:text-brightgray text-[18px] font-proximaNova-regular mt-4">
                  In order to run Prem App you need to have <br /> Docker
                  installed and running.
                </p>
              </div>
              <div>
                <a
                  className="btn bg-americanpink font-proximaNova-regular py-3 px-[22px] my-[49px] rounded-md flex mx-auto max-w-[280px]"
                  href="https://www.docker.com/products/docker-desktop/"
                  target="_blank"
                >
                  <img className="mr-3" src={appleLogo} alt="appleLogo" />
                  Download Docker Desktop
                </a>
              </div>
              <div>
                <h3 className="text-[20px]">Dependencies</h3>
                <div className="flex mt-4">
                  <p className="w-full text-[#CFCFCF] text-base">Docker</p>
                  <p className="text-[#2ED291] text-base">&#10003;&nbsp;Found</p>
                  {/* <p className="text-[#F9B96D] text-base flex items-center whitespace-nowrap">
                    <button className="mr-3 w-4 h-5 tooltip">
                      <img src={commentInfo} alt="comment-info" />
                      <span className="tooltip-text">
                        In order to run Prem App you need to have <br/>
                        Docker installed and running.{" "}
                      </span>
                    </button>
                    Not Found
                  </p> */}
                </div>
              </div>
            </div>
            <hr className="border-t-2 -mx-[18px] opacity-50 mt-[70px] mb-4" />
            <div className="text-right">
              <button
                className="btn-outline"
                onClick={(e) => handleCheckIsDockerRunning()}
              >
                Check Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadDockerWall;