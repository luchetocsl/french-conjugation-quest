import React, { useState, useEffect, useRef } from "react";
import type { TextChallenge } from "../types/french";

interface FrenchGameProps {
	challenges: TextChallenge[];
	initialChallengeIndex?: number;
}

const FrenchGame = ({
	challenges,
	initialChallengeIndex = 0,
}: FrenchGameProps) => {
	const [currentChallengeIndex, setCurrentChallengeIndex] = useState(
		initialChallengeIndex
	);
	const challenge = challenges[currentChallengeIndex];
	const alpineHintsRef = useRef<HTMLDivElement>(null);

	const [answers, setAnswers] = useState<string[]>(
		new Array(challenge.verbs.length).fill("")
	);
	const [checked, setChecked] = useState(false);
	const [score, setScore] = useState<number | null>(null);
	const [feedback, setFeedback] = useState<string>("");

	// Re-initialize Alpine.js when challenge changes
	useEffect(() => {
		if (alpineHintsRef.current && window.Alpine) {
			// Force Alpine.js to re-initialize this element
			window.Alpine.initTree(alpineHintsRef.current);
		}
	}, [currentChallengeIndex]);

	const handleInputChange = (index: number, value: string) => {
		// If the exercise was checked and user starts typing, auto-reset
		if (checked) {
			setChecked(false);
		}

		const newAnswers = [...answers];
		newAnswers[index] = value;
		setAnswers(newAnswers);
	};

	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === "Enter") {
			event.preventDefault();
			if (!checked) {
				// First Enter: check answers
				checkAnswers();
			} else if (currentChallengeIndex < challenges.length - 1) {
				// Second Enter: move to next exercise if available
				nextExercise();
			}
		}
	};

	const checkAnswers = () => {
		const currentScore = challenge.verbs.reduce((acc, verb, index) => {
			return acc + (verb.correctForm === answers[index] ? 1 : 0);
		}, 0);

		setScore(currentScore);
		setChecked(true);

		const message =
			currentScore === challenge.verbs.length
				? "Parfait ! Excellent travail !"
				: "Continue à pratiquer !";

		setFeedback(message);
	};

	const reset = () => {
		setAnswers(new Array(challenge.verbs.length).fill(""));
		setChecked(false);
		setScore(null);
		setFeedback("");
	};

	const showAnswers = () => {
		const correctAnswers = challenge.verbs.map((verb) => verb.correctForm);
		setAnswers(correctAnswers);
		setChecked(true);
		setScore(challenge.verbs.length);
		setFeedback("Voici les bonnes réponses !");
	};

	const nextExercise = () => {
		if (currentChallengeIndex < challenges.length - 1) {
			const nextIndex = currentChallengeIndex + 1;
			setCurrentChallengeIndex(nextIndex);
			const nextChallenge = challenges[nextIndex];
			setAnswers(new Array(nextChallenge.verbs.length).fill(""));
			setChecked(false);
			setScore(null);
			setFeedback("");
		}
	};

	const prevExercise = () => {
		if (currentChallengeIndex > 0) {
			const prevIndex = currentChallengeIndex - 1;
			setCurrentChallengeIndex(prevIndex);
			const prevChallenge = challenges[prevIndex];
			setAnswers(new Array(prevChallenge.verbs.length).fill(""));
			setChecked(false);
			setScore(null);
			setFeedback("");
		}
	};

	// Generate hints for Alpine.js component
	const generateHints = () => {
		return challenge.verbs.map(
			(verb, index) =>
				`${index + 1}. ${
					verb.infinitive
				} → Commence par "${verb.correctForm.substring(
					0,
					Math.ceil(verb.correctForm.length / 2)
				)}..."`
		);
	};

	const renderText = () => {
		return challenge.textSegments.map((segment, index) => (
			<React.Fragment key={index}>
				{segment}
				{index < challenge.verbs.length && (
					<span className='inline-flex items-center gap-3 mx-2'>
						<input
							type='text'
							className={`min-w-[100px] px-2 py-1.5 text-sm border rounded-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-400 ${
								checked
									? challenge.verbs[index].correctForm ===
									  answers[index]
										? "border-green-400 bg-green-50 text-green-800"
										: "border-red-400 bg-red-50 text-red-800"
									: "border-gray-300 hover:border-gray-400 focus:border-blue-400"
							}`}
							placeholder='...'
							value={answers[index]}
							onChange={(e) =>
								handleInputChange(index, e.target.value)
							}
							onKeyPress={handleKeyPress}
						/>
						<span className='text-xs text-gray-600 font-medium bg-gray-100 px-2 py-0.5 rounded'>
							{challenge.verbs[index].infinitive}
						</span>
					</span>
				)}
			</React.Fragment>
		));
	};

	return (
		<div className='w-full max-w-3xl mx-auto'>
			{/* Header with navigation */}
			<div className='bg-white rounded-t-xl shadow-sm border border-gray-200 p-4'>
				<div className='flex items-center justify-between mb-4'>
					<button
						onClick={prevExercise}
						disabled={currentChallengeIndex === 0}
						className='flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium text-sm'
						title='Exercice précédent'>
						← Précédent
					</button>
					<div className='text-center'>
						<div className='text-sm text-gray-500 mb-1'>
							Exercice {currentChallengeIndex + 1} sur{" "}
							{challenges.length}
						</div>
						<div className='w-32 bg-gray-200 rounded-full h-2'>
							<div
								className='bg-blue-500 h-2 rounded-full transition-all duration-300'
								style={{
									width: `${
										((currentChallengeIndex + 1) /
											challenges.length) *
										100
									}%`,
								}}></div>
						</div>
					</div>
					<button
						onClick={nextExercise}
						disabled={
							currentChallengeIndex === challenges.length - 1
						}
						className='flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium text-sm'
						title='Exercice suivant'>
						Suivant →
					</button>
				</div>
				<h2 className='text-2xl font-bold text-center text-gray-800 mb-2'>
					{challenge.title}
				</h2>
			</div>

			{/* Main content */}
			<div className='bg-white border-x border-gray-200 p-6'>
				<div className='text-base leading-relaxed text-gray-800 mb-4'>
					{renderText()}
				</div>
				{!checked && (
					<div className='text-sm text-gray-500 text-center mb-8 bg-gray-50 py-2 px-4 rounded-lg'>
						💡 Astuce: Appuyez sur{" "}
						<kbd className='px-2 py-1 bg-gray-200 rounded text-xs font-mono'>
							Entrée
						</kbd>{" "}
						pour vérifier vos réponses
					</div>
				)}
				{checked && currentChallengeIndex < challenges.length - 1 && (
					<div className='text-sm text-gray-500 text-center mb-8 bg-green-50 py-2 px-4 rounded-lg'>
						✨ Appuyez sur{" "}
						<kbd className='px-2 py-1 bg-gray-200 rounded text-xs font-mono'>
							Entrée
						</kbd>{" "}
						pour passer à l'exercice suivant
					</div>
				)}

				{/* Alpine.js powered hints component */}
				<div
					ref={alpineHintsRef}
					key={`hints-${challenge.id}`}
					className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-4 mb-6'
					{...{
						"x-data": `{ 
							currentHint: 0, 
							showHint: false,
							hints: ${JSON.stringify(generateHints())},
							nextHint() {
								if (this.currentHint < this.hints.length - 1) {
									this.currentHint++;
								}
							},
							prevHint() {
								if (this.currentHint > 0) {
									this.currentHint--;
								}
							},
							toggleHints() {
								this.showHint = !this.showHint;
							}
						}`,
					}}>
					<button
						className='px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm'
						{...{ "x-on:click": "toggleHints()" }}>
						<span
							{...{
								"x-text":
									"showHint ? '🔒 Masquer les indices' : '💡 Afficher les indices'",
							}}></span>
					</button>

					<div
						className='mt-3'
						{...{ "x-show": "showHint", "x-transition": "" }}>
						<div className='flex items-center justify-between mb-3'>
							<button
								className='px-2 py-1 bg-white text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors border border-gray-300 text-sm'
								{...{
									"x-on:click": "prevHint()",
									"x-bind:disabled": "currentHint === 0",
								}}>
								← Précédent
							</button>
							<span
								className='text-xs text-gray-600 bg-white px-2 py-1 rounded-md border border-gray-300'
								{...{
									"x-text":
										"`Indice ${currentHint + 1} sur ${hints.length}`",
								}}></span>
							<button
								className='px-2 py-1 bg-white text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors border border-gray-300 text-sm'
								{...{
									"x-on:click": "nextHint()",
									"x-bind:disabled":
										"currentHint === hints.length - 1",
								}}>
								Suivant →
							</button>
						</div>
						<div
							className='p-3 bg-white rounded-md border border-gray-300 text-gray-800 text-sm'
							{...{ "x-text": "hints[currentHint]" }}></div>
					</div>
				</div>
			</div>

			{/* Action buttons */}
			<div className='bg-white rounded-b-2xl shadow-sm border border-gray-200 p-6'>
				<div className='flex justify-center gap-4 flex-wrap'>
					<button
						onClick={checkAnswers}
						disabled={checked}
						className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium text-sm'>
						✓ Vérifier
					</button>
					<button
						onClick={reset}
						className='px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 font-medium text-sm'>
						↻ Recommencer
					</button>
					<button
						onClick={showAnswers}
						className='px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-200 font-medium text-sm'>
						💡 Voir les réponses
					</button>
					{checked &&
						currentChallengeIndex < challenges.length - 1 && (
							<button
								onClick={nextExercise}
								className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 font-medium text-sm'>
								Exercice suivant →
							</button>
						)}
				</div>
			</div>
		</div>
	);
};

export default FrenchGame;
