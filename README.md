# BREMS - Book Reserve Management System

### About the contributors

* Blay González, Sergio
 * [Github account](https://github.com/Blay93).
 * Email: s.blay@alumnos.urjc.es
* Cervera Saldaña, Annhelen
 * [Github account](https://github.com/annyCS).
 * Email: a.cerveras@alumnos.urjc.es
* Córdova Proaño, Jorge Jherel
 * [Github account](https://github.com/jherel).
 * Email: jj.cordobap@alumnos.urjc.es
* Vázquez Losada, Carlos
 * [Github account](https://github.com/cvazquezlos).
 * Email: c.vazquezlos@alumnos.urjc.es
 
### About this web application

Gestión online de reserva de libros y revistas de una biblioteca.
Cada recurso (libros y revistas) tendrá un ejemplar que es realmente éste el que el usuario podrá adquirir para realizar el préstamo, y podrá ser prestado por un máximo de 30 días para los libros, y un máximo de 2 días para las revistas.
Además, habrá un administrador que será quien gestione dichas reservas, gestionará el stock de los libros y las revistas y cada uno con sus ejemplares.
La funcionalidad de la Web está diferenciada por el tipo de usuario que vaya a utilizarla, siendo estos de dos tipos:

#### Lectores/Usuarios:
Son los que realizan las reservas de los libros y/o revistas en la web, y por tanto, estas funcionalidades serán públicas.
Funcionalidades:
* Listar recursos (libros, revistas)
*Buscar recursos por título, autor, nombre del libro/revista
*Reservar recursos
    * El usuario puede realizar un  "préstamo" por la web;  y tendrá '4' días para recogerlo, sino se cancelará el "préstamo".
*Aplazar fecha de devolución.
*Listar libros pendientes a devolver
*Listar libros que prestó con anterioridad
*Ver multas
*Darse de alta en la red de servicio de la biblioteca
    * El usuario podrá "darse de alta" desde la web, pero no podrá ser efectuada como tal, hasta que el administrador no lo habilite. Esto significa que no podrá realizar préstamos, sólo listar los recursos que tenga actualmente la biblioteca.

#### Administrador
Gestionará los préstamos de los ejemplares. Éstas funcionalidades serán privadas.
Funcionalidades:
* Listar productos
* Gestionar productos: Libros/revistas
    * Dar de alta a nuevos recursos
    * Modificar recursos
    * Eliminar recursos
* Gestionar ejemplares
    * Eliminar ejemplares.- sólo podrán ser eliminados ya que se entiende que, al dar de baja a un libro/revista, sus ejemplares serán por consiguientes dados de baja.
* Gestionar préstamos
    * Realizar préstamos
    * Realizar devolución
    * Buscar préstamos
    * Enviar "correos de aviso" a los usuarios para informar de la devolución del libro.
* Gestionar multas
    * Por cada día de retraso, se impone una multa de 1 día sin posibilidad de prestar más productos.
* Gestionar Usuarios
    * Dar de alta a nuevos usuarios
    * Modificar datos de usuarios ya existentes
    * Dar de baja a un usuario


Gestor de tareas:
[Trello](https://trello.com/b/3hdFhIap/brems).
