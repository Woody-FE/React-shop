import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { Nav } from 'react-bootstrap';
import { StockContext } from './App.js';
import { CSSTransition } from 'react-transition-group';

let Box = styled.div`
	padding-top: 30px;
`;
let Title = styled.h4`
	font-size: 25px;
	color: ${(props) => props.color};
`;

function Info(props) {
	return <p>재고: {props.stock}</p>;
}

export default function Detail(props) {
	let [open, setOpen] = useState(true);
	let [tab, setTab] = useState(0);
	let [swit, setSwit] = useState(false);
	let stock = useContext(StockContext);
	useEffect(() => {
		console.log(stock);
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
					<Info stock={props.stock}></Info>
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

			<Nav className='mt-5' variant='tabs' defaultActiveKey='link-0'>
				<Nav.Item>
					<Nav.Link
						eventKey='link-0'
						onClick={() => {
							setSwit(false);
							setTab(0);
						}}
					>
						Active
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						eventKey='link-1'
						onClick={() => {
							setSwit(false);
							setTab(1);
						}}
					>
						Option 1
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						eventKey='link-2'
						onClick={() => {
							setSwit(false);
							setTab(2);
						}}
					>
						Option 2
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<CSSTransition in={swit} classNames='wow' timeout={500}>
				<TabContent tab={tab} setSwit={setSwit} />
			</CSSTransition>
		</div>
	);
}

function TabContent({ tab, setSwit }) {
	useEffect(() => {
		setSwit(true);
	});
	if (tab === 0) return <div>0번째 내용입니다</div>;
	else if (tab === 1) return <div>1번째 내용입니다</div>;
	else if (tab === 2) return <div>2번째 내용입니다</div>;
}
