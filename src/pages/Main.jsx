import React from 'react';
import Banner from './Banner';
import Category from './shared/Category';
import PopularMenu from './PopularMenu';
import HomeCover from './HomeCover';
import Recomand from './Recomand';
import CheckMenu from './CheckMenu';
import Footer from './shared/Footer';

const Main = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <HomeCover></HomeCover>
            <PopularMenu></PopularMenu>
            <Recomand></Recomand>
            <CheckMenu></CheckMenu>
            <Footer></Footer>
        </>
    );
};

export default Main;