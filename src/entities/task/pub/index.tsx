import React from "react";
import classNames from "classnames";
import {CounterIcon} from "../../../assets/icons/CounterIcon";
import {TaskType} from "../model/config/task";
import {CheckIcon} from "../../../assets/icons/CheckIcon";
import {ThreeDots} from "../../../assets/icons/ThreeDots";

interface ITask extends Omit<TaskType, 'category' | 'diff' | 'id'> {
	isOneTimeTask?: boolean;
	onSuccessButtonClick: () => void;
	onFailButtonClick?: () => void;
	onMoreActionButtonClick?: () => void;
}

export const Task: React.FC<ITask> = ({
	                                      titleText,
	                                      isBadTask,
	                                      isSuccessTask,
	                                      count,
	                                      supText,
	                                      isOneTimeTask,
	                                      isCompletedTask,
	                                      onSuccessButtonClick,
	                                      onFailButtonClick,
	                                      onMoreActionButtonClick
                                      }) => {
	return (
		<div className='item-tasks__wrapper'>
			<div
				className={classNames('item-tasks__task', {
					'item-tasks__bad-task': isBadTask,
					'item-tasks__sucsess-task': isSuccessTask,
				})}>
				{isOneTimeTask ? <div
					className={classNames('item-tasks__left item-tasks__func', {
						'item-tasks__left-active': isCompletedTask,
					})}>
					<div onClick={onSuccessButtonClick} className='item-tasks__checkbox'>
            <span>
							<CheckIcon/>
            </span>
					</div>
				</div> : (
					<div
						onClick={onSuccessButtonClick}
						className='item-tasks__left item-tasks__func'>
						<div className='item-tasks__plus'>+</div>
					</div>
				)
				}
				<div className='item-tasks__middle'>
					<div className='item-tasks__text-wrapper'>
						<p className='item-tasks__text'>{titleText}</p>
						{onMoreActionButtonClick && (
							<div onClick={onMoreActionButtonClick}><ThreeDots/></div>
						)}
					</div>
					<p className='item-tasks__suptext'>{supText}</p>
					{Number(count) || count === 0 ? (
						<div className='item-tasks__counter'>
							<CounterIcon/>
							<span className='item-tasks__count'>
              {count && count >= 0 ? `+${count}` : `-${count}`}
            </span>
						</div>
					) : null}
				</div>
				{!isOneTimeTask && (
					<div className='item-tasks__right item-tasks__func'>
						<div onClick={onFailButtonClick && onFailButtonClick} className='item-tasks__minus'>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 2'>
								<path fillRule='evenodd' d='M0 0h10v2H0z'/>
							</svg>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

