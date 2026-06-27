window.MODULE_TITLE = "Proyecto Final: Implanta el SGS";
window.SLIDES = [
  { type: 'portada', eyebrow: 'Módulo 12 de 12 — Evaluación Final', title: 'Proyecto Final: Implanta el SGS',
    intro: 'Has completado los 11 módulos del curso. Ahora demuestra que sabes aplicar todo lo aprendido. Elige una empresa real y diseña su Sistema de Gestión de Seguridad y Salud. Tu proyecto será evaluado automáticamente en 6 secciones.',
    meta: ['⏱ 4-6 horas', '📊 Puntuación automática', '🏆 Certificado al superar 70 puntos'] },
  { type: 'callout', variant: 'info', label: 'Instrucciones del proyecto',
    html: '<p>Selecciona una de las 6 empresas ficticias. Lee su descripción y completa las 6 secciones del proyecto: diagnóstico, evaluación de riesgos, planificación, controles, investigación de incidentes y certificación. Cada sección tiene criterios de evaluación automáticos basados en palabras clave. El proyecto mínimo para obtener el certificado es 70/100 puntos.</p>' },
  { type: 'empresas' },
  { type: 'proyecto', num: 1, title: 'Diagnóstico inicial y alcance del SGS', pts: 20, preguntas: [
    { id: 'r1a', label: '1a. Describe los 3 peligros más críticos de esta empresa y su causa raíz probable (relaciona con los accidentes/absentismo descritos):', placeholder: 'Ej: Peligro 1 — Atrapamiento en torno CNC. Causa raíz probable: resguardos sin mantenimiento y sin sistema LOTO...' },
    { id: 'r1b', label: '1b. Define el alcance del SGS ISO 45001 (qué actividades, procesos y ubicaciones cubre):', placeholder: 'El alcance del SGS cubre todas las actividades de...' },
    { id: 'r1c', label: '1c. Identifica las principales partes interesadas en SST y qué esperan del sistema:', placeholder: '1. Trabajadores: esperan... 2. ITSS: exige... 3. Clientes/contratos: requieren...' }
  ]},
  { type: 'proyecto', num: 2, title: 'Evaluación de riesgos y jerarquía de controles', pts: 20, preguntas: [
    { id: 'r2a', label: '2a. Para el peligro más crítico identificado en 1a, realiza la evaluación completa (método, riesgo inicial, controles propuestos por jerarquía, riesgo residual):', placeholder: 'Peligro: ... | Método: binario/Fine | P inicial: X × C = Y (ALTO/MUY ALTO) | Controles: 1) Eliminación/sustitución... 2) Ingeniería... 3) Administrativos... 4) EPI... | Riesgo residual: Z (BAJO/MEDIO)' },
    { id: 'r2b', label: '2b. ¿Qué peligros NO rutinarios o especiales debes incluir en la evaluación que habitualmente se olvidan?', placeholder: '1. Peligros en mantenimiento (LOTO)... 2. Peligros psicosociales... 3. Trabajadores especialmente sensibles... 4. Contratistas...' }
  ]},
  { type: 'proyecto', num: 3, title: 'Objetivos SST y plan de acción', pts: 15, preguntas: [
    { id: 'r3a', label: '3a. Formula 2 objetivos SST SMART para esta empresa (con indicador, línea base, meta, responsable y plazo):', placeholder: 'Objetivo 1: Reducir el IF de 14,2 a 7,0 antes de diciembre 2026. Indicador: IF mensual. Responsable: Director Operaciones. Acciones: 1)... 2)...\n\nObjetivo 2:...' },
    { id: 'r3b', label: '3b. ¿Qué argumento económico usarías ante la dirección para justificar la inversión preventiva? (usa el concepto de iceberg del accidente y coste real):', placeholder: 'El coste real de un accidente con baja en esta empresa incluye costes directos (cubiertos por mutua) más costes indirectos ocultos: sustituto, investigación, productividad perdida... El ROI de la inversión preventiva...' }
  ]},
  { type: 'proyecto', num: 4, title: 'Controles operacionales y gestión de contratistas', pts: 15, preguntas: [
    { id: 'r4a', label: '4a. Diseña el control operacional más importante para el peligro crítico de tu empresa (procedimiento, permiso de trabajo o criterio operativo):', placeholder: 'Control: Permiso de trabajo en caliente para soldadura. Quién lo emite: Jefe de taller. Checklist previo: 1) Medición gases... 2) Extintores... Criterio de no inicio: si concentración >10% LEL...' },
    { id: 'r4b', label: '4b. Tu empresa tiene contratistas habituales. Describe el proceso mínimo de gestión SST de contratistas que implantarías:', placeholder: '1. Evaluación previa: solicitar evaluación de riesgos específica, IF, seguro RC... 2. Cláusulas en contrato... 3. Acogida SST antes de entrar... 4. Coordinación durante trabajos (RD 171/2004)...' }
  ]},
  { type: 'proyecto', num: 5, title: 'Investigación de incidentes y mejora continua', pts: 15, preguntas: [
    { id: 'r5a', label: '5a. En tu empresa ocurre un accidente con baja. Describe los 5 Porqués aplicados a un incidente típico de ese sector y cuál sería la causa raíz real:', placeholder: 'Incidente: [describe un accidente típico del sector]\n¿Por qué 1?...\n¿Por qué 2?...\n¿Por qué 3?...\n¿Por qué 4?...\n¿Por qué 5? / Causa raíz: ...\n\nAcción correctiva: ...' },
    { id: 'r5b', label: '5b. ¿Cuál es el plazo legal para notificar el accidente al sistema Delt@? ¿Qué pasaría si no lo notificas?', placeholder: 'Plazo: 5 días hábiles... Si no se notifica: infracción grave LISOS, multa de...' }
  ]},
  { type: 'proyecto', num: 6, title: 'Hoja de ruta de certificación', pts: 15, preguntas: [
    { id: 'r6a', label: '6a. El director te pregunta cuánto tiempo tardará la certificación y cuánto costará. ¿Qué le dices y por qué? (incluye las fases del proceso):', placeholder: 'Plazo estimado: 8-12 meses, que incluye: 1) Diagnóstico (3 semanas)... 2) Implantación (4-5 meses)... 3) Auditoría interna (1 mes)... 4) Certificación (2-3 meses)... Coste: consultoría aprox. X€ + organismo certificador Y€...' },
    { id: 'r6b', label: '6b. ¿Cómo prepararías al director para su entrevista con el auditor externo? ¿Qué debe saber y qué NO debe hacer?', placeholder: 'Debe saber: los objetivos SST del año, el IF actual, los últimos accidentes y qué hizo la dirección al respecto... NO debe: derivar las preguntas al técnico de PRL, decir que todo va bien sin datos...' }
  ]},
  { type: 'evaluar' },
  { type: 'certificado' }
];
