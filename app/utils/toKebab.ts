export default function toKebab(str: string, delimiter = ' ') {
  return str.toLowerCase().split(delimiter).join('-')
}
