import { Module } from './Module';
import { Module_Survey } from './Module_Survey';
import { ModuleType } from './models/index';

export class ModuleList {
    private listOfModules: Module[];
    constructor(subMenu: NodeList) {
        this.listOfModules = [];
        this.configure(subMenu);
        this.renderContent();

    }
    
    configure = (nodeChilds:NodeList) => {
        nodeChilds.forEach((nodeChild:Node) => {
          if(nodeChild.nodeName === 'module'){
            let el:Element = nodeChild as Element;
            if(el.getAttribute('template') === 'Survey'){
              let elId:string = el.getAttribute('id')!;
              let elTitle:string = el.querySelector('label')!.innerHTML;
              let moduleItem:Module = new Module(elId, elTitle, 'desc here', './assets/icons/Feedback_2x2.png', ModuleType.Survey);
              this.listOfModules.push(moduleItem);
            }
            console.log(nodeChild);
             
           
          }
             
          });
        this.renderModuleLists();
    }
    renderModuleLists = () => {
      this.listOfModules.forEach(module => {
        let El:HTMLDivElement = document.createElement('div');
        El.id = module.id;
        let ElTitle:HTMLDivElement = document.createElement('div');
        ElTitle.innerHTML = module.title;
        El.appendChild(ElTitle);
        document.body.appendChild(El);
      })
    }
    renderContent = () => {

    }
} 