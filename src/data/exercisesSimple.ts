import { parseSimpleExercises } from "../utils/exerciseParser";

const simpleExercises = [
	{
		title: "Ma Routine Quotidienne",
		text: "Chaque matin, je {se lever|me lève} à 7 heures. Après, je {prendre|prends} mon petit-déjeuner et je {aller|vais} au travail.",
	},
	{
		title: "Un Weekend à Paris",
		text: "Le weekend dernier, nous {aller|sommes allés} à Paris en train. Quand nous {arriver|sommes arrivés} à la gare, il {être|était} déjà tard. Nous {aller|sommes allés} directement à l'hôtel et {déposer|avons déposé} nos bagages avant de sortir dîner.",
	},
	{
		title: "Au Restaurant",
		text: "Hier soir, nous {aller|sommes allés} dans un restaurant français. Le serveur nous {donner|a donné} une table près de la fenêtre. Nous {regarder|avons regardé} le menu et {choisir|avons choisi} nos plats préférés.",
	},
	{
		title: "Les Vacances d'Été",
		text: "L'été prochain, je {partir|partirai} en vacances en Espagne. Je {prendre|prendrai} l'avion pour la première fois et je {être|serai} très excité. Mes amis {venir|viendront} avec moi.",
	},
	{
		title: "Quand J'étais Petit",
		text: "Quand j'{être|étais} enfant, je {jouer|jouais} souvent au parc avec mes amis. Nous {jouer|jouions} au foot et parfois nous {manger|mangions} des glaces.",
	},
	{
		title: "Mes Projets d'Avenir",
		text: "Dans dix ans, je {vivre|vivrai} à l'étranger. Je {avoir|aurai} un travail intéressant et je {acheter|achèterai} une maison au bord de la mer.",
	},
	{
		title: "Si J'avais Plus de Temps",
		text: "Si j'{avoir|avais} plus de temps, je {apprendre|apprendrais} un instrument de musique. Je {lire|lirais} aussi plus de livres et je {voir|verrais} plus souvent mes amis.",
	},
	{
		title: "Exprimer un Regret",
		text: "Si j'{partir|étais parti} plus tôt, je {attraper|aurais attrapé} le train.",
	},
	{
		title: "Exprimer le Doute",
		text: "Je doute qu'elle {dire|dise} la vérité dans cette situation.",
	},
	{
		title: "Exprimer la Crainte",
		text: "J'ai peur qu'ils ne {être|soient} pas capables de respecter le délai.",
	},
];

