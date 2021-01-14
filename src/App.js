import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';
import Cart from './Cart';

export let StockContext = React.createContext();

function App() {
	let [shoes, setShoes] = useState(Data);
	let [stock, setStock] = useState([9, 10, 11]);
	return (
		<div className='App'>
			<StockContext.Provider value={stock}>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link as={Link} to='/'>
								Home
							</Nav.Link>
							<Nav.Link as={Link} to='/detail'>
								Detail
							</Nav.Link>
							<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Switch>
					<Route exact path='/'>
						<Jumbotron className='background'>
							<h1>20% Season Off</h1>
							<p>
								This is a simple hero unit, a simple jumbotron-style component
								for calling extra attention to featured content or information.
							</p>
							<p>
								<Button variant='primary'>Learn more</Button>
							</p>
						</Jumbotron>
						<div className='container'>
							<div className='row'>
								{shoes.map((shoe, i) => {
									return <Card shoes={shoes[shoe.id]} key={i} />;
								})}
								{/* <Card shoes={shoes[0]} /> */}
							</div>
							<button
								className='btn btn-primary'
								onClick={() => {
									axios
										.get('https://codingapple1.github.io/shop/data2.json')
										.then((res) => {
											console.log(res);
											setShoes([...shoes, ...res.data]);
										})
										.catch((err) => {
											console.log(err);
										});
								}}
							>
								더보기
							</button>
						</div>
					</Route>

					<Route path='/detail/:id'>
						<Detail shoes={shoes} stock={stock} />
					</Route>
					<Route path='/cart'>
						<Cart />
					</Route>
				</Switch>
				{/* <Route path="/어쩌구" component={Modal}></Route> */}
			</StockContext.Provider>
		</div>
	);
}

function Card(props) {
	const { id, title, content, price } = props.shoes;
	return (
		<div className='col-md-4'>
			<img
				src={'https://codingapple1.github.io/shop/shoes' + (id + 1) + '.jpg'}
				width='100%'
				alt=''
			/>
			<h4>{title}</h4>
			<p>
				{content} & {price}
			</p>
		</div>
	);
}

export default App;
