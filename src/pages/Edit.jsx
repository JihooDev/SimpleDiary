import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
import DiaryEditor from '../components/DiaryEditor';

export default function Edit() {
	const navigate = useNavigate();

	const { id } = useParams();

	const [originData, setOriginData] = useState();

	const diaryList = useContext(DiaryStateContext);

	useEffect(() => {
		if (diaryList.length >= 1) {
			const targetDiary = diaryList.find(it => parseInt(it.id) === parseInt(id));

			if (targetDiary) {
				setOriginData(targetDiary);
			} else {
				navigate('/', { replace: true });
			}
		}
	}, [id, diaryList]);
	return <div className="Edit">{originData && <DiaryEditor isEdit={true} originData={originData} />}</div>;
}
