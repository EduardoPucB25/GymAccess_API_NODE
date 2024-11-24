const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    type: { type: String, required: true },  // Planes: mensual, trimestral, anual
    price: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const Subscription = mongoose.model('Subscription', subscriptionSchema);
module.exports = Subscription;
