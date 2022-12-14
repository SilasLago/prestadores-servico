export class Line {

    private _aside: JSX.Element | undefined;
    private _className: string | undefined;
    private _functions: Functions | undefined;

    constructor(functions?: Functions, className?: string, aside?: JSX.Element) {
        if(aside) {
            this._aside = aside;
        }
        if(className) {
            this._className = className;
        }
        if(functions) {
            this._functions = functions;
        }
    }

    public get functions() {
        return this._functions;
    }

    public get className() {
        return this._className;
    }

    public get aside() {
        return this._aside;
    }

    public defineValue(value: any): Line {
        Object.defineProperty(this, this.createPropertyKey(), {
            value: value,
            writable: false,
        });
        return this;
    }

    public defineProperty(key: string, value: any): Line {
        Object.defineProperty(this, key, {
            value: value,
            writable: false,
            get: () => value
        })
        return this;
    }

    public getValue(property: string): any {
        const curClass: any = this;
        const curPropertyValue = curClass[property];
        return curPropertyValue;
    }

    public getValidProperties(): Array<any> {
        
        function isPrivate(property: string): boolean {
            return property.slice(0, 1) === "_";
        }

        function validProperty(property: string): boolean {
            return property !== "aside" && property !== "functions" && property !== "className";
        }
        
        const validProperties = Object.getOwnPropertyNames(this).filter(property => {
            return !isPrivate(property) && validProperty(property) ? property : false;
        
        })
        return validProperties
    }

    private createPropertyKey(): string {
        const chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_";
        const propertyLength: number = 10;
        let newProperty: string = "";

        for(let i = 0; i < propertyLength; i++) {
            const randomCharIndex = Math.floor(Math.random() * chars.length);
            newProperty += chars.slice(randomCharIndex, randomCharIndex + 1);
        }

        return newProperty;
    }

}

class Functions {

    private _onClick: Function | undefined;

    constructor(onClick?: Function) {
        if(onClick) {
            this._onClick = onClick;
        }
    }

    public get onClick() {
        return this._onClick;
    }

    public defineFunction(key: string, value: Function): Functions {
        Object.defineProperty(this, key, {
            value: value,
            writable: false
        })
        return this;
    }

}