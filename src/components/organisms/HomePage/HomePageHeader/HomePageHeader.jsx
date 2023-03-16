// GENERAL
import { useState } from "react";

// API
import api from "../../../../services/api";

// COMPONENTS
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "../../../atoms/Field.styled";
import { Title } from "../../../atoms/Title.styled";
import { HomePageHeaderWrapper } from "./HomePageHeader.styled";

// FONT AWESOME

const HomePageHeader = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [data, setData] = useState();

  // FETCH API
  const handleIpSubmit = () => {
    console.log("teste");

    api
      .get(`${ipAddress}?access_key=${process.env.REACT_APP_ACCESS_KEY}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("ERRO");
      });
  };

  return (
    <HomePageHeaderWrapper>
      <Title size="30px" color="#FFF">
        IP Address Tracker
      </Title>

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
