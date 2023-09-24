import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="max-w-full px-8 lg:px-16">
      <h1 className="border-b border-slate-700  pb-2 text-3xl font-semibold uppercase tracking-wide dark:border-slate-300 lg:text-4xl">
        Contact me
      </h1>

      <section className=" grid grid-cols-1 lg:grid-cols-2 lg:space-x-8">
        <div>
          <div className="flex">
            <div className=" flex w-full items-center justify-center grayscale  ">
              <img src="/contact.png" alt="a contact iamge" />
            </div>
          </div>
        </div>
        <div>
          <p className=" pb-8 pt-4 text-4xl uppercase tracking-wider lg:text-6xl">
            Please email me or get in touch on social media
          </p>
          <div className=" flex justify-between border-b border-slate-700 pb-2 pt-4 dark:border-slate-300">
            <span className=" text-2xl uppercase tracking-wider">Github </span>
            <VscGithub className="text-4xl" />
          </div>
          <div className=" flex justify-between border-b border-slate-700 pb-2 pt-4 dark:border-slate-300">
            <span className="text-2xl uppercase tracking-wider">LinkedIn </span>
            <AiOutlineLinkedin className="text-4xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
