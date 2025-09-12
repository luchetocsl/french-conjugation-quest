import FrenchGame from "@/components/FrenchGame";
import { sampleText } from "@/data/sampleText";

const Index = () => {
	// Get a random index between 0 and the length of sampleText array
	const randomIndex = Math.floor(Math.random() * sampleText.length);

	return (
		<div className='min-h-screen bg-gray-50 py-12 px-4'>
			<div className='max-w-4xl mx-auto'>
				<h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>
					Pratique de Conjugaison Française
				</h1>
				<FrenchGame challenge={sampleText[randomIndex]} />
			</div>
		</div>
	);
};

export default Index;
