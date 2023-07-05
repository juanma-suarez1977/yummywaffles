let miBoton1=document.querySelector("#agregar1")
miBoton1.addEventListener("click", function handleClick() {

    alert ("tu compra fue un exito");

})

let miBoton2=document.querySelector("#agregar2")
miBoton2.addEventListener("click", function handleClick() {

    var confirmacion=confirm("estas seguro de que quieres continuar?");

    if (confirmacion) {

        var Rta=prompt("elegi tu waffle salado");

        alert ("elegiste: " + Rta);

    }else

    alert("pedido cancelado");

    alert ("tu compra fue un exito");

})