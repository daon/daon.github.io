import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { TypographyStyle, GoogleFont } from 'react-typography';

import typography from './utils/typography';

import favicon16x16 from './images/favicon-16x16.png';
import favicon32x32 from './images/favicon-32x32.png';
import favicon96x96 from './images/favicon-96x96.png';
import favicon128x128 from './images/favicon-128x128.png';
import favicon196x196 from './images/favicon-196x196.png';

const BUILD_TIME = new Date().getTime();
let styleStr;
if (process.env.NODE_ENV === 'production') {
    try {
        stylesStr = require(`!raw-loader!../public/styles.css`)
    } catch (e) {
        console.log(e)
    }
}

export default class HTML extends Component {
    static propTypes = {
        body: PropTypes.string
    };

    render() {
        const head = Helmet.rewind();

        let css;
        if (process.env.NODE_ENV === 'production') {
            css = (
                <style
                    id="gatsby-inlined-css"
                    key="gatsby-inlined-css"
                    dangerouslySetInnerHTML={{ __html: styleStr }}
                />
            )
        }

        return (
            <html lang="en">
                <head>
                    <TypographyStyle typography={typography} />
                    <GoogleFont typography={typography} />
                    {this.props.headComponents}
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, inital-scale=1.0" />
                    <link rel="icon" type="image/png" href={favicon196x196} sizes="196x196" />
                    <link rel="icon" type="image/png" href={favicon96x96} sizes="96x96" />
                    <link rel="icon" type="image/png" href={favicon32x32} sizes="32x32" />
                    <link rel="icon" type="image/png" href={favicon16x16} sizes="16x16" />
                    <link rel="icon" type="image/png" href={favicon128x128} sizes="128x128" />
                    {css}
                </head>
                <body>
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                </body>
            </html>
        );
    }
}