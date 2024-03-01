import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gameName: any;
  gameVideo: any;
  gameImage: any;
  gameDesc: any;
  ngOnInit() {

  }
  getName(name: any) {
    console.log(name);
    this.gameName = name;
    if (name == 'CyberPunk 2077') {
      this.gameVideo = 'https://cdn.cloudflare.steamstatic.com/steam/apps/256810255/movie480_vp9.webm?t=1611328033';
      this.gameImage = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1680026109'
      this.gameDesc = "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.";
    }
    if (name == 'Assetto Corsa Competizione') {
      this.gameVideo = 'https://cdn.cloudflare.steamstatic.com/steam/apps/256863243/movie_max_vp9.webm?t=1638536131';
      this.gameImage = 'https://cdn.cloudflare.steamstatic.com/steam/apps/805550/header.jpg?t=1669152079';
      this.gameDesc = "Assetto Corsa Competizione, the official GT World Challenge videogame. Thanks to the extraordinary quality of simulation, you will experience the atmosphere of the GT3 championship. Compete against official drivers, teams, cars and official circuits reproduced to the highest quality ever seen.";
    }
    if (name == 'Resident Evil 4') {
      this.gameVideo = 'https://cdn.cloudflare.steamstatic.com/steam/apps/256938324/movie480_vp9.webm?t=1680071409';
      this.gameImage = 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg?t=1680840402';
      this.gameDesc = "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where there is something terribly wrong with the locals.";
    }
    if (name == 'GTA V') {
      this.gameVideo = 'https://cdn.cloudflare.steamstatic.com/steam/apps/256913334/movie480_vp9.webm?t=1666976555';
      this.gameImage = 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1678296348';
      this.gameDesc = "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.";
    }
    if (name == 'Need For Speed™ Unbound') {
      this.gameVideo = 'https://cdn.cloudflare.steamstatic.com/steam/apps/256936856/movie480_vp9.webm?t=1679389216';
      this.gameImage = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1846380/header.jpg?t=1679430295';
      this.gameDesc = "Race to the top, definitely don’t flop. Outsmart the cops, and enter weekly qualifiers for The Grand: the ultimate street race. Pack your garage with precision-tuned, custom rides and light up the streets with your style.";
    }
    if (name == 'Apex Legends™') {
      this.gameVideo = 'https://cdn.cloudflare.steamstatic.com/steam/apps/256930469/movie480_vp9.webm?t=1676397705';
      this.gameImage = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1679171844';
      this.gameDesc = "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.";
    }
    if (name == 'Forza Horizon 5') {
      this.gameVideo = 'https://cdn.cloudflare.steamstatic.com/steam/apps/256859757/movie480_vp9.webm?t=1636489104';
      this.gameImage = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg?t=1680128611';
      this.gameDesc = "Your Ultimate Horizon Adventure awaits! Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world’s greatest cars. Conquer the rugged Sierra Nueva in the ultimate Horizon Rally experience. Requires Forza Horizon 5 game, expansion sold separately.";
    }
    if (name == 'The Last of Us™ Part I') {
      this.gameVideo = 'https://cdn.cloudflare.steamstatic.com/steam/apps/256936971/movie480_vp9.webm?t=1680015399';
      this.gameImage = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg?t=1680282721';
      this.gameDesc = "Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.";
    }

  }
  close() {
    this.gameName = undefined;
    this.gameVideo = undefined;
    this.gameImage = undefined;
  }
  addtocart(){
    alert('This game is added to your cart.');
  }
}
