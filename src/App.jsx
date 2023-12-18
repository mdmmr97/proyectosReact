import './App.css';
import Coche from './Componentes/Coches';
import losCoches from './mock-coches';

function App() {

  function ordenar(coche1, coche2){

   // return coche2.npuertas - coche1.npuertas;

    return (coche1.modelo < coche2.modelo) ? -1 : 1;

  }

  function muestraCoches(coche) {  

    return <Coche  key={coche.matricula} coche={coche}></Coche>;
  }

  return (
    
    <table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Matricula</th>
          <th>Color</th>
          <th>Puertas</th>
        </tr>
      </thead>
      <tbody >
      {losCoches.toSorted(ordenar).map(muestraCoches)}
      </tbody>
    </table>
  );
}
export default App;
