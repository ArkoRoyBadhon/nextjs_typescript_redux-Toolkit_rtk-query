import Link from 'next/link';
import { useAddUserMutation, useAuthUserQuery } from '../../Components/Services/authenticationSystem';
import Navbar from '../../Components/smallComponent/Navbar';
import { useRouter } from 'next/router'

const index = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useAuthUserQuery();
    const [addUser] = useAddUserMutation()
    let router = useRouter()



    const handleRegisterForm = (e: any) => {
        e.preventDefault();
        let idNum = 0;
        if (data) {
            idNum = data.length + 1;
        }
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // const id = (data:any
        // console.log();


        const newUser = {
            id: idNum,
            name,
            email,
            password,
            role: "user"
        }
        // console.log(newUser);
        const smData = data?.find(user => {
            if(user.email === email) {
                return true
            } else
                return false
        })
        // console.log("condition type", smData);
        if (smData) {
            alert("This email already exists. Please try with another email");
            return;
        }
        addUserFunc(newUser)
        router.push('/Logout')
    }

    const addUserFunc = async (data: any) => {
        await addUser(data)
        alert('success')
    }


    return (
        <div>
            <Navbar />
            <div className="card w-[30rem] mx-auto my-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center">Please register</h2>
                    <form onSubmit={handleRegisterForm}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full" name='name' />
                        </div>
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
                            <small>Already have an account? <Link href='/Login'>Login</Link></small>
                        </div>
                        {/* <div className="form-control w-full hidden">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <input type="text" placeholder="role" className="input input-bordered w-full" onChange={()=>value="user} name='role' />
                        </div> */}
                        <div className="">
                            <input className='btn my-5' type="submit" value="Register" />
                            <br />
                            <small className='text-center'>Forgot Password <Link href='/Login'>Click Here</Link></small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default index;