import { useEffect, useState } from "react";
import { NotificationType } from "./NotificationType";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase_alimentos/init-firebase";

/* const products_day = [
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
]; */

/* const products_perishable = [
    {
        id: 1,
        name: 'Leche',
        date: '10/02/2023',
        price: 10000,
    }
]; */

export const NotificationList = ({ genType }) => {

    const [products_day, setproducts_day] = useState([])

    useEffect(() => {
        getproducts_day()
    }, [])

    useEffect(() => {
        console.log(products_day)
    }, [products_day])

    function getproducts_day() {
        const products_dayCollectionRef = collection(db, 'alimentosdeldia')
        getDocs(products_dayCollectionRef)
        .then(response => {
             const productsday = response.docs.map((doc) => ({
                data: doc.data(),
                id: doc.id
            }))
            setproducts_day(productsday)
        })
        .catch(error => console.log(error.message))
    }

    const [products_perishable, setproducts_perishable] = useState([])

    useEffect(() => {
        getproducts_perishable()
    }, [])

    useEffect(() => {
        console.log(products_perishable)
    }, [products_perishable])

    function getproducts_perishable() {
        const products_perishableCollectionRef = collection(db, 'alimentosperecederos')
        getDocs(products_perishableCollectionRef)
        .then(response => {
             const productsperishable = response.docs.map((doc) => ({
                data: doc.data(),
                id: doc.id
            }))
            setproducts_perishable(productsperishable)
        })
        .catch(error => console.log(error.message))
    }

    const buyProduct = (id) => {
        console.log('Se compra el producto', id)
    }
    
    const reserveProduct = (id) => {
        console.log('Se reserva el producto', id)
    }

    const clickDayProduct = () => {
        genType = true
        getproducts_day()
        console.log('genType', genType)
    }

    const clickPerishable = () => {
        genType = false
        getproducts_perishable()
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