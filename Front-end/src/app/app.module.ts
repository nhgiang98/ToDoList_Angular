import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketService } from './ticket.service';
import { TicketComponent } from './ticket/ticket.component';
import { FormsModule } from '@angular/forms';
import { ShowTicketComponent } from './ticket/show-ticket/show-ticket.component';
import { AddEditTicketComponent } from './ticket/add-edit-ticket/add-edit-ticket.component';
import { TableFilterPipe } from './ticket/show-ticket/table-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    ShowTicketComponent,
    AddEditTicketComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
