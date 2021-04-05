import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";

import General from "./components/General";
import Default from "./components/Default";
import Pagination from "./components/Pagination";
import DynamicParallelQueries from "./components/DynamicParallelQueries";
import HooksAndCache from "./components/HooksAndCache";

// import defaultQueryFunction from "./functions/functions";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
      // queryFn: defaultQueryFunction,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ReactQueryDevtools initialIsOpen={false} />
        <header className="App-header">Happy April Fool's Day</header>
        {/* <General /> */}
        {/* <Default /> */}
        <HooksAndCache />
        {/* <DynamicParallelQueries /> */}
        {/* <Pagination /> */}
      </div>
    </QueryClientProvider>
  );
};

export default App;
