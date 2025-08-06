// DATOS JSON PARA TODOS LOS EJEMPLOS
const ejemplosJSON = {
  "objeto": {
    "codigo": `const persona = {
  "nombre": "Juan",
  "edad": 30,
  "ciudad": "Madrid",
  "activo": true
};

// Acceder a propiedades
console.log('Nombre:', persona.nombre);
console.log('Edad:', persona.edad);
console.log('Es mayor de edad:', persona.edad >= 18);`,
    "ejecutar": () => {
      const persona = {
        "nombre": "Juan",
        "edad": 30,
        "ciudad": "Madrid",
        "activo": true
      };
      
      return `Resultado de la ejecución:

Nombre: ${persona.nombre}
Edad: ${persona.edad}
Es mayor de edad: ${persona.edad >= 18}
Ciudad: ${persona.ciudad}
Estado: ${persona.activo ? 'Activo' : 'Inactivo'}

Objeto completo:
${JSON.stringify(persona, null, 2)}`;
    }
  },
  "arreglo": {
    "codigo": `const lenguajes = ["JavaScript", "Python", "Java", "C++", "Go"];

// Operaciones con el arreglo
lenguajes.forEach((lang, index) => {
  console.log(\`\${index + 1}. \${lang}\`);
});

console.log('Total de lenguajes:', lenguajes.length);
console.log('Primer lenguaje:', lenguajes[0]);`,
    "ejecutar": () => {
      const lenguajes = ["JavaScript", "Python", "Java", "C++", "Go"];
      
      let resultado = 'Resultado de la ejecución:\n\n';
      lenguajes.forEach((lang, index) => {
        resultado += `${index + 1}. ${lang}\n`;
      });
      
      resultado += `\nTotal de lenguajes: ${lenguajes.length}`;
      resultado += `\nPrimer lenguaje: ${lenguajes[0]}`;
      resultado += `\nÚltimo lenguaje: ${lenguajes[lenguajes.length - 1]}`;
      
      resultado += `\n\nArreglo completo:\n${JSON.stringify(lenguajes, null, 2)}`;
      
      return resultado;
    }
  },
  "anidado": {
    "codigo": `const usuario = {
  "id": 123,
  "nombre": "Ana",
  "hobbies": ["lectura", "música", "deportes"],
  "activo": true,
  "contacto": {
    "email": "ana@email.com",
    "telefono": null
  }
};

// Navegar por datos anidados
console.log('Usuario:', usuario.nombre);
console.log('Primer hobby:', usuario.hobbies[0]);
console.log('Email:', usuario.contacto.email);`,
    "ejecutar": () => {
      const usuario = {
        "id": 123,
        "nombre": "Ana",
        "hobbies": ["lectura", "música", "deportes"],
        "activo": true,
        "contacto": {
          "email": "ana@email.com",
          "telefono": null
        }
      };
      
      return `Resultado de la ejecución:

Usuario: ${usuario.nombre}
ID: ${usuario.id}
Primer hobby: ${usuario.hobbies[0]}
Total de hobbies: ${usuario.hobbies.length}
Email: ${usuario.contacto.email}
Teléfono: ${usuario.contacto.telefono || 'No disponible'}
Estado: ${usuario.activo ? 'Activo' : 'Inactivo'}

Datos completos:
${JSON.stringify(usuario, null, 2)}`;
    }
  },
  "tipos": {
    "codigo": `const datos = {
  "texto": "Hola \"mundo\"",
  "entero": 42,
  "decimal": 3.14159,
  "negativo": -273.15,
  "booleano": true,
  "nulo": null
};

// Verificar tipos
Object.keys(datos).forEach(key => {
  console.log(\`\${key}: \${typeof datos[key]}\`);
});`,
    "ejecutar": () => {
      const datos = {
        "texto": "Hola \"mundo\"",
        "entero": 42,
        "decimal": 3.14159,
        "negativo": -273.15,
        "booleano": true,
        "nulo": null
      };
      
      let resultado = 'Resultado de la ejecución:\n\nAnálisis de tipos:\n';
      Object.keys(datos).forEach(key => {
        const valor = datos[key];
        const tipo = typeof valor;
        resultado += `${key}: ${tipo} = ${valor === null ? 'null' : JSON.stringify(valor)}\n`;
      });
      
      resultado += `\nDatos completos:\n${JSON.stringify(datos, null, 2)}`;
      
      return resultado;
    }
  },
  "parseo": {
    "codigo": `const jsonString = '{"nombre":"Pedro","edad":25,"profesion":"Desarrollador"}';

// Convertir string JSON a objeto
const objeto = JSON.parse(jsonString);

console.log('Nombre:', objeto.nombre);
console.log('Edad:', objeto.edad);
console.log('Profesión:', objeto.profesion);
console.log('Tipo:', typeof objeto);`,
    "ejecutar": () => {
      const jsonString = '{"nombre":"Pedro","edad":25,"profesion":"Desarrollador"}';
      const objeto = JSON.parse(jsonString);
      
      return `Resultado de la ejecución:

String JSON original:
${jsonString}

Después de JSON.parse():
Nombre: ${objeto.nombre}
Edad: ${objeto.edad}
Profesión: ${objeto.profesion}
Tipo de dato: ${typeof objeto}

Objeto resultante:
${JSON.stringify(objeto, null, 2)}`;
    }
  },
  "stringify": {
    "codigo": `const persona = {
  nombre: "María",
  edad: 28,
  ciudad: "Barcelona",
  hobbies: ["fotografía", "viajes"],
  activo: true
};

// Convertir objeto a string JSON
const jsonString = JSON.stringify(persona);
const jsonFormatted = JSON.stringify(persona, null, 2);

console.log('JSON compacto:', jsonString);
console.log('JSON formateado:', jsonFormatted);`,
    "ejecutar": () => {
      const persona = {
        nombre: "María",
        edad: 28,
        ciudad: "Barcelona",
        hobbies: ["fotografía", "viajes"],
        activo: true
      };
      
      const jsonString = JSON.stringify(persona);
      const jsonFormatted = JSON.stringify(persona, null, 2);
      
      return `Resultado de la ejecución:

Objeto JavaScript original:
${JSON.stringify(persona, null, 2)}

JSON compacto (una línea):
${jsonString}

JSON formateado (legible):
${jsonFormatted}

Tipo del resultado: ${typeof jsonString}`;
    }
  },
  "limitaciones": {
    "datosValidos": {
      "nombre": "Juan",
      "fecha": "2024-01-15T10:30:00Z",
      "mensaje": "hola mundo",
      "patron": "[a-z]+",
      "activo": null,
      "edad": 25,
      "habilidades": ["programación", "diseño"],
      "configuracion": {
        "tema": "oscuro",
        "notificaciones": true
      }
    },
    "titulo": "✅ JSON Válido"
  }
};

