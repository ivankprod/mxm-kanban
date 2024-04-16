import { useEffect } from "react";

import Portal from "core/components/Portal";

import "./Modal.scss";

export default function Modal({ children, isOpen, closeHandler, submit }) {
	useEffect(() => {
		const closeOnEscapeKey = (e) =>
			e.key === "Escape" ? closeHandler() : null;

		document.body.addEventListener("keydown", closeOnEscapeKey);

		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [closeHandler]);

	if (!isOpen) return null;

	return (
		<Portal wrapperID="portal-modal-container">
			<div className="modal">
				<div className="modal__window">
					<div className="modal__content">{children}</div>
					<div className="modal__actions">
						{submit && (
							<button
								onClick={() => {
									submit.handler();

									closeHandler();
								}}
								className="modal__button"
							>
								{submit.buttonText}
							</button>
						)}
						<button
							onClick={closeHandler}
							className="modal__button"
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</Portal>
	);
}
