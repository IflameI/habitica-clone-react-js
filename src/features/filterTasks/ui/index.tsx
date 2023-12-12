import React, {useState} from "react";
import Tabs from "../../../common/ui/Tabs";
import {TaskFiltersType} from "../../../shared/types/task";

interface ITaskFilters {
	taskFilters: { filters: TaskFiltersType, handler: (newFilter: string) => void },
}

export const TaskFilters: React.FC<ITaskFilters> = ({taskFilters}) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	const onActiveTabChange = (activeTabIndex: number) => {
		taskFilters.handler(taskFilters.filters[activeTabIndex].category)
		setActiveTab(activeTabIndex)
	}

	return (
		<div className='tasks__tabs'>
			<ul className='tasks__list'>
				<Tabs tabs={taskFilters.filters} activeTab={activeTab} setActiveTab={onActiveTabChange}/>
			</ul>
		</div>
	);
};
