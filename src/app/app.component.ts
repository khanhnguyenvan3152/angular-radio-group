import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../share.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ShareModule, FormsModule, CommonModule],
})
export class AppComponent implements OnInit {
  public selectedOption = 1;
  constructor() {}
  public items: { label: string; value: number }[] = [
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
    {
      label: 'Option 3',
      value: 3,
    },
    {
      label: 'Option 4',
      value: 4,
    },
  ];
  ngOnInit() {}

  onModelChange(event) {
    console.log(event)
  }
}
