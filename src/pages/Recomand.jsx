import React from 'react';
import SubTitle from './shared/SubTitle';
import useMenu from '../hooks/useMenu';
import SingleItem from './SingleItem';

const Recomand = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == "popular")
    return (
        <>
            <SubTitle subtitle={"---Should Try---"} title={"CHEF RECOMMENDS"}></SubTitle>
            <div className="card-area grid lg:grid-cols-3 grid-cols-1 gap-5">
                {
                    popular?.slice(0, 3).map(item => <SingleItem
                        key={item._id}
                        item={item}
                    ></SingleItem>)
                }
            </div>
        </>
    );
};

export default Recomand;