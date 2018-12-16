import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login-component';
import { AuthGuard } from './login/_guard/auth_Guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  // {path: 'logout', component: LogoutComponent},
  // { path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '', redirectTo: '/theme', pathMatch: 'full', canActivate: [AuthGuard]},
   { path: 'theme', loadChildren: './theme-module/theme-module.module#ThemeModuleModule'},
  ];
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'uploadData', component: FileUploadComponent },
  // { path: 'statsticalConstitution', component: ViewStatisticsComponent },
  // { path: 'Login', component: LoginComponent }
// ];

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
