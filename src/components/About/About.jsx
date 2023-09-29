import { Bio } from "/src/data/Bio";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section
      id="about"
      className=" flex scroll-mt-24 flex-col items-center justify-center"
    >
      <p className="mx-auto mb-4 rounded-md border border-slate-300 px-4 py-1 text-center text-xl lg:text-2xl">
        Hi! I&apos;d like
      </p>
      {/* <h1 className=" animate-typing mx-auto max-w-lg text-center text-6xl uppercase lg:max-w-3xl lg:text-8xl">
        To tell you about myself
      </h1> */}
      <h1 className="mx-auto mb-4 text-center uppercase tracking-widest">
        <TypeAnimation
          sequence={[
            "To tell you about myself", // Types 'One'
            1000, // Waits 1s
            "I am open-minded", // Deletes 'One' and types 'Two'
            1000,
            "I am highly adaptable ", // Types 'Three' without deleting 'Two'
            1000, // Waits 2s
            "I have great integrity",
            1000,
            "I have intense curiosity",
            1000,
            "",
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.25rem", display: "inline-block" }}
        />
      </h1>
      <img
        className="animate-zoom-fade-in h-40 w-40 rounded-full brightness-[1]  contrast-100 grayscale-[1]"
        src="/developer-anime.jpg"
        alt="a developer"
      />
      <div className="mt-8 max-w-4xl px-8 text-lg leading-8 lg:text-xl  ">
        <p className="indent-4">{Bio.desc}</p>
      </div>
    </section>
  );
};

export default About;
