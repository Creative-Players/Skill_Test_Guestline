import { useState } from 'react';
import Item from '../components/Item';
import StarRating from '../components/StarRating';
import VisitorCnt from '../components/VisitorCnt';
import { Constants } from '../constant';

const HotelList = () => {
    const [rate, setRate] = useState<number>(Constants.initialValue);
    const [adult, setAdult] = useState<number>(0);
    const [child, setChild] = useState<number>(0);

    return (
        <>
            <section className='header'>
                <div className='backImg position-relative w-100 '>
                    <img className='w-100' style={{ 'height': '400px' }} src="asset/img/background.jpg" alt="" />

                    <div className='d-flex align-items-center justify-content-center shadow bg-white p-2 mx-auto w-50  mb-3' style={{ 'left': '50%', 'top': '90%', 'transform': 'translateY(-50%)' }}>
                        <StarRating rate={rate} setRate={setRate} />
                        <VisitorCnt adult={adult} child={child} setAdult={setAdult} setChild={setChild} />
                    </div>
                </div>

            </section>
            <div className='container'>
                <Item rate={rate} adult={adult} child={child} />
            </div>

        </>
    );

};

export default HotelList;