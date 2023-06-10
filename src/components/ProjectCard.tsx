import { useState } from 'react';
import dateFn from 'date-fn';
import CardCoverImg from './CardCoverImg';
import Stacks from './Stacks';
import CardDesc from './CardDesc';
import ContentModal from './ContentModal';
import { LastUpdated, LinkBtn } from '../utils/styledComponents';
import { ExternalLink } from 'styled-icons/remix-line';
import { IProjectCardProps } from '../utils/interfaces';

export default function ProjectCard({ data }: IProjectCardProps) {
	const {
		coverImg,
		desc,
		lastUpdated,
		live,
		github,
		stacks,
		title,
		content,
		screenshots,
	} = data;
	const [isOpen, setOpen] = useState(false);

	// https://www.npmjs.com/package/date-fn?activeTab=code
	// README.md
	const lastUpdatedFormatted = dateFn.date(lastUpdated, 109);

	return (
		<>
			<ContentModal
				isOpen={isOpen}
				setOpen={setOpen}
				title={title}
				content={content}
				screenshots={screenshots}
				live={live}
				github={github}
				stacks={stacks}
				lastUpdated={lastUpdatedFormatted}
			/>
			<article className='relative flex justify-center group'>
				<LinkBtn
					href={live}
					className='absolute z-10 top-36 hidden group-hover:flex items-center gap-1 shadow-md'>
					View App <ExternalLink size='18' title={title} className='mb-0.5' />
				</LinkBtn>
				<div
					onClick={() => setOpen(!isOpen)}
					className='relative group prose prose-a:no-underline shadow-md rounded-md pb-12 cursor-pointer transition ease-in-out motion-reduce:group-hover:-translate-y-1 group-hover:bg-orange-50 group-hover:shadow-lg'>
					<CardCoverImg
						key={title + ' coverImg'}
						live={live}
						title={title}
						coverImg={coverImg}
					/>
					<h3 className='px-12 text-slate-500 group-hover:text-orange-500'>
						{title}
					</h3>
					<div className='flex justify-between items-baseline px-12'>
						<Stacks title={title} stacks={stacks} />
						<LastUpdated lastUpdated={lastUpdatedFormatted} />
					</div>
					<CardDesc desc={desc} />
				</div>
			</article>
		</>
	);
}
