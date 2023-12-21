import React, {FunctionComponent} from 'react';
import {declinationOfNumber} from "../../utils/declinationOfNumber";

interface IMessageOnLost {
	thing: string[],
	icon: React.ReactNode,
	count: number
}

export const MessageOnLost: FunctionComponent<IMessageOnLost> = ({thing, icon, count}) => {

	return (
		<div>
			Вы потеряли немного {declinationOfNumber(count, thing)}
			<span className='toastIcon'>{icon}</span>
			{count}
		</div>
	);
};
