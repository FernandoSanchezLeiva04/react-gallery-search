import axios from "axios";
import React from "react";
import { Results } from "../typing/main";

const useFetch = () => {
  const [data, setData] = React.useState({
    slug: "",
    results: {} as Results,
  });

  const [type, setType] = React.useState("photos")

  const baseUrl =
    type === "photos"
      ? "https://api.pexels.com/v1/search?query="
      : "https://api.pexels.com/videos/search?query=";

  React.useEffect(() => {
    if (data.slug !== "") {
      console.log(1);
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          console.log(2);
          try {
            const res = await axios.get(`${baseUrl}${data.slug}`, {
              headers: {
                Authorization: import.meta.env.VITE_PEXELS_API,
              },
            });
            setData({ ...data, results: res.data });
          } catch (error) {
            console.log(error);
          }
        };
        fetch();
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [data.slug]);

  return { data, setData, type, setType };
};

export default useFetch;
