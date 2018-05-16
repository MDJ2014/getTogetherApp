export class IPlan{


    constructor(
       public id: string,
        public name: string,
        public image_url: string,
        public review_count: number,
        public title: string,
        public rating: number,
        public price: string,
        public address1: string,
        public city: string,
        public state: string,
        public zip_code: string,
        public display_phone: string,
        public latitude: number,
        public longitude: number,
        public url?: string,
        public  planId?: string,
        public user?: string,
        public month?: string,
        public day?: string,
        public year?: string,
        public time?: string,
        public ampm?: string,
        public  rsvps?:[{name: string;}]
    ){}
}



// public locId: string,
// public locImg: string,
// public locUrl: string,
// public alt: string,
// public locName: string,
// public desc: string,
// public  rating: string,
// public price: string,
// public locAdd: string,
// public locCity: string,
// public locPhone: string,
// public long: string,
// public  lat: string,
// public  planId?: string,
// public user?: string,
// public planDate?: string,
// public planTime?: string,
// public  rsvps?:[{name: string;}]