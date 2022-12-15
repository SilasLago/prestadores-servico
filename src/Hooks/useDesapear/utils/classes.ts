export class DesapearData {
    constructor(
        public readonly value: boolean,
        public readonly update: (desapear: boolean) => void
    ) {}
}