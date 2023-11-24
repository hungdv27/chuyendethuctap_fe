import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.less'],
})
export class CandidateListComponent implements OnInit {
  index1 = 0;
  index2 = 0;
  tabs = [1, 2, 3];
  id: any;
  role = localStorage.getItem('role');
  checkRole: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('i', this.id);
    console.log('role', this.role);
    if (this.role === 'ADMIN') {
      this.checkRole = true;
    } else {
      this.checkRole = false;
    }
  }
}
