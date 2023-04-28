// import { useState } from "react"
import './App.css'
// import {nanoid} from 'nanoid'
import React, { useState } from 'react';

const initProds = [
	{id: id(), name: 'prod1', catg: 'catg1', cost: 100},
	{id: id(), name: 'prod2', catg: 'catg2', cost: 200},
	{id: id(), name: 'prod3', catg: 'catg3', cost: 300},
];

// const initNotes = [
// 	{
// 		id: 'GYi9G_uC4gBF1e2SixDvu',
// 		prop1: 'value11',
// 		prop2: 'value12',
// 		prop3: 'value13',
// 	},
// 	{
// 		id: 'IWSpfBPSV3SXgRF87uO74',
// 		prop1: 'value21',
// 		prop2: 'value22',
// 		prop3: 'value23',
// 	},
// 	{
// 		id: 'JAmjRlfQT8rLTm5tG2m1L',
// 		prop1: 'value31',
// 		prop2: 'value32',
// 		prop3: 'value33',
// 	},
// ];

function App() {
	const [notes, setNotes] = useState(initNotes)

	function remItem(id) {
		setNotes(notes.filter(not => not.id !== id))
	}

	const result = notes.map(not => {
		return <p key={not.id}>
			<span>{not.prop1}{<br />}</span>
			<span>{not.prop2}{<br />}</span>
			<span>{not.prop3}{<br />}</span>
			<button onClick={() => remItem(not.id)}>remove</button>
		</p>
	})
	return <div>
		{result}
	</div>
}



export default App