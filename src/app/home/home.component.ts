
import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = []

  constructor(public crudService: CrudService) { }
  stringCutter(words:string){
    var n = words.split(" ");
    return n[n.length - 1];
  }

  ngOnInit(): void {
    this.crudService.getAllProduct().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    })

  }

}
