using Angular_ToDoList.Data;
using Angular_ToDoList.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_ToDoList.Service
{
    public class TicketService : ITicketService
    {
        private DBContext _context; 

        public TicketService (DBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Ticket> GetAllTickets()
        {
            return _context.Ticket.ToList();
        }
        public Ticket AddNewTicket(Ticket ticket)
        {
            var newTicket = new Ticket
            {
                Description = ticket.Description,
                Deadline = ticket.Deadline,
                Status = ticket.Status
            };
            
            _context.Ticket.Add(newTicket);
            _context.SaveChanges();

            return newTicket;
        }

        public bool DeleteTicket(int id)
        {
            var ticketInfo = _context.Ticket.SingleOrDefault(x => x.Id == id);

            if (ticketInfo != null)
            {
                _context.Remove(ticketInfo);
                _context.SaveChanges();
                return true;
            }

            return false;
        }
       
        public Ticket UpdateTicket(Ticket ticket)
        {
            var ticketInfo = _context.Ticket.SingleOrDefault(x => x.Id == ticket.Id);
            
            if (ticketInfo != null)
            {
                ticketInfo.Description = ticket.Description != null ? ticket.Description : ticketInfo.Description;
                ticketInfo.Deadline = ticket.Deadline != null ? ticket.Deadline : ticketInfo.Deadline;
                ticketInfo.Status = ticket.Status != null ? ticket.Status : ticketInfo.Status;
                _context.Ticket.Update(ticketInfo);
                _context.SaveChanges();
            }
            return ticketInfo;
        }

        public Ticket GetTicketById(int id)
        {
            return _context.Ticket.SingleOrDefault(x => x.Id == id);
        }
    }
}
