const db = require('./models');

const products = [
    //NORMAL -- All Routines
    {
        name: "Youth To The People Superfood Antioxidant Cleanser", 
        type: "Cleanser",
        image: "https://www.sephora.com/productimages/sku/s1863588-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583" , 
        link: "https://www.sephora.com/product/kale-spinach-green-tea-age-prevention-cleanser-P411387?icid2=products%20grid:p411387:product",
        skin_type: ["Normal"]
    },
    {
        name: "The Ordinary Squalene Cleanser", 
        type:"Cleanser",
        image: "https://www.sephora.com/productimages/sku/s2238988-main-zoom.jpg?imwidth=583", 
        link: "https://www.sephora.com/product/the-ordinary-squalane-cleanser-P444718?skuId=2238988&icid2=products%20grid:p444718:product",
        skin_type: ["Normal"]
    },
    {
        name: "Milk Makeup Vegan Milk Moisturizer", 
        type:"Moisturizer",
        image: "https://www.sephora.com/productimages/sku/s2306108-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/milk-makeup-vegan-milk-moisturizer-P453253?icid2=use%20it%20with:p453253:product",
        skin_type: ["Normal", "Dry"]
    },    
    {
        name: "Tatcha Water Cream", 
        type:"Moisturizer",
        image: "https://www.sephora.com/productimages/sku/s1932920-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/the-water-cream-P418218",
        skin_type: ["Normal", "Combination"]
    },
    {
        name: "Clinique Broad Spectrum Sunscreen", 
        type:"Sunscreen",
        image: "https://www.sephora.com/productimages/sku/s1809383-main-zoom.jpg?imwidth=583", 
        link: "https://www.sephora.com/product/broad-spectrum-spf-50-mineral-sunscreen-fluid-for-face-P410101?icid2=products%20grid:p410101:product",
        skin_type: ["Normal", "Oily"]
    },
    {
        name: "Biossance Sunscreen", 
        type:"Sunscreen",
        image: "https://www.sephora.com/productimages/sku/s2347789-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/biossance-squalane-zinc-sheer-mineral-sunscreen-spf-30-pa-P456410?icid2=products%20grid:p456410:product",
        skin_type: ["Normal", "Dry"]
    },


    //DRY -- All Routines
    {
        name: "First Aid Beauty Pure Skin Face Cleanser", 
        type:"Cleanser",
        image: "https://www.sephora.com/productimages/sku/s1217710-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/face-cleanser-P248404?icid2=products%20grid:p248404:product",
        skin_type: ["Dry"]
    },
    {
        name: "Milk Makeup Vegan Milk Cleanser", 
        type:"Cleanser",
        image: "https://www.sephora.com/productimages/sku/s2306330-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/milk-makeup-vegan-milk-cleanser-P456126?icid2=products%20grid:p456126:product",
        skin_type: ["Dry"]
    },    
    {
        name: "First Aid Beauty Ultra Repair Cream", 
        type: "Moisturizer",
        image: "https://www.sephora.com/productimages/sku/s1309590-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/ultra-repair-cream-intense-hydration-P248407",
        skin_type: ["Dry"]
    },
    {
        name: "Farmacy Mineral Sunscreen", 
        type:"Sunscreen",
        image: "https://www.sephora.com/productimages/sku/s2268779-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/green-defense-daily-mineral-sunscreen-P449188?icid2=products%20grid:p449188:product",
        skin_type: ["Dry"]
    },

 

    //OILY -- All Routines
    {
        name: "Clinique Foaming Cleanser", 
        type:"Cleanser",
        image: "https://www.sephora.com/productimages/sku/s47860-main-zoom.jpg?imwidth=583", 
        link: "https://www.sephora.com/product/rinse-off-foaming-cleanser-P122762?icid2=products%20grid:p122762:product",
        skin_type: ["Oily"]
    },
    {
        name: "Olehenriksen Foaming Cleanser", 
        type:"Cleanser",
        image: "https://www.sephora.com/productimages/sku/s1910413-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/the-clean-truth-foaming-cleanser-P211343?icid2=products%20grid:p211343:product",
        skin_type: ["Oily"]
    },    
    {
        name: "Farmacy Oil-Free Gel", 
        type: "Moisturizer",
        image: "https://www.sephora.com/productimages/sku/s2327989-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/farmacy-daily-greens-oil-free-gel-moisturizer-with-moringa-papaya-P458209?icid2=products%20grid:p458209",
        skin_type: ["Oily"]
    },
    {
        name: "Supergoop! Mattescreen Sunscreen", 
        type: "Sunscreen",
        image: "https://www.sephora.com/productimages/sku/s2140002-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/100-mineral-smooth-poreless-matte-screen-spf-40-P434558",
        skin_type: ["Oily", "Combination"]
    },


    //COMBINATION -- All Routines
    {
        name: "The Inkey List Salicylic Acid Cleanser", 
        type: "Cleanser",
        image: "https://www.sephora.com/productimages/sku/s2211605-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/salicylic-acid-cleanser-P443833?icid2=products%20grid:p443833:product",
        skin_type: ["Combination"]
    },
    {
        name: "Tatcha Deep Cleanse Exfolating Cleanser", 
        type:"Cleanser",
        image: "https://www.sephora.com/productimages/sku/s2023646-main-zoom.jpg?pb=2020-03-allure-best-2019&imwidth=583", 
        link: "https://www.sephora.com/product/the-deep-cleanse-P427536?skuId=2023646&icid2=products%20grid:p427536:product",
        skin_type: ["Combination"]
    },    
    {
        name: "First Aid Beauty Oil-Control Moisturizer", 
        type: "Moisturizer",
        image: "https://www.sephora.com/productimages/sku/s2339513-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=583", 
        link: "https://www.sephora.com/product/first-aid-beauty-ultra-repair-oil-control-moisturizer-P455894",
        skin_type: ["Oily", "Combination"]
    },
    {
        name: "Innisfree Daily Sunscreen", 
        type: "Sunscreen",
        image: "https://www.sephora.com/productimages/sku/s2338325-main-zoom.jpg?imwidth=583", 
        link: "https://www.sephora.com/product/innisfree-daily-uv-defense-sunscreen-spf-36-P456392?icid2=products%20grid:p456392:product",
        skin_type: ["Combination"]
    },
    
]

// // Delete All Products
console.log('Deleting all products');

db.Products.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  console.log(`Successfully deleted ${result.deletedCount} products.`);
  console.log('Creating new products...');

  db.Products.create(products, (err, newProducts) => {
    if (err) {
      console.log(err);
      process.exit();
    }

    console.log(`Successfully created ${newProducts.length} products.`);
    process.exit();
  });
}); //works!
