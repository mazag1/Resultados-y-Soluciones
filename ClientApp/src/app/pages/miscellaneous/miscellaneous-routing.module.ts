import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpinnerComponent } from '../../pages/extra-components/spinner/spinner.component';

import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MiscellaneousComponent,
    children: [
      {
        path: '404',
        component: NotFoundComponent,
      },
      {
        path: 'spinner',
        component: SpinnerComponent,
      },
    ],
  },
];








@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousRoutingModule {
}
