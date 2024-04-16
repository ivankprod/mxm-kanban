import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

const createWrapper = (id) => {
	const wrapperElement = document.createElement("div");
	wrapperElement.setAttribute("id", id);

	document.body.appendChild(wrapperElement);

	return wrapperElement;
};

export default function Portal({ children, wrapperID = "portal-wrapper" }) {
	const [wrapperElement, setWrapperElement] = useState(null);

	useLayoutEffect(() => {
		let elem = document.getElementById(wrapperID);
		let systemCreated = false;

		if (!elem) {
			systemCreated = true;

			elem = createWrapper(wrapperID);
		}

		setWrapperElement(elem);

		return () => {
			if (systemCreated && elem.parentNode) {
				elem.parentNode.removeChild(elem);
			}
		};
	}, [wrapperID]);

	if (wrapperElement == null) return null;

	return createPortal(children, wrapperElement);
}
