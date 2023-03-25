import React from "react";
import { Helmet } from "react-helmet";
import AllRecipes from "../../components/homepageSections/AllRecipes";
import MainSection from "../../components/homepageSections/MainSection";
import NewRecipes from "../../components/homepageSections/NewRecipes";

import "./home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kookkie</title>
      </Helmet>
      <div>
        <MainSection />
        <NewRecipes />
        <AllRecipes />
      </div>
    </>
  );
};

export default Home;
