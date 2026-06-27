/* Extensión del motor para el Módulo 12 — Proyecto Final (wizard de slides). */
(function () {
  var Deck = window.Deck;

  var EMPRESAS = {
    metalmecanica: { nombre: 'Isotecnia S.L.', desc: 'Taller de mecanizado y soldadura · 45 trabajadores · IF = 14,2', keys: { s1: ['peligro', 'atrapamiento', 'soldadura', 'mecanizado', 'riesgo', 'causa', 'partes interesadas', 'alcance'], s2: ['jerarquía', 'eliminación', 'ingeniería', 'resguardo', 'LOTO', 'riesgo inicial', 'riesgo residual', 'probabilidad'], s3: ['objetivo', 'indicador', 'meta', 'responsable', 'plazo', 'IF', 'índice de frecuencia', 'iceberg', 'coste'], s4: ['permiso', 'control', 'contratista', 'evaluación previa', 'acogida', 'RD 171'], s5: ['porqué', 'causa raíz', '5 porqués', 'Delt@', '5 días', 'baja', 'notificación'], s6: ['meses', 'diagnóstico', 'implantación', 'auditoría interna', 'certificación', 'director', 'entrevista'] } },
    construccion: { nombre: 'Obras y Reformas Pérez S.L.', desc: 'Rehabilitación de edificios · 28 trabajadores + 4 subcontratas · 2 accidentes graves', keys: { s1: ['caída', 'altura', 'sílice', 'andamio', 'accidente grave', 'partes interesadas', 'alcance', 'subcontrata'], s2: ['jerarquía', 'barandilla', 'arnés', 'absorbedor', 'línea de vida', 'riesgo inicial', 'riesgo residual', 'FFP3'], s3: ['objetivo', 'indicador', 'meta', 'responsable', 'plazo', 'iceberg', 'coste', 'director'], s4: ['permiso', 'altura', 'contratista', 'RD 171', 'evaluación previa', 'acogida', 'coordinación'], s5: ['porqué', 'causa raíz', 'Delt@', '5 días', 'baja', 'Plan de Seguridad'], s6: ['meses', 'diagnóstico', 'implantación', 'auditoría', 'certificación', 'ENAC'] } },
    hospital: { nombre: 'Clínica San Rafael', desc: 'Clínica privada · 120 trabajadores · Absentismo 11% · Sin evaluación psicosocial', keys: { s1: ['biológico', 'cortopunzante', 'aguja', 'psicosocial', 'movilización', 'absentismo', 'partes interesadas', 'alcance'], s2: ['jerarquía', 'VHB', 'hepatitis', 'seguridad', 'sharps', 'MAPO', 'riesgo inicial', 'riesgo residual'], s3: ['objetivo', 'indicador', 'meta', 'responsable', 'iceberg', 'absentismo', 'coste', 'director'], s4: ['permiso', 'contratista', 'acogida', 'bioseguridad', 'protocolo', 'RD 171'], s5: ['porqué', 'causa raíz', 'Delt@', '5 días', 'baja', 'CEPROSS'], s6: ['meses', 'diagnóstico', 'implantación', 'auditoría', 'certificación', 'director'] } },
    logistica: { nombre: 'TransLog Norte S.A.', desc: 'Centro logístico · 95 trabajadores · 30 carretillas · 2 atropellos en el último año', keys: { s1: ['atropello', 'carretilla', 'peatón', 'conductor', 'accidente', 'partes interesadas', 'alcance', 'tráfico'], s2: ['jerarquía', 'separación', 'barreras', 'cámara', 'espejo', 'riesgo inicial', 'riesgo residual', 'ingeniería'], s3: ['objetivo', 'indicador', 'meta', 'responsable', 'IF', 'atropello', 'iceberg', 'coste'], s4: ['carretilla', 'permiso', 'contratista', 'evaluación previa', 'acogida', 'RD 171', 'CAE'], s5: ['porqué', 'causa raíz', 'Delt@', '5 días', 'baja', 'tacógrafo'], s6: ['meses', 'diagnóstico', 'implantación', 'auditoría', 'certificación', 'director'] } },
    hotel: { nombre: 'Hotel Costa Brava ****', desc: 'Hotel 4 estrellas · 85 fijos + 40 eventuales · Alta rotación de personal', keys: { s1: ['caída', 'suelo', 'psicosocial', 'quemadura', 'rotación', 'partes interesadas', 'alcance', 'eventual'], s2: ['jerarquía', 'calzado', 'SRC', 'antideslizante', 'riesgo inicial', 'riesgo residual', 'FPSICO'], s3: ['objetivo', 'indicador', 'meta', 'responsable', 'absentismo', 'iceberg', 'coste', 'director'], s4: ['permiso', 'contratista', 'acogida', 'RD 171', 'protocolo', 'calzado'], s5: ['porqué', 'causa raíz', 'Delt@', '5 días', 'baja', 'incidente'], s6: ['meses', 'diagnóstico', 'implantación', 'auditoría', 'certificación', 'ENAC'] } },
    consultora: { nombre: 'DataTech Solutions S.L.', desc: 'Software y consultoría IT · 60 trabajadores · 40% teletrabajo · Absentismo ansiedad 8,5%', keys: { s1: ['teletrabajo', 'ergonómico', 'psicosocial', 'pantalla', 'PVD', 'burnout', 'partes interesadas', 'alcance'], s2: ['jerarquía', 'FPSICO', 'ergonomía', 'silla', 'monitor', 'riesgo inicial', 'riesgo residual', 'evaluación'], s3: ['objetivo', 'indicador', 'meta', 'responsable', 'absentismo', 'estrés', 'iceberg', 'coste'], s4: ['teletrabajo', 'desconexión', 'contratista', 'evaluación previa', 'acogida', 'RD 171'], s5: ['porqué', 'causa raíz', 'Delt@', '5 días', 'baja', 'psicosocial'], s6: ['meses', 'diagnóstico', 'implantación', 'auditoría', 'certificación', 'director'] } }
  };

  var SECTOR_TAGS = { metalmecanica: 'Industria', construccion: 'Construcción', hospital: 'Sanidad', logistica: 'Logística', hotel: 'Hostelería', consultora: 'Servicios' };

  function ensureProyecto() {
    if (!Deck.state.proyecto) Deck.state.proyecto = { empresa: null, respuestas: {}, total: undefined, secciones: null };
    return Deck.state.proyecto;
  }

  Deck.onBoot = function () { ensureProyecto(); };

  Deck.canAdvance_empresas = function () { return !!ensureProyecto().empresa; };
  Deck.canAdvance_evaluar = function () { return ensureProyecto().total !== undefined; };

  Deck.customGate = function () {
    var p = ensureProyecto();
    var total = p.total || 0;
    return { passed: total >= 70, score: total };
  };

  Deck.render_empresas = function () {
    var self = this;
    var p = ensureProyecto();
    var wrap = document.createElement('div');
    wrap.className = 'slide-inner';
    var grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit,minmax(230px,1fr))';
    grid.style.gap = '16px';
    grid.innerHTML = '<h2 style="grid-column:1/-1;text-align:center;">Elige la empresa de tu proyecto</h2>';
    Object.keys(EMPRESAS).forEach(function (id) {
      var e = EMPRESAS[id];
      var btn = document.createElement('button');
      btn.style.cssText = 'text-align:left;background:#fff;border:2px solid ' + (p.empresa === id ? 'var(--azul-mid)' : 'var(--gris-2)') + ';border-radius:12px;padding:18px;cursor:pointer;';
      btn.innerHTML = '<div style="font-size:11px;font-weight:700;color:var(--acento);text-transform:uppercase;margin-bottom:8px;">' + SECTOR_TAGS[id] + '</div>' +
        '<h4 style="font-size:15px;margin-bottom:6px;">' + e.nombre + '</h4><p style="font-size:13px;color:#4A5568;margin:0;">' + e.desc + '</p>';
      btn.addEventListener('click', function () {
        p.empresa = id;
        self.persist();
        self.renderSlide();
      });
      grid.appendChild(btn);
    });
    wrap.appendChild(grid);
    return wrap;
  };

  Deck.render_proyecto = function (slide) {
    var self = this;
    var p = ensureProyecto();
    var wrap = document.createElement('div');
    wrap.className = 'slide-inner';
    var html = '<div style="display:flex;align-items:center;gap:14px;margin-bottom:18px;">' +
      '<div style="width:34px;height:34px;border-radius:50%;background:var(--azul);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0;">' + slide.num + '</div>' +
      '<h2 style="margin:0;">' + slide.title + '</h2>' +
      '<span style="margin-left:auto;background:var(--acento-light);color:var(--acento);font-size:12px;font-weight:700;padding:4px 10px;border-radius:6px;">' + slide.pts + ' pts</span></div>';
    wrap.innerHTML = html;
    slide.preguntas.forEach(function (preg) {
      var field = document.createElement('div');
      field.style.marginBottom = '18px';
      var label = document.createElement('label');
      label.style.cssText = 'display:block;font-size:14px;font-weight:600;margin-bottom:8px;color:var(--texto);';
      label.textContent = preg.label;
      var ta = document.createElement('textarea');
      ta.placeholder = preg.placeholder;
      ta.value = p.respuestas[preg.id] || '';
      ta.style.cssText = 'width:100%;min-height:110px;border:2px solid var(--gris-2);border-radius:8px;padding:12px;font-size:14px;font-family:inherit;resize:vertical;';
      ta.addEventListener('input', function () { p.respuestas[preg.id] = ta.value; self.persist(); });
      field.appendChild(label);
      field.appendChild(ta);
      wrap.appendChild(field);
    });
    return wrap;
  };

  function puntuarSeccion(textos, keys) {
    var texto = textos.join(' ').toLowerCase();
    var encontradas = keys.filter(function (k) { return texto.indexOf(k.toLowerCase()) !== -1; });
    return Math.min(100, Math.round((encontradas.length / keys.length) * 100));
  }

  Deck.render_evaluar = function () {
    var self = this;
    var p = ensureProyecto();
    var wrap = document.createElement('div');
    wrap.className = 'slide-inner';
    wrap.innerHTML = '<h2 style="text-align:center;">Evalúa tu proyecto</h2><p style="text-align:center;">Cuando hayas completado las 6 secciones, evalúa tu proyecto. La puntuación se calcula automáticamente según los conceptos clave presentes en tus respuestas.</p>' +
      '<div style="text-align:center;margin:20px 0;"><button class="btn-nav" id="btnEvaluar">📊 Evaluar mi proyecto</button></div>' +
      '<div id="resultadoWrap"></div>';
    wrap.querySelector('#btnEvaluar').addEventListener('click', function () {
      if (!p.empresa) { alert('Selecciona una empresa primero.'); return; }
      var e = EMPRESAS[p.empresa];
      var pesos = { s1: 20, s2: 20, s3: 15, s4: 15, s5: 15, s6: 15 };
      var s1 = puntuarSeccion([p.respuestas.r1a, p.respuestas.r1b, p.respuestas.r1c], e.keys.s1);
      var s2 = puntuarSeccion([p.respuestas.r2a, p.respuestas.r2b], e.keys.s2);
      var s3 = puntuarSeccion([p.respuestas.r3a, p.respuestas.r3b], e.keys.s3);
      var s4 = puntuarSeccion([p.respuestas.r4a, p.respuestas.r4b], e.keys.s4);
      var s5 = puntuarSeccion([p.respuestas.r5a, p.respuestas.r5b], e.keys.s5);
      var s6 = puntuarSeccion([p.respuestas.r6a, p.respuestas.r6b], e.keys.s6);
      var total = Math.round((s1 / 100) * pesos.s1 + (s2 / 100) * pesos.s2 + (s3 / 100) * pesos.s3 + (s4 / 100) * pesos.s4 + (s5 / 100) * pesos.s5 + (s6 / 100) * pesos.s6);
      var secciones = [
        { nombre: 'Diagnóstico y alcance', pct: s1, peso: pesos.s1 },
        { nombre: 'Evaluación de riesgos', pct: s2, peso: pesos.s2 },
        { nombre: 'Objetivos SST', pct: s3, peso: pesos.s3 },
        { nombre: 'Controles y contratistas', pct: s4, peso: pesos.s4 },
        { nombre: 'Investigación incidentes', pct: s5, peso: pesos.s5 },
        { nombre: 'Hoja de ruta', pct: s6, peso: pesos.s6 }
      ];
      p.total = total;
      p.secciones = secciones;
      self.persist();

      var passed = total >= 70;
      var label = total >= 85 ? '🏆 Excelente — Nivel Consultor Senior' : passed ? '✅ Aprobado — Nivel Consultor' : total >= 50 ? '📖 En progreso — Repasa los módulos' : '🔄 Necesitas más preparación';
      var color = passed ? 'var(--verde)' : total >= 50 ? 'var(--amarillo)' : 'var(--rojo)';
      var desglose = secciones.map(function (s) {
        var pts = Math.round((s.pct / 100) * s.peso);
        var c = s.pct >= 70 ? 'var(--verde)' : s.pct >= 50 ? 'var(--amarillo)' : 'var(--rojo)';
        return '<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--gris-2);"><span>' + s.nombre + '</span><strong style="color:' + c + '">' + pts + '/' + s.peso + '</strong></div>';
      }).join('');
      document.getElementById('resultadoWrap').innerHTML =
        '<div style="text-align:center;font-family:\'DM Serif Display\',serif;font-size:56px;color:' + color + ';">' + total + '</div>' +
        '<div style="text-align:center;margin-bottom:18px;color:var(--gris-3);">' + label + '</div>' + desglose +
        (passed ? '<p style="text-align:center;margin-top:18px;color:var(--verde);">Avanza a la última pantalla para ver tu certificado.</p>' : '<p style="text-align:center;margin-top:18px;color:var(--rojo);">Necesitas 70 puntos. Vuelve atrás, repasa tus respuestas y vuelve a evaluar.</p>');
      self.updateNavBar();
    });
    if (p.total !== undefined) wrap.querySelector('#btnEvaluar').click();
    return wrap;
  };

  Deck.render_certificado = function () {
    var self = this;
    var p = ensureProyecto();
    var wrap = document.createElement('div');
    wrap.className = 'slide-inner';
    if (!p.total || p.total < 70) {
      wrap.innerHTML = '<h2 style="text-align:center;">Aún no has superado el proyecto</h2><p style="text-align:center;">Necesitas al menos 70 puntos en la evaluación. Vuelve a las secciones del proyecto, completa o mejora tus respuestas y vuelve a evaluar.</p>';
      return wrap;
    }
    var empresa = EMPRESAS[p.empresa];
    var fecha = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    wrap.innerHTML =
      '<div style="background:#1A1F2E;border-radius:16px;padding:40px;color:#fff;text-align:center;">' +
      '<div style="font-size:12px;letter-spacing:2px;color:var(--acento);margin-bottom:18px;">ISOTECNIA</div>' +
      '<div style="font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:8px;">Certifica que</div>' +
      '<div style="font-family:\'DM Serif Display\',serif;font-size:28px;margin-bottom:18px;">' + (p.nombreAlumno ? esc_(p.nombreAlumno) : 'Consultor/a ISO 45001') + '</div>' +
      '<p style="font-size:14px;color:rgba(255,255,255,0.8);max-width:560px;margin:0 auto 18px;">ha completado satisfactoriamente el curso <strong style="color:#fff;">Consultor SST Certificado — ISO 45001:2018</strong>, con proyecto final aprobado en ' + empresa.nombre + ' (' + p.total + '/100 puntos).</p>' +
      '<div style="font-size:12.5px;color:rgba(255,255,255,0.5);">ISO 45001:2018 · 40 horas · Nivel consultor · ' + fecha + '</div>' +
      '</div>' +
      '<div style="max-width:360px;margin:24px auto 0;">' +
      '<label style="display:block;font-size:13px;font-weight:600;margin-bottom:6px;">Tu nombre completo (aparecerá en el certificado)</label>' +
      '<input type="text" id="inputNombre" placeholder="Nombre y apellidos" value="' + (p.nombreAlumno ? esc_(p.nombreAlumno) : '') + '" style="width:100%;padding:10px 12px;border:2px solid var(--gris-2);border-radius:8px;font-size:14px;font-family:inherit;">' +
      '</div>' +
      '<div style="text-align:center;margin-top:22px;"><button class="btn-nav" id="btnDescargarCert">⬇ Descargar certificado en PDF</button></div>';

    function esc_(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

    wrap.querySelector('#inputNombre').addEventListener('input', function (e) {
      p.nombreAlumno = e.target.value;
      self.persist();
      wrap.querySelector('div[style*="DM Serif Display"]').textContent = p.nombreAlumno || 'Consultor/a ISO 45001';
    });

    wrap.querySelector('#btnDescargarCert').addEventListener('click', function () {
      buildCertificatePDF({
        nombre: p.nombreAlumno || 'Consultor/a ISO 45001',
        empresa: empresa.nombre,
        puntuacion: p.total,
        fecha: fecha
      });
    });
    return wrap;
  };

  function buildCertificatePDF(data) {
    var jsPDFCtor = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    var doc = new jsPDFCtor({ unit: 'pt', format: 'a4', orientation: 'landscape' });
    var w = doc.internal.pageSize.getWidth();
    var h = doc.internal.pageSize.getHeight();
    var azul = [26, 58, 92], acento = [232, 88, 32], dorado = [196, 154, 60], gris = [110, 120, 135];

    // Fondo
    doc.setFillColor(252, 252, 250);
    doc.rect(0, 0, w, h, 'F');

    // Marco doble
    doc.setDrawColor(azul[0], azul[1], azul[2]);
    doc.setLineWidth(2.2);
    doc.rect(28, 28, w - 56, h - 56);
    doc.setDrawColor(dorado[0], dorado[1], dorado[2]);
    doc.setLineWidth(0.8);
    doc.rect(40, 40, w - 80, h - 80);

    // Esquinas decorativas
    [[40, 40], [w - 40, 40], [40, h - 40], [w - 40, h - 40]].forEach(function (c) {
      doc.setFillColor(dorado[0], dorado[1], dorado[2]);
      doc.circle(c[0], c[1], 3, 'F');
    });

    var cx = w / 2;

    doc.setTextColor(acento[0], acento[1], acento[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('ISOTECNIA', cx, 88, { align: 'center' });

    doc.setTextColor(azul[0], azul[1], azul[2]);
    doc.setFont('times', 'bolditalic');
    doc.setFontSize(30);
    doc.text('Certificado de Finalización', cx, 124, { align: 'center' });

    doc.setDrawColor(dorado[0], dorado[1], dorado[2]);
    doc.setLineWidth(1);
    doc.line(cx - 90, 138, cx + 90, 138);

    doc.setTextColor(gris[0], gris[1], gris[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12.5);
    doc.text('Se otorga el presente certificado a', cx, 172, { align: 'center' });

    doc.setTextColor(20, 24, 32);
    doc.setFont('times', 'bold');
    doc.setFontSize(30);
    doc.text(data.nombre, cx, 212, { align: 'center' });
    doc.setDrawColor(azul[0], azul[1], azul[2]);
    doc.setLineWidth(0.7);
    doc.line(cx - 160, 222, cx + 160, 222);

    doc.setTextColor(50, 56, 66);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12.5);
    var body = 'por haber completado satisfactoriamente el curso "Consultor SST Certificado — ISO 45001:2018",\ndemostrando competencia en la implantación, auditoría y mantenimiento de Sistemas de Gestión\nde Seguridad y Salud en el Trabajo conforme a los requisitos de la norma ISO 45001:2018.';
    var lines = body.split('\n');
    var by = 250;
    lines.forEach(function (l) { doc.text(l, cx, by, { align: 'center' }); by += 18; });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11.5);
    doc.setTextColor(azul[0], azul[1], azul[2]);
    doc.text('Proyecto final aprobado · ' + data.empresa + ' · Puntuación: ' + data.puntuacion + '/100', cx, by + 14, { align: 'center' });

    // Firmas (mantenidas con margen amplio respecto al marco inferior, que termina en h-40)
    var sigY = h - 118;
    doc.setDrawColor(120, 128, 140);
    doc.setLineWidth(0.6);
    doc.line(110, sigY, 290, sigY);
    doc.line(w - 290, sigY, w - 110, sigY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(70, 78, 90);
    doc.text('Director Académico', 200, sigY + 16, { align: 'center' });
    doc.text(data.fecha, w - 200, sigY + 16, { align: 'center' });

    // Sello
    doc.setDrawColor(dorado[0], dorado[1], dorado[2]);
    doc.setLineWidth(1.4);
    doc.circle(cx, sigY - 10, 26);
    doc.setFontSize(8);
    doc.setTextColor(dorado[0], dorado[1], dorado[2]);
    doc.setFont('helvetica', 'bold');
    doc.text('ISO 45001', cx, sigY - 12, { align: 'center' });
    doc.text('2018', cx, sigY - 2, { align: 'center' });

    doc.setFontSize(8.5);
    doc.setTextColor(150, 158, 170);
    doc.setFont('helvetica', 'normal');
    doc.text('ISO 45001:2018 · 40 horas · Nivel consultor', cx, h - 58, { align: 'center' });

    doc.save('certificado-iso45001-' + data.nombre.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '.pdf');
  }
})();
