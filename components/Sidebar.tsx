
import React from 'react';
import { MODULES, RESOURCES } from '../data/courseContent';

interface SidebarProps {
  activeLessonId: string;
  onSelectLesson: (id: string) => void;
  activeTab: 'outline' | 'resources';
  setActiveTab: (tab: 'outline' | 'resources') => void;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeLessonId, onSelectLesson, activeTab, setActiveTab, onClose }) => {
  const allLessons = MODULES.flatMap(m => m.lessons);
  const activeIndex = allLessons.findIndex(l => l.id === activeLessonId);
  const progress = Math.round(((activeIndex + 1) / allLessons.length) * 100);

  return (
    <aside className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Header del Sidebar con botón de cierre interno: Flecha a la izquierda */}
      <div className="p-5 flex items-center justify-between border-b bg-gray-50/50">
        <div className="flex items-center gap-2">
          <i className="fas fa-bible text-[#8B4513]"></i>
          <span className="font-bold text-[#8B4513] text-lg tracking-tight">PENTATEUCO</span>
        </div>
        
        {/* Flecha de cierre situada a la derecha del título */}
        <button 
          onClick={onClose}
          className="p-2 w-10 h-10 rounded-xl bg-white text-gray-400 hover:text-[#8B4513] hover:bg-[#8B4513]/10 transition-all flex items-center justify-center shadow-sm border border-gray-100"
          title="Ocultar menú"
        >
          <i className="fas fa-chevron-left text-lg"></i>
        </button>
      </div>

      <div className="flex border-b bg-white">
        <button 
          onClick={() => setActiveTab('outline')}
          className={`flex-1 py-4 text-center font-semibold text-sm transition-all duration-300 ${activeTab === 'outline' ? 'border-b-4 border-[#8B4513] text-[#8B4513]' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <i className="fas fa-list-ol mr-2"></i> Contenido
        </button>
        <button 
          onClick={() => setActiveTab('resources')}
          className={`flex-1 py-4 text-center font-semibold text-sm transition-all duration-300 ${activeTab === 'resources' ? 'border-b-4 border-[#8B4513] text-[#8B4513]' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <i className="fas fa-file-alt mr-2"></i> Recursos
        </button>
      </div>

      <div className="flex-1 overflow-y-auto sidebar-scroll p-4 space-y-6">
        {activeTab === 'outline' ? (
          <>
            <div className="bg-[#8B4513]/5 p-5 rounded-2xl border border-[#8B4513]/10">
              <div className="flex justify-between items-center text-xs font-bold text-[#8B4513] mb-3">
                <span className="uppercase">Tu Avance</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#CD853F] to-[#8B4513] transition-all duration-1000" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {MODULES.map((module) => (
              <div key={module.id} className="space-y-3">
                <div className="flex items-center gap-2 text-[#8B4513] font-bold text-xs uppercase tracking-widest pl-2">
                  <i className="fas fa-bookmark text-[10px]"></i> {module.title}
                </div>
                <div className="space-y-2">
                  {module.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => onSelectLesson(lesson.id)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group flex items-center gap-4 border ${
                        activeLessonId === lesson.id 
                          ? 'bg-white border-[#8B4513] shadow-md shadow-[#8B4513]/5 translate-x-1' 
                          : 'bg-white border-transparent hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        activeLessonId === lesson.id ? 'bg-[#8B4513] text-white' : 'bg-[#CD853F]/10 text-[#CD853F]'
                      }`}>
                        <i className={`fas ${lesson.icon} text-sm`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-sm font-semibold truncate transition-colors ${activeLessonId === lesson.id ? 'text-[#8B4513]' : 'text-gray-700'}`}>
                          {lesson.title}
                        </h4>
                        <div className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                          <i className="far fa-clock"></i> {lesson.duration}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-800 px-2 uppercase tracking-widest">Descargas y Enlaces</h3>
            {RESOURCES.map((resource, idx) => (
              <a 
                key={idx} 
                href={resource.link} 
                target="_blank" 
                rel="noreferrer"
                className="block p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#CD853F] hover:shadow-lg transition-all group"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-[#CD853F]/10 rounded-xl flex items-center justify-center text-[#CD853F] group-hover:bg-[#CD853F] group-hover:text-white transition-colors">
                    <i className={`fas ${resource.icon} text-xl`}></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-800 leading-tight text-sm truncate">{resource.title}</h4>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">{resource.type} • {resource.meta}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-4 bg-gray-50 border-t text-center">
        <p className="text-[10px] text-gray-400 font-medium">LTS BibleConnect v2.5</p>
      </div>
    </aside>
  );
};
