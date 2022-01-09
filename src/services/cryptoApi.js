import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '1db0533a9bmsha105e1d138b7d7fp10f50ejsnb00fb699b957'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })


export const cryptoApi = createApi({
    reducerPath: 'cryptosApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ( coinId, timeperiod ) => createRequest( `coin/${coinId}/history?timeperiod=${timeperiod}`),
        })
    })
});




export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery, 
    useGetCryptoHistoryQuery
} = cryptoApi;