import {Pizza} from './pizza'
export const PREMADES: Pizza[] = [
    {name:'3Cheese',toppings: [''],sauce: 'maranara',
     cheese: '3Cheese',crust:'basic',
     img:'https://goldbelly.imgix.net//uploads/showcase_media_asset/image/101478/cheese-pizza-3-pack.7ae177a97caf8f867f19fc59d36ab9d2.jpg',
     price: 12.50,desciption:
     'A perfect blend of mozzarella,Chedder, and Parmesan '},

    {name:'MeatLover',toppings: ['chichen','sauage','ham','beef','pepperoni'],
     cheese :'cheese',sauce: 'maranara',crust:'basic',
     img: 'data:image/jpeg;base64,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',
     price: 13.50 ,desciption:
     'Topped with best chichen,sauage,ham,beef, and pepperoni'},

    {name:'Supreme',toppings: ['sauage','pepperoni','pepper','olive','mushrooms'],
     cheese :'cheese',sauce: 'maranara',crust:'basic',
     img: 'https://www.caseys.com/medias/sys_master/images/h47/h8b/8796496461854/8173_base-400x400/8173-base-400x400.png',
     price: 15.00 ,desciption:
     'Includes pepperoni, sauage, mushrooms,mushrooms and olives.'},

    {name:'BBQ Chicken',toppings: ['chicken','onions','bacon'],
     cheese :'cheese',sauce: 'bbq',crust:'basic',
     img: 'https://www.littleitalianpizzawest.com/wp-content/uploads/2020/08/BBQ-Chicken-1.png',
     price: 15.00, desciption:
     'A rustic bbq sauce with chicken, onions, and bacon'},

    {name:'Hawaiian',toppings: ['pineapple','ham'],
     cheese :'cheese',sauce: 'maranara',crust:'basic',
     img: 'https://cdn.shopify.com/s/files/1/0569/8532/1654/products/hawaiian_pizza.jpg?v=1621561164',
     price: 13.00,desciption:
     ' A hawaiian vaction topped with sweet pineapple and smoked ham'},

    {name:'Veggie Lovers',toppings: ['olives','onions','spinach','green pepper','tomatoes'],
     cheese :'cheese',sauce: 'maranara',crust:'basic',
     img: 'https://www.caseys.com/medias/sys_master/images/h40/haf/8796493512734/8133_base-400x400/8133-base-400x400.png',
     price: 12.50,desciption:
     'Includes olive,onions,spianach,greeen peppers, tomatoes'}
];
