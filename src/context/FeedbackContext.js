import { createContext, useState, useEffect } from "react";

import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isloading, setIsLoading] = useState(true);

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:3000/feedback`)
        const data = await response.json()
        setFeedback(data)

        setIsLoading(false)
    }

    const updateFeedback = (id, upItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...upItem } : item))
    }


    const deleteFeedback = (id) => {
        if (window.confirm(`Are you sure you want to delete the comment ${id} ?`)) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //set item to be updated
    const editFeedback = ((item => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }))


    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        isloading,
        feedbackEdit,
        updateFeedback
    }}>{children}</FeedbackContext.Provider>
}



// [
//     {
//         id: 1,
//         text: 'You can try to submit a comment by your self.',
//         rating: 10,
//     },
//     {
//         id: 2,
//         text: 'This is a front-end project, all data will not be stored, so everytime you flash the page, it will return to the original default comments.',
//         rating: 3,
//     },
//     {
//         id: 3,
//         text: 'This project goes over all of the fundamentals of React including Props, useState, useContext, useEffect.',
//         rating: 5,
//     }
// ]
export default FeedbackContext