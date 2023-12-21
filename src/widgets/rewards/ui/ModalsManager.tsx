import {useSelector} from "react-redux";
import {selectIsUpdateRewardModalOpen} from "../model/selectors/reward.selectors";
import {UpdateRewardTaskModal} from "./UpdateRewardTaskModal";

export const ModalsManager = () => {
	const isUpdateRewardTaskOpen = useSelector(selectIsUpdateRewardModalOpen);

	return (
		<>
			{isUpdateRewardTaskOpen && <UpdateRewardTaskModal/>}
		</>
	);
};
