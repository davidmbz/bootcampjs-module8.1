import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1 - Lista de pacientes asignados a la especialidad de Pedriatría

// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultado: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    if (paciente.especialidad === "Pediatra") {
      resultado.push(paciente);
    }
  }
  return resultado;
};

console.log(
  "Pacientes asignados a Pedriatría",
  obtenPacientesAsignadosAPediatria(pacientes)
);

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultado: Pacientes[] = [];
  let i = 0;

  while (i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      resultado.push(pacientes[i]);
    }
    i++;
  }

  return resultado;
};

console.log(
  "Pacientes asignados a Pediatría menores de 10 años:",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

// Apartado 2 - Queremos activar el protocolo de urgencia si cualquiera de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;
  let i = 0;

  while (i < pacientes.length) {
    if (
      pacientes[i].frecuenciaCardiaca < 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProtocolo = true;
      break;
    }
    i++;
  }

  return activarProtocolo;
};

console.log("Activar protocolo:", activarProtocoloUrgencia(pacientes));

// Apartado 3 - El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const resultado: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    const nuevoPaciente: Pacientes = {
      ...paciente,
      especialidad:
        paciente.especialidad === "Pediatra"
          ? "Medico de familia"
          : paciente.especialidad,
    };

    resultado.push(nuevoPaciente);
  }

  return resultado;
};

console.log(
  "Reasignación pacientes a Médico de Familia:",
  reasignaPacientesAMedicoFamilia(pacientes)
);

// Apartado 4 - Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientes = false;
  let i = 0;

  while (i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra") {
      hayPacientes = true;
      break;
    }
    i++;
  }
  return hayPacientes;
};

console.log("Hay pacientes de Pedriatría:", HayPacientesDePediatria(pacientes));

//Apartado 5 - Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a Cardiología
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const resultado5: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    if (paciente.especialidad === "Medico de familia") {
      resultado5.medicoDeFamilia++;
    } else if (paciente.especialidad === "Pediatra") {
      resultado5.pediatria++;
    } else if (paciente.especialidad === "Cardiólogo") {
      resultado5.cardiologia++;
    }
  }

  return resultado5;
};

console.log(
  "Número de pacientes por especialidad:",
  cuentaPacientesPorEspecialidad(pacientes)
);
