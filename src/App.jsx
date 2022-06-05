import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

// ** Component
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<MyHeader
					headText={'App'}
					leftChild={
						<MyButton
							text={'왼쪽 버튼'}
							onClick={() => {
								alert('왼쪽 버튼');
							}}
						/>
					}
					rightChild={
						<MyButton
							text={'오른쪽 버튼'}
							onClick={() => {
								alert('오른쪽 버튼');
							}}
						/>
					}
				/>
				<MyButton
					text={'버튼'}
					onClick={() => {
						alert('버튼');
					}}
					type={'positive'}
				/>
				<MyButton
					text={'버튼'}
					onClick={() => {
						alert('버튼');
					}}
					type={'nagative'}
				/>
				<MyButton
					text={'버튼'}
					onClick={() => {
						alert('버튼');
					}}
					type={'default'}
				/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new" element={<New />} />
					<Route path="/edit" element={<Edit />} />
					<Route path="/diary/:id" element={<Diary />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
