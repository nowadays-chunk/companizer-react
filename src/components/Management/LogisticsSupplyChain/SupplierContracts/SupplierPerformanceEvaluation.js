
export const fieldsConfig = {

  evaluation_id: { label: 'Evaluation ID', type: 'text', faker: 'datatype.uuid' },
  supplier_id: { label: 'Supplier ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  period: { label: 'Period', type: 'text', faker: 'lorem.word' },
  quality_score: { label: 'Quality Score', type: 'number', faker: 'datatype.number' }, // 1-100
  delivery_score: { label: 'Delivery Score', type: 'number', faker: 'datatype.number' },
  price_score: { label: 'Price Score', type: 'number', faker: 'datatype.number' },

  overall_score: { label: 'Overall Score', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  evaluated_by: { label: 'Evaluated By', type: 'text', faker: 'name.fullName' },
  date_evaluated: { label: 'Date Evaluated', type: 'date', faker: 'date.recent' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Supplier Performance Evaluation';
export const collectionName = 'supplier_performance_evaluation';