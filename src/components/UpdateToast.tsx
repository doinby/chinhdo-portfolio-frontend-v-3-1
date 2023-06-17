import * as Toast from '@radix-ui/react-toast';
import { IUpdateToast } from '../utils/interfaces';
import { Close } from 'styled-icons/remix-line';

export default function UpdateToast({
	isOpen,
	setOpen,
	className,
	children,
}: IUpdateToast) {
	const duration = 3000;

	return (
		<Toast.Provider swipeDirection='left'>
			{children}
			<div className='relative'>
				<Toast.Root
					id='toast-root'
					className={`${className} absolute left-[-6rem] top-2 sm:left-0 sm:top-[-8px]`}
					open={isOpen}
					duration={duration}
					onOpenChange={() =>
						setTimeout(() => {
							return setOpen(false);
						}, duration)
					}
					onEscapeKeyDown={() => setOpen(false)}>
					<Toast.Close
						onClick={() => setOpen(false)}
						className='absolute top-[-4px] right-0'>
						<Close size='16' className='text-slate-500' />
					</Toast.Close>
					<Toast.Description className='w-48 max-w-48 px-2 py-1 rounded text-slate-500 bg-slate-200 shadow-md shadow-slate-500/20'>
						<small>
							🎉 Brand new site! Visit old version at 👉{' '}
							<a
								target='_blank'
								href='https://old.doinby.co'
								className='underline underline-offset-2'>
								old.doinby.co
							</a>
						</small>
					</Toast.Description>
				</Toast.Root>
				<Toast.Viewport />
			</div>
		</Toast.Provider>
	);
}
