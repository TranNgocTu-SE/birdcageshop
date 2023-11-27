import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Customer/Register';
import ShoppingCart from './pages/Customer/ShoppingCart';
import OrderDetail from './pages/Customer/OrderDetail';
import Order from './pages/Customer/Order';
import Review from './pages/Customer/Review';
import ListReview from './pages/Customer/ListReview';
import MakeBirdCage from './pages/Customer/MakeBirdCage';
import ListProducts from './pages/Customer/ListProducts';
import Checkout from './pages/Customer/Checkout';
import Complete from './pages/Customer/Complete';
import User from './pages/Admin/User';
import HomeAdmin from './pages/Admin/HomeAdmin';
import HomeManager from './pages/Manager/HomeManager';
import ManagerProducts from './pages/Manager/ManagerProducts';
import ManagerPromotions from './pages/Manager/ManagerPromotions';
import ManagerStaff from './pages/Manager/ManagerStaff';
import ManagerReport from './pages/Manager/ManagerReport';
import AddPromotion from './pages/Manager/AddPromotion';
import HomeStaff from './pages/Staff/HomeStaff';
import StaffReport from './pages/Staff/StaffReport';
import StaffOrders from './pages/Staff/StaffOrders';
import RecentActivity from './pages/Manager/RecentActivity';
import ProductDetail from './pages/Manager/ProductDetail';
import Home from './pages/Customer/Home';
import ProductDetailShop from './pages/Customer/ProductDetailShop';
import Compare from './pages/Customer/Compare';
import AddUser from './pages/Admin/AddUser';
import UpdateUser from './pages/Admin/UpdateUser';
import Profile from './pages/Admin/Profile';
import ManagerOrder from './pages/Manager/ManagerOrder';
import AddProduct from './pages/Manager/AddProduct';
import ManagerOrderDetail from './pages/Manager/ManagerOrderDetail';
import Layout from './Layout';
import Layout2 from './Layout2';
import Products from './components/Products';
import { RateProduct } from './pages/Manager/RateProduct';
import StaffOrderDetail from './pages/Staff/StaffOrderDetail';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path='/products' element={<Products />} />
          <Route path='/detail/:id' element={<ProductDetailShop />} />
          <Route path='/addUser' element={<AddUser />} />
          <Route path='/editUser/:id' element={<UpdateUser />} />
          <Route path='/deleteUser' element={<AddUser />} />
          <Route path='/shoppingCart' element={<ShoppingCart />} />
          <Route path='/orderDetail/:id' element={<OrderDetail />} />
          <Route path='/order' element={<Order />} />
          <Route path='/review/:id' element={<Review />} />
          <Route path='/listReview' element={<ListReview />} />
          <Route path='/compare/:id' element={<Compare />} />
          <Route path='/makeBirdCage' element={<MakeBirdCage />} />
          <Route path='/listProducts/:id' element={<ListProducts />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/complete' element={<Complete />} />
          <Route path='/users' element={<User />} />
          <Route path='/recentActivity' element={<RecentActivity />} />
          <Route path='/editProduct/:id' element={<ProductDetail />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='/addPromotion' element={<AddPromotion />} />
        <Route path='/staffOrder' element={<StaffOrders />} />
        <Route path='/staffReport' element={<StaffReport />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/managerOrderDetail/:id' element={<ManagerOrderDetail />} />
        <Route path='/managerOrder' element={<ManagerOrder />} />
        <Route path='/managerProducts' element={<ManagerProducts />} />
        <Route path='/managerPromotions' element={<ManagerPromotions />} />
        <Route path='/managerStaff' element={<ManagerStaff />} />
        <Route path='/managerReport' element={<ManagerReport />} />
        <Route path='/homeStaff' element={<HomeStaff />} />
        <Route path='/homeAdmin' element={<HomeAdmin />} />
        <Route path='/homeManager' element={<HomeManager />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/rate' element={<RateProduct />} />
        <Route path='/staffOrderDetail/:id' element={<StaffOrderDetail />} />

      </Routes>
    </div>

  );
}

export default App;
