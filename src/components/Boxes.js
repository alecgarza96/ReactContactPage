import React from 'react'
import BoxOne from './BoxOne'
import BoxTwo from './BoxTwo'

export default function Boxes() {
	return (
		<div class="main">
			<div>
				<h1 class="header">CONTACT US</h1>
			</div>
			<div class="boxes">
				<BoxOne />
				<BoxTwo />
			</div>
		</div>
		)
}