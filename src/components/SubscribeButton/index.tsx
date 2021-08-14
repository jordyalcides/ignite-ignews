import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.sass'

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()
  const router = useRouter()

  async function handleSubscribe() {

    if (!session) {
      signIn('github')
      return
    }

    if(session.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const {
        data: { sessionId },
      } = await api.post('/subscribe')
      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <button
      type='button'
      className={styles.subscribeButton}
      onClick={handleSubscribe}>
      Subscribe now
    </button>
  )
}
