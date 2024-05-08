import React, { useRef } from "react";
import me from "../assets/img/Adossi.svg";
import { aboutMeData } from "../assets/lib/data";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";

const AboutMe: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const { ref } = useSectionInView("About me");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  const paragraphs =
    language === "FR" ? aboutMeData.paragraphs_FR : aboutMeData.paragraphs_EN;

  return (
    <React.Fragment>
      <section className="about-me relative mt-16 " id="about-me" ref={ref}>
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "left",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-orange">&lt;</span>
              {language === "FR" ? aboutMeData.title : aboutMeData.title_EN}
              <span className="text-orange">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center max-lg:text-left break-words">
              {language === "FR"
                ? aboutMeData.description
                : aboutMeData.description_EN}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center gap-6 items-center pl-32 pr-32 mb-16  max-lg:flex-col max-lg:p-16 min-[1921px]:px-[45rem] min-[1921px]:mb-48">
          <article className="pl-60 max-lg:p-0">
            <img src={me} alt={me} loading="lazy"/>
          </article>
          <Swiper
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-1/2 pt-32 relative z-2 pr-20 pb-32 pl-20 max-lg:w-full max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0 min-[1921px]:w-1/2"
          >
            {paragraphs.map((paragraph, index) => (
              <SwiperSlide
                className="bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all text-left max-lg:p-10 cursor-grab"
                key={index}
              >
                <div className="flex gap-6 flex-row justify-start items-center max-lg:flex-col max-lg:justify-center max-lg:text-center ">
                  <div>
                    <img
                      src={paragraph.icon}
                      alt={paragraph.icon}
                      className="w-24"
                    />
                  </div>
                  <div>
                    <h2>{paragraph.title}</h2>
                  </div>
                </div>
                <div className="flex flex-row gap-10 max-lg:flex-col">
                  <div className="flex flex-col gap-4 items-center justify-between -mt-10 -mb-10 max-lg:flex-row max-lg:m-0">
                    <p className="text-white">
                      <span className="text-orange"></span>
                      <span className="text-orange"></span>
                    </p>
                    <div className="flex justify-between items-center w-1 h-[100%] max-lg:flex-row max-lg:w-[10rem]  max-lg:bg-lightblue">
                      <div></div>
                      <div className="w-[0.5rem] bg-[--lightblue] h-[100%] max-lg:w-10  max-lg:bg-lightblue max-lg:h-[0.25rem]"></div>
                      <div></div>
                    </div>
                    <p className="text-white">
                      <span className="text-orange"></span>
                      <span className="text-orange"></span>
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-4xl">
                      {paragraph.title === "Parcours Académique" || paragraph.title === "Academic background" ? (
                        <>
                          {paragraph.description}
                          <br />
                          <a href="https://www.isga.ma/" target="_blank" className="link">
                            ISGA(Institut Supérieur d'Ingénierie et des Affaires) Rabat-Morocco
                          </a>
                        </>
                      ) : (
                        paragraph.title === "Parcours Professionnel" || paragraph.title === "Career paths" ? (
                          <>
                            {paragraph.description}
                            <br />
                            <a href="https://www.linkedin.com/company/mauna-kea-consulting-uk/mycompany/?viewAsMember=true" target="_blank" className="link">
                              Mauna Kea Consulting LinkedIn
                            </a>
                          </>
                        ) : (
                          <>
                            {paragraph.description}
                            <a href="https://learn.microsoft.com/api/credentials/share/en-us/QuoamitresorkaletoADOSSI-2158/D41EE25637E5E015?sharingId=D18AA02016E9341B" target="_blank" className="link">
                              Microsoft Certified: Fabric Analytics Engineer Associate
                            </a>
                            <br />
                            <br />
                            <a href="https://learn.microsoft.com/api/credentials/share/en-us/QuoamitresorkaletoADOSSI-2158/730F1F121A793929?sharingId=D18AA02016E9341B" target="_blank" className="link">
                              Azure Data Fundamentals
                            </a>
                            <br />
                            <br />
                            <a href="https://learn.microsoft.com/api/credentials/share/en-us/QuoamitresorkaletoADOSSI-2158/B35437343A5E9BB4?sharingId=D18AA02016E9341B" target="_blank" className="link">
                              Microsoft Certified: Power BI Data Analyst Associate
                            </a>
                          </>     
                        )
                      )}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div
              className="autoplay-progress absolute right-0 bottom-0 z-10 flex items-center justify-center font-bold text-orange text-4xl w-24 h-24 max-lg:w-16 max-lg:h-16 max-lg:text-3xl "
              slot="container-end"
            >
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;
