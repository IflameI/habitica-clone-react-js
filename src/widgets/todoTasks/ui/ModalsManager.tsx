import {useSelector} from "react-redux";
import {selectIsUpdateTodoModalOpen} from "../model/selectors/todoTask.selectors";
import {UpdateToDoTaskModal} from "./UpdateToDoTaskModal";

export const ModalsManager = () => {
	const isUpdateTodoTaskOpen = useSelector(selectIsUpdateTodoModalOpen);

	return (
		<>
			{isUpdateTodoTaskOpen && <UpdateToDoTaskModal/>}
		</>
	);
};
