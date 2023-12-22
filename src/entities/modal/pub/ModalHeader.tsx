import React, {PropsWithChildren} from "react";

interface IModalHeader extends PropsWithChildren {
	handleClose: () => void;
	handleSubmit: () => void,
	headerText: string;
}

export const ModalHeader: React.FC<IModalHeader> = ({children, headerText, handleSubmit, handleClose}) => {
	return (
		<div className='modal__header'>
			<div className='modal__top'>
				<div className='modal__title'>{headerText}</div>
				<div className='modal__buttons'>
					<button onClick={handleClose} className='modal__cancel'>
						Отмена
					</button>
					<button
						type='submit'
						onClick={handleSubmit}
						className='modal__save btn'>
						Сохранить
					</button>
				</div>
			</div>
			{children}
		</div>
	)
}
