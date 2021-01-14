import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart({ name }) {
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
					<tr>
						<td>1</td>
						<td>{name}</td>
						<td>Table cell</td>
						<td>Table cell</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
const mapStateToProps = (state) => ({
	name: state[0].name,
});

export default connect(mapStateToProps)(Cart);
