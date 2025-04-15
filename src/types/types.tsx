export interface JSONData {
    About: About;
    Gallery: Gallery[];
    Services: Service[];
    Contact: Contact;
    Cangorosa: Cangorosa;
    BlaBla: BlaBla;
}

export interface About {
    paragraph: string;
    another: string;
    Why: string[];
    Why2: string[];
}

export interface Contact {
    address: string;
    phone: string;
    email: string;
    facebook: string;
    instagram: string;
}

export interface Gallery {
    title: string;
    largeImage: string;
    smallImage: string;
}

export interface Service {
    images: string[];
    name: string;
    type: string;
    text: string;
    time?: number;
}

export interface Cangorosa {
    title: string;
    text1: string;
    text2: string;
}

export interface BlaBla {
    title: string;
    text1: string;
    text2: string;
}
