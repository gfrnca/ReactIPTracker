// GENERAL
import { useState, useEffect } from "react";

// COMPONENTS
import { HomePageIpContentWrapper } from "./HomePageIpContent.styled";
import { BoldTitle } from "../../../atoms/Title.styled";

const HomePageIpContent = (props) => {
  console.log(props);

  return (
    <>
      <HomePageIpContentWrapper>
        <div className="ip-info">
          <BoldTitle size="20px">IP Address</BoldTitle>
          <p>{props.ip}</p>
        </div>
        <div className="ip-info">
          <BoldTitle size="20px">Location</BoldTitle>
          <p>{props.city}</p>
          <p>{props.country}</p>
        </div>
      </HomePageIpContentWrapper>
    </>
  );
};

export default HomePageIpContent;
