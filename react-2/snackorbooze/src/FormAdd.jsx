import { useState } from 'react';
import './FormAdd.css';
import axios from 'axios';

/** Renders an Item Form.
 * 
 * -Allows user to add a snack or drink item.
 * -It sends form data to a server using an HTTP POST request and updates the UI.
 * -Error handling for the handleSubmit function.
 * -Form will not be submitted if required fields are not filled out.
 * 
 */

const BASE_API_URL = 'http://localhost:5000';

const addDrinkUrl = () => `${BASE_API_URL}/drinks`;
const addSnackUrl = () => `${BASE_API_URL}/snacks`;

function AddItem({updateSnack}) {
	const [ formData, setFormData ] = useState({ item: 'snack', name: '' });
	const [ isAdded, setIsAdded ] = useState(false);
	const { item, name } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({...formData, [name]: value}));
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			if (name === '') {
				alert('Form cannot be blank');
				return;
			}
			const data = { name };
			// if `item` is equal to `drink`, addDrinkUrl is called to get the URL, otherwise, the addSnackUrl is called
			const url = item === 'drink' ? addDrinkUrl() : addSnackUrl();
			await axios.post(url, data);
			setIsAdded(true);
            updateSnack((snack) => [...snack, data])
			// clear form data after submission
			setFormData({ item: 'snack', name: '' });
		} catch (error) {
			console.error(error);
			alert('An error occurred while adding the item. Please try again.');
		}
	};

	return (
		<div className="ItemForm">
			<h2 className="h2">Add Item</h2>
			{isAdded && <p style={{ color: 'green' }}>Item added!</p>}
			<form onSubmit={handleSubmit}>
				<label className="SelectInput" htmlFor="item">
					Select:
				</label>
				<select
					onChange={handleChange}
					id="item"
					name="item"
					defaultValue={formData.item}
					aria-label="Select item type"
				>
					<option value="snack">Snack</option>
					<option value="drink">Drink</option>
				</select>
				<br />

				<label className="ItemName" htmlFor="name">
					Item Name:
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={handleChange}
					placeholder="Snack or Drink"
					required
					aria-label="Enter item name"
				/>
				<br />

				<button type="submit" style={{ marginRight: '10px' }}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default AddItem;