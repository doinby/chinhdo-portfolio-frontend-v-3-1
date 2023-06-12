import About from './About';
import TechILove from './TechI❤️copy';

export default function Hero() {
	return (
		<section
			id='hero'
			className='prose max-w-none mx-auto w-full flex flex-col md:flex-row items-center gap-12 px-6 pb-8 sm:px-20 sm:py-16 shadow-md rounded-md'>
			<img
				src='/images/profile-picture-300.png'
				alt={`Chinh's Profile Picture`}
				className='not-prose m-0 w-48 md:w-64 lg:w-[300px]'
			/>
			<div>
				<About />
				<TechILove />
			</div>
		</section>
	);
}
