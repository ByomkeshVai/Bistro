import React from 'react';
import PageBanner from '../pages/PageBanner';
import TodayOffer from '../pages/TodayOffer';
import MenuCategory from '../pages/MenuCategory';
import FoodItems from '../pages/FoodItems';

const Menu = () => {
    return (
        <>
            <PageBanner title={"our menu"} subtitle={"Would you like to try a dish?"}></PageBanner>
            <TodayOffer></TodayOffer>
            <FoodItems></FoodItems>
        </>
    );
};

export default Menu;