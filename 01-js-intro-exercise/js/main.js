
// ejercicios de nivelacion

/*
Práctica 1:

Crear un función que permita indicar la cantidad de koders a guardar, 
que pida tantos nombres completos de koders como
se haya indicado, y al finl imprima el nombre del koder y 
su numero asignado

p. eje

input: "Fernanda Palacios Vera", "Jonatan Arevalo Hernandez", "Victor Torres Jimenez"
Output: 
   koder 1: "Fernanda"
   koder 2: "Jonatan"
   koder 3: "Victor"
*/


/*
A partir de la práctica anterior:
Crear un función que me permita saber el nombre de algun koder basado en su número asignado

- imprimir la lista de koders en orden alfabetico descendiente
- Crear una nueva lista que contenga los nombre de los koders con la siguiente estrucutura
   [
       "Koder 1: Fernanda Palacios Vera (F. P V.)"
   ]

- Permitir agregar un koder en alguna posicion deseada, por ejemplo: "Fanny Lopez, lugar 3"
*/


/*
Ejercicio
   Dado como siguiente estructura de arreglo:
   let namesArray = [
       'Jonatan Arevalo',
       'Fernanda Palacios',
       'Victor Torres'
   ]


   1 Funcion que me regrese un numero aleatorio desde 0 hasta array.length

   2 Funcion que reciba el un indice aleatorio para imprimir el nombre de un arreglo
*/


// Dado la siguiente estructura

let dataArray = [
    ["Fernanda", "Palacios"],
    ["Victor", "Torres"],
    ["Jonatan", "Arevalo"]
]

/*

kodersArray = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    ....,
    {
        name: "Victor",
        lastName: "Torres"
    }
]

*/



/*
Dado el siguiente array realizar lo siguiente:
- Obtener el score promedio de cada materia (HTML, CSS, js)
- Obtener el promedio individual de cada mentor
- Crear un array de string con la siguiente forma:
    "Mi nombre es {nombre}  y mi promedio es de {promedio}"
- Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

let kodersArray = [
    {
        name: "Jonatan Arevalo",
        scores: [
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 9
            }
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 9
            }
        ]
    },
    {
        name: "Víctor Torres",
        scores: [
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 8
            },
            {
                signature: "JS",
                score: 10
            }
        ]
    },
    {
        name: "Jose López",
        scores: [
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 8
            },
            {
                signature: "JS",
                score: 10
            }
        ]
    },
    {
        name: "Reyna López",
        scores: [
            {
                signature: "HTML",
                score: 10
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 9
            }
        ]
    }
]


