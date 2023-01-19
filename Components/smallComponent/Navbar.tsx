import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../store/productSlice';

const Navbar = () => {

    const loginStatus: any = useSelector(logOutUser);
    const dispatch = useDispatch();
    const loginInfo = loginStatus.payload.showReducer.loginStatus
    console.log(loginInfo);

    const handleLogOut = () => {
        dispatch(logOutUser(false))
    }

    return (
        <div className=' bg-slate-600'>
            <div className="flex justify-between max-w-screen-md mx-auto items-center h-[4rem]">
                <div className="text-white text-2xl font-bold">Navbar</div>
                <div className="flex text-white">
                    <Link className='px-1' href="/">Home</Link>
                    {
                        loginInfo ?
                            <>
                                <Link onClick={handleLogOut} className='px-1' href="/Login">LogOut</Link>
                                <Link className='px-1' href="/UpdateSlider">UpdateSlider</Link>
                            </>
                            :
                            <>
                                <Link className='px-1' href="/Login">Login</Link>
                                <Link className='px-1' href="/Register">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;