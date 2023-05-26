import React from 'react';
import dessert from '../../assets/menu/dessert-bg.jpeg'

const ItemCover = ({title, subtitle, img}) => {
    return (
        <>
             <div className="hero h-[460px] mt-12 mb-12 text-gray-900" style={{ backgroundImage: `url("${img}")` }}>
                
                <div className="hero-content text-center ">
                    <div className="max-w-xl p-8 hero-overlay bg-opacity-50 bg-zinc-950 p-16">
                        <h1 className="mb-5 text-slate-50 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 text-slate-50 text-sm">{subtitle}</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemCover;