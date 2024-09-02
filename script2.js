const api = "";
const base_url = "";

const banner_url ="";
const img_url="";

const request ={
    fetchTrending:'',
    fetchNetflixOriginals:'',
    fetchActionMovies:'',
    fetchComedyMovies:'',
    fetchHorrorMovies:'',
    fetchRomanceMovies:'',
    fetchDocumentaries:'',
};

//trucate the string
function truncate(str, n){
    return str? .length > n ? str.substr(0, n-1) + "...": str;
}

//banner
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())

    .then((data) =>{
        console.log(data.result);

        const setMovies = data.results[Math.floor(math.random ()* data.results.length - 1)];

        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");

        banner.style.backgroundImage=
        "url("+banner_url + setMovies.backdrop_path + ")";
        banner_desc.innerText = truncate(setmovies.overview, 150);
        banner_title.innerText = setMovies.name;
    });

    //movies
    fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
 
    .then(data)=>{
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);
        const row_posters = document.createElement("div");
        row_posters.className= "row_posters";
        row.appendChild(row_posters);
        

    }
