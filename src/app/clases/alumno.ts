
export class Alumno {
    public dni: number=0;
    public nombre: string='';
    public apellido: string='';
    public sigla: string =''; 
    public foto: string =''; 

    

    constructor(dni:number,nombre:string,apellido:string,sigla:string,foto:string){

        this.dni=dni;    
        this.nombre=nombre;
        this.apellido=apellido;
        this.sigla=sigla;
        this.foto=foto;

    }  
}
