import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router} from '@angular/router';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { ProjectComponent } from './project/project.component';
import * as AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    ProjectComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

    projectData: any = '';

  pName: string = "Project 1";


  ngOnInit(){
      AOS.init({
        duration:550,
        once: true
      });
  }

}
