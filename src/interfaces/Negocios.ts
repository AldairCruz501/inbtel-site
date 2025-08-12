export interface NegociosData {
    plansNegNorm: PlanNegocioNormal[];
    plansNegEntr: PlanNegocioEntretenimiento[];
}

export interface PlanNegocioNormal {
    id: number,
    nombre: string,
    subnombre? : string,
    mbps: number,
    precio: string,
    pago: string,
    sub1: string,
    sub2?: string,
    wifi?:string,
    repwifi?: string,
    folioIFT?: string,
    simetrico?: string,
    repetidor?: string,
    triple: boolean
}

export interface PlanNegocioEntretenimiento {
    id: number,
    nombre: string,
    subnombre? : string,
    mbps: number,
    precio: string,
    pago: string,
    sub1: string,
    sub2?: string,
    wifi?:string,
    repwifi?: string,
    folioIFT?: string,
    simetrico?: string,
    repetidor?: string,
    triple: boolean
}
