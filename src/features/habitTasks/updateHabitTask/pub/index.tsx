import classNames from "classnames";
import React from "react";
import {useFormik} from "formik";
import {HabitTaskActions} from "../../../../widgets/habitTasks/model/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectUpdateHabitModalData} from "../../../../widgets/habitTasks/model/selectors/habitTask.selectors";
import {HabitModalsName, HabitTaskType} from "../../../../widgets/habitTasks/model/config";
import {ModalHeader} from "../../../../entities/modal/pub/ModalHeader";
import {diffList} from "../../../../entities/task/model/config/task";

interface IFormHabitValues {
	id: number,
	taskTitle: string,
	taskText: string,
	isBadTask: boolean,
	taskDiff: string,
	isHabitTaskSuccess: boolean
}

export const UpdateHabitTaskForm = () => {
	const dispatch = useDispatch()

	const handleCloseModal = () => {
		dispatch(HabitTaskActions.closeHabitModal({modalName: HabitModalsName.UPDATE_HABIT_TASK}))
	}

	const modalData = useSelector(selectUpdateHabitModalData)
	const {
		id,
		titleText,
		supText,
		isBadTask,
		diff: indexDiff,
		category,
		count,
		isSuccessTask
	} = modalData as HabitTaskType

	const initialValues: IFormHabitValues = {
		id,
		taskTitle: titleText,
		taskText: supText,
		isBadTask,
		taskDiff: diffList[indexDiff - 1],
		isHabitTaskSuccess: isSuccessTask
	}

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: values => {
			let createData = {
				id: values.id,
				titleText: values.taskTitle,
				supText: values.taskText,
				isBadTask: values.isBadTask,
				diff: diffList.indexOf(values.taskDiff),
				isSuccessTask: !values.isBadTask,
				category,
				count,
			};

			dispatch(HabitTaskActions.changeHabitTask({newHabit: createData}))
			handleCloseModal()
		}
	})

	return (
		<>
			<ModalHeader headerText='Изменить привычку' handleSubmit={formik.handleSubmit} handleClose={handleCloseModal}>
				<div className='modal__text'>
					<label>Заголовок*</label>
					<input
						placeholder='Добавить название'
						value={formik.values.taskTitle}
						onChange={(e) => formik.setFieldValue('taskTitle', e.target.value)}
						type='text'
					/>
				</div>
				<div className='modal__notice'>
					<label>Заметки</label>
					<textarea
						value={formik.values.taskText}
						onChange={(e) => formik.setFieldValue('taskText', e.target.value)}
					/>
				</div>
			</ModalHeader>
			<div className='modal__body'>
				<div className='modal__icons'>
					<div onClick={() => formik.setFieldValue('isBadTask', false)} className='modal__icon-item'>
						<div
							className={classNames('modal__icon', {
								'modal__icon-active': !formik.values.isBadTask,
							})}>
							<div className='item-tasks__plus'>+</div>
						</div>
						<div className='modal__description'>Полезная</div>
					</div>
					<div onClick={() => formik.setFieldValue('isBadTask', true)} className='modal__icon-item'>
						<div
							className={classNames('modal__icon', {
								'modal__icon-active': formik.values.isBadTask,
							})}>
							<div className='item-tasks__minus'>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
									<path fillRule='evenodd' d='M0 0h10v2H0z'/>
								</svg>
							</div>
						</div>
						<div className='modal__description'>Вредная</div>
					</div>
				</div>
				<div className='modal__title-select'>Сложность</div>
				<select
					className='modal__select'
					value={formik.values.taskDiff}
					onChange={(e) => formik.setFieldValue('taskDiff', e.target.value)}>
					{diffList.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
		</>
	)
}
