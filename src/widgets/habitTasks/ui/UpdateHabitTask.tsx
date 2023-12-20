import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {HabitTaskActions} from "../model/actions";
import {HabitModalsName} from "../model/config";
import {selectIsUpdateHabitModalOpen} from "../model/selectors/habitTask.selectors";
import {Modal} from "../../../entities/modal";
import {UpdateHabitTaskForm} from "features/habitTasks/updateHabitTask";
import {DeleteHabitTaskButton} from "features/habitTasks/deleteHabitTask";

export interface IFormHabitValues {
	id: number,
	taskTitle: string,
	taskText: string,
	isBadTask: boolean,
	taskDiff: string,
	isHabitTaskSuccess: boolean
}

export const UpdateHabitTask: React.FC = () => {
	const dispatch = useDispatch()
	const isModalOpen = useSelector(selectIsUpdateHabitModalOpen)


	const handleCloseModal = () => {
		dispatch(HabitTaskActions.closeHabitModal({modalName: HabitModalsName.UPDATE_HABIT_TASK}))
	}


	return (
		<Modal
			isShown={isModalOpen}
			closeModal={handleCloseModal}
			modalContent={
				<>
					<UpdateHabitTaskForm/>
					<div className='modal__footer'>
						<DeleteHabitTaskButton additionHandler={handleCloseModal}/>
					</div>
				</>
			}
		/>
	);
};

