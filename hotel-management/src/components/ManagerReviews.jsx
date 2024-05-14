import './ManagerReviews.css';

const reviews = [
  {
    name: 'Name Surname',
    category: 'Room/Restaurant/Staff',
    text: 'Sample Text'
  },
  {
    name: 'Name Surname',
    category: 'Room/Restaurant/Staff',
    text: 'Sample Text'
  },
  {
    name: 'Name Surname',
    category: 'Room/Restaurant/Staff',
    text: 'Sample Text'
  },
  {
    name: 'Name Surname',
    category: 'Room/Restaurant/Staff',
    text: 'Sample Text'
  },
  {
    name: 'Name Surname',
    category: 'Room/Restaurant/Staff',
    text: 'Sample Text'
  },
  {
    name: 'Name Surname',
    category: 'Room/Restaurant/Staff',
    text: 'Sample Text'
  },
  {
    name: 'Name Surname',
    category: 'Room/Restaurant/Staff',
    text: 'Sample Text'
  },
  {
    name: 'Name Surname',
    category: 'Room/Restaurant/Staff',
    text: 'Sample Text'
  },
];

const ManagerReviews = () => {
    return (
        <div className="manager-reviews">
            <h2>Average Rating: 3.4</h2>
            <div className="reviews-container">
                {reviews.map((review, index) => (
                    <div className="review-card" key={index}>
                        <div className="review-header">
                            <h3>{review.name}</h3>
                            <button className="delete-button">Delete</button>
                        </div>
                        <p className="review-category">{review.category}</p>
                        <p className="review-text">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagerReviews;
