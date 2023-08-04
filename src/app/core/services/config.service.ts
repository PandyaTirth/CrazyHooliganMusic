import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public logoImg = "assets/images/logo.webp";
  public arrowLeft = "assets/images/utils/arrow_left.jpg";
  public arrowRight = "assets/images/utils/arrow_right.jpg";

  // Discover
  public linkinPark = "assets/images/discover/linkin_park.jpg";
  public eminem = "assets/images/discover/eminem.jpg";
  public viralHits = "assets/images/discover/viral_hits.jpg";
  public classicsOf90s = "assets/images/discover/90s_classics.jpg";
  public topEdm = "assets/images/discover/top_edm.jpg";
  public roadTrip = "assets/images/discover/road_trip.jpg";
  public hipHopParty = "assets/images/discover/hip_hop.jpg";
  public relaxingAcoustic = "assets/images/discover/relaxing_acoustic.jpg";

  // New Songs
  public newSong1 = "assets/images/new-songs/new_song1.png";
  public newSong2 = "assets/images/new-songs/new_song2.jpg";
  public newSong3 = "assets/images/new-songs/new_song3.jpg";
  public newSong4 = "assets/images/new-songs/new_song4.jpg";
  public newSong5 = "assets/images/new-songs/new_song5.jpg";
  public newSong6 = "assets/images/new-songs/new_song6.jpg";
  public newSong7 = "assets/images/new-songs/new_song7.jpg";
  public newSong8 = "assets/images/new-songs/new_song8.jpg";

  // Top 10
  public topSong1 = "assets/images/top10/topsong_1.jpg";
  public topSong2 = "assets/images/top10/topsong_2.png";
  public topSong3 = "assets/images/top10/topsong_3.jpg";
  public topSong4 = "assets/images/top10/topsong_4.jpg";
  public topSong5 = "assets/images/top10/topsong_5.png";
  public topSong6 = "assets/images/top10/topsong_6.webp";
  public topSong7 = "assets/images/top10/topsong_7.jpg";
  public topSong8 = "assets/images/top10/topsong_8.png";
  public topSong9 = "assets/images/top10/topsong_9.png";
  public topSong10 = "assets/images/top10/topsong_10.png";

  // Playlists
  public partyTime = "assets/images/playlists/party.jpg";
  public vintageClassics = "assets/images/playlists/vintage.jpg";
  public roadTripPlaylist = "assets/images/playlists/road_trip.jpg";
  public romanticVibes = "assets/images/playlists/romantic_vibes.jpg";
  public mindfulMotivation = "assets/images/playlists/motivation.png";
  public callOfRains = "assets/images/playlists/rain.jpg";
  public workoutFrenzy = "assets/images/playlists/workout.jpg";
  public chillElectric = "assets/images/playlists/electric.jpg";
  public classicalPiano = "assets/images/playlists/piano.jpg";
  public upbeatPop = "assets/images/playlists/upbeat_pop.jpg";
  public bestOf2000s = "assets/images/playlists/bestof2000s.jpg";
  public topCountry = "assets/images/playlists/country.jpg";
  public loFiHipHop = "assets/images/playlists/lofi_hiphop.jpg";
  public retroRnB = "assets/images/playlists/retro_rnb.jpg";
  public billboardsTop50 = "assets/images/playlists/billboard_top50.jpg";
  public bestOfInstrumental = "assets/images/playlists/best_instrumental.jpg";
  public hotRock = "assets/images/playlists/hot_rock.jpg";
  public popFestival = "assets/images/playlists/pop_party.jpg";
  public christmasBox = "assets/images/playlists/christmas.jpg";
  public happinessBooster = "assets/images/playlists/happiness.jpg";
  public mostPlayed = "assets/images/playlists/most_played.jpg";
  public thinkFast = "assets/images/playlists/think_fast.jpeg";
  public finshotsDaily = "assets/images/playlists/finshots_daily.jpg";
  public detectiveVikrant = "assets/images/playlists/detective_vikrant.jpg";
  public sevenGoodMinutes = "assets/images/playlists/seven_good_minutes.jpg";
  public sundaySuspense = "assets/images/playlists/sunday_suspense.png";
  public speakBetterEnglish = "assets/images/playlists/speak_better_english.jpg";
  public tedTalksDaily = "assets/images/playlists/ted_talks_daily.png";
  public dreamland = "assets/images/playlists/dreamland.jpg";
  public harrysHouse = "assets/images/playlists/harrys_house.png";
  public afterHours = "assets/images/playlists/after_hours.png";
  public evolve = "assets/images/playlists/evolve.jpg";
  public topGun = "assets/images/playlists/top_gun_maverick.jpg";
  public listen = "assets/images/playlists/listen.png";
  public recovery = "assets/images/playlists/recovery.jpg";

  // Artists
  public linkinPark2 = "assets/images/artists/linkinPark.jpg";
  public brunoMars = "assets/images/artists/brunoMars.jpg";
  public lilWayne = "assets/images/artists/lilWayne.jpg";
  public jCole = "assets/images/artists/jCole.jpg";
  public taylorSwift = "assets/images/artists/taylorSwift.jpg";
  public davidGuetta = "assets/images/artists/davidGuetta.jpg";
  public greenDay = "assets/images/artists/greenDay.jpg";
  public fiftyCent = "assets/images/artists/50cent.jpg";
  public rihanna = "assets/images/artists/rihanna.jpg";
  public eminem2 = "assets/images/artists/eminem.jpg";
  public theWeekend = "assets/images/artists/theWeekend.jpg";
  public wizKhalifa = "assets/images/artists/wizKhalifa.png";
  public postMalone = "assets/images/artists/postMalone.jpg";
  public oneRepublic = "assets/images/artists/oneRepublic.jpg";
  public marshmello = "assets/images/artists/marshmello.jpg";
  public katyPerry = "assets/images/artists/katyPerry.jpg";
  public daBaby = "assets/images/artists/daBaby.jpg";
  public machineGunKelly = "assets/images/artists/machineGunKelly.jpg";
  public imagineDragons = "assets/images/artists/imagineDragons.jpg";
  public kendrickLamar = "assets/images/artists/kendrickLamar.jpg";
  public maroon5 = "assets/images/artists/maroon5.jpg";
  public beyonce = "assets/images/artists/beyonce.jpg";
  public edSheeran = "assets/images/artists/edSheeran.jpg";
  public twentyOneSavage = "assets/images/artists/21savage.jpg";
  public metallica = "assets/images/artists/metallica.jpg";
  public rickRoss = "assets/images/artists/rickRoss.jpg";
  public drake = "assets/images/artists/drake.jpg";
  public sia = "assets/images/artists/sia.jpg";
  public michaelJackson = "assets/images/artists/michaelJackson.jpg";
  public pitbull = "assets/images/artists/pitbull.jpg";
  public theChainsmokers = "assets/images/artists/theChainsmokers.jpg";
  public snoopDogg = "assets/images/artists/snoopDogg.jpg";
  public drDre = "assets/images/artists/drDre.jpg";
  public halsey = "assets/images/artists/halsey.jpg";
  public logic = "assets/images/artists/logic.jpg";
  public bustaRhymes = "assets/images/artists/bustaRhymes.jpg";
  public calvinHarris = "assets/images/artists/calvinHarris.jpg";
  public future = "assets/images/artists/future.png";
  public kidCudi = "assets/images/artists/kidCudi.jpg";
  public kanyeWest = "assets/images/artists/kanyeWest.png";

  //Genres
  public rockGenre = "assets/images/genres/rockGenre.webp";
  public hipHopGenre = "assets/images/genres/hipHopGenre.jpg";
  public popGenre = "assets/images/genres/popGenre.jpg";
  public countryGenre = "assets/images/genres/countryGenre.jpg";
  public metalGenre = "assets/images/genres/metalGenre.jpg";
  public jazzGenre = "assets/images/genres/jazzGenre.jpg";
  public retroGenre = "assets/images/genres/retroGenre.jpg";
  public edmGenre = "assets/images/genres/edmGenre.jpg";

  // Album Covers
  public special_albumCover = "assets/images/album-covers/special_albumCover.png";
  public houndsOfLove_albumCover = "assets/images/album-covers/houndsOfLove_albumCover.png";
  public iNeverLikedYou_albumCover = "assets/images/album-covers/iNeverLikedYou_albumCover.webp";
  public honestlyNevermind_albumCover = "assets/images/album-covers/honestlyNevermind_albumCover.png";
  public unVeranoSinTi_albumCover = "assets/images/album-covers/unVeranoSinTi_albumCover.png";
  public renaissance_albumCover = "assets/images/album-covers/renaissance_albumCover.png";
  public albumCover_777 = "assets/images/album-covers/777_albumCover.webp";

  constructor(private http: HttpClient) { }

  public sampleString: string = environment.SAMPLE_API

  CallAPI() {
    return this.http.get(this.sampleString);
  }
}
