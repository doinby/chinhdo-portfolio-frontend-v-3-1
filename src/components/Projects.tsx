import { useQuery } from '@tanstack/react-query';
import ProjectCard from './ProjectCard';
interface IProject {
	_id: string;
	coverImg: string;
	desc: string;
	github: string;
	lastUpdated: Date;
	live: string;
	stacks: [];
	title: string;
}

const url = `${import.meta.env.VITE_API_URL}/projects`;

const fetchProjects = async (): Promise<IProject> => {
	try {
		const res = await fetch(url);
		return res.json();
	} catch (err) {
		throw new Error('Failed to fetch project, no server response!');
	}
};

export default function Projects() {
	const { isLoading, isError, data, error } = useQuery(
		['projects'],
		fetchProjects
	);

	if (isError) {
		return (
			<section className='self-center'>
				<img
					src='/images/illustrations/404.svg'
					alt='No Server Response'
					className='h-96'
				/>
			</section>
		);
	}

	if (isLoading) {
		return (
			<section role='status' className='self-center'>
				<svg
					aria-hidden='true'
					className='w-[64px] h-[64px] text-slate-200 animate-spin dark:text-slate-800 fill-slate-500'
					viewBox='0 0 100 101'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
						fill='currentColor'
					/>
					<path
						d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
						fill='currentFill'
					/>
				</svg>
				<span className='sr-only'>Loading...</span>
			</section>
		);
	}

	return (
		<section id='projects' className='prose max-w-none flex flex-col'>
			<h2 className='text-center text-3xl mb-16'>Projects I've worked on:</h2>
			<div className={`${error && 'hidden'} grid grid-cols-2 gap-16`}>
				{data instanceof Array &&
					data.map((projectData) => (
						<ProjectCard key={projectData._id} data={projectData} />
					))}
			</div>
		</section>
	);
}
