import { getBanderaImport } from '../../Servicios/posts/getBanderaImport';

const IdiomaAlumno = (props) => {

    function ComprobarCertificacion(certificado) {
        return certificado === 1 ? 
        <span data-toggle="tooltip" data-placement="top" title='Certificado'>C</span>
        :
        <span data-toggle="tooltip" data-placement="top" title='Sin Certificar'>SC</span>
    }

    return (
      <div className='row d-flex aling-item-center'>
        <div className='col-3'>
            <img className='img-idiomas' src={getBanderaImport(props.id)} data-toggle="tooltip" data-placement="top" title={props.nombre} />
        </div>
        <p className='col-6'>{props.nivel}</p>
        <p className='col-3'>{ComprobarCertificacion(props.certificado)}</p>
        
      </div>
    );
};
export default IdiomaAlumno;