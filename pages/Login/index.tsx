import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthUserQuery } from '../../Components/Services/authenticationSystem';
import Navbar from '../../Components/smallComponent/Navbar';
import { loginUser } from '../../Components/store/productSlice';

const LoginPage = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useAuthUserQuery();
    const [boolValue, setBoolValue] = useState(false);
    // console.log(data);

    const router = useRouter()

    const loginStatus: any = useSelector(loginUser);
    const dispatch = useDispatch();
    const loginInfo = loginStatus.payload.showReducer.loginStatus

    console.log('ll',loginInfo);
    


    const handleLoginForm = (e: any) => {
        e.preventDefault();
        let idNum = 0;
        if (data) {
            idNum = data.length
        }

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {
            email,
            password,
        }

        // console.log(data);
        data?.find(user => {
            // console.log(user.email);
            // console.log(user.password);
            // console.log("my pass", password);


            if (user.email === email && user.password === password) {
                // setBoolValue(true)
                dispatch(loginUser(true))
                router.push("/")
            }
            //  else
                // setBoolValue(false)
                // dispatch(loginUser(false))
        })
    }

    const addUserFunc = async (data: any) => {

        alert('success')
    }

    return (
        <div>
            <Navbar />
            <div className="card w-[30rem] mx-auto my-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center">Please Login</h2>
                    <form onSubmit={handleLoginForm}>
                        
                        {
                            loginInfo ? <h2>LoginStatus: true</h2> : <h2>LoginStatus: false</h2>
                        }
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered w-full" name='email' />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full" name='password' />
                            <small>New to this site? <Link href='/Login'>Login</Link></small>
                        </div>

                        <div className="">
                            <input className='btn my-5' type="submit" value="Login" />
                            <br />
                            <small className='text-center'>Forgot Password <Link href='/Login'>Click Here</Link></small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;