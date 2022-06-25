import { Training } from '../training.model';
import { NewtrainingComponent } from '../newtraining/newtraining.component';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TrainingserviceService } from '../trainingservice.service';


@Component({
  selector: 'app-trainingslist',
  templateUrl: './trainingslist.component.html',
  styleUrls: ['./trainingslist.component.css']
})
export class TrainingslistComponent implements OnInit {

  trainingListSave: Training[] = []

  trainingListDetails: Training[] = []

  dataOrigin: string='JSon-Server'
  jsonOrigin: boolean = true
  localOrigin: boolean= false
  showLoading: boolean = true
  showbntback: boolean = false

  @Output() informacaoPai =  'Lista de Treinos'
  @Output() listaOutput: Training[]=[]

  constructor(private trainingService: TrainingserviceService) {
    this.getTrainings()
  }

  ngOnInit(): void {

    //Lista com promisses
    this.trainingService
    .getTraininigWithPromise()
    .then((trainingListSave)=>(this.trainingListSave = trainingListSave))
    .then((sholoading)=>(this.showLoading = false))
    .then((showbntback)=>(this.showbntback = true))
    .catch((e) => {
      //erro ao pegar do json-server
      this.trainingListSave = JSON.parse(localStorage.getItem('listaTreino')!) as Training[];
      this.dataOrigin = 'Local Storage'
      
      this.showLoading = false
      this.jsonOrigin= false
      this.localOrigin= true
      this.showbntback = true

    });

    //Lista com Observable
/*
      this.trainingService
      .getTraininigWithObservable().subscribe((data: Training[]) => {
        this.trainingListSave = data;
      },
      error =>{
        alert('Erro ao obter dados do Servidor utilizando dados Locais')
        this.trainingListSave = JSON.parse(localStorage.getItem('listaTreino')!) as Training[];
      this.dataOrigin = 'Local Storage'

      this.jsonOrigin= false
      this.localOrigin= true

      })

*/
  }

  removeTraining(item: Training){
    this.trainingListSave.splice(this.trainingListSave.indexOf(item) , 1)
    let jsonKeyList = JSON.stringify(this.trainingListSave)
    localStorage['listaTreino'] =jsonKeyList;
  }

  testRemoveComService(training: Training){
   this.trainingListSave = this.trainingListSave.filter((a)=>(training.name!==a.name))
    this.trainingService.removeTraining(training.id).subscribe()
  }

  //teste de get
  getTrainingDetail(training: Training){
    this.trainingListDetails = this.trainingListSave.filter((a)=>(training.name==a.name))
    var teste = this.trainingListSave.find((treino)=>{return treino.name ==training.name})
    const testeNome = teste?.name
    if(testeNome!==undefined){
      this.informacaoPai = testeNome?.toString()
    }
  }

  onSelectChange(event: Event) {}

  onSubmit() {}

  getTrainings(): void{
    this.trainingService.getAll().subscribe((trainingListSave)=>(this.trainingListSave = trainingListSave));
  }

}
