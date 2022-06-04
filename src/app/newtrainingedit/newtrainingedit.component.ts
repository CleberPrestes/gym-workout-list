import { Training } from './../training.model';
import { NewtrainingComponent } from './../newtraining/newtraining.component';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newtrainingedit',
  templateUrl: './newtrainingedit.component.html',
  styleUrls: ['./newtrainingedit.component.css']
})
export class NewtrainingeditComponent implements OnInit {



  //training: Training = new Training;

  //name = this.training.name;
 // day = this.training.day;
 // exercise = this.training.exercise;
  //serie = this.training.serie;
  //repetition = this.training.repetition;
  //weight = this.training.weight


  @Output() informacaoPai = 'Treino Teste'

 // trainingList=[{}]
/*

  saveStorage(name: string, day: string, exercise: string, serie: number, repetition: number, weight: number){

    this.training.name = name;
    this.training.day = day;
    this.training.exercise = exercise;
    this.training.serie = serie;
    this.training.repetition = repetition;
    this.training.weight =weight;


   // let jsonTreinos = JSON.stringify(this.treino)
    //localStorage[this.keytreinos] =jsonTreinos;


    this.trainingList.push(this.training)


    //Esta salvando a lista no loca storage


    if( JSON.parse(localStorage.getItem('listaTreino')!)){
      this.trainingList = JSON.parse(localStorage.getItem('listaTreino')!);
      this.trainingList.push(this.training)
      let jsonKeyList = JSON.stringify(this.trainingList)
      localStorage['listaTreino'] =jsonKeyList;

     }
        let jsonKeyList = JSON.stringify(this.trainingList)
        localStorage['listaTreino'] =jsonKeyList;

  }

  */

  constructor() { }

  ngOnInit(): void {

  }

  onSelectChange(event: Event) {


  }
  onSubmit() {


  }

}
