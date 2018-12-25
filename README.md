# Ng7引入Swiper
1. 安装swiper依赖包及转换器
```
npm install swiper --save
npm install @types/swiper --save
```
2. 配置anglar.json
```json
"styles": [
              "src/styles.styl",
              "./node_modules/swiper/dist/css/swiper.min.css"
            ],
            "scripts": [
              "./node_modules/swiper/dist/js/swiper.min.js"
            ]
```
3. tsconfig.app.json添加类型支持
```
"compilerOptions": {
    "types": ["swiper"]
  },
```
4. 组件内引入
```typescript
import { AfterViewInit, Component} from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.styl']
})
export class CarouselComponent implements AfterViewInit {
  constructor() { }
  ngAfterViewInit() {
    const myswiper = new Swiper('.swiper-container', {
      autoplay: true,
      speed: 300,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      }
    });
  }
}
```
