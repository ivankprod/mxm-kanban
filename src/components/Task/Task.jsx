import clsx from "clsx";

import "./Task.scss";

export default function Task({ title, user, label }) {
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
				<span className="task__label">{label}</span>
			</div>
		</div>
	);
}
