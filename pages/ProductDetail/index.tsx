import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useProductGetByIdQuery } from '../../Components/Services/products';
import Navbar from '../../Components/smallComponent/Navbar';
import { decrement, increment, itemAdd } from '../../Components/store/productSlice';
// import CategoryPage from './[category]';

const ProductDetail = () => {
    const [titleName, setTitleName] = useState("")
    const [price, setPrice] = useState(1)
    const router = useRouter()
    const val = router
    // const { title } = val
    const id: any = val.query.category;
    // console.log(id);

    const itemQuantity = useSelector((state: any) => state.showReducer.count)

    // console.log('quantity',itemQuantity);
    const dispatch = useDispatch();



    const { data } = useProductGetByIdQuery(id)

    const handleDecrement = () => {
        if (itemQuantity === 1) {
            return;
        }
        dispatch(decrement())
    }

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleCart = (e: any, title: string, price: any) => {
        e.preventDefault();
        const paydata = {
            title,
            quantity: itemQuantity,
            price: (price * itemQuantity)
        }
        console.log(paydata);

        dispatch(itemAdd({
            title,
            quantity: itemQuantity,
            price: (price * itemQuantity)
        }))
    }

    // const handleCart = (e: any) => {
    //     e.preventDefault();
    //     console.log("success");

    // }


    return (
        <div>
            <Navbar />
            <h2>Product Detail Page</h2>
            {
                data?.map((item: any) => <div key={item.title} className="max-w-screen-md mx-auto card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <small className="text-sm -mt-4">{item.category}</small>
                        <p className="text-xl">Price: {item.price} TK.</p>
                        <div className="flex w-1/5 items-center justify-around">
                            <button onClick={handleDecrement} className='btn text-2xl'>-</button>
                            <span>{itemQuantity}</span>
                            <button onClick={handleIncrement} className='btn text-2xl'>+</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quasi nihil numquam quaerat fugiat molestiae placeat pariatur sapiente aut distinctio!</p>
                        <div className="card-actions justify-end" onClick={(e) => handleCart(e, item.title, item.price)}>
                            <Link href='/Cart' className="btn btn-primary" >Purchase Now</Link>
                        </div>
                        {/* <button className='btn' onClick={(e) => handleCart(e)}>Test</button> */}
                    </div>
                </div>)

            }


        </div>
    );
};

export default ProductDetail;