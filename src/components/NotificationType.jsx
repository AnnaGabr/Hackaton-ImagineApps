import { Notification } from "./Notification";

export const NotificationType = ({ productArray, type, onClick }) => {
    return(
        <div>
            { productArray.map((product) => (
                <Notification key={ product.id } product={ product } type={ type } onClick={ onClick } />
            )) }
        </div>
    )
}