import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DriverService } from 'src/app/services/driver.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Driver } from 'src/app/models/driver';
import { RouteService } from 'src/app/services/route.service';
import { Route } from 'src/app/models/route';



@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.page.html',
  styleUrls: ['./edit-driver.page.scss'],
})
export class EditDriverPage implements OnInit {

  public myForm: FormGroup;
  public routes:Route[]
  public validationMessages: object;

  constructor(private driverService: DriverService, 
    private routeService:RouteService,
    private fb: FormBuilder,
    private router:Router,
    private toastController: ToastController) { 
      routeService.getRoutes().subscribe(res=>{
        this.routes = res;
      });
    }

  ngOnInit() {
  }

}
