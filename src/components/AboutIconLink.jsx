import { FaQuestion } from 'react-icons/fa'

//添加Link防止页面reload
import { Link } from 'react-router-dom'



function AboutIconLink() {
    return (
        <div className='about-link'>

            <Link to={{
                pathname: '/about',
            }}>
                <FaQuestion size={30}>
                </FaQuestion>
            </Link>

        </div >
    )
}

export default AboutIconLink