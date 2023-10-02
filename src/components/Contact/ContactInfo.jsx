import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { bio } from "../../data/bio";
import { VscGithub } from "react-icons/vsc";

const ContactInfo = () => {
  return (
    <>
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
    </>
  );
};

export default ContactInfo;
