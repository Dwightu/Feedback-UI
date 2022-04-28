import { useState } from 'react'




function FeedbackItem() {

    //设置state
    const [rating, setRating] = useState(10)
    const [text, setText] = useState('This is an example of a feedback Item')

    const handleClick = () => {
        setRating((prev) => {
            return prev + 1
        })
    }




    return (
        <div className='card'>
            <div className="num-display">{rating}
            </div>
            <div className="text-display">
                {text}
            </div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FeedbackItem;