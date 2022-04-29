

import { useParams } from 'react-router-dom'


function Post() {

    const params = useParams()
    return (
        <div>
            <h1>Post</h1>
            <p>{params.id}</p>
        </div>
    )
}

export default Post