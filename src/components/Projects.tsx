import { useQuery } from '@tanstack/react-query';
import ProjectCard from './ProjectCard';
import Loading from './Loading';
import NotFound from './404';
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
		return <NotFound />;
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<section
			id='projects'
			className='prose max-w-none flex flex-col gap-0 lg:gap-16'>
			<h2 className='text-center text-3xl'>Projects I've worked on:</h2>
			<div className='flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16'>
				{data instanceof Array &&
					data.map((projectData) => (
						<ProjectCard key={projectData._id} data={projectData} />
					))}
			</div>
		</section>
	);
}
