import Pie from '../../Componentes/Pie/Pie';
import Empresa from '../../assets/Imagenes/empresa.jpg'
import Centro from '../../assets/Imagenes/school.jpg'
import Estudiante from '../../assets/Imagenes/student.jpg'

import { IdiomaProvider, useIdiomaContext } from '../../Contexto/contextoIdiomas';
import {Link} from "wouter";

const Home = () => {
    const { idiomacontext } = useIdiomaContext(IdiomaProvider);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4 p-2 empresa">
                        <Link to="/empresa">
                            <div className='tarjeta' texto={idiomacontext.IMAGEN_HOME_EMPRESAS}>
                                <img src={Empresa} alt="imagen Empresa" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 p-2 centro">
                        <Link to="/centroeducativo">
                            <div className='tarjeta' texto={idiomacontext.IMAGEN_HOME_CENTROS}>
                                    <img src={Centro} alt="imagen Centro" />
                            </div>
                        </Link>     
                    </div>
                    <div className="col-12 col-md-4 p-2 estudiante">
                        <Link to="/alumno">
                            <div className='tarjeta' texto={idiomacontext.IMAGEN_HOME_ALUMNOS}>
                                <img src={Estudiante} alt="imagen estudiante" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Pie></Pie>
        </div>
    );
};
export default Home