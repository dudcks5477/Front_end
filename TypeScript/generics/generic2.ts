function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>('Chan', 24);
helloBasic(24, 3);