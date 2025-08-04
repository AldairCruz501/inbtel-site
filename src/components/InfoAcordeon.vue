<template>
  <section class="accordion" id="inbtelAccordion">
    <div
      class="accordion-item border-0 border-bottom"
      v-for="(section, index) in sections"
      :key="index"
    >
      <h3 class="accordion-header p-3 " :id="'heading' + index">
        <button
            class="accordion-button fs-2 text-inbtel p-3"
            type="button"
            :class="{ collapsed: index !== 0 }"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + index"
            :aria-expanded="index === 0"
            :aria-controls="'collapse' + index"
        >
            {{ section.title }}
        </button>

      </h3>
      <div
        :id="'collapse' + index"
        class="accordion-collapse collapse"
        :class="{ show: index === 0 }"
        :aria-labelledby="'heading' + index"
        data-bs-parent="#inbtelAccordion"
      >
        <div class="accordion-body fs-5" v-html="section.content"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Podrías importar de un archivo externo también
const sections = ref([
  {
    title: 'Validación de domicilio',
    content: `
      <p>Se puede tener más de un servicio con el mismo domicilio y/o titular, siempre y cuando cada de las cuentas ya instaladas se encuentren al corriente en sus pagos, de lo contrario se le negará la contratación del nuevo servicio hasta que se normalice con los adeudos pendientes.</p>
      <p>Titular y/o domicilio cancelado con entrega de equipos, pero incumplió con plazo forzoso de 6 meses, deberá pagar la cuota de recuperación por cancelación correspondiente a el tipo de servicio contratado.</p>
      <ul>
        <li><strong>Residencial y Gamer $1,200.00</strong></li>
        <li><strong>INBTEL Negocios $1,600.00</strong></li>
      </ul>
      <p>Titular y/o domicilio cancelado con entrega de equipos, pero cumplió con plazo forzoso de 6 meses, puede contratar el servicio en cualquier momento, con promoción vigente.</p>
      <p>Titular y/o domicilio cancelado SIN entrega de equipos NO podrá contratar el servicio, hasta después de 1 año de haberse cancelado, se toma como VETADO.</p>
      <p style="margin: 0 !important;"><strong style="text-transform: uppercase !important;">Solución</strong>:</p>
      <p style="margin: 0 !important;">Si es un domicilio ajeno al nuevo titular puede contratar, demostrando que no está vinculado al cliente anterior con un contrato de arrendamiento, este debe de incluir copia de la credencial de elector y número telefónico del propietario o contrato de compra de propiedad, el comprobante de domicilio debe coincidir con el nombre del propietario.</p>
      <p>Si un cliente cuenta con adeudo de equipos, deberá realizar entrega de los mismos, para liberar el adeudo.</p> 
      <p>Titular y domicilio que NO cumpla con el plazo forzoso contratado, establecido a partir del 1° de junio de 2022, se toma como domicilio VETADO.</p>
    `,
  },
  {
    title: 'Programación y tiempos de instalación',
    content: `
      <p>El tiempo de Instalación del servicio de Inbtel es de 3 a 10 Habiles</p>
      <p>La programación de las instalaciones está sujeta a cambios climatológicos o acontecimientos inesperados que impidan a el equipo técnico realizarla externos a Inbtel.</p>
      <p>Los horarios de instalación residencial son de 9:00 am a 6:00 pm de lunes a sábado.</p>
      <p>Al momento de realizar la instalación en el domicilio del cliente deberá estar un mayor de edad para proceder en caso de no ser así dicha instalación quedará suspendida hasta nueva programación.</p>
      <p>El cliente deberá realizar el pago en efectivo al técnico al término de la instalación de su primera factura.</p>
      <p>INBTEL se compromete a realizar llamadas de seguimiento y confirmación de instalación, durante el periodo de vigencia del contrato de la fecha de firma a la instalación debe ser menor a 1 mes, si en ese periodo no se logra agendar la instalación y realizarla dicho contrato pasa a cancelación.</p>
      <p>En caso de que el cliente confirme un horario de instalación y no se encuentre disponible en su domicilio cuando el técnico se presente, perderá su turno, por lo cual se volverá a agendar de acuerdo a la disponibilidad de programación de INBTEL.</p>
      <p>Los días y horarios de instalación confirmados válidos solo son por parte del área de programación, con una llamada del número 8335260000 al cliente.</p>
    `,
  },
  {
    title: 'Portabilidad',
    content: `
      <p style="margin: 0 !important;">El trámite de portabilidad consiste en conservar el mismo número telefónico que tienes actualmente con tu compañía, al contratar INBTEL.</p>
      <p>Si tienes activo el servicio de telefonía con tu proveedor anterior:</p>
      <ul>
        <li>Deberás marcar desde la línea telefónica de tu proveedor anterior al 051 para solicitar el NIP de portabilidad. Un sistema automático te regresará la llamada para indicarle el NIP de portabilidad.</li>
        <li>Copia de tu identificación oficial vigente.</li>
        <li>Copia del comprobante de pago de la línea que desea portar. (Debe incluir el nombre del representante legal).</li>
      </ul>  
      <p><strong>IMPORTANTE</strong>: El proceso de portabilidad únicamente puede iniciar mientras tu servicio de telefonía se encuentre activo con su proveedor actual. La generación del NIP de portabilidad es responsabilidad de la autoridad correspondiente e INBTEL es ajeno a este proceso.</p>
    `,
  },
  {
    title: 'Costo de Equipos',
    content: `
      <p>En caso de cancelar el servicio o daño de los equipos el cliente deberá entregar todos los equipos o en caso de no entregarlos se deberá pagar el costo del equipo de acuerdo con el plan contratado, ya que los mismos son propiedad del proveedor y están en comodato.</p>
      <p>En caso de que los equipos se dañen por causa de manipulación del cliente, deberá pagar el costo del equipo de acuerdo con el plan contratado para poder realizar el cambio y restablecer su servicio.</p>
    `,
  },
  {
    title: 'Costo de Reconexión del Servicio',
    content: `
      <p>Estos cargos son adicionales al costo de la mensualidad del servicio.</p>
      <p>Si por algún motivo el o los servicio(s) contratado(s) no se llega a pagar a tiempo (en la Fecha Límite de Pago), se aplicará un cargo de $50 pesos por concepto de reconexión del servicio, cantidad que se verá reflejada en el estado de cuenta, dicho servicio se reactivará hasta que se haya realizado el pago completo de mensualidad más reconexión en caso de no ser así el servicio no se reactivará.</p>
      <p>En caso de realizar promesa de pago para evitar suspensión del servicio, esta no deberá exceder 3 días y el monto de reconexión deberá ser aplicado y pagado por el cliente para conservar su servicio activo.</p>
    `,
  },
  {
    title: 'Cambio de Plan',
    content: `
      <p>Nuestros clientes pueden cambiar de un plan superior en renta mensual a uno inferior a partir del 3º mes de permanencia en Inbtel y no tener adeudo en su servicio.</p>
      <p>En caso de cambiar de un plan superior en renta mensual a uno inferior en renta antes del 3° mes de permanencia en Inbtel, se cobrará un costo de recuperación de $399.</p>
      <p>Nuestros clientes pueden cambiar de un plan de renta inferior a uno superior en el momento que lo necesite, pagando la diferencia del costo el día del cambio.</p>
      <p>Para realizar dicho cambio el cliente debe presentarse en las oficinas de Inbtel ubicada en calle Tamaulipas 607 zona centro de Tampico, Tamps en un horario de 9:00 am a 6:00 pm de Lunes a Viernes, Sábado de 9:00 am a 2:00 pm o bien por medio de llamada al número 8335260000 en los horarios antes mencionados.</p>
    `,
  },
  {
    title: 'Planes contratados antes de Octubre 2021',
    content: `
      <p>Los planes contratados antes del 1 de octubre del 2021 conservarán los costos de mensualidad con los que fueron contratados.</p>
      <p>Los clientes que deseen hacer ajuste de precio a los nuevos planes deberán permanecer 6 meses posterior a el lanzamiento de los nuevos planes siempre y cuando conserven el mismo plan, en caso de hacer un cambio de plan a uno de mensualidad superior se puede realizar pagando la diferencia y cambiando su contratación en el momento que lo desee.</p>
    `,
  },
  {
    title: 'Planes contratados antes del 10 de mayo del 2022',
    content: `
      <p>Clientes que cuentan con un servicio contratado y desean hacer el cambio a uno de mayor velocidad con el mismo costo de mensualidad, pueden realizar el cambio sin costo adicional pero su plazo forzoso de 6 meses se renueva a partir de la fecha en que se realiza el ajuste de paquete.</p>
    `,
  },    
  {
    title: 'Estado de Cuenta',
    content: `
      <p>El estado de cuenta mes con mes se enviará a la dirección de correo electrónico que se indicó al momento de la contratación del servicio.</p>
      <p>De igual forma nuestros clientes pueden pedir sus accesos al portal de clientes al número 833 526 0000 e ingresar en el siguiente Link https://wisphub.net/accounts/login/?next=/panel/clientes/*/ o bien pueden descargar la aplicación Wisp Hup en Google Play a la cual pueden ingresar con sus accesos de cliente, donde encontraran el apartado Facturas y ver su estado de cuenta.</p>
    `,
  },
  {
    title: 'Opciones de Pago',
    content: `
      <h4 style="color: #396E4B !important;">Portal del cliente</h4>
      <p>Paga con tarjeta de débito o crédito desde el portal de cliente, este pago es directo, automático y sin hacer filas.</p>
      <ul style="list-style: none !important;">
        <li>Paso 1: Tener acceso al portal de cliente, el cual se envía al correo electrónico proporcionado posterior a la instalación.</li>
        <li>Paso 2: Ingresar al portal de cliente e ingresar con Usuario y Contraseña.</li>
        <li>Paso 3: Seleccionar el icono de tarjeta de débito o crédito según sea su método de pago.</li>
        <li>Paso 4: Debe ingresar los datos de su tarjeta y dar clic en el botón “PAGAR”.</li>
      </ul>

      <h4 style="color: #396E4B !important;">Paynet</h4>
      <p>Se puede pagar el servicio en las sucursales de: Walmart, Farmacias del Ahorro, Bodega Aurrera, Waldos, Sams Club. Mediante el código de barras el cual se proporciona por medio de WhatsApp, o se puede descargar del portal de cliente. Su aplicación es automática.</p>

      <h4 style="color: #396E4B !important;">Oficina</h4>
      <p>Nuestros clientes pueden realizar sus pagos directamente en la oficina de Inbtel en efectivo o terminal bancaria, ubicada en Calle Tamaulipas 607, Zona Centro de Tampico, Tamaulipas, en un horario de lunes a viernes de 9:00 am a 6:00 pm y sábado de 9:00 am a 2:00 pm.</p>

      <h4 style="color: #396E4B !important;">Paypal</h4>
      <p>Pagos por medio de PayPal desde el portal de cliente, este pago puede ser de una sola factura o bien domiciliar los pagos de su servicio con INBTEL.</p> 

      <h4 style="color: #396E4B !important;">Pago de primera mensualidad y costos de instalación Transferencia</h4>
      <p>El pago de instalación y primera mensualidad en caso de ser por medio de transferencia bancaria deberá realizarse con 24 horas de anticipación a su instalación, por lo cual se deberá indicar en la llamada de programación el método de pago de su preferencia. En caso de que el pago no se efectúe, el técnico instalador no procederá con la instalación y se reagendará hasta una vez recibido el monto a pagar.</p> 

      <h4 style="color: #396E4B !important;">Transferencia Bancaria</h4>
      <p>Al realizar el pago mediante este método deberán enviar su comprobante mediante WhatsApp al número 8335260000 o al correo electrónico contacto@inbtel.com para su validación de no ser así sus pagos no serán registrados.</p> 
      <div class="col-12 col-md-6 table-responsive mt-3">
        <table class="table table-bordered">
          <thead class="table-success">
            <tr>
              <th scope="col">Banco</th>
              <th scope="col">Cuenta</th>
              <th scope="col">CLABE Interbancaria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BANORTE</td>
              <td>1148857910</td>
              <td>072813011488579105</td>
            </tr>
            <tr>
              <td>BBVA BANCOMER</td>
              <td>0117540280</td>
              <td>012813001175402801</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 style="color: #396E4B !important;">Efectivo</h4>
      <p>Se deberá realizar el pago de instalación y primera mensualidad de acuerdo a la orden de servicio proporcionada por el técnico, al término de la instalación. (Deberá recibir un comprobante al momento del pago, en caso de no ser así comunicarse a la brevedad al teléfono 8335260000).</p>

      <h4 style="color: #396E4B !important;">Costos de Instalación</h4>      
      <div class="col-12 col-md-6 table-responsive mt-3">
        <table class="table table-bordered text-center">
          <thead class="table-success">
            <tr>
              <th>Internet + Telefonía</th>
              <th>Internet + Telefonía + TV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plazo Forzoso de 6 meses: <strong>$330</strong></td>
              <td>Plazo Forzoso de 6 meses: <strong>$399</strong></td>
            </tr>
            <tr>
              <td>Plazo Forzoso de 18 meses: <strong>$150</strong></td>
              <td>Plazo Forzoso de 18 meses: <strong>$200</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 style="color: #396E4B !important;">Plan Inbtel Negocios</h4>
      <p>Plazo de 18 meses $150.00</p>
      
      <h4 style="color: #396E4B !important;">Adicionales de instalaciones</h4>
      <p><strong>TRANSFERENCIA</strong>El pago del servicio adicional en caso de ser por medio de transferencia bancaria deberá realizarse con 24 horas de anticipación a la visita, por lo cual se deberá indicar en la llamada de programación el método de pago de su preferencia, en caso de que el pago no se efectué el técnico instalador no procederá con la instalación y se reagendará hasta una vez recibido el monto a pagar.</p>
      <p><strong>EFECTIVO</strong> Se deberá realizar al término de la visita de acuerdo a la orden de servicio proporcionada por el técnico, al término de la instalación. (Deberá recibir un comprobante al momento del pago, en caso de no ser así comunicarse a la brevedad al teléfono 8335260000).</p>
      <p><strong>PAGOS DIFERIDOS</strong>Se deberá pagar la mitad del monto de acuerdo al método de pago si es por transferencia con 24 horas de anticipación y en caso de Efectivo al término de la visita, la otra mitad deberá ser liquidada en la siguiente factura de su servicio.</p>   
    `,
  },
  {
    title: 'Promociones',
    content: `
      <p>En el caso de que un cliente contrate el servicio con alguna promoción vigente y su cuenta sea suspendida o cancelada por falta de pago, al momento de ser reactivada no serán aplicables nuevas promociones o promociones anteriores. Es decir que para aquellos clientes que reactiven su cuenta que fue cancelada por falta de pago, no se les aplicará el descuento o promoción con la que contrataron inicialmente, ni tendrán derecho a exigir promoción, descuento o beneficio vigente alguno.</p>
      <p>Cuando el cliente contrata con promoción de Instalación gratis, tendrá un plazo forzoso de 6 meses, en caso de cancelación antes del tiempo estipulado, deberá pagar $399.00 de costo de Instalación.</p>
    `,
  },
  {
    title: '¡Recomienda y gana!',
    content: `
      <h4 style="color: #396E4B !important;">Términos</h4>
      <ul>
        <li>Para recibir el descuento el servicio del referido deberá estar instalado.</li>
        <li>El referido deberá mencionar su nombre completo al momento de la contratación. (No podrá ser después de su instalación).</li>
        <li>No acumulable con otras promociones.</li>
        <li>1 mensualidad de descuento.</li>
        <li>Vigencia de Julio a diciembre del 2022.</li>
        <li>El descuento se realizará en el paquete ya contratado, no se podrá hacer cambio de plan para disfrutar de la promoción.</li>
        <li>En caso de cambio de plan, el descuento se realizará en base al costo del plan anterior contratado.</li>
        <li>El incentivo vario dependiendo el plan contratado.</li>
        <li>Los clientes podrán hacer uso de esta promoción las veces que deseen.</li>
        <li>1 cliente referido instalado es igual a 1 mensualidad gratis de su plan contratado.</li>
        <li>Las contrataciones deben de ser directas en el call center de INBTEL en el teléfono 8335260000.</li>
      </ul>
    `,
  },
  {
    title: 'Velocidad de Internet',
    content: `
      <p>En el servicio Residencial Inbtel ofrece a sus clientes una garantía de velocidad del 60% de su plan contratado.</p>
      <p>La velocidad se ve afectada por el número de dispositivos conectados.</p>
    `,
  },
  {
    title: 'Reportes Soporte Técnico',
    content: `
      <p>El servicio Residencial cuenta con un SLA de 24 a 72 horas, para poder restablecer su servicio siempre y cuando sea notificado a INBTEL.</p>
      <p>Las visitas técnicas a domicilio en las cuales la causa no sea imputable para Inbtel tendrán un costo de $100.00</p>
    `,
  },
  {
    title: 'Mejora tu velocidad de Internet',
    content: `
      <ul>
        <li>"Conéctate con un cable Ethernet o Wi-Fi y navega con el internet de descarga más veloz"</li>
        <li>El cliente puede conectar varios dispositivos al mismo tiempo de forma alámbrica (Ethernet) e inalámbrica (Wi-Fi). Además, al conectar más dispositivos a la misma red, menor será la velocidad de navegación. Nuestro servicio no incluye configuraciones de soluciones complementarias como (Cámaras de video Vigilancia, Televisores, Extensores de red, conmutadores que no hayan sido provisionados por INBTEL).</li>
      </ul>
    `,
  },
  {
    title: 'Programas o servicios para medir la velocidad de internet',
    content: `
      <p>Los Test de Velocidad de Red son herramientas gratuitas en Internet que permiten determinar el desempeño de nuestra conexión, es decir, la velocidad real que te proporcionamos.</p>
      <h4 style="color: #396E4B !important;">Te recomendamos utilizar:</h4>
      <p><strong>Speedtest by Ookla</strong>: <br>Hay 2 maneras de medir, mediante la app que descargas en tu dispositivo y mediante tu navegador (siempre se recomienda hacer la prueba desde la aplicación ya que da datos más reales y con los MB de Subida).</p>
      <h4 style="color: #396E4B !important;">También hay más programas como:</h4>
      <ul>
        <li><strong>Test de velocidad de Movistar</strong></li>
        <li><strong>SpeedOff</strong></li>
        <li><strong>Fast de Netflix.</strong></li>
      </ul>      
    `,
  },
  {
    title: 'Recomendaciones para medir la velocidad correctamente',
    content: `
      <p>Mide siempre la velocidad con el ordenador conectado al router mediante cable, nunca por WiFi. La encriptación de seguridad de las conexiones, las caídas en la potencia de la señal y otros factores relacionados con la tecnología inalámbrica harán que la velocidad que recibimos sea inferior a la que llega al PTR. En caso de hacerlo por Wifi deberá cuidar la distancia y las conectividades adicionales.</p>
      <p>Asegúrate de que el cable de red es de calidad. Los cables que se venden en los bazares, por ejemplo, pueden influir negativamente en nuestra conexión. Los materiales de baja calidad provocan frecuentemente la aparición de efectos capacitivos que ralentizan Internet. Este efecto, de hecho, aumenta cuanto más alta es la velocidad de transmisión. De igual forma dependiendo el plan contrato nuestros clientes deberán tomar en cuenta la categoría de sus cables de red (UTP), para cuando realicen un speed test, sea la velocidad más acertada.</p>
      <p>Es importante seleccionar adecuadamente la tarjeta de red de su dispotivo para realizar la medición. Recomendamos tarjetas de red de 1 Gb.</p>
      <p>En el momento de realizar la medición, es muy importante que el ordenador no esté ejecutando ningún programa que pueda consumir el ancho de banda de la conexión es decir que solo este conectodo un solo equipo al Router.</p>
    `,
  },
  {
    title: 'Recomendaciones para Ubicación de equipo',
    content: `
      <h4 style="color: #396E4B !important;">Úbicacion del Router en el hogar</h4>
      <p>Lo recomendado es <strong>colocar el router en el centro exacto de tu domicilio</strong> o lo más cerca posible para que la señal se reparta bien por la casa. Si lo ponemos por ejemplo en un salón que esté en uno de los extremos de tu casa, la señal tendrá que atravesar muchas paredes y distancia hasta llegar a las habitaciones más alejadas, mientras que si lo pones en el centro de la casa la señal se repartirá más equitativamente.</p>
      <p>También es importante colocar el router <strong>en una posición relativamente alta</strong>, ya que envía las ondas hacia abajo y de no hacerlo estaremos desaprovechando parte de su alcance. No recomendamos ponerlo en el suelo.</p>
      <p>Y por último tienes que tener en cuenta cómo rodeas a tu router. Por ejemplo, aunque tengas el router en el centro de la casa de poco te servirá si lo colocas dentro de un armario o en un falso techo. Las paredes también limitan la señal, por lo que cuanto más liberado de obstáculos esté mejor será la cobertura en todas las zonas de tu casa.</p>
      <h4 style="color: #396E4B !important;">Evitar entornos saturados de señales</h4>
      <p>Las conexiones WiFi utilizan señales de radio, al igual que lo hacen los teléfonos móviles, el televisor y otros muchos aparatos tecnológicos. Esto significa que la cobertura inalámbrica puede verse afectada por otras ondas electromagnéticas generadas por el resto de dispositivos electrónicos y eléctricos que tengas en tu casa reduciendo su eficiencia. Para evitar problemas, lo mejor es colocar tu router lejos de electrodomésticos como microondas, teléfonos inalámbricos, intercomunicadores de bebé, etc. Las superficies metálicas, los acuarios y los espejos también pueden causar dificultades.</p>
      <h4 style="color: #396E4B !important;">Elegir entre 2.4GHz y 5GHz</h4>
      <p>La WIFI de 2.4 GHz tiene una menor velocidad máxima de conexión y puede llegar más lejos la cobertura.</p>
      <p>El 2.4 GHz podría ser mas adecuado para aquellos dispositivos donde es más importante la cobertura, como puedan ser móviles, tabletas y tv que estén en un rango mas lejano y con más obstáculos.</p>
      <p>La WIFI 5 GHz tiene una mayor velocidad máxima de conexión su punto negativo es que tiene mas problemas para superar obstáculos como paredes, por lo que si cobertura suele ser menor en muchos casos.</p>
      <p>El 5GHz sería más apropiado para dispositivos donde la velocidad que necesiten velocidad por encima de la cobertura o dispositivos cercanos al router como ordenadores y consolas de videojuegos.</p>
      <h4 style="color: #396E4B !important;">Ajustar la orientación de las antenas</h4>
      <p>Estas antenas no son decorativas: su función es ayudar a mejorar la difusión de la señal wifi para que pueda llegar a todas las habitaciones.</p>
      <p>La posición más recomendada para colocar las antenas del router es en L formando un Angulo de 90 grados. Es decir, deberías colocar una antena en posición vertical y la otra posición horizontal.</p>
      <h4 style="color: #396E4B !important;">¿Qué materiales son los que más reducen la intensidad de la señal Wifi?</h4>
      <p><strong>Madera:</strong> Es el que menos impacto tiene en la intensidad de la señal Wifi, ya que apenas la reduce en un 5%. Esto quiere decir que en una casa de madera podremos cubrir varias dependencias sin problema con un router incluso aunque tengamos las puertas cerradas.</p>
      <p><strong>Cristal:</strong> Reduce la intensidad de la señal Wifi en un 25%, por lo que tampoco resulta un material problemático para disfrutar de una buena experiencia.</p>
      <p><strong>Ladrillo:</strong> Este material reduce la intensidad de la señal Wifi en un 30%, lo que lo sitúa casi al mismo nivel que el cristal.</p>
      <p><strong>Hormigón:</strong> Podríamos pensar que es el material más problemático en realidad sólo bloquea la señal en un 40%, lo que significa que, aunque efectivamente tiene un gran impacto no es el que más puede afectar a nuestra conexión inalámbrica.</p>      
      <p><strong>Pladur: </strong> Es el material más problemático ya que un único muro puede reducir la intensidad de la señal en un 50% y hacer que en un par de metros perdamos totalmente la conexión inalámbrica. Debemos evitar «encerrar» el router en una habitación que esté hecha de este material, aunque si no nos queda otra opción porque todo nuestro hogar está construido con pladur siempre podremos recurrir a repetidores Wifi.</p>  
    `,
  },
  {
    title: 'Cambio de Contraseña',
    content: `
      <p>Esta política se reserva para clientes con equipos (ONU TP LINK). El cliente puede realizar dicho cambio mediante un tutorial en el siguiente link:</p>
      <p>El soporte técnico que Inbtel brinda a los clientes en cuanto al reporte de cambio de contraseña, se límita a ser vía remota, apoyando por medio de la aplicación any desk y soporte guiado vía telefónica para realizar dicho cambio. En caso de requerir visita de soporte a su domicilio para cambio de contraseña, tendrá un costo de recuperación de $150.00 MXN. La cual estará sujeta a disponibilidad con un SLA de 24 a 72 horas.</p>
    `,
  },
  {
    title: 'Tarifas y servicios adcionales',
    content: `
      <h4 style="color: #396E4B !important;">Adicionales Internet</h4>
      <div class="col-12 col-md-6 table-responsive mt-3">
        <table class="table table-bordered">
          <thead class="table-success">
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Renta de extensores wifi </td>
              <td>$89.00/Mensual</td>
            </tr>
            <tr>
              <td>IP Pública</td>
              <td>$950.00/mensual</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 style="color: #396E4B !important;">Adicionales Telefonía</h4>
      <div class="col-12 col-md-6 table-responsive mt-3">
        <table class="table table-bordered">
          <thead class="table-success">
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Extensión telefónica adicional</td>
              <td>$50.00/mensual</td>
            </tr>
            <tr>
              <td>Instalación de línea telefónica 30m</td>
              <td>$250.00</td>
            </tr>
            <tr>
              <td>Instalación de línea telefónica 50m</td>
              <td>$420.00</td>
            </tr>
            <tr>
              <td>Divisor de línea 2 entradas</td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>Divisor de línea 3 entradas</td>
              <td>$80.00</td>
            </tr>                        
          </tbody>
        </table>
      </div>  
      <h4 style="color: #396E4B !important;">Adicionales de instalaciones</h4>
      <div class="col-12 col-md-6 table-responsive mt-3">
        <table class="table table-bordered">
          <thead class="table-success">
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cambio de domicilio</td>
              <td>$399.00</td>
            </tr>
            <tr>
              <td>Reubicación de equipos con obra</td>
              <td>$399.00</td>
            </tr>
            <tr>
              <td>Reubicación de equipos sin obra</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>Cambio de jumper (Daño ocasionado por el cliente)</td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>Renovación de instalación debido a daño ocasionado por el cliente</td>
              <td>$399.00</td>
            </tr>                        
          </tbody>
        </table>
      </div> 
      <ul>
        <li>El cambio de domicilio está sujeto a cobertura.</li>
        <li>En caso de cambio de domicilio a una ubicación fuera de el área de cobertura el costo esta sujeto a factibilidad.</li>
        <li>La reubicación de equipos sin obra se considera cuando no hay necesidad de tirar nueva fibra durante la instalación, pero incluye materiales y mano de obra.</li>
        <li>La reubicación de equipos con obra implica tirar nueva fibra durante la instalación, incluye materiales y mano de obra.</li>
        <li>Estos servicios están sujetos disponibilidad de programación, con un SLA de 24 a 72hrs.</li>
      </ul>              
    `,
  },
  {
    title: 'Cancelación del servicio',
    content: `
      <p>El cliente podrá cancelar su servicio,siempre y cuando no tenga ningún adeudo con Inbtel y haya regresado los equipos que se instalaron en su domicilio.</p>
      <p>Cuando se cancela el servicio por falta de pago y no se localiza para entrega de equipos, ese domicilio queda restringido para futuras contrataciones.</p>
      <p>El cliente podrá realizar su cancelación por problemas técnicos previos a la cancelación, siempre y cuando se hayan hecho reportes justificados de su parte y no se le haya dado una solución adecuada.</p>
    `,
  },
  {
    title: 'Televisión',
    content: `
      <pCon la finalidad de complementar la diversión de los paquetes contratados con INBTEL, hemos lanzado el servicio INBTEL TV +.</p>
      <p>Puede contratarlo llamando al número de Atención a Clientes 8335260000.</p>
      <p>La tecnología que se utiliza requiere que las TV de los clientes cuenten con entrada HDMI para su aprovisionamiento, en caso de no ser así la instalación no puede proceder.</p>
      <p>Actualmente contamos con el siguiente paquete:</p>
      <p><strong>PAQUETE BÁSICO</strong> 1 decodificador con control y 40 canales. + 1 Usuario adicional Costo: 1 Mensualidad $99.00 y gratis el usuario adicional durante el primer mes, a partir de la segunda mensualidad $118.00/mensual.</p>
      <p>Los paquetes de TV cuentan con un plazo forzoso a 18 meses.</p>
      <p>Se podrán solicitar decodificadores de televisión adicionales a la incluida en el paquete contratado, siempre que sea técnicamente factible.</p>
      <p>Los decodificadores de televisión tienen un costo adicional al paquete Contratado de $89.00 /mensual.</p>
      <p>Los paquetes de televisión están limitados a un número determinado de decodificadores adicionales de televisión para ver programación de manera independiente, en la misma cuenta, dentro del mismo domicilio.</p>
      <p>En caso de perdida o daño de los equipos se deberá cubrir el costo:</p>
      <ul>
        <li>Decodificador $900.00</li>
        <li>Control $450.00</li>
        <li>Usuario adicional para aplicación móvil $19.00</li>
      </ul> 
      <p>Aplicación móvil INBTEL TV+, disponible para dispositivos ANDROID, es exclusivo para clientes que tienen contratado un paquete de INBTEL TV+</p>      
    `,
  },    
])
</script>

<style scoped>
.accordion-button {
  font-weight: 600;
}
.accordion-body ul {
  padding-left: 1.2rem;
}
.text-inbtel {
  color: #7AD100 !important
}
</style>
