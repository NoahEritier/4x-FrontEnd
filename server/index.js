const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Datos en memoria (simulando base de datos)
let faqs = [
  {
    id: 1,
    question: "¿Qué es esta plataforma?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "General",
    keywords: "plataforma, ayuda, información",
    usersRole: "Usuario",
    frequently: 10,
    updateDate: new Date().toISOString()
  },
  {
    id: 2,
    question: "¿Cómo puedo contactar con soporte?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Puedes contactarnos a través del formulario de contacto disponible en nuestra página web. Nuestro equipo de soporte está disponible de lunes a viernes de 9:00 a 18:00 horas.",
    category: "Soporte",
    keywords: "contacto, soporte, ayuda, atención",
    usersRole: "Usuario",
    frequently: 8,
    updateDate: new Date().toISOString()
  },
  {
    id: 3,
    question: "¿Cuáles son los planes disponibles?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Tenemos diferentes planes disponibles que se adaptan a las necesidades de cada organización. Consulta la sección de planes para más información detallada.",
    category: "Planes",
    keywords: "planes, precios, tarifas, suscripción",
    usersRole: "Usuario",
    frequently: 5,
    updateDate: new Date().toISOString()
  },
  {
    id: 4,
    question: "¿Cómo puedo registrarme en la plataforma?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Para registrarte, simplemente haz clic en el botón de registro en la página principal y completa el formulario con tus datos. Recibirás un correo de confirmación para activar tu cuenta.",
    category: "Registro",
    keywords: "registro, cuenta, inicio de sesión, crear cuenta",
    usersRole: "Usuario",
    frequently: 12,
    updateDate: new Date().toISOString()
  },
  {
    id: 5,
    question: "¿Qué métodos de pago aceptan?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aceptamos diversos métodos de pago incluyendo tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias y pagos mediante plataformas digitales. Todos los pagos son procesados de forma segura mediante encriptación SSL.",
    category: "Pagos",
    keywords: "pago, tarjeta, transferencia, facturación",
    usersRole: "Usuario",
    frequently: 15,
    updateDate: new Date().toISOString()
  },
  {
    id: 6,
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sí, puedes cancelar tu suscripción en cualquier momento desde la sección de configuración de tu cuenta. La cancelación será efectiva al final del período de facturación actual y no se aplicarán cargos adicionales.",
    category: "Suscripción",
    keywords: "cancelar, suscripción, baja, desactivar",
    usersRole: "Usuario",
    frequently: 9,
    updateDate: new Date().toISOString()
  },
  {
    id: 7,
    question: "¿Cómo puedo recuperar mi contraseña?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si olvidaste tu contraseña, puedes recuperarla haciendo clic en el enlace '¿Olvidaste tu contraseña?' en la página de inicio de sesión. Ingresa tu correo electrónico y recibirás un enlace para restablecer tu contraseña.",
    category: "Seguridad",
    keywords: "contraseña, recuperar, olvidé, seguridad",
    usersRole: "Usuario",
    frequently: 11,
    updateDate: new Date().toISOString()
  },
  {
    id: 8,
    question: "¿La plataforma está disponible en dispositivos móviles?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sí, nuestra plataforma es completamente responsive y está optimizada para funcionar en dispositivos móviles, tablets y computadoras de escritorio. También contamos con aplicaciones móviles nativas para iOS y Android.",
    category: "Tecnología",
    keywords: "móvil, app, dispositivos, responsive",
    usersRole: "Usuario",
    frequently: 7,
    updateDate: new Date().toISOString()
  },
  {
    id: 9,
    question: "¿Cómo puedo agregar nuevos miembros a mi organización?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Para agregar nuevos miembros, ve a la sección de administración de tu cuenta, selecciona 'Miembros' y haz clic en 'Agregar nuevo miembro'. Completa el formulario con la información del nuevo miembro y se le enviará una invitación por correo electrónico.",
    category: "Administración",
    keywords: "miembros, agregar, invitación, administración",
    usersRole: "Administrador",
    frequently: 6,
    updateDate: new Date().toISOString()
  },
  {
    id: 10,
    question: "¿Qué nivel de seguridad tiene la plataforma?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuestra plataforma utiliza encriptación de extremo a extremo, autenticación de dos factores y cumple con los estándares internacionales de seguridad de datos. Realizamos auditorías de seguridad regulares y mantenemos copias de seguridad diarias de toda la información.",
    category: "Seguridad",
    keywords: "seguridad, privacidad, encriptación, protección de datos",
    usersRole: "Usuario",
    frequently: 13,
    updateDate: new Date().toISOString()
  },
  {
    id: 11,
    question: "¿Puedo exportar mis datos?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sí, puedes exportar todos tus datos en cualquier momento desde la sección de configuración de tu cuenta. Los datos se exportan en formato CSV o JSON según tu preferencia.",
    category: "Datos",
    keywords: "exportar, datos, descargar, backup",
    usersRole: "Usuario",
    frequently: 4,
    updateDate: new Date().toISOString()
  },
  {
    id: 12,
    question: "¿Hay límite en la cantidad de miembros por organización?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. El límite de miembros depende del plan que tengas contratado. Los planes básicos incluyen hasta 50 miembros, los planes profesionales hasta 200 miembros, y los planes empresariales tienen capacidad ilimitada. Puedes actualizar tu plan en cualquier momento.",
    category: "Planes",
    keywords: "límite, miembros, capacidad, plan",
    usersRole: "Usuario",
    frequently: 8,
    updateDate: new Date().toISOString()
  },
  {
    id: 13,
    question: "¿Cómo funciona el sistema de notificaciones?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. El sistema de notificaciones te permite recibir alertas por correo electrónico o dentro de la plataforma sobre eventos importantes, actualizaciones, recordatorios de pagos y cambios en tu cuenta. Puedes personalizar qué notificaciones recibir desde la configuración.",
    category: "General",
    keywords: "notificaciones, alertas, correo, recordatorios",
    usersRole: "Usuario",
    frequently: 5,
    updateDate: new Date().toISOString()
  },
  {
    id: 14,
    question: "¿Ofrecen capacitación para nuevos usuarios?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sí, ofrecemos sesiones de capacitación gratuitas para nuevos usuarios, tutoriales en video, documentación completa y un equipo de soporte dedicado. También organizamos webinars mensuales sobre nuevas funcionalidades y mejores prácticas.",
    category: "Soporte",
    keywords: "capacitación, tutoriales, ayuda, formación",
    usersRole: "Usuario",
    frequently: 6,
    updateDate: new Date().toISOString()
  },
  {
    id: 15,
    question: "¿Qué sucede si tengo problemas técnicos?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Si experimentas problemas técnicos, puedes contactar a nuestro equipo de soporte técnico a través del chat en vivo, correo electrónico o teléfono. Nuestro tiempo promedio de respuesta es de menos de 2 horas durante horario laboral.",
    category: "Soporte",
    keywords: "problemas, técnico, error, soporte técnico",
    usersRole: "Usuario",
    frequently: 10,
    updateDate: new Date().toISOString()
  }
];

