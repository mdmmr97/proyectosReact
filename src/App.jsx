import { useEffect, useState } from 'react';
import './App.css';
import Post from './componentes/Post';

function App() {

  // Estado con la lista de post que recuperamos de la REST API
  const [listaPost, setListaPost] = useState([]);

  function obtenerPosts(){


      // Usamos fetch para recuperar los post de la REST API. Puesto que hacemos
      // una petición al servidor y esta puede tardar un tiempo en resolverse usaremos
      // una promesa, la respuesta de la REST API la convertimos a json y luego actualizamos
      // el estado de nuestro componente
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
          
          //Cargamos los post en el estado del componente
          setListaPost(json);

        })
  }

  // Llamamos a la función de extracción de datos con un useEffect
  // para que solo se ejecute una vez
  useEffect(obtenerPosts, []);

  // Función encargada de llamar al componente Post con el post
  // que recibe como parámetro implícito de la función map
  function muestraPost(post) {  

    return <Post  key={post.id} post={post}></Post>;
  }

  return (
    <div>
      <div id="divPost">
        <h1>Post</h1>
        <ul>                        
        {listaPost.map(muestraPost)}
        </ul>
      </div>
    </div>
    );
}
export default App;
