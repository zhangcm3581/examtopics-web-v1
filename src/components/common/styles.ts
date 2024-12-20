import { colors } from '@/styles/colors'

export const paginationStyles = {
  button: {
    active: {
      color: '#fff',
      backgroundColor: colors.success,
      borderColor: colors.success,
    },
    disabled: {
      backgroundColor: colors.gray[100],
      borderColor: colors.gray[200],
      color: colors.gray[600],
      cursor: 'not-allowed',
      opacity: '0.65',
    },
  },
} as const