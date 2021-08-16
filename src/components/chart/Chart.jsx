import './chart.css';
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
	return (
		<div className='chart'>
			<h3 className='chartTitle'>{title}</h3>
			<ResponsiveContainer width='100%' aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey='name' stroke='#30415A' />
					<Line type='monotone' dataKey={dataKey} stroke='#5550BD' />
					<Tooltip />
					{grid && (
						<CartesianGrid
							stroke='#D1D1D1'
							strokeDasharray='10 10'
						/>
					)}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