const moreExercises = [
	{
		title: "Obligation (subjonctif)",
		text: "Il est essentiel que tu {valider|valides} toutes les étapes avant d'{envoyer|envoyer} le rapport.",
	},
	{
		title: "But (subjonctif)",
		text: "Nous travaillons pour que chacun {avoir|ait} les mêmes chances.",
	},
	{
		title: "Émotion (subjonctif passé)",
		text: "Je suis surpris que vous {répondre|ayez répondu} si rapidement.",
	},
	{
		title: "Opinion négative (subjonctif)",
		text: "Je ne crois pas qu'il {être|soit} capable de gérer cette crise.",
	},
	{
		title: "Conseil (conditionnel présent)",
		text: "A ta place, je {refuser|refuserais} immédiatement cette proposition.",
	},
	{
		title: "Possibilité (subjonctif)",
		text: "Il se peut qu'elle {arriver|arrive} en retard au rendez-vous.",
	},
	{
		title: "Incertitude (subjonctif)",
		text: "Il est peu probable que nous {atteindre|atteignions} tous les objectifs cette année.",
	},
	{
		title: "Hypothèse passée (conditionnel passé)",
		text: "Si tu {être|avais été} plus attentif, tu n'{faire|aurais fait} pas cette erreur.",
	},
	{
		title: "Condition présente (futur)",
		text: "Si j'{avoir|ai} du temps ce soir, je t'{aider|aiderai} volontiers.",
	},
	{
		title: "Obligation morale (cond. passé + subj. passé)",
		text: "Il aurait fallu que tu {prévenir|aies prévenu} ton patron de ce problème.",
	},
	{
		title: "Indignation (subjonctif)",
		text: "C'est honteux qu'il {avoir|ait} autant de retard sans s'excuser.",
	},
	{
		title: "But (subjonctif, passif)",
		text: "Ils travaillent afin que le projet {être terminé|soit terminé} à temps.",
	},
	{
		title: "Souhait (subjonctif)",
		text: "J'aimerais qu'il {prendre|prenne} un peu plus d'initiative.",
	},
	{
		title: "Recommandation (subjonctif)",
		text: "Il vaudrait mieux que tu {dire|dises} la vérité dès maintenant.",
	},
	{
		title: "Hypothèse même si (présent)",
		text: "Même si tu {être|es} fatigué, tu {devoir|dois} terminer ce travail.",
	},
	{
		title: "Déception (subjonctif passé)",
		text: "Je suis déçu que vous {manquer|ayez manqué} la réunion hier.",
	},
	{
		title: "Obligation formelle (subjonctif)",
		text: "Il convient que chaque membre {être|soit} présent à l'assemblée.",
	},
	{
		title: "Conseil (il faudrait que + subjonctif)",
		text: "Il faudrait que tu {préparer|prépares} ton discours à l'avance.",
	},
	{
		title: "Injustice (subjonctif + négation)",
		text: "C'est injuste qu'on n'{avoir|ait} pas reconnu ses efforts.",
	},
	{
		title: "Probabilité (conditionnel présent)",
		text: "D'après la presse, le ministre {devoir|devrait} démissionner bientôt.",
	},
	{
		title: "Politesse/irréel (conditionnel passé)",
		text: "Nous {pouvoir|aurions pu} vous aider si vous nous aviez demandé.",
	},
	{
		title: "Souhait non réalisé (subjonctif passé)",
		text: "J'aurais aimé qu'il {arriver|soit arrivé} un peu plus tôt.",
	},
	{
		title: "Nécessité collective (subjonctif)",
		text: "Il est indispensable que nous {prendre|prenions} une décision commune.",
	},
	{
		title: "Incertitude (conditionnel présent)",
		text: "Il paraît que la réunion {être|serait} annulée demain.",
	},
	{
		title: "Alternative (subjonctif + futur)",
		text: "A moins que tu ne {partir|partes} immédiatement, tu {manquer|manqueras} l'avion.",
	},
	{
		title: "Opposition (même si + futur)",
		text: "Même si nous {être|sommes} contre cette réforme, elle {être|sera} adoptée.",
	},
	{
		title: "Surprise (subjonctif passé)",
		text: "Je suis étonné que tu {avoir|aies} déjà terminé ce travail.",
	},
	{
		title: "Hypothèse futur (présent + futur)",
		text: "Si nous {partir|partons} plus tôt demain, nous {prendre|prendrons} le train de 8h.",
	},
	{
		title: "Conditionnel présent (conseil)",
		text: "A votre place, je {consulter|consulterais} immédiatement un avocat.",
	},
	{
		title: "Tour idiomatique (cond. passé + subjonctif)",
		text: "Il {valoir|aurait mieux valu} que tu {s'excuser|t'excuses} dès le début.",
	},
	{
		title: "Concession (subjonctif)",
		text: "Bien qu'il {être|soit} malade, il {continuer|continue} à travailler.",
	},
	{
		title: "But (pour que + subjonctif)",
		text: "Je t'explique la méthode pour que tu {comprendre|comprennes} plus vite.",
	},
	{
		title: "Avant que (ne explétif + subjonctif)",
		text: "Ferme la fenêtre avant que le vent ne {renverser|renverse} tout.",
	},
	{
		title: "Jusqu'à ce que (subjonctif)",
		text: "Reste concentré jusqu'à ce que tu {finir|finisses} l'épreuve.",
	},
	{
		title: "Pourvu que (subjonctif)",
		text: "Pourvu qu'ils {pouvoir|puissent} livrer à temps, tout ira bien.",
	},
	{
		title: "De peur que (ne explétif + subjonctif)",
		text: "Il chuchote de peur que le bébé ne {se réveiller|se réveille}.",
	},
	{
		title: "Sans que (subjonctif)",
		text: "Ils ont réglé le conflit sans que personne n'{intervenir|intervienne}.",
	},
	{
		title: "Après que (indicatif composé)",
		text: "Après que nous {finir|avons fini}, nous avons envoyé le rapport.",
	},
	{
		title: "Discours indirect (conditionnel pour atténuer)",
		text: "On m'a dit que vous {pouvoir|pourriez} revenir demain.",
	},
	{
		title: "Regret diplomatique",
		text: "Je regrette que nous ne {être|soyons} pas d'accord.",
	},
	{
		title: "Doute/évaluation (subjonctif)",
		text: "Il est douteux qu'un tel plan {réussir|réussisse} sans soutien.",
	},
	{
		title: "Comparaison + but (subjonctif)",
		text: "C'est la meilleure solution pour qu'on {éviter|évite} les retards.",
	},
	{
		title: "Condition atténuée (cond. présent + subjonctif)",
		text: "Je {souhaiter|souhaiterais} qu'on {prévoir|prévoie} un plan B.",
	},
];

// Merge with your existing list:
export const sampleText = parseSimpleExercises([
	...simpleExercises,
	...moreExercises,
]);
