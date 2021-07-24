import styles from './styles.module.sass'

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type='button' className={styles.subscribeButton}>
      Subscribe now
    </button>
  )
}
