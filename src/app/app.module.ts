import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarsComponent } from './block-3/cars/cars.component';
import { CarComponent } from './block-3/car/car.component';
import { AddcarComponent } from './block-3/addcar/addcar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DirectivesComponent } from './block-4/directives-lesson/directives.component';
import {BackgroundDirective} from './directives/background.directive';
import { PipComponent } from './pipes/pip/pip.component';
import {PowPipe} from './pow.pipe';
import { PipeFilterComponent } from './pipes/pipe-filter/pipe-filter.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { TelephonesComponent } from './services/telephones/telephones.component';
import { TelephoneComponent } from './services/telephone/telephone.component';
import { AddtelephoneComponent } from './services/addtelephone/addtelephone.component';
import {TelephonesService} from './services/telephones.servise';
import { MyColorDirective } from './directives/my-color.directive';
import { FormsComponent } from './forms/forms/forms.component';
import { MyServerComponent } from './my-server/my-server.component';
import {HttpClientModule} from '@angular/common/http';
import {MyServerService} from './my-server/myServer-service';
import {AppRoutingModule} from './app-routing-module';
import { CarPageComponent } from './car-page/car-page.component';
import { BackendApiService } from './backend-api.service';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddcarComponent,
    DirectivesComponent,
    BackgroundDirective,
    PipComponent,
    PowPipe,
    PipeFilterComponent,
    FilterPipePipe,
    TelephonesComponent,
    TelephoneComponent,
    AddtelephoneComponent,
    MyColorDirective,
    FormsComponent,
    MyServerComponent,
    CarPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TelephonesService, MyServerService, BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
