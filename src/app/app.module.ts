import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { StudentComponent } from './student/student.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MobileCardComponent } from './mobile-card/mobile-card.component';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    StudentComponent,
    MobileCardComponent,
    MobileDashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
