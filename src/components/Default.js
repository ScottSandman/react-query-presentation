import { useQuery, useQueryClient } from "react-query";

const Default = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading, isFetching } = useQuery("/shows");

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>There was an error: {error.message}</p>;

  if (isFetching) return <p>Updating...</p>;

  return (
    <div>
      {data.map((show) => (
        <div key={show.id}>{show.name}</div>
      ))}
    </div>
  );
};

export default Default;
