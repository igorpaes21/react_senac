function Relogio() {

  function pegarHoraAtual() {
    //código para pegar a hora
    return new Date().toLocaleString("pt-br");
  }

  return (
    <div>
      <h1>Relogio</h1>
      <p>Hora Atual: {pegarHoraAtual()}</p>
    </div>
  );
}

export default Relogio;
