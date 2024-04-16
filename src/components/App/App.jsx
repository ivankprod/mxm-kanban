import MainLayout from "core/layouts/Main";
import Card from "core/components/Card";

import { TASK_STATUS } from "core/domain/task";

import { TasksContextProvider } from "core/context/tasks";

import "./App.scss";

export default function App() {
	return (
		<MainLayout>
			<h1 className="project-header">Project: Example</h1>
			<div className="cards-wrapper">
				<TasksContextProvider>
					<Card type={TASK_STATUS.todo} />
					<Card type={TASK_STATUS.inprogress} />
					<Card type={TASK_STATUS.review} />
					<Card type={TASK_STATUS.done} />
				</TasksContextProvider>
			</div>
		</MainLayout>
	);
}
