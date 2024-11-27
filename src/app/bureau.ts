export class Bureau {
    public idBV: number;
    public salleBV: string;
    public nbElecInscri: number;
    public nbVotant: number;
    public nbVoteBl: number;
    public nbVoteNul: number;
    public suffrageExprime: number;
    public code_Fokt: string;
        public nomFokt: string;
        public nomComm: string;
        public nomDistr: string;
        public nomReg: string;
        public code_Comm: string;
        public code_Distr: string;
        public centreBV: string;
       
       
       
   
    constructor(idBV: number, salleBV: string, nbElecInscri: number, nbVotant: number, nbVoteBl: number, nbVoteNul: number, suffrageExprime: number,code_Fokt: string,nomFokt: string,nomComm: string,nomDistr: string,nomReg: string,code_Comm: string,code_Distr: string, centreBV: string) {
        this.idBV = idBV;
        this.salleBV = salleBV;
        this.nbElecInscri = nbElecInscri;
        this.nbVotant = nbVotant;
        this.nbVoteBl = nbVoteBl;
        this.nbVoteNul = nbVoteNul;
        this.suffrageExprime = suffrageExprime;
        this.code_Fokt = code_Fokt;
        this.nomFokt = nomFokt;
        this.nomComm = nomComm;
        this.nomDistr = nomDistr;
        this.nomReg = nomReg;
        this.code_Comm = code_Comm;
        this.code_Distr = code_Distr;
        this.centreBV = centreBV;
       
      
        }

}
