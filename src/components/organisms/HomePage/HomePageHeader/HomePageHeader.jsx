// GENERAL
import { useState } from "react"


// COMPONENTS
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Field } from "../../../atoms/Field.styled"
import { Title } from "../../../atoms/Title.styled"
import { HomePageHeaderWrapper } from "./HomePageHeader.styled"

// FONT AWESOME


const HomePageHeader = () => {
  const [ipAddress, setIpAddress] = useState('');

  return (
    <HomePageHeaderWrapper>
        <Title size="30px" color="#FFF">IP Address Tracker</Title>

        <form className="form-control">
          <Field onChange={(event) => {setIpAddress(event.target.value); console.log(ipAddress)}} placeholder="Search for any IP Address" />
          <div className="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </form>
    </HomePageHeaderWrapper>
  )
}

export default HomePageHeader