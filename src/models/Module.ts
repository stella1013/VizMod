export enum ModuleType {
	LoadSWF,
	WebView,
	Survey
}
export interface Module {
	id: string;
	title: string;
	description: string;
	link: string;
	type: ModuleType;
}
export interface ModuleObj {
	module: Module;
	render: () => void;
	configure: () => void;
}

export class Survey implements Module {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public link: string,
		public type: ModuleType
	) {}
}
