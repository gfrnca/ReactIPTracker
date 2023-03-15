// GENERAL
import { useEffect } from "react"
import api from "../../services/api";

const Home = () => {
  useEffect(() => {
    api
      .get("187.109.40.194" + "?access_key=6f4f49b9af96be8c86cbf0f96c9e058b")
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ERRO")
      });
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home