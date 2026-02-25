import { absSystemRepair } from "./services/absSystemRepair";
import { acRepair } from "./services/acRepair";
import { alternatorRepairService } from "./services/alternatorRepair";
import { batteryreplacement } from "./services/battery-replacement";
import { brakePadRepair } from "./services/brakepadRepair";
import { carDetailingDubaiService } from "./services/carDetailingDubaiService";
import { carMechanicService } from "./services/carMechanicService";
import { carTransmissionRepairService } from "./services/carTransmissionRepairService";
import { emergencyCarRepairService } from "./services/emergancyCarRepair";
import { engineOilChangeService } from "./services/engineOilChangeService";
import { fuelPumpRepairService } from "./services/fuelPumpRepair";
import { gearOilChangeService } from "./services/gearOilChangeService";
import { jumpStartService } from "./services/jumpstartservice";
import { onsiteCarRepairDubaiService } from "./services/onsiteCarRepairDubaiService";
import { raditorRepair } from "./services/raditorRepair";
import { starterMotorService } from "./services/starterMotorRepair";

export const services = [
    batteryreplacement,
    jumpStartService,
    acRepair,
    raditorRepair,
    starterMotorService,
    alternatorRepairService,
    fuelPumpRepairService,
    brakePadRepair,
    absSystemRepair,
    emergencyCarRepairService,
    carMechanicService,
    onsiteCarRepairDubaiService,
    engineOilChangeService,
    gearOilChangeService,
    carTransmissionRepairService,
    carDetailingDubaiService
]