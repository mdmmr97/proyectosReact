import Pie from '../../Componentes/Pie/Pie';
import Empresa from '../../assets/Imagenes/empresa.jpg'
import Centro from '../../assets/Imagenes/school.jpg'
import Estudiante from '../../assets/Imagenes/student.jpg'

import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
import {Link} from "wouter";
import ImagenHome from '../../Componentes/ImagenHome/ImagenHome';

const Home = () => {
    const { idiomacontext } = useIdiomaContext(IdiomaProvider);

    return (
        <div>
            <div className="container-fluid">
                <div className="row my-5 mx-3">
                    <ImagenHome nombreclase="empresa" 
                                rutapagina="/empresa" 
                                texto={idiomacontext.IMAGEN_HOME_EMPRESAS} 
                                imagen={Empresa}
                    />
                    <ImagenHome nombreclase="centro"
                                rutapagina="/centroeducativo"
                                texto={idiomacontext.IMAGEN_HOME_CENTROS}
                                imagen={Centro}
                    />
                    <ImagenHome nombreclase="estudiante"
                                rutapagina="/alumno"
                                texto={idiomacontext.IMAGEN_HOME_ALUMNOS}
                                imagen={Estudiante}
                    />
                </div>
            </div>
            <Pie></Pie>
        </div>
    );
};
export default Home