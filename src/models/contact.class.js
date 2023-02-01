export class ContactType {
    name = "";
    lastName = "";
    email = "";
    connected = false

    constructor(name, description, email, connected){
        this.name = name;
        this.description = description;
        this.email = email;
        this.connected = connected;
    }
}