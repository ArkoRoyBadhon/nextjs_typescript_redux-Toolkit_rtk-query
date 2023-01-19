import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../Components/smallComponent/Navbar';
import { itemAdd } from '../../Components/store/productSlice';

const index = () => {
    const [tprice, setTprice] = useState(0)
    const items = useSelector(itemAdd);

    const allItems = items.payload.showReducer.items


    let TotalX:Number = 0;
    const calcu = allItems.map((item: any) => {
        TotalX += (item.price)
        // console.log(typeof (item.price))
        // setTprice(Tota)
    })

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-5 max-w-screen-lg mx-auto my-5 gap-5">
                <div className="col-span-3">
                    <h2 className="">List Of Items</h2>
                    <div className="shadow bg-red-300 rounded-md p-5 text-black mt-4">
                        <div className="overflow-x-auto">
                            <table className="table w-full text-white">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allItems.map((item: any, index: number) => <tr key={index}>
                                            <th>{index += 1}</th>
                                            <td>{item.title}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <h2>Calculation</h2>
                    <div className="shadow bg-red-300 rounded-md p-5 text-black mt-4">
                        <p className="text-xl font-bold">Total Cost</p>
                        <p className="text-lg">= {`${TotalX}`} BDT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;