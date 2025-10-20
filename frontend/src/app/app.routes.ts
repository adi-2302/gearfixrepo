import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register';
import { LoginComponent } from './login/login';
import { Workshops } from './workshops/workshops';
import { WorkshopDetail } from './workshop-detail/workshop-detail';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'workshops', component: Workshops },
    { path: 'workshops/:id', component: WorkshopDetail },
    { path: '', redirectTo: '/workshops', pathMatch: 'full' }
];