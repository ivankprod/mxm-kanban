import clsx from "clsx/lite";

import Task from "core/components/Task";

import useTasksContext from "core/context/tasks";
import useTaskService, { SERVICE_TYPE } from "core/service/task";

import "./Card.scss";

export default function Card({ type }) {
	const [tasks, setTasks] = useTasksContext();

	const { setIsModalOpen, ServiceElement } = useTaskService(
		SERVICE_TYPE.createTask,
		[setTasks]
	);

	return (
		<div className={clsx("card", `card_color_${type.id}`)}>
			<div className="card__title">
				<div className="status__icon"></div>
				{type.title}
			</div>
			<>
				{tasks
					.filter((task) => task.status == type)
					.map((task) => (
						<Task
							key={task.id}
							title={task.title}
							user={task.user}
							status={type}
							label={task.label}
						/>
					))}
			</>
			<button
				className="card__create-btn"
				onClick={() => {
					setIsModalOpen(true);
				}}
			>
				<span className="card__create-btn-plus">+</span> Create task
			</button>
			{ServiceElement}
		</div>
	);
}
