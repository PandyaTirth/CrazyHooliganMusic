import { Component, Injectable, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ConfigService } from 'src/app/core/services/config.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  audioContainer: any = [];
  albumContainer: any = [];

  discoverCarousel: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<img src='../../../assets/images/utils/arrow_left.png'/>", "<img src='../../../assets/images/utils/arrow_right.png'/>"],
    stagePadding: 70,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    margin: 15,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  }

  constructor(
    public config: ConfigService,
    private modalService: NgbModal
  ) { }

  discoverItems: any = [
    {
      "discoverImg": this.config.viralHits,
      "discoverTitle": "Viral Hits"
    },
    {
      "discoverImg": this.config.eminem,
      "discoverTitle": "Best of Eminem"
    },
    {
      "discoverImg": this.config.classicsOf90s,
      "discoverTitle": "90s Classics"
    },
    {
      "discoverImg": this.config.topEdm,
      "discoverTitle": "Top EDM"
    },
    {
      "discoverImg": this.config.roadTrip,
      "discoverTitle": "Road Trip"
    },
    {
      "discoverImg": this.config.linkinPark,
      "discoverTitle": "Best of Linkin Park"
    },
    {
      "discoverImg": this.config.hipHopParty,
      "discoverTitle": "Hip Hop Party"
    },
    {
      "discoverImg": this.config.relaxingAcoustic,
      "discoverTitle": "Relaxing Acoustic"
    },
  ]

  songDetails: any = [
    {
      "songImg": this.config.newSong1,
      "songTitle": "Sah Sah",
      "songArtist": "Nancy Ajram & Marshmellow",
      audioList: {
        url: "assets/media/newSongs/sahSah.mp3",
        title: "Sah Sah(Nancy Ajram & Marshmellow)",
        cover: this.config.newSong1
      }
    },
    {
      "songImg": this.config.newSong2,
      "songTitle": "Sharks",
      "songArtist": "Imagine Dragons",
      audioList: {
        url: "assets/media/newSongs/sharks.mp3",
        title: "Sharks(Imagine Dragons)",
        cover: this.config.newSong2
      }
    },
    {
      "songImg": this.config.newSong3,
      "songTitle": "From the D 2 LBC",
      "songArtist": "Eminem ft. Snoop Dogg",
      audioList: {
        url: "assets/media/newSongs/fromDToLbc.mp3",
        title: "From the D to the LBC(Eminem ft. Snoop Dogg)",
        cover: this.config.newSong3
      }
    },
    {
      "songImg": this.config.newSong4,
      "songTitle": "New Money",
      "songArtist": "Calvin Harris ft. 21 Savage",
      audioList: {
        url: "assets/media/newSongs/newMoney.mp3",
        title: "New Money(Calvin Harris ft. 21 Savage)",
        cover: this.config.newSong4
      }
    },
    {
      "songImg": this.config.newSong5,
      "songTitle": "The Drum",
      "songArtist": "Alan Walker",
      audioList: {
        url: "assets/media/newSongs/theDrum.mp3",
        title: "The Drum(Alan Walker)",
        cover: this.config.newSong5
      }
    },
    {
      "songImg": this.config.newSong6,
      "songTitle": "I Don't Like Myself",
      "songArtist": "Imagine Dragons",
      audioList: {
        url: "assets/media/newSongs/iDontLikeMyself.mp3",
        title: "I Don't Like Myself(Imagine Dragons)",
        cover: this.config.newSong6
      }
    },
    {
      "songImg": this.config.newSong7,
      "songTitle": "Boys in the Street",
      "songArtist": "Calum Scott",
      audioList: {
        url: "assets/media/newSongs/boysInTheStreet.mp3",
        title: "Boys in the Street(Calum Scott)",
        cover: this.config.newSong7
      }
    },
    {
      "songImg": this.config.newSong8,
      "songTitle": "Lost Without You",
      "songArtist": "Kygo ft. Dean Lewis",
      audioList: {
        url: "assets/media/newSongs/lostWithoutYou.mp3",
        title: "Lost Without You(Kygo ft. Dean Lewis)",
        cover: this.config.newSong8
      }
    },
  ]

  songRanked: any = [
    {
      "rank": 1,
      "songImg": this.config.topSong1,
      "songTitle": "As It Was",
      "songArtist": "Harry Styles",
      "album": "Harry's House",
      "releaseDate": "May 11, 2022",
      "duration": "3:05",
      albumList: {
        "albumImg": this.config.topSong1,
        "albumName": "Harry's House",
        "songCount": "13",
        "albumDuration": "41:55",
        "artists": "Harry Styles",
        "releaseDate": "20 May, 2022",
        "albumGenre": "Funk, Pop rock, Synth-pop"
      },
      audioList: {
        url: "assets/media/top10/topSong1.mp3",
        title: "As it Was(Harry Styles)",
        cover: this.config.topSong1
      }
    },
    {
      "rank": 2,
      "songImg": this.config.topSong2,
      "songTitle": "About Damn Time",
      "songArtist": "Lizzo",
      "album": "Special",
      "releaseDate": "April 15, 2022",
      "duration": "3:12",
      albumList: {
        "albumImg": this.config.special_albumCover,
        "albumName": "Special",
        "songCount": "12",
        "albumDuration": "35:16",
        "artists": "Lizzo",
        "releaseDate": "15 July, 2022",
        "albumGenre": "Pop, Disco, R&B, Hip Hop"
      },
      audioList: {
        url: "assets/media/top10/topSong2.mp3",
        title: "About Damn Time(Lizzo)",
        cover: this.config.topSong2
      }
    },
    {
      "rank": 3,
      "songImg": this.config.topSong3,
      "songTitle": "First Class",
      "songArtist": "Jack Harlow",
      "album": "-",
      "releaseDate": "May 11, 2022",
      "duration": "2:53",
      albumList: {

      },
      audioList: {
        url: "assets/media/top10/topSong3.mp3",
        title: "First Class(Jack Harlow)",
        cover: this.config.topSong3
      }
    },
    {
      "rank": 4,
      "songImg": this.config.topSong4,
      "songTitle": "Running Up That Hill (A Deal With God)",
      "songArtist": "Kate Bush",
      "album": "Hounds of Love",
      "releaseDate": "June 10, 2016",
      "duration": "4:55",
      albumList: {
        "albumImg": this.config.houndsOfLove_albumCover,
        "albumName": "Hounds of Love",
        "songCount": "12",
        "albumDuration": "47:33",
        "artists": "Kate Bush",
        "releaseDate": "16 Sept, 1985",
        "albumGenre": "Pop, Alternate Rock"
      },
      audioList: {
        url: "assets/media/top10/topSong4.mp3",
        title: "Running Up That Hill(Kate Bush)",
        cover: this.config.topSong4
      }
    },
    {
      "rank": 5,
      "songImg": this.config.topSong5,
      "songTitle": "Wait For U",
      "songArtist": "Future ft. Drake & Tems",
      "album": "I Never Liked You",
      "releaseDate": "May 05, 2022",
      "duration": "3:09",
      albumList: {
        "albumImg": this.config.iNeverLikedYou_albumCover,
        "albumName": "I Never Liked You",
        "songCount": "16",
        "albumDuration": "48:41",
        "artists": "Future",
        "releaseDate": "29 April, 2022",
        "albumGenre": "Hip Hop, Rap"
      },
      audioList: {
        url: "assets/media/top10/topSong5.mp3",
        title: "Wait For U(Future ft. Drake and Tems)",
        cover: this.config.topSong5
      }
    },
    {
      "rank": 6,
      "songImg": this.config.topSong6,
      "songTitle": "Jimmy Cooks",
      "songArtist": "Drake ft. 21 Savage",
      "album": "Honestly, Nevermind",
      "releaseDate": "June 17, 2022",
      "duration": "3:38",
      albumList: {
        "albumImg": this.config.honestlyNevermind_albumCover,
        "albumName": "Honestly, Nevermind",
        "songCount": "16",
        "albumDuration": "52:32",
        "artists": "Drake",
        "releaseDate": "17 June, 2022",
        "albumGenre": "House music, Dance Music"
      },
      audioList: {
        url: "assets/media/top10/topSong6.mp3",
        title: "Jimmy Cooks(Drake ft. 21 Savage)",
        cover: this.config.topSong6
      }
    },
    {
      "rank": 7,
      "songImg": this.config.topSong7,
      "songTitle": "Me Porto Bonito",
      "songArtist": "Bad Bunny & Chencho Corleone",
      "album": "Un Verano Sin Ti",
      "releaseDate": "May 06, 2022",
      "duration": "3:11",
      albumList: {
        "albumImg": this.config.unVeranoSinTi_albumCover,
        "albumName": "Un Verano Sin Ti",
        "songCount": "23",
        "albumDuration": "1h 21",
        "artists": "Bad Bunny",
        "releaseDate": "06 May, 2022",
        "albumGenre": "Reggaeton, Cumbia, Indie Pop"
      },
      audioList: {
        url: "assets/media/top10/topSong7.mp3",
        title: "Me Porto Bonito(Bad Bunny & Chencho Corleone)",
        cover: this.config.topSong7
      }
    },
    {
      "rank": 8,
      "songImg": this.config.topSong8,
      "songTitle": "Heat Waves",
      "songArtist": "Glass Animals",
      "album": "Dreamland",
      "releaseDate": "June 30, 2020",
      "duration": "3:55",
      albumList: {
        "albumImg": this.config.topSong8,
        "albumName": "Dreamland",
        "songCount": "16",
        "albumDuration": "45:17",
        "artists": "Glass Animals",
        "releaseDate": "07 August, 2020",
        "albumGenre": "Alternative/Indie"
      },
      audioList: {
        url: "assets/media/top10/topSong8.mp3",
        title: "Heat Waves(Glass Animals)",
        cover: this.config.topSong8
      }
    },
    {
      "rank": 9,
      "songImg": this.config.topSong9,
      "songTitle": "Break My Soul",
      "songArtist": "Beyoncé",
      "album": "Renaissance",
      "releaseDate": "June 21, 2022",
      "duration": "4:38",
      albumList: {
        "albumImg": this.config.renaissance_albumCover,
        "albumName": "Renaissance",
        "songCount": "16",
        "albumDuration": "1h 16",
        "artists": "Beyoncé",
        "releaseDate": "29 July, 2022",
        "albumGenre": "Disco, Pop, Dance Music"
      },
      audioList: {
        url: "assets/media/top10/topSong9.mp3",
        title: "Break My Soul(Beyoncé)",
        cover: this.config.topSong9
      }
    },
    {
      "rank": 10,
      "songImg": this.config.topSong10,
      "songTitle": "Big Energy",
      "songArtist": "Latto",
      "album": "777",
      "releaseDate": "September 24, 2021",
      "duration": "3:21",
      albumList: {
        "albumImg": this.config.albumCover_777,
        "albumName": "777",
        "songCount": "13",
        "albumDuration": "1h 16",
        "artists": "Latto",
        "releaseDate": "25 March, 2022",
        "albumGenre": "Hip Hop, Pop, R&B"
      },
      audioList: {
        url: "assets/media/top10/topSong10.mp3",
        title: "Big Energy(Latto)",
        cover: this.config.topSong10
      }
    }
  ]

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0
    });
    this.GetSampleApi();
  }

  OpenMusicPlayer(template: TemplateRef<any>, selectedSong: any) {
    debugger
    this.audioContainer = [];
    this.audioContainer.push(selectedSong.audioList);
    this.modalService.open(template, { centered: true });
  }

  AlbumDetails(template: TemplateRef<any>, selectedAlbum: any) {
    this.albumContainer = [];
    this.albumContainer.push(selectedAlbum.albumList);
    this.modalService.open(template, { centered: true, windowClass: 'albumModal' });
  }

  // albumList: any = [
  //   {
  //     "albumImg": "assets/images/genres/countryGenre.jpg",
  //     "albumName": "Honestly, Nevermind",
  //     "songCount": "16",
  //     "albumDuration": "52:32",
  //     "artists": "Drake",
  //     "releaseDate": "17 June, 2022",
  //     "albumGenre": "House music, Dance Music"
  //   },
  //   {
  //     "albumImg": "assets/images/genres/countryGenre.jpg",
  //     "albumName": "Un Verano Sin Ti",
  //     "songCount": "23",
  //     "albumDuration": "1h 21",
  //     "artists": "Bad Bunny",
  //     "releaseDate": "06 May, 2022",
  //     "albumGenre": "Reggaeton, Cumbia, Indie Pop"
  //   },
  //   {
  //     "albumImg": "assets/images/genres/countryGenre.jpg",
  //     "albumName": "Dreamland",
  //     "songCount": "16",
  //     "albumDuration": "45:17",
  //     "artists": "Glass Animals",
  //     "releaseDate": "07 August, 2020",
  //     "albumGenre": "Alternative/Indie"
  //   },
  //   {
  //     "albumImg": "assets/images/genres/countryGenre.jpg",
  //     "albumName": "Renaissance",
  //     "songCount": "16",
  //     "albumDuration": "1h 16",
  //     "artists": "Beyoncé",
  //     "releaseDate": "29 July, 2022",
  //     "albumGenre": "Disco, Pop, Dance Music"
  //   },
  //   {
  //     "albumImg": "assets/images/genres/countryGenre.jpg",
  //     "albumName": "777",
  //     "songCount": "13",
  //     "albumDuration": "1h 16",
  //     "artists": "Latto",
  //     "releaseDate": "25 March, 2022",
  //     "albumGenre": "Hip Hop, Pop, R&B"
  //   }
  // ]

  GetSampleApi() {
    this.config.CallAPI().subscribe({
      next: (data: any) => {
        console.log(data)
      },
      error: (error: any) => {

      }
    })
  }
}
