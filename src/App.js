import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import PaginaInicial from "./screens/PaginaInicial";
import PaginaContato from "./screens/PaginaContato";
import PaginaSobre from "./screens/PaginaSobre";

const router = createBrowserRouter([
  {
    path: "*",
    Component: RootNavigation,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function RootNavigation() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/contato" element={<PaginaContato />} />
      <Route path="/sobre" element={<PaginaSobre />} />
    </Routes>
  );
}
export default App;
