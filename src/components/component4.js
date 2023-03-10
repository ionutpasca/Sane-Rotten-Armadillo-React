import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className="component4-container">
      <div className="component4-container1 classnamedskauydsadsa">
        <h1>{props.heading}</h1>
      </div>
    </div>
  )
}

Component4.defaultProps = {
  image_alt: 'image',
  heading: 'Heading',
  image_src: 'e3094cba-f05d-44de-ba16-901fc6a8880e',
}

Component4.propTypes = {
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component4
