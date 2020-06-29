import { ConnectService } from 'src/app/services/connect/connect.service';
import { Component, OnInit } from '@angular/core';
import { BookList } from 'src/app/BookList';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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

  constructor(
    private route: ActivatedRoute,
    private connectService: ConnectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.connectService.find(id).subscribe(
      result => {
        this.book = result;
        this.bookForm.patchValue(this.book);
      }
    );
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const id = +this.route.snapshot.paramMap.get('id');
      const value = this.bookForm.value;
      this.connectService.update(id, value).subscribe(
        next => {
          this.router.navigate(['/book/list']);
        },
        error => console.log(error)
      );
    }
  }
}
