import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent implements OnInit{

  @Input() name: string = "";
  @Input() userData!: {email: string, role: string}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
