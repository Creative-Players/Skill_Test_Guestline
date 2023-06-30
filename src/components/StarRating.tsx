import { Rating } from 'react-simple-star-rating';

interface StarRatingProps {
    rate: number;
    setRate: any;
}

const StarRating = ({ rate, setRate }: StarRatingProps) => {

    const handleRating = (rate: number) => {
        setRate(rate);
    }

    return (
        <div>
            <Rating
                onClick={handleRating}
                initialValue={rate}
            />
        </div>
    )
}

export default StarRating
