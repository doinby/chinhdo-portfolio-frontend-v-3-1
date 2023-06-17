import { useState } from 'react';
import UpdateToast from './UpdateToast';

export default function Header() {
	const [isOpen, setOpen] = useState(true);

	return (
		<header className='flex justify-between'>
			<div id='logo' className='flex gap-2 items-baseline'>
				<a
					href='/'
					type='text/html'
					className='text-orange-500 font-header text-xl hover:text-slate-500'>
					doinby.co
				</a>
				<UpdateToast isOpen={isOpen} setOpen={setOpen}>
					<button
						onClick={() => setOpen(!isOpen)}
						className='text-sm underline underline-offset-2 text-slate-400'>
						<small>v.3.1</small>
					</button>
				</UpdateToast>
			</div>
			<ul>
				<li>
					<a
						href='mailto:chinh@doinby.co'
						className='bg-orange-500 text-white p-3 rounded-md hover:bg-slate-500'>
						Get in touch
					</a>
				</li>
			</ul>
		</header>
	);
}
