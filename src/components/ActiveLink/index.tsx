import Link from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement } from 'react'
import { ActiveLinkProps } from './activeLink'


export function ActiveLink({ children, activeClassName, ...rest}: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href
    ? activeClassName
    : ''

  return (
    <Link {...rest} >
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}