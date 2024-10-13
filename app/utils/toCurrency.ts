export default function toCurrency(value: number | string, lang = 'fr-FR', currency = 'EUR') {
  return new Intl.NumberFormat(lang, { style: 'currency', currency }).format(
    value,
  )
}
