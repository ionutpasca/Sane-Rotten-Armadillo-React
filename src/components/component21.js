import React from 'react'

import PropTypes from 'prop-types'

import './component21.css'

const Component21 = (props) => {
  return (
    <div className={`component21-container ${props.rootClassName} `}>
      <div className="component21-container1">
        <div className="component21-container2">
          <h1 className="">{props.heading}</h1>
        </div>
      </div>
    </div>
  )
}

Component21.defaultProps = {
  heading: 'Heading',
  rootClassName: '',
}

Component21.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component21
