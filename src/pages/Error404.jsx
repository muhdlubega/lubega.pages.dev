import ghost from "../assets/ghost.gif";

const Error404 = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center h-screen w-full bg-black">
      <img src={ghost} alt="error-404" />
      <p className="text-teal-300 text-6xl font-bold">Error 404</p>
      <p className="text-teal-300 text-xl my-4 text-center">
        Looks like this page does not exist. Try something else?
      </p>
    </div>
  );
};

export default Error404;
