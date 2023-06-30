import { Hotel } from '../Types';

interface CarouselProps {
    hotelInfo: Hotel;
}

const Carousel = ({ hotelInfo }: CarouselProps) => {
    return (
        <div>

            <div id={hotelInfo.id + `carouselExampleCaptions`} className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={`#` + hotelInfo.id + `carouselExampleCaptions`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={`#` + hotelInfo.id + `carouselExampleCaptions`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target={`#` + hotelInfo.id + `carouselExampleCaptions`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {hotelInfo.images.map((image, index) => (
                        <div key={index} className={index === 0 ? `carousel-item active` : `carousel-item`} data-bs-interval="5000">
                            <img src={image.url} alt={hotelInfo.name} style={{ 'height': '200px', 'width': '200px' }} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#` + hotelInfo.id + `carouselExampleCaptions`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#` + hotelInfo.id + `carouselExampleCaptions`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
