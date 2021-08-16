import { Link } from 'react-router-dom';
import './sidebar.css';
import {
	AttachMoney,
	BarChart,
	ChatBubbleOutline,
	DynamicFeed,
	LineStyle,
	MailOutline,
	PermIdentity,
	Report,
	Storefront,
	Timeline,
	TrendingUp,
	WorkOutline,
} from '@material-ui/icons';

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Dashboard</h3>
					<ul className='sidebarList'>
						<Link to='/' className='link'>
							<li className='sidebarListItem'>
								<LineStyle className='sidebarIcon' />
								<p>Home</p>
							</li>
						</Link>
						<li className='sidebarListItem'>
							<Timeline className='sidebarIcon' />
							<p>Analytics</p>
						</li>
						<li className='sidebarListItem'>
							<TrendingUp className='sidebarIcon' />
							<p>Sales</p>
						</li>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Quick Menu</h3>
					<ul className='sidebarList'>
						<Link to='/users' className='link'>
							<li className='sidebarListItem'>
								<PermIdentity className='sidebarIcon' />
								<p>Users</p>
							</li>
						</Link>
						<Link to='/products' className='link'>
							<li className='sidebarListItem'>
								<Storefront className='sidebarIcon' />
								<p>Products</p>
							</li>
						</Link>
						<Link to='/transactions' className='link'>
							<li className='sidebarListItem'>
								<AttachMoney className='sidebarIcon' />
								<p>Transactions</p>
							</li>
						</Link>
						<Link to='/reports' className='link'>
							<li className='sidebarListItem'>
								<BarChart className='sidebarIcon' />
								<p>Reports</p>
							</li>
						</Link>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Notifications</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem'>
							<MailOutline className='sidebarIcon' />
							<p>Mail</p>
						</li>
						<li className='sidebarListItem'>
							<DynamicFeed className='sidebarIcon' />
							<p>Feedback</p>
						</li>
						<li className='sidebarListItem'>
							<ChatBubbleOutline className='sidebarIcon' />
							<p>Messages</p>
						</li>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Staff</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem'>
							<WorkOutline className='sidebarIcon' />
							<p>Manage</p>
						</li>
						<li className='sidebarListItem'>
							<Timeline className='sidebarIcon' />
							<p>Analytics</p>
						</li>
						<li className='sidebarListItem'>
							<Report className='sidebarIcon' />
							<p>Reports</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
