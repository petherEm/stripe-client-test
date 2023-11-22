export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand',
    },
    {
      name: 'size',
      type: 'string',
      title: 'Product Size',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    {
      name: 'isFeatured',
      type: 'boolean',
      title: 'Displayed as featured product?',
    },
    {
      name: 'isNewest',
      type: 'boolean',
      title: 'Displayed as newest product?',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },

    {
      name: 'price_id',
      title: 'Stripe Price ID',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'condition',
      title: 'Product Condition',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Product Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
