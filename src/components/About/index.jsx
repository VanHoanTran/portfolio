// import { bio } from "../../data/bio";

const bio = {
  avatar: "/images/developer.jpg",
  author: "Van Hoan Tran",
  desc: "Hello world, I am Van Hoan Tran, a passionate front-end developer with a strong desire to expand my skills and evolve into a full-stack developer. I am excited about contributing to cutting-edge development projects. I have already gained valuable experience in building user-friendly and visually appealing web applications through my academic years, online courses, and personal projects. I also honed my skills in HTML, CSS, JavaScript, and frontend frameworks like React, and Angular.",
  contact: {
    email: "vanhoantranca@gmail.com",
    linkedin: "https://www.linkedin.com/in/vanhoantran/",
    github: "https://github.com/VanHoanTran",
  },
};
import { TypeAnimation } from "react-type-animation";

const personalities = [
  "To tell you about myself", // Types 'One'
  1000, // Waits 1s
  "I am open-minded", // Deletes and types 'I am open-minded'
  1000,
  "I am highly adaptable ", // Types 'highly adaptable' without deleting 'I am'
  1000, // Waits 1s
  "I have great integrity",
  1000,
  "I have intense curiosity",
  1000,
  "",
];

const About = () => {
  return (
    <section
      id="about"
      className=" flex scroll-mt-24 flex-col items-center justify-center"
    >
      <p className="mx-auto mb-4 rounded-md border border-slate-300 px-4 py-1 text-center text-xl lg:text-2xl">
        Hi! I&apos;d like
      </p>
      <h1 className="mx-auto mb-4 text-center uppercase tracking-widest">
        <TypeAnimation
          sequence={personalities}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.25rem", display: "inline-block" }}
        />
      </h1>
      <img
        className="h-40 w-40 animate-zoom-fade-in rounded-full grayscale"
        src={bio.avatar}
        alt="a developer"
      />
      <div className="mt-8 max-w-4xl px-8 text-lg leading-8 lg:text-xl">
        <p className="indent-4">{bio.desc}</p>
      </div>
    </section>
  );
};

export default About;
