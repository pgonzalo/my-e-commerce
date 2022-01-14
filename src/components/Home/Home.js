import React from 'react';
import { ItemListContainer } from '../itemListContainer/ItemListContainer';
import CarouselContainer from '../carousel/Carousel';

const Home = () => {
    return (
        <div>
            <CarouselContainer /> 
            <ItemListContainer />
        </div>
    )
}

export default Home
