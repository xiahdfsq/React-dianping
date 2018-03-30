import React from 'react'
import { render } from 'react-dom' 
import Perf from 'react-addons-perf'

window.appType = '__DEV__';
if(appType === '__DEV__') {
	window.Perf = Perf
}

import './static/css/common.less'
import Hello from './containers/Hello'

render(
	<Hello/>,
	document.getElementById('root')
)