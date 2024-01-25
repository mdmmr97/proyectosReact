import BuscaGifsForm from '../../componentes/BuscaGifsForm';
import './styles.css';
import { useLocation} from "wouter";
import imagenLoader from '../../img/ajax-loader.gif';
import useGifs from '../../hooks/useGifs';
import AjaxLoader from '../../componentes/AjaxLoader';
import ListaGifs from '../../componentes/ListaGifs';
import TrendingSearches from '../../componentes/TrendingSearches';
import LazyLoad from 'react-lazy-load';

const Home = () => {

    const {buscando, listaGifs} = useGifs();
   

    const [path, setLocation]= useLocation();

    // Esta función se envía al componente hijo como prop
    function manejarAccion(keyword) {

        console.log("valor componente hijo ", keyword);
        setLocation(`/search/${keyword}`)

    }
    console.log("home");
    return (
        <div>
            <div className="Home">
                <BuscaGifsForm manejarAccion={manejarAccion}></BuscaGifsForm>
            </div>
            <div className="Home altuarListaGifts">
                <p>Última búsqueda</p>
                {buscando 
                    ? <AjaxLoader loader={imagenLoader}></AjaxLoader> 
                    : <ListaGifs listaGifs={listaGifs}></ListaGifs>}
            </div>   
            <LazyLoad offset={100}>
                <TrendingSearches></TrendingSearches>
            </LazyLoad>        
        </div>
    
    )
}
export default Home;