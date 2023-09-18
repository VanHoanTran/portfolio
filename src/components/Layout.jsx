const Layout = ({ children }) => {
  return (
    <div className=" h-[100vh] bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200 ">
      <div className=" mx-auto flex h-[100%] max-w-[1536px] flex-col">
        {children}
      </div>
    </div>
  );
};

export default Layout;
