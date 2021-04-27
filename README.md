# React Query Presentation

You can view the presenation [here](https://www.youtube.com/watch?v=BLfYnxjTUnk)

## Demonstrations

The following titles refer to the different demonstrations executed during the presentation.

    ### General Use Case

    A basic example which illustrates how to implement the useQuery hook. data, error, isLoading and isFetching are destructured from the hooks return object for use in render logic.

    ### Default

    This example utilizes a default function (defaultQueryFunction exported from functions.js) which accepts queryKey as an argument passed down from the useQuery hook. defaultQueryFunction is assigned in the queryClient defaultOptions object in App.js and is made available to the application by passing the queryClient to QueryClientProvider. The useQueryClient hook is used in Default.js to make the function available to the component. The useQuery hook in this instance need only be passed the key as an argument.

    ### Pagination

    Demonstrates a custom hook, useFetchShows, which takes an argument, page, which is passed to the fetchShows function passed to the useQuery hook. The page information is also passed to the queryKey array in the useQuery hook. Options used in the example are keepPreviousData, staleTime, refetchOnWindowFocus, onSuccess, onError, and retry. The useQueryClient is required in the Pagination component. isPreviousData is destructered from the useFetchShows custom hook to track which pages are in the cache.

    ### Dynamic Parallel Queries

    Illustrates two (2) different executions of multiple queries. The first implements the useQueries hook being passed a map function which returns a queryKey and queryFn for each element mapped over. The second demo shows how the useQueries hook accepts an array of query option objects.

    ### Hooks and Cache

    Multiple custom hooks, digging deep into queryClient to implement getQueryData for styling, and more... It's really cool. You've read this far so just dive in and take a look.
