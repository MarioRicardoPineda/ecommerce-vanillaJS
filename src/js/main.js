// SCRIPT PRINCIPAL, DONDE SERAN IMPORTADOS TODOS LOS MODULOS


photo.addEventListener('click', () => {
    info.classList.toggle('active')
})


const searchBtn = document.getElementById('btn')

const searchProducts = async () => {

    const response = await fetch('https://mini-shop-rg.herokuapp.com/products'),
          products = await response.json();

    container.innerHTML = ''

    products.map(value => {

        let name = value.name.toLowerCase()
        let palabra = document.getElementById('searchInput').value.toLowerCase()

        if (name.indexOf(palabra) !== -1) {

            return container.innerHTML += `
                <div class="card">
                    <div class="card__image">
                        <img src="${value.image}" alt="${value.name}">
                    </div>

                    <div class="card__content">
                        <a href="product_description.html" class="card__title">
                            <h2 class="">${value.name}</h2>
                        </a>
                        <span class="separate"></span>

                        <div class="card__footer">
                            <span class="stock">
                                <p>En Existencias</p>
                                <span class="stock__number">${value.stock}</span>
                            </span>
                            <button class="card__btn">
                                <i class="fas fa-shopping-cart"></i>
                                <span class="price">$${value.price}</span>
                            </button>
                        </div>
                    </div>
                </div>
            `
        } 
    })

    if (container.innerHTML === '') {
        container.innerHTML = `
        <h1>
            Producto no encontrado
            <a href="">Ver Todos Los productos</a>
        </h1>
           
        `
    }
}

const apiCall = async () => {

    const response = await fetch('https://mini-shop-rg.herokuapp.com/products'),
        data = await response.json()

    renderProducts(data)
}


const renderProducts = data => {

    data.map((value) => {

        container.innerHTML += `
        <div class="card">
            <div class="card__image">
                <img src="${value.image}" alt="${value.name}">
            </div>

            <div class="card__content">
                <a href="product_description.html" class="card__title">
                    <h2 class="">${value.name}</h2>
                </a>
                <span class="separate"></span>

                <div class="card__footer">
                    <span class="stock">
                        <p>En Existencias</p>
                        <span class="stock__number">${value.stock}</span>
                    </span>
                    <button class="card__btn">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="price">$${value.price}</span>
                    </button>
                </div>
            </div>

        </div>
    `
    })
}


// Clair Mosciski

searchBtn.addEventListener('click', searchProducts)

apiCall()