
import { Row } from 'react-bootstrap';
import useReview from '../../Hook/useReview';
import Review from '../Review/Review';

const Reviews = () => {
   const [reviews] = useReview()
    return (
        <div>
            <h4 className='mt-5 text-center'>Reviewed by People</h4>
            <h1 className='fw-bold text-center'>Clients' Testimonials</h1>
            <Row xs={1} md={3} className="g-4">
            {
                reviews.map(review => <Review
                  key={review.id}
                  review={review}

                
                ></Review>)
            }
            </Row>
        </div>
    );
};

export default Reviews;