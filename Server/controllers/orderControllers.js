const Order = require('../models/Order');

module.exports = {
    getUserOrders: async(res, req)=>{
        const userId = req.user.id;
        
        try {
            const userOrders = await Order.find({userId})
            .populate({
                path: 'productId',
                select: "-description -product_location"
            })
            .exec();

            res.status(200).json(userOrders);

        } catch (error) {
            res.status(500).json(error);   
        }

    }
}