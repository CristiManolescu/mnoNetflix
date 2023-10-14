import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcommingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcommingMovies = useSelector((store) => store.movies.upcommingMovies);

  useEffect(() => {
    !upcommingMovies && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcommingMovies(json.results));
  };
};

export default useUpcomingMovies;
