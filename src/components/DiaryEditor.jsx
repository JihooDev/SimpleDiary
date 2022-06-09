import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import MyButton from './../components/MyButton';
import MyHeader from './../components/MyHeader';
import DiaryList from './DiaryList';
import EmotionItem from './EmotionItem';
import { getStringDate } from '../util/date';
import { emotionList } from '../util/emotion_list';
import Modal from '../pages/Modal';

export default function DiaryEditor({ isEdit, originData }) {
	const contentRef = useRef();
	const [content, setContent] = useState('');

	const [date, setDate] = useState(getStringDate(new Date()));

	const navigate = useNavigate();

	const [emotion, setEmotion] = useState(3);

	const [modal, setModal] = useState(false);

	const handleClickEmote = useCallback(emotion => {
		setEmotion(emotion);
	}, []);

	const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

	const handleSubmit = () => {
		if (content.length < 1) {
			contentRef.current.focus();
			return;
		}

		if (!isEdit) {
			onCreate(date, content, emotion);
		} else {
			onEdit(originData.id, date, content, emotion);
		}

		navigate('/', { replace: true });
	};

	const handleRemove = () => {
		onRemove(originData.id);
		navigate('/', { replace: true });
	};

	useEffect(() => {
		if (isEdit) {
			setDate(getStringDate(new Date(parseInt(originData.date))));
			setEmotion(originData.emotion);
			setContent(originData.content);
		}
	}, [isEdit, originData]);

	return (
		<div className="DiaryEditor">
			<MyHeader
				headText={isEdit ? '일기 수정하기' : '새 일기 쓰기'}
				leftChild={
					<MyButton
						text={'뒤로가기'}
						onClick={() => {
							navigate(-1);
						}}
					/>
				}
				rightChild={isEdit && <MyButton text={'삭제하기'} type={'nagative'} onClick={handleRemove} />}
			/>
			<div>
				<section>
					<h4>오늘은 언제인가요?</h4>
					<div className="input_box">
						<input
							type="date"
							className="input_date"
							value={date}
							onChange={e => {
								setDate(e.target.value);
							}}
						/>
					</div>
				</section>
				<section>
					<h4>오늘의 감정</h4>
					<div className="input_box emotion_list_wrapper">
						{emotionList.map(it => (
							<EmotionItem key={it.emotion_id} {...it} onClick={handleClickEmote} isSelected={it.emotion_id == emotion} />
						))}
					</div>
				</section>
				<section>
					<h4>오늘의 일기</h4>
					<div className="input_box_text_wrapper">
						<textarea placeholder="오늘은 무슨 일이 있었나요?" ref={contentRef} value={content} onChange={e => setContent(e.target.value)} />
					</div>
				</section>
				<section>
					<div className="control_box">
						<MyButton
							text={'취소하기'}
							onClick={() => {
								navigate(-1);
							}}
						/>
						<MyButton
							text={isEdit ? '수정하기' : '작성하기'}
							type={'positive'}
							onClick={() => {
								setModal(true);
							}}
						/>
					</div>
				</section>
			</div>
			{modal ? <Modal text={isEdit ? '수정' : '작성'} onClick={handleSubmit} setModal={setModal} /> : null}
		</div>
	);
}
