function Relogio() {

  function pegarHoraAtual() {
    //código para pegar a hora
    return new Date().toLocaleString("pt-br");
  }

  // // crie uma função que faça um alert ao clicar no botão
  // function clicar() {
  //   alert("Você clicou no botão!");
  // }
  

  return (
    <div>
      <h1>Relogio</h1>
      <p>Hora Atual: {pegarHoraAtual()}</p>
      {/* <button onClick={clicar}>Clique aqui</button> */}
    </div>
  );
}




export default Relogio;
