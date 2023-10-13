import { useSelector } from "react-redux";
import lang from "../utils/langConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const userLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const fetchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Fast and Furious, Lord of the Rings, Equalizer, Nowhere, Forgotten Love";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => fetchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults, gptMovies);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[userLang].searchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="p-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[userLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
