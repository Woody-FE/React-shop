import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
	padding-top: 30px;
`;
let Title = styled.h4`
	font-size: 25px;
	color: ${(props) => props.color};
`;

export default function Detail(props) {
	let [open, setOpen] = useState(true);
	useEffect(() => {
		let Timer = setTimeout(() => {
			setOpen(false);
		}, 2000);
		// 언마운트시에 타임아웃을 제거해줘야 다른 문제가 발생하지 않음
		return () => {
			clearTimeout(Timer);
		};
	}, []);

	let { id } = useParams();
	let history = useHistory();
	let shoe = props.shoes.find((shoe) => {
		return shoe.id == id;
	});
	return (
		<div className='container'>
			<Box>
				<Title className='red' color='blue'>
					Detail
				</Title>
			</Box>
			{open ? (
				<div className='my-alert'>
					<p>재고가 얼마 남지 않았습니다</p>
				</div>
			) : null}

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
