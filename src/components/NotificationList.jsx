import { NotificationType } from "./NotificationType";

const products_day = [
    {
        id: 1,
        name: 'Arroz',
        amount: '1000', // Se mide en gramos
    },
    {
        id: 2,
        name: 'Arroz',
        amount: '1000', // Se mide en gramos
    }
];

const products_perishable = [
    {
        id: 1,
        name: 'Leche',
        date: '10/02/2023',
        price: 10000,
    }
];

export const NotificationList = ({ genType }) => {

    const buyProduct = (id) => {
        console.log('Se compra el producto', id)
    }
    
    const reserveProduct = (id) => {
        console.log('Se reserva el producto', id)
    }

    const clickDayProduct = () => {
        genType = true
        console.log('genType', genType)
    }

    const clickPerishable = () => {
        genType = false
        console.log('genType', genType)
    }
    
    return(
        <div>
            <p className="title">ELIGE LOS ALIMENTOS QUE NECESITES</p>
            <div className="notifContainer">
                <div className="productType">
                    <button
                    className="btnProductType"
                    onClick={ clickDayProduct }
                    >
                        ALIMENTOS DEL DÍA
                    </button>
                    <button
                    className="btnProductType"
                    onClick={ clickPerishable }
                    >ALIMENTOS PERECEDEROS</button>
                </div>
                { genType ?
                    <NotificationType productArray={ products_day } type={ 1 } onClick={ reserveProduct } genType={ genType } />
                    :
                    <NotificationType productArray={ products_perishable } type={ 0 } onClick={ buyProduct } genType={ genType } />

                    /*{ products_day.map((product) => (
                        <Notification key={ product.id } product={ product } type={ 1 } onClick={ reserveProduct } />
                    )) } :
                    { products_perishable.map((product) => (
                        <Notification key={ product.id } product={ product } type={ 0 } onClick={ buyProduct } />
                    )) }*/
                }
            </div>
        </div>
    )
}