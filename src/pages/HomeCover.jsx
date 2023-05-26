import React from 'react';
import chef from '../assets/home/chef-service.jpg'

const HomeCover = () => {
    return (

        <div className="hero h-[460px] mt-12 mb-12 text-gray-900" style={{ backgroundImage: `url("${chef}")` }}>
                
                <div className="hero-content text-center text-gray-900 text-neutral-content bg-slate-50 w-9/12">
                    <div className="max-w-xl p-8">
                        <h1 className="mb-5 text-gray-900 text-5xl font-light uppercase">Bistro Boss</h1>
                        <p className="mb-5 text-gray-900 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>

                    </div>
                </div>
            </div>
    );
};

export default HomeCover;