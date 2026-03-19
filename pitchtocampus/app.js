
// NAVIGATION
document.getElementById('nav-how').addEventListener('click', function(){ document.getElementById('how').scrollIntoView({behavior:'smooth'}); });
document.getElementById('nav-about').addEventListener('click', function(){ document.getElementById('about').scrollIntoView({behavior:'smooth'}); });
document.getElementById('nav-test').addEventListener('click', function(){ document.getElementById('testimonials').scrollIntoView({behavior:'smooth'}); });
document.getElementById('nav-blog').addEventListener('click', function(){ document.getElementById('blog').scrollIntoView({behavior:'smooth'}); });
document.getElementById('nav-contact').addEventListener('click', function(){ document.getElementById('contact').scrollIntoView({behavior:'smooth'}); });
document.getElementById('nav-plans').addEventListener('click', function(){ document.getElementById('plans').scrollIntoView({behavior:'smooth'}); });
document.getElementById('t-btnp').addEventListener('click', function(){ document.getElementById('plans').scrollIntoView({behavior:'smooth'}); });
document.getElementById('t-btns').addEventListener('click', function(){ document.getElementById('how').scrollIntoView({behavior:'smooth'}); });
document.getElementById('t-pbtn1').addEventListener('click', function(){ document.getElementById('contact').scrollIntoView({behavior:'smooth'}); });
document.getElementById('t-pbtn2').addEventListener('click', function(){ document.getElementById('contact').scrollIntoView({behavior:'smooth'}); });
document.getElementById('floatBtn').addEventListener('click', function(){ document.getElementById('hero').scrollIntoView({behavior:'smooth'}); });

