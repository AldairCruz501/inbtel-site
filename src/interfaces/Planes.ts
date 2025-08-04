// interfaces/Planes.ts
export interface PlanesData {
    plansRes: PlanResidencial[];
    plansGamer: PlanGamer[];
}


export interface PlanResidencial {
  numeroInscripcion: number;
  nombreTarifa: string;
  fechaInscripcion: string;
}

export interface PlanGamer {
  numeroInscripcion: number;
  nombreTarifa: string;
  fechaInscripcion: string;
}