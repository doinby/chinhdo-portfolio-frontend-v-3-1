import { ILastUpdated, ILinkBtn } from './interfaces';

export function LinkBtn({ children, className, href }: ILinkBtn) {
	return (
		<a
			href={href}
			className={`${className} px-4 py-2 rounded-md no-underline bg-slate-500 text-white hover:bg-orange-500 hover:text-white`}>
			{children}
		</a>
	);
}

export function LinkBtnSm({
	children,
	className,
	href,
	disabled = false,
}: ILinkBtn) {
	const sharedClass =
		'flex items-center gap-1 px-1.5 py-0.5 rounded-[0.275rem] uppercase no-underline text-xs bg-slate-500 disabled:bg-slate-200 text-white disabled:text-slate-400 hover:bg-orange-500 hover:text-white';
	if (disabled) {
		return (
			<button
				className={`${className} ${sharedClass} cursor-not-allowed`}
				disabled>
				{children}
			</button>
		);
	}

	return (
		<a href={href} className={`${className} ${sharedClass}`}>
			{children}
		</a>
	);
}

export function LastUpdated({ className, lastUpdated }: ILastUpdated) {
	return (
		<p className={`${className} text-slate-400 text-sm`}>
			Updated: {lastUpdated.toString()}
		</p>
	);
}
