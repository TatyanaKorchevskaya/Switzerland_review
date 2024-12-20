import { useEffect } from 'react';

type UseOutsideClickClose = {
	isMenuOpen: boolean;
	onChange: (newValue: boolean) => void;
	onClose?: () => void | Function;
	rootRef: React.RefObject<HTMLDivElement>;
	btnRef: React.RefObject<HTMLButtonElement>;
};

export const useOutsideClickClose = ({
	isMenuOpen,
	rootRef,
	btnRef,
	onClose,
	onChange,
}: UseOutsideClickClose) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;

			if (
				target instanceof Node
				&& !btnRef.current?.contains(target)
				&& !rootRef.current?.contains(target)
				&& (target as HTMLElement).getAttribute("data-parent") !== "ArticleParamsForm"
			) {
				isMenuOpen && onClose?.();
				onChange?.(false);
			}
		};

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [onClose, onChange, isMenuOpen]);
};