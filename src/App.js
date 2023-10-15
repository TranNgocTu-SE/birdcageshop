import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Login from './pages/Login';
import {Routes,Route} from 'react-router-dom';
import Register from './pages/Register';
import Product from './pages/Product';
import Admin from './pages/Admin';
import AddUser from './pages/AddUser';
import UpdateUser from './pages/UpdateUser';
import Profile from './pages/Profile';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import OrderDetail from './pages/OrderDetail';
import Order from './pages/Order';
import Review from './pages/Review';
import ListReview from './pages/ListReview';
import Compare from './pages/Compare';
import MakeBirdCage from './pages/MakeBirdCage';
import ListProducts from './pages/ListProducts';
import AdminDashboard from './pages/AdminDashboard';
import Checkout from './pages/Checkout';
import Complete from './pages/Complete';
import ManagerOrder from './pages/ManagerOrder';
import StaffOrder from './pages/StaffOrder';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/detail' element={<Product />}/>
        <Route path='/addUser' element={<AddUser />}/>
        <Route path='/editUser/:id' element={<UpdateUser />}/>
        <Route path='/deleteUser' element={<AddUser />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/adminDashboard' element={<AdminDashboard />}/>
        <Route path='/shoppingCart' element={<ShoppingCart />}/>
        <Route path='/orderDetail' element={<OrderDetail />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/review' element={<Review />}/>
        <Route path='/listReview' element={<ListReview />}/>
        <Route path='/compare' element={<Compare />}/>
        <Route path='/makeBirdCage' element={<MakeBirdCage />}/>
        <Route path='/listProducts' element={<ListProducts />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/complete' element={<Complete />}/>
        <Route path='/managerOrder' element={<ManagerOrder />}/>
        <Route path='/staffOrder' element={<StaffOrder />}/>
      </Routes>
    </div>

  );
}

export default App;
