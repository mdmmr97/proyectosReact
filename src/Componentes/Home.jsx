import Pie from './Pie'
import Empresa from '../assets/Imagenes/empresa.jpg'
import Centro from '../assets/Imagenes/school.jpg'
import Estudiante from '../assets/Imagenes/student.jpg'

import {Route, Switch} from "wouter";

const Home = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4 p-2 empresa">
                        <div className='tarjeta'>
                            <img src={Empresa} alt="imagen Empresa" />
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-4 p-2 centro">
                        <div className='tarjeta'>
                            
                                <img src={Centro} alt="imagen Centro" />
                            
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-4 p-2 estudiante">
                        <div className='tarjeta'>
                            <img src={Estudiante} alt="imagen estudiante" />
                        </div>
                    </div>
                </div>
            </div>
            <Pie></Pie>
        </>
    )
}
export default Home