import React from "react";
import {ModalHeader} from "../../../../entities/modal/pub/ModalHeader";
import {RewardActions} from "../../../../widgets/rewards/model/actions";
import {RewardModalsName, RewardType} from "../../../../widgets/rewards/model/config";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {selectUpdateRewardModalData} from "../../../../widgets/rewards/model/selectors/reward.selectors";

interface IFormRewardValues {
	id: number,
	taskTitle: string,
	taskText: string,
	cost: number
}

export const UpdateRewardForm: React.FC = () => {
	const dispatch = useDispatch()
	const modalData = useSelector(selectUpdateRewardModalData)

	const handleCloseModal = () => {
		dispatch(RewardActions.closeRewardModal({modalName: RewardModalsName.UPDATE_REWARD}))
	}

	const {
		id,
		category,
		titleText,
		supText,
		cost
	} = modalData as RewardType

	const initialValues: IFormRewardValues = {
		id,
		taskTitle: titleText,
		taskText: supText,
		cost,
	}

	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: values => {
			let createData = {
				id: values.id,
				titleText: values.taskTitle,
				supText: values.taskText,
				cost: values.cost,
				category
			};

			dispatch(RewardActions.changeReward({newReward: createData}))
			handleCloseModal()
		}
	})

	return (
		<>
			<ModalHeader handleClose={handleCloseModal} handleSubmit={formik.handleSubmit} headerText={'Изменить награду'}>
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
				<div className='modal__notice modal-change'>
					<label>Изменить цену</label>
					<input
						placeholder='Добавить награду'
						value={formik.values.cost}
						onChange={(e) => formik.setFieldValue('cost', Number(e.target.value))}
						type='number'
					/>
				</div>
			</div>
		</>
	)
}
