import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectIsUpdateRewardModalOpen, selectUpdateRewardModalData} from "../model/selectors/reward.selectors";
import {RewardActions} from "../model/actions";
import {RewardModalsName, RewardType} from "../model/config";
import {UpdateRewardForm} from "../../../features/rewards/updateReward";
import {Modal} from "../../../entities/modal";

export const UpdateRewardTaskModal: React.FC = () => {
	const dispatch = useDispatch()
	const modalData = useSelector(selectUpdateRewardModalData)

	const {id} = modalData as RewardType

	const isModalOpen = useSelector(selectIsUpdateRewardModalOpen)

	const handleCloseModal = () => {
		dispatch(RewardActions.closeRewardModal({modalName: RewardModalsName.UPDATE_REWARD}))
	}

	const onClickDeleteTask = () => {
		dispatch(RewardActions.deleteReward({rewardId: id}));
		handleCloseModal();
	};

	return (
		<Modal
			isShown={isModalOpen}
			closeModal={handleCloseModal}
			modalContent={
				<>
					<UpdateRewardForm/>
					<div onClick={onClickDeleteTask} className='modal__footer'>
						Удалить награду
					</div>
				</>
			}
		/>
	);
};
