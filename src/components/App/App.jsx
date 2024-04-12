import MainLayout from "core/layouts/Main";
import Card from "core/components/Card";

import tasksInitial, { TASK_STATUS } from "core/domain/task";

import "./App.scss";

export default function App() {
	return (
		<MainLayout>
			<h1>Project: Example</h1>
			<div className="cards-wrapper">
				<Card
					tasks={tasksInitial.filter(
						(task) => task.status == TASK_STATUS.todo
					)}
					type={TASK_STATUS.todo}
				/>
				<Card
					tasks={tasksInitial.filter(
						(task) => task.status == TASK_STATUS.inProgress
					)}
					type={TASK_STATUS.inProgress}
				/>
				<Card
					tasks={tasksInitial.filter(
						(task) => task.status == TASK_STATUS.review
					)}
					type={TASK_STATUS.review}
				/>
				<Card
					tasks={tasksInitial.filter(
						(task) => task.status == TASK_STATUS.done
					)}
					type={TASK_STATUS.done}
				/>
			</div>
		</MainLayout>
	);
}
