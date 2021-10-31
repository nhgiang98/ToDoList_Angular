import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Ticket} from '../app/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  readonly APIUrl = "http://localhost:50426/api";
  private dataSource = new BehaviorSubject<any>("");
  constructor(private http: HttpClient) { }
  changeData(data: any){
    this.dataSource.next(data);
  }

  getData(){
    return this.dataSource.asObservable();
  }

  getListTickets():Observable<any[]>{
    return this.http.get<Ticket[]>(this.APIUrl+ '/Ticket');
  }

  getTicketById(id: any){
    return this.http.get<any>(this.APIUrl + '/Ticket', id);
  }

  addNewTicket(val: any){
    return this.http.post(this.APIUrl + '/Ticket', val);
  }

  updateTicket(val: Ticket){
    return this.http.put(this.APIUrl + '/Ticket', val);
  }

  deleteTicket(val: any){
    return this.http.delete(this.APIUrl+ '/Ticket/' + val);
  }
}
