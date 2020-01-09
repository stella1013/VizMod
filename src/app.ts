import { UI_Module } from './UI_Module';
import {Module, ModuleType, ModuleObj, Survey} from './models/Module';
import './sass/main';
//let app:HTMLDivElement = document.getElementById('app') as HTMLDivElement;

let moduleItem = new Survey('1', 'My Basic Module', 'desc here', './assets/icons/Feedback_2x2.png', ModuleType.Survey);
new UI_Module(moduleItem);
//app!.append(mod);