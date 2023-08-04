import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: any = [
    {
      "genreImg": this.config.rockGenre,
      "genreName": "Rock"
    },
    {
      "genreImg": this.config.hipHopGenre,
      "genreName": "Hip-Hop"
    },
    {
      "genreImg": this.config.popGenre,
      "genreName": "Pop"
    },
    {
      "genreImg": this.config.countryGenre,
      "genreName": "Country"
    },
    {
      "genreImg": this.config.metalGenre,
      "genreName": "Metal"
    },
    {
      "genreImg": this.config.jazzGenre,
      "genreName": "Jazz"
    },
    {
      "genreImg": this.config.retroGenre,
      "genreName": "Retro"
    },
    {
      "genreImg": this.config.edmGenre,
      "genreName": "EDM"
    }
  ]
  constructor(public config: ConfigService) { }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0
    });
  }

}
