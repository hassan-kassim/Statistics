import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';
import { LoginComponent} from './login/login-component';
import { AuthGuard } from './login/_guard/auth_Guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  { path: 'uploadData', component: FileUploadComponent },
  { path: 'statsticalConstitution', component: ViewStatisticsComponent },
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  imports: [
  CommonModule,
   RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: [
  ]
})
export class AppRoutingModule { }
