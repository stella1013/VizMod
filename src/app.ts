import { Module } from './Module';
import { Module_Survey } from './Module_Survey';
import { ModuleType} from './models/index';
import './sass/main';
//let app:HTMLDivElement = document.getElementById('app') as HTMLDivElement;

let moduleItem = new Module('1', 'My Basic Module', 'desc here', './assets/icons/Feedback_2x2.png', ModuleType.Survey);
new Module_Survey(moduleItem);
//app!.append(mod);