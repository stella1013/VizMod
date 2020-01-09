import { Component } from "./Component";
import { Module } from "webpack";

export class ModuleList implements Component {
    private title:string;
    private listOfModules:Module[] = [];

    constructor(title:string){
        this.title = title;
    }
    render = () => {

    }
} 