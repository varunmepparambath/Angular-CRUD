import { CrudService } from './../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../model/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public product!: Product;
  public id:any='';
  constructor(private activatedRoute:ActivatedRoute,
    public crudService : CrudService) { }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((params) => {
			if (params.get('productId')) {
				this.id = params.get('productId');
			} else {
				this.id = null;
			}
		});
    this.crudService.getProductById(this.id).subscribe((data: Product) => {
      console.log(data);
      this.product = data;
    })


  }

}
