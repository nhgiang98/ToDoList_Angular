using Angular_ToDoList.Model;
using Angular_ToDoList.Service;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Angular_ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class TicketController : ControllerBase
    {
        private ITicketService _ticketService;

        public TicketController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        [HttpGet]
        public List<Ticket> GetAllTickets()
        {
            return _ticketService.GetAllTickets();
        }

        [HttpGet("{id}")]
        public Ticket GetTicketById(int id)
        {
            return _ticketService.GetTicketById(id);
        }

        [HttpPost]
        public Ticket AddNewTicket([FromBody] Ticket ticket)
        {
            return _ticketService.AddNewTicket(ticket);
        }

        [HttpPut]
        public Ticket UpdateTicket(Ticket ticket)
        {
            return _ticketService.UpdateTicket(ticket);
        }

        [HttpDelete("{id}")]
        public bool DeleteTicketById(int id)
        {
            return _ticketService.DeleteTicket(id);
        }
    }
}
