import React, {useState} from 'react';
import classNames from 'classnames';
import {useOutsideClick} from "../../hooks/useOutsideClick";

interface IBurger {
	navComponent: (open: boolean, burgerRef: any) => React.ReactNode
}

const Burger: React.FC<IBurger> = ({navComponent}) => {
	const [open, setOpen] = useState(false);
	const ref = useOutsideClick(() => setOpen(false));

	const handleOpenClick = () => {
		setOpen(!open)
	}

	return (
		<>
			<div
				ref={ref}
				onClick={handleOpenClick}
				className={classNames('styledBurger', {
					open: open,
				})}>
				<div className='elementBurger'></div>
				<div className='elementBurger'></div>
				<div className='elementBurger'></div>
			</div>
			{navComponent(open, ref)}
		</>
	);
};

export default Burger;
