import { skills } from "@/utils/constant";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-16 lg:mb-30 lg:scroll-mt-16"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-justify">
          I started my professional career at{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.krishaweb.com/"
            target="_blank"
            rel="noreferrer"
          >
            Krishaweb Technologies
          </a>
          , tackling real-world problems with technology. Before my job, I
          completed a remote internship at {""}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.zeuslearning.com/"
            target="_blank"
            rel="noreferrer"
          >
            Zeus Learning
          </a>
          , which was a pivotal experience that enhanced my skills during my
          first year at Krishaweb Technologies. Lastly, I joined{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.tryspeed.com/"
            target="_blank"
            rel="noreferrer"
          >
            Speed
          </a>{" "}
          associated with{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.openxcell.com/"
            target="_blank"
            rel="noreferrer"
          >
            Openxcell - AI Development Company
          </a>{" "}
          in early 2022, and currently I am working in here Ahmedabad, Gujrat,
          India.
        </p>
        <p className="mb-4">
          I love sharing web development insights with the Dev Community on{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.linkedin.com/in/dev-sanyam/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://x.com/sanyamsjain"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>{" "}
          platform. Outside of work, I&apos;m an avid chess player—feel free to
          check out my profile on Chess:{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.chess.com/member/sanyam1699"
            target="_blank"
            rel="noreferrer"
          >
            Sanyam
          </a>
          .{" "}
        </p>{" "}
        <p className="mb-4 text-justify">
          {" "}
          Open to <b className="font-medium text-slate-200">part-time</b>,{" "}
          <b className="font-medium text-slate-200">contract</b> or{" "}
          <b className="font-medium text-slate-200">full time</b> roles where I
          can make a difference, grow, and keep evolving.
        </p>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
          Technical Skills
        </h2>
        <div>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {skills.map((skill) => (
              <li key={skill} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  {skill}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
