import clsx from "clsx";

import "./Task.scss";

export default function Task({ title, user, status, label }) {
	return (
		<div className="task">
			<p
				dangerouslySetInnerHTML={{ __html: title }}
				className="task__title"
			></p>
			<div className="task__entries">
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
		</div>
	);
}
