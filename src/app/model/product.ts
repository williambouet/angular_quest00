export class Product {
    constructor(
        public id: number,
        public name: string,
        public promo: boolean,
        public price?: number,
    ) {}

}
