import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryItem from './DiaryItem';
import MyButton from './MyButton';

const sortOptionList = [
	{ value: 'latest', name: '최신순' },
	{ value: 'oldset', name: '오래된 순' },
];

const ControlMenu = ({ value, onChange, optionList }) => {
	return (
		<select className="ControlMenu" value={value} onChange={e => onChange(e.target.value)}>
			{optionList.map((it, idx) => (
				<option key={idx} value={it.value}>
					{it.name}
				</option>
			))}
		</select>
	);
};

const filterOption = [
	{ value: 'all', name: '전체보기' },
	{ value: 'good', name: '기분 좋은날' },
	{ value: 'bad', name: '기분 나쁜날' },
];

export default function DiaryList({ diaryList }) {
	const navigate = useNavigate();
	const [sortType, setSortType] = useState('latest');
	const [filter, setFilter] = useState('all');

	const getProcessedDiaryList = () => {
		const filterCallback = item => {
			if (filter === 'good') {
				return parseInt(item.emotion) <= 3;
			} else {
				return parseInt(item.emotion) > 3;
			}
		};

		const compare = (a, b) => {
			if (sortType === 'latest') {
				return parseInt(b.date) - parseInt(a.date);
			} else {
				return parseInt(a.date) - parseInt(b.date);
			}
		};

		const copyList = JSON.parse(JSON.stringify(diaryList));
		const filteredList = filter === 'all' ? copyList : copyList.filter(it => filterCallback(it));
		const sortedList = filteredList.sort(compare);

		return sortedList;
	};

	return (
		<div className="DiaryList">
			<div className="menu_wrapper">
				<div className="left_col">
					<ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
					<ControlMenu value={filter} onChange={setFilter} optionList={filterOption} />
				</div>
				<div className="right_col">
					<MyButton type={'positive'} text={'새로운 일기 작성'} onClick={() => navigate('/new')} />
				</div>
			</div>
			{getProcessedDiaryList().map(it => {
				return <DiaryItem key={it.id} {...it} />;
			})}
		</div>
	);
}

DiaryList.defaultProps = {
	diaryList: [],
};