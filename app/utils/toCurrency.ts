type Value = number | string

export default function toCurrency(value: Value, lang = 'fr-FR', currency = 'EUR') {
  return new Intl.NumberFormat(lang, { style: 'currency', currency }).format(
    value,
  )
}
