import { IProject } from '../utils/interfaces';
import { getStackColour } from '../utils/utilsFunctions';

export default function Stacks({ title, stacks }: IProject) {
	return (
		<div className='flex items-baseline gap-4'>
			{stacks instanceof Array &&
				stacks.map((stack: string, idx: number) => {
					return (
						<p
							key={`${title}-${idx}`}
							className={`${getStackColour(stack.toLowerCase())} font-header text-sm`}>
							{stack}
						</p>
					);
				})}
		</div>
	);
}
