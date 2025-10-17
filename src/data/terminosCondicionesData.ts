// data/terminosCondicionesData.ts
import type { Seccion } from '../interfaces/Seccion'

export const terminosCondiciones: Seccion[] = [
  {
    titulo: 'Zona de cobertura',
    contenido: [
      'Toda contratación deberá realizarse dentro de la zona de cobertura de INBTEL, la cual puede consultarse en el portal www.inbtel.com o vía telefónica al 833 526 0000.',
      'Las solicitudes fuera de la zona de cobertura no podrán ser procesadas.',
      'En caso de existir restricciones técnicas que impidan la instalación, incluso dentro de la zona de cobertura, el Cliente será notificado oportunamente.'
    ]
  },
  {
    titulo: 'Disponibilidad y Restricciones',
    listanum: [
      'La prestación de los servicios de INBTEL está sujeta a la cobertura de red y condiciones técnicas en el domicilio del Cliente.',
      {
        texto: 'Las velocidades contratadas corresponden a la máxima ofrecida, pero pueden variar debido a:',
        sublista: [
          'Capacidad y estado del equipo del Cliente (módem, router, computadora, dispositivos móviles).',
          'Número de dispositivos conectados simultáneamente.',
          'Condiciones de la red interna del domicilio.',
          'Factores externos como clima, energía eléctrica o casos de fuerza mayor.'
        ]
      },
      'INBTEL no será responsable por interrupciones ocasionadas por causas ajenas a su control, tales como fallas eléctricas, actos de terceros o fenómenos naturales.',
      'En caso de fallas atribuibles a INBTEL, se aplicarán los tiempos de atención establecidos en el SLA (Acuerdo de Nivel de Servicio) vigente.',
      'El servicio estará disponible únicamente dentro de la zona de cobertura publicada en www.inbtel.com o validada por nuestros asesores autorizados.'
    ]
  },
]

export const terminosCondiciones1: Seccion[] = [
    {
    titulo: 'COMUNICACIÓN',
    contenido: [
      'Todos los clientes de INBTEL COMUNICACIONES aceptan poder recibir notificaciones a través de correo electrónico, sms o cualquier otro medio de comunicación, con la finalidad de poder enterarlo de nuestra publicidad, recordatorios de pago, invitaciones y más información relacionada con su servicio. En caso de querer ser dado de baja, puede solicitar su des suscripción en el departamento de Atención al Cliente al correo clientes@inbtel.com',
    ]
  },
  {
    titulo: 'AVISO SOBRE EL USO DE LA INFORMACION PERSONAL',
    contenido: [
      'Por medio del presente aviso y en cumplimiento con los artículos 3, 7, 15, 16 y relativos de la Ley de Protección de Datos Personales en posesión de particulares (la “Ley) notificamos a usted que la información personal que nos ha entregado puede ser utilizada para identificarle y ser considerada como sensible de acuerdo con la Ley podrá ser utilizada por INBTEL S. A. DE C.V. y/o sus empresas filiales para efecto de:'
    ],
    lista: [
      'Tener un expediente por cliente con sus datos personales',
      'Conocer su información para uso interno, administrativa o planeación mercadológica',
      'Cualquier otra actividad relacionada entre cliente-proveedor y la responsabilidad del contrato que se esta adquiriendo.',
    ],
    contenido1: [
      'Su información personal será mantenida en una base de datos propiedad de INBTEL S. A. DE C.V. y solo será utiliz               ada de manera justificada y siempre en cumplimiento con la Ley. Nosotros no realizamos transferencias de sus datos personales a terceros. De conformidad con los artículos 22, 24, 25 y relativos de la Ley usted tiene en derecho a solicitar modificaciones a toda o parte de su información personal y a que dicha información sea retirada total o parcialmente de las bases de datos. Inbtel S. A. DE C.V. no será responsable por la veracidad de la información personal que usted proporcione, ni de su verificación y/o actualización, por lo que si usted no solicita el cambio o modificación de información deberá asumirse que la información es precisa y verdadera con todas las implicaciones que esto conlleve, siendo usted el único responsable por la información personal proporcionada y sus consecuencias.',
      'En todo momento, usted podrá revocar el consentimiento que nos ha otorgado para el tratamiento de sus datos personales, a fin de que dejemos de hacer uso de los mismos. Para ello, es necesario que presente su petición enviando un correo electrónico a la siguiente dirección contacto@inbtel.com , indicando su solicitud y los datos necesarios como lo son Nombre completo (nombre o nombres y apellido o apellidos), anexando una versión digitalizada de la identificación oficial (escaneo), teléfono y dirección física o electrónica para fines de notificaciones relacionadas al caso o para cualquier duda o aclaración comunicarse al teléfono (52) (55) 1328 4001 con el responsable del Área de Datos Personales, esta información será resguardada bajo la misma Ley.',
      'El plazo para atender su solicitud es de 10 días hábiles y le informaremos sobre la procedencia de la misma a través de los medios que usted nos proporcionó para notificarle.',
      'Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas o políticas internas.',
      'Estas modificaciones estarán disponibles a través de nuestra página de Internet (sección aviso de privacidad) o al último correo electrónico que nos haya proporcionado.'
    ]
  },
]

export const terminosCondiciones2: Seccion[] = [
    {
    titulo: 'COLABORACIÓN CON LA JUSTICIA',
    contenido: [
      'En cumplimiento a lo dispuesto en el “ACUERDO MEDIANTE EL CUAL EL PLENO DEL INSTITUTO FEDERAL DE TELECOMUNICACIONES EXPIDE LOS LINEAMIENTOS DE COLABORACIÓN EN MATERIA DE SEGURIDAD Y JUSTICIA Y MODIFICA EL PLAN TÉCNICO FUNDAMENTAL DE NUMERACIÓN, PUBLICADO EN EL DIARIO OFICIAL DE LA FEDERACIÓN EL 21 DE JUNIO DE 1996” y publicado en el Diario Oficial de la Federación el 2 de diciembre de 2015 (el “Acuerdo”), en este acto se informa lo siguiente:',
      'Área Responsable: Departamento Legal de Inbtel Comunicaciones, con correo electrónico asuntoslegales@inbtel.com, disponible los 365 días del año 24/7, asimismo estamos a sus órdenes en el teléfono (55) 41708990 ext. 1007, en horario de oficina de lunes a viernes de 9am a 6pm.'
    ]
  },
  {
    titulo: 'DOMICILIO PARA RECIBIR DOCUMENTACIÓN FISICA:',
    contenido: [
      'Calle Tamaulipas #607, Tampico Centro, CP 89000, en el municipio de Tampico Tamaulipas, con un horario de atención al cliente de lunes a viernes de 9am a 6pm.',
    ],
  },
]