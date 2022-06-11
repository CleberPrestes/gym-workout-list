import { Training } from './../training.model';
import { NewtrainingComponent } from './../newtraining/newtraining.component';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TrainingserviceService } from '../trainingservice.service';

@Component({
  selector: 'app-newtrainingedit',
  templateUrl: './newtrainingedit.component.html',
  styleUrls: ['./newtrainingedit.component.css']
})
export class NewtrainingeditComponent implements OnInit {



  trainingListSave: Training[] = []

  trainingSaveName: string ='';


  @Output() informacaoPai =  'Treinos'


  constructor(private trainingService: TrainingserviceService) {
    this.getTrainings()
  }

  ngOnInit(): void {




    this.trainingService
    .getTraininigWithPromise()
    .then((trainingListSave)=>(this.trainingListSave = trainingListSave))
    .catch((e) => {
      //erro ao pegar do json-server
      this.trainingListSave = JSON.parse(localStorage.getItem('listaTreino')!) as Training[];
      alert('Json-sever fora de funcionamento dados apresentados são do LocalStorage')
    });



  }


  removeTraining(item: Training){
    this.trainingListSave.splice(this.trainingListSave.indexOf(item) , 1)
    let jsonKeyList = JSON.stringify(this.trainingListSave)
    localStorage['listaTreino'] =jsonKeyList;

  }


  testRemoveComService(training: Training){

   this.trainingListSave = this.trainingListSave.filter((a)=>(training.name!==a.name))


    //this.trainingService.removeTraining(training.name).subscribe()
    this.trainingService.removeTraining(training.id).subscribe()

    //this.ngOnInit()

  }
  onSelectChange(event: Event) {


  }
  onSubmit() {


  }
  getTrainings(): void{

    this.trainingService.getAll().subscribe((trainingListSave)=>(this.trainingListSave = trainingListSave));

  }

}
