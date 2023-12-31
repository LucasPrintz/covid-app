import { AccessEnum } from "./access-enum";
import { VaccinationCenter } from "./vaccination-center";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    mail: string;
    password: string;
    vaccinationCenter?: VaccinationCenter;
    access: AccessEnum;
}