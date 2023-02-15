export class User {
    private _firstname: string;
    private _lastname: string;
    private _age: number;
    public quote: string | undefined;
    private _avatar: string | undefined;

    constructor(
        firstname: string,
        lastname: string,
        age: number,
        quote: string = "",
        avatar: string = ""
    ) {
    
        this._firstname = firstname;
        this._lastname = lastname;
        this._age = age;
        this.quote = quote;
        this._avatar = avatar;
    }
    
    public getFirstname(): string
    {
        return this._firstname;
    }

    public getLastname(): string
    {
        return this._lastname;
    }

    public getAge(): number
    {
        return this._age;
    }

    public getQuote(): string | undefined
    {
        return this.quote;
    }

    public setQuote(quote: string | undefined): void
    {
        this.quote = quote;
    }

    public getAvatar(): string | undefined
    {
        return this._avatar;
    }



}
