import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '00.1';
  searchTerm: string ='';
  constructor(private router: Router){}

  search(): void{
    if (this.searchTerm){
      this.router.navigate([`/card/${this.searchTerm}`]);
    }
  }
}
