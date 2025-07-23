export function useStateCheckoutShippingRates() {
  return useState('checkoutShippingRates', () => 'STANDARD')
}
