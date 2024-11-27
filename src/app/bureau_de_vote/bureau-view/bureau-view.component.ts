import { Component,OnInit } from '@angular/core';
import { Bureau } from 'src/app/bureau';
import {BureauServiceService} from 'src/app/bureau-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bureau-view',
  templateUrl: './bureau-view.component.html',
  styleUrls: ['./bureau-view.component.css']
})
export class BureauViewComponent implements OnInit {
  bureau: Bureau; 

  constructor(private route: ActivatedRoute, private bureauServiceService: BureauServiceService) { }

  ngOnInit() {
    // Récupérer l'ID de l'électeur depuis l'URL
    this.route.params.subscribe(params => {
      const idcand = +params['id']; 
      this.loadBureauDetails(idcand);
    });
  }
  
  loadBureauDetails(idcand: number) {
    this.bureauServiceService.getBureauDetails(idcand).subscribe((bureau: Bureau) => {
      this.bureau = bureau;
    });




}

}
