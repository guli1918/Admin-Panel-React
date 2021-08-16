import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { userRows } from '../../dummyData';
import { useState } from 'react';

export default function UserList() {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'user',
			headerName: 'Username',
			width: 250,
			renderCell: (params) => {
				return (
					<div className='userListUser'>
						<img
							className='userListImg'
							src={params.row.avatar}
							alt='Avatar'
						/>
						{params.row.username}
					</div>
				);
			},
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 400,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 215,
		},
		{
			field: 'transaction',
			headerName: 'Transaction Volume',
			width: 200,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: (params) => {
				return (
					<div className='userListContainer'>
						<Link
							className='userListContainer link'
							to={'/user/' + params.row.id}
						>
							<button className='userListEdit'>Edit</button>
						</Link>
						<DeleteOutline
							className='userListDelete'
							onClick={() => handleDelete(params.row.id)}
						/>
					</div>
				);
			},
		},
	];

	return (
		<div className='userList'>
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
