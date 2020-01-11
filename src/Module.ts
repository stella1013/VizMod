import { Configurable, ModuleType } from './models/index';

export class Module implements Configurable {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public link: string,
		public type: ModuleType
	) {}
}