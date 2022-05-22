import { Training } from './../training.model';
import { NewtrainingComponent } from './../newtraining/newtraining.component';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-newtrainingedit',
  templateUrl: './newtrainingedit.component.html',
  styleUrls: ['./newtrainingedit.component.css']
})
export class NewtrainingeditComponent implements OnInit {

   

  @Output() informacaoPai = 'Treino Teste'


  constructor() { }

  ngOnInit(): void {

  }

  onSelectChange(event: Event) {


  }
  onSubmit() {


  }

}