// FUNCIÓN GENÉRICA PARA EJECUTAR EJEMPLOS
function ejecutarEjemplo(tipo, elementId) {
  const resultElement = document.getElementById(elementId);
  const button = event.target;
  
  if (button.textContent === 'Ejecutar') {
    try {
      const config = ejemplosJSON[tipo];
      let resultado;
      
      // Manejar diferentes tipos de ejemplos
      if (config.ejecutar) {
        // Ejemplos con función ejecutar
        resultado = config.ejecutar();
      } else if (config.datosValidos) {
        // Caso especial para limitaciones
        resultado = `${config.titulo}:\n\n${JSON.stringify(config.datosValidos, null, 2)}`;
      }
      
      resultElement.textContent = resultado;
      resultElement.classList.remove('hidden');
      button.textContent = 'Esconder';
      button.style.backgroundColor = '#6c757d';
      button.classList.add('active');
    } catch (error) {
      resultElement.textContent = 'Error: ' + error.message;
      resultElement.classList.remove('hidden');
      button.textContent = 'Esconder';
      button.style.backgroundColor = '#6c757d';
      button.classList.add('active');
    }
  } else {
    resultElement.classList.add('hidden');
    button.textContent = 'Ejecutar';
    button.style.backgroundColor = '#656d76';
    button.classList.remove('active');
  }
}

