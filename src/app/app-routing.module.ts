import { WeekdaytrainingComponent } from './weekdaytraining/weekdaytraining.component';
import { NewtrainingeditComponent } from './newtrainingedit/newtrainingedit.component';
import { NewtrainingComponent } from './newtraining/newtraining.component';
import { LandpageComponent } from './landpage/landpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'',component: LandpageComponent},
{path:'newtraining', component:NewtrainingComponent},
{path:'newedittraining', component:NewtrainingeditComponent},
{path: 'weekdaytraining', component:WeekdaytrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
