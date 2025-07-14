export interface ResidencialData {
    plansInt: PlanInternet[];
    plansTV: PlanTV[];
}

export interface PlanInternet {
    nombre: string,
    mbps: string,
    precio: string,
    pago: string,
    sub1: string,
    sub2: string,
    wifi?:string,
    repwifi?: string,
    folioIFT: string,
    simetrico?: string,
    repetidor?: string,
}

export interface PlanTV {
    nombre: string,
    canales: string,
    precio: string
    img: string,
}