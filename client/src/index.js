import React from 'react'
import ReactDOM from 'react-dom'
// import App from './containers/App'
import Router from './containers/Router'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(<Router />, document.getElementById('root'))
registerServiceWorker()
