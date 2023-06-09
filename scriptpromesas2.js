const aplicarDescuento = new Promise ((resolve, reject) => {
    const dto = true
    if (dto) {
        resolve ("Descuento aplicado")
    } else {
        reject ("Descuento no aplicado")
    }
})

// aplicamos el descuento para que apararezca en html
// PRIMER METODO
aplicarDescuento.then (res => {
    console.log(res)
    const mensaje = document.querySelector("body");
    const mensajeP = document.createElement("p");
    mensajeP.textContent = res;
    mensaje.appendChild(mensajeP);

})
.catch(error =>{console.error(error)})

// SEGUNDO METODO

const insertParagraph = (res) => {
    const $h1 = document.querySelector("body > h1");
    const $p = document.createElement("p");
    $p.id = "p-message";
    $p.textContent = `Se realizo ${res}`;
    $h1.insertAdjacentElement("afterend", $p)
}

aplicarDescuento.then (res => {
    insertParagraph(res)
}).catch (error => {
    insertParagraph(error)
})

// Existen 3 estados de las promesas

// 1 fulfilled -> Cuando la promesa se cumplio
// rejected -> Cuando la promesa no se cumplio
// pending -> Cuando queda pendiente

// console.error podemos ver en la consola el error de color rojo
// console.warm podemos ver en la consola el error de color amarillo