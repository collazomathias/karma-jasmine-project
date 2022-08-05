import { MetodosCondicionales } from './Metodos-etc';


describe('Probando métodos con condicionales', () => {
    let component: MetodosCondicionales;
    beforeEach(() => {
        component = new MetodosCondicionales();
    });

    it('Probando condicional que muestra si el contador llega a 3', () => {
        const resultado = component.llegarA3();
        expect(resultado).toBe("El contador no ha llegado al número 3.");
        const resultado2 = component.llegarA3();
        expect(resultado2).toBe("El contador no ha llegado al número 3.");
        const resultado3 = component.llegarA3();
        expect(resultado3).toBe("El contador ha llegado al número 3.");
        const resultado4 = component.llegarA3();
        expect(resultado4).toBe("El contador ha superado el número 3.");
    });

    it('Probando argumento palíndromo', () => {
        const palindromo = "somosonosomos";
        const noPalindromo = "Hola";
        const resultado1 = component.esPalindromo(palindromo);
        expect(resultado1).toBeTruthy();
        const resultado2 = component.esPalindromo(noPalindromo);
        expect(resultado2).toBeFalsy();
    });

    it('Probando condicionales anidadas', () => {
        const resultado = component.condicionalesAnidadas();
        expect(resultado).toEqual("Las variables 1, 2 y 3 son verdaderas.");
        component.var3 = false;
        const resultado2 = component.condicionalesAnidadas();
        expect(resultado2).toEqual("Las variables 1 y 2 son verdaderas, y la 3 es falsa.");
        component.var2 = false;
        const resultado3 = component.condicionalesAnidadas();
        expect(resultado3).toEqual("La variable 1 es verdadera, y las variables 2 y 3 son falsas.");
        component.var1 = false;
        component.var2 = true;
        component.var3 = true;
        const resultado4 = component.condicionalesAnidadas();
        expect(resultado4).toEqual("Las variables 2 y 3 son verdaderas, y la variable 1 es falsa.");
        component.var3 = false;
        const resultado5 = component.condicionalesAnidadas();
        expect(resultado5).toEqual("La variable 2 es verdadera, y las variables 1 y 3 son falsas.");
        component.var2 = false;
        component.var3 = true;
        const resultado6 = component.condicionalesAnidadas();
        expect(resultado6).toEqual("La variable 3 es verdadera, y las variables 1 y 2 son falsas.");
        component.var3 = false;
        const resultado7 = component.condicionalesAnidadas();
        expect(resultado7).toEqual("Todas las variables son falsas.");
    });


});