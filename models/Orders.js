const keystone = require('keystone');
const Order = new keystone.List('Order');
const Types = keystone.Field.Types;
Order.add({
    order_id:{type:String, noedit:true},
    name:{type:String, noedit:true},
    total_amount:{type:Number, noedit:true},
    order_item:{type:Types.Textarea, noedit:true},
    email:{type:Types.Email, noedit:true},
    phoneNumber:{type:Number, noedit:true},
    Address:{type:String,noedit:true},
    postalCode:{type:Number,noedit:true},
    unitNumber:{type:String,noedit:true},
    order_date:{type:Types.Date,noedit:true},
    order_time:{type:String, noedit:true},
    order_status:{ type: Types.Select, options: 'processing, completed' }
})


Order.defaultColumns = "name, order_id, order_status"
Order.register();