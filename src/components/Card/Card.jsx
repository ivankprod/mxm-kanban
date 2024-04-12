import clsx from "clsx/lite";

import "./Card.scss";
import Task from "../Task";

export default function Card({ tasks, type }) {
	return (
		<div className={clsx("card", `card_color_${type.id.description}`)}>
			<div className="card__title">
				<div className="status__icon"></div>
				{type.title}
			</div>
			<>
				{tasks.map((task) => (
					<Task
						key={task.id}
						title={task.title}
						user={task.user}
						label={task.label}
					/>
				))}
			</>
		</div>
	);
}
