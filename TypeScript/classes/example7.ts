// class => object
// {chan: 'male', seock: 'male'}
// {joo: 'female', kim: 'male', park: 'female'}

class Students {
  [index: string] : 'male' | 'female';

  chan: 'male' = 'male';
}

const a = new Students();
a.chan = 'male';
a.seock = 'male';

console.log(a);

const b = new Students();
b.joo = 'female';
b.kim = 'male';
b.park = 'female';

console.log(b);