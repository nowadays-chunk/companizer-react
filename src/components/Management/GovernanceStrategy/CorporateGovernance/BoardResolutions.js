
export const fieldsConfig = {

  resolution_id: { label: 'Resolution ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  resolution_number: { label: 'Resolution Number', type: 'text', faker: 'random.alphaNumeric' },
  title: { label: 'Title', type: 'text', faker: 'lorem.sentence' },

  adoption_date: { label: 'Adoption Date', type: 'date', faker: 'date.past' },

  status: { label: 'Status', type: 'select', options: [{ id: 'draft', label: 'Draft' }, { id: 'adopted', label: 'Adopted' }, { id: 'rejected', label: 'Rejected' }], faker: 'random.arrayElement' },

  // Mandated
  // Extras
  full_text: { label: 'Text', type: 'text', multiline: true, rows: 4, faker: 'lorem.paragraph' },
  voting_result: { label: 'Voting Result', type: 'text', faker: 'lorem.sentence' }, // e.g. "Unanimous"
  proposed_by: { label: 'Proposed By', type: 'text', faker: 'name.fullName' },
  seconded_by: { label: 'Seconded By', type: 'text', faker: 'name.fullName' },
  signed_by_chairman: { label: 'Signed By Chairman', type: 'checkbox', faker: 'datatype.boolean' },
  e: 'text', faker: 'internet.url',
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Board Resolutions';
export const collectionName = 'board_resolutions';