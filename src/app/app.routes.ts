import { Routes } from '@angular/router';
import { TicketViewer } from './ticket-viewer/ticket-viewer';
import { KnowledgebaseEditor } from './knowledgebase-editor/knowledgebase-editor';
import { LiveLogs } from './live-logs/live-logs';

export const routes: Routes = [
    { path: '', redirectTo: '/tickets', pathMatch: 'full' },
    { path: 'tickets', component: TicketViewer },
    { path: 'editor', component: KnowledgebaseEditor },
    { path: 'logs', component: LiveLogs },
];