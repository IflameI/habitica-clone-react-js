import React from "react";
import {HabitTasks} from "widgets/habitTasks";
import {DailyTasks} from "widgets/dailyTasks";
import {TodoTasks} from "widgets/todoTasks";
import {Rewards} from "widgets/rewards";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
	return (
		<section className='tasks'>
			<div className='container'>
				<div className='tasks__top'/>
				<div className='tasks__row'>
					<HabitTasks/>
					<DailyTasks/>
					<TodoTasks/>
					<Rewards/>
					<ToastContainer/>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
