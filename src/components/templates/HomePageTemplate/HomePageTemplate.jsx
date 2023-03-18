// GENERAL
import { useState, useEffect } from "react";

// COMPONENTS
import HomePageHeader from "../../organisms/HomePage/HomePageHeader/HomePageHeader";

// API
import api from "../../../services/api";
import HomePageIpContent from "../../organisms/HomePage/HomePageIpContent/HomePageIpContent";
import { HomePageTemplateWrapper } from "./HomePageTemplate.styled";

const HomePageTemplate = () => {
  const [data, setData] = useState();

  useEffect(() => {});
  function handleDataProps(ipData) {
    setData(ipData);

    console.log(ipData);
  }

  return (
    <HomePageTemplateWrapper>
      <HomePageHeader handleData={handleDataProps} />
      <HomePageIpContent data={data} />
    </HomePageTemplateWrapper>
  );
};

export default HomePageTemplate;
