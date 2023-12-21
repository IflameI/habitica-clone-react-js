import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NoteAboutTasks} from "../../../entities/noteAboutTasks";
import {TodoTaskSelectors} from "../model/selectors";
import {TodoTaskActions} from "../model/actions";
import {TodoCategoryEnum, todoFilters, TodoModalsName, ToDoTaskType} from "../model/config";
import {useTodoTask} from "../hooks/useTodoTask";
import {filterTask} from "../../../entities/task/utils/filterTask";
import {TaskFilters} from "../../../features/filterTasks";
import {AddTaskForm} from "../../../features/addTask";
import {Task} from "../../../entities/task";
import {OkIcon} from "../../../assets/icons/OkIcon";
import {ModalsManager} from "../ui/ModalsManager";

export const TodoTasks: React.FC = () => {
	const dispatch = useDispatch();
	const {todoTaskComplete} = useTodoTask()

	const todoTasks = useSelector(TodoTaskSelectors.selectTodoTasks);
	const currentTodoTaskFilter = useSelector(TodoTaskSelectors.selectCurrentTodoTaskFilter);

	const filteredTasks = useMemo(() => filterTask(todoTasks, currentTodoTaskFilter), [todoTasks, currentTodoTaskFilter])

	const changeActiveFilter = (newFilter: string) => {
		dispatch(TodoTaskActions.changeCurrentTodoFilter({newFilter: newFilter}))
	}

	const onSendToDo = (titleText: string) => {
		dispatch(TodoTaskActions.addTodoTask({
			newTask: {
				id: todoTasks.length + 1,
				titleText,
				category: TodoCategoryEnum.ACTIVE,
				isCompletedTask: false,
				diff: 1,
				supText: '',
				remainDay: 0,
				finishUntilDate: null,

			}
		}))
	};

	const onSuccessButtonClick = (id: number, level: number, health: number, isCompletedTask: boolean) => () => {
		if (!isCompletedTask) {
			todoTaskComplete(id, level, health)
		}
	};

	const onClickMoreActionButton = (taskData: ToDoTaskType) => () => {
		dispatch(TodoTaskActions.openToDoModal({modalName: TodoModalsName.UPDATE_TODO, data: taskData}))
	};

	return (
		<>
			<div className='tasks__column'>
				<div className='tasks__info'>
					<div className='tasks__name'>Задачи</div>
					<TaskFilters taskFilters={{filters: todoFilters, handler: changeActiveFilter}}/>
				</div>
				<div className='tasks__item item-tasks'>
					<div className='item-tasks__wrapper'>
						<AddTaskForm addTask={{placeHolder: 'Добавить задачу', handler: onSendToDo}}/>
						{
							filteredTasks.map((filteredTask) => (
								<Task
									key={filteredTask.id}
									titleText={filteredTask.titleText}
									supText={filteredTask.supText}
									isCompletedTask={filteredTask.isCompletedTask ?? false}
									remainDay={filteredTask.remainDay}
									isOneTimeTask
									onSuccessButtonClick={onSuccessButtonClick(filteredTask.id, 10, 7, filteredTask.isCompletedTask ?? false)}
									onMoreActionButtonClick={onClickMoreActionButton(filteredTask)}
								/>
							))
						}
					</div>
					<NoteAboutTasks
						title='Это ваши Задачи'
						icon={<OkIcon/>}
						text='Задачи могут быть выполнены только один раз. Добавьте списки вашим задачам, чтобы увеличить их награду.'
					/>
				</div>
			</div>
			<ModalsManager/>
		</>
	);
};
