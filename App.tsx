
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { BlockRenderer } from './components/InteractiveBlocks';
import { MODULES } from './data/courseContent';
import { Lesson } from './types';

const App: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState('lesson1'); 
  const [activeTab, setActiveTab] = useState<'outline' | 'resources'>('outline');
  const [lesson, setLesson] = useState<Lesson | null>(null);
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const allLessons = MODULES.flatMap(m => m.lessons);
    const found = allLessons.find(l => l.id === activeLessonId);
    if (found) {
      setLesson(found);
      const mainElement = document.querySelector('main');
      if (mainElement) mainElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeLessonId]);

  const allLessons = MODULES.flatMap(m => m.lessons);
  const currentIdx = allLessons.findIndex(l => l.id === activeLessonId);
  const isLastLesson = currentIdx === allLessons.length - 1;

  const handleNext = () => {
    if (isLastLesson) {
      setActiveLessonId(allLessons[0].id);
    } else {
      setActiveLessonId(allLessons[currentIdx + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) setActiveLessonId(allLessons[currentIdx - 1].id);
  };

  if (!lesson) return <div className="flex items-center justify-center h-screen"><i className="fas fa-spinner fa-spin text-4xl text-[#8B4513]"></i></div>;

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden relative">
      
      <div 
        className={`fixed inset-0 bg-black/60 z-30 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <div 
        className={`fixed lg:relative inset-y-0 left-0 z-40 transition-all duration-300 ease-in-out bg-white border-r overflow-hidden shadow-2xl lg:shadow-none ${
          isSidebarOpen ? 'w-80' : 'w-0 lg:w-0 -translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="w-80 h-full">
          <Sidebar 
            activeLessonId={activeLessonId} 
            onSelectLesson={(id) => {
              setActiveLessonId(id);
              if (window.innerWidth < 1024) setIsSidebarOpen(false);
            }} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>
      </div>

      {!isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-6 left-6 z-50 bg-[#8B4513] text-white w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-white/20"
          aria-label="Abrir menú"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      )}

      <main className="flex-1 overflow-y-auto relative scroll-smooth bg-[#f8faff]">
        
        <div className="relative h-[400px] md:h-[450px] w-full flex items-end">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url('${lesson.bannerImage}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513] via-[#8B4513]/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-6 md:px-12 pb-12 text-white max-w-5xl">
            <div className={`transition-all duration-500 ${!isSidebarOpen && window.innerWidth >= 1024 ? 'pl-16' : 'pl-0'}`}>
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold mb-4 opacity-90 uppercase tracking-[0.2em]">
                <span className="hidden sm:inline">Latin Theological Seminary</span>
                <i className="fas fa-chevron-right text-[8px] md:text-[10px] hidden sm:inline opacity-50"></i>
                <span>Pentateuco</span>
                <i className="fas fa-chevron-right text-[8px] md:text-[10px] opacity-50"></i>
                <span>Levítico - Clase 6</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl leading-[1.1]">
                {lesson.title}
              </h1>
              <p className="text-lg md:text-2xl opacity-90 font-light max-w-2xl drop-shadow-lg italic">
                {lesson.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 md:py-16 -mt-10 relative z-20">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-6 sm:p-10 md:p-16 border border-gray-100">
            {lesson.blocks.map((block, idx) => (
              <BlockRenderer key={idx} block={block} />
            ))}

            <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <button 
                onClick={handlePrev}
                disabled={currentIdx === 0}
                className={`w-full sm:w-auto font-bold transition-all flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 ${
                  currentIdx === 0 
                    ? 'text-gray-300 border-gray-100 cursor-not-allowed' 
                    : 'text-[#8B4513] border-[#8B4513]/20 hover:bg-[#8B4513]/5 active:scale-95'
                }`}
              >
                 <i className="fas fa-arrow-left"></i> Anterior
              </button>
              <button 
                onClick={handleNext}
                className={`w-full sm:w-auto bg-gradient-to-r from-[#CD853F] to-[#8B4513] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 hover:shadow-[#8B4513]/20 transition-all flex items-center justify-center gap-3 active:scale-95`}
              >
                {isLastLesson ? (
                  <>Reiniciar Curso <i className="fas fa-undo-alt"></i></>
                ) : (
                  <>Siguiente Lección <i className="fas fa-arrow-right"></i></>
                )}
              </button>
            </div>
          </div>
        </div>

        <footer className="py-16 text-center text-gray-400 text-sm px-4">
          <div className="flex justify-center gap-6 mb-6 opacity-30">
            <i className="fas fa-bible text-2xl"></i>
            <i className="fas fa-dove text-2xl"></i>
            <i className="fas fa-scroll text-2xl"></i>
          </div>
          <p className="font-medium tracking-wide">© 2025 Latin Theological Seminary</p>
          <p className="text-[10px] mt-1 uppercase tracking-tighter">Pentateuco / Clase 6 / Levítico</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
