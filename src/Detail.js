import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

export default function Detail(props) {
	let { id } = useParams();
	let history = useHistory();
	let shoe = props.shoes.find((shoe) => {
		return shoe.id == id;
	});
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6'>
					<img
						src={
							'https://codingapple1.github.io/shop/shoes' +
							(shoe.id + 1) +
							'.jpg'
						}
						width='100%'
					/>
				</div>
				<div className='col-md-6 mt-4'>
					<h4 className='pt-5'>{shoe.title}</h4>
					<p>{shoe.content}</p>
					<p>{shoe.price}원</p>
					<button className='btn btn-danger'>주문하기</button>
					<button
						className='btn btn-danger'
						onClick={() => {
							history.goBack();
						}}
					>
						뒤로가기
					</button>
				</div>
			</div>
		</div>
	);
}
