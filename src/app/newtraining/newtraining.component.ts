import { AppModule } from './../app.module';
import { Training } from './../training.model';
import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newtraining',
  templateUrl: './newtraining.component.html',
  styleUrls: ['./newtraining.component.css']
})
export class NewtrainingComponent implements OnInit{

  nameTraining: string ='treino teste'

  constructor() { }

  ngOnInit(): void {
  }

}
