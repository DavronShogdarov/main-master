import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Page } from '../model/page';
import { Results } from '../model/results';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  api = environment.baseApi + "/overall";

  constructor(private http: HttpClient) { }

  // add result
  create(result: any): Observable<any> {
    return this.http.post(this.api + "/save", result);
  }

  // update result
  updateResult(result:any){
    return this.http.put(`${this.api}`, result);
  }

  // get all results
  getAll(params: any): Observable<Page> {
    return this.http.get<Page>(this.api + "/all", {
      params: params
    });
  }

  // get one result
  getSingleResult(aId:any){
    return this.http.get(`${this.api}/get/${aId}`);
  }

  // delete result
  deleteResult(aId:any){
    return this.http.delete(`${this.api}/get/${aId}`);
  }

  // get results of quiz
  getResultsOfQuiz(qId:any){
    return this.http.get(`${this.api}/questionLevel/get/${qId}`);
  }

  // get results of user
  getResultsOfUser(id:any){
    return this.http.get(`${this.api}/user/get/${id}`);
  }

}
