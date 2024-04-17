import clsx from "clsx/lite";

import Task from "core/components/Task";

import useTasksContext from "core/context/tasks";
import useTaskService, { SERVICE_TYPE } from "core/service/task";

import "./Card.scss";

export default function Card({ type }) {
	const [tasks, _] = useTasksContext();

	const {
		setIsModalOpen: setCreateIsModalOpen,
		ServiceElement: CreateServiceElement
	} = useTaskService(SERVICE_TYPE.createTask, {
		taskStatus: type
	});

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
							taskID={task.id}
							title={task.title}
							user={task.user}
							label={task.label}
							status={task.status}
						/>
					))}
			</>
			<button
				className="card__create-btn"
				onClick={() => {
					setCreateIsModalOpen(true);
				}}
			>
				<span className="card__create-btn-plus">+</span> Create task
			</button>
			{CreateServiceElement}
		</div>
	);
}
