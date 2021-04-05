import { useState } from "react";
import { useQueryClient } from "react-query";
import useFetchShows from "../hooks/pageHook";

const Pagination = () => {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();

  const {
    data,
    error,
    isLoading,
    isFetching,
    isPreviousData,
    dataUpdatedAt,
  } = useFetchShows(page);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>There was an error: {error.message}</p>;

  if (isFetching) return <p>Updating...</p>;

  const convertDataUpdatedAt = new Date(dataUpdatedAt).toLocaleString();

  return (
    <>
      <span>{convertDataUpdatedAt}</span>
      <br />
      <span>current page: {page}</span>
      <br />
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        disabled={page === 0}
      >
        Previous
      </button>
      {"  "}
      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={isPreviousData && !data.hasMore}
      >
        Next
      </button>
      {data.map((show) => (
        <div key={show.id}>{show.name}</div>
      ))}
    </>
  );
};

export default Pagination;
