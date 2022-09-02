import uppercaseFirstLetter from '@/helpers/uppercaseFirstLetter.js'

export default (path) => {
  const pathArr = path.split('/').reverse()
  const pathArrUppercase = pathArr.map((string) =>
    string.includes('-')
      ? string.split('-').join(' ')
      : uppercaseFirstLetter(string)
  )

  return pathArrUppercase.join(' | ')
}
