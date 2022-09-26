import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';

import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DetalleComponent } from './clientes/detalle/detalle.component';
import { LoginComponent } from './usuarios/login.component';






registerLocaleData(localeEs,'es');

const routes: Routes=[
  {path:'',redirectTo:'/clientes',pathMatch:'full'},
  {path:'directivas',component:DirectivaComponent},
  {path:'clientes',component:ClientesComponent},
  {path: 'clientes/page/:page',component:ClientesComponent},
  {path: 'clientes/form', component:FormComponent},
  {path: 'clientes/form/:id', component:FormComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    LoginComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
   
  ],
  providers: [
    ClienteService,
    {provide:LOCALE_ID, useValue:'es'},
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
