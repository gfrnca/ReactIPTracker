// GENERAL
import { useState, useEffect } from "react"

// COMPONENTS
import HomePageHeader from "../../organisms/HomePage/HomePageHeader/HomePageHeader"

// API
import api from "../../../services/api";

const HomePageTemplate = () => {
  const [data, setData] = useState();

  // FETCH API
  useEffect(() => {
    api
      .get(`${''}?access_key=${process.env.REACT_APP_ACCESS_KEY}`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ERRO")
      });
  }, [])

  return (
    <HomePageHeader />
  )
}

export default HomePageTemplate