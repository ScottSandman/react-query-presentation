import { useQuery } from "react-query";
import axios from "axios";

const getShowById = async (id) => {
  const url = "http://api.tvmaze.com/shows/";
  const { data } = await axios.get(url + id + "/episodes");
  return data;
};

export default function useShowQuery(id) {
  return useQuery(["show", id], () => getShowById(id));
}
