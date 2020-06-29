import { Component, OnInit } from '@angular/core';
import { BookList } from 'src/app/BookList';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectService } from 'src/app/services/connect/connect.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book: BookList;

  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    author: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private route: ActivatedRoute, private connectService: ConnectService, private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const value = this.bookForm.value;
      this.connectService.create(value).subscribe(
        next => {
          this.router.navigate(['/book/list']);
        },
        error => console.log(error)
      );
    }
  }
}
