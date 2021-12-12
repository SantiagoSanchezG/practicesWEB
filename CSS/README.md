# CSS
## Selectores 

1. Selectores simples (una palabra)
    - Etiqueta
        - Ejemplo: h1{}
        - Son etiquetas HTML
        - Se usan para normalizar
    - Clases
        - Se indican con un punto y el nombre de la clase
        - No pueden comenzar con número
        - Pueden comenzar con - or _
        - Pueden tener :
        - Pueden ser de una letra
    - ID
        - No son reutilizables (unicos)
        - No se pueden sobreescribir

2. Selectores compuestos (más de una palabra)
    - Agrupados
        - Ejemplo: h1,span{}
        - Se separan con ,
    - Combinados
        - Ejemplo: h1.title#title
    - Descendientes
        - Ejemplo body span{}
        - Se separa con espacio

3. Selectores con operadores (* > + ~)
    - "*" Selector universa
        - Ejemplo *{}
        - Es para selecionar todo
    - ">" Hijo directo
        - Ejemplo body > span{}
    - "+" Hermano siguiente
        - Ejemplo div + div{}
    - "~" Hermanos siguienres
        - Ejemplo div ~ div{}

4. Selectores de atributo
    - Usan []
        - Ejemplo [atrr="value"]
        - Ejemplo2 [atrr]
        - Con comodines
            - Que comienza
                - Usa ^
                - Ejemplo [type^="sub"]{}
            - Que termina
                - Usa $
                - Ejemplo [href$=".mp4"]{}
            - Que contiene
                - Usa *
                - Ejemplo [href*="/"]{}
5. Pseudoclases