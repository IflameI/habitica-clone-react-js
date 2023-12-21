import React, {FunctionComponent} from 'react';
import {declinationOfNumber} from "../../utils/declinationOfNumber";

interface IMessageOnGain {
	thing: string[],
	icon: React.ReactNode,
	count: number
}

export const MessageOnGain: FunctionComponent<IMessageOnGain> = ({thing, count, icon}) => {

	return (
		<div>
			Вы получили немного {declinationOfNumber(count, thing)}
			<span className='toastIcon'>{icon}</span>
			{count}
		</div>
	);
};
