import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Topbar() {
	return (
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className='topLeft'>
					<span className='logo'>
						<Link to='/' className='link'>
							Admin Panel
						</Link>
					</span>
				</div>
				<div className='topRight'>
					<div className='topbarIconContainer'>
						<NotificationsNone />
						<span className='topIconBadge'>5</span>
					</div>
					<div className='topbarIconContainer'>
						<Language />
						<span className='topIconBadge'>5</span>
					</div>
					<div className='topbarIconContainer'>
						<Settings />
					</div>
					<img
						src='https://www.oneworldplayproject.com/wp-content/uploads/2016/03/avatar-1024x1024.jpg'
						alt=''
						className='topAvatar'
					/>
				</div>
			</div>
		</div>
	);
}
