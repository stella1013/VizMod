export enum ModuleType {
	LoadSWF,
	WebView,
	Survey
}
export interface Configurable {
	id: string;
	title: string;
	description: string;
	link: string;
	type: ModuleType;
}
export interface Modularable {
	module: Configurable;
	render: () => void;
	configure: () => void;
}

