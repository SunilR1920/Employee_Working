import { Component, Output, Input, OnInit  } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [
    EmployeeComponent
  ],
  templateUrl: './module.component.html',
  styleUrl: './module.component.css'
})
export class ModuleComponent {
  eName1: string='  Employee 1';
  eName2: string= ' Employee 2';


  @Input() moduleName: string='';


  ngOnInit(): void {
    AOS.init({
      duration: 1250,
      once: true
    });
  }
  
}
