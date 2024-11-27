import { Component ,OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';7
import { ResultatCand } from '../resultat-cand';
import { ResultatParBVService } from '../resultat-par-bv.service';


@Component({
  selector: 'app-resulta-par-bureau',
  templateUrl: './resulta-par-bureau.component.html',
  styleUrls: ['./resulta-par-bureau.component.css']
})
export class ResultaParBureauComponent implements OnInit {
  status = false;
  resultatParCodeListeCand: any[] = [];
  totalVotesParCandidat: any[] = [];

  constructor(private resultatParCandService: ResultatParBVService) {}

  ngOnInit(): void {
    this.getResultatParCodeListeCand();
  }

  getResultatParCodeListeCand() {
    this.resultatParCandService.getResultatParCodeListeCand().subscribe(
      (data: any) => {
        this.resultatParCodeListeCand = data.resultatParCodeListeCand;
        this.calculateTotalVotesParCandidat();
      },
      error => {
        console.error('Erreur lors de la récupération des données : ', error);
      }
    );
  }

  calculateTotalVotesParCandidat() {
    this.totalVotesParCandidat = this.resultatParCodeListeCand.reduce((acc, item) => {
      if (!acc[item.idcand]) {
        acc[item.idcand] = {
          idcand: item.idcand,
          totalVotes: 0,
          code_Elec: item.code_Elec, // Ajoutez cette ligne pour inclure code_Elec
          date_Elec: item.date_Elec, // Ajoutez cette ligne pour inclure date_Elec
        };
      }
      acc[item.idcand].totalVotes += item.totalVotes;
      return acc;
    }, {});

    this.totalVotesParCandidat = Object.values(this.totalVotesParCandidat);
  }
}