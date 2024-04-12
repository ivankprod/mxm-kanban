import clsx from "clsx";

import "./Task.scss";

export default function Task({ title, user, status, label }) {
	return (
		<div className="task">
			<p className="task__title">{title}</p>
			<div className="task__entries">
				<div
					className={clsx(
						"task__user",
						`task__user_${user.description}`
					)}
				></div>
				<span className={clsx(
						"task__label",
						`task__label_color_${status.description}`
					)}
				>{label}</span>
			</div>
		</div>
	);
}
