import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header';

import './index.css'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet>
      <title>Dan Andersson</title>
      <meta name="description" content="Dan Andersson - JavaScript Developer" />
      <meta name="keywords" content="blog, javascript, developer, dan, andersson" />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
