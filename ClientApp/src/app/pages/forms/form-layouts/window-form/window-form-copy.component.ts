import { Component,NgModule } from '@angular/core';
import {  Routes } from '@angular/router';


import {NbWindowRef, NbSelectModule} from '@nebular/theme';

import { FormsComponent } from '../../forms.component';



const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
   
  },
];




@Component({

templateUrl:'windows-forn-copy.component.html',
  styleUrls: ['window-form.component.scss'],
  
})
export class WindowFormComponentCopy {
  constructor(public windowRef: NbWindowRef) {}
  NbSelectModule; 
  close() {
    this.windowRef.close();
  }
}
