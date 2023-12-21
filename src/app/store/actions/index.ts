/* eslint-disable import/no-anonymous-default-export */
import * as userActionCreators from '../../../entities/user/model/actions/user';
import * as habitTaskActionCreators from '../../../widgets/habitTasks/model/actions/habitTask';
import * as rewardActionCreators from '../../../widgets/rewards/model/actions/reward';
import * as dailyTaskActionCreators from '../../../widgets/dailyTasks/model/actions/dailyTask';
import * as todoTaskActionCreators from '../../../widgets/todoTasks/model/actions/todoTask';

export default {
    ...userActionCreators,
    ...habitTaskActionCreators,
    ...dailyTaskActionCreators,
    ...todoTaskActionCreators,
    ...rewardActionCreators,
};
