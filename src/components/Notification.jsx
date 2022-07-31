

export const Notification = ({ product, type, onClick }) => {

    return (
        <div className="product">
                <h3>
                    { product.name }
                </h3>
                <p>
                    { type > 0 ? 'Cantidad disponible' : 'Vence el día' }
                    : &nbsp;
                    { type > 0 ? product.amount : product.date }
                </p>
                <button
                className="btnProduct"
                onClick={() => onClick( product.id )}
                >{ type > 0 ? 'RESERVAR' : 'COMPRAR' }</button>
        </div>
    )
};