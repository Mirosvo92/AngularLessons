import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CarsComponent} from './block-3/cars/cars.component';
import {DirectivesComponent} from './block-4/directives-lesson/directives.component';
import {PipComponent} from './pipes/pip/pip.component';
import {TelephonesComponent} from './services/telephones/telephones.component';
import {FormsComponent} from './forms/forms/forms.component';
import {MyServerComponent} from './my-server/my-server.component';
import {CarPageComponent} from './car-page/car-page.component';

const appRoutes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path: 'derectives', component: DirectivesComponent},
  {path: 'pipe', component: PipComponent},
  {path: 'telephones', component: TelephonesComponent},
  {path: 'form', component: FormsComponent},
  {path: 'server', component: MyServerComponent},
  {path: 'cars/:id/:name', component: CarPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
