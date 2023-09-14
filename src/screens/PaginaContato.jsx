import { useNavigate } from "react-router-dom";

export default function PaginaContato() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Página Contato</h1>
      <button onClick={() => navigate("/sobre")}>Sobre</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
