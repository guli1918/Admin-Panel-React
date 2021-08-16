import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import './product.css';

export default function Product() {
	return (
		<div className='product'>
			<div className='productTitleContainer'>
				<h1 className='productTitle'>Product</h1>
				<Link className='link' to='/newProduct'>
					<button className='productAddButton'>Create</button>
				</Link>
			</div>
			<div className='productTop'>
				<div className='productTopLeft'>
					<Chart
						data={productData}
						dataKey='Sales '
						title='Sales Performance'
					/>
				</div>
				<div className='productTopRight'>
					<div className='productInfoTop'>
						<img
							src='https://lcdn.altex.ro/media/catalog/product/C/A/CASAIRPODS_313d0f7a.jpg'
							alt='productImg'
							className='productInfoImg'
						/>
						<span className='productName'>Apple Airpods</span>
					</div>
					<div className='productInfoBottom'>
						<div className='productInfoItem'>
							<div className='productInfoKey'>id:</div>
							<div className='productInfoValue'>155</div>
						</div>
						<div className='productInfoItem'>
							<div className='productInfoKey'>sales:</div>
							<div className='productInfoValue'>155</div>
						</div>
						<div className='productInfoItem'>
							<div className='productInfoKey'>active:</div>
							<div className='productInfoValue'>yes</div>
						</div>
						<div className='productInfoItem'>
							<div className='productInfoKey'>in stock:</div>
							<div className='productInfoValue'>no</div>
						</div>
					</div>
				</div>
			</div>
			<div className='productBottom'>
				<form className='productForm'>
					<div className='productFormLeft'>
						<label>Product Name</label>
						<input type='text' placeholder="Apple Airpod's" />
						<label>In Stock</label>
						<select name='inStock' id='idStock'>
							<option value='yes'>Yes</option>
							<option value='no'>No</option>
						</select>
						<label>Active</label>
						<select name='active' id='idActive'>
							<option value='yes'>Yes</option>
							<option value='no'>No</option>
						</select>
					</div>
					<div className='productFormRight'>
						<div className='productUpload'>
							<img
								src='https://lcdn.altex.ro/media/catalog/product/C/A/CASAIRPODS_313d0f7a.jpg'
								alt='imgApple'
								className='productUploadImg'
							/>
							<label for='file'>
								<Publish />
							</label>
							<input
								type='file'
								id='file'
								className='productFileUpload'
							/>
						</div>
						<button
							onClick={(res) => {
								res.preventDefault();
							}}
							className='productButton'
						>
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
