const About = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <p className="mx-auto mb-4 rounded-md border border-slate-300 px-4 py-1 text-center text-xl lg:text-2xl">
        Hi! I&apos;d like
      </p>
      <h1 className=" mx-auto max-w-lg text-center text-6xl uppercase lg:max-w-3xl lg:text-8xl">
        To tell you about myself
      </h1>
      <img
        className="h-40 w-40 rounded-full brightness-[1] contrast-100 grayscale-[1] "
        src="/developer-anime.jpg"
        alt="a developer"
      />
      <div className="mt-8 flex justify-center space-x-8 px-8 [&_p]:max-w-xs [&_p]:text-lg [&_p]:leading-8 lg:[&_p]:text-xl  ">
        <p>
          Nulla malesuada pellentesque elit eget gravida cum sociis natoque
          penatibus. Porta nibh venenatis cras sed felis eget velit aliquet
          sagittis. Metus aliquam eleifend mi in nulla.
        </p>
        <p>
          Eget nunc lobortis mattis aliquam faucibus purus. Tempus urna et
          pharetra pharetra massa massa ultricies. Dictumst vestibulum rhoncus
          est pellentesque.
        </p>
      </div>
    </section>
  );
};

export default About;
