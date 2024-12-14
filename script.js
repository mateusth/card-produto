async function fetchProduct () {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if(!response.ok) {
            throw new Error("The error found is: " + response.status)
        }
        const data = await response.json();
        exibir(data);
    } catch (error) {
        console.log(error.message)
    }
}
function exibir(products) {
    let body = document.querySelector("body");
    products.forEach((product) => {
    const main = document.createElement("main");
    main.className = "card"
    main.innerHTML = 
        `<header>
            <h1 id="product">${product.title}</h1>
            <img src="${product.image}" />
        </header>
        <section>
            <h2 id="price">R$ ${product.price}</h2>
            <p id="description">${product.description}</p>
            <a href="" id="buy">Buy product</a>
        </section>`;
    body.appendChild(main)
    });
}

fetchProduct()



