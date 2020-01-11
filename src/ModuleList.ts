import { Module } from './Module';

export class ModuleList{
    private listOfModules:Module[] = [];
    private xhttp:XMLHttpRequest;

    constructor(){
        this.xhttp = new XMLHttpRequest();
        this.xhttp.onreadystatechange = () => {
            if (this.xhttp.readyState == 4 && this.xhttp.status == 200) {
            this.render(this.xhttp);
            }
        };
        this.xhttp.open("GET", "build.xml", true);
        this.xhttp.send();
        
    }
    
    render = (xml:any) => {
        var xmlDoc = xml.responseXML;
        //let text = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        console.log(xml);
    }
} 