import React from 'react';
import featured from '../assets/home/featured.jpg'
import SubTitle from './shared/SubTitle';

const CheckMenu = () => {
    return (
        <>
            <div className="hero h-[600px] mt-12 mb-12 text-gray-900" style={{ backgroundImage: `url("${featured}")` }}>
                    <div className="hero-overlay bg-opacity-50 bg-stone-950 ">
                        <div className='text-center mx-auto leading-3 mt-8 mb-8'>
                        <p className='text-yellow-500 text-xl italic'>---Check it out---</p>
                        <hr className='border border-2 w-64 mx-auto mb-2 mt-5'/>
                        <h3 className='text-xl mx-auto text-xl text-slate-50'>"FROM OUR MENU"</h3>
                        <hr className='border border-2 w-64 mx-auto mt-2'/>
                    </div>
                    <div className="content-area mx-auto flex items-center max-w-screen-lg gap-10">
                         <div className="img-area ">
                            <img src={featured} className=' ' alt="" />
                        </div>
                        <div className="text-area text-slate-50 font-normal">
                            <h3 className='text-xl'>March 20, 2023</h3>
                            <h3 className='text-xl'>WHERE CAN I GET SOME?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        </div>
                       </div>
                </div>
                </div>
        </>
    );
};

export default CheckMenu;