let nextFaqId = 16;

// ========== API Routes ==========

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend funcionando correctamente' });
});

// ========== FAQ Endpoints ==========

// GET /api/FrequentlyQuestions - Obtener todas las FAQs
app.get('/api/FrequentlyQuestions', (req, res) => {
  res.json(faqs);
});

// GET /api/FrequentlyQuestions/Category/:category - Obtener FAQs por categoría
app.get('/api/FrequentlyQuestions/Category/:category', (req, res) => {
  const category = req.params.category;
  const filteredFaqs = faqs.filter(faq => 
    faq.category.toLowerCase() === category.toLowerCase()
  );
  res.json(filteredFaqs);
});

// GET /api/FrequentlyQuestions/:id - Obtener una FAQ por ID
app.get('/api/FrequentlyQuestions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const faq = faqs.find(f => f.id === id);
  
  if (!faq) {
    return res.status(404).json({ message: 'FAQ no encontrada' });
  }
  
  res.json(faq);
});

// POST /api/FrequentlyQuestions - Crear una nueva FAQ
app.post('/api/FrequentlyQuestions', (req, res) => {
  const newFaq = {
    id: nextFaqId++,
    question: req.body.question || '',
    answer: req.body.answer || '',
    category: req.body.category || 'General',
    keywords: req.body.keywords || '',
    usersRole: req.body.usersRole || 'Usuario',
    frequently: req.body.frequently || 0,
    updateDate: new Date().toISOString()
  };
  
  faqs.push(newFaq);
  res.status(201).json(newFaq);
});

// PUT /api/FrequentlyQuestions/:id - Actualizar una FAQ
app.put('/api/FrequentlyQuestions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = faqs.findIndex(f => f.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'FAQ no encontrada' });
  }
  
  faqs[index] = {
    ...faqs[index],
    ...req.body,
    id: id, // Asegurar que el ID no cambie
    updateDate: new Date().toISOString()
  };
  
  res.json(faqs[index]);
});

// DELETE /api/FrequentlyQuestions/:id - Eliminar una FAQ
app.delete('/api/FrequentlyQuestions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = faqs.findIndex(f => f.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'FAQ no encontrada' });
  }
  
  faqs.splice(index, 1);
  res.status(204).send();
});

// ========== Email/Contact Endpoints ==========

// POST /api/Email/SendEmails - Enviar email de contacto
app.post('/api/Email/SendEmails', (req, res) => {
  const { PersonFullName, EmailName, Telephone, Subject, Body, Entity, Location, Members } = req.body;
  
  // Validación básica
  if (!PersonFullName || !EmailName || !Telephone) {
    return res.status(400).json({
      success: false,
      message: 'Faltan campos requeridos: nombre, email o teléfono'
    });
  }
  
  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(EmailName)) {
    return res.status(400).json({
      success: false,
      message: 'El formato del email no es válido'
    });
  }
  
  // Simular envío de email (en producción aquí iría la lógica real de envío)
  console.log('📧 Nuevo mensaje de contacto recibido:');
  console.log('   Nombre:', PersonFullName);
  console.log('   Email:', EmailName);
  console.log('   Teléfono:', Telephone);
  console.log('   Entidad:', Entity);
  console.log('   Ubicación:', Location);
  console.log('   Miembros:', Members);
  console.log('   Asunto:', Subject);
  console.log('   Mensaje:', Body);
  
  // Simular éxito
  res.json({
    success: true,
    message: '¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.',
    data: {
      id: Date.now(),
      timestamp: new Date().toISOString()
    }
  });
});

// Servir archivos estáticos de Angular en producción
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../ClientApp/dist/clientapp/browser');
  app.use(express.static(distPath));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend ejecutándose en http://localhost:${PORT}`);
  console.log(`📡 API disponible en http://localhost:${PORT}/api`);
  console.log(`💡 Health check: http://localhost:${PORT}/api/health`);
});