// ELIMINAR LA FUNCIÓN GENERAR ANÁLISIS (YA NO SE NECESITA)

// FUNCIONES ESPECÍFICAS USANDO EL SISTEMA GENÉRICO
function executeObjectExample() {
  ejecutarEjemplo('objeto', 'result-object');
}

function executeArrayExample() {
  ejecutarEjemplo('arreglo', 'result-array');
}

function executeNestedExample() {
  ejecutarEjemplo('anidado', 'result-nested');
}

function executeStringNumberExample() {
  ejecutarEjemplo('tipos', 'result-string-number');
}

function executeParseExample() {
  ejecutarEjemplo('parseo', 'result-parse');
}

function executeStringifyExample() {
  ejecutarEjemplo('stringify', 'result-stringify');
}

function executeApiExample() {
  const resultElement = document.getElementById('result-api');
  const button = event.target;
  
  if (button.textContent === 'Ejecutar') {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        resultElement.textContent = `Respuesta de API en formato JSON:

Datos del usuario obtenidos:
${JSON.stringify(data, null, 2)}

Información extraída:
- Nombre: ${data.name}
- Email: ${data.email}
- Teléfono: ${data.phone}
- Ciudad: ${data.address.city}
- Compañía: ${data.company.name}`;
        
        resultElement.classList.remove('hidden');
        button.textContent = 'Esconder';
        button.style.backgroundColor = '#6c757d';
        button.classList.add('active');
      })
      .catch(error => {
        resultElement.textContent = 'Error al hacer petición a la API: ' + error.message;
        resultElement.classList.remove('hidden');
        button.textContent = 'Esconder';
        button.style.backgroundColor = '#6c757d';
        button.classList.add('active');
      });
  } else {
    resultElement.classList.add('hidden');
    button.textContent = 'Ejecutar';
    button.style.backgroundColor = '#656d76';
    button.classList.remove('active');
  }
}

function executeLimitationsExample() {
  ejecutarEjemplo('limitaciones', 'result-limitations');
}

// EDITOR JSON INTERACTIVO
function validateJSON() {
  const editor = document.getElementById('json-editor');
  const preview = document.getElementById('json-preview');
  const errors = document.getElementById('json-errors');
  
  try {
    const jsonText = editor.value.trim();
    if (!jsonText) {
      preview.textContent = 'Editor vacío - Escribe JSON para ver el análisis';
      errors.classList.add('hidden');
      editor.classList.remove('error', 'valid');
      return;
    }
    
    const parsed = JSON.parse(jsonText);
    
    // Solo mostrar análisis, no el JSON formateado
    const analysis = analyzeJSONStructure(parsed);
    preview.textContent = '📊 ANÁLISIS DE ESTRUCTURA:\n\n' + analysis;
    
    errors.classList.add('hidden');
    editor.classList.remove('error');
    editor.classList.add('valid');
    
  } catch (error) {
    preview.textContent = 'JSON inválido - Corrige los errores para ver el análisis';
    errors.textContent = '❌ Error: ' + error.message;
    errors.classList.remove('hidden');
    editor.classList.remove('valid');
    editor.classList.add('error');
  }
}

function formatJSON() {
  const editor = document.getElementById('json-editor');
  try {
    const parsed = JSON.parse(editor.value);
    editor.value = JSON.stringify(parsed, null, 2);
    validateJSON();
  } catch (error) {
    alert('No se puede formatear: JSON inválido');
  }
}

