import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Edit() {
	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get('id');
	const mode = searchParams.get('mode');
	console.log('id : ', id);
	console.log('mode : ', mode);

	return (
		<div>
			<h1>Edit</h1>
			<p>에딧 페이지</p>
			<button
				onClick={() => {
					setSearchParams({ who: '김지후' });
				}}
			>
				바꾸기
			</button>
			<button
				onClick={() => {
					navigate('/');
				}}
			>
				홈으로가기
			</button>
			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				{' '}
				뒤로가기
			</button>
		</div>
	);
}
