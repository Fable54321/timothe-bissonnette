import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Projects.module.css";
import project1 from "../../../assets/first-project.png";
import project1Mobile from "../../../assets/first-project--mobile.png";
import project2 from "../../../assets/second-project.png";
import project2Mobile from "../../../assets/second-project--916.png";
import project3 from "../../../assets/third-project.png";
import project3Mobile from "../../../assets/third-project--916.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const [midIndex, setMidIndex] = useState(0);
  const [buttonAnimationTrigger, setButtonAnimationTrigger] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 70em)",
  });

  const changeContent = () => {
    setButtonAnimationTrigger(true);
    setMidIndex(midIndex === 2 ? 0 : midIndex + 1);

    setTimeout(() => setButtonAnimationTrigger(false), isMobile ? 4000 : 2100);
  };

  console.log(buttonAnimationTrigger);

  return (
    <section className={styles["projects"]}>
      <div className={styles["projects__wrapper"]}>
        <div
          className={
            midIndex === 0
              ? styles["projects__card--top"]
              : midIndex === 1
              ? styles["projects__card--mid"]
              : styles["projects__card--bottom"]
          }
        >
          <div className={styles["projects__card-inner"]}>
            <img
              className={styles["projects__card-inner__img"]}
              src={!isMobile ? project2Mobile : project2}
              alt="an image reprensenting the displayed project"
            />
            <div className={styles["projects__card-inner__content-wrapper"]}>
              <h3 className={styles["projects__card-inner__title"]}>
                FAQ <br /> Accordion
              </h3>
              <div className={styles["projects__card-inner__links-wrapper"]}>
                <Link
                  className={styles["projects__card-inner__link"]}
                  to="https://accordion-faq-tim.netlify.app//"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="a live preview of my faq accordion web app"
                >
                  Live preview
                </Link>
                <Link
                  className={styles["projects__card-inner__link"]}
                  to="https://github.com/Fable54321/accordion-faq-tim"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="a link to the github repo of my faq accordion web app"
                >
                  Github repo
                </Link>
              </div>
              <Link
                to="/#contact"
                className={styles["projects__card-inner__other-projects-link"]}
              >
                Other projects/ Contact me
              </Link>
              <button
                className={styles["projects__button"]}
                onClick={changeContent}
                style={{
                  animation: buttonAnimationTrigger ? "" : "none",
                  visibility: midIndex === 1 ? "visible" : "hidden",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className={styles["projects__button__icon"]}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            midIndex === 0
              ? styles["projects__card--mid"]
              : midIndex === 1
              ? styles["projects__card--bottom"]
              : styles["projects__card--top"]
          }
        >
          <div className={styles["projects__card-inner"]}>
            <img
              className={styles["projects__card-inner__img"]}
              src={!isMobile ? project1Mobile : project1}
              alt="an image reprensenting the displayed project"
            />
            <div className={styles["projects__card-inner__content-wrapper"]}>
              <h3 className={styles["projects__card-inner__title"]}>
                Time Tracking <br /> Dashboard
              </h3>
              <div className={styles["projects__card-inner__links-wrapper"]}>
                <Link
                  className={styles["projects__card-inner__link"]}
                  to="https://time-tracking-dashboard-tim.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="a live preview of my time tracking dashboard web app"
                >
                  Live preview
                </Link>
                <Link
                  className={styles["projects__card-inner__link"]}
                  to="https://github.com/Fable54321/time-tracking-dashboard-tim"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="a link to the github repo of my time tracking dashboard web app"
                >
                  Github repo
                </Link>
              </div>
              <Link
                to="/#contact"
                className={styles["projects__card-inner__other-projects-link"]}
              >
                Other projects/ Contact me
              </Link>
              <button
                className={styles["projects__button"]}
                onClick={changeContent}
                style={{
                  animation: buttonAnimationTrigger ? "" : "none",
                  visibility: midIndex === 0 ? "visible" : "hidden",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className={styles["projects__button__icon"]}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            midIndex === 0
              ? styles["projects__card--bottom"]
              : midIndex === 1
              ? styles["projects__card--top"]
              : styles["projects__card--mid"]
          }
        >
          <div className={styles["projects__card-inner"]}>
            <img
              className={styles["projects__card-inner__img"]}
              src={!isMobile ? project3Mobile : project3}
              alt="an image reprensenting the displayed project"
            />
            <div className={styles["projects__card-inner__content-wrapper"]}>
              <h3 className={styles["projects__card-inner__title"]}>
                Frontend <br /> Quiz
              </h3>
              <div className={styles["projects__card-inner__links-wrapper"]}>
                <Link
                  className={styles["projects__card-inner__link"]}
                  to="https://front-end-quiz-tim.netlify.app//"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="a live preview of my frontend quiz web app"
                >
                  Live preview
                </Link>
                <Link
                  className={styles["projects__card-inner__link"]}
                  to="https://github.com/Fable54321/front-end-quiz-tim"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="a link to the github repo of my frontend quiz web app"
                >
                  Github repo
                </Link>
              </div>
              <Link
                to="/#contact"
                className={styles["projects__card-inner__other-projects-link"]}
              >
                Other projects/ Contact me
              </Link>
              <button
                className={styles["projects__button"]}
                onClick={changeContent}
                style={{
                  animation: buttonAnimationTrigger ? "" : "none",
                  visibility: midIndex === 2 ? "visible" : "hidden",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className={styles["projects__button__icon"]}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
