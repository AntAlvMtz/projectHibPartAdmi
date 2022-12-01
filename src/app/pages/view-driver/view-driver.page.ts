import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.page.html',
  styleUrls: ['./view-driver.page.scss'],
})
export class ViewDriverPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToNewDriver(): void {
    this.router.navigate(['/new-driver']);
  }
}
