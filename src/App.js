import React from "react";

import Header from "./components/Header";

import { useState } from "react";

import FeedbackData from "./data/FeedbackData";

import FeedbackStats from "./components/FeedbackStats";

import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";

function App() {

    //Grobal State
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm(`Are you sure you want to delete the comment ${id} ?`)) {
            setFeedback(feedback.filter((item) => item.id != id))
        }
    }


    return (
        <>
            <Header />
            <div className="container">
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