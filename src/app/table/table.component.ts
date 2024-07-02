import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: any[];
  @Input() data: User[];
  @Input() filter: string;

  selectedRow: User | null = null;
  showPopup: boolean = false;

  handleDoubleClick(row: User) {
    this.selectedRow = row;
    this.showPopup = true;
  }
}
