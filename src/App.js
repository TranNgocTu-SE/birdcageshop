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
        <Route path='/adminDashboard' element={<Admin />}/>
        <Route path='/shoppingCart' element={<ShoppingCart />}/>
        <Route path='/orderDetail' element={<OrderDetail />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/review' element={<Review />}/>
        <Route path='/listReview' element={<ListReview />}/>
        <Route path='/compare' element={<Compare />}/>
        <Route path='/makeBirdCage' element={<MakeBirdCage />}/>
        <Route path='/listProducts' element={<ListProducts />}/>
      </Routes>
    </div>

  );
}

export default App;
