import React, {FunctionComponent, useEffect} from 'react';
import ReactDOM from "react-dom";
import {useOutsideClick} from "../../../shared/hooks/useOutsideClick";

interface IModalProps {
	isShown: boolean;
	modalContent: JSX.Element;
	closeModal: () => void;
}

export const Modal: FunctionComponent<IModalProps> = ({
	                                                      isShown,
	                                                      modalContent,
	                                                      closeModal
                                                      }) => {

	const ref = useOutsideClick(() => closeModal());

	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? closeModal() : null);
		document.body.addEventListener('keydown', closeOnEscapeKey);
		return () => {
			document.body.removeEventListener('keydown', closeOnEscapeKey);
		};
	}, [closeModal]);

	const modal = (
		<div className='modal active'>
			<div ref={ref} className='modal__content active'>
				{modalContent}
			</div>
		</div>
	);

	return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
