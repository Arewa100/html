const API_KEY = "api_key=d59c7b28e92f24b3f428ca732c1463e1";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = `${BASE_URL}movie/popular?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const SERACH_MOVIE_URL = `${BASE_URL}search/movie?${API_KEY}`

const movieContainer = document.querySelector(".movies");

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg  

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
        showMovie(data.results)
    } catch (error) {
        console.log(data)
    }
}

getMovies(API_URL)


function showMovie(movies) {
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
        const {overview, title, vote_average, poster_path} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
                                <div>
                                    <img src="${IMAGE_URL}${poster_path}" alt="image">
                                </div>
                                
                                <div class="titleRating">
                                    <span><span>${title}</span>   <span>${vote_average}</span></span>
            
                                    <div>
                                        <h2>${overview}</h2>
                                    </div>

                                </div>

                                <div>
                                    <p></p>
                                </div>
        `
        movieContainer.appendChild(movieElement);
    });

}

const searchMovieForm = document.querySelector('.search')


searchMovieForm.addEventListener('keyup', (event)=> {
    event.preventDefault();
    const inputValue = event.target.value

    if(inputValue) {
        const searchUrl = SERACH_MOVIE_URL + "&query=" + inputValue;
        console.log(searchUrl)
        getMovies(searchUrl)
    }else{
        getMovies(API_URL)
    }
})