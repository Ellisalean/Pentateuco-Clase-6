
import { Module, Resource } from '../types';

export const RESOURCES: Resource[] = [
  {
    title: "Guía de las 5 Ofrendas",
    type: "PDF",
    meta: "Resumen Visual",
    link: "#",
    icon: "fa-file-pdf"
  },
  {
    title: "Mapa del Tabernáculo",
    type: "Imagen",
    meta: "Ubicación Altar",
    link: "#",
    icon: "fa-map"
  },
  {
    title: "Tabla Comparativa Pentateuco",
    type: "Documento",
    meta: "Repaso General",
    link: "#",
    icon: "fa-table"
  }
];

export const MODULES: Module[] = [
  {
    id: "module1",
    title: "Módulo 1: Introducción a Levítico",
    lessons: [
      {
        id: "lesson1",
        title: "1.1 Contexto Histórico y Propósito",
        subtitle: "Comprendiendo el corazón del Pentateuco",
        duration: "15 min",
        icon: "fa-book-bible",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/317f4879-3f0f-4a83-bb93-ed8fdff48f6b_rw_1920.png?h=67f21ac97740d69a712db3292e8d0a0b",
        blocks: [
          { type: 'heading', level: 2, text: 'Contexto Histórico y Propósito' },
          { type: 'paragraph', text: 'El libro de Levítico a menudo es malentendido, considerado árido o irrelevante. Sin embargo, su propósito es vital para comprender la relación de pacto entre Dios y su pueblo. Este libro es una guía de santidad, que muestra cómo un pueblo pecaminoso puede acercarse a un Dios santo.' },
          { type: 'heading', level: 3, text: 'Origen y Autoría' },
          { type: 'paragraph', text: 'El autor tradicional es Moisés. Fue escrito para Israel en el desierto, después de recibir la ley en el Sinaí. Mientras Éxodo narra la liberación, Levítico describe cómo deben vivir como pueblo redimido.' },
          { type: 'note', text: 'El nombre en hebreo es "Vayikra" (ויקרא), que significa "Y llamó". Nos recuerda que Dios toma la iniciativa de llamarnos a la santidad.' }
        ]
      }
    ]
  },
  {
    id: "module2",
    title: "Módulo 2: Ofrendas y Sacrificios",
    lessons: [
      {
        id: "lesson2",
        title: "2.1 Las Cinco Ofrendas Principales",
        subtitle: "Definiciones y propósitos teológicos",
        duration: "30 min",
        icon: "fa-fire",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/7f735064-e252-43bc-878f-7cd94d6e1e4a_rw_1920.jpg?h=40a678b064d2cfe062e2a31d8bbde46e",
        blocks: [
          { type: 'heading', level: 2, text: 'Definiciones de los Korbanot' },
          { type: 'accordion', items: [
            { title: 'Olah (Holocausto)', content: 'Significa "lo que sube". Entrega total y expiación general mediante el fuego.' },
            { title: 'Minjah (Ofrenda Vegetal)', content: 'Significa "don". Harina fina sin levadura, representando gratitud por la provisión.' },
            { title: 'Zebaj Shelamim (Paz/Comunión)', content: 'Sacrificio compartido. Celebraba la comunión restaurada entre Dios y el hombre.' },
            { title: 'Hattat (Pecado)', content: 'Purificación de pecados no intencionales o impurezas rituales.' },
            { title: 'Asham (Culpa)', content: 'Compensación por pecados contra la propiedad o lo sagrado, incluyendo restitución.' }
          ]},
          { type: 'heading', level: 3, text: '¿Por qué se hacían?' },
          { type: 'list', items: [
            'Expiación: Cubrir el pecado mediante la sangre.',
            'Comunión: Mantener una relación personal con Dios.',
            'Consagración: Dedicación total de la vida.',
            'Gratitud: Reconocimiento de Su bondad.'
          ]}
        ]
      },
      {
        id: "lesson3",
        title: "2.2 Cumplimiento en Cristo",
        subtitle: "¿Debemos hacer sacrificios hoy?",
        duration: "20 min",
        icon: "fa-cross",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/885dcef8-ad53-4002-bef1-da7455914677_rw_1920.jpg?h=413d68e1074e4473de1d5f33af298baa",
        blocks: [
          { type: 'heading', level: 2, text: 'El Fin de los Sacrificios Rituales' },
          { type: 'paragraph', text: 'Según la teología protestante, los sacrificios rituales ya no son necesarios porque fueron cumplidos definitivamente en Jesucristo.' },
          { type: 'note', text: '"Cristo fue ofrecido una sola vez para quitar los pecados de muchos" (Hebreos 9:28).' },
          { type: 'heading', level: 3, text: 'Aplicación para el Creyente Hoy' },
          { type: 'list', items: [
            'Sacrificio Vivo: Presentar nuestros cuerpos en servicio (Romanos 12:1).',
            'Comunión: Expresada a través de la oración y la Santa Cena.',
            'Gratitud y Obediencia: Nuestra nueva forma de adoración.'
          ]}
        ]
      },
      {
        id: "lesson4",
        title: "2.3 Simbolismo: Sal y Levadura",
        subtitle: "Elements clave del ritual",
        duration: "25 min",
        icon: "fa-vial",
        bannerImage: "https://recetassaboresypasiones.wordpress.com/wp-content/uploads/2015/04/harina-bicarbonato-sal-levadura.jpg",
        blocks: [
          { type: 'heading', level: 2, text: '¿Por qué sin Levadura?' },
          { type: 'paragraph', text: 'La levadura simbolizaba el pecado y la corrupción (hipocresía). También representaba la urgencia y pureza de la ofrenda.' },
          { type: 'heading', level: 3, text: 'La Sal del Pacto' },
          { type: 'paragraph', text: 'Símbolo de preservación y fidelidad eterna. Un "pacto de sal" era irrevocable.' },
          { type: 'heading', level: 3, text: 'Ubicación de la Adoración' },
          { type: 'list', items: [
            'Altar de Bronce (Atrio): Para sacrificios de animales.',
            'Altar de Incienso (Lugar Santo): Para ofrendas vegetales.'
          ]}
        ]
      },
      {
        id: "lesson5",
        title: "2.4 Ciclos y Evaluación",
        subtitle: "Frecuencia de sacrificios y repaso",
        duration: "20 min",
        icon: "fa-tasks",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/e81383b1-d3ac-4ac3-b80f-38fdc9f8594f_rw_1920.jpg?h=7ca09517db4c0a5f5e108779ee0eb3b4",
        blocks: [
          { type: 'heading', level: 2, text: 'Sacrificios Obligatorios' },
          { type: 'table', headers: ['Frecuencia', 'Sacrificio', 'Propósito'], rows: [
            ['Diarios', 'Tamid', 'Conexión constante (mañana y tarde)'],
            ['Semanales', 'Doble porción', 'Santificar el Sabbat'],
            ['Mensuales', 'Luna Nueva', 'Dedicación renovada al mes'],
            ['Anuales', 'Fiestas', 'Pascua, Expiación, etc.']
          ]},
          { type: 'quiz', question: "¿Qué tipo de sacrificio simbolizaba la entrega total a Dios y se quemaba completamente?", options: [
            { text: "Minjah (Ofrenda vegetal)", isCorrect: false },
            { text: "Olah (Holocausto)", isCorrect: true },
            { text: "Shelamim (Paz)", isCorrect: false }
          ], explanation: "La Olah (Holocausto) era la única ofrenda que se consumía totalmente por el fuego, representando devoción total." },
          { type: 'quiz', question: "¿Por qué ya no realizamos sacrificios de animales?", options: [
            { text: "Por el alto costo de los animales", isCorrect: false },
            { text: "Porque Cristo fue el sacrificio perfecto y final", isCorrect: true },
            { text: "Porque se prohibió legalmente", isCorrect: false }
          ], explanation: "Hebreos enseña que la obra de Cristo en la cruz hizo obsoletos los sacrificios temporales de animales." }
        ]
      }
    ]
  },
  {
    id: "module3",
    title: "Módulo 3: Repaso Integral (Génesis, Éxodo, Levítico)",
    lessons: [
      {
        id: "lesson6",
        title: "3.1 Génesis: Orígenes y Promesas",
        subtitle: "De la creación a la providencia de José",
        duration: "30 min",
        icon: "fa-seedling",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/a2469a37-7ccc-4e3b-9627-632ace9f3513_rw_1920.png?h=004fd523cae4a5c2b4d59213eb268dfc",
        blocks: [
          { type: 'heading', level: 2, text: 'Génesis: Los Dos Relatos de la Creación' },
          { type: 'paragraph', text: 'Compare los enfoques principales de los capítulos 1 y 2 para entender la naturaleza de Dios como Creador trascendente e íntimo.' },
          { type: 'table', headers: ['Aspecto', 'Génesis 1', 'Génesis 2'], rows: [
            ['Enfoque', 'Cronológico y Cósmico', 'Relacional y Antropológico'],
            ['Acción Divina', 'Dios habla (Soberanía)', 'Dios forma y planta (Intimidad)'],
            ['Resultado', 'Todo es "Bueno"', 'Propósito y Compañía']
          ]},
          { type: 'heading', level: 3, text: 'La Caída y la Esperanza' },
          { type: 'paragraph', text: 'El pecado (querer ser como Dios) rompió la comunión, pero Gn 3:15 nos da la primera promesa de redención (Protoevangelio).' },
          { type: 'quiz', question: "¿Cuál es el componente clave del Pacto Abrahámico?", options: [
            { text: "Tierra, Descendencia y Bendición", isCorrect: true },
            { text: "Leyes dietéticas y sacrificios", isCorrect: false },
            { text: "La construcción del Arca", isCorrect: false }
          ], explanation: "El pacto con Abraham (Gn 12, 15, 17) se fundamenta en la promesa de una tierra, una gran nación y ser bendición para todas las familias de la tierra." },
          { type: 'heading', level: 3, text: 'La Providencia en José' },
          { type: 'paragraph', text: 'Haz clic en cada tarjeta para explorar los detalles de la providencia divina en la vida de José.' },
          { type: 'timeline', timelineItems: [
            { 
              year: "Traición", 
              title: "Vendido por sus hermanos", 
              description: "José es enviado a Egipto como esclavo por envidia.",
              biblicalCitation: "Génesis 37:12-36",
              detailedContent: "La túnica de colores simbolizaba la preferencia de Jacob, lo que desató un odio fratricida. José es arrojado a una cisterna y vendido por 20 piezas de plata.",
              commentary: "Matthew Henry destaca que las aflicciones de los santos suelen comenzar por aquellos de quienes más deberían esperar amor. Aquí vemos la depravación humana chocando con el plan soberano de Dios."
            },
            { 
              year: "Prueba", 
              title: "Cárcel de Potifar", 
              description: "Fiel a pesar de la injusticia y el olvido.",
              biblicalCitation: "Génesis 39 - 40",
              detailedContent: "José prospera en casa de Potifar, pero la integridad le cuesta la libertad al rechazar a la esposa de su amo. En la cárcel, interpreta los sueños del copero y el panadero.",
              commentary: "Charles Spurgeon comenta que 'Dios estaba con José' incluso en la prisión. La fidelidad de José en lo poco (administrar una cárcel) fue la escuela de Dios para lo mucho (administrar una nación)."
            },
            { 
              year: "Exaltación", 
              title: "Gobernador de Egipto", 
              description: "Dios lo usa para salvar a muchas naciones.",
              biblicalCitation: "Génesis 41",
              detailedContent: "Tras interpretar los sueños de las vacas y espigas, Faraón reconoce que el Espíritu de Dios está en José. Es nombrado visir de Egipto a los 30 años.",
              commentary: "Juan Calvino enfatiza que el ascenso de José no fue azar, sino un 'decreto celestial' para preservar el linaje del pacto durante la hambruna. Dios humilla para exaltar."
            },
            { 
              year: "Redención", 
              title: "Perdón y Reencuentro", 
              description: "Lo que el hombre pensó para mal, Dios lo encaminó para bien.",
              biblicalCitation: "Génesis 45, 50:15-21",
              detailedContent: "José se revela a sus hermanos con llanto y misericordia. Entiende que su sufrimiento fue el vehículo de Dios para la preservación de Israel.",
              commentary: "John MacArthur señala que Génesis 50:20 es el 'Romanos 8:28 del Antiguo Testamento'. El perdón de José es un tipo de la gracia de Cristo: responde al mal con una bendición redentora."
            }
          ]}
        ]
      },
      {
        id: "lesson7",
        title: "3.2 Éxodo: Liberación y Presencia",
        subtitle: "Del cautiverio a la Shekinah",
        duration: "30 min",
        icon: "fa-water",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/d4210a6a-261d-4477-8f6a-e68c99a86195_rw_1920.jpg?h=7194530563e313ba2c980d7bee972d3e",
        blocks: [
          { type: 'heading', level: 2, text: 'Las Diez Plagas: Guerra Espiritual' },
          { type: 'paragraph', text: 'Yahvé demuestra su superioridad sobre el panteón egipcio. Cada plaga ataca a un "dios" específico.' },
          { type: 'accordion', items: [
            { title: 'Plaga de Sangre vs Hapi', content: 'Yahvé controla el Nilo, la fuente de vida que los egipcios adoraban.' },
            { title: 'Tinieblas vs Ra', content: 'El Dios de Israel apaga el sol, demostrando control sobre la creación astral.' },
            { title: 'Muerte de Primogénitos vs Faraón', content: 'Juicio final sobre el sistema de opresión y el "dios viviente" de Egipto.' }
          ]},
          { type: 'heading', level: 3, text: 'Actividad: El Tabernáculo en Orden' },
          { type: 'paragraph', text: 'Pon a prueba tus conocimientos sobre la estructura del Tabernáculo. Ordena las letras para formar los términos correctos antes de que se acabe el tiempo (90 segundos).' },
          { type: 'wordGame' },
          { type: 'heading', level: 3, text: 'La Pascua: Prefiguración de Cristo' },
          { type: 'list', items: [
            'Sangre en los postes = Protección del juicio divino.',
            'Cordero sin defecto = La perfección de Jesús.',
            'Cruce del Mar Rojo = De la esclavitud a la libertad (Bautismo).'
          ]},
          { type: 'quiz', question: "¿Qué representa el Tabernáculo en el libro de Éxodo?", options: [
            { text: "Un cuartel militar de Israel", isCorrect: false },
            { text: "El lugar donde Dios habita en medio de su pueblo", isCorrect: true },
            { text: "Un monumento a Moisés", isCorrect: false }
          ], explanation: "Éxodo 25:8 declara: 'Y harán un santuario para mí, y habitaré en medio de ellos'. Es la morada de la Shekinah." },
          { type: 'note', text: 'El incidente del becerro de oro nos advierte sobre nuestra tendencia a fabricar dioses manejables ante el estrés de la espera.' }
        ]
      },
      {
        id: "lesson8",
        title: "3.3 Levítico: Santidad y Justicia Social",
        subtitle: "Viviendo el mandato 'Sed Santos'",
        duration: "30 min",
        icon: "fa-scroll",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/f532a4b8-a012-475b-88eb-2018e07780f9_rw_1920.jpg?h=0ce32554967e8ea83d4e04f1ecfeeb3e",
        blocks: [
          { type: 'heading', level: 2, text: 'Tipos de Sacrificios (Interactive Flip-Cards)' },
          { type: 'paragraph', text: 'Explora los 5 tipos principales de sacrificios de Levítico 1-7. Haz clic en cada tarjeta para ver su significado teológico y su cumplimiento en Cristo.' },
          { type: 'flipcards', flipCards: [
            {
              frontTitle: "Olah",
              frontSubtitle: "Holocausto",
              icon: "fa-fire-alt",
              backTitle: "Consagración Total",
              backContent: "Se quemaba por completo, representando la devoción absoluta a Yahvé.",
              biblicalCitation: "Levítico 1",
              interpretation: "Tipifica a Cristo entregándose voluntariamente y sin reserva al Padre. En la vida del creyente, representa Romanos 12:1."
            },
            {
              frontTitle: "Minjah",
              frontSubtitle: "Ofrenda de Cereal",
              icon: "fa-wheat-awn",
              backTitle: "Gratitud y Servicio",
              backContent: "Ofrenda incruenta de flor de harina. Símbolo de los frutos del trabajo entregados a Dios.",
              biblicalCitation: "Levítico 2",
              interpretation: "Representa la vida perfecta de Cristo en Su humanidad y servicio. Nos enseña a honrar a Dios con nuestras posesiones."
            },
            {
              frontTitle: "Shelamim",
              frontSubtitle: "Sacrificio de Paz",
              icon: "fa-handshake",
              backTitle: "Comunión y Gozo",
              backContent: "La única ofrenda donde el oferente comía parte del animal, simbolizando una comida compartida con Dios.",
              biblicalCitation: "Levítico 3",
              interpretation: "Prefigura la paz restaurada por la sangre de Su cruz (Colosenses 1:20). Es la base de nuestra comunión en la Santa Cena."
            },
            {
              frontTitle: "Hattat",
              frontSubtitle: "Ofrenda por el Pecado",
              icon: "fa-droplet",
              backTitle: "Purificación",
              backContent: "Para pecados no intencionales. El énfasis está en la eficacia de la sangre para limpiar la culpa.",
              biblicalCitation: "Levítico 4",
              interpretation: "Cristo hecho pecado por nosotros (2 Corintios 5:21). Muestra que el pecado, incluso ignorado, requiere expiación ante un Dios santo."
            },
            {
              frontTitle: "Asham",
              frontSubtitle: "Ofrenda por la Culpa",
              icon: "fa-scale-balanced",
              backTitle: "Restitución",
              backContent: "Similar a la de pecado, pero incluía una compensación monetaria del 20% adicional por el daño causado.",
              biblicalCitation: "Levítico 5:14 - 6:7",
              interpretation: "Cristo no solo pagó nuestra deuda, sino que restauró lo que nosotros dañamos. Enfatiza la responsabilidad ética del pecador perdonado."
            }
          ]},
          { type: 'heading', level: 3, text: 'El Clímax: El Día de la Expiación (Lv 16)' },
          { type: 'list', items: [
            '1. Purificación del Sacerdote.',
            '2. Selección de los dos machos cabríos.',
            '3. Confesión de los pecados sobre el animal enviado al desierto.',
            '4. Rociamiento de sangre para limpiar el santuario.'
          ]},
          { type: 'quiz', question: "¿Cuál es el versículo clave de Levítico?", options: [
            { text: "Sed santos, porque yo soy santo (Lv 19:2)", isCorrect: true },
            { text: "Ojo por ojo, diente por diente", isCorrect: false },
            { text: "Amarás al Señor con todo tu corazón", isCorrect: false }
          ], explanation: "Este mandato resume el deseo de Dios de que su pueblo refleje su carácter en todas las áreas de la vida." }
        ]
      }
    ]
  }
];
