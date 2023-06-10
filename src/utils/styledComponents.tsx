import { ILinkBtn } from './interfaces';

export function LinkBtn({ children, className, href }: ILinkBtn) {
	return (
		<a
			href={href}
			className={`${className} px-4 py-2 rounded-md no-underline bg-slate-500 text-white hover:bg-orange-500 hover:text-white`}>
			{children}
		</a>
	);
}

export function LinkBtnSm({ children, className, href }: ILinkBtn) {
	return (
		<a
			href={href}
			className={`${className} flex items-center gap-1 px-1.5 py-0.5 rounded-[0.275rem] uppercase no-underline text-xs bg-slate-500 text-white hover:bg-orange-500 hover:text-white`}>
			{children}
		</a>
	);
}
