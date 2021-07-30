import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide';

@Component({
  selector: 'app-header-slider',
  templateUrl: './header-slider.component.html',
  styleUrls: ['./header-slider.component.css']
})
export class HeaderSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const config = {
      type: "carousel",
      perView: 1,
      // autoplay: 3000,
  }
  new Glide('.glide', config).mount()
  }
}
