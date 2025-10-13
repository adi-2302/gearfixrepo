import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register';
import { LoginComponent } from './login/login';
import { WorkshopsComponent } from './workshops/workshops';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'workshops', component: WorkshopsComponent },
    { path: 'workshops/:id', component: WorkshopDetailComponent },
    { path: '', redirectTo: '/workshops', pathMatch: 'full' }
];