import { useState } from "react";
import clsx from "clsx/lite";
import { v4 as uuid } from "uuid";

import Task from "core/components/Task";
import Modal from "core/components/Modal";

import { USER_AVATAR } from "core/domain/task";

import useTasksContext, { TASK_ACTION_TYPE } from "core/context/tasks";

import "./Card.scss";

export default function Card({ type }) {
	const [tasks, setTasks] = useTasksContext();

	const [isOpen, setIsOpen] = useState(false);

	const [newTask, setNewTask] = useState({
		title: "",
		user: USER_AVATAR.male,
		label: "",
	});

	const createTask = () => {
		setTasks({
			type: TASK_ACTION_TYPE.createTask,
			payload: {
				id: uuid(),
				title: newTask.title,
				user: newTask.user,
				label: newTask.label,
				status: type,
			},
		});
	};

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
					setIsOpen(true);
				}}
			>
				<span className="card__create-btn-plus">+</span> Create task
			</button>
			<Modal
				closeHandler={() => setIsOpen(false)}
				isOpen={isOpen}
				submit={{
					handler: createTask,
					buttonText: "Create",
				}}
			>
				<label>
					Title:
					<input
						type="text"
						name="title"
						value={newTask.title}
						onChange={(e) => {
							setNewTask((state) => {
								return {
									...state,
									[e.target.name]: e.target.value
								};
							});
						}}
					/>
				</label>
				<label>
					Avatar:
					<select
						name="user"
						value={newTask.user.id}
						onChange={(e) => {
							setNewTask((state) => {
								return {
									...state,
									user: USER_AVATAR[e.target.value]
								};
							});
						}}
					>
						{Object.keys(USER_AVATAR).map((key) => (
							<option
								value={USER_AVATAR[key].id}
								key={`user-avatar-${USER_AVATAR[key].id}`}
							>
								{USER_AVATAR[key].title}
							</option>
						))}
					</select>
				</label>
				<label>
					Label:
					<input
						type="text"
						name="label"
						value={newTask.label}
						onChange={(e) => {
							setNewTask((state) => {
								return {
									...state,
									[e.target.name]: e.target.value
								};
							});
						}}
					/>
				</label>
			</Modal>
		</div>
	);
}
