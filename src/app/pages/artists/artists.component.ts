import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists:any=[
    {
      "artistImg": this.config.linkinPark2,
      "artistName": "Linkin Park"
    },
    {
      "artistImg": this.config.brunoMars,
      "artistName": "Bruno Mars"
    },
    {
      "artistImg": this.config.lilWayne,
      "artistName": "Lil Wayne"
    },
    {
      "artistImg": this.config.jCole,
      "artistName": "J Cole"
    },
    {
      "artistImg": this.config.taylorSwift,
      "artistName": "Taylor Swift"
    },
    {
      "artistImg": this.config.davidGuetta,
      "artistName": "David Guetta"
    },
    {
      "artistImg": this.config.greenDay,
      "artistName": "Green Day"
    },
    {
      "artistImg": this.config.fiftyCent,
      "artistName": "50 Cent"
    },
    {
      "artistImg": this.config.rihanna,
      "artistName": "Rihanna"
    },
    {
      "artistImg": this.config.eminem2,
      "artistName": "Eminem"
    },
    {
      "artistImg": this.config.theWeekend,
      "artistName": "The Weekend"
    },
    {
      "artistImg": this.config.wizKhalifa,
      "artistName": "Wiz Khalifa"
    },
    {
      "artistImg": this.config.postMalone,
      "artistName": "Post Malone"
    },
    {
      "artistImg": this.config.oneRepublic,
      "artistName": "One Republic"
    },
    {
      "artistImg": this.config.marshmello,
      "artistName": "Marshmello"
    },
    {
      "artistImg": this.config.katyPerry,
      "artistName": "Katy Perry"
    },
    {
      "artistImg": this.config.daBaby,
      "artistName": "DaBaby"
    },
    {
      "artistImg": this.config.machineGunKelly,
      "artistName": "Machine Gun Kelly"
    },
    {
      "artistImg": this.config.imagineDragons,
      "artistName": "Imagine Dragons"
    },
    {
      "artistImg": this.config.kendrickLamar,
      "artistName": "Kendrick Lamar"
    },
    {
      "artistImg": this.config.maroon5,
      "artistName": "Maroon 5"
    },
    {
      "artistImg": this.config.beyonce,
      "artistName": "Beyonce"
    },
    {
      "artistImg": this.config.edSheeran,
      "artistName": "Ed Sheeran"
    },
    {
      "artistImg": this.config.twentyOneSavage,
      "artistName": "21 Savage"
    },
    {
      "artistImg": this.config.metallica,
      "artistName": "Metallica"
    },
    {
      "artistImg": this.config.rickRoss,
      "artistName": "Rick Ross"
    },
    {
      "artistImg": this.config.drake,
      "artistName": "Drake"
    },
    {
      "artistImg": this.config.sia,
      "artistName": "Sia"
    },
    {
      "artistImg": this.config.michaelJackson,
      "artistName": "Michael Jackson"
    },
    {
      "artistImg": this.config.pitbull,
      "artistName": "Pitbull"
    },
    {
      "artistImg": this.config.theChainsmokers,
      "artistName": "The Chainsmokers"
    },
    {
      "artistImg": this.config.snoopDogg,
      "artistName": "Snoop Dogg"
    },
    {
      "artistImg": this.config.drDre,
      "artistName": "Dr. Dre"
    },
    {
      "artistImg": this.config.halsey,
      "artistName": "Halsey"
    },
    {
      "artistImg": this.config.logic,
      "artistName": "Logic"
    },
    {
      "artistImg": this.config.bustaRhymes,
      "artistName": "Busta Rhymes"
    },
    {
      "artistImg": this.config.calvinHarris,
      "artistName": "Calvin Harris"
    },
    {
      "artistImg": this.config.future,
      "artistName": "Future"
    },
    {
      "artistImg": this.config.kidCudi,
      "artistName": "Kid Cudi"
    },
    {
      "artistImg": this.config.kanyeWest,
      "artistName": "Kanye West"
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
