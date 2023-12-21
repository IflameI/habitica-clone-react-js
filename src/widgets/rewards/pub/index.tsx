import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TaskFilters} from "../../../features/filterTasks";
import {AddTaskForm} from "../../../features/addTask";
import {filterTask} from "../../../entities/task/utils/filterTask";
import {BuyRewardBox} from "../../../features/buyReward";
import {RewardCategoryEnum, rewardFilters, RewardModalsName, RewardType} from "../model/config";
import {RewardActions} from "../model/actions";
import {RewardSelectors} from "../model/selectors";
import {RewardShop} from "../../../features/rewardShop";
import {ThreeDots} from "../../../assets/icons/ThreeDots";
import {ModalsManager} from "../ui/ModalsManager";

export const Rewards: React.FC = () => {
	const dispatch = useDispatch();
	const rewards = useSelector(RewardSelectors.selectRewards);
	const currentRewardFilter = useSelector(RewardSelectors.selectCurrentRewardFilter);

	const filteredTasks = useMemo(() => filterTask(rewards, currentRewardFilter), [rewards, currentRewardFilter])

	const changeActiveFilter = (newFilter: string) => {
		dispatch(RewardActions.changeCurrentRewardFilter({newFilter: newFilter}))
	}

	const onSendReward = (titleText: string) => {
		dispatch(RewardActions.addReward({
			newReward: {
				id: rewards.length - 1 + 1,
				titleText,
				category: RewardCategoryEnum.SEASON,
				cost: 10,
				supText: ''
			}
		}));
	};

	const onClickMoreActionButton = (taskData: RewardType) => {
		dispatch(RewardActions.openRewardModal({modalName: RewardModalsName.UPDATE_REWARD, data: taskData}))
	};

	return (
		<>
			<div className='tasks__column'>
				<div className='tasks__info'>
					<div className='tasks__name'>Награды</div>
					<TaskFilters taskFilters={{filters: rewardFilters, handler: changeActiveFilter}}/>
				</div>
				<div className='tasks__item item-tasks'>
					<div className='item-tasks__wrapper'>
						<AddTaskForm addTask={{placeHolder: 'Добавить награду', handler: onSendReward}}/>
						{
							filteredTasks.map((filteredTask) => (
								<div
									className='item-tasks__task'>
									<div className='item-tasks__middle'>
										<div className='item-tasks__text-wrapper'>
											<p className='item-tasks__text'>{filteredTask.titleText}</p>
											<div onClick={() => onClickMoreActionButton(filteredTask)}><ThreeDots/></div>
										</div>
										<p className='item-tasks__suptext'>{filteredTask.supText}</p>
									</div>
									<BuyRewardBox cost={filteredTask.cost}/>
								</div>
							))
						}
					</div>
					<RewardShop/>
				</div>
			</div>
			<ModalsManager/>
		</>
	);
};
