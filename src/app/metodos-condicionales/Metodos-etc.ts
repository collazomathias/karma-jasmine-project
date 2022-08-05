
export class MetodosCondicionales {

  public var1: boolean = true;
  public var2: boolean = true;
  public var3: boolean = true;
  public contador: number = 0;

  constructor() {
  }

   /**
    * Para divertirse escribiendo codigo cochino :3
    */

   public llegarA3(): string {
    this.contador = this.contador + 1;
    if(this.contador < 3)
      return "El contador no ha llegado al número 3.";
    else if(this.contador > 3)
      return "El contador ha superado el número 3.";
    return "El contador ha llegado al número 3.";
   }


   public esPalindromo(pal: string): boolean {
    const arr = pal.trim().toLowerCase().split("");
    const reverseArr = arr.reverse();
    const reversePal = reverseArr.join("");
    if(pal.trim().toLowerCase() == reversePal) return true;
    return false;
   }

   public condicionalesAnidadas(): string {
    if(this.var1) {
      if(this.var2) {
        if(this.var3) return "Las variables 1, 2 y 3 son verdaderas.";
        return "Las variables 1 y 2 son verdaderas, y la 3 es falsa.";
      }
      return "La variable 1 es verdadera, y las variables 2 y 3 son falsas.";
    }
    if(this.var2) {
      if(this.var3) return "Las variables 2 y 3 son verdaderas, y la variable 1 es falsa."
      return "La variable 2 es verdadera, y las variables 1 y 3 son falsas.";
    }
    if(this.var3) return "La variable 3 es verdadera, y las variables 1 y 2 son falsas.";
    return "Todas las variables son falsas.";
   }

}
