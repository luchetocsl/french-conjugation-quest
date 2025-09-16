import type { TextChallenge } from "../types/french";

interface SimpleExercise {
	title: string;
	text: string;
}

export function parseSimpleExercise(
	exercise: SimpleExercise,
	id: string
): TextChallenge {
	const { title, text } = exercise;

	// Find all verb patterns {infinitive|conjugated}
	const verbPattern = /\{([^|]+)\|([^}]+)\}/g;
	const verbs = [];
	const textSegments = [];

	let lastIndex = 0;
	let match;
	let position = 0;

	while ((match = verbPattern.exec(text)) !== null) {
		// Add text before this verb
		textSegments.push(text.slice(lastIndex, match.index));

		// Add verb info
		verbs.push({
			infinitive: match[1].trim(),
			correctForm: match[2].trim(),
			position: position++,
		});

		lastIndex = match.index + match[0].length;
	}

	// Add remaining text
	textSegments.push(text.slice(lastIndex));

	return {
		id,
		title,
		textSegments,
		verbs,
	};
}

export function parseSimpleExercises(
	exercises: SimpleExercise[]
): TextChallenge[] {
	return exercises.map((exercise, index) =>
		parseSimpleExercise(exercise, (index + 1).toString())
	);
}
