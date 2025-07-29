import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-logs',
  templateUrl: './live-logs.html',
  imports: [CommonModule]
})

export class LiveLogs {
  logs: string[] = [];
  @ViewChild('logContainer') logContainer!: ElementRef;

  ngOnInit() {
    setInterval(() => {
      this.logs.push(`Log entry at ${new Date().toLocaleTimeString()}`);
      setTimeout(() => {
        const el = this.logContainer?.nativeElement;
        if (el) el.scrollTop = el.scrollHeight;
      });
    }, 2000);
  }
}