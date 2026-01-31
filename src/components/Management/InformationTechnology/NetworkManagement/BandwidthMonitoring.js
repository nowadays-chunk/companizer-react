
export const fieldsConfig = {

  monitor_id: { label: 'Monitor ID', type: 'text', faker: 'datatype.uuid' },
  network_id: { label: 'Network ID', type: 'text', faker: 'datatype.uuid' },
  accountable_id: { label: 'Accountable ID', type: 'text', faker: 'datatype.uuid' },

  timestamp: { label: 'Timestamp', type: 'text', faker: 'date.recent' },
  upload_speed: { label: 'Upload Speed (Mbps)', type: 'number', faker: 'datatype.float' },
  download_speed: { label: 'Download Speed (Mbps)', type: 'number', faker: 'datatype.float' },

  latency_ms: { label: 'Latency (ms)', type: 'number', faker: 'datatype.number' },

  // Mandated
  // Extras
  packet_loss: { label: 'Packet Loss (%)', type: 'number', faker: 'datatype.float' },
  jitter: { label: 'Jitter', type: 'number', faker: 'datatype.float' },
  peak_usage: { label: 'Peak Usage', type: 'number', faker: 'datatype.float' },
  location: { label: 'Location', type: 'text', faker: 'address.city' },
  isp_provider: { label: 'ISP Provider', type: 'text', faker: 'company.name' },
  processing_step: { label: 'Processing Step', type: 'select', options: [{ 'id': 'draft', 'label': 'Draft' }], faker: 'random.arrayElement' },
  total_price: { label: 'Total Price', type: 'number', faker: 'finance.amount' }
};


export const entityName = 'Bandwidth Monitoring';
export const collectionName = 'bandwidth_monitoring';
