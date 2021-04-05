import { useQuery } from "react-query";
import axios from "axios";

const getShowsBySearch = async (search) => {
  const url = "http://api.tvmaze.com/search/shows?q=";
  const { data } = await axios.get(url + search);
  return data;
};

export default function useShowSearchQuery(search) {
  return useQuery(["search", search], () => getShowsBySearch(search));
}
