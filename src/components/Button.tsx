import { PlusCircle } from '@phosphor-icons/react'
import styles from './Button.module.css'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...rest }: Props) {
  return (
    <button className={styles.container} {...rest}>
      Criar
      <PlusCircle size={16} color="#f2f2f2" weight="bold" />
    </button>
  )
}