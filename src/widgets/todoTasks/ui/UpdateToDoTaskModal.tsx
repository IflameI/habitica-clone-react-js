import React from 'react';
import {Modal} from "../../../entities/modal";
import {useDispatch, useSelector} from "react-redux";
import {selectIsUpdateTodoModalOpen} from "../model/selectors/todoTask.selectors";
import {UpdateTodoTaskForm} from "../../../features/todoTasks/updateTodoTask";
import {TodoTaskActions} from "../model/actions";
import {TodoModalsName} from "../model/config";
import {DeleteTodoTaskButton} from "../../../features/todoTasks/deleteTodoTask";

export const UpdateToDoTaskModal: React.FC = () => {
	const dispatch = useDispatch()
	const isModalOpen = useSelector(selectIsUpdateTodoModalOpen)

	const handleCloseModal = () => {
		dispatch(TodoTaskActions.closeToDoModal({modalName: TodoModalsName.UPDATE_TODO}))
	}


	return (
		<Modal
			isShown={isModalOpen}
			closeModal={handleCloseModal}
			modalContent={
				<>
					<UpdateTodoTaskForm/>
					<div className='modal__footer'>
						<DeleteTodoTaskButton additionHandler={handleCloseModal}/>
					</div>
				</>
			}
		/>
	);
};

