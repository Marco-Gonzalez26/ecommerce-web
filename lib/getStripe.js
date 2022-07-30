import { loadStripe } from "@stripe/stripe-js";
import { NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY } from "no-commit";
let stripePromise;

const getStripe = () => {
  const key  = process.env.NODE_ENV === 'development' ? NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  if(!stripePromise) {
    stripePromise = loadStripe(key)
  }

  return stripePromise
}

export default getStripe