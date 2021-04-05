import axios from "axios";

const defaultQueryFunction = async ({ queryKey }) => {
  const { data } = await axios.get("http://api.tvmaze.com" + queryKey[0]);
  return data;
};

export default defaultQueryFunction;
