import { Hotel } from '../Types';
import RoomType from '../Types/RoomType';

interface RoomListProps {
    hotelInfo: Hotel;
    adult: number;
    child: number;
}

const RoomList = ({ hotelInfo, adult, child }: RoomListProps) => {
    const filteredHotels: (Array<RoomType>) = hotelInfo.rooms.filter(room => room.adult >= adult && room.children >= child);

    if (filteredHotels.length === 0)
        return (
            <>
                <div className='p-2'>
                    There is no Rooms.
                </div>
            </>
        )
    return (
        <>
            {
                filteredHotels.map((room, index) => (
                    <>
                        <div key={index} className="row border-bottom">
                            <div className='col-md-3 p-4'>
                                <h4>Room {room.no + " " + room.name}</h4>
                                <p>
                                    Adults: {room.adult}
                                </p>
                                <p>
                                    Children: {room.children}
                                </p>
                            </div>
                            <div className='col-md-9 p-4'>
                                <p>{room.desc}</p>
                            </div>
                        </div>
                    </>
                ))
            }
        </>
    )
}

export default RoomList
