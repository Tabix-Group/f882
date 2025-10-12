import React from 'react';
import { useNavigate } from 'react-router-dom';

const FlipbookInitialPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-semibold">Volver al Dashboard</span>
          </button>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Nivel Inicial - Flipbook de Apoyo
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-blue-300 font-semibold">NIVEL INICIAL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-6">
            Actividad Física en 3 Pasos y Sin Complicaciones
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            El movimiento es Fortaleza. Cada ejercicio consciente nos recuerda que estamos hechos para movernos.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Introduction */}
          <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-blue-300 mb-6">— El Movimiento como base de F88</h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              El movimiento es Fortaleza. Cada ejercicio consciente nos recuerda que estamos hechos para movernos. La actividad física no es solo un hábito saludable: <strong className="text-blue-300">ES LA BASE ESCENCIAL PARA DESARROLLAR TODAS LAS DEMAS FORTALEZAS DEL PROGRAMA FORTITUDE 88</strong>. Cuando mueves tu cuerpo, despiertas tu mente, gestionas tus emociones, desarrollas tu carácter y tu voluntad.
            </p>
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">Nivel INICIAL — Fortalece tu Cuerpo</h4>
              <p className="text-gray-200">
                Este mensaje es para ti, que hoy eres sedentario o llevas mucho tiempo sin actividad física de forma regular. F88 te ayudará a incorporar hábitos que incentiven tu actividad física. No hay juicios, solo un punto de partida claro: <strong>Fortalecer tu Cuerpo</strong>.
              </p>
            </div>
          </section>

          {/* Paso 1 */}
          <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-3xl font-bold text-green-300">LIBÉRATE !!!</h3>
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">Rompe Barreras</h4>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Imagina que hoy es el primer día del resto de tu vida activa. Y puedes prescindir de gimnasios y planes complejos. Solo tú, tu cuerpo y una decisión: liberarte de las excusas.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Las barreras son mentales: "No tengo tiempo", "No tengo un lugar", "Me duele la rodilla", "Ya lo intenté". Son ladrillos en una muralla invisible que te separa de tu mejor versión.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-6">
              <p className="text-yellow-200 font-semibold">
                Sin excusas en el camino, recuerda: no necesitas nada especial ni complicado. Es una señal a tu cerebro: ya no estás en pausa. El movimiento comienza en la mente y este gesto lo activa.
              </p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
              <h5 className="text-blue-300 font-bold mb-2">Actividad:</h5>
              <p className="text-gray-200">escribe tu lista de excusas hasta hoy, táchalas y envíalas a tu mentor F88.</p>
            </div>
          </section>

          {/* Pre-Párate para el Movimiento */}
          <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h4 className="text-2xl font-semibold text-white mb-4">Pre-Párate para el Movimiento</h4>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Que "calzas y cómo te vistes" es un gesto simple que marca una gran diferencia entre el movimiento y el estancamiento. Calzar tenis (zapatillas) y vestir ropa cómoda no es solo cuestión de estilo; es una señal a tu cerebro de que estás listo para activarte en cualquier horario y lugar.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Calzar y vestir adecuadamente desde que te levantas, te pone en modo "apto para el movimiento". Ideal si inicias tu día con actividad física. Y si surge la ocasión de simplemente caminar, subir escaleras o cualquier otra actividad física durante el resto del día, tu cerebro no buscará excusas.
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-6">
              <h5 className="text-green-300 font-bold mb-2">Tips para "pre-pararte" para el movimiento:</h5>
              <ul className="text-gray-200 space-y-2">
                <li>• Elige versatilidad: prendas que sirvan para tu rutina diaria y para ejercitarte.</li>
                <li>• Dispone de un set siempre listo y a mano.</li>
              </ul>
              <p className="text-green-200 font-semibold mt-4">
                Este hábito envía un mensaje claro: "Estoy preparado para moverme en cualquier momento y lugar". Es un compromiso silencioso con tu fortaleza física.
              </p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
              <h5 className="text-blue-300 font-bold mb-2">Actividad:</h5>
              <p className="text-gray-200">todas las mañanas, o siempre que puedas, calza tenis (zapatillas) y viste ropa adecuada para actividad física, sin importar tu agenda. Conviértelo en un hábito consciente por los próximos 88 días.</p>
            </div>
          </section>

          {/* Paso 2 */}
          <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-3xl font-bold text-blue-300">M.O.V.E. !!!</h3>
              <span className="text-sm text-gray-400">(Movilízate, Optimízate, Vitalízate, Empodérate)</span>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Comprométete y cumple contigo mismo el calendario de actividad física de 88 días. Lo importante aquí no es la intensidad, es la <strong className="text-blue-300">CONSTANCIA</strong>; con la cual lograrás el hábito de fortalecer tu cuerpo.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Recuerda: cada pequeño movimiento es una señal para tu cuerpo y tu mente de que estás saliendo del estancamiento y la debilidad. Aquí no buscamos récords, buscamos <strong className="text-blue-300">ENCENDER tu MOTOR</strong>. Eso no significa agotarte ni forzar tu cuerpo hasta el límite, sino darle nuevos estímulos.
            </p>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 mb-6">
              <p className="text-purple-200">
                Tu "Misogi" — desafíos personal y significativo — es que completes y reportes a diario las actividades y tiempos del plan desde el día 1 al 88.
              </p>
            </div>

            {/* Actividades */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-2xl p-6">
                <h5 className="text-white font-bold mb-4">Actividad y Aclaraciones:</h5>
                <ul className="text-gray-200 space-y-2">
                  <li>• Revisa tu agenda y define si completarás tu actividad física diaria durante la mañana, tarde o noche: la previsión y organización juegan a tu favor.</li>
                  <li>• <strong>Importante:</strong> el inicio de la transpiración es el indicador natural y mínimo que debes alcanzar en cada sesión de actividad física F88.</li>
                </ul>
              </div>

              {/* CARDIO */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                <h5 className="text-red-300 font-bold mb-4 text-xl">CARDIO:</h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Caminata intensa" (ritmo rápido). Se completa el tiempo diario SIN pausas.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Subir/Bajar escaleras, o Step". Se puede completar el tiempo con pausas de 1 min., cada 3 a 5 min. de actividad.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Activación lateral": pasos laterales amplios en el lugar, tocando el pie contrario, mientras brazos estirados tocan palmas encima de la cabeza.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"DR (Directa/Reversa)": repetir simultáneamente y en el lugar, 3 a 5 pasos hacia adelante y 3 a 5 hacia atrás sin girar el cuerpo, y manteniendo ritmo de trote.</p>
                  </div>
                </div>
              </div>

              {/* FLEXIBILIDAD */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                <h5 className="text-green-300 font-bold mb-4 text-xl">FLEXIBILIDAD:</h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Aplausos del Colibrí": elevar alternadamente cada rodilla hasta la cintura, con golpe de palmas detrás de ellas.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Vórtice pendular": pies fijos y separados, brazos flexionados al costado del cuerpo, alternar rotación del torso hacia un lado, luego hacia el otro y luego hacia delante.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Toque cruzado": elevar alternadamente cada rodilla hasta la cintura, tocando rodilla y mano opuesta a la altura del pecho.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Sembrando movimiento": pies fijos y separados, alternando torso erguido-inclinado-erguido. Manos levantadas por encima de la cabeza, bajan alternadamente a tocar la punta del pie contrario, en cada inclinación.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Incentivo a la Flexibilidad": piernas, brazos, cintura, torso y cabeza, todos en movimientos contantes, desestructurados y simultáneos.</p>
                  </div>
                </div>
              </div>

              {/* FUERZA */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
                <h5 className="text-blue-300 font-bold mb-4 text-xl">FUERZA:</h5>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Abandonar la silla": pararse y sentarse repetidamente desde una silla apoyada en la pared. Espalda y cabeza erguidas. Manos juntas al pecho al sentarse y al pararse.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Flexión Vertical": parado frente a encimera o mesa fija, apoya palmas y retira pies hacia atrás y al ancho de caderas. Flexiona codos llevando el pecho hacia adelante y luego empuja para volver a estirar los brazos.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Activador Zen": parado, baja y sube en posición de sentadilla, extendiendo brazos y juntando palmas a la altura del pecho. Espalda y cabeza erguidas (nunca inclinado hacia adelante).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Puente de Glúteos": omóplatos, cabeza y nuca apoyados en el piso. Brazos en el piso paralelos al cuerpo y Pies en el piso separados al ancho de cadera. Repetidamente, bajar y elevar cadera alineando cadera, rodillas y hombros.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Abdominal Supino": acostado boca arriba, brazos extendidos hacia arriba, y rodillas hacia arriba flexionadas a 90°. Pantorrillas quedan levantadas y paralelas al suelo. En cada repetición, sostener la posición 20 segundos y descansar 10 segundos.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200">"Reductor cintura": recostado de lado, con pierna de abajo flexionada. Pierna de arriba, sube y baja de costado. Completadas las repeticiones, recostarse al otro lado y repetir ejercicio.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
                <h5 className="text-yellow-300 font-bold mb-2">Actividad Diaria:</h5>
                <p className="text-gray-200">Ver Calendario de Entrenamiento en F88</p>
                <p className="text-yellow-200 font-semibold mt-2">Comparte a diario con tu mentor F88 "el check" de tu actividad realizada.</p>
              </div>
            </div>
          </section>

          {/* Compañeros inseparables */}
          <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h4 className="text-2xl font-bold text-white mb-6">Compañeros inseparables de la Actividad Física:</h4>

            <div className="space-y-6">
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6">
                <h5 className="text-orange-300 font-bold mb-3">Nutrición de calidad:</h5>
                <p className="text-gray-200 mb-3">Es simple: más agua, más proteínas de calidad (carnes magras, pescado, huevo), más grasas saludables (frutos secos, aguacate, aceite coco/oliva), y más carbohidratos simples y complejos (verduras, frutas, legumbres). Menos carbohidratos refinados (harina y arroz blanco, azúcar refinada).</p>
                <p className="text-orange-200 font-semibold">Recuerda: Mas de 90% de la Hormona de la FELICIDAD (SEROTONINA), se produce en tu intestino.</p>
                <p className="text-gray-200 mt-2">Ideal si acompañas tu nutrición con 12 horas o más (incluye horas de sueño) sin ingesta de alimentos.</p>
              </div>

              <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-6">
                <h5 className="text-indigo-300 font-bold mb-3">Sueño reparador:</h5>
                <p className="text-gray-200 mb-3">Es simple: Actividad Física + Nutrición de Calidad = Sueño reparador. El sueño sumado a la nutrición de calidad, son cruciales para la regeneración celular y hormonal.</p>
                <p className="text-indigo-200 font-semibold">Mentalmente mejora la memoria y función cognitiva. Emocionalmente, regula tu estado de ánimo y fomenta la estabilidad. Para el Carácter y la Voluntad, el sueño promueve la disciplina, la paciencia y la perseverancia.</p>
              </div>

              <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-6">
                <h5 className="text-teal-300 font-bold mb-3">Respiración Consciente:</h5>
                <p className="text-gray-200 mb-3">Un regalo "gratis" que debes hacerte a diario.!</p>
                <p className="text-gray-200">Simplemente sentado (no acostado), cierra los ojos y presta atención (observa) tu respiración.</p>
                <p className="text-teal-200 font-semibold mt-2">10 minutos diarios hacen una "enorme" diferencia.!</p>
                <p className="text-gray-200">Comparte a diario con tu mentor F88 "el check" de tu Respiración Consciente.</p>
                <p className="text-teal-200 font-semibold mt-2">Recuerda: Sueño reparador + Respiración Consciente = menor Hormona del ESTRÉS (CORTISOL).</p>
              </div>
            </div>
          </section>

          {/* Enemigos a Eliminar */}
          <section className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
            <h4 className="text-red-300 font-bold text-xl mb-4">Enemigos a Eliminar:</h4>
            <p className="text-gray-200">reflexiona sobre que "Enemigos" te acompañan actualmente, y deberías eliminar al iniciar estos 88 días: ¿exceso de azúcar/harina refinada?, ¿exceso de alcohol, tabaco?, ¿uso del celular/pantalla al dormir?, ¿pocas horas de sueño?, ¿otros?.</p>
          </section>

          {/* Paso 3 */}
          <section className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-3xl font-bold text-purple-300">TRIUNFA</h3>
            </div>
            <h4 className="text-2xl font-semibold text-white mb-4">— Mensaje de tu "Yo del Futuro"</h4>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Hace 88 días iniciaste la primera etapa de un nuevo camino, elegiste cambiar. Quizás empezaste con dudas, con la pregunta de si podrías mantenerte constante y cumplir tu Misogi. Y sin darte cuenta, día tras día, fuiste sumando tiempo, frecuencia, y construyendo tu nuevo hábito. Hoy miras hacia atrás y sonríes con la satisfacción de haber cumplido tu Misogi, y haber incorporado tus nuevos hábitos saludables. Hoy tu cuerpo responde con más fuerza, tu energía es contagiosa, y lo mejor es que el movimiento se ha vuelto tan natural como respirar.
            </p>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6 mb-6">
              <h5 className="text-purple-300 font-bold mb-2">Lección:</h5>
              <p className="text-gray-200">
                El verdadero triunfo no es solo completar la primera etapa del programa F88, sino haber convertido la actividad física y sus "compañeros inseparables"; en parte de tu nueva identidad. Cuando ves y sientes los beneficios, tu mente deja de buscar excusas y empieza a ver nuevas oportunidades. La fortaleza física y la constancia que desarrollaste, son más que fuerza o resistencia; son confianza y orgullo por lo que eres capaz de lograr. Cada hábito que adoptaste —ejercitar, nutrirte con calidad, dormir adecuadamente, respiración consciente — son piezas claves de tu nueva identidad.
              </p>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              No te detengas aquí. Haz de la actividad física y sus "compañeros inseparables" sean hábitos irrenunciables. Permite que otros reconozcan en ti no solo el cambio físico, sino la actitud y fortaleza que ahora te definen.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
              <h5 className="text-blue-300 font-bold mb-2">Actividad:</h5>
              <p className="text-gray-200">Comparte con tu mentor F88 y con una persona de tu confianza, una descripción de como ya decidiste ser hoy. Y que tu yo dentro de 88 días nos diga como lo lograste.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FlipbookInitialPage;