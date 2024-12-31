import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../css/BookACall.css';
import topArrow from '../assets/top-right.png';

const BookACall = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [companyUrl, setCompanyUrl] = useState('');
	const [servicesRequired, setServicesRequired] = useState('');
	const [budget, setBudget] = useState('');
	const [isDetailsVisible, setDetailsVisible] = useState(false);
	const [errors, setErrors] = useState({});

	const handleInputChange = (field, value) => {
		const newErrors = { ...errors };
		if (value.trim() !== '') {
			delete newErrors[field];
		}
		setErrors(newErrors);
	};

	useEffect(() => {
		document.body.classList.add('book-a-call-page');
		return () => {
		  document.body.classList.remove('book-a-call-page');
		};
	  }, []);

	useEffect(() => {
		if (name.trim() !== '' && email.trim() !== '') {
			setDetailsVisible(true);
		}

		window.scrollTo(0, 0);
	}, [name, email]);

	const validateForm = () => {
		const errors = {};
		if (!name.trim()) errors.name = 'Name is required';
		if (!email.trim()) errors.email = 'Email is required';
		if (!companyName.trim()) errors.companyName = 'Company Name is required';
		if (!servicesRequired) errors.servicesRequired = 'Please select a service';
		if (!budget) errors.budget = 'Please select a budget';

		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		const templateParams = {
			name: name,
			email: email,
			company_name: companyName,
			company_url: companyUrl,
			services_required: servicesRequired,
			budget: budget,
		};

		emailjs
			.send(
				'service_jggkjvg', // EmailJS service ID
				'template_t3ijq6u', // EmailJS template ID
				templateParams,
				'b-jPBYEoVU_G3vccU'
			)
			.then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					alert('Your call request has been sent successfully!');

					setName('');
					setEmail('');
					setCompanyName('');
					setCompanyUrl('');
					setServicesRequired('');
					setBudget('');
					setDetailsVisible(false);
					setErrors({});

					window.open('https://cal.com/sparkhausdigital', '_blank');
				},
				(err) => {
					console.log('FAILED...', err);
					alert('Something went wrong, please try again.');
				}
			);
	};

	return (
		<div className="book-a-call">
			<div className="book-a-call-header">
				<h2>
					Let us know <br />
					about your idea
				</h2>
				<p>
					It would be awesome to know more about you before we hop on that call.
				</p>
			</div>
			<form className="form-container" onSubmit={handleSubmit}>
				<div className="row">
					<span>Name</span>
					<input
						type="text"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
							handleInputChange('name', e.target.value);
						}}
						className={`form-input ${errors.name ? 'error' : ''}`}
					/>
					{errors.name && <small className="error-message">{errors.name}</small>}
				</div>

				<div className="row">
					<span>Email Address</span>
					<input
						type="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							handleInputChange('email', e.target.value);
						}}
						className={`form-input ${errors.email ? 'error' : ''}`}
					/>
					{errors.email && <small className="error-message">{errors.email}</small>}
				</div>

				<div className={`additional-fields ${isDetailsVisible ? 'show' : ''}`}>
					<div className="row">
						<span>Company Name</span>
						<input
							type="text"
							value={companyName}
							onChange={(e) => {
								setCompanyName(e.target.value);
								handleInputChange('companyName', e.target.value);
							}}
							className={`form-input ${errors.companyName ? 'error' : ''}`}
						/>
						{errors.companyName && (
							<small className="error-message">{errors.companyName}</small>
						)}
					</div>
					<div className="row">
						<span>Company URL</span>
						<input
							type="url"
							value={companyUrl}
							onChange={(e) => setCompanyUrl(e.target.value)}
							className="form-input fade-in"
						/>
					</div>
					<div className="row">
						<span>Services Required</span>
						<select
							value={servicesRequired}
							onChange={(e) => {
								setServicesRequired(e.target.value);
								handleInputChange('servicesRequired', e.target.value);
							}}
							className={`form-input ${errors.servicesRequired ? 'error' : ''}`}
						>
							<option value="">Select Service</option>
							<option value="Website">Website</option>
							<option value="Branding">Branding</option>
							<option value="Social Media Management">
								Social Media Management
							</option>
						</select>
						{errors.servicesRequired && (
							<small className="error-message">
								{errors.servicesRequired}
							</small>
						)}
					</div>
					<div className="row">
						<span>Budget</span>
						<select
							value={budget}
							onChange={(e) => {
								setBudget(e.target.value);
								handleInputChange('budget', e.target.value);
							}}
							className={`form-input ${errors.budget ? 'error' : ''}`}
						>
							<option value="">Select Budget</option>
							<option value="USD 0 - USD 350">USD 0 - USD 350</option>
							<option value="USD 350 - USD 1000">USD 350 - USD 1000</option>
							<option value="USD 1000+">USD 1000 +</option>
						</select>
						{errors.budget && (
							<small className="error-message">{errors.budget}</small>
						)}
					</div>

					<button type="submit" className="submit-button fade-in" style={{ fontWeight: 'normal' }}>
						BOOK A CALL
						<img src={topArrow} alt="arrow" className="arrow" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default BookACall;
