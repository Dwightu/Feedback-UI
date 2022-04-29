import React from "react";

import Header from "./components/Header";

import { useState } from "react";

import FeedbackData from "./data/FeedbackData";

import FeedbackStats from "./components/FeedbackStats";

import FeedbackList from "./components/FeedbackList";

import FeedbackForm from "./components/FeedbackForm";

import { v4 as uuidv4 } from 'uuid'

function App() {

    //Grobal State
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm(`Are you sure you want to delete the comment ${id} ?`)) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }


    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />

            </div>
        </>
    )
}



// function App() {
//     return React.createElement('div', { className: 'container' },
//         React.createElement('h1', {}, 'My app'))
// }


export default App