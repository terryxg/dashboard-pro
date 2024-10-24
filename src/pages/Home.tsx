import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <p className="text-3xl">
        Go to{" "}
        <Link to="/dashboard" className="underline text-sky-600">
          Dashboard
        </Link>
      </p>
    </>
  );
};

export default Home;
