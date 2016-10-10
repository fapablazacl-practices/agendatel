
Aplicacion de agendas de contactos telefonicos.

ETAPA 1

Cada contacto almacena los siguientes campos:

- Nombres
- Apellidos
- Direccion
- Correo electronico
- Numero de telefono

Cada campo se debe validar de la siguiente forma:

- Nombres y Apellidos: Cadenas alfabeticas (sin numeros), separadas por espacios. La seccion "Apellidos" puede contener entre 1 y 2 cadenas de este tipo.
- Direccion: Debe constar de dos partes. La primera, de 1 a N cadenas alfabeticas. La ultima debe constar de un numero, que representara la numeracion de calles.
- Correo Electronico: debe ser de la forma nombre@dominio.ext
- Numero de telefono: Debe ser un numero de 6 a 8 caracteres de longitud.

La aplicacion consta de la siguiente estructura:

Pagina Principal: Muestra el listado, paginado, de contactos almacendos, desplegados en una tabla. Cada fila de esta tabla debe contener
todos los campos detallados mas arriba. La ultima columna debe tener las acciones disponibles para ese registro (Actualizar, Eliminar)

Nuevo Contacto: Agrega un nuevo contacto, mostrando todos los campos establecidos mas arriba, para que el usuario pueda escribir la informacion.
Actualizar Contacto: Actualiza el contacto asociado a la fila. Debe mostrar la misma interfaz que la opcion "nuevo contacto".
Eliminar Contacto: Elimina el contacto asociado a la fila. Debe preguntar primero si esta seguro de realizar tal accion.
Importar Contactos: Permite subir un archivo CSV para importar de forma rapida muchos contactos simultaneamente.
Buscar Contactos: Permite buscar contactos de una forma rapida 

Se debe implementar en Node.js como backend, utilizando tecnologias Web modernas (HTML5, CSS3 con Ajax) para el frontend.

ETAPA 2
En la etapa 2, se debe lograr un diseño web de calidad profesional, utilizando animaciones 
