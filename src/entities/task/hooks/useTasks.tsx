import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "../../user/model/actions";
import {useNotification} from "../../../shared/hooks/useNotification";
import {MessageOnGain} from "../../../shared/pub/NotificationMessage/MessageOnGain";
import {MessageOnLost} from "../../../shared/pub/NotificationMessage/MessageOnLost";
import HealthIcon from "../../../assets/icons/MemberIcons/HealthIcon";
import StarIcon from "../../../assets/icons/StarIcon";
import {UserSelectors} from "../../user/model/selectors";

export const useTasks = () => {
	const dispatch = useDispatch()
	const {showErrorNotification, showSuccessNotification} = useNotification()

	const currentUserLevelPoint = useSelector(UserSelectors.selectLevelPoint)
	const maxLevelPoint = useSelector(UserSelectors.selectMaxLevelPoint)

	const currentHealthPoint = useSelector(UserSelectors.selectHp)
	const maxHealthPoint = useSelector(UserSelectors.selectMaxHealthPoint)

	const taskComplete = (levelPoint: number, health: number) => {
		if (currentUserLevelPoint + levelPoint > maxLevelPoint) {
			dispatch(UserActions.increaseUserLevel())
			dispatch(UserActions.resetUserLevelPoint())
		}

		if (health + currentHealthPoint <= maxHealthPoint) {
			showSuccessNotification(<MessageOnGain thing={['жизнь', 'жизни', 'жизней']} icon={<HealthIcon/>} count={health}/>)
			dispatch(UserActions.addUserHp({hp: health}))
		} else {
			dispatch(UserActions.resetUserHp())
		}

		dispatch(UserActions.addUserLevelPoint({level_point: levelPoint}))
		dispatch(UserActions.addUserMoney({money: Math.floor(Math.random() * 10)}))

		showSuccessNotification(<MessageOnGain thing={['опыт', 'опыта', 'опыта']} icon={<StarIcon/>} count={levelPoint}/>)
	};

	const taskFail = (levelPoint: number, health: number) => {
		if (currentUserLevelPoint - levelPoint >= 0) {
			dispatch(UserActions.minusUserLevelPoint({level_point: levelPoint}))
			showErrorNotification(<MessageOnLost thing={['опыт', 'опыта', 'опыта']} icon={<StarIcon/>} count={levelPoint}/>)
		}

		if (currentHealthPoint - health >= 0) {
			dispatch(UserActions.minusUserHp({hp: health}))
			showErrorNotification(<MessageOnLost thing={['жизнь', 'жизни', 'жизней']} icon={<HealthIcon/>} count={health}/>)
		}
	};

	return {taskFail, taskComplete};
};

