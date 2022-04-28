
import Protypes from 'prop-types'



function Card({ children, reverse }) {
    return (
        <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    )
}



Card.defaultProp = {
    reverse: false
}

Card.propTypes = {
    children: Protypes.node.isRequired,
    reverse: Protypes.bool,
}



export default Card