import React from "react";

import Header from "./components/Header";

import FeedbackItem from "./components/FeedbackItem";

import { useState } from "react";

import FeedbackData from "./data/FeedbackData";

import FeedbackList from "./components/FeedbackList";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header />
            <div className="container">
                {/* <FeedbackItem /> */}
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}



// function App() {
//     return React.createElement('div', { className: 'container' },
//         React.createElement('h1', {}, 'My app'))
// }


export default App