using Angular_ToDoList.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Angular_ToDoList.Service
{
    public interface ITicketService
    {
        List<Ticket> GetAllTickets();
        Ticket GetTicketById(int id);
        Ticket AddNewTicket(Ticket ticket);
        Ticket UpdateTicket(Ticket ticket);
        bool DeleteTicket(int id);

    }
}
