
export const fieldsConfig = {

  team_id: { label: 'Team ID', type: 'text', faker: 'datatype.uuid' },
  incident_id: { label: 'Incident ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  member_name: { label: 'Member Name', type: 'text', faker: 'name.fullName' },
  role: { label: 'Role', type: 'text', faker: 'name.jobTitle' },

  contact_number: { label: 'Contact Number', type: 'tel', faker: 'phone.number' },
  email: { label: 'Email', type: 'email', faker: 'internet.email' },

  // Mandated
  // Extras
  is_lead: { label: 'Is Lead', type: 'checkbox', faker: 'datatype.boolean' },
  department: { label: 'Department', type: 'text', faker: 'commerce.department' },
  availability_status: { label: 'Availability Status', type: 'select', options: [{ id: 'available', label: 'Available' }, { id: 'unavailable', label: 'Unavailable' }, { id: 'on_standby', label: 'On Standby' }], faker: 'random.arrayElement' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Crisis Response Teams';
export const collectionName = 'crisis_response_teams';
