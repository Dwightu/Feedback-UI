import React from "react";

import Header from "./components/Header";

import FeedbackStats from "./components/FeedbackStats";

import FeedbackList from "./components/FeedbackList";

import FeedbackForm from "./components/FeedbackForm";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AboutIconLink from "./components/AboutIconLink";

import AboutPage from './pages/AboutPage'

import Post from "./components/Post";

import Footer from './components/Footer'


//Better way of managing global state
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

    //Grobal State



    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm ></FeedbackForm>
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>
                        </Route>

                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/post/:id' element={<Post />} />
                    </Routes>

                    <AboutIconLink></AboutIconLink>
                    <Footer />
                </div>
            </Router >
        </ FeedbackProvider>
    )
}



// function App() {
//     return React.createElement('div', {className: 'container' },
//         React.createElement('h1', { }, 'My app'))
// }


export default App