function clearEditor() {
  document.getElementById('json-editor').value = '';
  document.getElementById('json-preview').textContent = 'Editor limpio - Escribe JSON para ver el análisis';
  document.getElementById('json-errors').classList.add('hidden');
  document.getElementById('json-editor').classList.remove('error', 'valid');
}

// Auto-validación en tiempo real
document.addEventListener('DOMContentLoaded', function() {
  const editor = document.getElementById('json-editor');
  if (editor) {
    editor.addEventListener('input', function() {
      clearTimeout(this.validationTimeout);
      this.validationTimeout = setTimeout(validateJSON, 500);
    });
  }
});

// ANÁLISIS DE ESTRUCTURA
function analyzeJSONStructure(obj, depth = 0, path = 'root') {
  let analysis = '';
  const indent = '  '.repeat(depth);
  
  if (obj === null) {
    return `${indent}${path}: null\n`;
  }
  
  if (Array.isArray(obj)) {
    analysis += `${indent}${path}: Array[${obj.length}]\n`;
    obj.forEach((item, index) => {
      analysis += analyzeJSONStructure(item, depth + 1, `[${index}]`);
    });
  } else if (typeof obj === 'object') {
    const keys = Object.keys(obj);
    analysis += `${indent}${path}: Object{${keys.length} properties}\n`;
    keys.forEach(key => {
      analysis += analyzeJSONStructure(obj[key], depth + 1, key);
    });
  } else {
    const type = typeof obj;
    const value = type === 'string' ? `"${obj}"` : obj;
    analysis += `${indent}${path}: ${type} = ${value}\n`;
  }
  
  return analysis;
}

// GENERADOR DE JSON DESDE FORMULARIO
function generateJSONFromForm() {
  const nombre = document.getElementById('form-nombre').value;
  const edad = parseInt(document.getElementById('form-edad').value);
  const email = document.getElementById('form-email').value;
  const activo = document.getElementById('form-activo').checked;
  const habilidadesText = document.getElementById('form-habilidades').value;
  
  const habilidades = habilidadesText 
    ? habilidadesText.split(',').map(h => h.trim()).filter(h => h)
    : [];
  
  const generatedObject = {
    nombre: nombre || null,
    edad: edad || null,
    email: email || null,
    activo: activo,
    habilidades: habilidades,
    fechaCreacion: new Date().toISOString(),
    id: Math.floor(Math.random() * 1000)
  };
  
  // Remover propiedades null
  Object.keys(generatedObject).forEach(key => {
    if (generatedObject[key] === null || generatedObject[key] === '') {
      delete generatedObject[key];
    }
  });
  
  const output = document.getElementById('generated-json');
  output.textContent = JSON.stringify(generatedObject, null, 2);
}

// Inicializar el formulario con mensaje por defecto
document.addEventListener('DOMContentLoaded', function() {
  const output = document.getElementById('generated-json');
  if (output) {
    output.textContent = 'Presiona "Generar JSON" para crear el JSON desde el formulario';
  }
  
  // Cargar códigos de ejemplo dinámicamente
  cargarCodigosEjemplo();
});

// CARGAR CÓDIGOS DE EJEMPLO EN EL HTML
function cargarCodigosEjemplo() {
  const mapeoElementos = {
    'objeto': 'code-objeto',
    'arreglo': 'code-arreglo', 
    'anidado': 'code-anidado',
    'tipos': 'code-tipos',
    'parseo': 'code-parseo',
    'stringify': 'code-stringify'
  };
  
  Object.keys(mapeoElementos).forEach(tipo => {
    const elementId = mapeoElementos[tipo];
    const elemento = document.getElementById(elementId);
    if (elemento && ejemplosJSON[tipo] && ejemplosJSON[tipo].codigo) {
      elemento.textContent = ejemplosJSON[tipo].codigo;
    }
  });
}