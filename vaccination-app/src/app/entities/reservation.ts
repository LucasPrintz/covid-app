import { Patient } from "./patient";
import { VaccinationCenter } from "./vaccination-center";

export interface Reservation {
    id: number;
    date: string;
    patient: Patient;
    vaccinationCenter: VaccinationCenter;
    isVaccinated: boolean;
}
