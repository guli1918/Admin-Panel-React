import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featuredInfo.css';

export default function FeaturedInfo() {
	return (
		<div className='featured'>
			<div className='featuredItem'>
				<span className='featuredTitle'>Revenue</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$3,450</span>
					<span className='featuredMoneyRate'>
						-1.8 <ArrowDownward className='featuredIcon negative' />
					</span>
				</div>
				<span className='featuredSub'>Compared to last month</span>
			</div>
			<div className='featuredItem'>
				<span className='featuredTitle'>Sales</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$4,285</span>
					<span className='featuredMoneyRate'>
						-3.4 <ArrowDownward className='featuredIcon negative' />
					</span>
				</div>
				<span className='featuredSub'>Compared to last month</span>
			</div>
			<div className='featuredItem'>
				<span className='featuredTitle'>Cost</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$9,115</span>
					<span className='featuredMoneyRate'>
						+34.15 <ArrowUpward className='featuredIcon positive' />
					</span>
				</div>
				<span className='featuredSub'>Compared to last month</span>
			</div>
		</div>
	);
}
