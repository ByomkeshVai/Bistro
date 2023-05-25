import React from 'react';
import useMenu from './../hooks/useMenu';
import SubTitle from './shared/SubTitle';
import MenuItem from './MenuItem';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == "popular")

    return (
        <>
             <section className="mb-12 ">
            <SubTitle title={"FROM OUR MENU" } subtitle={"---Check it out---"}></SubTitle>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
                </section>
            </>
            
    );
};

export default PopularMenu;