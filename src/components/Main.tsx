import Hero from './Hero';
import Projects from './Projects';
import Learning from './Learning';

export default function Main() {
	return (
		<main className='container mx-auto flex flex-col gap-24 lg:gap-48 my-24 lg:my-24 grow shrink-0 basis-auto'>
			<Hero />
			<Projects />
			<Learning />
		</main>
	);
}
