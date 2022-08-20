import { FormEvent, useState } from "react";

function Form() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const SubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || regex.test(email) === false) {
      setError("Email is Invalid!");
    } else {
      setError("");
      alert(email);
      setEmail("");
    }
  };

  return (
    <form action="" className="py-5" onSubmit={(e) => SubmitForm(e)}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-[90%] md:w-[65%] mb-0 md:-mb-[29px]">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              error !== "" ? "border-red-600" : "border-gray-500"
            } select-all w-full placeholder:text-gray-500 rounded-full py-3 px-6 bg-transparent dark:text-white`}
            placeholder="Your email address..."
          />
          <p className="text-left h-7 pt-1 text-sm pl-5 text-red-600">
            {error}
          </p>
        </div>
        <button
          type="submit"
          className="w-[90%] md:w-[30%] py-3 px-6 bg-blue text-white hover:opacity-70 rounded-full mx-auto shadow-xl shadow-light-blue"
        >
          Notify me
        </button>
      </div>
    </form>
  );
}

export default Form;
