export class Electeur {
    public idcand: number;
    public numCand: number;
    public nomCand: string;
    public prenomCand: string;
    public code_ListeCand: string;
    public nomListe: string;
    
   
   
    constructor(idcand: number, numCand: number, nomCand: string, prenomCand: string, code_ListeCand: string, nomListe: string) {
        this.idcand = idcand;
        this.numCand = numCand;
        this.nomCand = nomCand;
        this.prenomCand = prenomCand;
        this.code_ListeCand = code_ListeCand;
        this.nomListe = nomListe;
       
        }
}

