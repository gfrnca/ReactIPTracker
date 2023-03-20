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
          {props.ip && <p>{props.ip}</p>}
        </div>

        <div className="ip-info">
          <BoldTitle size="20px">Location</BoldTitle>
          {props.city && (
            <>
              <p>{props.city}</p>
              <p>{props.country}</p>
            </>
          )}
        </div>

        <div className="ip-info">
          <BoldTitle size="20px">Timezone</BoldTitle>
          {props.timezone && <p>{props.timezone.slice(0, 3)}:00</p>}
        </div>
      </HomePageIpContentWrapper>
    </>
  );
};

export default HomePageIpContent;
