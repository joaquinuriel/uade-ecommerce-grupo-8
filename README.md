# UADE-GRUPO8-475802-2024-1C-NOCHE-VIE-APPS-INTERACTIVAS
UADE GRUPO 8 - 475802 - 2024-1C - NOCHE - VIE - APLICACIONES INTERACTIVAS

Trabajo práctico obligatorio:

Desarrollo de una Plataforma de E-commerce

Nos han contratado para desarrollar una plataforma de e-commerce para una empresa local que busca expandir su presencia en el mercado digital. El objetivo es proporcionar una experiencia de compra intuitiva y segura para los usuarios finales, permitiéndoles explorar, seleccionar y comprar productos de manera eficiente. La empresa desea disponer de un sistema que permita a los usuarios vendedores realizar la publicación de su producto, así como también gestionar la misma (eliminar o modificar). Debajo encontraran detallados los requerimientos de la empresa.

Requisitos Funcionales:
Gestión de Usuarios:
Registro de usuarios como compradores y vendedores (debe solicitar un nombre de usuario, mail, contraseña, nombre y apellido).  Autenticación de usuarios mediante usuario y contraseña (login).  Administración de cuentas de usuario, incluyendo la asignación de permisos.

Catálogo de Productos:
Visualización de productos disponibles con fotografía y precio.  Búsqueda y filtrado de productos por categoría, precio, etc.  Al seleccionar algunos de los productos, dirigirá al detalle del mismo donde se visualizará la imagen del producto junto a su descripción.  Opción para añadir productos al carrito de compras.  En caso de que el producto no tenga stock, deberá estar indicado y no se podrá agregarlo al carrito.

Carrito de Compras:
Gestión del carrito de compras, con la posibilidad de agregar, eliminar o modificar productos.  Realizar el checkout del carrito con el correspondiente cálculo automático del total de la compra.  Una vez realizado el checkout (sin procesamiento de pago), se descontará el stock de dicho producto. Se deberá validar si cuenta con el stock correspondiente.

Gestión de Productos:
Los usuarios registrados como vendedores podrán realizar el alta de una publicación de un producto adjuntando una o más fotos del producto.
En dicha publicación deberá adjuntar la descripción del producto, junto con la categoría a la cual pertenece y el precio.
El usuario que crea dicho producto, podrá manejar el stock del mismo.
El usuario podrá eliminar dicho producto.

Requisitos de entrega

El trabajo por realizar es el siguiente:

A partir del negocio entregado, agregar la capa de persistencia.
Construir una API Rest para acceder a la información mencionada en su totalidad (completa o filtrada).
Desarrollar una aplicación web que permita cumplir con los requerimientos enumerados.

Primera entrega: 03/05/2024
Implementación del frontend de la página web utilizando JavaScript.
Carga de productos, modificaciones y eliminación de los mismos.
Gestión del carrito de compras: agregar, modificar y eliminar productos.
Realizar checkout y devolver compra exitosa.
Visualización, búsqueda y filtrado de productos disponibles.
Gestión de descuentos de productos.
No es necesario la entrega del backend para la primera entrega (deberán utilizar mocks).

Segunda entrega: 07/06/2024
Implementación de WebServices.
Implementación de mecanismos de persistencia.
Implementación de la no visualización de productos sin stock.
Registro y login de usuarios.

Entrega final: 28/06/2024
Aplicación web adaptativa que cumpla con todos los requerimientos del TPO.