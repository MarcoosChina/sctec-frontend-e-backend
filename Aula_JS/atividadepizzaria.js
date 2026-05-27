function clientePedido(numeroPedido){
    let pedido;
    switch(numeroPedido){
        case 1:
            pedido = "pizza de calabresa";
            break;
        case 2:
            pedido = "pizza de frango com catupiry";
            break;
        case 3:
            pedido = "pizza de mussarela";
            break;
        case 4:
            pedido = "pizza de portuguesa";
            break;
        default:
            pedido = "pedido inválido";
    }
    document.getElementById("pedidos").innerText = pedido;
}
document.getElementById("pedido").addEventListener("keypress", function(event){
    if(event.key === "1"){
        clientePedido(1);
    }
    else if(event.key === "2"){
        clientePedido(2);
    }
    else if(event.key === "3"){
        clientePedido(3);
    }
    else if(event.key === "4"){
        clientePedido(4);
    }
    else{
        alert("Pedido inválido!");
    }
});

