import { useSelector } from 'react-redux';
import { loginUser } from '../../Components/store/productSlice';
import LoginPage from '../Login';
import ProductDetail from '../ProductDetail';

const PrivateRoute = () => {
    const logindata: any = useSelector(loginUser);

    const loginStatus: any = logindata.payload.showReducer.loginStatus
    
    if(loginStatus) {
        return <ProductDetail />
    }

    return <LoginPage />


    
};

export default PrivateRoute;