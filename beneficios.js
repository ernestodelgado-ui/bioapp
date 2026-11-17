/* ============================================================
   BIOFERIA 2027 · 7 DÍAS PARA CAMBIAR · DATOS
   Archivo independiente: acá se editan desafíos, comercios y
   beneficios sin tocar el código de la app.

   IMPORTANTE (demostración):
   - Todos los comercios, direcciones, ubicaciones y descuentos de este
     archivo son FICTICIOS. Están marcados con  demo:true.
   - Un comercio real se carga con  demo:false, su dirección verificada y
     sus coordenadas reales (lat / lng). Si no hay dirección verificada,
     dejá  lat:null, lng:null  y NO aparece en el mapa (sí en el listado).
   - Los códigos de descuento hoy se generan en el navegador y son solo de
     demostración. Para descuentos reales hay que validar y canjear los
     códigos con un servicio seguro (ver BIO7_API al final).
   ============================================================ */
window.BIO7_DATA={
 version:1,
 categorias:[
  {id:'alim',n:'Alimentación sustentable'},
  {id:'moda',n:'Moda circular'},
  {id:'eco',n:'Productos ecológicos'},
  {id:'mov',n:'Movilidad'},
  {id:'talleres',n:'Talleres y experiencias'}],

 /* Desafíos: se muestran 5 por semana, rotando, para que haya novedades todo el año.
    cats = categorías de beneficios que desbloquea al completarse. */
 desafios:[
  {id:'d1',t:'Sin descartables',d:'Durante siete días, evitá usar vasos, bolsas y cubiertos descartables.',tip:'Llevá tu vaso, tu bolsa y tus cubiertos.',cats:['eco','alim']},
  {id:'d2',t:'Cuidemos el agua',d:'Durante siete días, incorporá acciones concretas para reducir el consumo de agua.',tip:'Duchas más cortas, canilla cerrada al cepillarte.',cats:['eco','talleres']},
  {id:'d3',t:'Movete diferente',d:'Durante siete días, elegí caminar, usar bicicleta o transporte público cuando sea posible.',tip:'Reemplazá un viaje en auto por uno a pie, en bici o en colectivo.',cats:['mov']},
  {id:'d4',t:'Menos desperdicio',d:'Durante siete días, evitá desperdiciar alimentos.',tip:'Planificá lo que cocinás y aprovechá las sobras.',cats:['alim']},
  {id:'d5',t:'Segunda oportunidad',d:'Durante siete días, reparás, reutilizás o intercambiás objetos antes de comprar otros.',tip:'Antes de comprar, preguntate si se puede arreglar o conseguir usado.',cats:['moda','talleres']},
  {id:'d6',t:'Compost en casa',d:'Durante siete días, separá tus residuos orgánicos para compostar.',tip:'Guardá cáscaras y restos de comida en un recipiente aparte.',cats:['alim','talleres']},
  {id:'d7',t:'Una prenda, otra vida',d:'Durante siete días, cuidá, arreglá o intercambiá tu ropa en lugar de comprar nueva.',tip:'Elegí una prenda para arreglar, teñir o intercambiar.',cats:['moda']},
  {id:'d8',t:'Energía a conciencia',d:'Durante siete días, apagá y desenchufá lo que no estés usando.',tip:'Revisá luces, cargadores y pantallas antes de salir.',cats:['eco']},
  {id:'d9',t:'Compras a granel',d:'Durante siete días, comprá sin envoltorios o con tus propios envases.',tip:'Llevá frascos o bolsas reutilizables a la compra.',cats:['eco','alim']},
  {id:'d10',t:'Plantá y observá',d:'Durante siete días, cuidá una planta o sembrá algo, aunque sea en una maceta.',tip:'Regá, mirá cómo crece y anotá un cambio.',cats:['talleres','alim']}],

 /* Comercios y beneficios (TODOS DE EJEMPLO).
    ubic:'demo' = ubicación ilustrativa cerca de Palermo, no verificada. */
 beneficios:[
  {id:'b1',nombre:'Almacén Raíz (ejemplo)',cat:'alim',zona:'Palermo',direccion:null,desc:'Almacén a granel con productos de productores locales.',beneficio:'15% en compras a granel',cond:'Llevar tu bolsa o frasco. No acumulable con otras promociones.',vence:'2027-12-31',lat:-34.5862,lng:-58.4262,ubic:'demo',demo:true},
  {id:'b2',nombre:'Verdulería del Barrio (ejemplo)',cat:'alim',zona:'Villa Crespo',direccion:null,desc:'Frutas y verduras de estación sin envases.',beneficio:'10% en tu compra semanal',cond:'Una vez por semana. Presentar el código en caja.',vence:'2027-10-31',lat:-34.5995,lng:-58.4348,ubic:'demo',demo:true},
  {id:'b3',nombre:'Panadería Masa Madre (ejemplo)',cat:'alim',zona:'Chacarita',direccion:null,desc:'Panificados de elaboración artesanal.',beneficio:'2x1 en panes de masa madre',cond:'Sábados y domingos. Hasta agotar stock.',vence:'2027-09-30',lat:-34.5910,lng:-58.4510,ubic:'demo',demo:true},
  {id:'b4',nombre:'Fibra Circular (ejemplo)',cat:'moda',zona:'Palermo',direccion:null,desc:'Ropa de segunda mano seleccionada y prendas rediseñadas.',beneficio:'20% en prendas de segunda mano',cond:'Una prenda por persona. No válido en liquidaciones.',vence:'2027-12-31',lat:-34.5890,lng:-58.4305,ubic:'demo',demo:true},
  {id:'b5',nombre:'Taller Remendar (ejemplo)',cat:'moda',zona:'Almagro',direccion:null,desc:'Arreglos y personalización de ropa.',beneficio:'Arreglo de una prenda sin cargo de mano de obra',cond:'Con turno previo. Materiales a cargo de la persona.',vence:'2027-11-30',lat:-34.6043,lng:-58.4215,ubic:'demo',demo:true},
  {id:'b6',nombre:'Trueque Urbano (ejemplo)',cat:'moda',zona:'Colegiales',direccion:null,desc:'Espacio de intercambio de ropa y objetos.',beneficio:'Entrada gratis a la próxima feria de trueque',cond:'Traer al menos tres prendas en buen estado.',vence:'2027-12-15',lat:-34.5755,lng:-58.4490,ubic:'demo',demo:true},
  {id:'b7',nombre:'Casa Reutilizable (ejemplo)',cat:'eco',zona:'Palermo',direccion:null,desc:'Botellas, viandas y bolsas reutilizables.',beneficio:'15% en productos reutilizables',cond:'Un uso por persona. Presentar el código.',vence:'2027-12-31',lat:-34.5840,lng:-58.4180,ubic:'demo',demo:true},
  {id:'b8',nombre:'Tienda Verde Online (ejemplo)',cat:'eco',zona:'Online',direccion:null,desc:'Productos de limpieza y cuidado personal sin plástico.',beneficio:'10% en tu primera compra online',cond:'Solo compras online. El código se ingresa al pagar.',vence:'2027-12-31',lat:null,lng:null,online:true,url:'https://example.com/',ubic:null,demo:true},
  {id:'b9',nombre:'Bici Taller Pedal (ejemplo)',cat:'mov',zona:'Villa Crespo',direccion:null,desc:'Reparación y mantenimiento de bicicletas.',beneficio:'Revisión básica de tu bici sin cargo',cond:'Con turno previo. Repuestos a cargo de la persona.',vence:'2027-12-31',lat:-34.5980,lng:-58.4400,ubic:'demo',demo:true},
  {id:'b10',nombre:'Bicicletero Verde (ejemplo)',cat:'mov',zona:'Palermo',direccion:null,desc:'Guardado seguro de bicicletas por día.',beneficio:'Primer mes de guardado con 25% de descuento',cond:'Nuevos clientes. Presentar el código.',vence:'2027-08-31',lat:-34.5815,lng:-58.4240,ubic:'demo',demo:true},
  {id:'b11',nombre:'Huerta Escuela (ejemplo)',cat:'talleres',zona:'Chacarita',direccion:null,desc:'Talleres de huerta urbana y compostaje.',beneficio:'30% en un taller a elección',cond:'Sujeto a cupo. Reservar con anticipación.',vence:'2027-12-31',lat:-34.5885,lng:-58.4560,ubic:'demo',demo:true},
  {id:'b12',nombre:'Laboratorio de Reparación (ejemplo)',cat:'talleres',zona:'Almagro',direccion:null,desc:'Taller para aprender a reparar objetos cotidianos.',beneficio:'Primera clase de prueba gratis',cond:'Una por persona. Sujeto a cupo.',vence:'2027-11-15',lat:-34.6070,lng:-58.4180,ubic:'demo',demo:true}]
};

/* Gancho para el servicio seguro de canjes (a implementar):
   - validar(codigo)  → confirma que el código existe y no venció
   - canjear(codigo)  → lo marca como usado una sola vez
   Mientras sean null, los códigos son solo de demostración. */
window.BIO7_API={validar:null,canjear:null};
