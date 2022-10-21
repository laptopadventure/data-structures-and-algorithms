
export function firstRepeatingWord(string: string) {
  const seen = new Map<string, boolean>()
  for(let word of string.split(/\W+/gm)) {
    word = word.toLowerCase()
    if(seen.get(word)) {
      return word;
    }
    seen.set(word, true);
  }
  return ""
}
