import React from "react";
import {TodoTaskActions} from "../../../../widgets/todoTasks/model/actions";
import {useDispatch, useSelector} from "react-redux";
import {HabitTaskType} from "../../../../widgets/habitTasks/model/config";
import {selectUpdateTodoModalData} from "../../../../widgets/todoTasks/model/selectors/todoTask.selectors";

interface IDeleteHabitTaskButton {
	additionHandler?: () => void;
}


export const DeleteTodoTaskButton: React.FC<IDeleteHabitTaskButton> = ({additionHandler}) => {
	const dispatch = useDispatch()
	const modalData = useSelector(selectUpdateTodoModalData);

	const {
		id,
	} = modalData as HabitTaskType

	const onClickDeleteTask = () => {
		dispatch(TodoTaskActions.deleteTodoTask({taskId: id}));
		additionHandler && additionHandler();
	};

	return (
		<div onClick={onClickDeleteTask} className='modal__footer'>
			Удалить задачу
		</div>
	)
}
