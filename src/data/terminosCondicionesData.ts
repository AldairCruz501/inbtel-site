// data/terminosCondicionesData.ts
import type { Seccion } from '../interfaces/Seccion'

export const terminosCondiciones: Seccion[] = [
  {
    titulo: 'Zona de cobertura',
    contenido: [
      'Toda contratación deberá estar dentro de la zona de cobertura que puede ser consultada en el portal Inbtel.com, vía telefónica al número 833526000 o bien al correo contacto@inbtel.com.',
      'Solicitudes que no se encuentren dentro de la zona de cobertura no podrán ser procesadas. En caso de que existan restricciones que impidan la instalación, incluso dentro de la zona de cobertura, el cliente será notificado.',
    ]
  },
  {
    titulo: 'Contratación',
    contenido: [
      'Para llevar a cabo la contratación del servicio, el cliente deberá entregar la siguiente documentación y cumplir con los requisitos:'
    ],
    lista: [
      'Contrato de INBTEL S.A. DE C.V. debidamente llenado y firmado por el cliente.',
      'Identificación oficial vigente (INE, Pasaporte o Cédula Profesional).',
      'Comprobante de domicilio reciente (no mayor a 3 meses).',
      'Pago del costo de instalación y una renta mensual por adelantado en el momento de la instalación.'
    ],
    contenido1: [
      'Se deberá realizar el pago equivalente a la instalación más la primera renta mensual del plan contratado. En caso de haber adquirido una promoción de descuento en la contratación del servicio, este monto se descontará del total a pagar en la'
    ]
  }
]
