// API calls
import axios from "axios"
const API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmJlMTQ4NDhiMzY5YWRmYmNlYWVmNThhMTQ2ZmZhZSIsIm5iZiI6MTcwMDU0NDY0Ni4xNjUsInN1YiI6IjY1NWM0MDg2NTM4NjZlMDBlMjk2MDgxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6HabRE2yCkgbe8Gcf2xHKL8Vw1-obQJgJ24l1QZDwfE"

const BASE_URL="https://api.themoviedb.org/3";

export const fetchTrendingMovies=async(page=1)=>{
   const response=await axios.get(`${BASE_URL}/trending/movie/week`,{
        params:{page:page},
        headers:{
            Authorization:`Bearer ${API_KEY}`,
        },
    });
    console.log(response);
    return response.data;
};

export const fetchMovies=async(query)=>{
    const response=await axios.get(`${BASE_URL}/search/movie`,{
        params:{query:query},
        headers:{
            Authorization:`Bearer ${API_KEY}`,
        },
    });
    return response.data;
};


// import axios from "axios";

// const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmJlMTQ4NDhiMzY5YWRmYmNlYWVmNThhMTQ2ZmZhZSIsIm5iZiI6MTcwMDU0NDY0Ni4xNjUsInN1YiI6IjY1NWM0MDg2NTM4NjZlMDBlMjk2MDgxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6HabRE2yCkgbe8Gcf2xHKL8Vw1-obQJgJ24l1QZDwfE"; // use a valid token
// const BASE_URL = "https://api.themoviedb.org/3";

// export const fetchTrendingMovies = async (page = 1) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
//       params: { page:page },
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//         "Content-Type": "application/json;charset=utf-8",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching trending movies:", error?.response?.data || error.message);
//     throw error;
//   }
// };

// export const fetchMovies = async (query) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/search/movie`, {
//       params: { query:query },
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//         "Content-Type": "application/json;charset=utf-8",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching search results:", error?.response?.data || error.message);
//     throw error;
//   }
// };
