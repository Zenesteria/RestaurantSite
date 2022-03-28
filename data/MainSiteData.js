const ShowcaseData = {
    index:0,
    id:'Showcase',
    title:'Get $90 off',
    caption:'Get $90 off across your first 4 deliveries + 1 free gift. Includes free shipping when you order today!',
    bg:"url('/images/mainbackdrop.jpg')",
    RegForm: {
        id:'Reg Form',
        promoCode:'12345678'
    }
}


const SubShowcaseData = {
    index:2,
    id:'Sub Showcase',
    showcases: [
        {
            id:'subshowcaseone',
            heading:'Easy & Convenient',
            caption:'Quick meal kits and premade meals, delivered to your door',
            bg:"/images/subimg1.jpg"
        },
        {
            id:'subshowcasetwo',
            heading:'The Best Quality',
            caption:'Enjoy organic fresh produce and clean ingredients. Proud certified organic handler.',
            bg:"/images/subimg2.png"
        },
        {
            id:'subshowcasethree',
            heading:'Meal Planning Made Easy',
            caption:'Put meal prepping on autopilot to eat well all week',
            bg:"/images/subimg3.jpg"
        },
    ]
}


const slidercontentdata = {
    index:3,
    id:'ItemSlider',
    heading:'On the Menu This Week',
    caption:'Dinners starting at $9.99 $5.99 per serving',
    status:true
}

const Banners = {
    index:4,
    id:'Banners',
    banners: [
        {
            id:'BannerOne',
            title:'A gift in your first box',
            caption:"Order today and you'll receive a free gift!",
            images: [
                "url('/images/bannerimg1.jpg')",
                "url('/images/bannerimg2.jpg')",
                "url('/images/bannerimg3.jpg')",
                "url('/images/bannerimg4.jpg')",
            ],
            bannerLinks:[]
        },
        {
            id:'BannerTwo',
            title:'Meal Delivery for Any Diet',
            caption:"Choose a home meal delivery plan for your taste, or mix and match any of our weekly recipes",
            images:[
                "url('/images/bannersecondimg1.jpg')",
                "url('/images/bannersecondimg2.jpg')",
                "url('/images/bannersecondimg3.jpg')",
            ],
            bannerLinks: [
                {
                    Name:'Paleo',
                    link:'/'
                },
                {
                    Name:'Vegeterian',
                    link:'/'
                },
                {
                    Name:'Gluten-Free',
                    link:'/'
                },
                {
                    Name:'Lean & Clean',
                    link:'/'
                },
                {
                    Name:'Carb-Conscious',
                    link:'/'
                },
                {
                    Name:'Mediterranean',
                    link:'/'
                },
                {
                    Name:'Diabetes Friendly',
                    link:'/'
                },
                {
                    Name:'Pescatarian',
                    link:'/'
                },
                {
                    Name:'Fresh & Ready',
                    link:'/'
                },
            ]
        }
    ]
}

const FeaturedShowcaseData = {
    index:5,
    id: 'FeaturedShowcase',
    title:'Choose Easy—or Easier',
    caption:"Meal Kits for when you want to get hands-on, Fresh & Ready meals when you don't. Choose one style or mix and match.",
    Showcases:[
        {
            showcaseId: 1,
            showcaseTitle: 'Meal Kits',
            bg:"url('/images/mainbackdrop.jpg')",
            showcasecaptions: [
                'Ready in 15-40 minutes',
                'Pre-measured ingredients arrive ready to cook',
                'Learn new skills while easily creating impressive meals'
            ]
        },
        {
            showcaseId: 2,
            showcaseTitle: 'Fresh & Ready',
            bg:"url('/images/mainbackdrop.jpg')",
            showcasecaptions: [
                'Premade and ready in as little as 4 minutes',
                'Arrives in a heat-safe tray, for microwave or oven',
                'Compostable tray means zero mess, zero cleanup'
            ]
        }
    ]
}



export {ShowcaseData, SubShowcaseData, Banners, slidercontentdata, FeaturedShowcaseData}