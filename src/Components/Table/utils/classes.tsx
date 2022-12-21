export class Line {

    private _aside: JSX.Element | undefined;
    private _className: string | undefined;
    private _functions: Functions | undefined;

    constructor(functions?: Functions, className?: string, aside?: JSX.Element, ...values: Array<JSX.Element | string | number>) {
        if(aside) {
            this._aside = aside;
        }
        if(className) {
            this._className = className;
        }
        if(functions) {
            this._functions = functions;
        }
        if(values) {
            for (const value of values) {
                this.defineValue(value);
            }
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

    public defineValue(value: JSX.Element | string | number): void {
        Object.defineProperty(this, this.createPropertyKey(), {
            value: value,
            writable: false,
        });
    }

    public defineProperty(key: string, value: any): void {
        Object.defineProperty(this, key, {
            value: value,
            writable: false,
            get: () => value
        })
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

        const curClass: any = this;
        let propertyExists = false;
        do {
            for(let i = 0; i < propertyLength; i++) {
                const randomCharIndex = Math.floor(Math.random() * chars.length);
                newProperty += chars.slice(randomCharIndex, randomCharIndex + 1);
            }
            propertyExists = curClass[newProperty] !== undefined;
        } while(propertyExists);
        
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