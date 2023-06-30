import { Rating } from 'react-simple-star-rating';
import { Hotel } from '../Types';
import data from '../api/data.json';
import Carousel from './Carousel';
import Detail from './Detail';
import RoomList from './RoomList';

interface ItemProps {
    rate: number;
    adult: number;
    child: number;
}

const Item = ({ rate, adult, child }: ItemProps) => {

    const filteredHotels: (Array<Hotel>) = data.filter(hotel => Number(hotel.starRating) === rate);

    if (filteredHotels.length === 0) {
        return <>
            <div className='p-2'>
                There is no Hotels.
            </div>
        </>
    }

    return (
        <div>
            {
                filteredHotels.map((hotelInfo, index) => (
                    <div key={index}>
                        <div className="container shadow mb-5">
                            <div className="row border-bottom py-2">
                                <div className='col-md-3'>
                                    <Carousel key={index} hotelInfo={hotelInfo} />
                                </div>
                                <div className='col-md-9 mt-2'>
                                    <div className='d-flex align-items-md-baseline  justify-content-between '>
                                        <Detail key={index} hotelInfo={hotelInfo} />
                                        <Rating initialValue={rate} style={{ pointerEvents: "none" }} />
                                    </div>
                                </div>

                            </div>
                            <RoomList key={index} hotelInfo={hotelInfo} adult={adult} child={child} />
                        </div>
                    </div>
                ))
            }

        </div >
    )
}

export default Item
