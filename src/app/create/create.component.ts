import { CrudService } from './../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // productForm;

   productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    imageUrl: new FormControl(''),
    quantity: new FormControl(''),
  });


  constructor(public fb: FormBuilder,
    public crudService:CrudService,
    private router :Router) { }

  ngOnInit(): void {
  }


  submitForm() {
    this.productForm.get('imageUrl')?.setValue('https://loremflickr.com/320/240/');
    this.crudService.create(this.productForm.value).subscribe(res => {
      alert('Product created!');
      this.router.navigateByUrl('home');
    })
  }

}
