import styled from '@emotion/styled'
import { colors, Colors } from '@styles/colorPalette'

const Tag = styled.span<{ color?: string; backgroundColor?: string }>(
  ({ color = colors.white, backgroundColor = colors.blue }) => ({
    fontSize: '11px',
    padding: '4px 5px',
    fontWeight: 'bold',
    borderRadius: '2px',
    textAlign: 'center',
    color: color in colors ? colors[color as Colors] : color,
    backgroundColor:
      backgroundColor in colors
        ? colors[backgroundColor as Colors]
        : backgroundColor,
  }),
)

export default Tag
