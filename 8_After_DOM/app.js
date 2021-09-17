const titulo = document.getElementById('titulo')
const contenedor = document.getElementById('contenedor')

//  TABLA 
const tableBody = document.getElementById('tabla-contenedor')


// let contenidoTexto = `
//     <p>Lorem, ipsum dolor<strong> sit amet consectetur adipisicing elit. Quasi culpa ad facere quisquam!" Cupiditate maiores in a," 
//     hic,</strong> similique nobis 
//     nostrum suscipit corrupti laboriosam amet delectus alias libero quos fuga.</p>`

// contenedor.innerHTML = contenidoTexto

// contenedor.className = "estilo container"

// Algunos Metodos de classList
// contenedor.classList.add('row')
// contenedor.classList.remove('container')
// console.log(contenedor.id)


// Ejemplo - como insertar codigo HTML
// contenedor.innerHTML = `
//             <div class="card" style="width: 18rem;">
//                 <img src="https://via.placeholder.com/200" class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
// `




// Recorro my array de objetos y los pinto en la card de forma dinamica, el boton tiene un evento de onclick (lo vamos a ver en detalle en la clase de eventos)
stockProductos.forEach( (prod) => {

    const div = document.createElement('div')
    div.className = "card"
    div.style = "width: 18rem"

    div.innerHTML = `
            <img src="https://via.placeholder.com/200" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">${prod.desc}</p>
                <p class="card-text">Precio: $${prod.precio}</p>
                <button onclick="agregarAlCarrito(${prod.id})" class="btn btn-primary"> Agregar al carrito </button> 
            </div>
    `
    contenedor.appendChild(div)

})


const carrito = []

// Funcion agregar al carrito, se hace una bbusqueda por id. 
function agregarAlCarrito(prodId) {
    let producto = stockProductos.find( (el) => el.id === prodId )
    carrito.push( producto )
 
    mostrarCompra()
}

// Funcion para pintar en mi HTML los productos que se agregaron al array carrito
const mostrarCompra = () => {
    tableBody.innerHTML = "";
    // Utilizamos Solucion 2 - Cosas dinamicas
    carrito.forEach( (prod) => {
        const tr = document.createElement('tr') // Creo un nodo padre
        tr.className = "table-primary"
        tr.innerHTML = `
            <th scope="row">${prod.id}</th>
            <td>${prod.nombre}</td>
            <td>${prod.tipo}</td>
            <td>${prod.precio}</td>      
        `
        tableBody.appendChild(tr)
    })
    
}



// // TABLAS

// // No se usa
// // tableBody.innerHTML = `                  
// //                         <tr>
// //                             <th scope="row">${stockProductos[0].id}</th>
// //                             <td>${stockProductos[0].nombre}</td>
// //                             <td>${stockProductos[0].tipo}</td>
// //                             <td>${stockProductos[0].precio}</td>
// //                         </tr>`

// //                         table.innerHTML += `                  
// //                         <tr>
// //                             <th scope="row">${stockProductos[1].id}</th>
// //                             <td>${stockProductos[1].nombre}</td>
// //                             <td>${stockProductos[1].tipo}</td>
// //                             <td>${stockProductos[1].precio}</td>
// //                         </tr>`



// // Solucion 1 - Cosas estaticas
// // stockProductos.forEach((prod)=> {
// //     tableBody.innerHTML += `
                    
// //                         <tr>
// //                             <th scope="row">${prod.id}</th>
// //                             <td>${prod.nombre}</td>
// //                             <td>${prod.tipo}</td>
// //                             <td>${prod.precio}</td>
// //                         </tr>
                    
// // `
// // })


// // Solucion 2 - Cosas dinamicas
// stockProductos.forEach((prod)=>{
//     const tr = document.createElement('tr'); // Creo un nodo padre
//     // tr.className = 'table-primary'
//     tr.innerHTML = `
//                     <th scope="row">${prod.id}</th>
//                     <td>${prod.nombre}</td>
//                     <td>${prod.tipo}</td>
//                     <td>${prod.precio}</td>
//                 `
//     console.log(tr)
//     tableBody.appendChild(tr)
// })