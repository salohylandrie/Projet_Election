export class Users {
    public id: number;
    public username: string;
    public password:string;
    public fokotany:string;
    public commune:string;
    public district:string;
    public prefecture:string;
   
    
    constructor(id:number,username:string,password:string,fokotany:string,commune:string,district:string,prefecture:string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.fokotany = fokotany;
    this.commune = commune;
    this.district = district;
    this.prefecture = prefecture;
    }
    }
    


    