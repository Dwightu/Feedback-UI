import React from 'react'

import Protypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: Protypes.node.isRequired,
    version: Protypes.string,
    type: Protypes.string,
    isDisabled: Protypes.bool
}

export default Button