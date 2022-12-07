import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Route } from 'src/app/models/route';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-view-route',
  templateUrl: './view-route.page.html',
  styleUrls: ['./view-route.page.scss'],
})
export class ViewRoutePage implements OnInit {

  public routes:Route[]

  constructor(private router: Router,
    private alertController:AlertController,
    private routeService:RouteService) {
      routeService.getRoutes().subscribe(res=>{
        this.routes = res;
      });
     }

  ngOnInit() {
  }

  public async createRoute() {     
      const alert = await this.alertController.create({
        header: 'Ingrese la nueva ruta',
        buttons: [{
          text: 'Agregar',
          handler: data =>{
              let route:Route = {name:data[0]}
                 
              this.routeService.createRoute(route).subscribe(res=>{
                this.routeService.getRoutes().subscribe(res=>{
                  this.routes = res;
                });   
              })
          }
      }],
        inputs: [
          {value:'Progreso 3',
            placeholder: 'Nombre',          
            attributes: {
              minlength: 5,
            },
          },
        ],
      });
  
      await alert.present();
    }

}
