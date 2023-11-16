import { Header } from './../partials/Header.jsx'
import { Slider } from './../components/Slider.jsx'
import { ProductosGrid } from './../components/ProductosGrid.jsx';
import { Footer } from './../partials/Footer.jsx'

import celulares from './../data/celulares.json';
import computadoras from './../data/computadoras.json';
import televisores from './../data/televisores.json';

export const Home = () => {
    return (
        <>
            <Header/>
            <Slider/>  
            <ProductosGrid productos={celulares} category='celulares'/>
            <ProductosGrid productos={computadoras} category='computadoras'/>
            <ProductosGrid productos={televisores} category='televisores'/>
            <Footer/>
        </>
    )
}