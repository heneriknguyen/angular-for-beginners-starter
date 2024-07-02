import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [];
  filter: string = '';
  dateState: Date = new Date();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
    setInterval(() => this.dateState = new Date(), 30000);
  }

  loadData() {
    this.dataService.getData().subscribe((data: any[]) => {
      this.data = data;
    });
  }

  handleFilterChange(value: string) {
    this.filter = value;
  }
}
