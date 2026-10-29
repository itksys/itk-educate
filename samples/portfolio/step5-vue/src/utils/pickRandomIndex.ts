// 0〜(length - 1) のどれかの番号を、ランダムに選ぶ
export function pickRandomIndex(length: number): number {
  return Math.floor(Math.random() * length)
}
