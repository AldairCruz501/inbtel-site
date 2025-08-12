export interface HomeData {
    plansInt: PlanInternet[];
    plansTV: PlanTV[];
}

export interface PlanInternet {
    id: number,
    nombre: string,
    mbps: number,
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