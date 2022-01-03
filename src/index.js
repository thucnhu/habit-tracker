import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { auth, db } from './lib/firebase'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
