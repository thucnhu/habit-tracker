import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import FirebaseContext from './context/Firebase'
import { auth, db } from './lib/firebase'

ReactDOM.render(
	<React.StrictMode>
		<FirebaseContext.Provider value={{ auth, db }}>
			<App />
		</FirebaseContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
