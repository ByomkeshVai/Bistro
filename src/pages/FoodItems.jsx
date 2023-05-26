import React from 'react';
import useMenu from '../hooks/useMenu';
import ItemCover from './shared/ItemCover';
import MenuItem from './MenuItem';
import MenuCategory from './MenuCategory';
import desert from '../assets/menu/dessert-bg.jpeg'
import soups from '../assets/menu/soup-bg.jpg'
import salads from '../assets/menu/salad-bg.jpg'
import pizzas from '../assets/menu/pizza-bg.jpg'

const FoodItems = () => {
     const [menu] = useMenu();
    const dessert = menu.filter(item => item.category == "dessert")
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    return (
        <>
            <MenuCategory img={desert} food={dessert} title={"desert"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory img={soups} food={soup} title={"soup"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory img={salads} food={salad} title={"salad"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory img={pizzas} food={pizza} title={"pizza"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
        </>
    );
};

export default FoodItems;