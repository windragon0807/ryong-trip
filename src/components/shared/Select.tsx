import { forwardRef, SelectHTMLAttributes } from 'react'
import styled from '@emotion/styled'

import Flex from './Flex'
import Text from './Text'
import { colors } from '@styles/colorPalette'

const BaseSelect = styled.select`
  height: 52px;
  border: 1px solid ${colors.gray};
  border-radius: 6px;
  padding: 0 16px;
  cursor: pointer;
  &:required:invalid {
    color: #c0c4c7;
  }
`
export interface Option {
  label: string
  value: string | number | undefined
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  options: Option[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { label, options, placeholder, value, ...props },
  ref,
) {
  return (
    <Flex direction="column">
      {label ? (
        <Text
          typography="t7"
          color="black"
          display="inline-block"
          css={{ marginBottom: 6 }}>
          {label}
        </Text>
      ) : null}
      <BaseSelect required ref={ref} value={value} {...props}>
        <option disabled hidden value="">
          {placeholder}
        </option>
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </BaseSelect>
    </Flex>
  )
})

export default Select
