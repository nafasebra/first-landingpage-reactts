import { ChangeEvent, useEffect, useState } from "react";

function ThemeSwitcher() {
  const [checked, setChecked] = useState<string>(
    localStorage.getItem("theme") + "" || ""
  );

  const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    if (checked === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");

    localStorage.setItem("theme", checked);
  }, [checked]);

  return (
    <label
      htmlFor="toggleTheme"
      className="flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id="toggleTheme"
        checked={checked === "dark" ? true : false}
        onChange={(e) => changeTheme(e)}
        className="sr-only peer"
      />
      <div className="w-11 h-6 text-black flex items-center justify-between dark:text-white bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <svg
          className="w-4 h-4 mr-1 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
    </label>
  );
}

export default ThemeSwitcher;
