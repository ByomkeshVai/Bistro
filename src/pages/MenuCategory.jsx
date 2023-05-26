import React from 'react';
import useMenu from '../hooks/useMenu';
import SubTitle from './shared/SubTitle';
import MenuItem from './MenuItem';
import ItemCover from './shared/ItemCover';
import { Link } from 'react-router-dom';

const MenuCategory = ({food, img, title, subtitle}) => {
    return (
        <>
            <section className="mb-12 ">
            {title && <ItemCover title={title} subtitle={subtitle} img={img}></ItemCover>}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    {
                    food?.slice(0, 6)?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
                </div>
                <button className="btn btn-outline border-0 border-b-4 mt-4"><Link to={`/order/${title}`}>View Full Menu</Link></button>
                </section>
        </>
    );
};

export default MenuCategory;