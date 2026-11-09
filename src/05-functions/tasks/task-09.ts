/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function getTotalPatients(): number {
    return patients.length;
}

function getAdmittedCount(): number {
    let count = 0;

    for (const patient of patients) {
        if (patient.admitted) {
            count++;
        }
    }

    return count;
}

function getDischargedCount(): number {
    let count = 0;

    for (const patient of patients) {
        if (!patient.admitted) {
            count++;
        }
    }

    return count;
}

function getDepartmentCount(department: string): number {
    let count = 0;

    for (const patient of patients) {
        if (patient.department === department) {
            count++;
        }
    }

    return count;
}

function getHighestBill(): number {
    let highest = patients[0].bill;

    for (const patient of patients) {
        if (patient.bill > highest) {
            highest = patient.bill;
        }
    }

    return highest;
}

function getLowestBill(): number {
    let lowest = patients[0].bill;

    for (const patient of patients) {
        if (patient.bill < lowest) {
            lowest = patient.bill;
        }
    }

    return lowest;
}

function getAverageBill(): number {
    let total = 0;

    for (const patient of patients) {
        total += patient.bill;
    }

    return total / patients.length;
}

function getTotalRevenue(): number {
    let total = 0;

    for (const patient of patients) {
        total += patient.bill;
    }

    return total;
}

function getAdmittedNames(): string[] {
    const names: string[] = [];

    for (const patient of patients) {
        if (patient.admitted) {
            names.push(patient.name);
        }
    }

    return names;
}

function formatRupiah(amount: number): string {
    return "Rp" + amount.toLocaleString("id-ID");
}

function printHospitalReport(): void {
    console.log("Total Patients:", getTotalPatients());
    console.log("Admitted Patients:", getAdmittedCount());
    console.log("Discharged Patients:", getDischargedCount());

    console.log("\n--- Patients by Department ---");
    console.log("Pediatrics:", getDepartmentCount("Pediatrics"));
    console.log("Cardiology:", getDepartmentCount("Cardiology"));
    console.log("Orthopedics:", getDepartmentCount("Orthopedics"));

    console.log("\n--- Hospital Bills ---");
    console.log("Highest Bill:", formatRupiah(getHighestBill()));
    console.log("Lowest Bill:", formatRupiah(getLowestBill()));
    console.log("Average Bill:", formatRupiah(getAverageBill()));
    console.log("Total Revenue:", formatRupiah(getTotalRevenue()));

    console.log("\n--- Admitted Patient Names ---");
    console.log(getAdmittedNames().join(", "));
}

printHospitalReport();
