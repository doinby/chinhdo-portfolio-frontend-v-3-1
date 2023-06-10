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
			<div className='fixed inset-0 flex items-center justify-center bg-slate-800/50'>
				<Dialog.Panel className='lg:ml-72 relative w-screen h-screen px-24 py-28 bg-orange-50 rounded-tl-md rounded-bl-md overflow-y-scroll'>
					<Dialog.Title as='div' className='grid grid-rows-2 gap-4 w-fit mb-6'>
						<div className='flex items-baseline gap-4'>
							<h2 className='text-2xl text-orange-500'>{title}</h2>
							<LinkBtnSm href={live}>
								View App
								<ExternalLink size={14} className='mb-0.5' />
							</LinkBtnSm>
							<LinkBtnSm href={github} disabled={isPrivateRepo}>
								{isPrivateRepo ? 'Source Code Unavailable' : 'View Source Code'}
								<Github size={14} className='mb-0.5' />
							</LinkBtnSm>
						</div>
						<div className='flex flex-wrap justify-between gap-4'>
							<Stacks title={title} stacks={stacks} />
							<LastUpdated lastUpdated={lastUpdated} />
						</div>
					</Dialog.Title>
					<Dialog.Description
						as='article'
						className='prose prose-headings:text-orange-500 max-w-none grid grid-cols-5 items-start gap-16'>
						<ReactMarkdown
							children={part1 || ''}
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
							<ReactMarkdown
								children={part2 || ''}
								remarkPlugins={[remarkGfm]}
								className='col-span-2 [&>*:first-child]:mt-0'
							/>
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
