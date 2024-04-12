import { v4 as uuid } from "uuid";

import { Enum, EnumExt } from "core/utils";

const TASK_STATUS_BASE = Enum({
	todo: "todo",
	inProgress: "in-progress",
	review: "review",
	done: "done"
});

export const TASK_STATUS = EnumExt({
	todo: {
		id: TASK_STATUS_BASE.todo,
		title: "To Do"
	},

	inProgress: {
		id: TASK_STATUS_BASE.inProgress,
		title: "In Progress"
	},

	review: {
		id: TASK_STATUS_BASE.review,
		title: "Review"
	},

	done: {
		id: TASK_STATUS_BASE.done,
		title: "Done"
	}
});

export const USER_AVATAR = Enum({
	male: "male",
	female: "female"
});

export const tasksInitial = [
	{
		id: uuid(),
		title: <>Christmas Banners</>,
		user: USER_AVATAR.male,
		label: "Label",
		status: TASK_STATUS.todo
	}, {
		id: uuid(),
		title: <>Redo Portfolio</>,
		user: USER_AVATAR.male,
		label: "Label",
		status: TASK_STATUS.todo
	}, {
		id: uuid(),
		title: <>Cofee Break</>,
		user: USER_AVATAR.female,
		label: "Always",
		status: TASK_STATUS.inProgress
	}, {
		id: uuid(),
		title: <>Updating Portfolio</>,
		user: USER_AVATAR.female,
		label: "Webflow",
		status: TASK_STATUS.inProgress
	}, {
		id: uuid(),
		title: <>Release to Figma Community</>,
		user: USER_AVATAR.male,
		label: "Release",
		status: TASK_STATUS.review
	}, {
		id: uuid(),
		title: <>User Feedback</>,
		user: USER_AVATAR.male,
		label: "Feedback",
		status: TASK_STATUS.review
	}, {
		id: uuid(),
		title: (
			<>
				Background images from <a target="_blank" href="https://humaaans.com">humaaans.com</a>
			</>
		),
		user: USER_AVATAR.male,
		label: "Sourcing",
		status: TASK_STATUS.review
	}, {
		id: uuid(),
		title: <>Style Guide</>,
		user: USER_AVATAR.female,
		label: "UI",
		status: TASK_STATUS.done
	}, {
		id: uuid(),
		title: <>Component Library</>,
		user: USER_AVATAR.female,
		label: "UI",
		status: TASK_STATUS.done
	}, {
		id: uuid(),
		title: <>Sticker Components</>,
		user: USER_AVATAR.female,
		label: "UI",
		status: TASK_STATUS.done
	}
];

export default tasksInitial;