// LANGUAGE
var translations = {
  'nav-how': ['Cómo funciona','How it works'],
  'nav-about': ['Mi historia','My story'],
  'nav-test': ['Testimonios','Testimonials'],
  'nav-blog': ['Blog','Blog'],
  'nav-contact': ['Contacto','Contact'],
  'nav-plans': ['Empezar ahora','Get started'],
  't-badge': ['De España a la NCAA','From Spain to the NCAA'],
  't-h1a': ['DEL CAMPO','FROM THE PITCH'],
  't-h1b': ['A LA UNIVERSIDAD','TO CAMPUS'],
  't-sub': ['Consigue tu beca de fútbol universitaria en USA. Asesoramiento real de alguien que lo vivió. <strong>Con 18 años, desde Marbella hasta Nueva York.</strong>','Get your college soccer scholarship in the USA. Real advice from someone who lived it. <strong>At 18, from Marbella to New York.</strong>'],
  't-btnp': ['Quiero mi beca →','I want my scholarship →'],
  't-btns': ['Ver cómo funciona','How it works'],
  't-s1': ['Universidades','Universities'],
  't-s2': ['Solo si consigues beca','Only if you get a scholarship'],
  't-s3': ['Años en USA becado','Years in USA on scholarship'],
  't-ch1': ['Asistente Pitch to Campus','Pitch to Campus Assistant'],
  't-ch2': ['Totalmente gratis · Sin registro','Completely free · No sign up'],
  't-cmsg': ['¡Hola! Soy el asistente de <strong>Pitch to Campus</strong> ⚽<br>Pregúntame lo que quieras sobre becas de fútbol en USA. ¡Totalmente gratis!','Hi! I am the <strong>Pitch to Campus</strong> assistant ⚽<br>Ask me anything about soccer scholarships in the USA. Completely free!'],
  'chip1': ['📄 Documentos','📄 Documents'],
  'chip2': ['🎬 Highlight','🎬 Highlight'],
  'chip3': ['📝 Exámenes','📝 Exams'],
  'chip4': ['💰 Costes','💰 Costs'],
  't-cfooter': ['100% gratuito','100% free'],
  't-howlbl': ['El proceso','The process'],
  't-howtitle': ['ASÍ FUNCIONA <span>PITCH TO CAMPUS</span>','HOW <span>PITCH TO CAMPUS</span> WORKS'],
  't-howsub': ['Todo lo que necesitas para conseguir tu beca, en una sola plataforma.','Everything you need to get your scholarship, in one platform.'],
  't-h1': ['PREPARA TU HIGHLIGHT','PREPARE YOUR HIGHLIGHT'],
  't-hd1': ['La IA te guía para crear un vídeo que llame la atención de cualquier coach americano.','AI guides you to create a video that catches any American coach attention.'],
  't-h2': ['ELIGE UNIVERSIDAD','FIND YOUR UNIVERSITY'],
  't-hd2': ['Filtra por presupuesto, nivel deportivo, carrera y clima. Más de 50 universidades.','Filter by budget, sports level, degree and climate. 50+ universities.'],
  't-h3': ['CONTACTA COACHES','CONTACT COACHES'],
  't-hd3': ['Genera emails personalizados en inglés perfecto para cada coach con un clic.','Generate personalized emails in perfect English for each coach with one click.'],
  't-h4': ['SEGUIMIENTO TOTAL','FULL TRACKING'],
  't-hd4': ['Controla qué coaches respondieron, cuáles están pendientes y cuáles van a entrevista.','Track which coaches replied, which are pending and which go to interview.'],
  't-h5': ['CONSIGUES LA BECA','YOU GET THE SCHOLARSHIP'],
  't-hd5': ['Al recibir tu Award Letter pagas el 5% del valor. Sin riesgo para ti.','When you receive your Award Letter you pay 5% of its value. Zero risk.'],
  't-ablbl': ['Mi historia','My story'],
  't-abtitle': ['BECADO A LOS <span>18 AÑOS</span>','SCHOLARSHIP AT <span>18 YEARS OLD</span>'],
  't-abquote': ['Con 18 años grabé mis partidos, mandé emails a universidades de Estados Unidos y esperé a que llegara ese email que me cambiase la vida.','At 18 I recorded my games, sent emails to US universities and waited for that email that would change my life.'],
  't-af1': ['Futbolista desde pequeño','Soccer player since childhood'],
  't-af1b': ['a alto nivel competitivo','at competitive level'],
  't-af2': ['Graduado en Derecho','Law Graduate'],
  't-af2b': ['Máster de Acceso a la Abogacía','Master in Legal Practice'],
  't-af3': ['Inglés avanzado','Advanced English'],
  't-af3b': ['4 años viviendo en Estados Unidos','4 years living in the United States'],
  't-planlbl': ['Planes','Plans'],
  't-plantitle': ['ELIGE TU <span>PLAN</span>','CHOOSE YOUR <span>PLAN</span>'],
  't-plansub': ['Empieza gratis. Upgrade cuando quieras.','Start free. Upgrade whenever you want.'],
  't-pn1': ['GRATUITO','FREE'],
  't-pnote1': ['Sin tarjeta de crédito','No credit card needed'],
  't-pf1': ['Chatbot gratuito ilimitado','Unlimited free chatbot'],
  't-pf2': ['Guía básica del proceso','Basic process guide'],
  't-pf3': ['Blog con consejos','Blog with tips'],
  't-pf4': ['Generador de emails a coaches','Coach email generator'],
  't-pf5': ['Buscador de universidades','University finder'],
  't-pf6': ['Asesoramiento personalizado','Personalized coaching'],
  't-pbadge': ['✦ MÁS POPULAR','✦ MOST POPULAR'],
  't-pnote2': ['Solo pagas cuando consigues tu beca. Sin riesgo.','Only pay when you get your scholarship. Zero risk.'],
  't-pf7': ['Todo lo del plan gratuito','Everything in free plan'],
  't-pf8': ['Asesoramiento personalizado completo','Full personalized coaching'],
  't-pf9': ['Generador de emails a coaches','Coach email generator'],
  't-pf10': ['Buscador inteligente de universidades','Smart university finder'],
  't-pf11': ['Feedback para tu highlight','Highlight feedback'],
  't-pf12': ['Seguimiento completo del proceso','Complete process tracking'],
  't-pbtn1': ['Empezar gratis','Start for free'],
  't-pbtn2': ['Quiero mi beca →','I want my scholarship →'],
  't-planfoot': ['El 5% solo se paga cuando recibes tu Award Letter oficial. Si no hay beca, no hay coste.','The 5% is only paid when you receive your official Award Letter. No scholarship, no cost.'],
  't-testlbl': ['Testimonios','Testimonials'],
  't-testtitle': ['ELLOS YA LO <span>CONSIGUIERON</span>','THEY ALREADY <span>DID IT</span>'],
  't-legallbl': ['Info legal','Legal info'],
  't-legaltitle': ['TODO LO QUE DEBES <span>SABER</span>','EVERYTHING YOU NEED <span>TO KNOW</span>'],
  't-blogtitle': ['CONSEJOS Y <span>RECURSOS</span>','TIPS AND <span>RESOURCES</span>'],
  't-b1': ['El highlight perfecto para coaches de División I','The perfect highlight for Division I coaches'],
  't-b1d': ['Los 6 errores que hacen que los coaches descarten tu vídeo en 30 segundos.','The 6 mistakes that make coaches skip your video in 30 seconds.'],
  't-b2': ['División I vs II vs NJCAA: cuál es la mejor?','Division I vs II vs NJCAA: which is best?'],
  't-b2d': ['Diferencias reales de nivel deportivo, beca y calidad de vida.','Real differences in athletic level, scholarship and quality of life.'],
  't-b3': ['El email que me abrió las puertas de USA','The email that opened the doors of the USA for me'],
  't-b3d': ['La plantilla exacta que yo usé. Con explicación de cada párrafo.','The exact template I used. With explanation of each paragraph.'],
  't-b4': ['Mi primer mes en Nueva York con 18 años','My first month in New York at 18'],
  't-b4d': ['Lo bueno, lo malo y lo que nadie te cuenta antes de irte.','The good, the bad and what nobody tells you before you go.'],
  't-conlbl': ['Contacto','Contact'],
  't-contitle': ['HABLEMOS DE <span>TU BECA</span>','LET'S TALK ABOUT <span>YOUR SCHOLARSHIP</span>'],
  't-consub': ['Escríbeme, respondo en menos de 24 horas.','Write to me, I reply within 24 hours.'],
  't-fn': ['Nombre','Name'],
  't-fa': ['Edad','Age'],
  't-fp': ['Posición','Position'],
  't-fg': ['Nota media','GPA'],
  't-fm': ['Cuéntame tu situación','Tell me your situation'],
  't-fsub': ['Enviar mensaje →','Send message →'],
  't-ftag': ['Del campo a la universidad americana. Asesoramiento real de alguien que lo vivió.','From the pitch to the American university. Real advice from someone who lived it.'],
  't-fplat': ['Plataforma','Platform'],
  't-fl1': ['Cómo funciona','How it works'],
  't-fl2': ['Planes','Plans'],
  't-fl3': ['Mi historia','My story'],
  't-fl4': ['Info legal','Legal info'],
  't-fl5': ['Testimonios','Testimonials']
};

var lang = 0;
document.getElementById('langBtn').addEventListener('click', function(){
  lang = 1 - lang;
  this.textContent = lang === 0 ? '🇬🇧 EN' : '🇪🇸 ES';
  Object.keys(translations).forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.innerHTML = translations[id][lang];
  });
});

