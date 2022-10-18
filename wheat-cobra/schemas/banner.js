export default {
  name: "banner",
  title: "Banner",
  type: "document",

  fields: [{ name: "image",
   type: "image",
   title: "Image",
options:[{hotspot:true}] },

   {name: 'bannerName',
title: "Banner Name",
type: "string",},

{name: 'product',
title: "Product",
type: "string",},

{name: 'description',
title: "Description",
type: "string"},
{name: 'smallText', type: "string", title: 'Small Text'},
{name: 'mediumText', type: "string", title:'Medium Text'},
{name: 'largeText1', type: "string", title:'Large Text 1'},
{name: 'largeText2', type: "string", title:'Large Text 2'},
{name:'discount', type: "string", title:'Discount'},
{name: 'saleTime', type: "string", title:'Sale Time'},
],

};
