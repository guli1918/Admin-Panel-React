import {
	CalendarToday,
	LocationCity,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './user.css';

export default function User() {
	return (
		<div className='user'>
			<div className='userTitleContainer'>
				<h1 className='userTitle'>Edit User</h1>
				<Link to='/newUser'>
					<button className='userAddButton'>Create</button>
				</Link>
			</div>
			<div className='userContainer'>
				<div className='userShow'>
					<div className='userShowTop'>
						<img
							src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
							className='userShowImg'
							alt='userPicture'
						/>
						<div className='userShowTopTitle'>
							<span className='userShowUsername'>
								Mustafa Ozdemir
							</span>
							<span className='userShowUserTitle'>
								Software Engineer
							</span>
						</div>
					</div>
					<div className='userShowBottom'>
						<span className='userShowTitle'>Account Details</span>
						<div className='userShowInfo'>
							<PermIdentity className='userShowIcon' />
							<span className='userShowInfoTitle'>
								mustafadennis
							</span>
						</div>
						<div className='userShowInfo'>
							<CalendarToday className='userShowIcon' />
							<span className='userShowInfoTitle'>
								28.07.1918
							</span>
						</div>
						<span className='userShowTitle'>Contact Details</span>
						<div className='userShowInfo'>
							<PhoneAndroid className='userShowIcon' />
							<span className='userShowInfoTitle'>
								+372 121212
							</span>
						</div>
						<div className='userShowInfo'>
							<MailOutline className='userShowIcon' />
							<span className='userShowInfoTitle'>
								mustafaozdemir@gmail.com
							</span>
						</div>
						<div className='userShowInfo'>
							<LocationCity className='userShowIcon' />
							<span className='userShowInfoTitle'>
								Tallinn | Estonia
							</span>
						</div>
					</div>
				</div>
				<div className='userUpdate'>
					<span className='userUpdateTitle'>Edit</span>
					<form className='userUpdateForm'>
						<div className='userUpdateLeft'>
							<div className='userUpdateItem'>
								<label>Username</label>
								<input
									type='text'
									placeholder='mustafadennis'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Full Name</label>
								<input
									type='text'
									placeholder='Mustafa Ozdemir'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Email</label>
								<input
									type='text'
									placeholder='mustafaozdemir@gmail.com'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Phone</label>
								<input
									type='text'
									placeholder='+372 121212'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Address</label>
								<input
									type='text'
									placeholder='Tallinn | Estonia'
									className='userUpdateInput'
								/>
							</div>
						</div>
						<div className='userUpdateRight'>
							<div className='userUpdateUpload'>
								<img
									className='userUpdateImg'
									src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
									alt=''
								/>
								<label htmlFor='file'>
									<Publish className='userUpdateIcon' />
								</label>
								<input
									className='userUpdatePublish'
									type='file'
									id='file'
								/>
							</div>
							<button
								onClick={(res) => res.preventDefault()}
								className='userUpdateButton'
							>
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