// CHAT
var CHAT_SYS = 'Eres el asistente de Pitch to Campus. Diego consiguió una beca de fútbol en Cayuga Community College Nueva York con 18 años desde Marbella. Ahora ayuda a otros jóvenes a hacer lo mismo. Responde SIEMPRE en español. Tono cercano y motivador. Máximo 100 palabras. Usa negritas con **texto** para lo importante.';
var chatHistory = [], chatBusy = false;

function chatSend(text){
  if(chatBusy) return;
  var inp = document.getElementById('chatInp');
  var msg = text || inp.value.trim();
  if(!msg) return;
  inp.value = '';
  document.getElementById('chatChips').style.display = 'none';
  addMsg('user', msg);
  chatHistory.push({role:'user', content:msg});
  showTyping();
  chatBusy = true;
  document.getElementById('chatSend').disabled = true;
  fetch('/api/chat', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({system: CHAT_SYS, messages: chatHistory})
  }).then(function(res){
    return res.json();
  }).then(function(data){
    hideTyping();
    chatBusy = false;
    document.getElementById('chatSend').disabled = false;
    if(data.error) {
      addMsg('bot', 'Error: ' + data.error);
      return;
    }
    var reply = '';
    if(data.content && data.content[0] && data.content[0].text) {
      reply = data.content[0].text;
    } else {
      reply = 'No pude procesar la respuesta. Inténtalo de nuevo.';
    }
    chatHistory.push({role:'assistant', content:reply});
    addMsg('bot', reply);
  }).catch(function(err){
    hideTyping();
    addMsg('bot', 'Error de conexión: ' + err.message);
    chatBusy = false;
    document.getElementById('chatSend').disabled = false;
  });
}

function addMsg(role, text){
  var msgs = document.getElementById('chatMsgs');
  var d = document.createElement('div');
  d.className = 'cmsg ' + role;
  var av = role==='bot' ? '<div class="cmsg-av">P2C</div>' : '<div class="cmsg-av u">👤</div>';
  d.innerHTML = av + '<div class="cmsg-bub">' + fmt(text) + '</div>';
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}

function fmt(t){
  return t.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/

/g,'<br><br>').replace(/
/g,'<br>');
}

function showTyping(){
  var msgs = document.getElementById('chatMsgs');
  var d = document.createElement('div');
  d.className = 'cmsg bot'; d.id = 'chatTyping';
  d.innerHTML = '<div class="cmsg-av">P2C</div><div class="cmsg-bub"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
}

function hideTyping(){
  var t = document.getElementById('chatTyping');
  if(t) t.remove();
}

document.getElementById('chatSend').addEventListener('click', function(){ chatSend(); });
document.getElementById('chatInp').addEventListener('keydown', function(e){ if(e.key==='Enter') chatSend(); });
document.getElementById('chip1').addEventListener('click', function(){ chatSend('¿Qué documentos necesito?'); });
document.getElementById('chip2').addEventListener('click', function(){ chatSend('¿Cómo hago mi highlight?'); });
document.getElementById('chip3').addEventListener('click', function(){ chatSend('¿Qué exámenes piden?'); });
document.getElementById('chip4').addEventListener('click', function(){ chatSend('¿Cuánto cuesta vivir en USA?'); });

// CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  fetch('https://formspree.io/f/xyknlzvd', {
    method: 'POST',
    body: new FormData(this),
    headers: {'Accept': 'application/json'}
  }).then(function(res){
    if(res.ok){
      document.getElementById('contactForm').reset();
      document.getElementById('formOk').style.display = 'block';
      setTimeout(function(){ document.getElementById('formOk').style.display = 'none'; }, 6000);
    }
  }).catch(function(){ alert('Error. Escríbenos a pitchtocampus@gmail.com'); });
});
