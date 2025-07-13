export function useCheckoutShippingInfoFormData() {
  return useState('checkoutShippingInfoFormData', () => ({
    firstName: 'Skullmasher',
    lastName: 'Heartless',
    address: '14 Rue de Rivoli',
    postalCode: '75004',
    city: 'Paris',
    country: 'France',
    email: 'topkek@topkek.com',
    phone: '06 66 42 42 42',
  }))
}
