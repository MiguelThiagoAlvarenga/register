import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { GridRegisterComponent } from './components/layout-register/grid-register/grid-register.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonService } from './services/person.service';
import { LayoutRegisterComponent } from './components/layout-register/layout-register.component';
import { CadRegisterComponent } from './components/layout-register/register-modal/register-modal.component';
import {
  NgbPaginationModule,
  NgbAlertModule,
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/layout-register/filter/filter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CalendarModule } from 'primeng/calendar';
import { RegisterPersonComponent } from './components/register-person/register-person.component';

@NgModule({
  declarations: [
    AppComponent,
    GridRegisterComponent,
    HeaderComponent,
    LayoutRegisterComponent,
    CadRegisterComponent,
    FooterComponent,
    FilterComponent,
    HomePageComponent,
    RegisterPersonComponent
  ],
    imports: [
        NgbPaginationModule,
        NgbAlertModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        CalendarModule,
    ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    HeaderComponent,
    FooterComponent
  ],
})
export class AppModule { }
