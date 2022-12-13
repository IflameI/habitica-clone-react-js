import React from 'react';

import {toast} from 'react-toastify';

import {useActions} from '../../../redux/typeHooks/useActions';
import {useTypedSelector} from '../../../redux/typeHooks/useTypedSelector';
import {CoinIcon} from '../../index';
import {ThreeDots} from "../../../assets/icons/ThreeDots";
import {useModal} from "../../../hooks/useModal";
import {rewardTaskType} from "../../../redux/typesRedux/reward";
import {UpdateRewardTaskModal} from "../../Modal/UpdateRewardTaskModal";

export const RewardTask: React.FC<rewardTaskType> = ({
	                                                     titleText,
	                                                     supText,
	                                                     cost,
	                                                     id,
	                                                     category
                                                     }) => {
	const {money} = useTypedSelector((state) => state.user);
	const {setMinusUserMoney} = useActions();
	const {toggle, isShown} = useModal()

	const notifyLevel = () => toast.error(<div>У вас не хватает монет</div>);

	const onClickSpendMoney = () => {
		if (money >= cost) {
			setMinusUserMoney(cost);
		} else {
			notifyLevel();
		}
	};

	return (
		<>
			<div
				className='item-tasks__task'>
				<div className='item-tasks__middle'>
					<div className='item-tasks__text-wrapper'>
						<p className='item-tasks__text'>{titleText}</p>
						<div onClick={toggle}><ThreeDots/></div>
					</div>
					<p className='item-tasks__suptext'>{supText}</p>
				</div>
				<div onClick={onClickSpendMoney} className='item-tasks__coin'>
					<div className='svg-icon'>
						<CoinIcon/>
					</div>
					<span>{cost}</span>
				</div>
			</div>
			<UpdateRewardTaskModal isShown={isShown} toggle={toggle} taskData={{titleText, supText, cost, id, category}}/>
		</>
	);
};
