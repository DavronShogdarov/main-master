import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import { FaylService } from 'src/app/service/fayl.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog!: Blog;
  rasmManzil!: string;
  constructor( private faylService: FaylService) { }

  ngOnInit(): void {
    // this.accountService.identity().subscribe(data => {
    //   if (data) {
    //     this.blog = data;
    //     this.rasmManzilOzgar();

    //   }

    // })
  }
  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   console.log(file);

  //   if (file) {
  //     this.faylService.uploadFayl(file).subscribe(f => {
  //       this.blog.photo = f;
  //       this.accountService.update(this.blog).subscribe(data => {
  //         this.blog = data;
  //         // this.rasmManzilOzgar();
  //       })

  //     })
  //   }
  // }

  // rasmManzilOzgar() {
  //   if (this.blog.photo)
  //     this.rasmManzil = environment.baseApi + "/api/fayl/download/" + this.blog.photo.id;
  // }

}
