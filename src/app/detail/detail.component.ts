import { CrudService } from './../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    public crudService : CrudService,
    private router:Router) { }
    stringCutter(words:string){
      var n = words.split(" ");
      return n[n.length - 1];
    }
    delete(id:number){
      this.crudService.deleteProductById(id).subscribe(res=>{
        alert('Product Deleted !');
        this.router.navigateByUrl('home');
      })
    }





  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((params) => {
			if (params.get('productId')) {
				this.id = params.get('productId');
        this.crudService.getProductById(this.id).subscribe((data: Product) => {
          console.log(data);
          this.product = data;
        })
			} else {
				this.id = null;
			}
		});
    


  }

}
