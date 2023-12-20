import {useSelector} from "react-redux";
import {selectIsUpdateHabitModalOpen} from "../model/selectors/habitTask.selectors";
import {UpdateHabitTask} from "./UpdateHabitTask";

export const ModalsManager = () => {
	const isUpdateHabitTaskOpen = useSelector(selectIsUpdateHabitModalOpen);

	return (
		<>
			{isUpdateHabitTaskOpen && <UpdateHabitTask/>}
		</>
	);
};
