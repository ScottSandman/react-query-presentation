import { useQuery } from "react-query";
import axios from "axios";

const General = () => {
  const { data, error, isLoading, isFetching } = useQuery("shows", () =>
    axios.get("http://api.tvmaze.com/search/shows?q=april")
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>There was an error: {error.message}</p>;

  if (isFetching) return <p>Updating...</p>;

  return (
    <>
      {data.data.map((show) => (
        <div key={show.show.id}>
          <p>{show.show.name}</p>
        </div>
      ))}
    </>
  );
};

export default General;
