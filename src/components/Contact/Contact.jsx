import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { bio } from "../../data/bio";
const Contact = () => {
  return (
    <div id="contact" className="max-w-full scroll-mt-24 px-8 lg:px-16">
      <h1 className="border-b border-slate-700  pb-2 text-3xl font-semibold uppercase tracking-wide dark:border-slate-300 lg:text-4xl">
        Contact me
      </h1>

      <section className=" grid grid-cols-1 lg:grid-cols-2 lg:space-x-8">
        <div className=" flex w-full items-center justify-center grayscale  ">
          <img src="/images/contact.png" alt="a contact iamge" />
        </div>

        <div>
          <p className=" pb-8 pt-4 text-2xl uppercase tracking-widest  lg:text-4xl ">
            Please email me or get in touch on social media
          </p>

          <Link
            onClick={(e) => {
              window.location.href = `mailto:${bio.contact.email}`;
              e.preventDefault();
            }}
            className="flex justify-between border-b border-slate-700 pb-2 pt-4 dark:border-slate-300"
          >
            <span className="text-2xl uppercase tracking-wider">Email</span>
            <AiOutlineMail className="text-4xl" />
          </Link>

          <Link
            target="_blank"
            to={bio.contact.github}
            className=" flex justify-between border-b border-slate-700 pb-2 pt-4 dark:border-slate-300"
          >
            <span className=" text-2xl uppercase tracking-wider">Github </span>
            <VscGithub className="text-4xl" />
          </Link>

          <Link
            target="_blank"
            to={bio.contact.linkedin}
            className="flex justify-between border-b border-slate-700 pb-2 pt-4 dark:border-slate-300"
          >
            <span className="text-2xl uppercase tracking-wider">LinkedIn </span>
            <AiOutlineLinkedin className="text-4xl" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
