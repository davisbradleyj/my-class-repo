function paths(n) {
  // solve
  // 4 * 3 * 2 * 1
  // think recursive solution
  if (n>1) return n * paths(n-1)
  return 1
}