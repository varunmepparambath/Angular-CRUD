import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Product } from '../model/product';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public product!: Product;
  public id:any='';
 
  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    imageUrl: new FormControl(''),
    quantity: new FormControl(''),
  });


  constructor(public fb: FormBuilder,
    public crudService:CrudService,
    private activatedRoute :ActivatedRoute,
    private router :Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
			if (params.get('productId')) {
				this.id = params.get('productId');
        this.crudService.getProductById(this.id).subscribe((data: Product) => {
          this.product = data;
          this.productForm = new FormGroup({
            name: new FormControl(this.product.name),
            description: new FormControl(this.product.description),
            price: new FormControl(this.product.price),
            imageUrl: new FormControl(this.product.imageUrl),
            quantity: new FormControl(this.product.quantity),
          });
        })
			} else {
				this.id = null;
			}
		});

  }
  submitForm() {
    this.productForm.get('imageUrl')?.setValue('https://loremflickr.com/320/240/');
    this.crudService.updateProductById(this.product.id, this.productForm.value).subscribe(res => {
      alert('Product Updated!');
      this.router.navigateByUrl('home');
    })
  }

}
