export function useCheckoutUserFormData() {
  return useState('checkoutUserFormData', () => ({
    firstName: 'Skullmasher',
    lastName: 'Heartless',
    address: '2 rue Saint-Jean Nancy',
    postalCode: '54000',
    city: 'Nancy',
    country: 'France',
    email: 'muse_flo@hotmail.fr',
    phone: '',
  }))
}
