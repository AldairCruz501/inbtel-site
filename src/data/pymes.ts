import type { PymeData } from "../interfaces/Pymes" 

export const pymeData: PymeData = {
    plansInt: [
        {
            nombre: "PYME Escencial",
            mbps: 200,
            precio: "599",
            sub1: "Mbps",
            sub2: "Simétricos",
            simetrico: "/img/pymes/pyme-simetrico.png",
            folioIFT: "1136776",
            pago: "579",
            id: 401,
        },
        {
            nombre: "PYME Plus",
            mbps: 300,
            precio: "699",
            sub1: "Mbps",
            sub2: "Simétricos",
            wifi: "Wifi 6",
            repwifi: "Repetidor Wifi",
            simetrico: "/img/pymes/pyme-simetrico.png",
            repetidor: "/img/pymes/pyme-extensor.png",
            folioIFT: "1136776",
            id: 402,
            pago: "679",
        },
        {
            nombre: "PYME Pro",
            mbps: 600,
            precio: "999",
            sub1: "200 Mbps",
            sub2: "Subida",
            wifi: "Wifi 6",
            repwifi: "Repetidor Wifi",
            simetrico: "/img/pymes/pyme-simetrico.png",
            repetidor: "/img/pymes/pyme-extensor.png",
            folioIFT: "1136776",
            id: 403,
            pago: "979",
        },
        {
            nombre: "PYME Premium",
            mbps: 1000,
            precio: "1,499",
            sub1: "300 Mbps",
            sub2: "Subida",
            wifi: "Wifi 6",
            repwifi: "Repetidor Wifi",
            simetrico: "/img/pymes/pyme-simetrico.png",
            repetidor: "/img/pymes/pyme-extensor.png",
            folioIFT: "1136776",
            id: 404,
            pago: "1479",
        },
    ],
    plansTV: [
        {
            nombre: "Entretenimiento",
            canales: "40",
            precio: "149",
            img: "/img/pla-entretenimiento.png"
        },
                {
            nombre: "Diversión",
            canales: "50",
            precio: "249",
            img: "/img/pla-diversion.png"
        },
    ]
}