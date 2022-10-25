export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'orderId',
            title: 'Order ID',
            type:'string',},
{
    name:'userId', 
    title: 'User ID',
    type:'string',
},
        {
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
    name:'availableProducts',
    title:'Available Products',
    type:'number',
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