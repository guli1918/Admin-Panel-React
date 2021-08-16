import { Visibility } from '@material-ui/icons';
import './widgetSm.css';
export default function WidgetSm() {
	return (
		<div className='widgetSm'>
			<span className='widgetSmTitle'>New Join Members</span>
			<ul className='widgetSmList'>
				<li className='widgetSmListItem'>
					<img
						src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
						alt='UserImg'
						className='widgetSmImg'
					/>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>
							Mustafa Ozdemir
						</span>
						<span className='widgetSmUserTitle'>
							Software Engineer
						</span>
					</div>
					<button className='widgetSmButton'>
						<Visibility />
						<p className='displayText'>Display</p>
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img
						src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
						alt='UserImg'
						className='widgetSmImg'
					/>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>Lukum Rahat</span>
						<span className='widgetSmUserTitle'>Boss</span>
					</div>
					<button className='widgetSmButton'>
						<Visibility />
						<p className='displayText'>Display</p>
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img
						src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
						alt='UserImg'
						className='widgetSmImg'
					/>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>
							Alexandre Arnon
						</span>
						<span className='widgetSmUserTitle'>
							Customer Support
						</span>
					</div>
					<button className='widgetSmButton'>
						<Visibility />
						<p className='displayText'>Display</p>
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img
						src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
						alt='UserImg'
						className='widgetSmImg'
					/>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>
							Natalija Banketova
						</span>
						<span className='widgetSmUserTitle'>
							Visual Designer
						</span>
					</div>
					<button className='widgetSmButton'>
						<Visibility />
						<p className='displayText'>Display</p>
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img
						src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
						alt='UserImg'
						className='widgetSmImg'
					/>
					<div className='widgetSmUser'>
						<span className='widgetSmUsername'>Burak Ozdemir</span>
						<span className='widgetSmUserTitle'>
							Software Engineer
						</span>
					</div>
					<button className='widgetSmButton'>
						<Visibility />
						<p className='displayText'>Display</p>
					</button>
				</li>
			</ul>
		</div>
	);
}
