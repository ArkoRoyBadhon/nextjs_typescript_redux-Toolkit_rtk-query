import Link from 'next/link';
import { useProductGetQuery } from '../../Components/Services/products';
import Navbar from '../../Components/smallComponent/Navbar';
import Slider from './Slider';


const Home = () => {
    // const {data, error, isLoading, isFetching, isSuccess} = useAuthUserQuery();
    const { data, error, isLoading, isFetching, isSuccess } = useProductGetQuery()

    // console.log(data);


    return (
        <div>
            <Navbar />
            <Slider />
            
            <h2 className='text-3xl font-bold text-red-500 text-center my-10'>This is Home page</h2>
            <div className='max-w-screen-lg mx-auto grid grid-cols-3 gap-5' >
                {
                    data?.map((item: any) =>
                        <div key={item.title} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <small className="text-sm -mt-4">{item.category}</small>
                                <p className="text-xl">Price: {item.price} TK.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quasi nihil numquam quaerat fugiat molestiae placeat pariatur sapiente aut distinctio!</p>
                                <div className="card-actions justify-end">
                                    <Link href={{
                                        pathname:`/PrivateRoute`, query: {category: `${item._id}`}
                                        }} className="btn btn-primary">Buy Now</Link>
                                        {/* {console.log(item)
                                        } */}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;