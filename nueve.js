class uno{
    suma(){
        console.log (`Sumar dos numeros siempre cuando el primero sea mayor al segundo`)
        
        let num1=Math.floor(Math.random()*10)
        let num2=Math.floor(Math.random()*10)
        
        if (num1 > num2) {
            let suma = num1 + num2;
            console.log (`${num1} + ${num2} = ${suma}`);
        } else{
            console.log ("Error: El primer número debe ser mayor al segundo")
         }
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let uno1 = new uno()
// uno1.suma()


class dos{
    operador(){
        console.log("Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y residuo")

        let n1, n2, suma, resta, multiplicacion, division, residuo
        let ops="+", opr="-", opm="*",opd="/", oprs="%";
        n1=0, n2=0, suma=0, resta=0, multiplicacion=0, division=1, residuo=0;
        n1=10
        n2=2
        suma=n1+n2
        resta=n1-n2
        multiplicacion=n1*n2
        division=n1/n2
        residuo=n1%n2

        console.log("La suma de",n1,ops,n2,"=",suma)
        console.log("La resta de",n1,opr,n2,"=",resta)
        console.log("La multiplicacion de", n1,opm,n2,"=",multiplicacion)
        console.log("La division de", n1,opd,n2,"=",division)
        console.log("El residuo", n1,oprs,n2,"=",residuo)
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let dos1 = new dos()
// dos1.operador()

class tres{
    mayordedosnumeros(){
        console.log (`Presentar el mayor de dos numeros`)
        
        let num1=Math.floor(Math.random()*100)
        let num2=Math.floor(Math.random()*100)
        
        if (num1>num2){
            console.log (`${num1} es mayor a ${num2}`)
        }else{
            console.log (`${num2} es mayor a ${num1}`)
        }
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let tres1 = new tres()
// tres1.mayordedosnumeros()

class cuatro{
    nombre(){
        console.log ("Dado un nombre presentarlo")

        let nombre="Luis"

        console.log (" Nombre es =", nombre)
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let cuatro1 = new cuatro()
// cuatro1.nombre()

class cinco{
    iva(){
        console.log (`Dado un valor de compra presentar el total considerando un 12% de iva`)
        
        let compra = Math.floor(Math.random()*100)
         let iva = compra * 0.12
         let total = compra+iva
         
         console.log (`El total de su compra incluyendo el iva del 12% es: ${total} $`)
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let cinco1 = new cinco()
// cinco1.iva()

class seis{
    nombrecincoveces(){
        console.log ("Presentar 5 veces un nombre")
        let nombre
        nombre="Ana"

        for(let i=1; i<=5; i++){
            console.log (nombre)
        }
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let seis1 = new seis()
// seis1.nombrecincoveces()

class siete{
    multiplosdetres(){
        console.log (`Presentar los numeros multiplos de 3 del 3 al 21`)

        let multiplosde3 = ""

        for (let i=3; i<=21; i++){
            if (i % 3 === 0){
                multiplosde3 += i + " "
            }
        }

        console.log (`Los multiplos de 3 del 3 al 21 son: ${multiplosde3}`)
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let siete1 = new siete()
// siete1.multiplosdetres()

class ocho{
    multiplosde3menorando(){
        console.log ("Presentar los numeros multiplos de 3 del 21 al 3")

        let multiplosde3 = ""
        
        for (let i=21; i>=3; i--){
            if(i%3 === 0){
                multiplosde3 += i + " "
            }
        }
        console.log (`Los multiplos de 3 del 21 al 3 son: ${multiplosde3}`)
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let ocho1 = new ocho()
// ocho1.multiplosde3menorando()

class nueve{
    nombreiguales(){
        console.log (`Dados dos nombres indicar si son iguales o diferentes`)

        let nombre1 = 'sofia'
        let nombre2 = 'sofia'


        if (nombre1===nombre2){
            console.log (`Los dos nombres ingresados son iguales`)
        }else{
            console.log (`Los dos nombres ingresados son diferentes`)
        }
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let nueve1 = new nueve()
// nueve1.nombreiguales()

class diez{
    arreglodediez(){
        console.log ("Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres")

        let numeros = ["43565","345434","125","123456","12","2","122","1","9","434355"]

        for(let pos=0; pos<10; pos++){
            if(numeros[pos].length<5){
                console.log("Los numeros con menos de 5 caracteres son:",pos,numeros[pos])
            }
        }
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let diez1 = new diez()
// diez1.arreglodediez()

class once{
    presentararreglo(){
        console.log (`Dado un arreglo presentar sus elementos`)

        let arreglo = [10,5,6,3,2]

        for (let i=0; i<arreglo.length; i++){
            console.log (arreglo[i])
        }
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let once1 = new once()
// once1.presentararreglo()

class doce{
    arreglomenoresa10(){
        console.log ("Dado un arreglo de numeros presentar los menores a 10")

        const arreglo = [12, 4, 4, 3, 34, 9, 6, 7]
        const numerosMenoresQue10 = arreglo.filter(numero => numero < 10)

        console.log ("Los numeros menores de 10 son:", numerosMenoresQue10)
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let doce1 = new doce()
// doce1.arreglomenoresa10()

class trece{
    presentarimparesysumadeparesdeunarreglo(){
        console.log (`Dado un arreglo de numeros presentar los impares y al final la suma de los pares`)

        let numeros = [10, 5, 20, 2, 7]
        let suma=0

        for (let i=0; i< numeros.length; i++){
            if (numeros[i] % 2 === 0){
                suma+=numeros[i]
            }else{
                console.log (numeros[i])
            }
        }
        console.log (`La suma de los pares es=${suma}`)
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let trece1 = new trece()
// trece1.presentarimparesysumadeparesdeunarreglo()

class catorce{
    primeromedioultimo(){
        console.log ("Presentar el primero el medio y el ultimo valor de un arreglo")

        const arreglo=[5,7,10,15,21,23,25]
        const longitud = arreglo.longth

        const primerValor = arreglo[0]
        const valorMedio = arreglo[Math.floor(arreglo.length / 2)]
        const ultimoValor = arreglo[arreglo.length - 1]
        

        console.log("Primer valor:", primerValor)
        console.log("valor medio:", valorMedio)
        console.log("ultimo valor:", ultimoValor)
        
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let catorce1 = new catorce()
// catorce1.primeromedioultimo()

class quince{
    vuelto(){
        console.log (`Calcular el vuelto de un a compra dado el costo y el pago`)

        let compra = 56
        let pago = 70
        let vuelto = pago-compra

        if (compra===pago){
            console.log (`No hay vuelto`)
        }else{
            console.log (`El costo de su compra es: ${compra}$, el pago fue de: ${pago}$ y su vuelto es de: ${vuelto} $`)
        }
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let quince1 = new quince()
// quince1.vuelto()

class dieciseis{
    tablademultiplicar(){
        console.log ("Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
        
        let numero, i
        numero=5

        for(let i=1; i <= 12; i++){
            const resultado = i * numero;
            console.log (numero, "x", i, "=", resultado)
        }
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let dieciseis1 = new dieciseis()
// dieciseis1.tablademultiplicar()

class diecisiete{
    multiplicaciondesumas(){
        console.log (`Realizar la multiplicacion de dos numeros por medio de sumas sucesivas`)

        let num1=Math.floor(Math.random()*10)
        let num2=Math.floor(Math.random()*10)
        let acu=0

        for (let i=1; i <= num1 ;i++){
            acu=acu+num2
        }
        console.log (`El resultado de ${num1}*${num2}= ${acu}`)
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let diecisiete1 = new diecisiete()
// diecisiete1.multiplicaciondesumas()

class dieciocho{
    divisionrestas(){
        console.log ("Realizar la division de dos numeros por medio de restas sucesivas")

        let n1=10,n2=2
        let c=0
        let res=n1
        while (res-n2>=0){
            res=res-n2
            console.log(res+n2,"-",n2,"=",res)
            c++
        }
        console.log ("La division entre:",n1,"/",n2,"=",c)
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let dieciocho1 = new dieciocho()
// dieciocho1.divisionrestas()

class diecinueve{
    factorial(){
        console.log (`Calcular el factorial de un numero`)

        let num = Math.floor(Math.random()*10)
        let factorial=1

        for (let i=1; i <= num; i++){
            factorial=factorial*i
        }
        console.log (`El factorial de ${num} es: ${factorial}`)
    }
}
// //instarcia una variable que contiene todos los metodos de la clase
// let diecinueve1 = new diecinueve()
// diecinueve1.factorial()

class veinte{
    exponente(){
        console.log ("Calcular el exponente de un numero")

        let n=2,ex=3
        let elevado= Math.pow(n, ex)

        console.log("2"," ^",ex,"=",elevado)
    }
}
// //instarcia una variable que contiene todos los metodos de la clase
// let veinte1 = new veinte()
// veinte1.exponente()

class veintiuno{
    fibonacci(){
        console.log (`Calcular la serie de fibonacci dado un numero`)
        let num = Math.floor(Math.random()*10)
        let a=1
        let b=0
        let c=0

        for (let i=1; i<=num; i++){
            console.log (`${c} `)
            c=a+b
            a=b
            b=c
        }
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let veintiuno1 = new veintiuno()
// veintiuno1.fibonacci()

class veintidos{
    invertirnumero(){
        console.log ("Dado un numero invertirlo")

        let numero=23456, digito

        console.log ("El numero es:", numero)

        while(numero>0){
            digito=Math.floor(numero%10)
            numero=Math.floor(numero/10)
            console.log(digito)
        }
    }
}
//instarcia una variable que contiene todos los metodos de la clase
// let veintidos1 = new veintidos()
// veintidos1.invertirnumero()

class veintitres{
    divisoresdeunnumero(){
        console.log (`Presentar los divisores de un numero`)

        let num = Math.floor(Math.random()*10)

        for (let i=1; i<=num; i++){
            if (num % i === 0){
                console.log (`Los divisores de ${num} es: ${i}`)
            }
        }
    }
}
// //instarcia una variable que contiene todos los metodos de la clase
// let veintitres1 = new veintitres()
// veintitres1.divisoresdeunnumero()

class veinticuatro{
    numeroperfecto(){
        console.log ("Presentar si un numero es perfecto o no")

        let num=6, sumaperf=0

        for(let i=1; i<num; i++){
            if(num % i === 0){
                console.log(i)
                sumaperf=sumaperf+i
            }
        }

        console.log("")

        if(sumaperf==num){
            console.log (`${num} Es un numero perfecto`)
        }else{
            console.log (`${num} Es un numero no perfecto`)
        }
    }
}
// //instarcia una variable que contiene todos los metodos de la clase
// let veinticuatro1 = new veinticuatro()
// veinticuatro1.numeroperfecto()

class veinticinco{
    primo(){
        console.log (`Verfificar si un numero es primo o no`)

        let num = Math.floor(Math.random()*10)
        let numeroprimo = true

        for (let i=2; i<num; i++){
         if (num % i == 0){
            numeroprimo = false
         }
        }

        if (numeroprimo==true){
            console.log (`${num} es primo`)
        }else{
            console.log (`${num} no es primo`)
        }
    }
}
// //instarcia una variable que contiene todos los metodos de la clase
// let veinticinco1 = new veinticinco()
// veinticinco1.primo()