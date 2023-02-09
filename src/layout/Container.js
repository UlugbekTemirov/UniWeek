const Container = ({ children, className }) => {
  return (
    <div
      id="container"
      className={`max-w-[1280px] container mx-auto px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
