const BASE_URL = 'https://thatcopy.pw/catapi/rest/' //Endereço da API
const catBtn = document.getElementById('change-cat')
const ImgCat = document.getElementById('cat')

const GetCats = async () => {
try {
    const data = await fetch(BASE_URL);
    const json = await data.json(BASE_URL) // Converter o link em Json

     return json.webpurl; // Returna a imagem que foi convertida em Json
} catch (e) {
    console.log(e.message)
}

};

const loadImg  = async () =>{
    ImgCat.src = await GetCats();
}

catBtn.addEventListener('click',loadImg);
