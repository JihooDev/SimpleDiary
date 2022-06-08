import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryEditor from '../components/DiaryEditor';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const getStringDate = date => {
	return date.toISOString().slice(0, 10);
};

export default function New() {
	const [date, setDate] = useState();

	const navigate = useNavigate();

	return (
		<div className="New">
			<DiaryEditor />
		</div>
	);
}
