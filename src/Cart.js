import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart({ state }) {
	return (
		<div>
			<Table responsive>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경</th>
					</tr>
				</thead>
				<tbody>
					{state.map((stock, i) => {
						return (
							<tr key={i}>
								<td>{stock.id + 1}</td>
								<td>{stock.name}</td>
								<td>{stock.count}개</td>
								<td>Table cell</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}
const mapStateToProps = (state) => ({
	state: state,
});

export default connect(mapStateToProps)(Cart);
