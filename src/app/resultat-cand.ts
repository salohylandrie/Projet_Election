export class ResultatCand {
    public idres: number;
    public idBV: number;
    public code_ListeCand: string;
    public idcand: number;
    public numCand: number;
    public nomCand: string;
    public prenomCand: string;
    public nombreVote: number;
    public code_Fokt: string;
    public nomFokt: string;
    public nomComm: string;
    public salleBV: string;
    public totalVotes: number;
     
    public date_Elec: Date;
    public code_Elec: string;
    
    constructor(idres: number,idBV: number,code_ListeCand:string,idcand:number,numCand:number,nomCand:string,prenomCand:string,nombreVote:number,code_Fokt:string,nomFokt:string,nomComm:string,salleBV:string,totalVotes:number,date_Elec: Date,code_Elec: string) {
    this.idres = idres;
    this.idBV = idBV;
    this.code_ListeCand = code_ListeCand;
    this.idcand = idcand;
    this.numCand = numCand;
    this.nomCand = nomCand;
    this.prenomCand = prenomCand;
    this.nombreVote = nombreVote;
    this.code_Fokt = code_Fokt;
    this.nomFokt = nomFokt;
    this.nomComm = nomComm;
    this.salleBV = salleBV;
    this.totalVotes = totalVotes;
    this.date_Elec = date_Elec;
    this.code_Elec = code_Elec;
    
    }
}
