import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  questions: any[] = [];
  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
  }

  startQuiz() {
    Swal.fire({
      title: 'Testni boshlashni istaysizmi?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      icon:'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       this.router.navigate(['/user/start']);
      } else if (result.isDenied) {
        Swal.fire('Test boshlanmadi', '', 'info')
      }
    })
  }

}
