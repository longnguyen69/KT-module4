import { Component, OnInit } from '@angular/core';
import { BookList } from 'src/app/BookList';
import { ConnectService } from 'src/app/services/connect/connect.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: BookList;


  constructor(
    private connectService: ConnectService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.connectService.find(id).subscribe(
      result => {
        this.book = result;
        // this.bookForm.patchValue(this.book);
      }
    );
  }

}
