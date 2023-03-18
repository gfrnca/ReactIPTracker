// GENERAL
import { useState } from "react";

// API
import api from "../../../../services/api";

// COMPONENTS
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "../../../atoms/Field.styled";
import { BoldTitle } from "../../../atoms/Title.styled";
import { HomePageHeaderWrapper } from "./HomePageHeader.styled";

// FONT AWESOME

const HomePageHeader = (props) => {
  const [ipAddress, setIpAddress] = useState("");
  const [data, setData] = useState();

  // FETCH API
  const handleIpSubmit = () => {
    api
      .get(`${ipAddress}/json`)
      .then((response) => {
        {
          props.handleData(response.data);
        }

        console.log(response.data);
      })
      .catch((err) => {
        return;
      });
  };

  return (
    <HomePageHeaderWrapper>
      <BoldTitle size="30px" color="#FFF">
        IP Address Tracker
      </BoldTitle>

      <form className="form-control">
        <Field
          onChange={(event) => setIpAddress(event.target.value)}
          placeholder="Search for any IP Address"
        />
        <div className="submit" onClick={handleIpSubmit}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </form>
    </HomePageHeaderWrapper>
  );
};

export default HomePageHeader;
