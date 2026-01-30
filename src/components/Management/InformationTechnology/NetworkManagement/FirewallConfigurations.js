
export const fieldsConfig = {
  config_id: { label: 'Config ID', type: 'text', faker: 'datatype.uuid' },
  firewall_id: { label: 'Firewall ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  rule_name: { label: 'Rule Name', type: 'text', faker: 'hacker.noun' },
  action: { label: 'Action', type: 'select', options: [{ id: 'allow', label: 'Allow' }, { id: 'deny', label: 'Deny' }, { id: 'log', label: 'Log' }], faker: 'random.arrayElement' },

  source_ip: { label: 'Source IP', type: 'text', faker: 'internet.ip' },
  destination_ip: { label: 'Destination IP', type: 'text', faker: 'internet.ip' },
  port: { label: 'Port', type: 'number', faker: 'internet.port' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  protocol: { label: 'Protocol', type: 'select', options: [{ id: 'tcp', label: 'TCP' }, { id: 'udp', label: 'UDP' }, { id: 'icmp', label: 'ICMP' }], faker: 'random.arrayElement' },
  priority: { label: 'Priority', type: 'number', faker: 'datatype.number' },
  created_by: { label: 'Created By', type: 'text', faker: 'name.fullName' },
  created_date: { label: 'Created Date', type: 'date', faker: 'date.past' },
  is_active: { label: 'Is Active', type: 'checkbox', faker: 'datatype.boolean' },
  description: { label: 'Description', type: 'text', faker: 'lorem.sentence' }
};

export const entityName = 'Firewall Configurations';
export const collectionName = 'firewall_configurations';
