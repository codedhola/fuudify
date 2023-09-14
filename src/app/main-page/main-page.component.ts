import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  products: any[] = [{
    id: 1,
    productImg: "https://www.inspiredtaste.net/wp-content/uploads/2023/01/Spaghetti-with-Meat-Sauce-Recipe-Video.jpg",
    productName: "spaghetti",
    productPrice: 300,
    type: "food",
    available: true
  }, 
  {
    id: 2,
    productImg: "https://eatwellabi.com/wp-content/uploads/2022/11/Jollof-rice-16.jpg",
    productName: "Jollof rice",
    productPrice: 350,
    type: "food",
    available: true
  },
  {
    id: 3,
    productImg: "https://lifeloveandgoodfood.com/wp-content/uploads/2023/03/chicken_fried_rice00032a-1200x1200-1.jpg",
    productName: "Fried Rice",
    productPrice: 420,
    type: "food",
    available: true
  },
  {
    id: 4,
    productImg: "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
    productName: "Pizza",
    productPrice: 600,
    type: "pizza",
    available: true
  },
  {
    id: 5,
    productImg: "https://www.allrecipes.com/thmb/ensbe5Y-RIFZ7O3701xIgQTZk38=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7982469-baked-beans-from-scratch-Lynda-Lukasiewicz-4x3-1-bec1a5073cd147bf873fd9d73690c61c.jpg",
    productName: "Beans",
    type: "food",
    productPrice: 210,
    available: false
  },
  {
    id: 6,
    productImg: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=pexels-rajesh-tp-1633578.jpg&fm=jpg",
    productName: "Burger",
    type: "others",
    productPrice: 240,
    available: true
  }
]

  getAll(){
    return this.products.length
  }

  getAllFoods(){
    return this.products.filter(data => data.type === "food").length
  }

  getAllPizza(){
    return this.products.filter(data => data.type === "pizza").length
  }

  getAllDrinks(){
    return this.products.filter(data => data.type === "drinks").length
  }

  getAllOthers(){
    return this.products.filter(data => data.type === "others").length
  }


  chosenFood: string = "all"

  searchText: string = ""

  onFilterChosenFood(data: string){
    this.chosenFood = data
  }

  onSearchText(event: string){
    this.searchText = event
  }
}
