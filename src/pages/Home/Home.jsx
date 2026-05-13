import React, { useEffect, useMemo } from "react";

import { useTranslation } from "../../hooks/useTranslation";
import { useReveal } from "../../hooks/useReveal";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useTheme } from "../../hooks/useTheme";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";

import Button from "../../components/Button/Button";
import HeroTyping from "../../components/HeroTyping/HeroTyping";

import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import experience from "../../data/experience.json";

import avatarUrl from "../../assets/images/avatar.jpg";
import resumeUrl from "../../assets/resume/resume.pdf";

import project1Url from "../../assets/projects/project1.jpg";
import project2Url from "../../assets/projects/project2.jpg";
import project3Url from "../../assets/projects/project3.jpg";
import project4Url from "../../assets/projects/project4.png";
import project5Url from "../../assets/projects/project5.jpg";

import "./home.css";

export default function Home() {
  const { t, lang, setLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  useReveal();

  const sectionIds = useMemo(
    () => [
      "home",
      "about",
      "skills",
      "projects",
      "resume",
      "work-experience",

      "contact",
    ],
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [sectionIds]);

  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bb-home">
      <Navbar
        t={t}
        lang={lang}
        setLanguage={setLanguage}
        activeSection={activeSection}
        onNav={onNav}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="bb-main">
        <section id="home" className="bb-section bb-hero" aria-label="Hero">
          <div className="bb-heroAbstract" aria-hidden="true">
            <i />
            <u />
            <em />
          </div>

          <div className="bb-container">
            <div className="bb-heroGrid">
              <div className="bb-heroCopy" data-reveal>
                <div className="bb-kicker">
                  {t("hero_typing_prefix")} <HeroTyping t={t} />
                </div>

                <h1 className="bb-heroTitle">{t("hero_name")}</h1>
                <div className="bb-heroRole">
                  <span style={{ display: "inline" }}>{t("hero_title")}</span>
                </div>

                <p className="bb-heroTag">{t("hero_tagline")}</p>

                <div className="bb-heroCtas">
                  <Button
                    variant="primary"
                    onClick={() => onNav("projects")}
                    ariaLabel={t("cta_view_projects")}
                  >
                    <span aria-hidden="true">⚡</span>
                    {t("cta_view_projects")}
                  </Button>

                  <Button
                    variant="secondary"
                    as="a"
                    href={resumeUrl}
                    download
                    ariaLabel={t("cta_download_resume")}
                  >
                    <span aria-hidden="true">⬇️</span>
                    {t("cta_download_resume")}
                  </Button>
                </div>

                <div className="bb-heroMeta">
                  <a className="bb-iconLink" href="#" aria-label="GitHub">
                    <img
                      alt="GitHub"
                      width={16}
                      height={16}
                      style={{ display: "block" }}
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    />
                  </a>
                  <a className="bb-iconLink" href="#" aria-label="LinkedIn">
                    <img
                      alt="LinkedIn"
                      width={16}
                      height={16}
                      style={{ display: "block" }}
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    />
                  </a>
                  <a
                    className="bb-iconLink"
                    href="mailto:your@email.com"
                    aria-label="Email"
                  >
                    <img
                      alt="Email"
                      width={16}
                      height={16}
                      style={{ display: "block" }}
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mail/mail-original.svg"
                    />
                  </a>
                </div>
              </div>

              <div className="bb-heroArt" data-reveal>
                <div className="bb-avatarWrap">
                  <img
                    className="bb-avatar"
                    src={avatarUrl}
                    alt="Profile avatar"
                    loading="lazy"
                  />
                </div>
                <div className="bb-heroCard">
                  <div className="bb-heroCardLine">55+ Projects</div>
                  <div className="bb-heroCardLine">15+ Skills</div>
                  <div className="bb-heroCardLine">Premium UI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bb-section" aria-label="About">
          <div className="bb-container">
            <div className="bb-sectionHead" data-reveal>
              <h2 className="bb-h2">{t("about_heading")}</h2>
            </div>
            <p className="bb-p" data-reveal>
              {t("about_intro")}
            </p>
            <p className="bb-p bb-pMuted" data-reveal>
              {t("about_summary")}
            </p>
          </div>
        </section>

        <section
          id="work-experience"
          className="bb-section"
          aria-label="Work Experience"
        >
          <div className="bb-container">
            <div className="bb-sectionHead" data-reveal>
              <h2 className="bb-h2">{t("work_experience_heading")}</h2>
            </div>

            <div className="bb-workTimeline">
              {experience.map((exp, idx) => {
                const from = exp.start;
                const to = exp.end;

                return (
                  <article
                    key={exp.id}
                    className="bb-workTimelineItem"
                    data-reveal
                    style={{
                      // eslint-disable-next-line react/prop-types
                      ["--timeline-delay"]: `${idx * 120}ms`,
                    }}
                  >
                    <div className="bb-workTimelineRail" aria-hidden="true" />

                    <div className="bb-workTimelineDotWrap" aria-hidden="true">
                      <span className="bb-workTimelineDot" />
                    </div>

                    <div className="bb-workTimelineCard">
                      <div className="bb-workTimelineTop">
                        <div className="bb-workRole">{exp.role}</div>
                        <div className="bb-workCompany">{exp.company}</div>
                      </div>

                      <div className="bb-workMeta">
                        <span>{exp.location}</span>
                        <span>·</span>
                        <span>{exp.workMode}</span>
                      </div>

                      <div className="bb-workTimelineDates">
                        <span>{from}</span>
                        <span className="bb-workTimelineDatesSep">→</span>
                        <span>{to}</span>
                      </div>

                      <p className="bb-workTimelineSummary">
                        {exp.highlights?.[0] ?? ""}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="bb-section" aria-label="Skills">
          <div className="bb-container">
            <div className="bb-sectionHead" data-reveal>
              <h2 className="bb-h2">{t("skills_heading")}</h2>
            </div>

            <div className="bb-skillGrid">
              {Object.entries(skills).map(([group, list]) => (
                <div key={group} className="bb-skillGroup" data-reveal>
                  <div className="bb-skillGroupTitle">{group}</div>
                  <div className="bb-pillRow">
                    {list.map((s) => (
                      <span
                        key={s.name}
                        className="bb-pill bb-pill--skill"
                        style={{
                          // eslint-disable-next-line react/prop-types
                          ["--skill-accent"]: s.color,
                        }}
                        aria-label={s.name}
                      >
                        <span className="bb-pillLogo" aria-hidden="true">
                          <img
                            alt=""
                            width={14}
                            height={14}
                            style={{ display: "block" }}
                            src={
                              s.logo === "react"
                                ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                : s.logo === "ts"
                                  ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                  : s.logo === "js"
                                    ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                    : s.logo === "html"
                                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                      : s.logo === "css"
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                        : s.logo === "node"
                                          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                          : s.logo === "express"
                                            ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                            : s.logo === "mongo"
                                              ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                              : s.logo === "mysql"
                                                ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                                : s.logo === "postgres"
                                                  ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                                                  : s.logo === "git"
                                                    ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                                    : s.logo === "vscode"
                                                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudiocode/visualstudiocode-original.svg"
                                                      : s.logo === "figma"
                                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                                                        : s.logo === "postman"
                                                          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                                                          : s.logo === "vercel"
                                                            ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
                                                            : s.logo ===
                                                                "netlify"
                                                              ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
                                                              : s.logo ===
                                                                  "gh-pages"
                                                                ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubpages/githubpages-original.svg"
                                                                : s.logo ===
                                                                    "docker"
                                                                  ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                                                                  : s.logo ===
                                                                      "github"
                                                                    ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                                                    : s.logo ===
                                                                        "tailwind"
                                                                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                                                                      : s.logo ===
                                                                          "chakra"
                                                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chakra/chakra-plain.svg"
                                                                        : s.logo ===
                                                                            "axios"
                                                                          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg"
                                                                          : s.logo ===
                                                                              "next"
                                                                            ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                                                            : s.logo ===
                                                                                "wordpress"
                                                                              ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                                                                              : s.logo ===
                                                                                  "woocommerce"
                                                                                ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg"
                                                                                : s.logo ===
                                                                                    "api"
                                                                                  ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original.svg"
                                                                                  : s.logo ===
                                                                                      "jwt"
                                                                                    ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg"
                                                                                    : s.logo ===
                                                                                        "bcrypt"
                                                                                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bcrypt/bcrypt-original.svg"
                                                                                      : s.logo ===
                                                                                          "cloudinary"
                                                                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudinary/cloudinary-original.svg"
                                                                                        : s.logo ===
                                                                                            "multer"
                                                                                          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/multer/multer-original.svg"
                                                                                          : s.logo ===
                                                                                              "aws"
                                                                                            ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                                                                                            : s.logo ===
                                                                                                "stripe"
                                                                                              ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg"
                                                                                              : s.logo ===
                                                                                                  "mongoose"
                                                                                                ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                                                                                : s.logo ===
                                                                                                    "cloudflare"
                                                                                                  ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg"
                                                                                                  : s.logo
                            }
                          />
                          <span style={{ display: "none" }}>{s.logo}</span>
                        </span>
                        <span className="bb-pillText">{s.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bb-section" aria-label="Projects">
          <div className="bb-container">
            <div className="bb-sectionHead" data-reveal>
              <h2 className="bb-h2">{t("projects_heading")}</h2>
            </div>

            <div className="bb-projectGrid">
              {projects.map((p) => {
                const imageByKey = {
                  project1: project1Url,
                  project2: project2Url,
                  project3: project3Url,
                  project4: project4Url,
                  project5: project5Url,
                };

                const projectImg = imageByKey[p.image] ?? "";

                return (
                  <article key={p.id} className="bb-projectCard" data-reveal>
                    <img
                      className="bb-projectImg"
                      src={projectImg}
                      alt={`${p.title} thumbnail`}
                      loading="lazy"
                    />
                    <div className="bb-projectBody">
                      <div className="bb-projectTitle">{p.title}</div>
                      <p className="bb-projectDesc">{p.description}</p>
                      <div className="bb-tagRow">
                        {p.techStack.map((tag) => (
                          <span key={tag} className="bb-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="bb-projectLinks">
                        <a
                          className="bb-linkIcon"
                          href={p.githubUrl}
                          aria-label={`${p.title} GitHub`}
                        >
                          GH
                        </a>
                        <a
                          className="bb-linkIcon"
                          href={p.liveUrl}
                          aria-label={`${p.title} Live demo`}
                        >
                          Live
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="resume" className="bb-section" aria-label="Resume">
          <div className="bb-container">
            <div className="bb-sectionHead" data-reveal>
              <h2 className="bb-h2">{t("resume_heading")}</h2>
            </div>

            <div className="bb-resumeCard" data-reveal>
              <div className="bb-resumeTitle">Resume Preview</div>
              <div className="bb-resumeCopy">
                Download to view full details.
              </div>
              <div className="bb-resumeActions">
                <Button
                  as="a"
                  variant="primary"
                  href={resumeUrl}
                  download
                  ariaLabel="Download Resume"
                >
                  {t("cta_download_resume")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bb-section bb-contact"
          aria-label="Contact"
        >
          <div className="bb-container">
            <div className="bb-sectionHead" data-reveal>
              <h2 className="bb-h2">{t("contact_heading")}</h2>
            </div>

            <div className="bb-contactGrid">
              <div className="bb-contactCopy" data-reveal>
                <div className="bb-contactMeta">
                  Email:{" "}
                  <a href="mailto:gparmar54linkedin@gmail.com">
                    gparmar54linkedin@gmail.com
                  </a>
                </div>
                <div className="bb-contactMeta">
                  Github:
                  <a href="https://github.com/gautam-parmar-ai">
                    {" "}
                    https://github.com/gautam-parmar-ai
                  </a>
                </div>
                <div className="bb-contactMeta">
                  LinkedIn:{" "}
                  <a href="https://www.linkedin.com/in/gautam-parmar-728a381ba/">
                    https://www.linkedin.com/in/gautam-parmar-728a381ba/
                  </a>
                </div>
                <div className="bb-contactMeta">Location: Verona,Italy</div>
              </div>

              <form
                className="bb-form"
                onSubmit={(e) => e.preventDefault()}
                data-reveal
              >
                <label className="bb-label">
                  {t("contact_name")}
                  <input className="bb-input" name="name" required />
                </label>
                <label className="bb-label">
                  {t("contact_email")}
                  <input
                    className="bb-input"
                    type="email"
                    name="email"
                    required
                  />
                </label>
                <label className="bb-label">
                  {t("contact_subject")}
                  <input className="bb-input" name="subject" required />
                </label>
                <label className="bb-label">
                  {t("contact_message")}
                  <textarea
                    className="bb-textarea"
                    name="message"
                    required
                    minLength={20}
                  />
                </label>

                <Button
                  variant="primary"
                  type="submit"
                  ariaLabel={t("contact_send")}
                >
                  {t("contact_send")}
                </Button>
              </form>
            </div>
          </div>
        </section>

        <Footer t={t} name={t("hero_name")} onNav={onNav} />
      </main>

      <BackToTop />
    </div>
  );
}
