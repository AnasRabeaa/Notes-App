import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'note-app';
  // arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private toastr: ToastrService) {

  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Welcome Toastr fun!');
  }
}
