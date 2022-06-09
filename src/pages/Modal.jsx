import React from 'react';
import MyButton from '../components/MyButton';

export default function Modal({ text, onClick, setModal }) {
	return (
		<div className="Modal">
			<div className="container">
				<h4>일기를 {text} 하시겠습니까?</h4>
				<div className="modal_btn">
					<MyButton
						text={'취소하기'}
						type={'nagative'}
						onClick={() => {
							setModal(false);
						}}
					/>
					<MyButton text={`${text}하기`} type={'positive'} onClick={onClick} />
				</div>
			</div>
		</div>
	);
}
