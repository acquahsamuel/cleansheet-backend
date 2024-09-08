const mongoose = require('mongoose');
 
const subCategoriesSchema = new mongoose.Schema({
  slug : { stype  : String},
  value : { type : Number },
  name: { type: String}
});


const CategorySchema = new mongoose.Schema(
 {
  name: {
    type: String,
    required: true,
    unique: true,
  },

  priceRange: [
    {
      from: Number,
      to: Number,
    },
  ],
  discount: {
    withoutDiscount: {
      type: Boolean,
      default: true,
    },
    withDiscount: {
      type: Boolean,
      default: false,
    },
  },
  location: {
    type: [String],
  },

  url: {
    type: String,
    unique: true,
    // set: function (name) {
    //   return slugify(name, { lower: true });
    // },
  },
  
  subcategories: [subCategoriesSchema],
 
 
 },
  { timestamps: true }
);
 



CategorySchema.index({ name: 'text', mainCategorySlug: 'text' });


const CategoryModel = mongoose.model('Category', CategorySchema);
module.exports = CategoryModel;