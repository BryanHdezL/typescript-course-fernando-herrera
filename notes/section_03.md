# Notas de la sección #3 - Tipos básicos

<!-- Aquí comienzan las notas del capítulo 2. -->

## CAPÍTULO 2

### Tipos de datos

- Primitivos:
  - String
    - Cadenas de texto que se pueden declarar de diferentes maneras:
      - Comillas dobles ("Esto es una cadena")
      - Comillas simples ('Esto es una nueva cadena')
      - Acento grave o backtick (\`Esto es otra cadena.\`)

  - Number
    - Existen diferentes formas de expresar un valor numérico:
      - **Entero:**	Número sin parte decimal. (1, 30, 100, 1000)
      - **Flotante:** Número con parte decimal. (3.14156545, 500.5, 30.0)
      - **Notación científica:** Número con parte exponencial. (1e3 → 1000)

  - Boolean
    - Valores de verdadero y falso.

  - Symbol
    - Representa un identificador único e inmutable, comúnmente utilizado para definir claves de propiedades que no colisionen con otras dentro de objetos.

  - Especiales
    - **null:** Representa la ausencia intencional de cualquier valor u objeto. Es un valor asignable que indica que una variable está vacía o "sin valor".
    - **undefined:** Indica que una variable ha sido declarada, pero aún no se le ha asignado ningún valor. También es el valor de retorno por defecto de funciones que no devuelven nada.

- Compuestos:
  - Objetos literales
    - Diccionario que almacena pares clave-valor, donde los valores pueden ser de tipos primitivos u otros objetos, formando estructuras anidadas.
  - Clases
    - Plantilla para crear objetos con propiedades y métodos definidos, que encapsulan comportamiento y estado bajo un mismo tipo.
  - Funciones
    - Bloques reutilizables de código que pueden recibir parámetros, ejecutar instrucciones y retornar un valor.
  - Arreglos
    - Colecciones ordenadas de elementos del mismo tipo, accesibles mediante índices numéricos.
  - Nuevos tipos
    - Combinaciones personalizadas creadas mediante type o interface para definir formas específicas de datos.
  - Interfaces
    - Contratos que definen la estructura esperada de un objeto, permitiendo tipado fuerte y reutilizable.
  - Tuplas
    - Arreglos de longitud fija con tipos específicos en cada posición, ideales para representar estructuras ordenadas de datos heterogéneos.
