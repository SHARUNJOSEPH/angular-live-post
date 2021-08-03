import { BackEndService } from './../back-end.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  backEndService: any;
  constructor(private BackEndService: BackEndService) {}

  ngOnInit(): void {}
  onSave() {
    console.log('onSave is called...');
    this.BackEndService.saveData();
  }
  onFetch() {
    console.log('onSave is called...');
    this.BackEndService.saveData();
  }
}
