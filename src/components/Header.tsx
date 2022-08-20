import image from "../assets/illustration-dashboard.png";
import Form from "./Form";

function Header() {
  return (
    <header className="text-center py-5 md:py-14">
      <h1 className="text-xl md:text-4xl dark:text-white">
        We are launching <span className="font-extrabold">soon!</span>
      </h1>
      <p className="text-sm md:text-lg py-5 text-gray-500 dark:text-white">
        Subscribe and get motified
      </p>

      <Form />

      <img
        src={image}
        alt="the dashboard image"
        className="w-[90%] md:w-[80%] mx-auto mt-10"
      />
    </header>
  );
}

export default Header;
