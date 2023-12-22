import { Component, OnInit , Input, Output} from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { EventEmitter } from '@angular/core';



export interface TasksDetail {
  
  
  taskDisc: string;
  taskId: number;
  taskStatus: string;
  startDate: string | DatePipe;
  endDate: string | DatePipe;
  // edit: string;
  // delete: string;
}

const EMPLOYEETASK_DATA: TasksDetail[] = [
  
  {taskId: 1, taskDisc: 'Make Login Page with Validation & userId, emailId, password, conPassword ', 
  taskStatus: 'Active' , startDate: '12/12/2023', endDate:'20/12/2023'}, //, edit:'Edit',delete:'Delelte'
  {taskId: 2, taskDisc: 'Make Employee Task Management App with Beter Ui', 
  taskStatus: 'Active' , startDate: '20/12/2023', endDate:'25/12/2023'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-employee-performance',
  templateUrl: './employee-performance.component.html',
  styleUrl: './employee-performance.component.css',
  standalone: true,
  imports: [
    RouterModule,
    MatTableModule
  ],
})



export class EmployeePerformanceComponent implements OnInit {

  @Input() employeeName:string='';
  
  // name="employeeName";
  // @Input() EmployeeData: any[][];
  // @Output() onEdit = new EventEmitter<any>();
  // @Output() onDelete = new EventEmitter<any>();
  
  constructor(){}
  displayedColumns: string[] = ['taskId', 'taskDisc', 'taskStatus', 'startDate', 'endDate']; //,'Edit','Delete'
  dataSource = EMPLOYEETASK_DATA;

  ngOnInit(): void {
    
  }

  // edit(item: any){
  //   this.onEdit.emit(item);
  // }
  // delete1(item: any){
  //   this.onDelete.emit(item)
  // }
}
