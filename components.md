#Componentes:

- App:

  - Recibe: Nada.
  - Estado: Muestra algo depende de si está logueado.
  - Muestra: componentes.
  - Acciones: Guarda/setea en el Local Storage el token.

- Listado de usuarios.

  - Recibe: Array de usuarios a renderizar.
  - Muestra: Listado de usuarios en cards.
  - Estado: Listado que muestra todos, o amigos o enemigos.
  - Acciones: Al clickar en todos, amigos o enemigos, renderiza en función del estado.

- Botón:

  - Recibe: Texto, Acción.
  - Muestra: Texto.
  - Estado: Nada.
  - Acciones: Invocar a la acción recibida.

- User Card:

  - Recibe: Datos del usuario a imprimir por props.
  - Estado: Ninguno.
  - Muestra: Datos del usuario con imagen y boton.
  - Acciones: Ninguna (botón).

- Componente Login:

  - Recibe: Nada.
  - Muestra: Campos de texto y botones.
  - Estado: Espera datos actualizados.
  - Acciones: Nada (botón).

- Componente Register:

  - Recibe: Nada.
  - Muestra: Un formulario de registro y un botón.
  - Estado: Actualizar datos y volver al estado inicial.
  - Acciones: Nada (botón).

  #Capa de datos:

- Array de usuarios.
- Usuario logueado.

- Modificaciones:
  - Añadir usuario a amigo.
  - Añadir usuario a enemigo.
  - Toglear usuario de amigo a enemigo.
