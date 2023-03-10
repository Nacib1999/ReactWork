import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import NavigationBar from './consommation/NavBar';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./Components/about'));
const Home = lazy(() => import('./Components/home'));
const Products = lazy(() => import('./Components/Products'));
const ProductsFunc = lazy(() => import('./consommation/Products'));
const ProductDetails = lazy(() => import('./Components/ProductDetails'));
const ProductDetailsApi = lazy(() => import('./consommation/ProductDetails'));
const AddProduct = lazy(() => import('./consommation/AddProduct/AddProduct'));
const UpdateProduct = lazy(()=>import('./consommation/UpdateProduct/UpdateProduct'))
function App() {
  return (
    <div className="App">

      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/products'>
            <Route index element={<ProductsFunc />} />
            {/* <Route path=':productName' element={<ProductDetails/>} /> */}
            <Route path=':id' element={<ProductDetailsApi />} />

            <Route path='add' element={<AddProduct />} />
            <Route path='update/:id' element={<UpdateProduct />}/>
          </Route>
          {/* 
        <Route path='/products'>
          <Route index element={<Products />} />
          <Route path=':productName' element={<ProductDetails/>} />

        </Route> */}


          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
