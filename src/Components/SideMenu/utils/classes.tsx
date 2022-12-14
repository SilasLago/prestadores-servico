export class SideMenuButton {

    private _selected: boolean = false;

    constructor(
        public readonly name: string,
        public readonly options: Array<string>,
        public readonly img: string,
        selected?: boolean
    ) {
        if(selected) {
            this._selected = selected;
        }
    }

    get selected() {
        return this._selected;
    }

    public setSelected(isSelected: boolean) {
        this._selected = isSelected;
    }

}