
export const fieldsConfig = {
  node_id: { label: 'Node ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  node_name: { label: 'Node Name', type: 'text', faker: 'hacker.noun' },
  node_type: { label: 'Node Type', type: 'select', options: [{ id: 'router', label: 'Router' }, { id: 'switch', label: 'Switch' }, { id: 'server', label: 'Server' }, { id: 'endpoint', label: 'Endpoint' }], faker: 'random.arrayElement' },

  ip_address: { label: 'IP Address', type: 'text', faker: 'internet.ip' },
  mac_address: { label: 'MAC Address', type: 'text', faker: 'internet.mac' },

  // Mandated
  processing_step: { label: 'Processing Step', type: 'text', faker: 'hacker.verb' },
  unit_price: { label: 'Unit Price', type: 'number', faker: 'finance.amount' },

  // Extras
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  connected_to: { label: 'Connected To', type: 'text', faker: 'datatype.uuid' }, // Parent node
  status: { label: 'Status', type: 'select', options: [{ id: 'online', label: 'Online' }, { id: 'offline', label: 'Offline' }], faker: 'random.arrayElement' },
  last_seen: { label: 'Last Seen', type: 'date', faker: 'date.recent' },
  firmware_version: { label: 'Firmware Version', type: 'text', faker: 'system.semver' },
  manufacturer: { label: 'Manufacturer', type: 'text', faker: 'company.name' }
};

export const entityName = 'Network Topology';
export const collectionName = 'network_topology';
