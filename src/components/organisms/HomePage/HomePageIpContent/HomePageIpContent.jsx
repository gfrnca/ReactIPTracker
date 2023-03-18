import { HomePageIpContentWrapper } from "./HomePageIpContent.styled";
import { BoldTitle } from "../../../atoms/Title.styled";

const HomePageIpContent = (props) => {
  console.log(props);
  return (
    <>
      <HomePageIpContentWrapper>
        <div className="ip-info">
          <BoldTitle size="20px">IP Address</BoldTitle>
          <p></p>
        </div>
        <div className="ip-info"></div>
        <div className="ip-info"></div>
        <div className="ip-info"></div>
      </HomePageIpContentWrapper>
    </>
  );
};

export default HomePageIpContent;
