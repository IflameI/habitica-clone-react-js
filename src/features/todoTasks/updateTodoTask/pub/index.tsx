import {ModalHeader} from "../../../../entities/modal/pub/ModalHeader";
import React from "react";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {TodoTaskActions} from "../../../../widgets/todoTasks/model/actions";
import {TodoCategoryEnum, TodoModalsName, ToDoTaskType} from "../../../../widgets/todoTasks/model/config";
import DatePicker from "react-datepicker";
import {diffList} from "../../../../entities/task/model/config/task";
import {selectUpdateTodoModalData} from "../../../../widgets/todoTasks/model/selectors/todoTask.selectors";
import "react-datepicker/dist/react-datepicker.css";


export const UpdateTodoTaskForm = () => {
	const dispatch = useDispatch()

	const handleCloseModal = () => {
		dispatch(TodoTaskActions.closeToDoModal({modalName: TodoModalsName.UPDATE_TODO}))
	}

	const modalData = useSelector(selectUpdateTodoModalData);

	const {
		id,
		titleText,
		supText,
		diff: indexDiff,
		category,
		remainDay,
		isCompletedTask,
		finishUntilDate,
	} = modalData as ToDoTaskType

	const initialValues: ToDoTaskType = {
		id,
		titleText,
		supText,
		diff: indexDiff,
		remainDay,
		isCompletedTask,
		category,
		finishUntilDate,
	}

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: values => {
			let createData = {
				id: values.id,
				titleText: values.titleText,
				supText: values.supText,
				diff: diffList.indexOf(diffList[values.diff]),
				remainDay: values.remainDay,
				isCompletedTask: true,
				finishUntilDate: values.finishUntilDate,
				category: ''
			};

			dispatch(TodoTaskActions.changeTodoTask({taskId: createData.id, newTask: createData}));

			if (formik.values.finishUntilDate) {
				dispatch(TodoTaskActions.changeCategoryTodoTask({taskId: createData.id, newCategory: TodoCategoryEnum.DATE}))
			}

			handleCloseModal();
		}
	})

	const handleDateChange = (newDate: Date) => {
		const calculatedRemainDay = Math.ceil(
			(newDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
		);
		formik.setFieldValue('finishUntilDate', newDate);
		formik.setFieldValue('remainDay', calculatedRemainDay);
	};


	return (
		<>
			<ModalHeader handleClose={handleCloseModal} handleSubmit={formik.handleSubmit} headerText={'Изменить награду'}>
				<div className='modal__text'>
					<label>Заголовок*</label>
					<input
						placeholder='Добавить название'
						value={formik.values.titleText}
						onChange={(e) => formik.setFieldValue('titleText', e.target.value)}
						type='text'
					/>
				</div>
				<div className='modal__notice'>
					<label>Заметки</label>
					<textarea
						value={formik.values.supText}
						onChange={(e) => formik.setFieldValue('supText', e.target.value)}
					/>
				</div>
			</ModalHeader>
			<div className='modal__body'>
				<div className='modal__title-select'>Сложность</div>
				<select
					className='modal__select'
					value={diffList[formik.values.diff]}
					onChange={(e) => formik.setFieldValue('diff', e.target.value)}>
					{diffList.map((difficulty: string) => (
						<option key={difficulty} value={difficulty}>
							{difficulty}
						</option>
					))}
				</select>
				<div className='modal__title-select'>Выполнить до</div>
				<div className='modal__calendar'>
					<DatePicker
						filterDate={(date) => date > new Date()}
						popperPlacement='top-start'
						selected={formik.values.finishUntilDate}
						onChange={(date) => date && handleDateChange(date)}
					/>
				</div>
			</div>
		</>
	)
}
