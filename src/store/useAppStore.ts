import { create } from 'zustand';

export interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  span?: string;
}

interface AppState {
  theme: 'light' | 'dark';
  locale: 'id' | 'en';
  isMobileMenuOpen: boolean;
  selectedProject: Project | null;
  setTheme: (theme: 'light' | 'dark') => void;
  setLocale: (locale: 'id' | 'en') => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  setSelectedProject: (project: Project | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  locale: 'en',
  isMobileMenuOpen: false,
  selectedProject: null,
  setTheme: (theme) => set({ theme }),
  setLocale: (locale) => set({ locale }),
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  setSelectedProject: (project) => set({ selectedProject: project }),
}));
