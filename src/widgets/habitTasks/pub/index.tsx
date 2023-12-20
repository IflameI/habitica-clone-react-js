import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HabitTaskActions} from "../model/actions";
import {HabitCategoryEnum, habitFilters, HabitModalsName, HabitTaskType} from "../model/config";
import {HabitTaskSelectors} from "../model/selectors";
import {useHabitTask} from "../hooks/useHabitTask";
import {TaskFilters} from "../../../features/filterTasks";
import {AddTaskForm} from "../../../features/addTask";
import {filterTask} from "../../../entities/task/utils/filterTask";
import {Task} from "../../../entities/task";
import {ModalsManager} from "../ui/ModalsManager";

export const HabitTasks: React.FC = () => {
	const dispatch = useDispatch();
	const {habitTaskComplete, habitTaskFail} = useHabitTask()

	const habitTasks = useSelector(HabitTaskSelectors.selectHabitTasks);
	const currentHabitTaskFilter = useSelector(HabitTaskSelectors.selectCurrentHabitTaskFilter);

	const filteredTasks = useMemo(() => filterTask(habitTasks, currentHabitTaskFilter), [habitTasks, currentHabitTaskFilter])

	const changeActiveFilter = (newFilter: string) => {
		dispatch(HabitTaskActions.changeCurrentHabitFilter({newFilter: newFilter}))
	}

	const onSendHabit = (text: string) => {
		dispatch(HabitTaskActions.addHabitTask({
			newHabit: {
				id: habitTasks.length + 1,
				category: HabitCategoryEnum.WEAK,
				titleText: text,
				count: 0,
				diff: 1,
				isSuccessTask: true,
				isBadTask: false,
				supText: ''
			}
		}))
	};

	const onClickBadHabitTask = (health: number = 10, id: number, isBadTask: boolean | undefined) => () => {
		if (isBadTask) {
			habitTaskFail(id, health)
		}
	};
	const onClickSuccessTask = (id: number = 1, levelPoint: number = 10, taskDiff = 1, isBadTask: boolean | undefined) => () => {
		if (!isBadTask) {
			habitTaskComplete(id, levelPoint * taskDiff)
		}
	};

	const onClickMoreActionButton = (taskData: HabitTaskType) => () => {
		dispatch(HabitTaskActions.openHabitModal({modalName: HabitModalsName.UPDATE_HABIT_TASK, data: taskData}))
	};

	return (
		<>
			<div className='tasks__column'>
				<div className='tasks__info'>
					<div className='tasks__name'>Привычки</div>
					<TaskFilters taskFilters={{filters: habitFilters, handler: changeActiveFilter}}/>
				</div>
				<div className='tasks__item item-tasks'>
					<div className='item-tasks__wrapper'>
						<AddTaskForm addTask={{placeHolder: 'Добавить привчку', handler: onSendHabit}}/>
						{
							filteredTasks.map((filteredTask) => (
								<Task
									key={filteredTask.id}
									titleText={filteredTask.titleText}
									isBadTask={filteredTask.isBadTask ?? false}
									count={filteredTask.count ?? 0}
									supText={filteredTask.supText}
									isSuccessTask={filteredTask.isSuccessTask}
									onSuccessButtonClick={onClickSuccessTask(filteredTask.id, filteredTask.exp, filteredTask.diff, filteredTask.isBadTask)}
									onFailButtonClick={onClickBadHabitTask(filteredTask.health, filteredTask.id, filteredTask.isBadTask)}
									onMoreActionButtonClick={onClickMoreActionButton(filteredTask)}
								/>
							))
						}
					</div>
				</div>
			</div>
			<ModalsManager/>
		</>
	);
};
