import { Csharp, Typescript } from 'styled-icons/simple-icons';

export default function Learning() {
	return (
		<section
			id='learning'
			className='prose max-w-[85ch] w-full mx-auto px-6 pb-8 sm:px-20 sm:py-16 text-center'>
			<h2>Actively Learning:</h2>
			<p className='text-left'>
				One of my non-negotiable is continual development of self and knowledge. As
				such, having access to time and resrouces neccessary to further my own study
				is undoubtably important
			</p>
			<p className='text-left'>
				At the moment, I'm interested in{' '}
				<span className='text-orange-500'>
					<Csharp size='24' /> C#
				</span>{' '}
				and{' '}
				<span className='text-orange-500'>
					<Typescript size='24' /> Typescript
				</span>{' '}
				and will greatly appreciate any guidance in these areas
			</p>
		</section>
	);
}
