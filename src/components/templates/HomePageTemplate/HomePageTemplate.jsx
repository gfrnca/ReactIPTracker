// GENERAL
import { useState, useEffect } from "react";

// COMPONENTS
import HomePageHeader from "../../organisms/HomePage/HomePageHeader/HomePageHeader";

// API
import api from "../../../services/api";
import HomePageIpContent from "../../organisms/HomePage/HomePageIpContent/HomePageIpContent";
import { HomePageTemplateWrapper } from "./HomePageTemplate.styled";

const HomePageTemplate = () => {
  return (
    <HomePageTemplateWrapper>
      <HomePageHeader />
      <HomePageIpContent />
    </HomePageTemplateWrapper>
  );
};

export default HomePageTemplate;
