abstract class Component {
    constructor(){

    }
    render = () => {

    }
}
class ModuleList implements Component {
    private title:string;
    private listOfModules:Module[] = [];

    constructor(title:string){
        this.title = title;
    }
    render = () => {

    }
}

class Module {
    private id:string;
    private title:string;
    private description:string;
    private link:string;
    
     
    constructor(id:string, title:string, description:string, link:string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
        this.render();
    }

    config = () => {

    }
    render = () => {
        let title = document.createElement('h1');
        title.textContent = this.title;
        let app:HTMLDivElement = document.getElementById('app') as HTMLDivElement;
        app!.append(title);
    }
}

const init = () => {
    console.log("Hello");

    let basicModule = new Module('1', 'My Basic Module', 'desc here', 'some link');
    ;
    
}

init();