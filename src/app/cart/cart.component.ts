import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormGroup,FormControl,FormBuilder, FormsModule} from '@angular/forms';
//----------http api
import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable,of  } from 'rxjs';
import { catchError, map  } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent{

  productProfileForm = new FormGroup({
    c1: new FormControl(''),
    c2: new FormControl(''),
    c3: new FormControl(''),
    c4: new FormControl(''),
    c5: new FormControl(''),
    c6: new FormControl(''),
    c7: new FormControl(''),
    c8: new FormControl(''),
    c9: new FormControl('')
  });

  onSubmit() {
   // console.warn(this.productProfile.value);
    this.http.post<number>(
        'http://localhost/classicmodel/products_insert.php', 
        this.productProfileForm.value,
    ).subscribe({
        next:(resp:number)=>{
            console.log(resp);
        },
        error:(err)=> alert('errrrrrrrr')
    });
  }
  
  
  onSubmit2():void{
    const hd = new HttpHeaders()
    .set('content-type', 'application/x-www-form-urlencoded');
    this.http.post<number>('http://localhost:8080/bo/product_insert.php',
       this.productProfileForm.value,
       
       
      {
      reportProgress: true,
      observe: 'events',
      headers:hd
      },
  
    ).subscribe(event => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          console.log('Uploaded ' + event.loaded + ' out of ' + event.total + ' bytes');
          break;
        case HttpEventType.Response:
          console.log('Finished uploading!' + event.body);
          break;
      }
    });
    
  }

  products$ !: ProductProfile[] | null;
  searchkey={'key':'a'};
  getProducts() {
    this.http
         .get<ProductProfile[]>(
            'http://localhost:8080/bo/product_get.php',
            {params: this.searchkey}
         ).pipe(
             catchError( () => of(null) ),
             map( (data) => {
                 if(data == null){ return [];}
                 else {return data;}
             })
        ).subscribe((data)=>{
             this.products$ = data;
           //  console.log(data);
             console.log(this.products$);
         }
        );
   }
   getProducts2() {
    this.http
         .post <ProductProfile[]>(
            'http://localhost/bo/products_get.php',
             this.searchkey,
             {
                 headers:{"Content-Type" : "application/json; charset=UTF-8"}
              },
        ).subscribe( 
            (resp:any) => {  this.products$ = resp ; },
        );
   }
   constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }
}

export interface ProductProfile{
  productCode : string;
  productName : string;
  productLine : string;
  productScale : string;
  productVendor : string;
  productDescription : string;
  quantityInStock : number;
  buyPrice : number;
  MSRP : number;
}