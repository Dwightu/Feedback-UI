import FeedbackItem from "./FeedbackItem";
import Protypes from 'prop-types'


import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback</p>
    }

    console.log(feedback);

    return (
        < div className="feedback-list">
            <AnimatePresence>
                {feedback.map(item => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}></FeedbackItem>
                    </motion.div>
                ))}
            </ AnimatePresence>
        </div>
    )

    // return (
    //     < div className="feedback-list">
    //         {feedback.map(item =>
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}></FeedbackItem>
    //         )}
    //     </div>
    // )


}

FeedbackList.propTypes = {
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