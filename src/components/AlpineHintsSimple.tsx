import React from "react";

interface AlpineHintsSimpleProps {
	hints: string[];
}

const AlpineHintsSimple: React.FC<AlpineHintsSimpleProps> = ({ hints }) => {
	return (
		<div
			className='alpine-hints p-4 bg-blue-50 rounded-lg border border-blue-200'
			{...{
				"x-data": `{ 
          currentHint: 0, 
          showHint: false,
          hints: ${JSON.stringify(hints)},
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
				className='mb-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
				{...{ "x-on:click": "toggleHints()" }}>
				<span
					{...{
						"x-text":
							"showHint ? 'Masquer les indices' : 'Afficher les indices'",
					}}></span>
			</button>

			<div
				className='mt-2'
				{...{ "x-show": "showHint", "x-transition": "" }}>
				<div className='flex items-center justify-between mb-2'>
					<button
						className='px-2 py-1 bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors'
						{...{
							"x-on:click": "prevHint()",
							"x-bind:disabled": "currentHint === 0",
						}}>
						←
					</button>
					<span
						className='text-sm text-gray-600'
						{...{
							"x-text":
								"`Indice ${currentHint + 1} sur ${hints.length}`",
						}}></span>
					<button
						className='px-2 py-1 bg-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors'
						{...{
							"x-on:click": "nextHint()",
							"x-bind:disabled":
								"currentHint === hints.length - 1",
						}}>
						→
					</button>
				</div>
				<div
					className='p-3 bg-white rounded border text-gray-800'
					{...{ "x-text": "hints[currentHint]" }}></div>
			</div>
		</div>
	);
};

export default AlpineHintsSimple;
