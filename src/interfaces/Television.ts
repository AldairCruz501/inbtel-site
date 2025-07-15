export interface TelevisionData {
    planStan: PlanStandard[];
    planElite: PlanElite[];
    planPrem: PlanPremium[];
}

export interface PlanStandard {
    logo: string,
}

export interface PlanElite {
    logo: string,
}

export interface PlanPremium {
    logo: string,
}