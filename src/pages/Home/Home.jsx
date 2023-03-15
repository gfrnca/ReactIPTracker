// GENERAL
import { useEffect, useState } from "react"
import HomePageTemplate from "../../components/templates/HomePageTemplate/HomePageTemplate";
import api from "../../services/api";

const Home = () => {
  const [data, setData] = useState();

  // FETCH API
  useEffect(() => {
    api
      .get(`${''}?access_key=${process.env.REACT_APP_ACCESS_KEY}`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ERRO")
      });

      console.log(data)
  }, [])

  return (
    <HomePageTemplate />
  )
}

export default Home