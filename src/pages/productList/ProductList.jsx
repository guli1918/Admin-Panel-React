import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { productRows } from '../../dummyData';
import { useState } from 'react';

export default function ProductList() {
	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'product',
			headerName: 'Product',
			width: 250,
			renderCell: (params) => {
				return (
					<div className='productListItem'>
						<img
							className='productListImg'
							src={params.row.img}
							alt='ImageDef'
						/>
						{params.row.name}
					</div>
				);
			},
		},
		{
			field: 'stock',
			headerName: 'Stock',
			width: 400,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 215,
		},
		{
			field: 'price',
			headerName: 'Item Price ',
			width: 200,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: (params) => {
				return (
					<div className='productListContainer'>
						<Link
							className='productListContainer link'
							to={'/product/' + params.row.id}
						>
							<button className='productListEdit'>Edit</button>
						</Link>
						<DeleteOutline
							className='productListDelete'
							onClick={() => handleDelete(params.row.id)}
						/>
					</div>
				);
			},
		},
	];
	return (
		<div className='productList'>
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={10}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
}
