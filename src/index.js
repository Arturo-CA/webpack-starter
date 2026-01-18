import { saludar } from "./js/componentes.js";
import "./styles.css";
const nombre = "Abraham";
saludar(nombre);
const obj = {
  nombre: "Abraham",
};

console.log(obj?.nombre);
