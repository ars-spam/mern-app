const ensureAuthenticated = require('../Middlewares/Auth');
const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F13%2Fd4%2F13d4f10fb42c97414ad7f15d1a2eb54db4f85c61.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            name: "T-shirt",
            price: 500,
            description: "A comfortable cotton T-shirt available in various colors."
        },
        {
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F11%2Ff1%2F11f1da0f4ffb3bda9564e09473484288ffbe29c5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            name: "Jeans",
            price: 1200,
            description: "Classic blue jeans made from high-quality denim."
        },
        {
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6f%2F2d%2F6f2d8c70564d8ae8c96c934ba875a08457645ae3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            name: "Jacket",
            price: 3000,
            description: "A stylish jacket perfect for cool weather. Made from premium materials."
        },
        {
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F42%2F57%2F4257e075b730575116ff91d27f8f61bb9f3954d1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            name: "Sneakers",
            price: 2500,
            description: "Trendy sneakers with excellent grip and comfort."
        },
        {
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcc%2Fb1%2Fccb16c61194846c8dd3561113b8a153f6600ba91.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            name: "Cap",
            price: 300,
            description: "A fashionable cap to keep the sun out of your eyes."
        },
        {
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc4%2F44%2Fc444a0536e781e1142a3edda112f27214f27a8d4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            name: "Scarf",
            price: 400,
            description: "A warm and cozy scarf to add style and comfort."
        },
        {
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F81%2Ffe%2F81fe4b6b0de53553e7ba63a80bfe053f944d9196.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            name: "Sweater",
            price: 1800,
            description: "A knitted sweater that’s both warm and stylish."
        },
        {
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F96%2F23%2F9623b07e7393c9967ce09777ca4fcc724f0c5153.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            name: "Skirt",
            price: 1000,
            description: "A chic skirt that’s perfect for various occasions."
        },
        {
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1e%2Fe5%2F1ee514ecba304ddc36df47ecf79220a2ae4d7107.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_shirtsblouses_blouses%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            name: "Blouse",
            price: 700,
            description: "An elegant blouse that’s great for both casual and formal settings."
        },
        {
            image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F03%2Ffa%2F03fae54c1c46f35a89705f4f4fc6c9de4376db3c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
            name: "Dress",
            price: 1500,
            description: "A beautiful dress that’s perfect for any special event."
        }
    ]);
});

module.exports = router;
