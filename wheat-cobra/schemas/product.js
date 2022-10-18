export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [{
        name: 'name',
        title: 'Name',
        type: 'string',
    },
    {
        name:'image',
        title:'Image',
        type: 'array',
        of:[{type:'image',}],
        options: {
            hotpost: true,
        }
    },
    {
        name:'slug',
        title:'Slug',
        type:'slug',
        options: {source:'name',
        maxLength:100,
    }
},

{
    name:'sellerprice',
    title:'SellerPrice',
    type:'number',

},
{
    name:'price',
    title:'Price',
    type:'number',

},
{
    name:'details',
    title:'Details',
    type:'string'
}
]
}