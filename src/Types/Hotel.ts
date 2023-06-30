import ImageType from "./ImageType";
import RoomType from './RoomType';

interface Hotel {
    id: string;
    name: string;
    description: string,
    address1: string,
    address2: string,
    postcode: string,
    town: string,
    countryCode: string,
    country: string,
    facilities: Array<object>,
    telephone: string,
    email: string,
    images: Array<ImageType>,
    checkInHours: string,
    checkInMinutes: string,
    checkOutHours: string,
    checkOutMinutes: string,
    position: object,
    starRating: string,
    rooms: Array<RoomType>
}

export default Hotel