interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: '찬쌤',
  city: '남양주',
};

HTMLDivElement