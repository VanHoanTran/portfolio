import ContactInfo from "./ContactInfo";
const Contact = () => {
  return (
    <section id="contact" className="max-w-full scroll-mt-24 px-8 lg:px-16">
      <h1 className="border-b border-slate-700  pb-2 text-3xl font-semibold uppercase tracking-wide dark:border-slate-300 lg:text-4xl">
        Contact me
      </h1>

      <div className=" grid grid-cols-1 lg:grid-cols-2 lg:space-x-8">
        <div className=" flex w-full items-center justify-center grayscale  ">
          <img src="/images/contact.png" alt="a contact iamge" />
        </div>
        <div>
          <p className="pb-8 pt-4 text-2xl uppercase tracking-widest  lg:text-4xl ">
            Please email me or get in touch on social media
          </p>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
