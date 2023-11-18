// Lista para almacenar los productos
var productList = [];

function addProduct() {
    // Obtener los valores del formulario
    var productName = document.getElementById('productName').value;
    var productImage = document.getElementById('productImage').value;
    var productDescription = document.getElementById('productDescription').value;
    var productStock = document.getElementById('productStock').value;
    var productPrice = document.getElementById('productPrice').value;

    // Crear un objeto de producto
    var product = {
        name: productName,
        image: productImage,
        description: productDescription,
        stock: productStock,
        price: productPrice
    };

    // Agregar el producto a la lista
    productList.push(product);

    // Actualizar la interfaz de usuario
    displayProducts();
    
    // Limpiar el formulario
    document.getElementById('productForm').reset();
}

function displayProducts() {
    // Limpiar la lista de productos en la interfaz de usuario
    document.getElementById('productList').innerHTML = '';

    // Iterar sobre la lista de productos y mostrar cada producto
    productList.forEach(function(product) {
        var productDiv = document.createElement('div');
        productDiv.classList.add('product');

        var productImage = document.createElement('img');
        productImage.src = product.image;

        var productName = document.createElement('h3');
        productName.textContent = product.name;

        var productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        var productStock = document.createElement('p');
        productStock.textContent = 'Stock: ' + product.stock;

        var productPrice = document.createElement('p');
        productPrice.textContent = 'Precio: $' + product.price;

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productDescription);
        productDiv.appendChild(productStock);
        productDiv.appendChild(productPrice);

        document.getElementById('productList').appendChild(productDiv);
    });
}
