import Pie from './Pie'
import Empresa from '../assets/Imagenes/empresa.jpg'
import Centro from '../assets/Imagenes/school.jpg'
import Estudiante from '../assets/Imagenes/student.jpg'

import {Link} from "wouter";

const Home = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4 p-2 empresa">
                        <div className='tarjeta'>
                            <Link to="/empresa">
                                <img src={Empresa} alt="imagen Empresa" />
                            </Link>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-4 p-2 centro">
                        <div className='tarjeta'>
                            <Link to="/centroeducativo">
                                <img src={Centro} alt="imagen Centro" />
                            </Link>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-4 p-2 estudiante">
                        <div className='tarjeta'>
                            <Link to="/alumno">
                                <img src={Estudiante} alt="imagen estudiante" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Pie></Pie>
        </>
    )
}
export default Home