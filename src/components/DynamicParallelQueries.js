import { useQueries } from "react-query";
import axios from "axios";

const fetchShow = async (id) => {
  const url = "http://api.tvmaze.com/shows/";
  const { data } = await axios.get(url + id);
  return data;
};

const DynamicParallelQueries = () => {
  const showIds = [{ id: 14055 }, { id: 1775 }, { id: 17312 }];

  const showQueries = useQueries(
    showIds.map((show) => {
      return {
        queryKey: ["id", show.id],
        queryFn: () => fetchShow(show.id),
      };
    })
  );

  return showQueries.map((show) => {
    if (show.isLoading) return <p>Loading...</p>;
    if (show.error) return <p>There was an error: {show.error} </p>;
    return <p key={show.id}>{show.data.name}</p>;
  });
};

export default DynamicParallelQueries;

// const data = useQueries([
//   { queryKey: "driverSurveyResults", queryFn: fetchDriverSurvey },
//   { queryKey: "passengerSurveyResults", queryFn: fetchPassengerSurvey },
//   { queryKey: "FAQs", queryFn: fetchFAQs },
//   { queryKey: "fetchDriverQuestions", queryFn: fetchDriverQuestions },
//   { queryKey: "fetchPassengerQuestions", queryFn: fetchPassengerQuestions },
//   { queryKey: "fetchNotifications", queryFn: fetchNotifications },
//   { queryKey: "fetchSubscriptions", queryFn: fetchSubscriptions },
// ]);
