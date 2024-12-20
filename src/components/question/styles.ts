import { colors } from '@/styles/colors'

export const questionStyles = {
  header: {
    backgroundColor: colors.primary,
  },
  button: {
    active: {
      backgroundColor: colors.primary,
      color: '#ffffff',
      border: 'transparent',
    },
    inactive: {
      backgroundColor: '#ffffff',
      color: colors.primary,
      border: colors.primary,
    },
  },
  explanation: {
    backgroundColor: `${colors.primary}05`,
    borderColor: `${colors.primary}20`,
  },
} as const