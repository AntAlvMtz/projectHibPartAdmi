import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.page.html',
  styleUrls: ['./view-driver.page.scss'],
})
export class ViewDriverPage implements OnInit {

  public driver:Driver
  public photo:string

  constructor(private router: Router,
    private aroute:ActivatedRoute,
    private driverService:DriverService) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe((params)=>{
      const data ={id:params['_id']};
      console.log(22,data);      
      this.driverService.getOneDriver(data).subscribe(res=>{     
      
          this.driver = res as Driver;      
          
      })
      this.photo = 'https://i.stack.imgur.com/l60Hf.png';
      
    });
  }

  public editDriver(){

  }
}
