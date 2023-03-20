// GENERAL
import { useState, useEffect } from "react";

// COMPONENTS
import HomePageHeader from "../../organisms/HomePage/HomePageHeader/HomePageHeader";
import HomePageIpContent from "../../organisms/HomePage/HomePageIpContent/HomePageIpContent";

// CSS
import { HomePageTemplateWrapper } from "./HomePageTemplate.styled";

const HomePageTemplate = () => {
  const [ip, setIp] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [timezone, setTimezone] = useState("");

  function handleDataProps(data) {
    setIp(data.ip);
    setCity(data.city);
    setCountry(data.country_name);
    setTimezone(data.utc_offset);
  }

  return (
    <HomePageTemplateWrapper>
      <HomePageHeader handleData={handleDataProps} />
      <HomePageIpContent
        ip={ip}
        city={city}
        country={country}
        timezone={timezone}
      />
    </HomePageTemplateWrapper>
  );
};

export default HomePageTemplate;
