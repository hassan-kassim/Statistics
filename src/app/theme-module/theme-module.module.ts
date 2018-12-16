import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { headerNavComponent } from '../../app/headerBar/headerBar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ThemeComponentComponent } from './theme-component/theme-component.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { ViewStatisticsComponent } from '../view-statistics/view-statistics.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
     CommonModule,
     ReactiveFormsModule,
    //  ThemeComponentComponent,
    RouterModule.forChild([
      {
        path: '',
        component: ThemeComponentComponent,
          'children': [
            {
            'path': '',
            'component': DashboardComponent
            }
          ]
        }
      ])
  ],
  exports: [ RouterModule ],
  declarations: [ThemeComponentComponent,
    headerNavComponent,
    SideBarComponent,
    DashboardComponent,
    FileUploadComponent,
    ViewStatisticsComponent,]
})
export class ThemeModuleModule { }
