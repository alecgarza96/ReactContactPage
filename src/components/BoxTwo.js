import React from 'react'

export default function BoxTwo() {
	return (
		<div class="boxTwo">
			<form>
				<div class="formTopRow">
					<div class="firstName">
  						<input type="text" id="fname" name="fname" value="First"/>
  					</div>
  					<div class="lastName">
  						<input type="text" id="lname" name="fname" value="Last"/>
  					</div>
  				</div>
  				<div class="formSecondRow">
  					<div class="email">
  						<input type="text" id="email" name="email" value="Email"/>
  					</div>
  					<div class="budget">
  						<input type="text" id="budget" name="budget" value="Budget"/>
  					</div>
  				</div>
  				<input type="text" class="message" value="Message"/><br></br><br></br>
  				<button>submit</button>
			</form> 
		</div>
		);
}