import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GptSearchBar = () => {
  const userLang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[userLang].searchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button className="p-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[userLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
