import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { QuestionLevelService } from 'src/app/service/questionLevel.service';
import { ResultsService } from 'src/app/service/results.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  resultsForm!: FormGroup;
  results: any;

  questionLevels!: any[];
  users!: any[];


  length = 100;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private fb: FormBuilder,
    private _results: ResultsService,
    private _route: ActivatedRoute,
    private _user: UserService,
    private _questionLevel: QuestionLevelService,
    private _snack: MatSnackBar
  ) { }

  ngAfterViewInit(): void {

    this.loadResults();
  }

  ngOnInit(): void {

    this._user.getAll('').subscribe(data => {
      this.users = data.content;
    });

    this._questionLevel.getAll('').subscribe(data => {
      this.questionLevels = data.content;
    })
  }

  loadResults(key?: any) {
    if (!key) {
      key = '';
    } else {
      if (typeof (key) == 'object') {
        key = key.value;
      }
      console.log(key);


    }
    this._results.getAll({
      key: key,
      page: this.paginator.pageIndex,
      size: this.paginator.pageSize,
      sort: 'id'
    }).subscribe(royxat => {

      console.log(royxat);
      this.results = royxat.content;
      console.log(this.results);
      this.length = royxat.totalElements;
    });
  }
}
