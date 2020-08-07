import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';



@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  title: string;
  enabled = false;
  name: string;
  dueDate: Date;
  assignments: Assignment []= [{
      name: 'Ali',
      dueDate: new Date('2020-10-13'),
      submitted: true
    },
    {
      name: 'Hassan',
      dueDate: new Date('2020-16-03'),
      submitted: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.title = 'Another Angular'
    setTimeout(() => {
     this.enabled = true;}, 2000);
    
  }
  onSubmit() {
   const assignment = new Assignment();
   assignment.name = this.name;
   assignment.dueDate = this.dueDate;
   assignment.submitted = false;
   this.assignments.push(assignment);
   
  }
}
