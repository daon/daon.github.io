import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import Header from '../components/Header';

import './index.css'

const StyledMain = styled.main`
`;

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet>
      <title>Dan Andersson</title>
      <meta name="description" content="Dan Andersson - JavaScript Developer" />
      <meta name="keywords" content="blog, javascript, developer, dan, andersson" />
    </Helmet>
    <Header />
    <StyledMain>
      {children()}
    </StyledMain>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
