import React, { createContext, useState } from "react";
export const Contexto = createContext();
export const Datos = ({ children }) => {
  const listaTemas = [
    "Vectores",
    "Cinemática",
    "Dinámica",
    // "Trabajo y Energía",
  ];
  const listaSubTemas = [
    [
      "El triangulo rectángulo",
      "Definición y Representación",
      "Operaciones con vectores",
    ],
    ["Generalidades", "Movimiento unidimensional", "Movimiento de proyectil"],
    ["Concepto de Fuerza", "Leyes de Newton", "Diagrama de cuerpo libre"],
  ];
  const listaTeoria = [
    [
      [
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/W5HzA_4fVSI"
          title="1-Tutorías - Vectores"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
      ],
      [
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/W5HzA_4fVSI"
          title="1-Tutorías - Vectores"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
      ],
      [
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/W5HzA_4fVSI"
          title="1-Tutorías - Vectores"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
      ],
    ],
    [
      [
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/PYVPnsqhk6Y"
          title="2-Tutorías - Cinemática"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
      ],
      [
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/PYVPnsqhk6Y"
          title="2-Tutorías - Cinemática"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
      ],
      [
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/PYVPnsqhk6Y"
          title="2-Tutorías - Cinemática"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
      ],
    ],
    [
      [
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/UkPW5x-JBwg"
          title="3-Tutorías - Dinámica"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
      ],
      [
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/UkPW5x-JBwg"
          title="3-Tutorías - Dinámica"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
      ],
      [
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/UkPW5x-JBwg"
          title="3-Tutorías - Dinámica"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>,
      ],
    ],
  ];
  const listaPreguntasVF = [
    // Tema1
    [
      // Subtemas
      [
        [
          <span>
            El seno de un ángulo en un triángulo rectángulo es igual a la
            longitud del cateto opuesto dividida por la hipotenusa.
          </span>,
          "verdadero",
          <span>
            El seno (sin) de un ángulo en un triángulo rectángulo se define como
            la razón entre la longitud del cateto opuesto y la hipotenusa.
          </span>,
        ],
        [
          <span>
            El coseno de un ángulo en un triángulo rectángulo es igual a la
            longitud del cateto opuesto dividida por la hipotenusa.
          </span>,
          "falso",
          <span>
            El coseno (cos) de un ángulo es la razón entre la longitud del
            cateto adyacente y la hipotenusa.
          </span>,
        ],
        [
          <span>
            La tangente de un ángulo en un triángulo rectángulo es igual a la
            longitud del cateto opuesto dividida por el cateto adyacente.
          </span>,
          "verdadero",
          <span>
            La tangente (tan) de un ángulo se define como la razón entre el
            cateto opuesto y el cateto adyacente.
          </span>,
        ],
        [
          <span>
            El teorema de Pitágoras se aplica solo a triángulos equiláteros.
          </span>,
          "falso",
          <span>
            El teorema de Pitágoras se aplica exclusivamente a triángulos
            rectángulos, donde un ángulo es de 90 grados.
          </span>,
        ],
        [
          <span>
            En un triángulo rectángulo, la suma de los cuadrados de los catetos
            es igual al cuadrado de la hipotenusa.
          </span>,
          "verdadero",
          <span>
            Esta es la declaración del teorema de Pitágoras: a <sup>2</sup> + b
            <sup>2</sup> = c <sup>2</sup>, donde a y b son los catetos y c la
            hipotenusa.
          </span>,
        ],
        [
          <span>El coseno de 45 grados es igual a √(2) /2.</span>,
          "verdadero",
          <span>
            Para un ángulo de 45 grados en un triángulo rectángulo, el coseno es
            √(2) /2.
          </span>,
        ],
        [
          <span>La tangente de 90 grados está definida.</span>,
          "falso",
          <span>
            La tangente de 90 grados no está definida, ya que implica división
            por cero.
          </span>,
        ],
        [
          <span>
            En un triángulo rectángulo, si los catetos miden 3 y 4 unidades, la
            hipotenusa mide 5 unidades.
          </span>,
          "verdadero",
          <span>
            Según el teorema de Pitágoras: 3<sup>2</sup> + 4<sup>2</sup> = 5
            <sup>2</sup>.
          </span>,
        ],
        [
          <span>El seno de 30 grados es igual a 0.5.</span>,
          "verdadero",
          <span>El seno de 30 grados (sin 30º) es igual a 0.5.</span>,
        ],
        [
          <span>El coseno de un ángulo agudo siempre es negativo.</span>,
          "falso",
          <span>
            El coseno de un ángulo agudo (menor de 90 grados) siempre es
            positivo.
          </span>,
        ],
        [
          <span>La tangente de un ángulo de 45 grados es igual a 1.</span>,
          "verdadero",
          <span>
            La tangente de 45 grados es 1, ya que tan(45º) = (opuesto /
            adyacente ) = 1.
          </span>,
        ],
        [
          <span>
            Si la hipotenusa y un cateto de un triángulo rectángulo son iguales,
            el ángulo opuesto al cateto es de 45 grados.
          </span>,
          "verdadero",
          <span>
            En un triángulo rectángulo isósceles, los ángulos opuestos a los
            catetos iguales son ambos de 45 grados.
          </span>,
        ],
        [
          <span>
            En un triángulo rectángulo, el seno de un ángulo es igual al coseno
            del ángulo complementario.
          </span>,
          "verdadero",
          <span>
            El seno de un ángulo es igual al coseno de su complemento (90º -
            ángulo).
          </span>,
        ],
        [
          <span>El coseno de 0 grados es 1.</span>,
          "verdadero",
          <span>El coseno de 0 grados (cos 0º) es igual a 1.</span>,
        ],
        [
          <span>
            La suma de los ángulos interiores de un triángulo siempre es 180
            grados.
          </span>,
          "verdadero",
          <span>
            La suma de los ángulos interiores de cualquier triángulo es siempre
            180 grados.
          </span>,
        ],
        [
          <span>
            En un triángulo rectángulo, la secante de un ángulo es el inverso
            del seno de ese ángulo.
          </span>,
          "falso",
          <span>La secante (sec) es el inverso del coseno, no del seno.</span>,
        ],
        [
          <span>
            La cotangente de un ángulo es igual a 1 dividido por la tangente de
            ese ángulo.
          </span>,
          "verdadero",
          <span>
            La cotangente (cot) es el recíproco de la tangente: cot𝜃 = 1 / tan𝜃
            .
          </span>,
        ],
        [
          <span>
            La hipotenusa es siempre el lado más largo en un triángulo
            rectángulo.
          </span>,
          "verdadero",
          <span>
            En un triángulo rectángulo, la hipotenusa es el lado opuesto al
            ángulo recto y es siempre el más largo.
          </span>,
        ],
        [
          <span>La tangente de un ángulo es indefinida para 0 grados.</span>,
          "falso",
          <span>La tangente de 0 grados es 0.</span>,
        ],
        [
          <span>
            En trigonometría, las relaciones seno, coseno y tangente solo se
            aplican a triángulos rectángulos.
          </span>,
          "verdadero",
          <span>
            Las razones trigonométricas básicas (seno, coseno y tangente) se
            definen específicamente en el contexto de triángulos rectángulos.
          </span>,
        ],
      ],
      [
        [
          <span>
            Un vector es una cantidad que tiene magnitud y dirección.
          </span>,
          "verdadero",
          <span>
            Los vectores se definen por tener ambas características: magnitud
            (tamaño) y dirección.
          </span>,
        ],
        [
          <span>
            Un vector se puede representar gráficamente como una línea recta que
            conecta dos puntos.
          </span>,
          "verdadero",
          <span>
            Gráficamente, los vectores se representan como segmentos de línea
            con una flecha indicando la dirección.
          </span>,
        ],
        [
          <span>
            El punto de origen de un vector se llama cabeza del vector.
          </span>,
          "falso",
          <span>
            El punto de origen de un vector se llama origen o cola, mientras que
            el punto final se llama cabeza o punta.
          </span>,
        ],
        [
          <span>
            Dos vectores son iguales si tienen la misma magnitud, sin importar
            su dirección.
          </span>,
          "falso",
          <span>
            Dos vectores son iguales solo si tienen la misma magnitud y la misma
            dirección.
          </span>,
        ],
        [
          <span>
            La magnitud de un vector se calcula como la raíz cuadrada de la suma
            de los cuadrados de sus componentes.
          </span>,
          "verdadero",
          <span>
            La magnitud de un vector <i>v</i> = (<i>v</i>
            <sub>x</sub>,<i>v</i>
            <sub>y</sub>) se calcula como |<i>v</i>|= √(<i>v</i>
            <sub>x</sub>
            <sup>2</sup> + <i>v</i>
            <sub>y</sub>
            <sup>2</sup>).
          </span>,
        ],
        [
          <span>Un vector unitario es un vector con magnitud igual a uno</span>,
          "verdadero",
          <span>
            Los vectores unitarios tienen una magnitud de uno y se utilizan para
            indicar dirección.
          </span>,
        ],
        [
          <span>
            La suma de dos vectores se obtiene sumando sus componentes
            correspondientes.
          </span>,
          "verdadero",
          <span>
            La suma de dos vectores <i>a</i>=(<i>a</i>
            <sub>x</sub>,<i>a</i>
            <sub>y</sub>) y <i>b</i>=(<i>b</i>
            <sub>x</sub>,<i>b</i>
            <sub>y</sub>) es <i>a</i> + <i>b</i> = (<i>a</i>
            <sub>x</sub> + <i>b</i>
            <sub>x</sub> ,<i>a</i>
            <sub>y</sub> + <i>b</i>
            <sub>y</sub>).
          </span>,
        ],
        [
          <span>
            La resta de dos vectores se obtiene restando sus componentes
            correspondientes.
          </span>,
          "verdadero",
          <span>
            La resta de dos vectores <i>a</i> y <i>b</i> es <i>a</i>-<i>b</i> =
            (<i>a</i>
            <sub>x</sub> - <i>b</i>
            <sub>x</sub> , <i>a</i>
            <sub>y</sub> - <i>b</i>
            <sub>y</sub>).
          </span>,
        ],
        [
          <span>El producto escalar de dos vectores es un vector.</span>,
          "falso",
          <span>
            El producto escalar (producto punto) de dos vectores es un número
            (escalar), no un vector.
          </span>,
        ],
        [
          <span>
            El producto vectorial de dos vectores en el espacio tridimensional
            es un vector perpendicular a ambos vectores originales.
          </span>,
          "verdadero",
          <span>
            El producto vectorial (producto cruz) de dos vectores resulta en un
            vector perpendicular a los dos vectores originales
          </span>,
        ],
        [
          <span>La magnitud de un vector no puede ser negativa.</span>,
          "verdadero",
          <span>
            La magnitud de un vector es siempre una cantidad positiva o cero.
          </span>,
        ],
        [
          <span>
            Los vectores paralelos tienen direcciones idénticas o exactamente
            opuestas.
          </span>,
          "verdadero",
          <span>
            Los vectores paralelos comparten la misma dirección o son colineales
            en direcciones opuestas.
          </span>,
        ],
        [
          <span>El vector nulo es un vector cuya magnitud es cero.</span>,
          "verdadero",
          <span>
            El vector nulo tiene magnitud cero y no tiene una dirección
            definida.
          </span>,
        ],
        [
          <span>
            Los vectores coplanares son aquellos que se encuentran en diferentes
            planos.
          </span>,
          "falso",
          <span>
            Los vectores coplanares son aquellos que se encuentran en el mismo
            plano.
          </span>,
        ],
        [
          <span>
            La representación gráfica de un vector en dos dimensiones incluye la
            dirección y el sentido del vector.
          </span>,
          "verdadero",
          <span>
            La representación gráfica de un vector incluye la línea recta con
            una flecha que indica la dirección y el sentido.
          </span>,
        ],
        [
          <span>
            En coordenadas cartesianas, un vector de posición r se puede
            representar como (x,y)
          </span>,
          "verdadero",
          <span>
            Un vector de posición r en dos dimensiones se representa como un par
            ordenado (x,y).
          </span>,
        ],
        [
          <span>
            La componente x de un vector se calcula multiplicando la magnitud
            del vector por el seno del ángulo que forma con el eje x.
          </span>,
          "falso",
          <span>
            La componente x se calcula multiplicando la magnitud del vector por
            el coseno del ángulo que forma con el eje x.
          </span>,
        ],
        [
          <span>
            Dos vectores son ortogonales si su producto escalar es igual a cero.
          </span>,
          "verdadero",
          <span>
            Si el producto escalar de dos vectores es cero, los vectores son
            ortogonales (perpendiculares).
          </span>,
        ],
        [
          <span>
            El vector unitario en la dirección del eje x se denota comúnmente
            como <i>î</i>.
          </span>,
          "verdadero",
          <span>
            El vector unitario en la dirección del eje x se representa como{" "}
            <i>î</i>.
          </span>,
        ],
        [
          <span>
            La suma de dos vectores ortogonales da como resultado un vector con
            una magnitud mayor que ambos vectores originales.
          </span>,
          "verdadero",
          <span>
            La suma de dos vectores perpendiculares resulta en un vector cuya
            magnitud es mayor que la magnitud de cualquiera de los dos vectores
            originales.
          </span>,
        ],
      ],
      [
        [
          <span>¿La suma de los vectores (2, 3) y (1, 4) es (3, 7)?</span>,
          "verdadero",
          <span>
            La suma de los vectores (2, 3) y (1, 4) se obtiene sumando sus
            componentes: (2 + 1, 3 + 4) = (3, 7).
          </span>,
        ],
        [
          <span>
            ¿El producto escalar de los vectores (1, 2) y (3, 4) es 11?
          </span>,
          "verdadero",
          <span>
            El producto escalar se calcula como 1 x 3 + 2 x 4 = 3 + 8 = 11.
          </span>,
        ],
        [
          <span>
            ¿El vector resultante de restar (4, 5) de (6, 7) es (2, 2)?
          </span>,
          "verdadero",
          <span>
            La resta de los vectores (6, 7) y (4, 5) es (6-4, 7-5) = (2, 2).
          </span>,
        ],
        [
          <span>
            ¿El producto escalar de dos vectores perpendiculares es siempre
            cero?
          </span>,
          "verdadero",
          <span>
            Si dos vectores son perpendiculares, su producto escalar es cero.
          </span>,
        ],
        [
          <span>¿La magnitud del vector (3, 4) es 5?</span>,
          "verdadero",
          <span>
            La magnitud se calcula como √(3<sup>2</sup> + 4<sup>2</sup>) = √(9 +
            16) = √25 = 5.
          </span>,
        ],
        [
          <span>¿El vector (2, 3) multiplicado por 2 es (4, 6)?</span>,
          "verdadero",
          <span>
            Multiplicar un vector por un escalar implica multiplicar cada
            componente del vector por el escalar: 2 x (2, 3) = (4, 6).
          </span>,
        ],
        [
          <span>
            ¿El producto vectorial de los vectores (1, 0, 0) y (0, 1, 0) es (0,
            0, 1)?
          </span>,
          "verdadero",
          <span>
            El producto vectorial se calcula y da como resultado un vector
            perpendicular a ambos: (0, 0, 1).
          </span>,
        ],
        [
          <span>
            ¿El producto escalar de los vectores (1, 0) y (0, 1) es 1?
          </span>,
          "falso",
          <span>
            El producto escalar de los vectores (1, 0) y (0, 1) es 0, ya que 1 x
            0 + 0 x 1 = 0.
          </span>,
        ],
        [
          <span>
            ¿El vector unitario en la dirección de (3, 4) es (0.6, 0.8)?
          </span>,
          "verdadero",
          <span>
            El vector unitario se obtiene dividiendo cada componente por la
            magnitud: (3/5, 4/5) = (0.6, 0.8).
          </span>,
        ],
        [
          <span>¿La suma de los vectores (0, 0) y (1, 1) es (1, 1)?</span>,
          "verdadero",
          <span>
            La suma de los vectores (0, 0) y (1, 1) es (0+1, 0+1) = (1, 1).
          </span>,
        ],
        [
          <span>
            ¿El producto escalar de los vectores (2, 3, 4) y (5, 6, 7) es 56?
          </span>,
          "falso",
          <span>
            El producto escalar es 2 x 5 + 3 x 6 + 4 x 7 = 10 + 18 + 28 = 56.
          </span>,
        ],
        [
          <span>
            ¿El producto vectorial de dos vectores colineales es siempre cero?
          </span>,
          "verdadero",
          <span>
            El producto vectorial de dos vectores colineales (paralelos) es
            cero.
          </span>,
        ],
        [
          <span>¿El vector (3, 4) es perpendicular al vector (4, -3)?</span>,
          "verdadero",
          <span>
            El producto escalar (3, 4) · (4, -3) es 3 x 4 + 4 x (-3) = 0, lo que
            indica que son perpendiculares.
          </span>,
        ],
        [
          <span>¿La magnitud del vector (1, 2, 2) es 3?</span>,
          "verdadero",
          <span>
            La magnitud se calcula como √(1<sup>2</sup> + 2<sup>2</sup> + 2
            <sup>2</sup>) = √(1 + 4 + 4) = √9 = 3.
          </span>,
        ],
        [
          <span>¿El vector opuesto de (5, -6) es (-5, 6)?</span>,
          "verdadero",
          <span>
            El vector opuesto se obtiene cambiando el signo de cada componente:
            (5, -6) &rarr; (-5, 6).
          </span>,
        ],
        [
          <span>¿La magnitud de un vector es siempre positiva?</span>,
          "verdadero",
          <span>
            La magnitud de un vector es siempre una cantidad no negativa.
          </span>,
        ],
        [
          <span>¿El vector (1, 1) es ortogonal al vector (1, -1)?</span>,
          "verdadero",
          <span>
            El producto escalar (1, 1) · (1, -1) es 1 x 1 + 1 x (-1) = 0, lo que
            indica que son ortogonales.
          </span>,
        ],
        [
          <span>¿El producto escalar de (2, 3) y (4, 6) es 26?</span>,
          "falso",
          <span>El producto escalar es 2 x 4 + 3 x 6 = 8 + 18 = 26.</span>,
        ],
        [
          <span>
            ¿El vector (7, 24) es un múltiplo escalar del vector (1, 2)?
          </span>,
          "falso",
          <span>
            El vector (7, 24) no es un múltiplo escalar exacto de (1, 2).
          </span>,
        ],
        [
          <span>
            ¿La proyección del vector (3, 4) en la dirección de (1, 0) es (3,
            0)?
          </span>,
          "verdadero",
          <span>
            La proyección del vector (3, 4) en la dirección del eje x es (3, 0).
          </span>,
        ],
      ],
    ],
    // Tema 2
    [
      // SubTemas
      [
        [
          <span>
            {" "}
            La cinemática se ocupa del estudio de los movimientos de los cuerpos
            sin considerar las causas que lo producen.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La cinemática analiza los movimientos de los cuerpos
            independientemente de las fuerzas que los causan.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En cinemática, la masa puntual se refiere a una suposición donde
            toda la masa del cuerpo se concentra en un solo punto.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La masa puntual es un concepto idealizado donde se considera que
            toda la masa de un objeto está en un único punto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La posición de una partícula en un sistema de coordenadas se
            describe mediante sus coordenadas espaciales.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La posición se determina a partir de las coordenadas espaciales (x,
            y, z) en un sistema de referencia.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            El desplazamiento de una partícula es la distancia total recorrida
            por ella durante su movimiento.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            El desplazamiento es una magnitud vectorial que representa el cambio
            de posición de una partícula, no la distancia total recorrida.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La velocidad media de una partícula se define como el desplazamiento
            dividido por el tiempo total.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La velocidad media se calcula dividiendo el desplazamiento por el
            tiempo total transcurrido.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La aceleración es una magnitud vectorial que indica la variación de
            la velocidad en el tiempo.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La aceleración mide el cambio de velocidad de una partícula a lo
            largo del tiempo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La trayectoria de una partícula es siempre una línea recta.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La trayectoria puede ser recta o curva, dependiendo del movimiento
            de la partícula.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La velocidad instantánea de una partícula es la rapidez con
            dirección en un instante específico de tiempo.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La velocidad instantánea describe la velocidad en un punto
            específico en el tiempo, incluyendo su dirección.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un movimiento rectilíneo uniformemente acelerado, la aceleración
            es constante.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            En este tipo de movimiento, la aceleración permanece constante a lo
            largo del tiempo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            El movimiento circular es un tipo de movimiento donde la partícula
            se desplaza en una trayectoria recta.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            El movimiento circular implica que la partícula se mueve en una
            trayectoria curva, siguiendo un círculo.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            En cinemática, se considera que un cuerpo está en reposo cuando su
            posición no cambia con respecto a un sistema de referencia.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Un cuerpo está en reposo si su posición es constante en relación con
            un punto de referencia.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La aceleración promedio de una partícula es la velocidad inicial
            dividida por el tiempo total.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La aceleración promedio se calcula como el cambio de velocidad
            dividido por el tiempo total.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En el modelo de masa puntual, se pueden ignorar las dimensiones
            físicas del objeto.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La masa puntual supone que las dimensiones del objeto no afectan a
            su análisis de movimiento.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            El vector posición de una partícula se representa gráficamente por
            una flecha que señala desde el origen hasta la posición de la
            partícula.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            El vector posición indica la ubicación de una partícula en relación
            con un punto de referencia.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La rapidez promedio de una partícula es siempre mayor o igual que la
            magnitud de su velocidad promedio.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La rapidez es un valor absoluto y no considera la dirección, por lo
            que puede ser mayor que la velocidad promedio.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La aceleración instantánea es el cambio de velocidad en un instante
            específico de tiempo.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La aceleración instantánea mide cómo varía la velocidad en un
            momento exacto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La masa puntual es un concepto útil en cinemática para simplificar
            problemas de análisis de movimiento.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Simplifica los cálculos al asumir que toda la masa del cuerpo está
            concentrada en un punto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un movimiento uniformemente acelerado, la velocidad de la
            partícula cambia de manera constante con el tiempo.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La velocidad aumenta o disminuye de forma constante en un movimiento
            uniformemente acelerado.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            El desplazamiento de una partícula es una cantidad escalar que sólo
            tiene magnitud.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            El desplazamiento es una magnitud vectorial que tiene tanto magnitud
            como dirección.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            La velocidad angular se refiere a la rapidez con la que una
            partícula se mueve a lo largo de una trayectoria circular.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La velocidad angular mide el cambio de ángulo por unidad de tiempo
            en un movimiento circular.{" "}
          </span>,
        ],
      ],
      [
        [
          <span>
            {" "}
            En un movimiento rectilíneo uniforme (MRU), la velocidad de la
            partícula es constante.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            En el MRU, la velocidad no cambia con el tiempo; la partícula se
            mueve con rapidez constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un MRUA, la aceleración de la partícula cambia a lo largo del
            tiempo.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            En un MRUA, la aceleración es constante, lo que significa que la
            velocidad cambia de manera uniforme con el tiempo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La ecuación de la posición para un MRU es x(t)=x<sub>0</sub>+
            <i>v</i>t, donde x<sub>0</sub> es la posición inicial y <i>v</i> la
            velocidad.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            En el MRU, la posición cambia linealmente con el tiempo, definida
            por la velocidad constante y la posición inicial.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un MRUA, la velocidad inicial de la partícula siempre es cero.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            En un MRUA, la velocidad inicial puede ser cualquier valor, y la
            aceleración constante influirá en su cambio a lo largo del tiempo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La ecuación de la velocidad en un MRUA es <i>v</i>(t)=<i>v</i>
            <sub>0</sub> + <i>a</i>t, donde <i>v</i>
            <sub>0</sub> es la velocidad inicial y <i>a</i> la aceleracion.
          </span>,
          "verdadero",
          <span>
            {" "}
            En el MRUA, la velocidad aumenta linealmente con el tiempo debido a
            la aceleración constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            El desplazamiento en un MRU se calcula mediante la fórmula d ={" "}
            <i>v</i>t.
          </span>,
          "verdadero",
          <span>
            {" "}
            En el MRU, el desplazamiento es producto de la velocidad constante y
            el tiempo transcurrido.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En cinemática 1D, el desplazamiento y la distancia recorrida son
            siempre iguales.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            El desplazamiento es una magnitud vectorial y puede ser diferente de
            la distancia recorrida, que es una magnitud escalar.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La ecuación de la posición en un MRUA es x(t)= x<sub>0</sub> +{" "}
            <i>v</i>
            <sub>0</sub>t + 1/2 (<i>a</i>t<sup>2</sup>).{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            En un MRUA, la posición se calcula considerando la posición inicial,
            la velocidad inicial y el término de aceleración.{" "}
          </span>,
        ],

        [
          <span> En el MRU, la aceleración de una partícula es cero. </span>,
          "verdadero",
          <span>
            {" "}
            En el MRU, la velocidad es constante, lo que implica que no hay
            aceleración.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En cinemática 1D, la velocidad instantánea y la velocidad media
            siempre son iguales.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La velocidad instantánea puede diferir de la velocidad media si la
            aceleración está presente.{" "}
          </span>,
        ],
      ],
      [
        [
          <span>
            {" "}
            En el tiro vertical, la velocidad inicial del objeto es siempre
            mayor que cero.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            En el tiro vertical, el objeto se lanza hacia arriba con una
            velocidad inicial positiva.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La aceleración debida a la gravedad es negativa en el tiro vertical
            cuando el objeto sube.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Durante el ascenso en el tiro vertical, la gravedad actúa en contra
            del movimiento, lo que resulta en una aceleración negativa.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En la caída libre, la velocidad inicial del objeto es siempre cero.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La caída libre puede tener una velocidad inicial distinta de cero;
            sin embargo, si se deja caer desde el reposo, la velocidad inicial
            es cero.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fórmula de la altura máxima en el tiro vertical es <i>h</i>
            <sub>max</sub>=<i>v</i>
            <sub>0</sub>
            <sup>2</sup>/2g, donde <i>v</i>
            <sub>0</sub> es la velocidad inicial y g es la aceleración debida a
            la gravedad.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Esta fórmula calcula la altura máxima alcanzada por el objeto
            lanzado verticalmente hacia arriba.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En la caída libre, la aceleración del objeto es constante e igual a
            g.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            En la caída libre, la aceleración es constante y igual a la
            gravedad, aproximadamente 9.8 m/s<sup>2</sup>.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En una trayectoria parabólica en 2D, la aceleración horizontal del
            objeto es cero.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La aceleración horizontal es cero porque no hay fuerzas actuando en
            la dirección horizontal en un tiro parabólico ideal.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La velocidad horizontal en una trayectoria parabólica permanece
            constante durante todo el movimiento.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            En la trayectoria parabólica, la velocidad horizontal no cambia
            porque no hay aceleración en esa dirección.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En una caída libre, el desplazamiento después de t segundos se
            calcula mediante la fórmula y= 1/2 gt<sup>2</sup>.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Esta fórmula calcula el desplazamiento vertical en una caída libre
            bajo la aceleración debida a la gravedad.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La velocidad final de un objeto en caída libre se calcula mediante
            la ecuación v<sub>f</sub>= v<sub>0</sub> + gt.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Esta ecuación calcula la velocidad final de un objeto en caída libre
            después de t segundos.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En una trayectoria en 2D, el movimiento en las direcciones vertical
            y horizontal es independiente.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            El movimiento vertical es afectado por la gravedad, mientras que el
            movimiento horizontal permanece constante e independiente.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            En el tiro vertical, la aceleración debida a la gravedad afecta
            tanto al ascenso como al descenso del objeto.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La gravedad actúa constantemente, desacelerando el objeto mientras
            sube y acelerándolo mientras baja.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fórmula para calcular el tiempo total de vuelo en el tiro
            vertical es t = 2v<sub>0</sub>/g , donde v<sub>0</sub> es la
            velocidad inicial y g es la aceleración debida a la gravedad.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Esta fórmula considera el tiempo para subir y descender, dada la
            velocidad inicial y la gravedad.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En la caída libre, si un objeto se deja caer desde una cierta
            altura, su velocidad inicial es negativa.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La velocidad inicial es cero si el objeto se deja caer desde el
            reposo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En una trayectoria parabólica, el ángulo de lanzamiento influye en
            la distancia horizontal alcanzada por el objeto.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            El ángulo de lanzamiento determina tanto la altura máxima como la
            distancia horizontal recorrida.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La aceleración vertical en una trayectoria en 2D es constante e
            igual a la aceleración debida a la gravedad.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La aceleración vertical es constantemente g, aproximadamente 9.8 m/s
            <sup>2</sup>.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En el tiro vertical, la velocidad del objeto en el punto más alto de
            su trayectoria es cero.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            En el punto más alto, el objeto deja de subir antes de empezar a
            bajar, lo que significa que su velocidad es cero en ese instante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La ecuación de la velocidad final en una caída libre es v
            <sub>f</sub>=gt, donde t es el tiempo transcurrido.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Esta fórmula calcula la velocidad final basada en el tiempo
            transcurrido bajo la influencia de la gravedad.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La distancia horizontal máxima en un lanzamiento parabólico se
            alcanza a un ángulo de 90 grados.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La distancia máxima se alcanza típicamente a un ángulo de 45 grados
            en un lanzamiento ideal.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            La aceleración de un objeto en caída libre es independiente de su
            masa.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Todos los objetos en caída libre experimentan la misma aceleración
            debido a la gravedad, independientemente de su masa.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En una trayectoria en 2D, la componente horizontal de la velocidad
            cambia debido a la gravedad.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La componente horizontal de la velocidad permanece constante; solo
            la componente vertical se ve afectada por la gravedad.{" "}
          </span>,
        ],
      ],
    ],
    // Tema 3
    [
      // SubTemas
      [
        [
          <span>
            {" "}
            La fuerza gravitacional es una de las cuatro fuerzas fundamentales
            de la naturaleza.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza gravitacional es una de las cuatro fuerzas fundamentales
            junto con la fuerza electromagnética, la fuerza nuclear fuerte y la
            fuerza nuclear débil.{" "}
          </span>,
        ],

        [
          <span> La fuerza de fricción es una fuerza fundamental. </span>,
          "falso",
          <span>
            {" "}
            La fuerza de fricción es una fuerza derivada, no una fuerza
            fundamental.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La tercera ley de Newton establece que para cada acción hay una
            reacción igual y opuesta.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La tercera ley de Newton describe la interacción entre dos cuerpos,
            estableciendo que para cada acción hay una reacción igual y opuesta.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza normal siempre actúa perpendicular a la superficie de
            contacto.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza normal es una fuerza derivada que siempre actúa
            perpendicular a la superficie de contacto.{" "}
          </span>,
        ],

        [
          <span> La fuerza de tensión es una fuerza fundamental. </span>,
          "falso",
          <span>
            {" "}
            La fuerza de tensión es una fuerza derivada, no una fuerza
            fundamental.{" "}
          </span>,
        ],

        [
          <span> La segunda ley de Newton se expresa como 𝐹 = 𝑚 𝑎 . </span>,
          "verdadero",
          <span>
            {" "}
            La segunda ley de Newton establece que la fuerza es igual a la masa
            por la aceleración, expresada como 𝐹 = 𝑚 𝑎 .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza centrípeta actúa hacia el exterior del círculo en un
            movimiento circular.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza centrípeta actúa hacia el centro del círculo en un
            movimiento circular.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza electromagnética es responsable de la interacción entre
            partículas cargadas.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza electromagnética es una de las fuerzas fundamentales y es
            responsable de la interacción entre partículas cargadas.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza de fricción siempre actúa en la misma dirección que el
            movimiento de un objeto.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza de fricción siempre actúa en dirección opuesta al
            movimiento relativo de las superficies en contacto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza nuclear fuerte mantiene unidos a los protones y neutrones
            en el núcleo de un átomo.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza nuclear fuerte es una de las fuerzas fundamentales y es
            responsable de mantener unidos a los protones y neutrones en el
            núcleo de un átomo.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            La fuerza gravitacional es siempre atractiva entre dos masas.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza gravitacional siempre atrae dos masas entre sí.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza centrípeta actúa hacia el centro de un objeto en
            movimiento circular.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza centrípeta siempre actúa hacia el centro del círculo en un
            movimiento circular.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza de fricción es proporcional al área de contacto entre dos
            superficies.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza de fricción no depende del área de contacto, sino del
            coeficiente de fricción y la fuerza normal.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza electromagnética es responsable de la formación de enlaces
            químicos.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza electromagnética es responsable de la interacción entre
            partículas cargadas y la formación de enlaces químicos.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza de tensión solo actúa en objetos en movimiento.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza de tensión puede actuar tanto en objetos en reposo como en
            movimiento.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza de fricción siempre actúa en la dirección opuesta al
            movimiento.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza de fricción se opone al movimiento relativo entre dos
            superficies en contacto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza nuclear débil es una de las fuerzas fundamentales y es
            responsable de ciertos tipos de decaimiento radiactivo.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza nuclear débil es una de las cuatro fuerzas fundamentales y
            es responsable de ciertos tipos de decaimiento radiactivo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza normal es siempre igual a la fuerza gravitacional que
            actúa sobre un objeto.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza normal no siempre es igual a la fuerza gravitacional;
            depende de la orientación de la superficie y otras fuerzas
            presentes.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La segunda ley de Newton puede describirse como 𝐹 = 𝑑𝑝/𝑑𝑡 , donde 𝑝
            es el momento lineal.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La segunda ley de Newton también puede expresarse como 𝐹 = 𝑑𝑝/𝑑𝑡 ,
            describiendo la tasa de cambio del momento lineal.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            Las fuerzas derivadas son aquellas que se pueden explicar a partir
            de las fuerzas fundamentales.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Las fuerzas derivadas, como la fricción y la tensión, se explican en
            términos de las fuerzas fundamentales.{" "}
          </span>,
        ],
      ],
      [
        [
          <span>
            {" "}
            La primera ley de Newton también se conoce como la ley de la
            inercia.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La primera ley de Newton establece que un objeto en reposo
            permanecerá en reposo y un objeto en movimiento continuará
            moviéndose en línea recta a velocidad constante, a menos que una
            fuerza externa actúe sobre él.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La segunda ley de Newton se puede expresar como 𝐹 = 𝑚 𝑎 , donde 𝐹 es
            la fuerza, 𝑚 es la masa y 𝑎 es la aceleración.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La segunda ley de Newton describe la relación entre la fuerza
            aplicada a un objeto, su masa y la aceleración resultante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La tercera ley de Newton afirma que para cada acción, hay una
            reacción opuesta de menor magnitud.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La tercera ley de Newton establece que para cada acción, hay una
            reacción igual y opuesta en magnitud.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            Un objeto en reposo no tiene fuerzas actuando sobre él.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            Un objeto en reposo puede tener fuerzas actuando sobre él, pero si
            las fuerzas están equilibradas, no habrá movimiento.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza neta que actúa sobre un objeto es igual a la suma de todas
            las fuerzas aplicadas.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza neta es la suma vectorial de todas las fuerzas que actúan
            sobre un objeto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En la ausencia de fuerzas externas, un objeto en movimiento
            continuará acelerándose.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            En ausencia de fuerzas externas, un objeto en movimiento continuará
            moviéndose a velocidad constante en línea recta, según la primera
            ley de Newton.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            Un ejemplo de la segunda ley de Newton es la aceleración de un coche
            cuando se aplica una fuerza constante al acelerador.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La segunda ley de Newton describe cómo una fuerza aplicada produce
            una aceleración proporcional en un objeto, como un coche.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La primera ley de Newton solo se aplica a objetos en movimiento.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La primera ley de Newton se aplica tanto a objetos en reposo como en
            movimiento.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La tercera ley de Newton explica por qué un cohete puede lanzarse al
            espacio.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La tercera ley de Newton describe que los gases expulsados por el
            cohete ejercen una fuerza hacia abajo, mientras que el cohete recibe
            una fuerza igual y opuesta hacia arriba.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            Según la segunda ley de Newton, si la misma fuerza se aplica a dos
            objetos de diferente masa, ambos objetos acelerarán al mismo ritmo.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            Según la segunda ley de Newton, el objeto con menor masa acelerará
            más que el objeto con mayor masa cuando se aplica la misma fuerza.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            Según la primera ley de Newton, ¿qué sucede con un objeto que no
            tiene fuerzas netas actuando sobre él?{" "}
          </span>,
          "permanece en reposo o se mueve a velocidad constante",
          <span>
            {" "}
            Según la primera ley de Newton, un objeto que no tiene fuerzas netas
            actuando sobre él permanece en reposo o se mueve a velocidad
            constante en línea recta.{" "}
          </span>,
        ],

        [
          <span> ¿Qué relación describe la segunda ley de Newton? </span>,
          "entre fuerza, masa y aceleración",
          <span>
            {" "}
            La segunda ley de Newton describe la relación entre la fuerza
            aplicada a un objeto, su masa y la aceleración resultante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es un ejemplo práctico de la tercera ley de Newton?{" "}
          </span>,
          "el retroceso de un cañón al disparar",
          <span>
            {" "}
            Un ejemplo práctico de la tercera ley de Newton es el retroceso de
            un cañón al disparar, donde la fuerza ejercida hacia adelante sobre
            el proyectil tiene una reacción igual y opuesta hacia atrás sobre el
            cañón.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué ocurre con la aceleración de un objeto si la fuerza neta que
            actúa sobre él se duplica?{" "}
          </span>,
          "la aceleración se duplica",
          <span>
            {" "}
            Según la segunda ley de Newton, si la fuerza neta que actúa sobre un
            objeto se duplica, la aceleración también se duplica.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un choque entre dos automóviles, ¿cómo se aplican las fuerzas
            según la tercera ley de Newton?{" "}
          </span>,
          "ambos automóviles aplican fuerzas iguales y opuestas entre sí",
          <span>
            {" "}
            Según la tercera ley de Newton, en un choque entre dos automóviles,
            ambos se aplican fuerzas iguales en magnitud y opuestas en
            dirección.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué describe la primera ley de Newton respecto a la inercia?{" "}
          </span>,
          "la tendencia de un objeto a resistir cambios en su estado de movimiento",
          <span>
            {" "}
            La primera ley de Newton describe la inercia como la tendencia de un
            objeto a resistir cambios en su estado de movimiento, permaneciendo
            en reposo o moviéndose a velocidad constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo afecta un aumento en la masa a la aceleración de un objeto
            para una fuerza dada, según la segunda ley de Newton?{" "}
          </span>,
          "la aceleración disminuye",
          <span>
            {" "}
            Según la segunda ley de Newton, un aumento en la masa de un objeto
            para una fuerza dada resulta en una disminución de la aceleración.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué demuestra un ejemplo de la primera ley de Newton en la vida
            diaria?{" "}
          </span>,
          "un libro sobre una mesa permanece en reposo",
          <span>
            {" "}
            Un ejemplo de la primera ley de Newton en la vida diaria es un libro
            sobre una mesa que permanece en reposo a menos que se aplique una
            fuerza externa.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            Según la tercera ley de Newton, ¿qué ocurre cuando una persona
            empuja una pared?{" "}
          </span>,
          "la pared empuja a la persona con una fuerza igual y opuesta",
          <span>
            {" "}
            Según la tercera ley de Newton, cuando una persona empuja una pared,
            la pared empuja a la persona con una fuerza igual en magnitud y
            opuesta en dirección.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué implica la segunda ley de Newton en términos de movimiento de
            un objeto?{" "}
          </span>,
          "que la aceleración de un objeto es proporcional a la fuerza neta aplicada",
          <span>
            {" "}
            La segunda ley de Newton implica que la aceleración de un objeto es
            directamente proporcional a la fuerza neta aplicada e inversamente
            proporcional a su masa.{" "}
          </span>,
        ],
      ],
      [
        [
          <span>
            {" "}
            Un diagrama de cuerpo libre muestra todas las fuerzas que actúan
            sobre un objeto en un sistema de coordenadas.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Un diagrama de cuerpo libre es una representación gráfica de todas
            las fuerzas que actúan sobre un objeto, desglosadas en un sistema de
            coordenadas.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un diagrama de cuerpo libre, la dirección de las fuerzas se
            representa con flechas.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Las fuerzas en un diagrama de cuerpo libre se representan con
            flechas que indican la dirección y la magnitud de las fuerzas.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza gravitacional siempre se dibuja como una flecha hacia
            arriba en un diagrama de cuerpo libre.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza gravitacional se dibuja como una flecha hacia abajo,
            representando la atracción hacia el centro de la Tierra.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza normal es una fuerza derivada que actúa perpendicularmente
            a la superficie de contacto.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza normal es una fuerza derivada que actúa perpendicularmente
            a la superficie de contacto entre dos objetos.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un diagrama de cuerpo libre, las fuerzas internas se deben
            incluir junto con las fuerzas externas.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            En un diagrama de cuerpo libre, solo se incluyen las fuerzas
            externas que actúan sobre el objeto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La longitud de una flecha en un diagrama de cuerpo libre indica la
            magnitud de la fuerza.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La longitud de la flecha en un diagrama de cuerpo libre representa
            la magnitud de la fuerza.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza de fricción siempre actúa en la misma dirección que el
            movimiento del objeto.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza de fricción siempre actúa en dirección opuesta al
            movimiento relativo entre las superficies en contacto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            Un diagrama de cuerpo libre puede utilizarse para analizar el
            equilibrio de fuerzas en un objeto.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Los diagramas de cuerpo libre se utilizan para analizar el
            equilibrio de fuerzas y determinar si un objeto está en equilibrio
            estático o dinámico.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza de tensión en un diagrama de cuerpo libre se representa
            como una flecha que apunta hacia el centro del objeto en el que
            actúa.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza de tensión se representa como una flecha que apunta a lo
            largo de la cuerda o cable en dirección opuesta al objeto que la
            causa.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un diagrama de cuerpo libre, la suma de todas las fuerzas
            horizontales y verticales debe ser igual a cero para que el objeto
            esté en equilibrio.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Para que un objeto esté en equilibrio, la suma de todas las fuerzas
            horizontales y verticales en un diagrama de cuerpo libre debe ser
            igual a cero.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            Un diagrama de cuerpo libre es útil para identificar todas las
            fuerzas que actúan sobre un objeto en reposo o en movimiento.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Un diagrama de cuerpo libre ayuda a visualizar y analizar todas las
            fuerzas que actúan sobre un objeto, ya sea que esté en reposo o en
            movimiento.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza normal se representa como una flecha que apunta hacia el
            centro de la Tierra en un diagrama de cuerpo libre.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza normal se representa como una flecha que apunta
            perpendicularmente hacia arriba desde la superficie de contacto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un diagrama de cuerpo libre, la dirección de la fuerza de
            fricción siempre es opuesta al movimiento relativo de las
            superficies.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La fuerza de fricción siempre actúa en la dirección opuesta al
            movimiento relativo entre las superficies en contacto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            Para un objeto en equilibrio estático, la suma de todas las fuerzas
            en un diagrama de cuerpo libre debe ser cero.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Un objeto en equilibrio estático no experimenta ninguna aceleración,
            por lo que la suma de todas las fuerzas que actúan sobre él debe ser
            cero.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La tensión en una cuerda se representa como una flecha que apunta
            hacia el objeto en un diagrama de cuerpo libre.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La tensión en una cuerda se representa como una flecha que apunta a
            lo largo de la cuerda, alejándose del objeto en el que actúa.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un diagrama de cuerpo libre, solo se incluyen las fuerzas
            aplicadas externamente al objeto.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            Los diagramas de cuerpo libre solo muestran las fuerzas externas que
            actúan sobre un objeto, ignorando las fuerzas internas.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza de gravedad siempre actúa hacia arriba en un diagrama de
            cuerpo libre.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza de gravedad siempre actúa hacia abajo, en dirección al
            centro de la Tierra.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La magnitud de una fuerza en un diagrama de cuerpo libre se indica
            mediante la longitud de la flecha que representa la fuerza.{" "}
          </span>,
          "verdadero",
          <span>
            {" "}
            La longitud de la flecha en un diagrama de cuerpo libre es
            proporcional a la magnitud de la fuerza que representa.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            Un objeto en equilibrio dinámico no puede ser analizado con un
            diagrama de cuerpo libre.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            Los objetos en equilibrio dinámico pueden ser analizados con un
            diagrama de cuerpo libre para entender las fuerzas en juego durante
            el movimiento constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            La fuerza neta en un diagrama de cuerpo libre es siempre diferente
            de cero.{" "}
          </span>,
          "falso",
          <span>
            {" "}
            La fuerza neta en un diagrama de cuerpo libre puede ser cero si
            todas las fuerzas están equilibradas, indicando que el objeto está
            en equilibrio estático o se mueve con velocidad constante.{" "}
          </span>,
        ],
      ],
    ],
  ];
  const listaPreguntasMO = [
    // Tema 1
    [
      // SubTemas
      [
        [
          <span>
            ¿Cuál es la hipotenusa de un triángulo rectángulo con catetos de 3 y
            4?
          </span>,
          <span>
            {" "}
            <br /> a) 5 <br /> b) 6 <br /> c) 7 <br /> d) 8{" "}
          </span>,
          "a",
          <span>
            {" "}
            Usando el teorema de Pitágoras: √(3<sup>2</sup> + 4<sup>2</sup>) =
            √(9 + 16) = √25 = 5.{" "}
          </span>,
        ],
        [
          <span>
            ¿Qué representa el seno de un ángulo en un triángulo rectángulo?
          </span>,
          <span>
            {" "}
            <br /> a) Cateto opuesto / Hipotenusa <br /> b) Cateto adyacente /
            Hipotenusa <br /> c) Cateto opuesto / Cateto adyacente <br /> d)
            Hipotenusa / Cateto opuesto{" "}
          </span>,
          "a",
          <span>
            {" "}
            El seno (sin) de un ángulo es igual al cateto opuesto dividido por
            la hipotenusa.{" "}
          </span>,
        ],
        [
          <span>
            ¿Qué representa el coseno de un ángulo en un triángulo rectángulo?
          </span>,
          <span>
            {" "}
            <br /> a) Cateto opuesto / Hipotenusa <br /> b) Cateto adyacente /
            Hipotenusa <br /> c) Cateto opuesto / Cateto adyacente <br /> d)
            Hipotenusa / Cateto opuesto{" "}
          </span>,
          "b",
          <span>
            {" "}
            El coseno (cos) de un ángulo es igual al cateto adyacente dividido
            por la hipotenusa.{" "}
          </span>,
        ],
        [
          <span>¿Cuál es el valor de tan 45°?</span>,
          <span>
            {" "}
            <br /> a) 0 <br /> b) 1 <br /> c) √2 <br /> d) ∞{" "}
          </span>,
          "b",
          <span>
            {" "}
            La tangente (tan) de 45° es 1 porque tan 45° = opuesto/adyacente, y
            en un triángulo isósceles de 45°-45°, ambas longitudes son iguales.{" "}
          </span>,
        ],
        [
          <span>¿Cuál es el seno de 30°?</span>,
          <span>
            {" "}
            <br /> a) 0.5 <br /> b) 0.866 <br /> c) 0.707 <br /> d) 1{" "}
          </span>,
          "a",
          <span> El seno de 30° es 0.5. </span>,
        ],
        [
          <span>¿Cuál es el coseno de 60°?</span>,
          <span>
            {" "}
            <br /> a) 0.5 <br /> b) 0.866 <br /> c) 0.707 <br /> d) 1{" "}
          </span>,
          "a",
          <span> El coseno de 60° es 0.5. </span>,
        ],
        [
          <span>¿Cuál es la tangente de 0°?</span>,
          <span>
            {" "}
            <br /> a) 0 <br /> b) 1 <br /> c) ∞ <br /> d) 0.707{" "}
          </span>,
          "a",
          <span>
            {" "}
            La tangente de 0° es 0 porque tan 0° = opuesto/adyacente, y el
            cateto opuesto es 0.{" "}
          </span>,
        ],
        [
          <span>
            En un triángulo rectángulo, si los catetos miden 5 y 12, ¿cuánto
            mide la hipotenusa?
          </span>,
          <span>
            {" "}
            <br /> a) 13 <br /> b) 14 <br /> c) 15 <br /> d) 17{" "}
          </span>,
          "a",
          <span>
            {" "}
            Usando el teorema de Pitágoras: √(5<sup>2</sup> + 12<sup>2</sup>) =
            √(25 + 144) = √169 = 13.{" "}
          </span>,
        ],
        [
          <span>
            ¿Qué representa la cotangente de un ángulo en un triángulo
            rectángulo?
          </span>,
          <span>
            {" "}
            <br /> a) Cateto adyacente / Hipotenusa <br /> b) Cateto opuesto /
            Cateto adyacente <br /> c) Hipotenusa / Cateto adyacente <br /> d)
            Cateto adyacente / Cateto opuesto{" "}
          </span>,
          "d",
          <span>
            {" "}
            La cotangente (cot) de un ángulo es igual al cateto adyacente
            dividido por el cateto opuesto.{" "}
          </span>,
        ],
        [
          <span>¿Cuál es la tangente de 60°?</span>,
          <span>
            {" "}
            <br /> a) 0.5 <br /> b) 0.866 <br /> c) 1 <br /> d) √3{" "}
          </span>,
          "d",
          <span> La tangente de 60° es √3. </span>,
        ],
        [
          <span>
            Si la hipotenusa de un triángulo rectángulo mide 10 y uno de los
            catetos mide 6, ¿cuánto mide el otro cateto?
          </span>,
          <span>
            {" "}
            <br /> a) 7 <br /> b) 8 <br /> c) 9 <br /> d) 10{" "}
          </span>,
          "b",
          <span>
            {" "}
            Usando el teorema de Pitágoras: a<sup>2</sup> + 6<sup>2</sup> = 10
            <sup>2</sup> &rarr; a<sup>2</sup> + 36 = 100 &rarr; a<sup>2</sup> =
            64 &rarr; a = 8.{" "}
          </span>,
        ],
        [
          <span>
            ¿Qué relación trigonométrica representa el cociente del cateto
            opuesto y el cateto adyacente?
          </span>,
          <span>
            {" "}
            <br /> a) Seno <br /> b) Coseno <br /> c) Tangente <br /> d)
            Cotangente{" "}
          </span>,
          "c",
          <span>
            {" "}
            La tangente (tan) de un ángulo es igual al cateto opuesto dividido
            por el cateto adyacente.{" "}
          </span>,
        ],
        [
          <span>¿Cuál es el coseno de 45°?</span>,
          <span>
            {" "}
            <br /> a) 0.5 <br /> b) 0.707 <br /> c) 0.866 <br /> d) 1{" "}
          </span>,
          "b",
          <span> El coseno de 45° es 0.707. </span>,
        ],
        [
          <span>¿Cuál es el valor de sen 90°?</span>,
          <span>
            {" "}
            <br /> a) 0 <br /> b) 0.5 <br /> c) 0.707 <br /> d) 1{" "}
          </span>,
          "d",
          <span> El seno de 90° es 1. </span>,
        ],
        [
          <span>
            En un triángulo rectángulo, si la hipotenusa mide 13 y un cateto
            mide 5, ¿cuánto mide el otro cateto?
          </span>,
          <span>
            {" "}
            <br /> a) 7 <br /> b) 8 <br /> c) 9 <br /> d) 10{" "}
          </span>,
          "b",
          <span>
            {" "}
            Usando el teorema de Pitágoras: a<sup>2</sup> + 5<sup>2</sup> = 13
            <sup>2</sup> &rarr; a<sup>2</sup> + 25 = 169 &rarr; a<sup>2</sup> =
            144 &rarr; a = 12.{" "}
          </span>,
        ],
        [
          <span>¿Cuál es el seno de un ángulo de 45 grados?</span>,
          <span>
            {" "}
            <br /> a) 0.5
            <br /> b) √2/2
            <br /> c) √3/2
            <br /> d) 1{" "}
          </span>,
          "b",
          <span>El seno de 45 grados es igual a √2/2.</span>,
        ],
        [
          <span>
            ¿Cuál es la tangente de un ángulo de 30 grados en un triángulo
            rectángulo?
          </span>,
          <span>
            {" "}
            <br /> a) 1<br /> b) √3
            <br /> c) 1/√3
            <br /> d) 0.5{" "}
          </span>,
          "c",
          <span>La tangente de 30 grados es igual a 1/√3.</span>,
        ],
        [
          <span>
            En un triángulo rectángulo, si los catetos miden 5 y 12 unidades,
            ¿cuál es la longitud de la hipotenusa?
          </span>,
          <span>
            {" "}
            <br /> a) 13
            <br /> b) 14
            <br /> c) 15
            <br /> d) 16{" "}
          </span>,
          "a",
          <span>
            Aplicando el teorema de Pitágoras: √(5 <sup>2</sup> + 12{" "}
            <sup>2</sup>) = √(25 + 144) = √169 = 13.
          </span>,
        ],
        [
          <span>
            ¿Cuál es el coseno de un ángulo de 30 grados en un triángulo
            rectángulo?
          </span>,
          <span>
            {" "}
            <br /> a) 0.5
            <br /> b) √3/2
            <br /> c) 1<br /> d) √2/2{" "}
          </span>,
          "b",
          <span>El coseno de 30 grados es igual a √3/2.</span>,
        ],
        [
          <span>
            Si la hipotenusa de un triángulo rectángulo mide 17 unidades y uno
            de los catetos mide 15 unidades, ¿cuál es la longitud del otro
            cateto?
          </span>,
          <span>
            {" "}
            <br /> a) 8<br /> b) 9<br /> c) 10
            <br /> d) 11{" "}
          </span>,
          "a",
          <span>
            Aplicando el teorema de Pitágoras: 17 <sup>2</sup> - 15 <sup>2</sup>{" "}
            = 289 - 225 = 64, y √64= 8.
          </span>,
        ],
      ],
      [
        [
          <span>¿Cuál es la magnitud del vector (3, 4)? </span>,
          <span>
            {" "}
            <br /> a) 5<br /> b) 6<br /> c) 7<br /> d) 8{" "}
          </span>,
          "a",
          <span>
            La magnitud se calcula como √(3 <sup>2</sup> + 4 <sup>2</sup> ) =
            √(9 + 16) = √25 = 5.
          </span>,
        ],
        [
          <span>¿Qué es un vector unitario?</span>,
          <span>
            {" "}
            <br /> a) Un vector con magnitud igual a 1<br /> b) Un vector con
            magnitud cero
            <br /> c) Un vector con magnitud infinita
            <br /> d) Un vector sin dirección{" "}
          </span>,
          "a",
          <span>Un vector unitario es un vector con magnitud igual a 1.</span>,
        ],
        [
          <span>¿Cómo se representa gráficamente un vector?</span>,
          <span>
            {" "}
            <br /> a) Como un punto
            <br /> b) Como una línea recta
            <br /> c) Como una flecha
            <br /> d) Como un círculo{" "}
          </span>,
          "c",
          <span>
            Gráficamente, los vectores se representan como flechas que indican
            la dirección y la magnitud.
          </span>,
        ],
        [
          <span>¿Cuál es el vector opuesto de (7, -9)?</span>,
          <span>
            {" "}
            <br /> a) (-7, 9)
            <br /> b) (7, 9)
            <br /> c) (-7, -9)
            <br /> d) (9, -7){" "}
          </span>,
          "a",
          <span>
            El vector opuesto se obtiene cambiando el signo de cada componente:
            (7, -9) &rarr; (-7, 9).
          </span>,
        ],
        [
          <span>¿Cuál es la magnitud del vector (1, 2, 2)? </span>,
          <span>
            {" "}
            <br /> a) 2<br /> b) √5
            <br /> c) √6
            <br /> d) 3{" "}
          </span>,
          "d",
          <span>
            La magnitud se calcula como √(1 <sup>2</sup> + 2 <sup>2</sup> + 2{" "}
            <sup>2</sup>) = √(1 + 4 + 4) = √9 = 3.
          </span>,
        ],
        [
          <span>¿Cuál es la magnitud del vector (0, 0, 1)? </span>,
          <span>
            {" "}
            <br /> a) 0<br /> b) 1<br /> c) √1
            <br /> d) √2{" "}
          </span>,
          "b",
          <span>
            La magnitud de un vector con una sola componente no nula es igual al
            valor absoluto de esa componente: √(1) = 1.
          </span>,
        ],
        [
          <span>¿Qué son vectores coplanares?</span>,
          <span>
            {" "}
            <br /> a) Vectores que se encuentran en el mismo plano
            <br /> b) Vectores que tienen la misma magnitud
            <br /> c) Vectores que son perpendiculares
            <br /> d) Vectores que tienen la misma dirección{" "}
          </span>,
          "a",
          <span>
            Los vectores coplanares son aquellos que se encuentran en el mismo
            plano.
          </span>,
        ],
        [
          <span>¿Cuál es la suma de los vectores (2, 3) y (1, 4)?</span>,
          <span>
            {" "}
            <br /> a) (3, 7)
            <br /> b) (3, 8)
            <br /> c) (2, 7)
            <br /> d) (1, 7){" "}
          </span>,
          "a",
          <span>
            La suma de los vectores (2, 3) y (1, 4) se obtiene sumando sus
            componentes: (2+1, 3+4) = (3, 7).
          </span>,
        ],
        [
          <span>
            ¿Cuál es el producto escalar de los vectores (1, 2) y (3, 4)?
          </span>,
          <span>
            {" "}
            <br /> a) 7<br /> b) 8<br /> c) 9<br /> d) 11{" "}
          </span>,
          "d",
          <span>
            El producto escalar se calcula como 1*3 + 2*4 = 3 + 8 = 11.
          </span>,
        ],
        [
          <span>
            ¿Cuál es el vector resultante de restar (4, 5) de (6, 7)?
          </span>,
          <span>
            {" "}
            <br /> a) (2, 2)
            <br /> b) (1, 1)
            <br /> c) (3, 2)
            <br /> d) (5, 2){" "}
          </span>,
          "a",
          <span>
            La resta de los vectores (6, 7) y (4, 5) es (6-4, 7-5) = (2, 2).
          </span>,
        ],
        [
          <span>¿Qué es un vector?</span>,
          <span>
            <br />
            a) Una cantidad con solo magnitud
            <br />
            b) Una cantidad con solo dirección
            <br />
            c) Una cantidad con magnitud y dirección
            <br />
            d) Una cantidad sin magnitud ni dirección
          </span>,
          "c",
          <span>
            Un vector es una cantidad que tiene tanto magnitud como dirección.
          </span>,
        ],
        [
          <span>¿Cuál es la magnitud del vector (2, 5)?</span>,
          <span>
            <br />
            a) √27
            <br />
            b) √29
            <br />
            c) 7<br />
            d) √20
          </span>,
          "b",
          <span>
            La magnitud se calcula como √(2 <sup>2</sup> + 5 <sup>2</sup>) = √(4
            + 25) = √29.
          </span>,
        ],
        [
          <span>
            ¿Qué representa gráficamente la longitud de la flecha en un vector?
          </span>,
          <span>
            <br />
            a) La dirección del vector
            <br />
            b) La magnitud del vector
            <br />
            c) La posición del vector
            <br />
            d) La componente del vector
          </span>,
          "b",
          <span>
            La longitud de la flecha representa la magnitud del vector.
          </span>,
        ],
        [
          <span>
            ¿Cómo se representa un vector que comienza en el origen y termina en
            el punto (3, 4)?
          </span>,
          <span>
            <br />
            a) (3, 4)
            <br />
            b) (0, 0) &rarr; (3, 4)
            <br />
            c) (4, 3)
            <br />
            d) (0, 0) &rarr; (4, 3)
          </span>,
          "b",
          <span>
            Un vector que comienza en el origen y termina en el punto (3, 4) se
            representa como (0, 0) &rarr; (3, 4).
          </span>,
        ],
        [
          <span>¿Cuál es el vector unitario en la dirección de (4, 3)?</span>,
          <span>
            <br />
            a) (4/5, 3/5)
            <br />
            b) (3/5, 4/5)
            <br />
            c) (2, 1.5)
            <br />
            d) (1, 1)
          </span>,
          "a",
          <span>
            El vector unitario se obtiene dividiendo cada componente por la
            magnitud del vector: (4/5, 3/5).
          </span>,
        ],
        [
          <span>
            ¿Cuál es el vector resultante de sumar (1, 2, 3) y (4, 5, 6)?
          </span>,
          <span>
            <br />
            a) (4, 6, 9)
            <br />
            b) (5, 7, 9)
            <br />
            c) (5, 6, 7)
            <br />
            d) (5, 8, 9)
          </span>,
          "b",
          <span>
            La suma de los vectores (1, 2, 3) y (4, 5, 6) se obtiene sumando sus
            componentes: (1+4, 2+5, 3+6) = (5, 7, 9).
          </span>,
        ],
        [
          <span>¿Qué representa la dirección de una flecha en un vector?</span>,
          <span>
            <br />
            a) La magnitud del vector
            <br />
            b) La dirección del vector
            <br />
            c) El punto inicial del vector
            <br />
            d) El punto final del vector
          </span>,
          "b",
          <span>
            La dirección de la flecha representa la dirección del vector.
          </span>,
        ],
        [
          <span>¿Cuál es la magnitud del vector (-3, 4)?</span>,
          <span>
            <br />
            a) 5<br />
            b) √25
            <br />
            c) 7<br />
            d) 6
          </span>,
          "a",
          <span>
            La magnitud se calcula como √((-3) <sup>2</sup> + 4 <sup>2</sup>) =
            √(9 + 16) = √25 = 5.
          </span>,
        ],
        [
          <span>¿Cuál es el vector opuesto de (-2, 3, -4)?</span>,
          <span>
            <br />
            a) (2, -3, 4)
            <br />
            b) (-2, -3, -4)
            <br />
            c) (2, 3, 4)
            <br />
            d) (-2, -3, 4)
          </span>,
          "a",
          <span>
            El vector opuesto se obtiene cambiando el signo de cada componente:
            (-2, 3, -4) &rarr; (2, -3, 4).
          </span>,
        ],
        [
          <span>¿Qué son vectores perpendiculares?</span>,
          <span>
            <br />
            a) Vectores que forman un ángulo de 90 grados
            <br />
            b) Vectores que tienen la misma magnitud
            <br />
            c) Vectores que están en el mismo plano
            <br />
            d) Vectores que tienen la misma dirección
          </span>,
          "a",
          <span>
            Los vectores perpendiculares son aquellos que forman un ángulo de 90
            grados entre sí.
          </span>,
        ],
      ],
      [
        [
          <span>¿Cuál es la magnitud del vector (3, 4)? </span>,
          <span>
            <br />
            a) 5 <br />
            b) 6 <br />
            c) 7 <br />
            d) 8
          </span>,
          "a",
          <span>
            La magnitud se calcula como √(3 <sup>2</sup> + 4 <sup>2</sup> ) =
            √(9 + 16) = √25 = 5.
          </span>,
        ],
        [
          <span>¿Cuál es el vector resultante de sumar (2, 3) y (4, 1)? </span>,
          <span>
            <br />
            a) (6, 4) <br />
            b) (6, 5) <br />
            c) (7, 4) <br />
            d) (7, 5)
          </span>,
          "b",
          <span>
            La suma de los vectores (2, 3) y (4, 1) es (2+4, 3+1) = (6, 5).
          </span>,
        ],
        [
          <span>
            ¿Cuál es el producto escalar de los vectores (1, 2) y (3, 4)?{" "}
          </span>,
          <span>
            {" "}
            <br />
            a) 7 <br />
            b) 8 <br />
            c) 9 <br />
            d) 11
          </span>,
          "d",
          <span>
            El producto escalar se calcula como 1*3 + 2*4 = 3 + 8 = 11.
          </span>,
        ],
        [
          <span>¿Cuál es el vector opuesto de (5, -6)? </span>,
          <span>
            {" "}
            <br />
            a) (-5, 6) <br />
            b) (5, 6) <br />
            c) (-5, -6) <br />
            d) (6, -5)
          </span>,
          "a",
          <span>
            El vector opuesto se obtiene cambiando el signo de cada componente:
            (5, -6) &rarr; (-5, 6).
          </span>,
        ],
        [
          <span>
            ¿Cuál es el producto vectorial de los vectores (1, 0, 0) y (0, 1,
            0)?{" "}
          </span>,
          <span>
            {" "}
            <br />
            a) (1, 0, 1) <br />
            b) (0, 0, 1) <br />
            c) (1, 1, 0) <br />
            d) (0, 1, 1)
          </span>,
          "b",
          <span>
            El producto vectorial es un vector perpendicular a ambos vectores
            originales: (0, 0, 1).
          </span>,
        ],
        [
          <span>¿Cuál es el vector unitario en la dirección de (3, 4)? </span>,
          <span>
            {" "}
            <br />
            a) (0.6, 0.8) <br />
            b) (0.8, 0.6) <br />
            c) (0.5, 0.5) <br />
            d) (0.7, 0.7)
          </span>,
          "a",
          <span>
            El vector unitario se obtiene dividiendo cada componente por la
            magnitud: (3/5, 4/5) = (0.6, 0.8).
          </span>,
        ],
        [
          <span>¿Cuál es la magnitud del vector (1, 1, 1)? </span>,
          <span>
            {" "}
            <br />
            a) √2 <br />
            b) √3 <br />
            c) √5 <br />
            d) √6
          </span>,
          "b",
          <span>
            La magnitud se calcula como √(1<sup>2</sup> + 1<sup>2</sup> + 1
            <sup>2</sup>) = √3.
          </span>,
        ],
        [
          <span>¿Qué ángulo forman los vectores (1, 0) y (0, 1)? </span>,
          <span>
            {" "}
            <br />
            a) 30º <br />
            b) 60º <br />
            c) 90º <br />
            d) 180º
          </span>,
          "c",
          <span>
            Los vectores (1, 0) y (0, 1) son perpendiculares y forman un ángulo
            de 90º.
          </span>,
        ],
        [
          <span>
            ¿Cuál es el resultado de multiplicar el vector (2, 3) por el escalar
            3?{" "}
          </span>,
          <span>
            {" "}
            <br />
            a) (5, 9) <br />
            b) (6, 9) <br />
            c) (6, 12) <br />
            d) (4, 6)
          </span>,
          "b",
          <span>
            Multiplicar un vector por un escalar implica multiplicar cada
            componente del vector por el escalar: 3*(2, 3) = (6, 9).
          </span>,
        ],
        [
          <span>¿Cuál es la magnitud del vector (-2, -2)? </span>,
          <span>
            {" "}
            <br />
            a) 2 <br />
            b) √2 <br />
            c) 2√2 <br />
            d) 4
          </span>,
          "c",
          <span>
            La magnitud se calcula como √((-2)<sup>2</sup> + (-2)<sup>2</sup>) =
            √(4 + 4) = √8 = 2√2.
          </span>,
        ],
        [
          <span>
            ¿Cuál es la proyección del vector (3, 4) en la dirección del eje x?{" "}
          </span>,
          <span>
            {" "}
            <br />
            a) (3, 0) <br />
            b) (0, 4) <br />
            c) (4, 3) <br />
            d) (3, 4)
          </span>,
          "a",
          <span>
            La proyección del vector (3, 4) en la dirección del eje x es (3, 0).
          </span>,
        ],
        [
          <span>¿Cuál es el ángulo entre los vectores (1, 1) y (1, -1)? </span>,
          <span>
            {" "}
            <br />
            a) 30º <br />
            b) 60º <br />
            c) 90º <br />
            d) 120º
          </span>,
          "c",
          <span>
            Los vectores (1, 1) y (1, -1) son perpendiculares y forman un ángulo
            de 90º.
          </span>,
        ],
        [
          <span>¿Cuál es la magnitud del vector (0, 0, 1)? </span>,
          <span>
            {" "}
            <br />
            a) 0 <br />
            b) 1 <br />
            c) √1 <br />
            d) √2
          </span>,
          "b",
          <span>
            La magnitud de un vector con una sola componente no nula es igual al
            valor absoluto de esa componente: √(1) = 1.
          </span>,
        ],
        [
          <span>
            ¿Cuál es el producto escalar de los vectores (2, 3, 4) y (1, 0, 0)?{" "}
          </span>,
          <span>
            {" "}
            <br />
            a) 2 <br />
            b) 3 <br />
            c) 4 <br />
            d) 9
          </span>,
          "a",
          <span>El producto escalar se calcula como 2*1 + 3*0 + 4*0 = 2.</span>,
        ],
        [
          <span>
            ¿Cuál es el resultado de restar el vector (1, 1) del vector (2, 2)?{" "}
          </span>,
          <span>
            {" "}
            <br />
            a) (1, 1) <br />
            b) (2, 2) <br />
            c) (3, 3) <br />
            d) (1, -1)
          </span>,
          "a",
          <span>
            La resta de los vectores (2, 2) y (1, 1) es (2-1, 2-1) = (1, 1).
          </span>,
        ],
        [
          <span>¿Cuál es el vector unitario en la dirección de (5, 12)? </span>,
          <span>
            {" "}
            <br />
            a) (5/12, 12/5) <br />
            b) (1/13, 1/13) <br />
            c) (5/13, 12/13) <br />
            d) (12/13, 5/13)
          </span>,
          "c",
          <span>
            El vector unitario se obtiene dividiendo cada componente por la
            magnitud: (5/13, 12/13).
          </span>,
        ],
        [
          <span>
            ¿Cuál es el producto escalar de los vectores (4, 5) y (6, 7)?{" "}
          </span>,
          <span>
            {" "}
            <br />
            a) 32 <br />
            b) 50 <br />
            c) 58 <br />
            d) 69
          </span>,
          "c",
          <span>
            El producto escalar se calcula como 4*6 + 5*7 = 24 + 35 = 58.
          </span>,
        ],
        [
          <span>
            ¿Cuál es el vector resultante de sumar (0, 0, 1) y (1, 1, 0)?{" "}
          </span>,
          <span>
            {" "}
            <br />
            a) (0, 1, 1) <br />
            b) (1, 1, 1) <br />
            c) (1, 0, 1) <br />
            d) (1, 2, 1)
          </span>,
          "b",
          <span>
            La suma de los vectores (0, 0, 1) y (1, 1, 0) es (0+1, 0+1, 1+0) =
            (1, 1, 1).
          </span>,
        ],
        [
          <span>¿Cuál es la magnitud del vector (6, 8)? </span>,
          <span>
            {" "}
            <br />
            a) 7 <br />
            b) 8 <br />
            c) 9 <br />
            d) 10
          </span>,
          "d",
          <span>
            La magnitud se calcula como √(6<sup>2</sup> + 8<sup>2</sup>) = √(36
            + 64) = √100 = 10.
          </span>,
        ],
        [
          <span>¿Cuál es el vector opuesto de (-4, 5)? </span>,
          <span>
            {" "}
            <br />
            a) (4, -5) <br />
            b) (-4, -5) <br />
            c) (5, -4) <br />
            d) (-5, 4)
          </span>,
          "a",
          <span>
            El vector opuesto se obtiene cambiando el signo de cada componente:
            (-4, 5) &rarr; (4, -5).
          </span>,
        ],
      ],
    ],
    // Tema 2
    [
      // SubTemas
      [
        [
          <span> ¿Cuál es la definición de cinemática? </span>,
          <span>
            {" "}
            <br /> a) Estudio de las fuerzas que causan el movimiento <br /> b)
            Estudio del movimiento sin considerar sus causas <br /> c) Estudio
            de la masa y energía <br /> d) Estudio de la termodinámica{" "}
          </span>,
          "b",
          <span>
            {" "}
            La cinemática es el estudio del movimiento de los cuerpos sin
            considerar las fuerzas que lo causan.{" "}
          </span>,
        ],

        [
          <span> ¿Cómo se define la masa puntual en cinemática? </span>,
          <span>
            {" "}
            <br /> a) Masa de un objeto distribuida uniformemente <br /> b)
            Suposición donde toda la masa de un objeto se concentra en un solo
            punto <br /> c) Masa variable con el tiempo <br /> d) Masa negativa{" "}
          </span>,
          "b",
          <span>
            {" "}
            La masa puntual es un concepto idealizado donde se supone que toda
            la masa de un objeto está concentrada en un único punto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se determina la posición de una partícula en un sistema de
            coordenadas?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Mediante su masa <br /> b) Mediante sus coordenadas
            espaciales <br /> c) Mediante su velocidad <br /> d) Mediante su
            energía{" "}
          </span>,
          "b",
          <span>
            {" "}
            La posición de una partícula se determina mediante sus coordenadas
            espaciales en un sistema de referencia.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál de las siguientes afirmaciones describe mejor el
            desplazamiento?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La distancia total recorrida por una partícula <br /> b)
            El cambio de posición de una partícula <br /> c) La rapidez promedio
            de una partícula <br /> d) El tiempo total de movimiento{" "}
          </span>,
          "b",
          <span>
            {" "}
            El desplazamiento es una magnitud vectorial que representa el cambio
            de posición de una partícula.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es la fórmula para calcular la velocidad media de una
            partícula?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) v<sub>m</sub>=d/t
            <br /> b) v<sub>m</sub>= 2d/t
            <br /> c) v<sub>m</sub>=t/d
            <br /> d) v<sub>m</sub>=d/(2t)
          </span>,
          "a",
          <span>
            {" "}
            La velocidad media se calcula como el desplazamiento dividido por el
            tiempo total transcurrido: v<sub>m</sub>=d/t .{" "}
          </span>,
        ],
        [
          <span> ¿Qué representa la aceleración en cinemática? </span>,
          <span>
            {" "}
            <br /> a) La rapidez promedio <br /> b) La variación de la velocidad
            en el tiempo <br /> c) La masa del objeto <br /> d) La distancia
            total recorrida{" "}
          </span>,
          "b",
          <span>
            {" "}
            La aceleración es una magnitud vectorial que indica la variación de
            la velocidad en el tiempo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué tipo de trayectoria sigue una partícula en movimiento
            rectilíneo uniformemente acelerado (MRUA)?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Una línea curva <br /> b) Una línea recta <br /> c) Un
            círculo <br /> d) Una parábola{" "}
          </span>,
          "b",
          <span>
            {" "}
            En un MRUA, la partícula sigue una trayectoria en línea recta debido
            a la aceleración constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se calcula el desplazamiento en un movimiento rectilíneo
            uniforme (MRU)?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 𝑑 = 𝑣 𝑡
            <br /> b) 𝑑 = 𝑎 𝑡
            <br /> c) 𝑑 = (1/2) 𝑎 𝑡 <sup>2</sup>
            <br /> d) 𝑑 = 𝑣<sub>0</sub> + 𝑎 𝑡
          </span>,
          "a",
          <span>
            {" "}
            En un MRU, el desplazamiento se calcula como el producto de la
            velocidad constante y el tiempo: 𝑑 = 𝑣 𝑡 .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué sucede con la aceleración de una partícula en un MRU?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Aumenta <br /> b) Disminuye <br /> c) Es constante <br />{" "}
            d) Es cero{" "}
          </span>,
          "d",
          <span>
            {" "}
            En un MRU, la aceleración de una partícula es cero porque su
            velocidad es constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es la fórmula de la posición en un movimiento rectilíneo
            uniformemente acelerado (MRUA)?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 𝑣 𝑡
            <br /> b) 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 𝑣<sub>0</sub> 𝑡 + (1/2) 𝑎 𝑡
            <sup>2</sup>
            <br /> c) 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + (1/2) 𝑎 𝑡<sup>2</sup>
            <br /> d) 𝑥 ( 𝑡 ) = 𝑣 𝑡 + (1/2) 𝑎 𝑡<sup>2</sup>
          </span>,
          "b",
          <span>
            {" "}
            En un MRUA, la posición se calcula mediante la fórmula 𝑥 ( 𝑡 ) = 𝑥
            <sub>0</sub>+ 𝑣<sub>0</sub> 𝑡 + (1/2) 𝑎 𝑡<sup>2</sup> , que incluye
            la posición inicial, la velocidad inicial y la aceleración.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            ¿Cuál es la unidad de medida de la aceleración en el Sistema
            Internacional de Unidades (SI)?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Metro por segundo (m/s) <br /> b) Metro por segundo al
            cuadrado (m/s²) <br /> c) Kilogramo por metro (kg/m) <br /> d)
            Newton (N){" "}
          </span>,
          "b",
          <span>
            {" "}
            La aceleración se mide en metros por segundo al cuadrado (m/s²) en
            el Sistema Internacional de Unidades (SI).{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué describe la ecuación 𝑣 = 𝑣<sub>0</sub> + 𝑎 𝑡 en cinemática?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La posición final <br /> b) La velocidad final <br /> c)
            La aceleración <br /> d) La distancia recorrida{" "}
          </span>,
          "b",
          <span>
            {" "}
            Esta ecuación describe la velocidad final de una partícula
            considerando su velocidad inicial 𝑣<sub>0</sub> , la aceleración 𝑎 y
            el tiempo 𝑡 .{" "}
          </span>,
        ],

        [
          <span> En el modelo de masa puntual, ¿qué se puede ignorar? </span>,
          <span>
            {" "}
            <br /> a) La masa del objeto <br /> b) Las fuerzas actuantes <br />{" "}
            c) Las dimensiones físicas del objeto <br /> d) La aceleración{" "}
          </span>,
          "c",
          <span>
            {" "}
            En el modelo de masa puntual, se pueden ignorar las dimensiones
            físicas del objeto.{" "}
          </span>,
        ],

        [
          <span> ¿Cuál es la fórmula de la aceleración media? </span>,
          <span>
            {" "}
            <br /> a) 𝑎 = Δ 𝑣 /Δ 𝑡
            <br /> b) 𝑎 = 𝑣/ 𝑡
            <br /> c) 𝑎 = 𝑑/ 𝑡
            <br /> d) 𝑎 = 𝐹 /𝑚
          </span>,
          "a",
          <span>
            {" "}
            La aceleración media se calcula como el cambio de velocidad dividido
            por el tiempo: 𝑎 = Δ 𝑣/ Δ 𝑡 .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál de las siguientes afirmaciones es verdadera sobre el MRU?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La aceleración es constante <br /> b) La velocidad cambia
            constantemente <br /> c) La velocidad es constante <br /> d) La
            posición permanece fija{" "}
          </span>,
          "c",
          <span> En el MRU, la velocidad es constante. </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se expresa la velocidad instantánea en términos de
            desplazamiento y tiempo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 𝑣 = Δ 𝑥/ Δ 𝑡
            <br /> b) 𝑣 = 𝑥/ 𝑡
            <br /> c) 𝑣 = 𝑑/ 𝑡
            <br /> d) 𝑣 = Δ 𝑑 /Δ 𝑡
          </span>,
          "a",
          <span>
            {" "}
            La velocidad instantánea se expresa como el cambio de desplazamiento
            ( Δ 𝑥 ) dividido por el cambio de tiempo ( Δ 𝑡 ): 𝑣 = Δ 𝑥 /Δ 𝑡 .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un MRUA, ¿cómo se relaciona la velocidad con el tiempo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Es constante <br /> b) Disminuye linealmente <br /> c)
            Aumenta linealmente <br /> d) Es inversamente proporcional al tiempo{" "}
          </span>,
          "c",
          <span>
            {" "}
            En un MRUA, la velocidad aumenta linealmente con el tiempo debido a
            la aceleración constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál de las siguientes describe el desplazamiento en términos
            vectoriales?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Magnitud sin dirección <br /> b) Cambio de posición con
            dirección <br /> c) Distancia total recorrida <br /> d) Rapidez
            media{" "}
          </span>,
          "b",
          <span>
            {" "}
            El desplazamiento es un vector que describe el cambio de posición
            con dirección.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se determina la velocidad media en un movimiento rectilíneo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Dividiendo la distancia total por el tiempo total <br />{" "}
            b) Dividiendo el desplazamiento por el tiempo total <br /> c)
            Dividiendo la aceleración por el tiempo <br /> d) Multiplicando la
            velocidad por el tiempo{" "}
          </span>,
          "b",
          <span>
            {" "}
            La velocidad media se determina dividiendo el desplazamiento por el
            tiempo total.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En cinemática, ¿qué representa la gráfica de posición-tiempo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La relación entre velocidad y tiempo <br /> b) La
            variación de la posición con respecto al tiempo <br /> c) La
            aceleración en función del tiempo <br /> d) La masa en función del
            desplazamiento{" "}
          </span>,
          "b",
          <span>
            {" "}
            La gráfica de posición-tiempo muestra cómo varía la posición de una
            partícula con el tiempo.{" "}
          </span>,
        ],
      ],
      [
        [
          <span>
            {" "}
            ¿Cuál es la característica principal del Movimiento Rectilíneo
            Uniforme (MRU)?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Aceleración constante <br /> b) Velocidad constante <br />{" "}
            c) Rapidez variable <br /> d) Aceleración variable{" "}
          </span>,
          "b",
          <span> En el MRU, la velocidad de la partícula es constante. </span>,
        ],

        [
          <span> ¿Cómo se expresa la ecuación de la posición en el MRU? </span>,
          <span>
            {" "}
            <br /> a) 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 1/2 𝑎 𝑡<sup>2</sup>
            <br /> b) 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 𝑣<sub>0</sub> 𝑡 + 1/2 𝑎 𝑡
            <sup>2</sup>
            <br /> c) 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 𝑣 𝑡
            <br /> d) 𝑥 ( 𝑡 ) = 𝑣 𝑡
          </span>,
          "c",
          <span>
            {" "}
            En el MRU, la posición se expresa como 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 𝑣 𝑡
            , donde 𝑥<sub>0</sub> es la posición inicial y 𝑣 es la velocidad
            constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué tipo de aceleración caracteriza al Movimiento Rectilíneo
            Uniformemente Acelerado (MRUA)?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Aceleración constante <br /> b) Velocidad constante <br />{" "}
            c) Rapidez variable <br /> d) Aceleración variable{" "}
          </span>,
          "a",
          <span> En el MRUA, la aceleración es constante. </span>,
        ],

        [
          <span> ¿Cuál es la fórmula de la velocidad en el MRUA? </span>,
          <span>
            {" "}
            <br /> a) 𝑣 = 𝑣<sub>0</sub> + 𝑎 𝑡
            <br /> b) 𝑣 = 𝑣<sub>0</sub> − 𝑎 𝑡
            <br /> c) 𝑣 = 𝑎 𝑡
            <br /> d) 𝑣 = 𝑣<sub>0</sub> + 1/2 𝑎 𝑡<sup>2</sup>
          </span>,
          "a",
          <span>
            {" "}
            En el MRUA, la velocidad se calcula como 𝑣 = 𝑣<sub>0</sub> + 𝑎 𝑡 ,
            donde 𝑣<sub>0</sub>
            es la velocidad inicial y 𝑎 la aceleración.{" "}
          </span>,
        ],

        [
          <span> ¿Cómo se calcula el desplazamiento en el MRUA? </span>,
          <span>
            {" "}
            <br /> a) 𝑑 = 𝑣<sub>0</sub> 𝑡 + 1/2 𝑎 𝑡<sup>2</sup>
            <br /> b) 𝑑 = 𝑣 𝑡
            <br /> c) 𝑑 = 𝑣<sub>0</sub> 𝑡
            <br /> d) 𝑑 = 𝑎 𝑡<sup>2</sup>
          </span>,
          "a",
          <span>
            {" "}
            En el MRUA, el desplazamiento se calcula con la fórmula 𝑑 = 𝑣
            <sub>0</sub> 𝑡 + 1/2 𝑎 𝑡<sup>2</sup> , considerando la velocidad
            inicial 𝑣<sub>0</sub> , el tiempo 𝑡 y la aceleración 𝑎 .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué representa una gráfica de velocidad contra tiempo para un MRU?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Una línea recta inclinada <br /> b) Una parábola <br /> c)
            Una línea horizontal <br /> d) Una línea curva{" "}
          </span>,
          "c",
          <span>
            {" "}
            Para un MRU, la gráfica de velocidad contra tiempo es una línea
            horizontal, indicando que la velocidad es constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un MRUA, ¿cómo se relaciona la aceleración con el tiempo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Es constante <br /> b) Aumenta linealmente <br /> c)
            Disminuye linealmente <br /> d) Es inversamente proporcional al
            tiempo{" "}
          </span>,
          "a",
          <span> En un MRUA, la aceleración es constante con el tiempo. </span>,
        ],

        [
          <span> ¿Cuál es la ecuación de la posición en un MRUA? </span>,
          <span>
            {" "}
            <br /> a) 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 𝑣 𝑡
            <br /> b) 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 1/2 𝑎 𝑡<sup>2</sup>
            <br /> c) 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 𝑣<sub>0</sub> 𝑡 + 1/2 𝑎 𝑡
            <sup>2</sup>
            <br /> d) 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 𝑣<sub>0</sub> 𝑡
          </span>,
          "c",
          <span>
            {" "}
            En un MRUA, la posición se calcula con 𝑥 ( 𝑡 ) = 𝑥<sub>0</sub> + 𝑣
            <sub>0</sub> 𝑡 + 1/2 𝑎 𝑡<sup>2</sup> , considerando la posición
            inicial 𝑥<sub>0</sub> , la velocidad inicial 𝑣
            <sub>0</sub> , la aceleración 𝑎 y el tiempo 𝑡 .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se calcula la velocidad final en un MRUA si la partícula parte
            del reposo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 𝑣 <sub>𝑓</sub> = 𝑎 𝑡
            <br /> b) 𝑣 <sub>𝑓</sub> = 𝑣<sub>0</sub> + 𝑎 𝑡
            <br /> c) 𝑣 <sub>𝑓</sub> = 𝑣<sub>0</sub> 𝑎
            <br /> d) 𝑣 <sub>𝑓</sub> = 𝑎 𝑡<sup>2</sup>
          </span>,
          "a",
          <span>
            {" "}
            Si la partícula parte del reposo, la velocidad final 𝑣 <sub>
              𝑓
            </sub>{" "}
            se calcula como 𝑣 <sub>𝑓</sub> = 𝑎 𝑡 , donde 𝑎 es la aceleración y 𝑡
            el tiempo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En cinemática 1D, ¿qué representa el área bajo una gráfica de
            velocidad contra tiempo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La aceleración <br /> b) El desplazamiento <br /> c) La
            velocidad final <br /> d) La posición inicial{" "}
          </span>,
          "b",
          <span>
            {" "}
            El área bajo una gráfica de velocidad contra tiempo representa el
            desplazamiento.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            ¿Qué describe la gráfica de posición contra tiempo en un MRU?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Una línea recta inclinada <br /> b) Una parábola <br /> c)
            Una línea horizontal <br /> d) Una línea curva{" "}
          </span>,
          "a",
          <span>
            {" "}
            En el MRU, la gráfica de posición contra tiempo es una línea recta
            inclinada que indica una velocidad constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es la característica de la aceleración en un MRU?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Aceleración variable <br /> b) Aceleración constante{" "}
            <br /> c) Aceleración nula <br /> d) Aceleración decreciente{" "}
          </span>,
          "c",
          <span>
            {" "}
            En el MRU, la aceleración es nula porque la velocidad es constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En un MRUA, ¿qué describe la gráfica de aceleración contra tiempo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Una línea recta inclinada <br /> b) Una línea horizontal{" "}
            <br /> c) Una parábola <br /> d) Una línea curva{" "}
          </span>,
          "b",
          <span>
            {" "}
            En el MRUA, la gráfica de aceleración contra tiempo es una línea
            horizontal indicando una aceleración constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se expresa la ecuación de la velocidad en un MRUA cuando la
            partícula parte del reposo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 𝑣 = 𝑎 𝑡
            <br /> b) 𝑣 = 𝑣<sub>0</sub> + 𝑎 𝑡
            <br /> c) 𝑣 = 𝑣<sub>0</sub> + 1/2 𝑎 𝑡<sup>2</sup>
            <br /> d) 𝑣 = 𝑎 𝑡<sup>2</sup> 1/2
          </span>,
          "a",
          <span>
            {" "}
            En un MRUA con velocidad inicial cero, la ecuación de la velocidad
            es 𝑣 = 𝑎 𝑡 , donde 𝑎 es la aceleración y 𝑡 el tiempo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál de las siguientes fórmulas representa correctamente la
            posición en un MRUA?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 𝑥 = 𝑥<sub>0</sub> + 𝑣 𝑡
            <br /> b) 𝑥 = 𝑥<sub>0</sub> + 𝑎 𝑡<sup>2</sup>
            <br /> c) 𝑥 = 𝑥<sub>0</sub> + 𝑣<sub>0</sub> 𝑡 + 1/2 𝑎 𝑡<sup>2</sup>
            <br /> d) 𝑥 = 𝑥<sub>0</sub> + 𝑣<sub>0</sub> 𝑡
          </span>,
          "c",
          <span>
            {" "}
            En un MRUA, la posición se calcula con 𝑥 = 𝑥<sub>0</sub> + 𝑣
            <sub>0</sub> 𝑡 + 1/2 𝑎 𝑡<sup>2</sup> , considerando la posición
            inicial 𝑥<sub>0</sub> , la velocidad inicial 𝑣<sub>0</sub> y la
            aceleración 𝑎 .{" "}
          </span>,
        ],

        [
          <span> En el MRUA, ¿cómo varía la velocidad con el tiempo? </span>,
          <span>
            {" "}
            <br /> a) Disminuye linealmente <br /> b) Aumenta linealmente <br />{" "}
            c) Permanece constante <br /> d) Aumenta exponencialmente{" "}
          </span>,
          "b",
          <span>
            {" "}
            En un MRUA, la velocidad aumenta linealmente con el tiempo debido a
            la aceleración constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué determina el área bajo una gráfica de aceleración contra tiempo
            en un MRUA?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La velocidad <br /> b) La posición <br /> c) La
            aceleración <br /> d) El desplazamiento{" "}
          </span>,
          "a",
          <span>
            {" "}
            El área bajo la gráfica de aceleración contra tiempo en un MRUA
            representa la velocidad.{" "}
          </span>,
        ],

        [
          <span> En el MRU, ¿cómo se calcula la rapidez media? </span>,
          <span>
            {" "}
            <br /> a) Dividiendo la distancia recorrida por el tiempo total{" "}
            <br /> b) Multiplicando la velocidad por el tiempo <br /> c) Sumando
            las velocidades inicial y final <br /> d) Dividiendo la aceleración
            por el tiempo{" "}
          </span>,
          "a",
          <span>
            {" "}
            En el MRU, la rapidez media se calcula dividiendo la distancia
            recorrida por el tiempo total.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué describe una gráfica de velocidad contra tiempo en un MRUA?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Una línea curva <br /> b) Una línea horizontal <br /> c)
            Una línea recta inclinada <br /> d) Una parábola{" "}
          </span>,
          "c",
          <span>
            {" "}
            En un MRUA, la gráfica de velocidad contra tiempo es una línea recta
            inclinada que indica una aceleración constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se expresa la aceleración en términos de cambio de velocidad y
            tiempo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 𝑎 = 𝑑/ 𝑡
            <br /> b) 𝑎 = Δ 𝑣/Δ 𝑡
            <br /> c) 𝑎 = 𝑣 𝑡
            <br /> d) 𝑎 = 𝑥 /𝑡
          </span>,
          "b",
          <span>
            {" "}
            La aceleración se expresa como el cambio de velocidad dividido por
            el tiempo: 𝑎 = Δ 𝑣 /Δ 𝑡 .{" "}
          </span>,
        ],
      ],
      [
        [
          <span>
            {" "}
            ¿Cuál es la velocidad inicial necesaria para que un objeto alcance
            una altura máxima de 20 metros en un tiro vertical?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 10 m/s <br /> b) 14 m/s <br /> c) 20 m/s <br /> d) 28 m/s{" "}
          </span>,
          "b",
          <span>
            {" "}
            Usando la fórmula 𝑣<sub>0</sub> = √(2 𝑔 ℎ ): 𝑣<sub>0</sub> = √(2 ⋅
            9.8 m/s<sup>2</sup> ⋅ 20 m) = 14m/s .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuánto tiempo tarda un objeto en alcanzar el punto más alto en un
            tiro vertical si su velocidad inicial es de 30 m/s?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 1.5 s <br /> b) 2.5 s <br /> c) 3.0 s <br /> d) 4.0 s{" "}
          </span>,
          "c",
          <span>
            {" "}
            Usando la fórmula 𝑡 = 𝑣<sub>0</sub>/ 𝑔 : 𝑡 = 30m/s / 9.8m/s
            <sup>2</sup> ≈ 3.0s .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es la velocidad de un objeto justo antes de tocar el suelo si
            se deja caer desde una altura de 50 metros?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 20 m/s <br /> b) 25 m/s <br /> c) 30 m/s <br /> d) 35 m/s{" "}
          </span>,
          "c",
          <span>
            {" "}
            Usando la fórmula 𝑣 = √(2 𝑔 ℎ ): 𝑣 = √(2 ⋅ 9.8m/s<sup>2</sup> ⋅ 50
            m) ≈ 30 m/s .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es el tiempo total de vuelo para un objeto lanzado
            verticalmente hacia arriba con una velocidad inicial de 25 m/s?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 2.5 s <br /> b) 5.0 s <br /> c) 7.5 s <br /> d) 10.0 s{" "}
          </span>,
          "b",
          <span>
            {" "}
            El tiempo total de vuelo es el doble del tiempo para alcanzar la
            altura máxima: 𝑡<sub>total</sub> = 2 × (𝑣<sub>0</sub>/ 𝑔 = 2 × (25
            m/s / 9.8 m/s<sup>2</sup> ≈ 5.0s .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En una caída libre, ¿cuál es la aceleración del objeto?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 9.8 m/s² <br /> b) 10 m/s² <br /> c) 0 m/s² <br /> d)
            Depende de la masa del objeto{" "}
          </span>,
          "a",
          <span>
            {" "}
            En una caída libre, la aceleración del objeto es constante e igual a
            la gravedad: 9.8 m/s².{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es el desplazamiento de un objeto después de 3 segundos en una
            caída libre desde el reposo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 29.4 m <br /> b) 44.1 m <br /> c) 58.8 m <br /> d) 98.0 m{" "}
          </span>,
          "b",
          <span>
            {" "}
            Usando la fórmula 𝑑 = 1/2 𝑔 𝑡<sup>2</sup> : 𝑑 = 1/2 ⋅ 9.8m/s
            <sup>2</sup> ⋅ ( 3s )<sup>2</sup>= 44.1 m .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En una trayectoria parabólica, ¿cómo se comporta la velocidad
            horizontal?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Aumenta con el tiempo <br /> b) Disminuye con el tiempo{" "}
            <br /> c) Permanece constante <br /> d) Es cero{" "}
          </span>,
          "c",
          <span>
            {" "}
            En una trayectoria parabólica, la velocidad horizontal permanece
            constante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué ángulo de lanzamiento maximiza el alcance de un proyectil en
            una trayectoria 2D?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 30 grados <br /> b) 45 grados <br /> c) 60 grados <br />{" "}
            d) 90 grados{" "}
          </span>,
          "b",
          <span>
            {" "}
            El ángulo de 45 grados maximiza el alcance horizontal de un
            proyectil en una trayectoria parabólica.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            En una trayectoria 2D, ¿qué describe la componente vertical del
            movimiento?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Velocidad constante <br /> b) Aceleración constante <br />{" "}
            c) Sin aceleración <br /> d) Velocidad y aceleración variables{" "}
          </span>,
          "b",
          <span>
            {" "}
            La componente vertical del movimiento tiene una aceleración
            constante debido a la gravedad.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se calcula el tiempo de vuelo total de un proyectil lanzado
            desde el suelo con velocidad inicial 𝑣 0 y ángulo 𝜃 ?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 𝑡 = (𝑣<sub>0</sub> sin ⁡ 𝜃)/ 𝑔
            <br /> b) 𝑡 = (2 𝑣<sub>0</sub> cos ⁡ 𝜃)/ 𝑔
            <br /> c) 𝑡 =( 2 𝑣<sub>0</sub> sin ⁡ 𝜃 )/𝑔
            <br /> d) 𝑡 = (𝑣<sub>0</sub> cos ⁡ 𝜃)/ 𝑔
          </span>,
          "c",
          <span>
            {" "}
            El tiempo de vuelo total de un proyectil se calcula como 𝑡 = (2 𝑣
            <sub>0</sub>
            sin ⁡ 𝜃)/ 𝑔 , donde 𝑣<sub>0</sub> es la velocidad inicial y 𝜃 el
            ángulo de lanzamiento.{" "}
          </span>,
        ],
      ],
    ],
    // Tema 3
    [
      // SubTemas
      [
        [
          <span> ¿Qué es una fuerza en el contexto de la dinámica? </span>,
          <span>
            {" "}
            <br /> a) Una cantidad escalar <br /> b) Una cantidad vectorial{" "}
            <br /> c) Un cambio en la energía <br /> d) Una distancia recorrida{" "}
          </span>,
          "b",
          <span>
            {" "}
            Una fuerza es una cantidad vectorial que tiene magnitud y dirección.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál de las siguientes es una de las fuerzas fundamentales en la
            naturaleza?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Fuerza de fricción <br /> b) Fuerza gravitacional <br />{" "}
            c) Fuerza centrífuga <br /> d) Fuerza elástica{" "}
          </span>,
          "b",
          <span>
            {" "}
            La fuerza gravitacional es una de las fuerzas fundamentales en la
            naturaleza.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué ley describe la relación entre la fuerza aplicada a un objeto y
            su aceleración?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Primera ley de Newton <br /> b) Segunda ley de Newton{" "}
            <br /> c) Tercera ley de Newton <br /> d) Ley de la conservación de
            la energía{" "}
          </span>,
          "b",
          <span>
            {" "}
            La segunda ley de Newton describe la relación entre la fuerza
            aplicada a un objeto y su aceleración: 𝐹 = 𝑚 𝑎 .{" "}
          </span>,
        ],

        [
          <span> ¿Qué tipo de fuerza es la fuerza normal? </span>,
          <span>
            {" "}
            <br /> a) Fuerza fundamental <br /> b) Fuerza derivada <br /> c)
            Fuerza centrífuga <br /> d) Fuerza gravitacional{" "}
          </span>,
          "b",
          <span>
            {" "}
            La fuerza normal es una fuerza derivada que actúa perpendicularmente
            a la superficie de contacto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es la unidad de medida de la fuerza en el Sistema
            Internacional de Unidades (SI)?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Kilogramo (kg) <br /> b) Metro (m) <br /> c) Newton (N){" "}
            <br /> d) Joule (J){" "}
          </span>,
          "c",
          <span>
            {" "}
            La unidad de medida de la fuerza en el Sistema Internacional de
            Unidades (SI) es el Newton (N).{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál de las siguientes fuerzas es una fuerza derivada?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Fuerza gravitacional <br /> b) Fuerza electromagnética{" "}
            <br /> c) Fuerza de fricción <br /> d) Fuerza nuclear fuerte{" "}
          </span>,
          "c",
          <span>
            {" "}
            La fuerza de fricción es una fuerza derivada que surge del contacto
            entre dos superficies.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué fuerza fundamental es responsable de mantener los electrones en
            órbita alrededor del núcleo en un átomo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Fuerza gravitacional <br /> b) Fuerza electromagnética{" "}
            <br /> c) Fuerza nuclear fuerte <br /> d) Fuerza nuclear débil{" "}
          </span>,
          "b",
          <span>
            {" "}
            La fuerza electromagnética es responsable de mantener los electrones
            en órbita alrededor del núcleo en un átomo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué fuerza actúa siempre en dirección opuesta al movimiento
            relativo de dos superficies?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Fuerza de fricción <br /> b) Fuerza normal <br /> c)
            Fuerza centrípeta <br /> d) Fuerza gravitacional{" "}
          </span>,
          "a",
          <span>
            {" "}
            La fuerza de fricción actúa siempre en dirección opuesta al
            movimiento relativo de dos superficies.{" "}
          </span>,
        ],

        [
          <span> ¿Qué describe la tercera ley de Newton? </span>,
          <span>
            {" "}
            <br /> a) La inercia de un objeto <br /> b) La proporcionalidad
            entre fuerza y aceleración <br /> c) La acción y reacción entre dos
            cuerpos <br /> d) La conservación del momento lineal{" "}
          </span>,
          "c",
          <span>
            {" "}
            La tercera ley de Newton describe que para cada acción hay una
            reacción igual y opuesta.{" "}
          </span>,
        ],

        [
          <span> ¿Cuál de las siguientes NO es una fuerza fundamental? </span>,
          <span>
            {" "}
            <br /> a) Fuerza gravitacional <br /> b) Fuerza electromagnética{" "}
            <br /> c) Fuerza de tensión <br /> d) Fuerza nuclear fuerte{" "}
          </span>,
          "c",
          <span>
            {" "}
            La fuerza de tensión no es una fuerza fundamental, es una fuerza
            derivada.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            ¿Qué representa la unidad de fuerza Newton (N) en términos de
            unidades básicas del Sistema Internacional?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) kg·m/s <br /> b) kg·m/s² <br /> c) kg·m/s³ <br /> d) m/s²{" "}
          </span>,
          "b",
          <span>
            {" "}
            El Newton (N) se representa en términos de unidades básicas como
            kg·m/s².{" "}
          </span>,
        ],

        [
          <span> ¿Cuál de las siguientes es una fuerza fundamental? </span>,
          <span>
            {" "}
            <br /> a) Fuerza elástica <br /> b) Fuerza centrípeta <br /> c)
            Fuerza nuclear fuerte <br /> d) Fuerza de fricción{" "}
          </span>,
          "c",
          <span>
            {" "}
            La fuerza nuclear fuerte es una de las fuerzas fundamentales en la
            naturaleza.{" "}
          </span>,
        ],

        [
          <span> ¿Qué tipo de fuerza es la fuerza de tensión? </span>,
          <span>
            {" "}
            <br /> a) Fuerza fundamental <br /> b) Fuerza derivada <br /> c)
            Fuerza nuclear <br /> d) Fuerza gravitacional{" "}
          </span>,
          "b",
          <span> La fuerza de tensión es una fuerza derivada. </span>,
        ],

        [
          <span> ¿Qué describe la primera ley de Newton? </span>,
          <span>
            {" "}
            <br /> a) La proporcionalidad entre fuerza y aceleración <br /> b)
            La acción y reacción entre dos cuerpos <br /> c) La inercia de un
            objeto <br /> d) La conservación de la energía{" "}
          </span>,
          "c",
          <span>
            {" "}
            La primera ley de Newton describe la inercia de un objeto, es decir,
            la tendencia de un objeto a mantener su estado de reposo o
            movimiento a menos que una fuerza actúe sobre él.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál de las siguientes afirmaciones es verdadera sobre la fuerza de
            fricción?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Siempre es mayor en superficies lisas <br /> b) Actúa en
            la misma dirección del movimiento <br /> c) Depende de la normal y
            el coeficiente de fricción <br /> d) Es una fuerza fundamental{" "}
          </span>,
          "c",
          <span>
            {" "}
            La fuerza de fricción depende de la fuerza normal y del coeficiente
            de fricción entre las superficies en contacto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué fuerza mantiene unidos los protones y neutrones en el núcleo de
            un átomo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Fuerza gravitacional <br /> b) Fuerza electromagnética{" "}
            <br /> c) Fuerza nuclear fuerte <br /> d) Fuerza nuclear débil{" "}
          </span>,
          "c",
          <span>
            {" "}
            La fuerza nuclear fuerte mantiene unidos los protones y neutrones en
            el núcleo de un átomo.{" "}
          </span>,
        ],

        [
          <span> ¿Qué describe la segunda ley de Newton? </span>,
          <span>
            {" "}
            <br /> a) La proporcionalidad entre fuerza y aceleración <br /> b)
            La acción y reacción entre dos cuerpos <br /> c) La inercia de un
            objeto <br /> d) La conservación de la energía{" "}
          </span>,
          "a",
          <span>
            {" "}
            La segunda ley de Newton describe la proporcionalidad entre fuerza y
            aceleración: 𝐹 = 𝑚 𝑎 .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál de las siguientes fuerzas es responsable de la atracción entre
            masas?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Fuerza electromagnética <br /> b) Fuerza nuclear fuerte{" "}
            <br /> c) Fuerza nuclear débil <br /> d) Fuerza gravitacional{" "}
          </span>,
          "d",
          <span>
            {" "}
            La fuerza gravitacional es responsable de la atracción entre masas.{" "}
          </span>,
        ],

        [
          <span> ¿Qué tipo de fuerza es la fuerza centrípeta? </span>,
          <span>
            {" "}
            <br /> a) Fuerza fundamental <br /> b) Fuerza derivada <br /> c)
            Fuerza nuclear <br /> d) Fuerza gravitacional{" "}
          </span>,
          "b",
          <span>
            {" "}
            La fuerza centrípeta es una fuerza derivada que actúa hacia el
            centro de un movimiento circular.{" "}
          </span>,
        ],

        [
          <span> ¿Qué describe la tercera ley de Newton? </span>,
          <span>
            {" "}
            <br /> a) La proporcionalidad entre fuerza y aceleración <br /> b)
            La acción y reacción entre dos cuerpos <br /> c) La inercia de un
            objeto <br /> d) La conservación de la energía{" "}
          </span>,
          "b",
          <span>
            {" "}
            La tercera ley de Newton describe que para cada acción hay una
            reacción igual y opuesta.{" "}
          </span>,
        ],
      ],
      [
        [
          <span>
            {" "}
            ¿Qué describe la primera ley de Newton, también conocida como la ley
            de la inercia?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La fuerza es igual a la masa por la aceleración <br /> b)
            Un cuerpo en reposo permanece en reposo y un cuerpo en movimiento
            permanece en movimiento a menos que una fuerza externa actúe sobre
            él <br /> c) Para cada acción hay una reacción igual y opuesta{" "}
            <br /> d) La energía no se crea ni se destruye, solo se transforma{" "}
          </span>,
          "b",
          <span>
            {" "}
            La primera ley de Newton establece que un cuerpo en reposo permanece
            en reposo y un cuerpo en movimiento permanece en movimiento a menos
            que una fuerza externa actúe sobre él.{" "}
          </span>,
        ],

        [
          <span> ¿Qué establece la segunda ley de Newton? </span>,
          <span>
            {" "}
            <br /> a) La inercia de un objeto <br /> b) La proporcionalidad
            entre fuerza y aceleración <br /> c) La acción y reacción entre dos
            cuerpos <br /> d) La conservación de la energía{" "}
          </span>,
          "b",
          <span>
            {" "}
            La segunda ley de Newton establece que la fuerza es igual a la masa
            por la aceleración: 𝐹 = 𝑚 𝑎 .{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué implica la tercera ley de Newton sobre las fuerzas de acción y
            reacción?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Las fuerzas de acción y reacción se cancelan mutuamente{" "}
            <br /> b) Las fuerzas de acción y reacción son iguales en magnitud y
            opuestas en dirección <br /> c) La fuerza neta es igual a cero{" "}
            <br /> d) La aceleración es constante{" "}
          </span>,
          "b",
          <span>
            {" "}
            La tercera ley de Newton implica que las fuerzas de acción y
            reacción son iguales en magnitud y opuestas en dirección.{" "}
          </span>,
        ],

        [
          <span> ¿Cuál es un ejemplo de la primera ley de Newton? </span>,
          <span>
            {" "}
            <br /> a) Un objeto en reposo se mantiene en reposo a menos que se
            aplique una fuerza <br /> b) Un coche acelera cuando se presiona el
            pedal del acelerador <br /> c) Un barco se mueve hacia adelante
            cuando se empuja con un remo <br /> d) Un cohete se lanza al espacio
            debido a la fuerza de los motores{" "}
          </span>,
          "a",
          <span>
            {" "}
            Un ejemplo de la primera ley de Newton es un objeto en reposo que se
            mantiene en reposo a menos que se aplique una fuerza.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se formula la segunda ley de Newton en términos matemáticos?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) 𝐹 = 𝑚 𝑎<sup>2</sup>
            <br /> b) 𝐹 = 𝑚 𝑣
            <br /> c) 𝐹 = 𝑚 𝑎
            <br /> d) 𝐹 = 𝑚 + 𝑎
          </span>,
          "c",
          <span>
            {" "}
            La segunda ley de Newton se formula matemáticamente como 𝐹 = 𝑚 𝑎 ,
            donde 𝐹 es la fuerza, 𝑚 es la masa y 𝑎 es la aceleración.{" "}
          </span>,
        ],

        [
          <span> ¿Qué describe un ejemplo de la tercera ley de Newton? </span>,
          <span>
            {" "}
            <br /> a) Un coche que acelera en una carretera recta <br /> b) Un
            libro que se mantiene en reposo sobre una mesa <br /> c) El empuje
            hacia atrás experimentado al disparar una pistola <br /> d) La caída
            libre de un objeto{" "}
          </span>,
          "c",
          <span>
            {" "}
            Un ejemplo de la tercera ley de Newton es el empuje hacia atrás
            experimentado al disparar una pistola.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué sucede con un objeto en movimiento, según la primera ley de
            Newton, si no actúan fuerzas externas sobre él?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Se desacelera y se detiene <br /> b) Continúa moviéndose
            con velocidad constante en línea recta <br /> c) Cambia su dirección
            de movimiento <br /> d) Se acelera indefinidamente{" "}
          </span>,
          "b",
          <span>
            {" "}
            Según la primera ley de Newton, un objeto en movimiento continúa
            moviéndose con velocidad constante en línea recta si no actúan
            fuerzas externas sobre él.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo afecta la masa de un objeto a la aceleración, según la segunda
            ley de Newton?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La masa no afecta la aceleración <br /> b) A mayor masa,
            menor aceleración para una fuerza dada <br /> c) A mayor masa, mayor
            aceleración para una fuerza dada <br /> d) La masa afecta solo la
            velocidad, no la aceleración{" "}
          </span>,
          "b",
          <span>
            {" "}
            Según la segunda ley de Newton, a mayor masa, menor aceleración para
            una fuerza dada.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es una consecuencia de la tercera ley de Newton en la
            interacción entre dos cuerpos?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Solo uno de los cuerpos experimenta una fuerza <br /> b)
            Ambos cuerpos experimentan fuerzas de igual magnitud pero en
            direcciones opuestas <br /> c) Las fuerzas de ambos cuerpos se
            cancelan mutuamente <br /> d) Uno de los cuerpos acelera, mientras
            que el otro permanece en reposo{" "}
          </span>,
          "b",
          <span>
            {" "}
            Una consecuencia de la tercera ley de Newton es que ambos cuerpos
            experimentan fuerzas de igual magnitud pero en direcciones opuestas.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué postula la primera ley de Newton sobre los objetos en
            movimiento?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Los objetos en movimiento pierden energía constantemente{" "}
            <br /> b) Los objetos en movimiento tienden a detenerse naturalmente{" "}
            <br /> c) Los objetos en movimiento continúan moviéndose
            indefinidamente si no hay fuerzas externas actuando sobre ellos{" "}
            <br /> d) Los objetos en movimiento solo pueden cambiar su velocidad
            mediante la acción de fuerzas internas{" "}
          </span>,
          "c",
          <span>
            {" "}
            La primera ley de Newton postula que los objetos en movimiento
            continúan moviéndose indefinidamente si no hay fuerzas externas
            actuando sobre ellos.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            ¿Qué postula la primera ley de Newton sobre los objetos en reposo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Los objetos en reposo tienden a moverse espontáneamente{" "}
            <br /> b) Los objetos en reposo permanecen en reposo a menos que una
            fuerza externa actúe sobre ellos <br /> c) Los objetos en reposo
            pierden masa con el tiempo <br /> d) Los objetos en reposo generan
            energía{" "}
          </span>,
          "b",
          <span>
            {" "}
            La primera ley de Newton postula que los objetos en reposo
            permanecen en reposo a menos que una fuerza externa actúe sobre
            ellos.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            Según la segunda ley de Newton, ¿cómo se calcula la fuerza neta que
            actúa sobre un objeto?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Multiplicando la masa por la velocidad <br /> b) Sumando
            todas las fuerzas aplicadas <br /> c) Multiplicando la masa por la
            aceleración <br /> d) Restando la fuerza de fricción de la fuerza
            aplicada{" "}
          </span>,
          "c",
          <span>
            {" "}
            Según la segunda ley de Newton, la fuerza neta que actúa sobre un
            objeto se calcula multiplicando la masa por la aceleración: 𝐹 = 𝑚 𝑎
            .{" "}
          </span>,
        ],

        [
          <span> ¿Qué describe un ejemplo de la tercera ley de Newton? </span>,
          <span>
            {" "}
            <br /> a) Un coche que desacelera en una pendiente <br /> b) Un
            globo de aire caliente ascendiendo <br /> c) Un nadador que empuja
            el agua hacia atrás y se mueve hacia adelante <br /> d) Un objeto
            cayendo libremente{" "}
          </span>,
          "c",
          <span>
            {" "}
            Un ejemplo de la tercera ley de Newton es un nadador que empuja el
            agua hacia atrás y se mueve hacia adelante.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se relaciona la fuerza de fricción con la primera ley de
            Newton?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La fuerza de fricción siempre actúa a favor del movimiento{" "}
            <br /> b) La fuerza de fricción puede detener el movimiento de un
            objeto <br /> c) La fuerza de fricción no afecta a la inercia <br />{" "}
            d) La fuerza de fricción siempre actúa hacia arriba{" "}
          </span>,
          "b",
          <span>
            {" "}
            La fuerza de fricción puede detener el movimiento de un objeto, lo
            que se relaciona con la primera ley de Newton, que postula que un
            objeto en movimiento continúa moviéndose a menos que una fuerza
            externa actúe sobre él.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué establece la tercera ley de Newton sobre las interacciones
            entre dos cuerpos?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Un cuerpo experimenta una fuerza sin afectar al otro{" "}
            <br /> b) Ambos cuerpos experimentan fuerzas que son iguales en
            magnitud y opuestas en dirección <br /> c) Las fuerzas actúan en la
            misma dirección <br /> d) Ninguno de los cuerpos experimenta una
            fuerza{" "}
          </span>,
          "b",
          <span>
            {" "}
            La tercera ley de Newton establece que ambos cuerpos experimentan
            fuerzas que son iguales en magnitud y opuestas en dirección.{" "}
          </span>,
        ],

        [
          <span> ¿Qué papel juega la masa en la segunda ley de Newton? </span>,
          <span>
            {" "}
            <br /> a) La masa no afecta la fuerza neta <br /> b) La masa
            determina la aceleración para una fuerza dada <br /> c) La masa solo
            afecta a la velocidad, no a la fuerza <br /> d) La masa es
            inversamente proporcional a la aceleración{" "}
          </span>,
          "b",
          <span>
            {" "}
            En la segunda ley de Newton, la masa determina la aceleración para
            una fuerza dada, ya que 𝐹 = 𝑚 𝑎 .{" "}
          </span>,
        ],

        [
          <span> ¿Cuál es una consecuencia de la primera ley de Newton? </span>,
          <span>
            {" "}
            <br /> a) Un objeto en movimiento tiende a detenerse espontáneamente{" "}
            <br /> b) Un objeto en movimiento sigue moviéndose a velocidad
            constante en línea recta si no hay fuerzas externas <br /> c) Un
            objeto en reposo siempre tiende a moverse <br /> d) Un objeto en
            movimiento pierde masa{" "}
          </span>,
          "b",
          <span>
            {" "}
            Una consecuencia de la primera ley de Newton es que un objeto en
            movimiento sigue moviéndose a velocidad constante en línea recta si
            no hay fuerzas externas.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se demuestra la tercera ley de Newton en una interacción entre
            un martillo y un clavo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) El martillo no ejerce ninguna fuerza sobre el clavo <br />{" "}
            b) El clavo ejerce una fuerza sobre el martillo igual y opuesta a la
            fuerza ejercida por el martillo <br /> c) El martillo y el clavo se
            mueven en la misma dirección <br /> d) Solo el clavo experimenta una
            fuerza{" "}
          </span>,
          "b",
          <span>
            {" "}
            En una interacción entre un martillo y un clavo, el clavo ejerce una
            fuerza sobre el martillo igual y opuesta a la fuerza ejercida por el
            martillo, demostrando la tercera ley de Newton.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es una aplicación práctica de la segunda ley de Newton?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Determinar la velocidad de un coche <br /> b) Calcular la
            distancia recorrida por un objeto en caída libre <br /> c) Calcular
            la fuerza necesaria para acelerar un objeto de cierta masa <br /> d)
            Medir el tiempo que tarda un objeto en detenerse{" "}
          </span>,
          "c",
          <span>
            {" "}
            Una aplicación práctica de la segunda ley de Newton es calcular la
            fuerza necesaria para acelerar un objeto de cierta masa.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué ilustra la primera ley de Newton en el contexto de la seguridad
            automovilística?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La tendencia de los pasajeros a seguir en movimiento
            cuando un coche se detiene abruptamente <br /> b) La necesidad de
            aplicar fuerza para mantener un coche en movimiento <br /> c) La
            resistencia del aire que actúa sobre el coche en movimiento <br />{" "}
            d) El aumento de velocidad en una carretera recta{" "}
          </span>,
          "a",
          <span>
            {" "}
            La primera ley de Newton ilustra la tendencia de los pasajeros a
            seguir en movimiento cuando un coche se detiene abruptamente, lo que
            resalta la importancia de los cinturones de seguridad.{" "}
          </span>,
        ],
      ],
      [
        [
          <span> ¿Qué es un diagrama de cuerpo libre? </span>,
          <span>
            {" "}
            <br /> a) Una representación gráfica de las fuerzas que actúan sobre
            un objeto <br /> b) Una representación del movimiento de un objeto{" "}
            <br /> c) Una tabla de valores de fuerza <br /> d) Un modelo
            matemático de las fuerzas internas de un objeto{" "}
          </span>,
          "a",
          <span>
            {" "}
            Un diagrama de cuerpo libre es una representación gráfica de todas
            las fuerzas que actúan sobre un objeto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es el propósito principal de un diagrama de cuerpo libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Determinar la velocidad de un objeto <br /> b) Calcular la
            energía de un sistema <br /> c) Analizar las fuerzas que actúan
            sobre un objeto <br /> d) Medir el tiempo de movimiento{" "}
          </span>,
          "c",
          <span>
            {" "}
            El propósito principal de un diagrama de cuerpo libre es analizar
            las fuerzas que actúan sobre un objeto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué elementos se representan comúnmente en un diagrama de cuerpo
            libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Velocidades y aceleraciones <br /> b) Fuerzas y momentos{" "}
            <br /> c) Energía cinética y potencial <br /> d) Masa y volumen{" "}
          </span>,
          "b",
          <span>
            {" "}
            En un diagrama de cuerpo libre se representan comúnmente las fuerzas
            y los momentos que actúan sobre el objeto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se representa una fuerza en un diagrama de cuerpo libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Como un punto <br /> b) Como una línea curva <br /> c)
            Como una flecha <br /> d) Como un círculo{" "}
          </span>,
          "c",
          <span>
            {" "}
            En un diagrama de cuerpo libre, una fuerza se representa como una
            flecha que indica la magnitud y la dirección de la fuerza.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué se debe incluir en un diagrama de cuerpo libre para que sea
            completo?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Solo las fuerzas externas <br /> b) Solo las fuerzas
            internas <br /> c) Todas las fuerzas externas y reacciones <br /> d)
            Solo la fuerza de gravedad{" "}
          </span>,
          "c",
          <span>
            {" "}
            Un diagrama de cuerpo libre debe incluir todas las fuerzas externas
            y las reacciones que actúan sobre el objeto para ser completo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué fuerza se dibuja siempre hacia abajo en un diagrama de cuerpo
            libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Fuerza normal <br /> b) Fuerza de fricción <br /> c)
            Fuerza de tensión <br /> d) Fuerza de gravedad{" "}
          </span>,
          "d",
          <span>
            {" "}
            En un diagrama de cuerpo libre, la fuerza de gravedad se dibuja
            siempre hacia abajo.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué representa la longitud de una flecha en un diagrama de cuerpo
            libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La dirección de la fuerza <br /> b) La magnitud de la
            fuerza <br /> c) La velocidad del objeto <br /> d) La aceleración
            del objeto{" "}
          </span>,
          "b",
          <span>
            {" "}
            La longitud de una flecha en un diagrama de cuerpo libre representa
            la magnitud de la fuerza.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se indica la dirección de una fuerza en un diagrama de cuerpo
            libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Mediante el color de la flecha <br /> b) Mediante la forma
            de la flecha <br /> c) Mediante la dirección en que apunta la flecha{" "}
            <br /> d) Mediante el grosor de la flecha{" "}
          </span>,
          "c",
          <span>
            {" "}
            En un diagrama de cuerpo libre, la dirección de una fuerza se indica
            mediante la dirección en que apunta la flecha.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué se entiende por equilibrio estático en un diagrama de cuerpo
            libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) El objeto está acelerando <br /> b) La suma de todas las
            fuerzas y momentos es cero <br /> c) El objeto está cambiando de
            dirección <br /> d) La velocidad del objeto es constante{" "}
          </span>,
          "b",
          <span>
            {" "}
            En equilibrio estático, la suma de todas las fuerzas y momentos que
            actúan sobre el objeto es cero.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué es necesario para resolver un problema utilizando un diagrama
            de cuerpo libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Conocer la masa del objeto <br /> b) Conocer la
            aceleración del objeto <br /> c) Identificar todas las fuerzas que
            actúan sobre el objeto <br /> d) Conocer la velocidad inicial del
            objeto{" "}
          </span>,
          "c",
          <span>
            {" "}
            Para resolver un problema utilizando un diagrama de cuerpo libre, es
            necesario identificar todas las fuerzas que actúan sobre el objeto.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            ¿Qué se debe hacer primero al dibujar un diagrama de cuerpo libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Determinar la velocidad del objeto <br /> b) Identificar
            todas las fuerzas que actúan sobre el objeto <br /> c) Calcular la
            aceleración del objeto <br /> d) Medir el tiempo de movimiento{" "}
          </span>,
          "b",
          <span>
            {" "}
            Al dibujar un diagrama de cuerpo libre, lo primero que se debe hacer
            es identificar todas las fuerzas que actúan sobre el objeto.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cuál es el siguiente paso después de identificar las fuerzas en un
            diagrama de cuerpo libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Dibujar el objeto <br /> b) Calcular la masa del objeto{" "}
            <br /> c) Representar las fuerzas con flechas <br /> d) Medir la
            velocidad del objeto{" "}
          </span>,
          "c",
          <span>
            {" "}
            Después de identificar las fuerzas, el siguiente paso es representar
            las fuerzas con flechas en el diagrama de cuerpo libre.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué se debe hacer si se encuentran fuerzas adicionales mientras se
            dibuja un diagrama de cuerpo libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Ignorar las fuerzas adicionales <br /> b) Añadir las
            fuerzas adicionales al diagrama <br /> c) Dibujar un nuevo diagrama{" "}
            <br /> d) Medir las fuerzas adicionales{" "}
          </span>,
          "b",
          <span>
            {" "}
            Si se encuentran fuerzas adicionales, se deben añadir al diagrama de
            cuerpo libre.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se representa la fuerza de fricción en un diagrama de cuerpo
            libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Como una flecha hacia abajo <br /> b) Como una flecha
            hacia arriba <br /> c) Como una flecha opuesta al movimiento <br />{" "}
            d) Como una flecha en la misma dirección del movimiento{" "}
          </span>,
          "c",
          <span>
            {" "}
            En un diagrama de cuerpo libre, la fuerza de fricción se representa
            como una flecha opuesta al movimiento.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué indica una flecha hacia la derecha en un diagrama de cuerpo
            libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Una fuerza hacia la derecha <br /> b) Una fuerza hacia la
            izquierda <br /> c) Una fuerza hacia abajo <br /> d) Una fuerza
            hacia arriba{" "}
          </span>,
          "a",
          <span>
            {" "}
            Una flecha hacia la derecha en un diagrama de cuerpo libre indica
            una fuerza hacia la derecha.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué se debe hacer después de dibujar todas las fuerzas en un
            diagrama de cuerpo libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Calcular la suma de las fuerzas <br /> b) Determinar la
            aceleración <br /> c) Medir la masa del objeto <br /> d) Medir la
            velocidad del objeto{" "}
          </span>,
          "a",
          <span>
            {" "}
            Después de dibujar todas las fuerzas en un diagrama de cuerpo libre,
            se debe calcular la suma de las fuerzas.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Cómo se representa la fuerza normal en un diagrama de cuerpo libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Como una flecha hacia abajo <br /> b) Como una flecha
            hacia arriba <br /> c) Como una flecha hacia la derecha <br /> d)
            Como una flecha hacia la izquierda{" "}
          </span>,
          "b",
          <span>
            {" "}
            En un diagrama de cuerpo libre, la fuerza normal se representa como
            una flecha hacia arriba.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué se debe verificar una vez completado el diagrama de cuerpo
            libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La velocidad del objeto <br /> b) La precisión de las
            fuerzas dibujadas <br /> c) El tiempo de movimiento <br /> d) La
            aceleración del objeto{" "}
          </span>,
          "b",
          <span>
            {" "}
            Una vez completado el diagrama de cuerpo libre, se debe verificar la
            precisión de las fuerzas dibujadas.{" "}
          </span>,
        ],
        [
          <span>
            {" "}
            ¿Qué información se necesita para calcular la fuerza neta en un
            diagrama de cuerpo libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) La masa del objeto <br /> b) El tiempo de movimiento{" "}
            <br /> c) La suma de todas las fuerzas <br /> d) La aceleración del
            objeto{" "}
          </span>,
          "c",
          <span>
            {" "}
            Para calcular la fuerza neta en un diagrama de cuerpo libre, se
            necesita la suma de todas las fuerzas.{" "}
          </span>,
        ],

        [
          <span>
            {" "}
            ¿Qué representa un equilibrio de fuerzas en un diagrama de cuerpo
            libre?{" "}
          </span>,
          <span>
            {" "}
            <br /> a) Una fuerza neta diferente de cero <br /> b) Una
            aceleración del objeto <br /> c) La inactividad de las fuerzas{" "}
            <br /> d) La suma de fuerzas igual a cero{" "}
          </span>,
          "d",
          <span>
            {" "}
            Un equilibrio de fuerzas en un diagrama de cuerpo libre representa
            la suma de fuerzas igual a cero.{" "}
          </span>,
        ],
      ],
    ],
  ];
  const listaBibliografia = [
    // Tema 1
    [
      // SubTemas
      [
        `Resumen de ${listaSubTemas[0][0]}`,
        [
          <img
            src="src\images\t1\trectangulo.png"
            alt="Formulas trigonométricas"
            height="100%"
          />,
        ],
        ["bibliografía 1"],
      ],
      [
        `Resumen de ${listaSubTemas[0][1]}`,
        [
          <img
            src="src\images\t1\vectores.png"
            alt="Representación de vectores"
            height="100%"
          />,
        ],
        ["bibliografía 1"],
      ],
      [
        `Resumen de ${listaSubTemas[0][2]}`,
        [
          <img src="src\images\t1\operando1.png" alt="Suma de Vectores" />,
          <img
            src="src\images\t1\operando2.png"
            alt="Producto escalar y producto vectorial"
          />,
        ],
        ["bibliografía 1"],
      ],
    ],
    // Tema 2
    [
      // SubTemas
      [
        `Resumen de ${listaSubTemas[1][0]}`,
        [
          <img
            src="src\images\t2\generalidades1.png"
            alt="Formulas de posición y desplazamiento"
          />,
          <img
            src="src\images\t2\generalidades2.png"
            alt="Formulas de velocidad y aceleración media e instantánea"
          />,
        ],
        ["bibliografía 1"],
      ],
      [
        `Resumen de ${listaSubTemas[1][1]}`,
        [
          <img
            src="src\images\t2\cinematica1d.png"
            alt="Formulas MRU y MRUA"
          />,
        ],
        ["bibliografía 1"],
      ],
      [
        `Resumen de ${listaSubTemas[1][2]}`,
        [
          <img
            src="src\images\t2\cinematica2d.png"
            alt="Tiro vertical, caída libre y movimiento del proyectil"
          />,
        ],
        ["bibliografía 1"],
      ],
    ],
    // Tema 3
    [
      // SubTemas
      [
        `Resumen de ${listaSubTemas[2][0]}`,
        [
          <img
            src="src\images\t3\fuerza1.png"
            alt="Concepto de Fuerza"
            height="100%"
          />,
          <img
            src="src\images\t3\fuerza2.png"
            alt="Fuerzas fundamentales"
            height="100%"
          />,
          <img
            src="src\images\t3\fuerza3.png"
            alt="Fuerzas derivadas"
            height="100%"
          />,
        ],
        ["bibliografía 1"],
      ],
      [
        `Resumen de ${listaSubTemas[2][1]}`,
        [
          <img
            src="src\images\t3\newton.png"
            alt="Leyes de Newton"
            height="100%"
          />,
        ],
        ["bibliografía 1"],
      ],
      [
        `Resumen de ${listaSubTemas[2][2]}`,
        [
          <img
            src="src\images\t3\cuerpolibre.png"
            alt="Diagrama de cuerpo libre"
          />,
        ],
        ["bibliografía 1"],
      ],
    ],
  ];
  const btnSecciones = [
    [<i className="fa fa-play" aria-hidden="true"></i>, "Teoria"],
    ["V / F", "VerdaderoFalso"],
    ["M.O.", "MultipleOpcion"],
    // [<i className="fa fa-pencil-square" aria-hidden="true"></i>, "Desarrollo"],
    [<i className="fa fa-book" aria-hidden="true"></i>, "Bibliografia"],
  ];
  const [temaActivo, setTemaActivo] = useState(listaTemas[0]);
  const [subTemaActivo, setSubTemaActivo] = useState(listaSubTemas[0][0]);
  const [seccionActivo, setSeccionActivo] = useState(btnSecciones[0][1]);
  const [indice, setIndice] = useState(0);
  const [corregirVF, setCorregirVF] = useState(false);
  const [actualizarVF, setActualizarVF] = useState(false);

  return (
    <Contexto.Provider
      value={{
        temaActivo,
        setTemaActivo,
        subTemaActivo,
        setSubTemaActivo,
        seccionActivo,
        setSeccionActivo,
        indice,
        setIndice,
        corregirVF,
        setCorregirVF,
        actualizarVF,
        setActualizarVF,

        listaTemas,
        listaSubTemas,
        btnSecciones,
        listaTeoria,
        listaPreguntasVF,
        listaPreguntasMO,
        listaBibliografia,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
