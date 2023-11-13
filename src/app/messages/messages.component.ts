import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf,NgFor } from '@angular/common';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, NgIf,NgFor],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messageService: MessageService){

  }
}
