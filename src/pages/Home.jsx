import React, { useContext, useEffect, useState } from 'react';
import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import { DiaryStateContext } from '../App';
import DiaryList from './../components/DiaryList';

export default function Home() {
	const diaryList = useContext(DiaryStateContext);
	const [curDate, setCurDate] = useState(new Date());
	const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

	const [data, setData] = useState([]);

	useEffect(() => {
		if (diaryList.length >= 1) {
			const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime();
			const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0, 23, 59, 59);

			setData(diaryList.filter(it => firstDay <= it.date && it.date <= lastDay));
		}
	}, [diaryList, curDate]);

	const increaseMonth = () => {
		setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()));
	};

	const decreaseMonth = () => {
		setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()));
	};
	return (
		<div className="Home">
			<MyHeader
				headText={headText}
				leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
				rightChild={<MyButton text={'>'} onClick={increaseMonth} />}
			/>
			<DiaryList diaryList={data} />
			<h1>{data.length === 0 ? '새로운 일기를 작성 해주세요!' : ''}</h1>
		</div>
	);
}
