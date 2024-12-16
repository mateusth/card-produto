let procurar = document.querySelector("button")
procurar.addEventListener("click",procurando)
let busca = ''
function procurando() {
    let input = document.getElementById("input");
    let busca = input.value.toLowerCase();

async function fetchProduct () {
    try {
        const response = await fetch("https://dadosabertos.camara.leg.br/api/v2/deputados");
        if(!response.ok) {
            throw new Error("The error found is: " + response.status)
        }
        const data = await response.json();
        exibir(data);
    } catch (error) {
        console.log(error.message)
    }
}
function exibir(deputados) {
    let main = document.querySelector("main");
    main.innerHTML = ""
    let i = 0;
    deputados.dados.forEach((deputado) => {
        if(deputado.nome.toLowerCase().includes(busca) && i<3) {
            const div = document.createElement("div");
            div.className = "card"
            div.innerHTML = 
                `
                <div id="info">
                <h1 id="name">Nome: <span>${deputado.nome}</span></h1>
                <h1 id="party">Partido: <span>${deputado.siglaPartido}</span></h1>
                <h1 id="state">Estado: <span>${deputado.siglaUf}</span></h1>
                <img src="${deputado.urlFoto}" />
            </div>
            `
            main.appendChild(div)
            i++
        }
    });
}

fetchProduct()
}