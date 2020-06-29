import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookList } from 'src/app/BookList';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  API_URL = 'http://127.0.0.1:3000/books';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<BookList[]>(this.API_URL);
  }

  find(id: number) {
    return this.http.get<BookList>(`${this.API_URL}/${id}`);
  }

  create(book: BookList) {
    return this.http.post<BookList>(`${this.API_URL}`, book);
  }

  delete(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  update(id: number, book: BookList) {
    return this.http.patch<BookList>(`${this.API_URL}/${id}`, book);
  }
}
