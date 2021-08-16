import './newProduct.css';

export default function NewProduct() {
	return (
		<div className='newProduct'>
			<h1 className='newProductTitle'>New Product</h1>
			<div className='newProductFields'>
				<div className='newProductItem'>
					<label className='newProductName'>Image</label>
					<input type='file' />
				</div>
				<div className='newProductItem'>
					<label className='newProductName'>Name</label>
					<input
						type='text'
						className='newProductInput'
						placeholder='Apple Airpods'
					/>
				</div>
				<div className='newProductItem'>
					<label className='newProductName'>Stock</label>
					<input
						type='number'
						className='newProductInput'
						placeholder='Apple Airpods'
					/>
				</div>
				<div className='newProductItem'>
					<label className='newProductName'>Active</label>
					<select
						className='newProductInputs'
						name='active'
						id='active'
					>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>
			</div>
			<button className='newProductButton'>Create</button>
		</div>
	);
}
