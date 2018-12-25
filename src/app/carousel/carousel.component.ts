import { AfterViewInit, Component} from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.styl']
})
export class CarouselComponent implements AfterViewInit {
  constructor() { }

  slides = [
    'https://via.placeholder.com/300x200/FF5733/ffffff',
    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/eeeeee/ffffff',
  ];
  ngAfterViewInit() {
    const myswiper = new Swiper('.swiper-container', {
      autoplay: true, // 可选选项，自动滑动
      speed: 300,
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      }
    });
  }
}


