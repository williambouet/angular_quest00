export class User {
    lastname: string;
    firstname: string;
    quote: string | undefined;
    age: number;
    avatar: string | undefined;

    constructor(
        firstname: string,
        lastname: string,
        age: number,
        quote: string="",
        avatar: string = ""
    ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.quote = quote;
        this.avatar = avatar;
    }

}
