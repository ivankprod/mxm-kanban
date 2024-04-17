import { useState } from "react";
import { v4 as uuid } from "uuid";

import Modal from "core/components/Modal";

import useTasksContext, { TASK_ACTION_TYPE } from "core/context/tasks";
import { TASK_STATUS, USER_AVATAR } from "core/domain/task";

import { Enum } from "core/utils";

export const SERVICE_TYPE = Enum({
	createTask: "create-task",
	updateTask: "update-task",
	deleteTask: "delete-task"
});

const createTaskService = (data) => {
	const [_, setTasks] = useTasksContext();

	const [isOpen, setIsOpen] = useState(false);

	const [newTask, setNewTask] = useState({
		title: "",
		user: USER_AVATAR.male,
		label: "",
		status: data && data.taskStatus ? data.taskStatus : TASK_STATUS.todo
	});

	const createTask = () => {
		setTasks({
			type: TASK_ACTION_TYPE.createTask,
			payload: {
				id: uuid(),
				title: newTask.title,
				user: newTask.user,
				label: newTask.label,
				status: newTask.status
			}
		});
	};

	return {
		setIsModalOpen: setIsOpen,
		ServiceElement: (
			<Modal
				closeHandler={() => setIsOpen(false)}
				isOpen={isOpen}
				submit={{
					handler: createTask,
					buttonText: "Create"
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
		)
	};
};

const updateTaskService = (data) => {
	const [_, setTasks] = useTasksContext();

	const [isOpen, setIsOpen] = useState(false);

	const [newTask, setNewTask] = useState({
		id: data.id,
		title: data.title,
		user: data.user,
		label: data.label,
		status: data.status
	});

	const updateTask = () => {
		setTasks({
			type: TASK_ACTION_TYPE.updateTask,
			payload: {
				id: newTask.id,
				title: newTask.title,
				user: newTask.user,
				label: newTask.label,
				status: newTask.status
			}
		});
	};

	return {
		setIsModalOpen: setIsOpen,
		ServiceElement: (
			<Modal
				closeHandler={() => setIsOpen(false)}
				isOpen={isOpen}
				submit={{
					handler: updateTask,
					buttonText: "Save"
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
		)
	};
};

const deleteTaskService = (data) => {
	const [_, setTasks] = useTasksContext();

	const deleteTask = () => {
		setTasks({
			type: TASK_ACTION_TYPE.deleteTask,
			payload: { id: data.taskID }
		});
	};

	return deleteTask;
};

export default function useTaskService(type, data) {
	switch (type) {
		case SERVICE_TYPE.createTask:
			return createTaskService(data);

		case SERVICE_TYPE.updateTask:
			return updateTaskService(data);

		case SERVICE_TYPE.deleteTask:
			return deleteTaskService(data);

		default:
			return null;
	}
}
