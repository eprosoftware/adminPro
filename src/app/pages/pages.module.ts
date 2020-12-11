import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts'
// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule} from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [ 
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent
                ],
  exports: [      
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent
    ],                
  imports: [    
    CommonModule ,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule
  
  ]
})
export class PagesModule { }
