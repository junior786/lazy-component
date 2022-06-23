import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-show',
  templateUrl: './images-show.component.html',
  styleUrls: ['./images-show.component.scss']
})
export class ImagesShowComponent implements OnInit {

  public images!: string[];

  constructor() { }

  ngOnInit(): void {
    this.images = [
      'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
      'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
      'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
      'https://www.thesprucepets.com/thmb/GmczAkTN1HfuOkCZv8tnNUgxseA=/2781x1854/filters:fill(auto,1)/pitbull-dog-breeds-4843994-hero-db6922b6c8294b45b19c07aff5865790.jpg',
      'https://images.newscientist.com/wp-content/uploads/2021/07/20164548/gettyimages-171117216_web.jpg?crop=16:9,smart&width=1200&height=675&upscale=true'
    ]
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [ImagesShowComponent],
  declarations: [ImagesShowComponent],
})
export class ImagesShowModule {
  constructor() {
    console.log('module lazy loaded: ', this);
  }
}
