import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  products: any[] = [{
    productImg: "https://www.inspiredtaste.net/wp-content/uploads/2023/01/Spaghetti-with-Meat-Sauce-Recipe-Video.jpg",
    productName: "spaghetti",
    productPrice: 300
  }, 
  {
    productImg: "https://eatwellabi.com/wp-content/uploads/2022/11/Jollof-rice-16.jpg",
    productName: "Jollof rice",
    productPrice: 350
  },
  {
    productImg: "https://lifeloveandgoodfood.com/wp-content/uploads/2023/03/chicken_fried_rice00032a-1200x1200-1.jpg",
    productName: "Fried Rice",
    productPrice: 420
  },
  {
    productImg: "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
    productName: "Pizza",
    productPrice: 600
  },
  {
    productImg: "https://www.allrecipes.com/thmb/ensbe5Y-RIFZ7O3701xIgQTZk38=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7982469-baked-beans-from-scratch-Lynda-Lukasiewicz-4x3-1-bec1a5073cd147bf873fd9d73690c61c.jpg",
    productName: "Beans",
    productPrice: 210
  },
  {
    productImg: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg",
    productName: "Burger",
    productPrice: 240
  }
]
}
