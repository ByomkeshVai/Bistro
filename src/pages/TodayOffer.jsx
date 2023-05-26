import React from 'react';
import useMenu from '../hooks/useMenu';
import MenuItem from './MenuItem';
import SubTitle from './shared/SubTitle';


const TodayOffer = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == "popular")
    return (
        <>
            <section className="mb-12 ">
            <SubTitle title={"TODAY'S OFFER"} subtitle={"---Don't miss---"}></SubTitle>
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

export default TodayOffer;