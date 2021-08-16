import './widgetLg.css';
export default function WidgetLg() {
	const Button = ({ type }) => {
		return <button className={'widgetLgButton ' + type}>{type}</button>;
	};
	return (
		<div className='widgetLg'>
			<h3 className='widgetLgTitle'>Latest Transactions</h3>
			<table className='widgetLgTable'>
				<tr className='widgetLgTr'>
					<th className='widgetLgTh'>Customer</th>
					<th className='widgetLgTh'>Date</th>
					<th className='widgetLgTh'>Amount</th>
					<th className='widgetLgTh'>Status</th>
				</tr>
				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img
							src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
							alt=''
							className='widgetLgImg'
						/>
						<span className='widgetLgName'>Mustafa Ozdemir</span>
					</td>
					<td className='widgetLgDate'>2 Jun 2021</td>
					<td className='widgetLgAmount'>$150.00</td>
					<td className='widgetLgStatus'>
						<Button type='Approved'></Button>
					</td>
				</tr>
				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img
							src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
							alt=''
							className='widgetLgImg'
						/>
						<span className='widgetLgName'>Mustafa Ozdemir</span>
					</td>
					<td className='widgetLgDate'>2 Jun 2021</td>
					<td className='widgetLgAmount'>$150.00</td>
					<td className='widgetLgStatus'>
						<Button type='Declined'></Button>
					</td>
				</tr>

				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img
							src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
							alt=''
							className='widgetLgImg'
						/>
						<span className='widgetLgName'>Mustafa Ozdemir</span>
					</td>
					<td className='widgetLgDate'>2 Jun 2021</td>
					<td className='widgetLgAmount'>$150.00</td>
					<td className='widgetLgStatus'>
						<Button type='Pending'></Button>
					</td>
				</tr>
				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img
							src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
							alt=''
							className='widgetLgImg'
						/>
						<span className='widgetLgName'>Mustafa Ozdemir</span>
					</td>
					<td className='widgetLgDate'>2 Jun 2021</td>
					<td className='widgetLgAmount'>$150.00</td>
					<td className='widgetLgStatus'>
						<Button type='Approved'></Button>
					</td>
				</tr>
			</table>
		</div>
	);
}
