import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.page.html',
  styleUrls: ['./view-route.page.scss'],
})
export class ViewRoutePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToNewRoute(): void {
    this.router.navigate(['/new-route']);
  }

}
