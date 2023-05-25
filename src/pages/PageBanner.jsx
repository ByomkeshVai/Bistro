import React from 'react';
import menu from '../assets/menu/banner3.jpg'

const PageBanner = ({title, subtitle}) => {
    return (
        <div className="hero h-[520px] mb-12 text-gray-900" style={{ backgroundImage: `url("${menu}")` }}>
                    <div className="hero-content text-center text-slate-50  w-11/12">
                    <div className="max-w-xl p-8 text-slate-50 text-neutral-content hero-overlay bg-opacity-50 bg-zinc-950 p-16">
                    <h1 className="mb-5 text-slate-50 text-5xl font-bold uppercase">{title }</h1>
                    <p className="mb-5 text-slate-50 text-sm">{subtitle }</p>

                    </div>
                </div>
            </div>
    );
};

export default PageBanner;