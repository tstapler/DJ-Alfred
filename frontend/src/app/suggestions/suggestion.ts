export class Suggestion {
  title: string;
  artist: string;

  constructor(artist: string, title: string) {
    this.artist = artist;
    this.title = title;
  }

  get properties(): string[] {
    console.log(Object.keys(this));
    return Object.keys(this);
  }
}
