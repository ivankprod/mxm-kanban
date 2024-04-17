import clsx from "clsx";

import useTaskService, { SERVICE_TYPE } from "core/service/task";

import "./Task.scss";

export default function Task({ taskID, title, user, label, status }) {
	const {
		setIsModalOpen: setUpdateIsModalOpen,
		ServiceElement: UpdateServiceElement,
	} = useTaskService(SERVICE_TYPE.updateTask, {
		id: taskID,
		title: title,
		user: user,
		label: label,
		status: status
	});

	const deleteTask = useTaskService(SERVICE_TYPE.deleteTask, { taskID });

	return (
		<div className="task">
			<p
				dangerouslySetInnerHTML={{ __html: title }}
				className="task__title"
			></p>
			<div className="task__entries">
				<div className="task__entries_left">
					<div
						className={clsx("task__user", `task__user_${user.id}`)}
					></div>
					<span
						className={clsx(
							"task__label",
							`task__label_color_${status.id}`
						)}
					>
						{label}
					</span>
				</div>
				<div className="task__entries_right">
					<button
						className="task__button task__button_edit"
						onClick={() => {
							setUpdateIsModalOpen(true);
						}}
					></button>
					<button
						className="task__button task__button_delete"
						onClick={deleteTask}
					></button>
				</div>
			</div>
			{UpdateServiceElement}
		</div>
	);
}
