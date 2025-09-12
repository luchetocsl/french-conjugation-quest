/// <reference types="vite/client" />

declare global {
	interface Window {
		Alpine: import("alpinejs").Alpine;
	}
}

// Extend JSX attributes to include Alpine.js directives
declare module "react" {
	interface HTMLAttributes<T> {
		"x-data"?: string;
		"x-show"?: string;
		"x-hide"?: string;
		"x-if"?: string;
		"x-for"?: string;
		"x-transition"?: string | boolean;
		"x-text"?: string;
		"x-html"?: string;
		"x-model"?: string;
		"x-bind:disabled"?: string;
		"x-bind:class"?: string;
		"x-bind:style"?: string;
		"x-on:click"?: string;
		"x-on:input"?: string;
		"x-on:change"?: string;
		"x-on:submit"?: string;
		"x-on:keydown"?: string;
		"x-on:keyup"?: string;
		"x-init"?: string;
		"x-effect"?: string;
		"x-ignore"?: boolean;
		"x-ref"?: string;
		"x-cloak"?: boolean;
	}
}
