import { useState } from 'react'
import Card from "./shared/Card"

import Button from './shared/Button'

import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {

    const [text, setText] = useState('')

    const [rating, setRating] = useState(10)

    const [btnDisabled, setBtnDisabled] = useState(true)

    const [message, setMessage] = useState('')

    //添加实时更新
    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }


    //处理提交请求
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            // console.log(newFeedback)
            handleAdd(newFeedback);
            setText('')
        }
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you like to rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" value={text} placeholder="Write a review" />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}


export default FeedbackForm