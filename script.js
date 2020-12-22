function finalizar() {
    
    b = document.getElementById('idade').value;
    c = document.getElementById('carro').value;
    d =  document.getElementById('velocidade').value;
   
    res = document.getElementById('resultados');
    
    res.innerHTML += `
    <p>Nome: ${document.getElementById('nome').value}<\p>
    <p>Idade: ${b}<\p>
    <p>Carro: ${c}<\p>
    <p>Velocidade: ${d}<\p>`;
    if(d < 80){
       res.innerHTML += `<p>O motorista não foi multado`;
    } else {
        res.innerHTML += `<p>O motorista foi multado`;
    }
}