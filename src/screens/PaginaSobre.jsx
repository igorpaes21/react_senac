import { useNavigate } from "react-router-dom";

export default function PaginaSobre() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Página Sobre</h1>
      <button onClick={() => navigate("/contato")}>Contato</button>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
