import FeedbackItem from "./FeedbackItem";



function FeedbackList({ feedback }) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback</p>
    }

    console.log(feedback);
    return (
        < div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item}></FeedbackItem>
            ))}
        </div>
    )
}

export default FeedbackList