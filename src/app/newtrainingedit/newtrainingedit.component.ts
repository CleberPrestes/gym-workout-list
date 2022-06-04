import { Training } from './../training.model';
import { NewtrainingComponent } from './../newtraining/newtraining.component';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newtrainingedit',
  templateUrl: './newtrainingedit.component.html',
  styleUrls: ['./newtrainingedit.component.css']
})
export class NewtrainingeditComponent implements OnInit {



  trainingListSave: Training[] = []

  trainingSaveName: string ='';


  @Output() informacaoPai =  'Treinos'


  constructor() { }

  ngOnInit(): void {

    this.trainingListSave = JSON.parse(localStorage.getItem('listaTreino')!) as Training[];


  }

  onSelectChange(event: Event) {


  }
  onSubmit() {


  }

}
