import React from 'react';
import { useParams } from 'react-router-dom';

export default function Diary() {
	const { id } = useParams();
	console.log(id);
	return (
		<div>
			<h1>Diary</h1>
			<p>다이어리 페이지</p>
		</div>
	);
}
