import {ModuleObj, Module} from './models/Module';
export class UI_Module implements ModuleObj{
  public module:Module;
     
    constructor(module:Module){
      this.module = module;
        this.render();
    }

    configure = ():void => {

    }
    render = ():void => {
        let moduleItem:HTMLDivElement = document.createElement('div');

        let moduleContainer:HTMLDivElement = document.createElement('div');
        moduleContainer.classList.add('module');
        moduleContainer.classList.add('module__container');

        let imgBox:HTMLDivElement = document.createElement('div');
        imgBox.classList.add('module__img-box');
        let img = document.createElement('img');
        img.classList.add('thumbnail-image');
        img.src = this.module.link;
        moduleContainer.append(img);
        
        let textBox:HTMLDivElement = document.createElement('div');
        textBox.classList.add('module__text-box');
        moduleContainer.append(textBox);

        let title = document.createElement('h2');
        title.classList.add('module-title');
        title.textContent = this.module.title;
        textBox.append(title);

        let desc = document.createElement('p');
        desc.classList.add('module-text');
        desc.textContent = this.module.description;
        textBox.append(desc);
        
        let app:HTMLDivElement = document.getElementById('app') as HTMLDivElement;
        app!.append(moduleContainer);
        //img.append(this.moduleContainer);
    }
}

/** 
 * <div class='module'>
            <div class='module__container'>
              <div class='module__img-box'>
                <img src='./assets/icons/Feedback_2x2.png' class='thumbnail-image' alt='Feedback' />
              </div>
              <div class='module__text-box'>
                <h2 class='module-title'>Feedback</h2>
                <p class='module-text'>
                  Please take a moment to let us know how we are performing.
                </p>
              </div>
            </div>
          </div>
 */