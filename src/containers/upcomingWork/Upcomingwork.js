import React, { useContext } from "react";
import "./Upcomingwork.scss";
import { upcomingWork } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function UpcomingWork() {
    const { isDark } = useContext(StyleContext);
    if (!upcomingWork.display) {
        return null;
    }
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="upcoming-work">
                <div className="upcoming-work-main-div">
                    <div className="upcoming-work-header">
                        <h1
                            className={
                                isDark
                                    ? "dark-mode upcoming-work-heading"
                                    : "upcoming-work-heading"
                            }
                        >
                            {upcomingWork.title}
                        </h1>
                        <p
                            className={
                                isDark
                                    ? "dark-mode upcoming-work-subtitle"
                                    : "subTitle upcoming-work-subtitle"
                            }
                        >
                            {upcomingWork.subtitle}
                        </p>
                    </div>
                    <div className="upcoming-work-body-div">
                        {upcomingWork.projects.map((project, i) => {
                            return (
                                <div
                                    className={
                                        isDark
                                            ? "dark-mode upcoming-work-card"
                                            : "upcoming-work-card"
                                    }
                                    key={i}
                                >
                                    <div className="upcoming-work-image-div">
                                        <img
                                            src={project.image}
                                            alt={project.imageAlt}
                                            className="upcoming-work-card-image"
                                        ></img>
                                    </div>
                                    <div className="upcoming-work-detail-div">
                                        <h5
                                            className={
                                                isDark
                                                    ? "dark-mode upcoming-work-card-title"
                                                    : "upcoming-work-card-title"
                                            }
                                        >
                                            {project.title}
                                        </h5>
                                        <p
                                            className={
                                                isDark
                                                    ? "dark-mode upcoming-work-card-subtitle"
                                                    : "upcoming-work-card-subtitle"
                                            }
                                        >
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <div className="upcoming-work-card-footer">
                                        {project.footerLink
                                            ? project.footerLink.map((link, i) => {
                                                return (
                                                    <span
                                                        key={i}
                                                        className={
                                                            isDark
                                                                ? "dark-mode upcoming-work-tag"
                                                                : "upcoming-work-tag"
                                                        }
                                                        onClick={() => window.open(link.url, "_blank")}
                                                    >
                                                        {link.name}
                                                    </span>
                                                );
                                            })
                                            : null}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
}