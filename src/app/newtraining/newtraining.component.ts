import { AppModule } from './../app.module';
import { Training } from './../training.model';
import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newtraining',
  templateUrl: './newtraining.component.html',
  styleUrls: ['./newtraining.component.css']
})
export class NewtrainingComponent implements OnInit{

  training: Training = new Training;

 // name = this.training.name;
 // day = this.training.day;
 // exercise = this.training.exercise;
 // serie = this.training.serie;
 // repetition = this.training.repetition;
 // weight = this.training.weight

  nameTraining: string ='treino teste saida'

  trainingList=[{}]

  saveStorage(name: string, day: string, exercise: string, serie: number, repetition: number, weight: number){

    this.training.name = name;
    this.training.day = day;
    this.training.exercise = exercise;
    this.training.serie = serie;
    this.training.repetition = repetition;
    this.training.weight =weight;

    this.saveList()

    alert('Treino Salvo')
  }


  saveList(){


    if( JSON.parse(localStorage.getItem('listaTreino')!)){
      this.trainingList = JSON.parse(localStorage.getItem('listaTreino')!);
      this.trainingList.push(this.training)
      let jsonKeyList = JSON.stringify(this.trainingList)
      localStorage['listaTreino'] =jsonKeyList;
     }

        let jsonKeyList = JSON.stringify(this.trainingList)
        localStorage['listaTreino'] =jsonKeyList;

  }


  onSubmit() {
    /*
    this.isSubmitted = true;
    if (!this.userService.isExist(this.user.username)) {
      this.userService.save(this.user);
    } else {
      this.userService.update(this.user);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.user = new User('', '');

    this.users = this.userService.getUsers();

    this.userService.notifyTotalUsers();
    */
  }




  constructor() { }

  ngOnInit(): void {
  }

}
