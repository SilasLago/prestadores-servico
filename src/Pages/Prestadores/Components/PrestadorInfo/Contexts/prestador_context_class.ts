import React, { MouseEventHandler } from "react";

export class ActionsPrestadorData {

    private _idPrestador: number | undefined;
    private _onClose: MouseEventHandler<HTMLDivElement> | undefined;

    constructor(onClose?: MouseEventHandler<HTMLDivElement>, idPrestador?: number) {
        if(onClose) {
            this._onClose = onClose;
        }
        if(idPrestador) {
            this._idPrestador = idPrestador;
        }
    }

    public get idPrestador() {
        return this._idPrestador;
    }

    public onClose() {
        if(this._onClose) {
            this._onClose({} as React.MouseEvent<HTMLDivElement, MouseEvent>);
        }
    }

    public setOnClose(onClose: MouseEventHandler<HTMLDivElement>) {
        this._onClose = onClose;
    }

    public setId(idPrestador: number) {
        this._idPrestador = idPrestador;
    }

}