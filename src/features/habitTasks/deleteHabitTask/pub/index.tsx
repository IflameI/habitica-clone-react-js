import {HabitTaskActions} from "../../../../widgets/habitTasks/model/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectUpdateHabitModalData} from "../../../../widgets/habitTasks/model/selectors/habitTask.selectors";
import {HabitTaskType} from "../../../../widgets/habitTasks/model/config";
import React from "react";

interface IDeleteHabitTaskButton {
	additionHandler?: () => void;
}

export const DeleteHabitTaskButton: React.FC<IDeleteHabitTaskButton> = ({additionHandler}) => {
	const dispatch = useDispatch()
	const modalData = useSelector(selectUpdateHabitModalData)
	const {
		id,
	} = modalData as HabitTaskType

	const onClickDeleteTask = () => {
		dispatch(HabitTaskActions.deleteHabitTask({taskId: id}))
		additionHandler && additionHandler()
	};

	return (
		<button onClick={onClickDeleteTask} style={{background: "unset"}}> Удалить привычку</button>
	)
}
