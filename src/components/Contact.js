import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({contactData}) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	
	const handleName = (e) => { setName(e.target.value) }
	const handleEmail = (e) => { setEmail(e.target.value) }
	const handleMessage = (e) => { setMessage(e.target.value) }
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		const servId = process.env.REACT_APP_SERVICE_ID;
		const tempId = process.env.REACT_APP_TEMPLATE_ID;
		const userId = process.env.REACT_APP_USER_ID;

		emailjs.sendForm(servId, tempId, e.target, userId)
		.then((result) => {
			// alert(result.text);
			alert('Thank you')
		}, (error) => {
			console.log(error.text);
		});
	}

	return (
		<div className="Contact w-10/12 mx-auto py-10" id="contact">
			<h1 className="text-4xl text-center my-5">Contact Me</h1>
			<form className="w-full md:w-2/3 mx-auto" onSubmit={handleSubmit}>
				<label htmlFor="name" className="text-xl">Name:</label>
				<input 
					className="w-full bg-white border border-gray-500 px-3 py-1" 
					type="text" 
					name="name"
					onChange={handleName}
					value={name}
					required={true}
				/>
				<label htmlFor="name" className="text-xl">Email:</label>
				<input 
					className="w-full bg-white border border-gray-500 px-3 py-1" 
					type="email" 
					name="email"
					onChange={handleEmail}
					value={email}
					required={true}
				/>
				<label htmlFor="name" className="text-xl">Message:</label>
				<textarea 
					className="w-full bg-white border border-gray-500 px-3 py-1"
					name="message" 
					onChange={handleMessage}
					value={message}
					cols="30" 
					rows="5"
				></textarea>
				<button 
					className="w-full py-1 bg-blue-400 hover:text-green-100"
					type="submit"
				>
					Submit
				</button>
				<span className="text-xl block my-1">Or, mail me at:</span>
				<a 
					className="w-full block py-1 bg-green-400 text-center hover:text-blue-100"
					href={`mailto:${contactData.email}`}
				>
					{contactData.email}
				</a>
			</form>
		</div>
	)
}

export default Contact;