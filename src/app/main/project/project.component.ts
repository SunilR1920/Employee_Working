import { Component, Input, OnInit } from '@angular/core';
import { ModuleComponent } from './module/module.component';
import * as AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    ModuleComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() projectName: string='';
  // @Input() projectData: string='';
  
  
  mName: string = "Module 1";
  

  ngOnInit(){
    AOS.init({
      duration: 950,
      once: true
    });
  } 

}
