export function getToken() {
  const arr = ['a','b','c','d','e','f','g','h','i','j','k','l',
      'm','n','o','p','q','r','s','t','u','v','w','x','y','z', 1,2,3,4,5,6,7,8,9,0]
  arr.sort(() => Math.random() - 0.5)
  return arr.join('')
}

export function getKeys() {
  const arr = ['a','b','c','d','e','f','g','h','i','j','k','l',
      'm','n','o','p','q','r','s','t','u','v','w','x','y','z', 1,2,3,4,5,6,7,8,9,0]
  arr.sort(() => Math.random() - 0.5)
  return arr.join('')
}