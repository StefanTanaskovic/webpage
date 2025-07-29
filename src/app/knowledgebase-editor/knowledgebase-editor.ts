import { Component } from '@angular/core';
import { marked } from 'marked';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-knowledgebase-editor',
  templateUrl: './knowledgebase-editor.html',
  imports: [CommonModule, FormsModule]
})
export class KnowledgebaseEditor {
  content = '';
  preview = false;

  save() {
    console.log('Saved content:', this.content);
  }

  renderedMarkdown() {
    return marked.parse(this.content);
  }
}