import { useState } from "react";
import { useQueryClient } from "react-query";

import useShowQuery from "../hooks/showByIdHook";
import useShowSearchQuery from "../hooks/searchHook";

const HooksAndCache = () => {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [id, setId] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" id="search" onChange={handleChange} />
      <input type="submit" value="search" onClick={() => setIsSearch(true)} />
      {isSearch ? (
        id === null ? (
          <Shows setId={setId} search={search} />
        ) : (
          <Episodes id={id} setId={setId} />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

const Shows = ({ search, setId }) => {
  const queryClient = useQueryClient();
  const { data, error, isLoading, isFetching } = useShowSearchQuery(search);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>There was an error with the search: {error.message}</p>;

  if (isFetching) return <p>Updating...</p>;

  return (
    <>
      {data.map((show) => (
        <div
          key={show.show.id}
          onClick={() => setId(show.show.id)}
          style={
            queryClient.getQueryData(["show", show.show.id])
              ? { color: "red" }
              : {}
          }
        >
          {show.show.name}
        </div>
      ))}
    </>
  );
};

const Episodes = ({ id, setId }) => {
  const { data, error, isLoading, isFetching } = useShowQuery(id);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>There was an error: {error.message}</p>;

  if (isFetching) return <p>Updating...</p>;

  return (
    <>
      <a href="#" onClick={() => setId(null)}>
        back
      </a>
      {data.map((episode) => (
        <div key={episode.id}>{episode.name}</div>
      ))}
    </>
  );
};

export default HooksAndCache;
