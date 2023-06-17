import { Dialog } from '@headlessui/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Close } from 'styled-icons/remix-line';
import { IContentModalProps } from '../utils/interfaces';
import { LastUpdated, LinkBtnSm } from '../utils/styledComponents';
import { ExternalLink } from 'styled-icons/remix-line';
import { Github } from 'styled-icons/remix-fill';
import Stacks from './Stacks';

export default function ContentModal({
	isOpen,
	setOpen,
	title,
	content,
	screenshots,
	live,
	github,
	stacks,
	lastUpdated,
}: IContentModalProps) {
	const part1 = content && content.slice(0, content.indexOf('### Built with'));
	const part2 = content && content.slice(content.indexOf('### Built with'));
	const isPrivateRepo = title === 'The Forgotten Adoption Option App';

	return (
		<Dialog
			as='div'
			open={isOpen}
			onClose={() => setOpen(false)}
			className='relative z-10'>
			<div className='fixed inset-0 flex items-center justify-center lg:bg-slate-800/50'>
				<Dialog.Panel className='lg:ml-36 xl:ml-72 relative w-screen h-screen px-8 py-12 sm:px-16 sm:py-20 lg:px-24 lg:py-28 bg-orange-50 rounded-tl-md rounded-bl-md overflow-y-scroll'>
					<Dialog.Title as='div' className='flex flex-col gap-4 w-fit sm:pb-4'>
						<div className='flex flex-wrap items-baseline gap-4'>
							<h2 className='w-full sm:w-fit text-2xl text-orange-500'>{title}</h2>
							<LinkBtnSm href={live}>
								View App
								<ExternalLink size={14} className='mb-0.5' />
							</LinkBtnSm>
							<LinkBtnSm href={github} disabled={isPrivateRepo}>
								{isPrivateRepo ? 'Source Code Unavailable' : 'View Source Code'}
								<Github size={14} className='mb-0.5' />
							</LinkBtnSm>
						</div>
						<div className='flex flex-wrap flex-col sm:flex-row justify-between gap-4'>
							<Stacks title={title} stacks={stacks} />
							<LastUpdated className='text-xs' lastUpdated={lastUpdated} />
						</div>
					</Dialog.Title>
					<div className='border-b-2 sm:mb-7'></div>

					<Dialog.Description
						as='article'
						className='prose prose-headings:text-orange-500 max-w-none flex flex-col sm:grid sm:grid-cols-5 items-start gap-0 sm:gap-x-16'>
						<ReactMarkdown
							children={part1 || ''}
							remarkPlugins={[remarkGfm]}
							className='col-span-3 sm:[&>*:first-child]:mt-0 sm:[&>*:last-child]:mb-0'
						/>
						<ReactMarkdown
							children={part2 || ''}
							remarkPlugins={[remarkGfm]}
							className='col-span-2 sm:[&>*:first-child]:mt-0 sm:[&>*:last-child]:mb-0'
						/>
						<div id={title + ' Screenshots'} className='col-span-5'>
							<h3>Screenshots</h3>
							{Array.isArray(screenshots) &&
								screenshots.map((url, idx) => (
									<img
										key={`${title}'s screenshot ${idx}`}
										src={url}
										alt={`${title}'s screenshot ${idx}`}
										className='mx-auto'
									/>
								))}
						</div>
					</Dialog.Description>

					<button
						id='close-btn'
						onClick={() => setOpen(false)}
						className='absolute top-0 left-0 p-4 sm:p-8'>
						<Close size='32' className='text-slate-500 hover:text-orange-500' />
					</button>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
}
