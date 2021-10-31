import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/ticket.model';
import { TicketService } from 'src/app/ticket.service';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent implements OnInit {
  status:  string ="";
  listTicket: Ticket[] = [];
  ModalTitle: string = "";
  ActivateAddEditTicket: boolean = false;
  ticket: any;
  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.refreshTicketList();
    console.log(this.listTicket.length);
  }

  refreshTicketList(){
    this.ticketService.getListTickets().subscribe(data =>
   {
      console.log(data);
      this.listTicket = data;
    })};

  setColor(item: any): any {
    var deadlineDate = new Date(item.Deadline).getTime();
    var localDate = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round((deadlineDate - localDate) / oneDay);

    if (item.Status == 'Done') return '#98FB98';
    if (item.Status != 'Done' && diffDays < 0) return '#DC143C';
    if (item.Status != 'Done' && diffDays <=3) return '#FFD700';
    return '#FDF5E6';
  }
  addNewTicket(){
    this.ticket = {
      Id: 0,
      Description:"",
      Deadline: new Date(),
      Status: "",
      Title:""
    }
    this.ModalTitle = "Add New Ticket";
    this.ActivateAddEditTicket = true;

  }

  closeClick(){
    this.ActivateAddEditTicket = false;
    this.refreshTicketList();
  }

  editClick(item:any){
    this.ticket = item;
    this.ModalTitle = "Edit Ticket";
    this.ActivateAddEditTicket = true;
  }

  deleteClick(item: any){
    if(confirm("Are you sure want to delete it?")) {
      this.ticketService.deleteTicket(item.Id).subscribe(() => {
        alert('Delete successfully!!');
        this.refreshTicketList();
      })
    }
  }
}

