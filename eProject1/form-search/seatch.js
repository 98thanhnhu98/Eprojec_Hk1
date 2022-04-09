
function myFunction() {
    var x = document.getElementById("menu-child-cart");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunctiontwo() {
    var x = document.getElementById("menu-child-account");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//menu favorite
function myFunctionthree() {
    var x = document.getElementById("menu-child-favorite");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

angular.module("app", []);

angular.module("app").controller("MainController", function () {
    var vm = this;
    vm.searchInput = "";
    vm.shows = [
        {
            category: 'fruit',
            sort: 1,
            name: "Orange",
            url: 'https://product.hstatic.net/200000423303/product/cam-trung-huu-co_873eabb432ba470ab7ee54d33e5886aa_large.jpg',
            price: 90000,
        },
        {
            category: 'fruit',
            sort: 1,
            name: "Strawberry",
            url: 'https://product.hstatic.net/200000423303/product/dau-han-quoc-330g_7d5744607384465fa9c6dd5aab630719_large.jpg',
            price: 60000,
        },
        {
            category: 'fruit',
            sort: 1,
            name: "Pear",
            url: 'https://product.hstatic.net/200000423303/product/le-nam-phi_c877e891c9ec44b192e35dfc2ac57fac_large.jpg',
            price: 30000,
        },
        {
            category: 'fruit',
            sort: 1,
            name: "Grapes",
            url: 'https://product.hstatic.net/200000423303/product/nho-mau-don-han-quoc_59bb84f4622d4fcd8b2555739928f6f0_large.jpg',
            price: 10000,
        },
        {
            category: 'fruit',
            sort: 1,
            name: "Apple",
            url: 'apple.png',
            price:9000,
        }
        ,
        {
            category: 'fruit',
            sort: 1,
            name: "Mango",
            url: 'https://product.hstatic.net/200000423303/product/xoai-cat-hoa-loc-dac-biet_ddb4b688c1914466adc4c15cc5b75708_large.jpg',
            price:10000,
        }
        ,
        {
            category: 'fruit',
            name: "Grapefruit",
            url: 'https://product.hstatic.net/200000423303/product/buoi-da-xanh-huu-co_75d4bef79f2b4e19b2460997d4a0cd04_large.jpg',
            price:10000,
        },
        {
            category: 'fruit',
            name: "Water Melon",
            url: 'https://product.hstatic.net/200000423303/product/dua-hau_aafb8c1fa56f457e862a081e24285c47_large.jpg',
            price:10000,
        },
        {
            category: 'fruit',
            name: "Pineapple",
            url: 'https://product.hstatic.net/200000423303/product/thom-huu-co_e1872d52526e42be80bcad1c8127763b_grande.jpg',
            price:10000,
        },
        {
            category: 'fruit',
            name: "Dragon Fruit",
            url: 'https://product.hstatic.net/200000423303/product/thanh-long-ruot-do_b6dbd2c6f8994db88e84fe50139745bc_large.jpg',
            price:10000,
        },


        {
            category: 'Nuts',
            name: "Pumpkin",
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_49BCO0hE24uwGUXc6_sqCoEiYAks5jWFUw&usqp=CAU',
            price:10000,
        },
        {
            category: 'Nuts',
            name: "Chia",
            url: 'https://n3.sdlcdn.com/imgs/j/j/2/Nutrilicious-Chia-Seeds-250-g-SDL273895270-1-1289d.jpg',
            price:10000,
        },
        {
            category: 'Nuts',
            name: "Pistachio",
            url: 'http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/gwsAAOxy4YdTWJqj/$_3.JPG?set_id=2',
            price:10000,
        },
        {
            category: 'Nuts',
            name: "Almonds",
            url: 'https://n4.sdlcdn.com/imgs/j/m/t/Nature-s-Essence-Gurbandi-Almond-SDL166293273-1-350c5.jpg',
            price:10000,
        },
        {
            category: 'Nuts',
            name: "Hazelnuts",
            url: 'https://i.ebayimg.com/images/g/ZzEAAOSw9GhYZUh8/s-l400.jpg',
            price:10000,
        },
        {
            category: 'Nuts',
            name: "Soy pellets",
            url: 'https://product.hstatic.net/200000423303/product/dau_nanh_huu_co__1__5c6fdd7e5f3e40929422b3cb0c543e6b_0a1287e6a834415998cb8943c6d63b1d_grande.jpeg',
            price:10000,
        },
        {
            category: 'Nuts',
            name: "walnuts",
            url: 'https://product.hstatic.net/200000423303/product/oc-cho-huu-co-smart-organic-200g_def42d9af51d4b74b09e48a73981c7d9_grande.jpeg',
            price:10000,
        },
        {
            category: 'Nuts',
            name: "Nuts Mixed",
            url: 'https://product.hstatic.net/200000423303/product/hat-dinh-duong-hon-hop-4-loai-hat-huu-co-sottolestelle-250g-1_a899ea0ab1d846c5abf00b73d2ee353c.jpeg',
            price:10000,
        },
        {
            category: 'Nuts',
            name: "Nut hazelnut mixed Nut chocolate",
            url: 'https://images-na.ssl-images-amazon.com/images/I/91xKFxpA2zL._AC_SL1500_.jpg',
            price:10000,
        },
        {
            category: 'Nuts',
            name: "Hemp seed",
            url: 'https://product.hstatic.net/200000423303/product/canapa-sativa-bio-decorticati-1-web_6a991f11a242407690cd13efa4157b95.png',
            price:10000,
        },

        {
            category: 'Vegess',
            name: "Celery Each",
            url: 'https://cdn.shopify.com/s/files/1/0447/7471/9645/products/Celery-each-1907_17272afa-c6bf-4c9a-880f-d26fe50dfe90_240x240.jpg?v=1637561514"',
            price:10000,
        },
        {
            category: 'Vegess',
            name: "Broccoli each",
            url: 'https://cdn.shopify.com/s/files/1/0447/7471/9645/products/Broccoli-each-10064_9fcfa40f-e762-4817-b94a-eeed7b9594b5_240x240.jpg?v=1637557861',
            price:10000,
        },
        {
            category: 'Vegess',
            name: "Ginger",
            url: 'https://cdn.shopify.com/s/files/1/0447/7471/9645/products/Ginger-120g-38708_e61e32d8-a9ea-431e-9f46-8caa71003c84_240x240.jpg?v=1637558437',
            price:10000,
        },
        {
            category: 'Vegess',
            name: "Gralic",
            url: 'https://cdn.shopify.com/s/files/1/0447/7471/9645/products/Garlic-2-bulbs-10080_cf9c53bd-633f-441b-82d3-6ab09c74c3af_240x240.jpg?v=1637557864',
            price:10000,
        },
        {
            category: 'Vegess',
            sort: 2,
            name: "Cucumber Each",
            url: 'https://cdn.shopify.com/s/files/1/0447/7471/9645/products/Cucumber-each-1918_235dd22e-866d-434b-a131-ee6d1bdd6a92_240x240.jpg?v=1637561516',
            price:10000,
        },
        {
            category: 'Vegess',
            name: "Tomato",
            url: 'https://cdn.shopify.com/s/files/1/0447/7471/9645/products/The-Tomato-Stall-Cherry-Vine-Tomatoes-250g-25320_d2b35273-ae5e-4c94-bfe5-1a8c9109b9c3_240x240.jpg?v=1637559033',
            price:10000,
        },
        {
            category: 'Vegess',
            name: "Fresh Flat Leaf Parsley",
            url: 'https://cdn.shopify.com/s/files/1/0447/7471/9645/products/Fresh-Flat-Leaf-Parsley-20g-1934_c2a63b01-434f-44db-bd79-de09898e9a22_240x240.jpg?v=1637561522',
            price:10000,
        },
        {
            category: 'Vegess',
            name: "Carrot",
            url: 'https://cdn.shopify.com/s/files/1/0447/7471/9645/products/Carrots-750g-15355_14355469-e55c-4219-b699-eff21b55a364_240x240.jpg?v=1637561361',
            price:10000,
        },
        {
            category: 'Vegess',
            name: "Sweet Potatoes",
            url: 'https://cdn.shopify.com/s/files/1/0447/7471/9645/products/Sweet-Potatoes-700g-38709_6e73eeb8-8f34-4e81-8e0e-49c67fa89ab2_240x240.jpg?v=1637558438',
            price:10000,
        },
        {
            category: 'Vegess',
            name: "Aubergine Each",
            url: 'https://cdn.shopify.com/s/files/1/0447/7471/9645/products/Aubergine-each-24840_c395a38a-face-4101-ab3f-f1ef4e7e3f47_240x240.jpg?v=1637556803',
            price:10000,
        },

        {
            category: 'Dry Food',
            name: "Cream Milk Powder",
            url: 'https://cdn11.bigcommerce.com/s-hhhi/images/stencil/1280x1280/products/47843/173625/151103__29404.1648785454.jpg?c=2',
            price:10000,
        },
        {
            category: 'Dry Food',
            name: "Lotus Maize Meal",
            url: 'https://cdn11.bigcommerce.com/s-hhhi/images/stencil/1280x1280/products/47694/173387/apivistyw__71037.1644974942.jpg?c=2',
            price:10000,
        },
        {
            category: 'Dry Food',
            name: "Lotus Maize Flour",
            url: 'https://cdn11.bigcommerce.com/s-hhhi/images/stencil/320w/products/47692/173384/apip6r3bb__16377.1644974617.jpg?c=2',
            price:10000,
        },
        {
            category: 'Dry Food',
            name: "Plant Organic Ground Cinnamon",
            url: 'https://cdn11.bigcommerce.com/s-hhhi/images/stencil/640w/products/47150/172802/156380__04404.1644836359.jpg?c=2',
            price:10000,
        },
        {
            category: 'Dry Food',
            name: "Planet Organic Bay",
            url: 'https://cdn11.bigcommerce.com/s-hhhi/images/stencil/1280x1280/products/47109/172766/158225__70774.1644836339.jpg?c=2',
            price:10000,
        },
        {
            category: 'Dry Food',
            name: "Planet Organic Ground Nutmeg",
            url: 'https://cdn11.bigcommerce.com/s-hhhi/images/stencil/640w/products/46983/172629/159721__58267.1644836277.jpg?c=2',
            price:10000,
        },
        {
            category: 'Dry Food',
            name: "Planet Organic Black Pepper Cracked",
            url: 'https://cdn11.bigcommerce.com/s-hhhi/images/stencil/1280x1280/products/46766/172401/157975__77274.1644836166.jpg?c=2',
            price:10000,
        },
        {
            category: 'Dry Food',
            name: "Nutra Organics The Wholefood",
            url: 'https://cdn11.bigcommerce.com/s-hhhi/images/stencil/1280x1280/products/46765/172399/154252__94096.1644836165.jpg?c=2',
            price:10000,
        },
        {
            category: 'Dry Food',
            sort: 3,
            name: "Planet Organic Organic Ground Cinnamon",
            url: 'https://cdn11.bigcommerce.com/s-hhhi/images/stencil/640w/products/46597/172214/158276__58323.1644836084.jpg?c=2',
            price:10000,
        },
        {
            category: 'Dry Food',
            name: "Nutra Organics Wholefood Pantry Tapioca Flour",
            url: 'https://cdn11.bigcommerce.com/s-hhhi/images/stencil/640w/products/46436/172031/157315__29426.1644835993.jpg?c=2',
            price:10000,
        },

        {
            category: 'Canned Food',
            name: "Canned Organic Sweet Corn",
            url: 'https://product.hstatic.net/1000104489/product/bap_ngot_dong_hop_luce_3c6d495841054892a08303e06714104c_master.jpg',
            price:10000,
        },
        {
            category: 'Canned Food',
            name: "Canned Organic Coconut Milk",
            url: 'https://product.hstatic.net/1000104489/product/nuoc-cot-dua__3__ac8b8ebcf3d64a22a2651c630303d627_master.jpg',
            price:10000,
        },
        {
            category: 'Canned Food',
            name: "Canned Organic Red Beans",
            url: 'https://product.hstatic.net/1000104489/product/dau_do_dong_hop_luce_7585e4a258444362b19d878fac773165_master.jpg',
            price:10000,
        },
        {
            category: 'Canned Food',
            name: "Canned Organic Chickpeas",
            url: 'https://product.hstatic.net/1000104489/product/dau_ga_dong_hop_luce_3a1e1adfe29d49c48bf2620baa7008a2_master.jpg',
            price:10000,
        },
        {
            category: 'Canned Food',
            name: "Canned Organic Peas",
            url: 'https://product.hstatic.net/1000104489/product/dau_ha_lan_dong_hop_luce_69e3e4ff14b545a2872c8a4ee4e8980c_master.jpg',
            price:10000,
        },
        {
            category: 'Canned Food',
            name: "Canned organic lentils",
            url: 'https://product.hstatic.net/1000104489/product/dau_lang_dong_hop_lucce_7310e26da42648e9bb068305f3bd43ad_master.jpg',
            price:10000,
        },
        {
            category: 'Canned Food',
            sort: 4,
            name: "Canned organic small white beans",
            url: 'https://product.hstatic.net/1000104489/product/dau_trang_nho_dong_hop_luce_f2c8fb8e73494b6ab16a3419c282318f_master.jpg',
            price:10000,
        },
        {
            category: 'Canned Food',
            name: "Canned organic large White beans",
            url: 'https://product.hstatic.net/1000104489/product/dau_trang_to_dong_hop_luce_0f68f9937c12461698ca1bec2edddbe5_master.jpg',
            price:10000,
        },
        {
            category: 'Canned Food',
            name: "Canned organic bean mix",
            url: 'https://product.hstatic.net/1000104489/product/hon_hop_dau_dong_hop_luce_7a8a24a5a74a4a4fb602de74799dc9fa_master.jpg',
            price:10000,
        },
        {
            category: 'Canned Food',
            name: "Organic condensed milk",
            url: 'https://product.hstatic.net/1000104489/product/a6c100136b12964ccf03_7b3f1c7317824d24abaa3cddfeebd96e_master.jpg',
            price:10000,
        },

    ];
    vm.orders = [
        {
            id: 1,
            title: "High to low price",
            key: 'price',
            reverse: false
        },
        {
            id: 2,
            title: "Low to high price",
            key: 'price',
            reverse: true
        },
        // {
        //     id: 3,
        //     title: "Price Tăng dần",
        //     category: 'Canned Food',
        // },
        // {
        //     id: 4,
        //     title: "Price Giảm dần",
        //     category: 'Canned Food',
        // }
    ];
    vm.order = vm.orders[0];
});