alert ("Benvenido a HTs Shop \nProductos para tu HomeStudio");

// Productos
let micID = 1;
let micPrice = 80;
let micName = 'Microfono';
let micStock = 50;
let micCant = 0;

let midiID = 2;
let midiPrice = 260;
let midiName = 'Teclado Midi';
let midiStock = 20;
let midiCant = 0;

let auriID = 3;
let auriPrice = 120;
let auriName = 'Auriculares';
let auriStock = 50;
let auriCant = 0;


// Funcion info producto
const product = (name, price) => {
    return prompt (`${name}: $${price.toFixed(2)} USD\nIngresar Cantidad`);
}

// Funcion cantidad productos
let cantProductsTotal = 0;
const cantProducts = (cantidad, opcion) =>{
    
    cantProductsTotal += cantidad;

    if(opcion == micID){
        micCant += cantidad;
    }else if(opcion == midiID){
        midiCant += cantidad;
    }else{
        auriCant += cantidad;
    }
}

// Funcion Total
let totalPay = 0;
const total = (ntotal) =>{
   totalPay = totalPay + ntotal;
}

// Funcion Carrito
const shopCart = (nProductsTotal) =>{
    return prompt(`SHOPPING CART\nMicrofono: ${micCant}\nTeclado Midi: ${midiCant}\n Auriculares: ${auriCant}\n\nCantidad Total: ${nProductsTotal}\n Total: $${totalPay}USD\n\n1: Finalizar Compra\n2: Seguir Comprando`)
}




let menuOpciones = 0;
//Menu
do {
    menuOpciones = parseInt(prompt(
        '   Stock PRODUCTOS   \n'+
        '1: Micrfono\n'+
        '2: Teclado Midi\n'+
        '3: Auricular\n'+
        '\n'+
        '4: Ver carrito\n'+
        '5: Salir'
    ));

let cantidad = 0;
    switch(menuOpciones){
        // Microfono
        case 1:
            cantidad =  parseInt(product(micName, micPrice));
                        
            if(cantidad <= micStock){
                let micSubTotal = micPrice*cantidad
                alert (`${micName}\nsubTotal: $${micSubTotal.toFixed(2)} USD`)
                cantProducts(cantidad, menuOpciones);
                total(micSubTotal);
                // console.log(micCant)
                // console.log(cantProductsTotal)
                // console.log(totalPay)
            }else{
                    alert('ERROR')
            }
            break;
        
        // Teclado Midi
        case 2:
            cantidad =  parseInt(product(midiName, midiPrice));
                        
            if(cantidad <= midiStock){
                let midiSubTotal = (midiPrice*cantidad)
                alert (`${midiName}\nsubTotal: $${midiSubTotal.toFixed(2)} USD`)
                cantProducts(cantidad, menuOpciones);
                total(midiSubTotal);
            }else{
                    alert('ERROR')
            }
            break;
        
        // Auricular
        case 3:
            cantidad =  parseInt(product(auriName, auriPrice));
                        
            if(cantidad <= auriStock){
                let auriSubTotal = (auriPrice*cantidad)
                alert (`${auriName}\nsubTotal: $${auriSubTotal.toFixed(2)} USD`)
                cantProducts(cantidad, menuOpciones);
                total(auriSubTotal);
            }else{
                    alert('ERROR')
            }
            break;


        // Carrito
        case 4: 
            let opcCarrito = parseInt(shopCart(cantProductsTotal))
            
            if (opcCarrito == 1){
                alert('Gracias por su compra!!')
                menuOpciones = 5;
            }
            break;
        
        // Salir    
        case 5:
            alert('Muchas gracias por elegirnos!!');
            menuOpciones = 5;
            break;
        
        default:
            alert('Ha ingresado una opción incorrecta o dejo el campo vacío')
            break;

    }


}
while(menuOpciones != 5);