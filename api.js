

axios = require("axios");
cep = "51190080";
url = `https://viacep.com.br/ws/${cep}/json/`;

async function getCep(cep) {
    await axios.get(url)
    .then(response=>{
        console.log(response.data)
        resultado= response.data
    })
    .catch((error) => {
        console.log("o erro", error)
    })
    
}
getCep(51190080)