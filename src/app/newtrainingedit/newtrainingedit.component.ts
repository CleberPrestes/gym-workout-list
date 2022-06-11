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


  removeTraining(item: Training){
    this.trainingListSave.splice(this.trainingListSave.indexOf(item) , 1)
    let jsonKeyList = JSON.stringify(this.trainingListSave)
    localStorage['listaTreino'] =jsonKeyList;

  }

  onSelectChange(event: Event) {


  }
  onSubmit() {


  }

}
