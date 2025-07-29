<template>
  <section class="accordion" id="inbtelAccordion">
    <div
      class="accordion-item border-0 border-bottom"
      v-for="(section, index) in sections"
      :key="index"
    >
      <h3 class="accordion-header p-3" :id="'heading' + index">
        <button
            class="accordion-button fs-3"
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
        <div class="accordion-body" v-html="section.content"></div>
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
      <p>Si un cliente cuenta con adeudo de equipos, deberá realizar entrega de los mismos, para liberar el adeudo.</p>
      <p><strong>DOMICILIO VETADO</strong>: si no cumple plazo forzoso desde 1º junio 2022</p>
    `,
  },
  {
    title: 'Programación y tiempos de instalación',
    content: `
      <p>El tiempo de instalación es de 3 a 10 días hábiles.</p>
      <p>Horarios: 9:00 am a 6:00 pm, lunes a sábado.</p>
      <p>Debe estar un mayor de edad presente. Pago al técnico en efectivo al terminar instalación.</p>
    `,
  },
  {
    title: 'Portabilidad',
    content: `
      <p>Debes solicitar el NIP de portabilidad marcando al 051.</p>
      <ul>
        <li>Identificación oficial</li>
        <li>Comprobante de pago actual</li>
      </ul>
      <p>El servicio debe estar activo con tu proveedor actual.</p>
    `,
  },
  {
    title: 'Costo de Equipos',
    content: `
      <p>Los equipos son en comodato. Si se cancelan, se deben entregar o pagar.</p>
      <p>Si hay daños por parte del cliente, se deben pagar.</p>
    `,
  },
  {
    title: 'Costo de Reconexión del Servicio',
    content: `
      <p>Costo por reconexión: <strong>$50.00</strong></p>
      <p>Promesas de pago no deben exceder 3 días.</p>
    `,
  },
  {
    title: 'Cambio de Plan',
    content: `
      <p>Cambio a plan inferior solo después del 3º mes sin adeudos.</p>
      <p>Costo si es antes: <strong>$399.00</strong></p>
    `,
  },
  {
    title: 'Estado de Cuenta',
    content: `
      <p>Se envía al correo del cliente.</p>
      <p>Portal: <a href="https://wisphub.net/accounts/login/?next=/panel/clientes/*/" target="_blank">Wisp Hub</a></p>
    `,
  },
  {
    title: 'Opciones de Pago',
    content: `
      <ul>
        <li>Portal del cliente (tarjeta)</li>
        <li>Paynet (Farmacias, Walmart, etc.)</li>
        <li>Oficina</li>
        <li>PayPal</li>
        <li>Transferencia</li>
      </ul>
    `,
  },
  {
    title: 'Costos de Instalación',
    content: `
      <ul>
        <li>6 meses: $330 o $399</li>
        <li>18 meses: $150 o $200</li>
        <li>Negocios: $150</li>
      </ul>
    `,
  },
  {
    title: 'Promociones',
    content: `
      <p>Las promociones no aplican si el servicio es suspendido.</p>
      <p>Instalación gratis implica compromiso de 6 meses o pagar $399</p>
    `,
  },
  {
    title: '¡Recomienda y gana!',
    content: `
      <p>1 cliente referido instalado = 1 mensualidad gratis</p>
      <p>Debe mencionarse al momento de contratar</p>
    `,
  },
  {
    title: 'Velocidad de Internet',
    content: `
      <p>Garantía del 60% en planes residenciales.</p>
      <p>La velocidad se ve afectada por el número de dispositivos conectados.</p>
    `,
  },
  {
    title: 'Reportes Soporte Técnico',
    content: `
      <p>SLA: 24 a 72 horas para resolución</p>
      <p>Visitas no imputables: $100.00</p>
    `,
  },
  {
    title: 'Recomendaciones para medir la velocidad correctamente',
    content: `
      <ul>
        <li>Medir por cable Ethernet</li>
        <li>Usar aplicaciones oficiales como Speedtest</li>
        <li>Evitar obstáculos y dispositivos conectados</li>
      </ul>
    `,
  },
  {
    title: 'Ubicación del router',
    content: `
      <p>Colócalo en el centro del hogar, en alto, sin obstáculos.</p>
      <p>Evita colocarlo cerca de microondas, espejos, acuarios, etc.</p>
    `,
  },
  {
    title: 'Frecuencia 2.4GHz vs 5GHz',
    content: `
      <ul>
        <li>2.4GHz: más alcance, menos velocidad</li>
        <li>5GHz: más velocidad, menos alcance</li>
      </ul>
    `,
  },
  {
    title: 'Antenas del router',
    content: `
      <p>Colócalas en L: una vertical y una horizontal para mejor cobertura.</p>
    `,
  },
  {
    title: 'Materiales que bloquean la señal Wi-Fi',
    content: `
      <ul>
        <li>Madera: 5%</li>
        <li>Vidrio: 25%</li>
        <li>Ladrillo: 30%</li>
        <li>Hormigón: 40%</li>
        <li>Pladur: 50%</li>
      </ul>
    `,
  },
  {
    title: 'Cambio de Contraseña',
    content: `
      <p>Solo para ONU TP LINK. Se hace remotamente por Anydesk o por visita ($150).</p>
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
</style>
