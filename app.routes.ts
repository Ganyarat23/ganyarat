import { Routes } from '@angular/router';
import {AppComponent } from './app.component'
import {LinkComponent } from './link/link.component'
import {DeleteComponent} from './delete/delete.component'
export const routes: Routes = [
    {path: '', component: AppComponent },
    {path: 'new', component: LinkComponent },
    {path: 'del' , component : DeleteComponent}
];