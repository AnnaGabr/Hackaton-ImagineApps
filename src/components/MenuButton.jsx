export const MenuButton = ({ img, onClick }) => {
    return (
        <button
        className="btnMenu"
        onClick={ onClick }
        >
            <img src={ img } alt='Menú'/>
        </button>
    )
}