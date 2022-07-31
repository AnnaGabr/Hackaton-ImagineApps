
export const PerfilButton = ({ img, onClick }) => {
    return(
        <button
        className="btnPerfil"
        onClick={ () => onClick('id del perfil') }
        >
            <img src={ img } alt='Perfil'/>
        </button>
    )
};