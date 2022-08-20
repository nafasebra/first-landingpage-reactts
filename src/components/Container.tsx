type props = {
  children: JSX.Element | JSX.Element[] | String;
};

function Container({ children }: props) {
  return (
    <div className="select-none z-10 min-h-[100vh] flex flex-col justify-between w-[90%] md:w-[670px] mx-auto px-1">
      {children}
    </div>
  );
}

export default Container;
