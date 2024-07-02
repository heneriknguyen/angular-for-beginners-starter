import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() filter: string;
  @Output() filterChange = new EventEmitter<string>();
  
  handleFilterChange(value: string) {
    this.filterChange.emit(value);
  }

  handleClick() {
    alert('Refresh clicked!');
    window.location.reload();
  }
}
