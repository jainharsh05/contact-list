function* generateKey() {
  let iterationCount = 0;
  while (true) {
    yield iterationCount++;
  }
}

export const uniqueKey = generateKey();
