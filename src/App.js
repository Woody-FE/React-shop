import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js';

function App() {
	let [shoes, setShoes] = useState(Data);
	return (
		<div className='App'>
			<Navbar bg='light' expand='lg'>
				<Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#link'>Link</Nav.Link>
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
		</div>
	);
}

function Card(props) {
	const { shoes } = props;
	return (
		<div className='col-md-4'>
			<img
				src={
					'https://codingapple1.github.io/shop/shoes' + (shoes.id + 1) + '.jpg'
				}
				width='100%'
				alt=''
			/>
			<h4>{shoes.title}</h4>
			<p>
				{shoes.content} & {shoes.price}
			</p>
		</div>
	);
}

export default App;
