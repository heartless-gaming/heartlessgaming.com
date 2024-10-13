export default function formatCurrency(number: number, lang = 'fr-FR', currency = 'EUR') {
  return new Intl.NumberFormat(lang, { style: 'currency', currency }).format(
    number,
  )
}
