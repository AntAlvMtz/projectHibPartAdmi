import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DriverService } from 'src/app/services/driver.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Driver } from 'src/app/models/driver';
import { RouteService } from 'src/app/services/route.service';
import { Route } from 'src/app/models/route';


@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.page.html',
  styleUrls: ['./new-driver.page.scss'],
})
export class NewDriverPage implements OnInit {

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
    this.myForm = this.fb.group({
      name:["Daniel", Validators.required],
      age:["15", Validators.compose([Validators.required, Validators.min(18)])],
      phone:["3111590910",Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      license:["DAA9916", Validators.compose([Validators.required])],
      route:["PROGRESO 3"],
      // route:["", Validators.compose([Validators.required])],
    });

    this.validationMessages = {
      name: [
        { type: 'required', message: "Debe capturar el nombre"}
      ],
      age: [
        { type: 'required', message: "Debe capturar la edad"},
        { type: 'min', message: "El chófer debe ser mayor de edad"}
      ],
      phone: [
        { type: 'required', message: "Teléfono obligatorio" },
        { type: 'minlength', message: "El Teléfono debe ser de mínimo 11 digitos" },
        { type: 'maxlength', message: "El Teléfono debe ser de máximo 12 digitos" },
        { type: 'pattern', message: "El Teléfono debe ser solo la lada y los números. Ej. +523113331111" }
      ],
      license: [
        { type: 'required', message: "Debe capturar la licencia del conductor"}
      ],
      route: [
        { type: 'required', message: "Debe capturar la ruta"}
      ]
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Chófer agregado',
      duration: 1500,
      position: 'bottom'
    });
    this.router.navigate([".."]);
    await toast.present();
  }

  public newDriver(){
    let data = this.myForm.value as Driver;
    data = {enabled:true,...data}    
    this.driverService.createDriver(data).subscribe(res=>{
      console.log(res);
    })
    
  }
}
