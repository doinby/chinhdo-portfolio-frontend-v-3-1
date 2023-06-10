import { Dialog } from '@headlessui/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Close } from 'styled-icons/remix-line';
import { IContentModalProps } from '../utils/interfaces';
import { LinkBtn } from '../utils/styledComponents';

export default function ContentModal({
	isOpen,
	setOpen,
	title,
	content,
	screenshots,
}: IContentModalProps) {
	return (
		<Dialog
			as='div'
			open={isOpen}
			onClose={() => setOpen(false)}
			className='relative z-10'>
			<div className='fixed inset-0 flex items-center justify-center bg-slate-800/50'>
				<Dialog.Panel className='ml-72 relative w-screen h-screen px-24 py-28 bg-orange-50 rounded-tl-md rounded-bl-md overflow-y-scroll'>
					<Dialog.Title as='h2' className='mb-6 text-3xl text-orange-500'>
						{title}
					</Dialog.Title>
					<Dialog.Description
						as='article'
						className='prose prose-headings:text-orange-500 max-w-none grid grid-cols-5 items-start gap-16'>
						<ReactMarkdown
							children={content || ''}
							remarkPlugins={[remarkGfm]}
							className='col-span-3 [&>*:first-child]:mt-0'
						/>
						<div className='col-span-2 grid grid-cols-2 gap-6'>
							<h3 className='col-span-2 mt-0'>Screenshots</h3>
							{Array.isArray(screenshots) &&
								screenshots.map((url, idx) => (
									<button key={`${title}'s screenshot ${idx}`}>
										<img src={url} alt={`${title}'s screenshot ${idx}`} className='m-0' />
									</button>
								))}
						</div>
					</Dialog.Description>

					<button onClick={() => setOpen(false)} className='absolute top-6 left-8'>
						<Close size='32' className='text-slate-500 hover:text-orange-500' />
					</button>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
}
