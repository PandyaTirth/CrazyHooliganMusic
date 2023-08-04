import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlistContainer: any = [];

  playlist: any = [
    {
      "playlistTitle": "Playlists for Perfect Mood",
      "playlistMood": [
        {
          "playlistImg": this.config.partyTime,
          "playlistTagLine": "It's Party Time!",
          "artistName": "One Republic, Flo Rida, Pitbull, Kesha",
          audioList: [
            {
              url: "assets/media/top10/topSong2.mp3",
              title: "Party Song 1",
              cover: this.config.newSong1
            },
            {
              url: "assets/media/top10/topSong2.mp3",
              title: "Party Song 1",
              cover: this.config.newSong2
            },
          ]
        },
        {
          "playlistImg": this.config.vintageClassics,
          "playlistTagLine": "Vintage Classics",
          "artistName": "Big Sean, Dr Dre, Bryan Adams, Taylor Swift"
        },
        {
          "playlistImg": this.config.roadTripPlaylist,
          "playlistTagLine": "Road Trip",
          "artistName": "Linkin Park, Bruno Mars, Charlie Puth"
        },
        {
          "playlistImg": this.config.romanticVibes,
          "playlistTagLine": "Romantic Vibes",
          "artistName": "Ellie Goulding, James Arthur, Ed Sheeran"
        },
        {
          "playlistImg": this.config.mindfulMotivation,
          "playlistTagLine": "Mindful Motivation",
          "artistName": "Eminem, J Cole, Imagine Dragons, 21 Savage"
        },
        {
          "playlistImg": this.config.callOfRains,
          "playlistTagLine": "Call of Rains",
          "artistName": "The Beatles, Xxxtentation, Michael Jackson"
        },
        {
          "playlistImg": this.config.workoutFrenzy,
          "playlistTagLine": "Workout Frenzy",
          "artistName": "Beyoncé, Drake, The Script, Post Malone"
        }
      ]
    },
    {
      "playlistTitle": "Top Stations",
      "playlistMood": [
        {
          "playlistImg": this.config.chillElectric,
          "playlistTagLine": "Chill Electric",
          "artistName": ""
        },
        {
          "playlistImg": this.config.classicalPiano,
          "playlistTagLine": "Classical Piano",
          "artistName": ""
        },
        {
          "playlistImg": this.config.upbeatPop,
          "playlistTagLine": "Upbeat Pop",
          "artistName": ""
        },
        {
          "playlistImg": this.config.bestOf2000s,
          "playlistTagLine": "Best of 2000s",
          "artistName": ""
        },
        {
          "playlistImg": this.config.topCountry,
          "playlistTagLine": "Top Country",
          "artistName": ""
        },
        {
          "playlistImg": this.config.loFiHipHop,
          "playlistTagLine": "Lo-Fi HipHop",
          "artistName": ""
        },
        {
          "playlistImg": this.config.retroRnB,
          "playlistTagLine": "Retro R&B",
          "artistName": ""
        }
      ]
    },
    {
      "playlistTitle": "Trending",
      "playlistMood": [
        {
          "playlistImg": this.config.billboardsTop50,
          "playlistTagLine": "Billboard's Top 50",
          "artistName": "Calvin Harris, Justin Timberlake, Halsey"
        },
        {
          "playlistImg": this.config.bestOfInstrumental,
          "playlistTagLine": "Best of Instrumental",
          "artistName": "The Weekend, Swae Lee, Shawn Mendes"
        },
        {
          "playlistImg": this.config.hotRock,
          "playlistTagLine": "Hot Rock of 2020",
          "artistName": "Backstreet Boys, Metallica, Guns N'Roses"
        },
        {
          "playlistImg": this.config.popFestival,
          "playlistTagLine": "Pop Festival",
          "artistName": "Sean Paul, Alan Walker, DJ Snake"
        },
        {
          "playlistImg": this.config.christmasBox,
          "playlistTagLine": "Christmas Box",
          "artistName": "Justin Beiber, Camilla Cabello, Mariah Carey"
        },
        {
          "playlistImg": this.config.happinessBooster,
          "playlistTagLine": "Happiness Booster",
          "artistName": "Dua Lipa, Coldplay, David Guetta"
        },
        {
          "playlistImg": this.config.mostPlayed,
          "playlistTagLine": "Most Played of All Time",
          "artistName": "Sia, Wiz Khalifa, Joyner Lucas, AC/DC"
        }
      ]
    },
    {
      "playlistTitle": "Podcasts",
      "playlistMood": [
        {
          "playlistImg": this.config.thinkFast,
          "playlistTagLine": "Think Fast, Talk Smart",
          "artistName": "Stanford GSB"
        },
        {
          "playlistImg": this.config.finshotsDaily,
          "playlistTagLine": "Finshots Daily",
          "artistName": "Finshots"
        },
        {
          "playlistImg": this.config.detectiveVikrant,
          "playlistTagLine": "Detective Vikrant",
          "artistName": "Stolen Tales"
        },
        {
          "playlistImg": this.config.sevenGoodMinutes,
          "playlistTagLine": "7 Good Minutes",
          "artistName": "Clyde Lee Dennis"
        },
        {
          "playlistImg": this.config.sundaySuspense,
          "playlistTagLine": "Sunday Suspense",
          "artistName": "Mirchi Bangla"
        },
        {
          "playlistImg": this.config.speakBetterEnglish,
          "playlistTagLine": "Speak Better English with Harry",
          "artistName": "Harry"
        },
        {
          "playlistImg": this.config.tedTalksDaily,
          "playlistTagLine": "TED Talks Daily",
          "artistName": "TED"
        }
      ]
    },
    {
      "playlistTitle": "Popular Albums",
      "playlistMood": [
        {
          "playlistImg": this.config.dreamland,
          "playlistTagLine": "Dreamland[Explicit]",
          "artistName": "Glass Animals"
        },
        {
          "playlistImg": this.config.harrysHouse,
          "playlistTagLine": "Harry's House",
          "artistName": "Harry Styles"
        },
        {
          "playlistImg": this.config.afterHours,
          "playlistTagLine": "After Hours[Explicit]",
          "artistName": "The Weekend"
        },
        {
          "playlistImg": this.config.evolve,
          "playlistTagLine": "Evolve",
          "artistName": "Imagine Dragons"
        },
        {
          "playlistImg": this.config.topGun,
          "playlistTagLine": "Top Gun : Maverick",
          "artistName": "Lady Gaga, One Republic"
        },
        {
          "playlistImg": this.config.listen,
          "playlistTagLine": "Listen",
          "artistName": "David Guetta"
        },
        {
          "playlistImg": this.config.recovery,
          "playlistTagLine": "Recovery",
          "artistName": "Eminem"
        }
      ]
    }

  ]

  moodCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["<img src='../../../assets/images/utils/arrow_left.png'/>", "<img src='../../../assets/images/utils/arrow_right.png'/>"],
    stagePadding: 70,
    margin: 15,
    nav: true,
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
    }
  }

  playlistSongs: any = [
    {
      "songImg": this.config.topSong1,
      "songTitle": "As It Was",
      "songArtist": "Harry Styles",
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
      "songImg": this.config.topSong2,
      "songTitle": "About Damn Time",
      "songArtist": "Lizzo",
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
      "songImg": this.config.topSong3,
      "songTitle": "First Class",
      "songArtist": "Jack Harlow",
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
      "songImg": this.config.topSong4,
      "songTitle": "Running Up That Hill (A Deal With God)",
      "songArtist": "Kate Bush",
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
      "songImg": this.config.topSong5,
      "songTitle": "Wait For U",
      "songArtist": "Future ft. Drake & Tems",
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
      "songImg": this.config.topSong6,
      "songTitle": "Jimmy Cooks",
      "songArtist": "Drake ft. 21 Savage",
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
      "songImg": this.config.topSong7,
      "songTitle": "Me Porto Bonito",
      "songArtist": "Bad Bunny & Chencho Corleone",
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
      "songImg": this.config.topSong8,
      "songTitle": "Heat Waves",
      "songArtist": "Glass Animals",
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
      "songImg": this.config.topSong9,
      "songTitle": "Break My Soul",
      "songArtist": "Beyoncé",
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
      "songImg": this.config.topSong10,
      "songTitle": "Big Energy",
      "songArtist": "Latto",
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

  constructor(
    public config: ConfigService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0
    });
  }

  OpenPlaylistPlayer(template: TemplateRef<any>) {
    this.playlistContainer = [];
    this.playlistContainer.push(this.playlistSongs[0].audioList);
    this.modalService.open(template, { centered: true, windowClass: 'playListModal', size: 'xl' });
  }

  PlayNewSong(topSong: any) {
    debugger
    this.playlistContainer = [];
    this.playlistContainer.push(topSong['audioList'])
    // let abc = this.playlistContainer.push(topSong['audioList'])
    // abc = this.playlistContainer
    // this.playlistContainer.push(this.playlistContainer.push(topSong['audioList']));
    console.log(this.playlistContainer)
  }
}
