import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//----------http api
import { HttpClient, } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  constructor(private http: HttpClient){}
  Product_ID = "";

addVal(){
  console.log(this.Product_ID);
  this.Delete(this.Product_ID);
}

 Delete(Vdel:string){

  const productCode = this.Product_ID;

  this.http.delete<number>(`http://localhost:8080/bo/delete_record.php?productCode=${Vdel}`)
    .subscribe({
      next: (resp: number) => {
        console.log('Delete successful, response:', resp);
      },
      error: (err) => {
        console.error('Error deleting product:', err);
        alert('Failed to delete product');
      }
    });
}
  

}
