import Like from '../../assets/Imagenes/like.svg'
import UnLike from '../../assets/Imagenes/unlike.svg'
import { useState } from 'react';

const Favoritos = (props) => {
    //Creamos un estado para guardar los favoritos en el Localstorage y s no hay ninguno guardamos un array vacío
    const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem("favoritos")) || []);
    console.log(favoritos);

    function CambiarFavorito(e){
        if( e.target.checked ){
            //Si el checkbox está seleccionado añadimos el id de la comida al array de favoritos y lo 
            //guardamos en el Localstorage. Usamos un nuevo array para poder guardar el nuevo array de favoritos
            //en el estado y en el Localstorage porque si no se hace así no se actualiza el estado hasta la proxima 
            //vez que se recargue la página y por tanto el favorito añadido no se guarda en el Localstorage
            const nuevofav = [...favoritos, e.target.value];
            console.log(nuevofav);
            setFavoritos(nuevofav);
            localStorage.setItem("favoritos", JSON.stringify(nuevofav));   
        } 
        else {
            //Exactamente igual que en el caso anterior pero para borrar el favorito
            const borradofav = favoritos.filter(fav => fav !== e.target.value);
            setFavoritos(borradofav);
            console.log(borradofav);
            localStorage.setItem("favoritos", JSON.stringify(borradofav));
        }
    }    
    //Para que el checkbox se mantenga seleccionado si ya es favorito y se deseleccione si no lo es comprobamos 
    //si el id de la comida está en el array de favoritos recuperados desde el Localstorage
    return (
        <div className='favoritos'>
            <input value={props.id} name='r' type="checkbox" id={props.id} 
                checked={favoritos.includes(props.id)} onChange={CambiarFavorito}/>
            <label htmlFor={props.id}>
                {favoritos.includes(props.id) ? 
                    <img src={Like} alt="like" /> 
                : 
                    <img src={UnLike} alt="unlike" />
                }
            </label>
        </div>
    )
}
export default Favoritos;