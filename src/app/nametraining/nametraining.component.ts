import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nametraining',
  templateUrl: './nametraining.component.html',
  styleUrls: ['./nametraining.component.css']
})
export class NametrainingComponent implements OnInit {

  @Input() nametraining: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
