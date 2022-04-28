import FeedbackItem from "./FeedbackItem";
import Protypes from 'prop-types'


function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback</p>
    }

    console.log(feedback);
    return (
        < div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}></FeedbackItem>
            ))}
        </div>
    )
}

FeedbackList.prototype = {
    // feedback: Protypes.array
    feedback: Protypes.arrayOf(
        Protypes.shape({
            id: Protypes.number.isRequired,
            rating: Protypes.number.isRequired,
            text: Protypes.string.isRequired
        })
    )
}


export default FeedbackList