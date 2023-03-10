import React from 'react'

import PropTypes from 'prop-types'

import './dsadsa-djosaijdisoaj-disja-iuhdsaiuhdsaiuhdsaihdsia-hdsadsa.css'

const DsadsaDjosaijdisoajDisjaIuhdsaiuhdsaiuhdsaihdsiaHdsadsa = (props) => {
  return (
    <div
      className={`dsadsa-djosaijdisoaj-disja-iuhdsaiuhdsaiuhdsaihdsia-hdsadsa-container ${props.rootClassName} `}
    >
      <h1 className="">{props.link_text}</h1>
      <h1 className="">{props.heading1}</h1>
      <h1 className="">{props.heading2}</h1>
      <span className="">{props.text}</span>
      <a
        href={props.link_text}
        target="_blank"
        rel="noreferrer noopener"
        className=""
      >
        {props.text1}
      </a>
    </div>
  )
}

DsadsaDjosaijdisoajDisjaIuhdsaiuhdsaiuhdsaihdsiaHdsadsa.defaultProps = {
  text1: 'Link',
  heading1: 'Heading',
  heading2: 'Heading',
  link_text: 'https://exasssssmple.com',
  text: 'Text',
  heading: 'Heading',
  rootClassName: '',
}

DsadsaDjosaijdisoajDisjaIuhdsaiuhdsaiuhdsaihdsiaHdsadsa.propTypes = {
  text1: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  link_text: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default DsadsaDjosaijdisoajDisjaIuhdsaiuhdsaiuhdsaihdsiaHdsadsa
