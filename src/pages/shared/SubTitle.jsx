import React from 'react';

const SubTitle = ({subtitle, title}) => {
    return (
        <div className='text-center mx-auto leading-3 mt-8 mb-8'>
            <p className='text-yellow-700 italic'>{subtitle}</p>
            <hr className='border border-2 w-64 mx-auto mb-2 mt-5'/>
            <h3 className='text-xl mx-auto'>{title}</h3>
            <hr className='border border-2 w-64 mx-auto mt-2'/>
        </div>
    );
};

export default SubTitle;