export interface NegociosData {
    plansNegNorm: PlanNegocioNormal[];
    plansNegEntr: PlanNegocioEntretenimiento[];
}

export interface PlanNegocioNormal {
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
