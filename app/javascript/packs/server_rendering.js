// // By default, this pack is loaded for server-side rendering.
// // It must expose react_ujs as `ReactRailsUJS` and prepare a require context.
// var componentRequireContext = require.context("components", true);
// var ReactRailsUJS = require("react_ujs");
// ReactRailsUJS.useContext(componentRequireContext);

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

const componentRequireContext = require.context('components', true)
const ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)

ReactRailsUJS.serverRender = function(renderFunction, componentName, props) {
    const ComponentConstructor = this.getConstructor(componentName)
    const stylesheet = new ServerStyleSheet()
    const wrappedElement = stylesheet.collectStyles(
        <ComponentConstructor {...props} />
    )
    const text = ReactDOMServer[renderFunction](wrappedElement)

    // prepend the style tags to the component HTML
    return `${stylesheet.getStyleTags()}${text}`
}
