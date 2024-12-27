export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= b + a) {
      throw new Error(`sides ${a}, ${b} and ${c} can not form a triangle`);
    }
  }

  getArea(): number {
    const s = (1 / 2) * (this.a + this.b + this.c);

    return (
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error(`Radius must be more than 0`);
    }
  }

  getArea(): number {
    return Math.round(Math.PI * Math.pow(this.a, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(`Width and height must be more than 0`);
    }
  }

  getArea(): number {
    return Math.round(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
