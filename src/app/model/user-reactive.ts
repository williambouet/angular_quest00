export class UserReactive {
    username: string | undefined;
    email: string | undefined;
    password: string | undefined;
    street : string | undefined;
    zipcode : string | undefined;
    city: string | undefined;

    constructor(
        username: string,
        email: string,
        password: string,
        street: string="",
        zipcode: string = "",
        city: string = ""
    ) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.street = street;
        this.zipcode = zipcode;
        this.city = city;
    }

}
