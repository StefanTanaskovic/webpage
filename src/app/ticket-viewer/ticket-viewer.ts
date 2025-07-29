import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-viewer',
  templateUrl: './ticket-viewer.html',
  imports: [FormsModule, DatePipe, CommonModule]
})
export class TicketViewer {
  selectedStatus: string = '';
  statuses = ['Open', 'In Progress', 'Closed'];
  tickets = [
    { id: 1, subject: 'Login issue', status: 'Open', createdAt: new Date() },
    { id: 2, subject: 'Bug in report', status: 'In Progress', createdAt: new Date() },
    { id: 3, subject: 'Request for feature', status: 'Closed', createdAt: new Date() },
  ];

  filteredTickets() {
    return this.selectedStatus ? this.tickets.filter(t => t.status === this.selectedStatus) : this.tickets;
  }
}
