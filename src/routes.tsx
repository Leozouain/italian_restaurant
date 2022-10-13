import Start from './pages/Start/index';
import Menu from './pages/Menu/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavB from './components/menu';
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Dish from './pages/Dish';




export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <NavB />
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<Start />} />
                        <Route path='menu' element={<Menu />} />
                        <Route path='about' element={<About/>}/>
                    </Route>
                    <Route path='dish/:id' element={<Dish/>}/>
                    <Route path='*' element={<NotFound/>} />
                    
                </Routes>
                <Footer/>
            </Router>
        </main>
    );
}

{/* <Route path='/' element={<Header />} /> */ }
{/* <Route path='/menu' element={<Menu />} /> */ }