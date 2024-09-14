import {Link} from 'react-router-dom'

const Error = () => {
    return(
        <div className="error">
            <p className="error-title">404</p>
            <p className="error-subtitle">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='error-link'>Retourner sur la page d'acceuil</Link>
        </div>
    )
}

export default Error