import { LinkProps } from 'next/link'
import { ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string
}
