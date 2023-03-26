import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { DateAdapter } from 'angular-calendar';
import { CalendarRoutingModule } from './calendar-routing.module';
import { FormsModule } from '@angular/forms';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {FlatpickrModule} from 'angularx-flatpickr';
import { CalendarCommonModule } from 'angular-calendar';
import { CalendarModule } from 'angular-calendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CalendarRoutingModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarCommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    

  ],
  exports: [CalendarComponent]
})
export class TestCalendarModule { }
