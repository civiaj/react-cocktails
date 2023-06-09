import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cocktailsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/' }),
  endpoints: (builder) => ({
    getByLetter: builder.query({
      query: (string = '') => `search.php?s=${string}`,
    }),

    getById: builder.query({
      query: (id = 0) => `lookup.php?i=${id}`,
    }),
  }),
});

export const { useGetByLetterQuery, useGetByIdQuery } = cocktailsApi;
