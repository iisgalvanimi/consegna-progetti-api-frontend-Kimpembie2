import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  cardData: any;
  loading = false;
  
  constructor(private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cardName = params.get('name')!;
      this.fetchCardData(cardName);
    })
  }

  fetchCardData(cardName: string): void {
    this.loading = true;
    const url = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`;
    this.http.get(url).subscribe(
      (data)=> {
        this.cardData = data;
        this.loading = false;
      },
      (error) => {
        console.error('Errore nella ricerca della carta', error)
        this.loading = false;
      }
    )
  }
}
