import { Platform } from 'react-native';

export const COLORS = {
  pitch: '#1E5631',   // Rasengrün
  pitchDark: '#143D22',
  chalk: '#F5F3EC',   // Kreide-Weiss (Hintergrund)
  ink: '#14231B',     // fast Schwarz (Text)
  muted: '#6B7A70',   // grau-grün (Nebentext)
  line: '#D9D4C5',    // feine Linien
  card: '#FFFFFF',
};

export const MONO = Platform.select({ ios: 'Menlo', default: 'monospace' });
