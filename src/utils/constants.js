export const BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/6e7c7e50-8c62-42e8-81e5-41b2d7740d67/RO-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const PROFILE_PIC =
  "https://avatars.githubusercontent.com/u/40199080?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const POSTER_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "ro", name: "Română" },
  { identifier: "fr", name: "Français" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
