export interface Product{
  //la interface es una forma de indicar cuales son los atributos que deberia tener un objeto
  //importante coloar la palabra clave export
  name : string;
  price : number;
  image : string;
  //?: indica que es opcional, puede venir o no
  category?:string;

}
