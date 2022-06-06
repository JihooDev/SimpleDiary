import React, { useContext, useEffect, useState } from 'react';
import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import { DiaryStateContext } from '../App';

export default function Home() {
	const diaryList = useContext(DiaryStateContext);
	const [curDate, setCurDate] = useState(new Date());
	const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

	const [data, setData] = useState([]);

	useEffect(() => {
		const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime();
		const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0);

		setData(diaryList.filter(it => firstDay <= it.date && it.date <= lastDay));
	}, [diaryList, curDate]);

	const increaseMonth = () => {
		setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()));
	};

	const decreaseMonth = () => {
		setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()));
	};
	return (
		<div>
			<MyHeader
				headText={headText}
				leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
				rightChild={<MyButton text={'>'} onClick={increaseMonth} />}
			/>
		</div>
	);
}
