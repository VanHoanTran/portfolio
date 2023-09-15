const Layout = ({ children }) => {
  return (
    <div className=" flex h-[100vh] flex-col bg-slate-100 text-slate-500 ">
      {children}
    </div>
  );
};

export default Layout;
