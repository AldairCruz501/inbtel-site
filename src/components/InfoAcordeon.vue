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
    title: 'Contratación',
    content: `
      <h4 class="fw-bold">Esquemas de Contratación</h4>
      <ul>
        <li>
          <span class="fw-bold">Prepago</span>:
            El Cliente paga los servicios de manera anticipada a su utilización. Sujeto a disponibilidad.
        </li>
      </ul>
      <h4 class="fw-bold mt-4 mb-3">Requisitos</h4>
      <h5 class="fw-bold">Persona Física:</h5>
      <ul>
        <li>Identificación oficial vigente (INE, cédula profesional, pasaporte o licencia de conducir).</li>
        <li>Comprobante de domicilio con antigüedad no mayor a 3 meses (recibo de luz o agua).</li>
      </ul>
      <h5 class="fw-bold">Persona Moral (mediante Representante Legal con facultades suficientes):</h5>
      <ul>
        <li>Poder notarial o documento que acredite la representación.</li>
        <li>RFC.</li>
        <li>Comprobante de domicilio con antigüedad no mayor a 3 meses (recibo de luz o agua).</li>
        <li>INE del Representante Legal.</li>
      </ul>
      <h4 class="fw-bold mt-4">Medios de Contratación</h4>
      <ul>
        <li>Call Center.</li>
        <li>Asesor en visita domiciliaria (cambaceo).</li>
        <li>Asesor en módulo de ventas.</li>
        <li>Sucursales INBTEL.</li>
        <li>Página web oficial.</li>
      </ul>
      <h4 class="fw-bold mt-4 mb-3">Procesos de Contratación</h4>
      <h5 class="fw-bold">Contratación en Página Web</h5>
      <ol>
        <li>El Cliente ingresa a www.inbtel.com.mx.</li>
        <li>Selecciona el paquete deseado y da clic en <span class="fw-bold">“Lo quiero”.</span></li>
        <li>Se enlaza automáticamente con el WhatsApp del Call Center.</li>
        <li>Selecciona la opción <span class="fw-bold">“Quiero contratar”.</span></li>
        <li>El sistema muestra mensaje de bienvenida.</li>
        <li>El Cliente proporciona datos básicos (dirección, colonia, ubicación).</li>
        <li>El asesor valida la cobertura.</li>
        <li>Si procede, se envía un link de contratación para cargar documentos (INE, comprobante de domicilio, plan contratado).</li>
        <li>Se llena y firma el contrato digitalmente./li>
        <li>El sistema muestra mensaje de bienvenida.</li>
      </ol>
      <h5 class="fw-bold">Contratación en Visita a Domicilio (Cambaceo)</h5>
      <ol>
        <li>El <span class="fw-bold">asesor INBTEL</span> acude al domicilio del Cliente.</li>
        <li>Presenta requisitos, planes y promociones vigentes.</li>
        <li>Verifica la cobertura.</li>
        <li>El Cliente selecciona un plan.</li>
        <li>Presenta identificación oficial y comprobante de domicilio.</li>
        <li>Se llena y firma el contrato.</li>
        <li>El Call Center realiza llamada de verificación.</li>
        <li>Se agenda la instalación.</li>
        <li>El Cliente paga la primera mensualidad al técnico instalador durante la visita.</li>
      </ol>
      <h5 class="fw-bold">Contratación en Módulo de Ventas</h5>
      <ol>
        <li>El <span class="fw-bold">asesor INBTEL</span> recibe al Cliente en el módulo de ventas.</li>
        <li>Presenta los requisitos de contratación, así como los planes y promociones vigentes.</li>
        <li>Verifica la cobertura del domicilio proporcionado.</li>
        <li>El Cliente selecciona el plan de su preferencia.</li>
        <li>El Cliente presenta identificación oficial vigente y comprobante de domicilio con antigüedad no mayor a 3 meses.</li>
        <li>Se llena y firma el contrato de servicios.</li>
        <li>El Call Center de INBTEL realiza llamada de verificación.</li>
        <li>Se agenda la fecha de instalación.</li>
        <li>En la visita de instalación, el Cliente paga la primera mensualidad al <span class="fw-bold">técnico instalador</span>.</li>
      </ol>
      <h5 class="fw-bold">Contratación en Sucursal INBTEL</h5>
      <ol>
        <li>El Cliente acude a la sucursal más cercana.</li>
        <li>Un <span class="fw-bold">asesor INBTEL</span> lo atiende.</li>
        <li>Se valida cobertura.</li>
        <li>Se presentan planes y promociones vigentes.</li>
        <li>El Cliente elige un plan.</li>
        <li>Presenta identificación oficial y comprobante de domicilio.</li>
        <li>Se llena y firma el contrato.</li>
        <li>El Call Center realiza llamada de verificación.</li>
        <li>Se agenda la instalación.</li>
        <li>El Cliente paga la primera mensualidad al <span class="fw-bold">técnico instalador</span>.</li>
      </ol>
    `,
  },
  {
    title: 'Cambios de Paquete o Servicio',
    content: `
      <ul>
        <li>El Cliente puede solicitar modificación de su paquete siempre que no existan restricciones contractuales y su cuenta esté al corriente.</li>
        <li>La solicitud debe realizarse antes de la fecha límite de pago.</li>
        <li>El cambio se aplicará en un plazo de <span class="fw-bold">24 a 72 horas</span>.</li>
        <li>Para <span class="fw-bold">disminuir el plan contratado</span> (cambiar a un paquete de menor costo o menor velocidad), el Cliente deberá contar con un historial mínimo de <span class="fw-bold">3 meses pagados de forma continua</span>.</li>
        <li>El trámite puede realizarse en sucursal, vía telefónica o WhatsApp (833 526 0000).</li>
        <li>Para validar, se solicitará INE del titular y quedará registrado en el contrato original.</li>
      </ul>
    `,
  },
  {
    title: 'Procedimiento de Instalación',
    content: `
      <ol>
        <li>El Cliente recibirá una llamada para agendar la instalación (máximo 10 días hábiles posteriores a la contratación).</li>
        <li>El <span class="fw-bold">técnico instalador</span> acude uniformado e identificado.</li>
        <li>El técnico explica al Cliente la ruta del cableado para su autorización.</li>
        <li>El Cliente cubre el pago de la primera mensualidad.</li>
        <li>El Cliente firma el documento de conformidad.</li>
        <li>Opcionalmente, podrá responder una encuesta de satisfacción.</li>
      </ll>
    `,
  },
  {
    title: 'Procedimiento de Desinstalación',
    content: `
    <ul>
      <li>Se acuerda fecha de desinstalación o recolección de equipos.</li>
      <li>El <span class="fw-bold">gestor INBTEL</span> acude al domicilio y recoge equipos en comodato (ONU, router, decodificador, controles, fuentes de poder).</li>
      <li>El Cliente firma la Orden de Recolección y Documento de Cancelación.</li>
      <li>La cancelación se refleja en el sistema en máximo 1 día hábil.</li>
    </ul>
    `,
  },
   {
    title: 'Características de los Equipos',
    content: `
      <p>Los equipos provistos por INBTEL se entregan en <span>comodato</span>, por lo que el Cliente es responsable de su guarda, uso correcto y conservación. Dichos equipos son indispensables para la prestación del servicio y deberán devolverse en caso de cancelación.</p>
      <h4 class="fw-bold mb-3">Modelos actualmente utilizados</h4>
      <h5 class="fw-bold mt-4">ONU GPON WiFi 6 Doble Banda 2.4/5 GHz</h5>
      <p class="fw-bold mt-2">
        Características Generales:
      </p>
      <ul>
        <li>
          <strong>Interfaz GPON:</strong>
          <ul>
            <li>Estándar: ITU-T G.984, Clase B+.</li>
            <li>Longitud de Onda Central: Tx: 1310 nm, Rx: 1490 nm.</li>
            <li>Potencia Óptica Tx: 0.5 dBm a 5.0 dBm.</li>
            <li>Rango de Potencia Óptica Rx: -8 dBm a -29 dBm.</li>
            <li>Tipo de Interfaz: SC/APC.</li>
          </ul>
        </li>
        <li><strong>Interfaz Ethernet:</strong> 4 puertos Gigabit Ethernet.</li>
        <li><strong>Interfaz USB:</strong> USB 2.0/3.0 estándar.</li>
        <li><strong>Interfaz POTS:</strong> 1 puerto POTS (RJ11) para telefonía análoga.</li>
        <li><strong>CATV:</strong> 1 puerto RF.</li>
        <li>
          <strong>WiFi:</strong>
          <ul>
            <li>Estándar IEEE 802.11 b/g/n/a/ac/ax.</li>
            <li>Bandas 2.4 GHz y 5 GHz.</li>
            <li>Soporta hasta 8 SSIDs (4+4).</li>
          </ul>
        </li>
      </ul>
      <p class="fw-bold mt-2">
        Características físicas y eléctricas:
      </p>
      <ul>
        <li>Dimensiones: 41 × 161 × 223 mm (Alto × Ancho × Profundidad).</li>
        <li>Fuente de alimentación: 12Vcc/2A (Adaptador incluido).</li>
        <li>Temperatura de operación: -5ºC a 45ºC.</li>
        <li>Consumo máximo: 16 Watts.</li>
        <li>Cantidad de antenas: 2.</li>
        <li>Peso: 458 g.</li>
      </ul>
      <h5 class="fw-bold mt-4">ONU GPON WiFi 6 Doble Banda 2.4/5 GHz</h5>
      <p class="fw-bold mt-2">
        Características Generales:
      </p>
      <ul>
        <li>
          <strong>Interfaz GPON:</strong>
          <ul>
            <li>Estándar: ITU-T G.984, Clase B+.</li>
            <li>Tipo de Interfaz: SC/UPC.</li>
          </ul>
        </li>
        <li><strong>Interfaz Ethernet:</strong> 4 puertos Gigabit Ethernet.</li>
        <li><strong>Interfaz USB:</strong> 1 puerto USB 2.0 + 1 puerto USB 3.0.</li>
        <li><strong>Interfaz POTS:</strong> 1 puerto POTS (RJ11) para telefonía análoga.</li>
        <li><strong>CATV:</strong> 1 puerto RF.</li>
        <li>
          <strong>WiFi:</strong>
          <ul>
            <li>Estándar IEEE 802.11 b/g/n/a/ac/ax.</li>
            <li>o	Doble Banda 2.4 y 5 GHz MIMO 2x2.</li>
            <li>Soporta hasta 8 SSIDs (4+4).</li>
          </ul>
        </li>
      </ul>
      <p class="fw-bold mt-2">
        Características físicas y eléctricas:
      </p>
      <ul>
        <li>Dimensiones: 42 × 135 × 185 mm (Alto × Ancho × Profundidad).</li>
        <li>Fuente de alimentación: 12Vcc/1.5A (Adaptador incluido).</li>
        <li>Temperatura de operación: -5ºC a 45ºC.</li>
        <li>Consumo máximo: 16 Watts.</li>
        <li>Cantidad de antenas: 2.</li>
        <li>Peso: 458 g.</li>
      </ul>
    `,
  }, 
  {
    title: 'Medios de Pago Autorizados',
    content: `
      <ul>
        <li>Efectivo en sucursales INBTEL.</li>
        <li>OXXO Pay.</li>
        <li>Open Pay.</li>
        <li>Mercado Pago.</li>
        <li>PayPal.</li>
      </ul>
    `,
  },
  {
    title: 'Suspensión y Reconexión',
    content: `
      <ul>
        <li>El pago debe realizarse en la fecha establecida.</li>
        <li>El Cliente cuenta con <span class="fw-bold">14 días naturales</span> después de la fecha límite para regularizarse.</li>
        <li>A partir del día 15, el servicio será suspendido.</li>
        <li>Para reactivar: liquidar adeudos y cubrir cargo por reconexión de $50.00.</li>
      </ul>
    `,
  },
  {
    title: 'Portabilidad Numérica',
    content: `
      <ol>
        <li>El Cliente solicita NIP de portabilidad al 051.</li>
        <li>Proporciona NIP y documentos al <span class="fw-bold">asesor INBTEL</span>.</li>
        <li>Una vez instalado el servicio, se ejecuta la portabilidad.</li>
        <li>La portabilidad no libera al Cliente de adeudos con su proveedor anterior.</li>
      </ol>
    `,
  },
  {
    title: 'Cambio de Domicilio',
    content: `
      <ol>
        <li>El Cliente solicita el trámite vía Call Center o en sucursal.</li>
        <li>Presenta INE y comprobante de domicilio del nuevo lugar.</li>
        <li>No debe tener adeudos pendientes.</li>
        <li>El asesor valida cobertura en la nueva dirección.</li>
        <li>Se agenda la reinstalación con un <span class="fw-bold">técnico instalador</span>.</li>
        <li>El proceso se realiza en un plazo de <span class="fw-bold">3 a 10 días hábiles.</span>.</li>
      </ol>
    `,
  },
  {
    title: 'Cancelación de Servicios',
    content: `
      <ol>
        <li>El titular debe acudir a sucursal con INE vigente.</li>
        <li>Puede autorizar a un tercero con carta poder simple e identificaciones.</li>
        <li>No debe haber adeudos ni plazos forzosos incumplidos.</li>
        <li>Deben devolverse todos los equipos en comodato.</li>
        <li>El Cliente recibe comprobante de suspensión y de entrega de equipos.</li>
        <li>La cancelación se refleja en el sistema en máximo 1 día hábil.</li>
      </ol>
    `,
  },    
  {
    title: 'Robo de Equipo y/o Siniestro',
    content: `
      <h4 class="fw-bold mb-3">Atención en sucursal</h4>
      <ol>
        <li>Dar aviso inmediato a INBTEL (máx. 24 horas posteriores al evento).</li>
        <li>Presentar denuncia correspondiente.</li>
        <li>
          Acudir a sucursal con:
          <ul>
            <li>Constancia de denuncia.</li>
            <li>Número de Cliente.</li>
            <li>INE del titular.</li>
            <li>Si aplica, identificación del tercero autorizado.</li>
          </ul>
        </li>
        <li>
          Un asesor INBTEL revisará la solicitud.
          <ul>
            <li>Si procede: reposición sin costo.</li>
            <li>Si no procede: se aplicará cargo por reposición.</li>
          </ul>
        </li>
      </ol>

      <h4 class="fw-bold mb-3 mt-4">Atención remota</h4>
      <ol>
        <li>Reportar al <strong>833 526 0000</strong> dentro de las 24 horas posteriores.</li>
        <li>
          Enviar por WhatsApp:
          <ul>
            <li>Constancia de denuncia.</li>
            <li>Número de Cliente.</li>
            <li>INE del titular y, en su caso, de la persona autorizada.</li>
          </ul>
        </li>
        <li>Un asesor INBTEL validará la documentación.</li>
        <li>El Cliente recibirá notificación con el estatus y, de proceder, la fecha de entrega del nuevo equipo.</li>
      </ol>
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
