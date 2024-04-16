import { createContext, useContext, useEffect, useReducer } from "react";

import { Enum } from "core/utils";

import tasksInitial, { TASK_STATUS, USER_AVATAR } from "core/domain/task";

const TasksContext = createContext(null);

export const TASK_ACTION_TYPE = Enum({
	createTask: "CREATE_TASK",
	updateTask: "UPDATE_TASK",
	deleteTask: "DELETE_TASK",
});

const tasksReducer = (state, action) => {
	switch (action.type) {
		case TASK_ACTION_TYPE.createTask:
			return [...state, action.payload];
		case TASK_ACTION_TYPE.updateTask:
			return [
				...state.map((task) =>
					task.id == action.payload.id ? { ...action.payload } : task
				)
			];
		case TASK_ACTION_TYPE.deleteTask:
			return [...state.filter((task) => task.id !== action.payload.id)];

		default:
			return state;
	}
};

const createTasksContext = () => {
	const res =
		JSON.parse(localStorage.getItem("tasks"), (key, value) => {
			if (key == "user") return USER_AVATAR[value.id];
			else if (key == "status")
				return value.id == TASK_STATUS.inprogress.id
					? TASK_STATUS.inprogress
					: TASK_STATUS[value.id];

			return value;
		}) || tasksInitial;

	return useReducer(tasksReducer, res);
};

export const TasksContextProvider = ({ children }) => {
	const [tasks, setTasks] = createTasksContext();

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	return (
		<TasksContext.Provider value={[tasks, setTasks]}>
			{children}
		</TasksContext.Provider>
	);
};

export const useTasksContext = () => useContext(TasksContext);

export default useTasksContext;
