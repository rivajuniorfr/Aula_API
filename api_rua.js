

axios = require("axios");
uf = "PE"
cidade = "Recife"
nomeRua = "liberdade"
url = `http://viacep.com.br/ws/${uf}/${cidade}/${nomeRua}/json/`;

async function getRua() {
    await axios.get(url)
    .then(response=>{
        console.log(response.data)
        // resultado= response.status
    })
    .catch((error) => {
        console.log("o erro", error)
    })
    
}
getRua()