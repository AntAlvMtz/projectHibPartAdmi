import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-drivers',
  templateUrl: './view-drivers.page.html',
  styleUrls: ['./view-drivers.page.scss'],
})
export class ViewDriversPage implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  public goToNewDriver(): void {
    this.router.navigate(['/new-driver']);
  }

}
