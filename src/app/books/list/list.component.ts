import { Component, OnInit } from '@angular/core';
import { BookList } from 'src/app/BookList';
import { ConnectService } from 'src/app/services/connect/connect.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookList: BookList[] = [];

  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
    this.connectService.getAll().subscribe(result => {
      this.bookList = result;
    });
  }

  deleteBook(id: number) {
    const confirmDelete = confirm('Are you sure!?');
    if (confirmDelete) {
      const post = this.bookList[id];
      this.connectService.delete(post.id).subscribe(() => {
        this.bookList = this.bookList.filter(t => t.id !== post.id);
      });
    }
  }

}
