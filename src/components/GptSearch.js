import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptRecommendedMovie from "./GptRecommendedMovie";
import { AppBg_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={AppBg_URL} alt="bg pic" />
      </div>
      <GptSearchBar />
      <GptRecommendedMovie />
    </div>
  );
};

export default GptSearch;
