import React from 'react';

export default function DiaryItem({ id, emotion, content, date }) {
	return (
		<div className="DiaryItem">
			<div className={['emotion_img_wrapper', `emotion_img_wrapper_${emotion}`].join(' ')}>
				<img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} alt="" />
			</div>
			<div></div>
			<div></div>
		</div>
	);
}
