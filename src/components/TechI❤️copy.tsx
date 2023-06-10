import { useState } from 'react';
import { Heart } from 'styled-icons/entypo';
import {
	ReactLogo as React,
	Nodedotjs as Nodejs,
	Mongodb,
	Tailwindcss,
	Sass,
	Netlify,
	Mui,
	Figma,
} from 'styled-icons/simple-icons';
import { SkillTag } from '../utils/styledComponents';

export default function TechILoveCopy() {
	const [isHidden, setHidden] = useState(true);

	return (
		<div className='not-prose flex flex-wrap gap-x-4 gap-y-2'>
			<p className='shrink-0'>
				Tech I{' '}
				<span>
					<Heart size='24' className='text-orange-500' />
				</span>{' '}
				:
			</p>
			<SkillTag>
				<React size='24' />
				<p>React</p>
			</SkillTag>
			<SkillTag>
				<Nodejs size='24' />
				<p>Node.js</p>
			</SkillTag>
			<SkillTag>
				<Tailwindcss size='24' />
				<p>TailwindCss</p>
			</SkillTag>
			{/* <div className={`${isHidden ? 'hidden' : 'flex'} flex-wrap gap-4`}> */}
			<SkillTag className={isHidden ? 'hidden' : ''}>
				<Mongodb size='24' />
				<p>MongoDB</p>
			</SkillTag>
			<SkillTag className={isHidden ? 'hidden' : ''}>
				<Figma size='24' />
				<p>Figma</p>
			</SkillTag>
			<SkillTag className={isHidden ? 'hidden' : ''}>
				<Sass size='24' />
				<p>Sass</p>
			</SkillTag>
			<SkillTag className={isHidden ? 'hidden' : ''}>
				<Mui size='24' />
				<p>MUI</p>
			</SkillTag>
			<SkillTag className={isHidden ? 'hidden' : ''}>
				<Netlify size='24' />
				<p>Netlify</p>
			</SkillTag>
			{/* </div> */}
			<button
				onClick={() => setHidden(false)}
				className={`${
					isHidden ? 'block' : 'hidden'
				} underline underline-offset-2 text-sm text-slate-500 hover:text-orange-500`}>
				Show more
			</button>
		</div>
	);
	// return (
	// 	<div className='not-prose flex flex-wrap sm:flex-row items-bottom gap-2 sm:gap-x-6'>
	// <p className='shrink-0'>
	// 	Tech I{' '}
	// 	<span>
	// 		<Heart size='24' className='text-orange-500' />
	// 	</span>{' '}
	// 	:
	// </p>
	// 		<div className='flex flex-wrap gap-2 sm:gap-x-6'>
	// 			<div className='flex items-center gap-1 text-orange-500'>
	// 				<React size='24' />
	// 				<p className='text-xs'>React</p>
	// 			</div>
	// 			<div className='flex items-center gap-1 text-orange-500'>
	// 				<Nodejs size='24' />
	// 				<p className='text-xs'>Node.js</p>
	// 			</div>
	// 			<div className='flex items-center gap-1 text-orange-500'>
	// 				<Tailwindcss size='24' />
	// 				<p className='text-xs'>Tailwind</p>
	// 			</div>
	// 			<div
	// 				className={`${isHidden ? 'hidden' : 'flex flex-wrap'} gap-2 sm:gap-x-6`}>
	// 				<div className='flex items-center gap-1 text-orange-500'>
	// 					<Sass size='24' />
	// 					<p className='text-xs'>Sass</p>
	// 				</div>
	// 				<div className='flex items-center gap-1 text-orange-500'>
	// 					<Mui size='24' />
	// 					<p className='text-xs'>MUI</p>
	// 				</div>
	// 				<div className='flex items-center gap-1 text-orange-500'>
	// 					<Figma size='24' />
	// 					<p className='text-xs'>Figma</p>
	// 				</div>
	// 				<div className='flex items-center gap-1 text-orange-500'>
	// 					<Mongodb size='24' />
	// 					<p className='text-xs'>MongoDB</p>
	// 				</div>
	// 				<div className='flex items-center gap-1 text-orange-500'>
	// 					<Netlify size='24' />
	// 					<p className='text-xs'>Netlify</p>
	// 				</div>
	// 			</div>
	// 			<button
	// 				onClick={() => setHidden(false)}
	// 				className={`${
	// 					isHidden ? 'block' : 'hidden'
	// 				} underline underline-offset-2 text-sm text-slate-500 hover:text-orange-500`}>
	// 				Show more
	// 			</button>
	// 		</div>
	// 	</div>
	// );
}
