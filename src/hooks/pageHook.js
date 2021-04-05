import { useQuery } from "react-query";
import axios from "axios";

const fetchShows = async (page) => {
  const { data } = await axios.get("http://api.tvmaze.com/shows?page=" + page);
  return data;
};

export default function useFetchShows(page) {
  return useQuery(["page", page], () => fetchShows(page), {
    keepPreviousData: true,
    staleTime: 6000,
    refetchOnWindowFocus: false,
    onSuccess: () => alert("data successfully retrieved"),
    // onError: () => alert("Oops..."),
    // retry: 2,
  });
}
