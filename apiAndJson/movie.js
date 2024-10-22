const API_KEY = "api_key=d59c7b28e92f24b3f428ca732c1463e1";
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_URL = `${BASE_URL}popular?${API_KEY}`;


console.log(API_URL)

// const getMovies = (url)=> {
//     fetch(url)
//     .then((response)=> response.json())   //the json here is parsing the stringified api into objects that we can work with
//     .then((data)=> {console.log(data)})
//     .catch((error)=> console.log(error))
// }



//200 is successful
//400 above is client side error
//500 above is server side rerror


//USING ASYNC
// const getMovies = async (url)=> {
//     try {
//         const response = await fetch(url)
//         // console.log(response)
//         // if(!response.ok)  {
//         //     throw new Error("")
//         // }

//     } catch {

//     }
// }


const getMovies = async (url)=> {
    try {
        const response = await fetch(url)
        const data = await response.json();
        console.log(data.results)
    } catch (error) {
        console.log(data)
    }
}

getMovies(API_URL)
