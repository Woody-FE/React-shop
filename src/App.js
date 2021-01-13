import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
	let [shoes, setShoes] = useState(Data);
	return (
		<div className='App'>
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
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
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
							This is a simple hero unit, a simple jumbotron-style component for
							calling extra attention to featured content or information.
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
					</div>
				</Route>

				<Route path='/detail/:id'>
					<Detail shoes={shoes} />
				</Route>
			</Switch>
			{/* <Route path="/어쩌구" component={Modal}></Route> */}
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
