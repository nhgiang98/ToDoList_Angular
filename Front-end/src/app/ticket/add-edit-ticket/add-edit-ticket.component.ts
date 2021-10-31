import { Component, OnInit, Input} from '@angular/core';
import { TicketService } from 'src/app/ticket.service';
@Component({
  selector: 'app-add-edit-ticket',
  templateUrl: './add-edit-ticket.component.html',
  styleUrls: ['./add-edit-ticket.component.css']
})
export class AddEditTicketComponent implements OnInit {

  constructor(private ticketService:TicketService) { }
  @Input() ticket: any;
  statusOptions = ['To do', 'In progress', 'Done'];
  Id : number = 0;
  Description : string ="";
  Deadline : Date = new Date();
  Status : string = "To do";
  
  ngOnInit(): void {
    this.Id = this.ticket.Id;
    this.Description = this.ticket.Description;
    this.Deadline = this.ticket.Deadline;
    this.Status = this.ticket.Status == "" ? this.statusOptions[0] : this.ticket.Status;
  }
  addNewTicket(){
    var val = {
      Description: this.Description,
      Status: this.Status,
      Deadline: this.Deadline
    }
    this.ticketService.addNewTicket(val).subscribe(data => {
      console.log(data);
       alert('Add new ticket successfully!');
    });
  }

  updateTicket(){
    var val = {
      Id: this.Id,
      Description: this.Description,
      Deadline: this.Deadline,
      Status: this.Status
    }
    this.ticketService.updateTicket(val).subscribe((data) => {
          console.log(data);
          alert('Update successfully!');
        }
    );
  }
}
