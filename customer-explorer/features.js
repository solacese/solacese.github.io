// Solace Explorer — Logos and Reference Architecture Data
// Adds to the content layer alongside content.js

var LOGOS = {
  aviation: [
    { name: 'AIRBUS', url: 'https://solace.com/company/customers/airbus/', style: 'font-size:17px;font-weight:700;letter-spacing:0.06em' },
    { name: 'EUROCONTROL', url: 'https://solace.com/company/customers/eurocontrol/', style: 'font-size:12px;font-weight:600;letter-spacing:0.08em' },
    { name: 'FAA', url: 'https://solace.com/company/customers/faa/', style: 'font-size:20px;font-weight:800;letter-spacing:0.02em' },
    { name: 'HK AIRPORT AUTHORITY', url: 'https://solace.com/company/customers/hong-kong-airport-authority/', style: 'font-size:10px;font-weight:600;letter-spacing:0.04em;text-align:center;line-height:1.3' }
  ],
  logistics: [
    { name: 'PSA', url: 'https://solace.com/company/customers/psa-singapore/', style: 'font-size:22px;font-weight:700;letter-spacing:0.04em' },
    { name: 'CMA CGM', url: 'https://solace.com/company/customers/', style: 'font-size:14px;font-weight:700;letter-spacing:0.06em' },
    { name: 'DESCARTES', url: 'https://solace.com/company/customers/core/', style: 'font-size:13px;font-weight:600;letter-spacing:0.04em' },
    { name: 'LTA SINGAPORE', url: 'https://solace.com/company/customers/singapore-land-transport-authority/', style: 'font-size:11px;font-weight:600;letter-spacing:0.04em;text-align:center;line-height:1.3' },
    { name: 'POSTI', url: 'https://solace.com/company/customers/', style: 'font-size:16px;font-weight:700;letter-spacing:0.03em' },
    { name: 'BISON', url: 'https://solace.com/company/customers/', style: 'font-size:15px;font-weight:700;letter-spacing:0.04em' },
    { name: 'TRAXENS', url: 'https://solace.com/company/customers/', style: 'font-size:14px;font-weight:600;letter-spacing:0.06em' }
  ],
  rail: [
    { name: 'ALSTOM', url: 'https://solace.com/company/customers/alstom/', style: 'font-size:16px;font-weight:700;letter-spacing:0.06em' },
    { name: 'SBB', url: 'https://solace.com/company/customers/', style: 'font-size:20px;font-weight:800;letter-spacing:0.02em' },
    { name: 'SINGAPORE CRUISE CENTRE', url: 'https://solace.com/company/customers/', style: 'font-size:9px;font-weight:600;letter-spacing:0.04em;text-align:center;line-height:1.3' }
  ],
  automotive: [
    { name: 'RENAULT', url: 'https://solace.com/company/customers/', style: 'font-size:15px;font-weight:700;letter-spacing:0.08em' },
    { name: 'STELLANTIS', url: 'https://solace.com/company/customers/groupe-psa/', style: 'font-size:13px;font-weight:600;letter-spacing:0.08em' }
  ],
  "manufacturing-cpg": [
    { name: 'DANONE', url: 'https://solace.com/company/customers/danone/', style: 'font-size:15px;font-weight:700;letter-spacing:0.06em' },
    { name: 'HEINEKEN', url: 'https://solace.com/company/customers/', style: 'font-size:13px;font-weight:700;letter-spacing:0.08em' },
    { name: 'SONOS', url: 'https://solace.com/company/customers/', style: 'font-size:15px;font-weight:700;letter-spacing:0.06em' },
    { name: 'SONEPAR', url: 'https://solace.com/company/customers/', style: 'font-size:13px;font-weight:600;letter-spacing:0.06em' },
    { name: 'SEW-EURODRIVE', url: 'https://solace.com/company/customers/', style: 'font-size:10px;font-weight:600;letter-spacing:0.04em' },
    { name: 'AIRBUS HELICOPTERS', url: 'https://solace.com/company/customers/airbus/', style: 'font-size:10px;font-weight:600;letter-spacing:0.04em;text-align:center;line-height:1.3' }
  ]
};

var LOGO_EXTRA_COUNT = {
  aviation: 20,
  logistics: 20,
  rail: 20,
  automotive: 20,
  "manufacturing-cpg": 30
};

var ARCHITECTURE = {
  aviation: {
    title: 'Aviation event mesh pattern',
    description: 'Systems across the aviation ecosystem publish and subscribe through the event mesh. Click any node to see data flows.',
    left: [
      { id: 'atm', name: 'Air traffic management', proto: 'AMQP \u00B7 SWIM', flows: '\u2190 \u2192 flight data, airspace events',
        tip: { t: 'Air traffic management', d: 'Flight schedules, surveillance data, airspace coordination. Eurocontrol connects 40+ national agencies bidirectionally through Solace using AMQP.', f: 'Publishes: flight plans, surveillance \u00B7 Subscribes: cross-border alerts, calculated trajectories' }},
      { id: 'airline', name: 'Airline operations', proto: 'JMS \u00B7 REST', flows: '\u2190 \u2192 crew, disruption, loyalty',
        tip: { t: 'Airline operations', d: 'Crew scheduling, disruption cascades, loyalty updates, booking events. Airlines replaced 100+ legacy TIBCO/IBM MQ instances with a hybrid event mesh.', f: 'Publishes: disruptions, schedule changes \u00B7 Subscribes: weather, gate assignments, crew availability' }},
      { id: 'airport', name: 'Airport ground ops', proto: 'MQTT \u00B7 REST', flows: '\u2190 \u2192 gates, bags, passenger flow',
        tip: { t: 'Airport ground operations', d: 'Baggage systems, gate management, retail, ground transport. Major airports use Solace to replace siloed IBM middleware for real-time passenger flow.', f: 'Publishes: gate changes, bag status \u00B7 Subscribes: flight updates, security alerts' }},
      { id: 'iot', name: 'IoT & sensors', proto: 'MQTT', flows: '\u2192 telemetry, weather, runway',
        tip: { t: 'IoT & sensor networks', d: 'Runway sensors, weather stations, drone UTM feeds, connected ground vehicles. High-volume MQTT telemetry at sub-second latency.', f: 'Publishes: telemetry, weather, position \u00B7 Subscribes: commands, thresholds' }}
    ],
    right: [
      { id: 'national', name: 'National agencies', proto: 'AMQP', flows: '\u2190 \u2192 cross-border coordination',
        tip: { t: 'National agencies', d: 'Each country subscribes to specific topics (e.g. flights in their airspace) and publishes local data. Onboarding a new agency is configuration, not code.', f: 'Publishes: national data, local alerts \u00B7 Subscribes: continental feeds, filtered by airspace' }},
      { id: 'pax', name: 'Passenger experience', proto: 'WebSocket \u00B7 REST', flows: '\u2190 status, gates \u2192 feedback',
        tip: { t: 'Passenger experience', d: 'Real-time push to mobile apps, airport displays, and kiosks via WebSocket. Gate changes, bag tracking, and delay alerts reach passengers within seconds.', f: 'Publishes: feedback, check-in \u00B7 Subscribes: flight status, gate, bag tracking' }},
      { id: 'analytics', name: 'Analytics & data lake', proto: 'Kafka bridge', flows: '\u2190 events \u2192 enriched signals',
        tip: { t: 'Analytics & data lake', d: 'Event streams bridged to Kafka and cloud data lakes (Snowflake, Azure Synapse) for predictive maintenance, demand forecasting, and dashboards.', f: 'Publishes: enriched signals, predictions \u00B7 Subscribes: raw operational events' }},
      { id: 'sap', name: 'SAP / ERP', proto: 'SAP AEM', flows: '\u2190 \u2192 procurement, MRO, finance',
        tip: { t: 'SAP / ERP integration', d: 'SAP Advanced Event Mesh connects procurement, MRO work orders, and finance to real-time operational triggers. A maintenance alert triggers a parts order automatically.', f: 'Publishes: PO confirmations, inventory \u00B7 Subscribes: maintenance triggers, operational events' }}
    ],
    deploy: [
      { id: 'd-prem', label: 'On-premises', sub: 'Air-gapped / safety-critical', tip: 'For safety-critical environments like ANS providers and defence. Software brokers in secure facilities with no cloud dependency.' },
      { id: 'd-cloud', label: 'Solace Cloud', sub: 'AWS \u00B7 Azure \u00B7 GCP', tip: 'Auto-scaling managed service with 99.99% SLA. Most airline and airport modernisation projects deploy here.' },
      { id: 'd-edge', label: 'Edge', sub: 'Airside / low-latency', tip: 'Lightweight brokers at the airside for sub-millisecond local processing. Connects to broader mesh via dynamic message routing.' }
    ]
  },

  logistics: {
    title: 'Logistics event mesh pattern',
    description: 'Warehouse, fleet, port, and partner systems exchange events bidirectionally through the mesh.',
    left: [
      { id: 'port', name: 'Port automation', proto: 'MQTT \u00B7 native', flows: '\u2190 \u2192 AGV commands, crane telemetry',
        tip: { t: 'Port automation', d: 'Automated guided vehicles, yard cranes, and quay cranes communicate via private 5G through the event broker. Sub-millisecond latency for safety-critical commands.', f: 'Publishes: equipment telemetry, status \u00B7 Subscribes: movement commands, scheduling' }},
      { id: 'wms', name: 'Warehouse / TMS', proto: 'JMS \u00B7 REST', flows: '\u2190 \u2192 inventory, shipments',
        tip: { t: 'Warehouse & transport management', d: 'TMS and WMS systems migrated from Oracle SOA and database-embedded logic to event-driven flows via Boomi + Solace.', f: 'Publishes: shipment status, inventory changes \u00B7 Subscribes: orders, routing instructions' }},
      { id: 'vessel', name: 'Vessel & fleet ops', proto: 'MQTT \u00B7 REST', flows: '\u2190 \u2192 booking, tracking, digital twin',
        tip: { t: 'Vessel & fleet operations', d: 'Shipping lines event-enable MDM for instant booking confirmations. IoT container tracking and digital twin for vessel simulation.', f: 'Publishes: vessel position, container telemetry \u00B7 Subscribes: booking events, routing changes' }},
      { id: 'iot-log', name: 'Container IoT', proto: 'MQTT', flows: '\u2192 location, temperature, status',
        tip: { t: 'Container IoT sensors', d: 'Electronic components on each container collect location and condition data, streamed via MQTT through the event platform.', f: 'Publishes: GPS, temperature, shock, humidity \u00B7 Subscribes: alert thresholds' }}
    ],
    right: [
      { id: 'partner', name: 'Partner / customer portals', proto: 'REST \u00B7 WebSocket', flows: '\u2190 notifications \u2192 bookings',
        tip: { t: 'Partner & customer portals', d: 'Instant booking confirmations, partner notifications for value-add services, and real-time shipment visibility pushed to customer portals.', f: 'Publishes: bookings, service requests \u00B7 Subscribes: confirmations, status updates, tracking' }},
      { id: 'customs', name: 'Customs & compliance', proto: 'REST', flows: '\u2190 declarations \u2192 clearance events',
        tip: { t: 'Customs & compliance', d: 'Shipment events trigger automated customs declarations. Clearance events flow back to update shipment status and enable release.', f: 'Publishes: clearance status \u00B7 Subscribes: shipment manifests, declarations' }},
      { id: 'analytics-log', name: 'Analytics (Snowflake)', proto: 'Kafka bridge', flows: '\u2190 events \u2192 predictions',
        tip: { t: 'Analytics & data lake', d: 'CDC from source systems feeds Snowflake via Kafka bridge. Predictive tracking and demand forecasting from operational event streams.', f: 'Publishes: predictions, anomalies \u00B7 Subscribes: all operational events via CDC' }},
      { id: 'lastmile', name: 'Last-mile delivery', proto: 'MQTT \u00B7 REST', flows: '\u2190 \u2192 driver status, proof of delivery',
        tip: { t: 'Last-mile delivery', d: 'Driver apps, route optimisation, and proof-of-delivery events connecting the final leg of the logistics chain in real time.', f: 'Publishes: delivery confirmations, driver location \u00B7 Subscribes: route changes, dispatch instructions' }}
    ],
    deploy: [
      { id: 'd-prem', label: 'On-premises', sub: 'Port / warehouse', tip: 'On-premise appliances for latency-sensitive port automation and warehouse operations. Private 5G connectivity.' },
      { id: 'd-cloud', label: 'Solace Cloud', sub: 'AWS \u00B7 Azure', tip: 'Managed service for partner connectivity, customer portals, and elastic analytics workloads.' },
      { id: 'd-edge', label: 'Edge / vehicle', sub: 'Truck \u00B7 container', tip: 'Lightweight brokers on vehicles and at distribution centres for local processing and store-and-forward.' }
    ]
  },

  rail: {
    title: 'Rail & transit event mesh pattern',
    description: 'Train operations, passenger systems, and infrastructure management share a unified event backbone.',
    left: [
      { id: 'train', name: 'Train telemetry', proto: 'MQTT \u00B7 REST', flows: '\u2192 position, speed, health',
        tip: { t: 'Train telemetry', d: 'Onboard sensors stream position, speed, and health data from rolling stock. Multiple train suppliers normalised through a single ingestion point.', f: 'Publishes: position, speed, diagnostics, door status \u00B7 Subscribes: commands, speed restrictions' }},
      { id: 'traffic', name: 'Traffic management', proto: 'AMQP \u00B7 JMS', flows: '\u2190 \u2192 timetable, exceptions, shunting',
        tip: { t: 'Traffic management', d: 'SBB runs 40+ use cases: driver information, timetable management, capacity planning, shunting, and tunnel supervision on one event platform.', f: 'Publishes: timetable changes, track status \u00B7 Subscribes: train position, exception events' }},
      { id: 'passenger', name: 'Passenger systems', proto: 'REST \u00B7 SAP AEM', flows: '\u2190 \u2192 check-in, billing, portal',
        tip: { t: 'Passenger systems', d: 'Check-in/check-out events flow through SAP AEM to billing (S/4HANA) and customer portals. A European railway recovered lost revenue by guaranteeing every check-in reaches billing.', f: 'Publishes: check-in events, journey data \u00B7 Subscribes: fare calculations, service alerts' }},
      { id: 'safety', name: 'Safety & signalling', proto: 'AMQP', flows: '\u2190 \u2192 tunnel supervision, PTC',
        tip: { t: 'Safety & signalling', d: 'Safety-critical events: tunnel supervision, positive train control, employee certification checks before maintenance dispatch. Zero message loss guaranteed.', f: 'Publishes: track status, safety alerts \u00B7 Subscribes: train position, speed, certification status' }}
    ],
    right: [
      { id: 'ops-centre', name: 'Operations centres', proto: 'AMQP \u00B7 REST', flows: '\u2190 \u2192 regional ops, exceptions',
        tip: { t: 'Operations centres', d: 'Each centre subscribes to its geographic region via topic hierarchy. Low-bandwidth links between remote centres handled natively.', f: 'Publishes: dispatch decisions, speed restrictions \u00B7 Subscribes: regional train data, exception events' }},
      { id: 'driver-info', name: 'Driver information', proto: 'REST \u00B7 MQTT', flows: '\u2190 real-time alerts, timetable',
        tip: { t: 'Driver information systems', d: 'Train drivers receive real-time timetable updates, speed restrictions, track conditions, and exception alerts directly to cab systems.', f: 'Subscribes: timetable updates, track status, speed restrictions, exception alerts' }},
      { id: 'erp-rail', name: 'SAP / Oracle ERP', proto: 'SAP AEM \u00B7 JMS', flows: '\u2190 \u2192 maintenance, HR, billing',
        tip: { t: 'ERP integration', d: 'TIBCO-to-Solace migration bridged Oracle ERP and SAP systems. Employee certification (regulatory), MRO scheduling, and billing all flow through events.', f: 'Publishes: work orders, certifications \u00B7 Subscribes: maintenance triggers, billing events' }},
      { id: 'analytics-rail', name: 'Data lake (Databricks)', proto: 'Kafka bridge', flows: '\u2190 events \u2192 predictive maintenance',
        tip: { t: 'Analytics & data lake', d: 'Operational events feed Databricks/Azure data lake for predictive maintenance, performance analytics, and fleet optimisation.', f: 'Publishes: predictions, fleet insights \u00B7 Subscribes: all telemetry and operational events' }}
    ],
    deploy: [
      { id: 'd-prem', label: 'On-premises', sub: 'Ops centres / lineside', tip: 'On-premise for safety-critical operations centres and lineside systems with limited connectivity.' },
      { id: 'd-cloud', label: 'Solace Cloud', sub: 'Azure \u00B7 AWS', tip: 'Cloud for analytics, passenger-facing services, and elastic workloads. Connected to on-prem via event mesh.' },
      { id: 'd-edge', label: 'Onboard', sub: 'Train \u00B7 station', tip: 'Lightweight brokers onboard trains and at stations for local processing with store-and-forward to HQ.' }
    ]
  },

  automotive: {
    title: 'Automotive event mesh pattern',
    description: 'Connected vehicles, factory systems, and business applications exchange data through the mesh in real time.',
    left: [
      { id: 'vehicle', name: 'Connected vehicles', proto: 'MQTT', flows: '\u2190 \u2192 telemetry, OTA, diagnostics',
        tip: { t: 'Connected vehicles', d: 'Millions of connected cars stream telemetry to the consumer app via MQTT. The original connected vehicle deployment expanded to procurement and production.', f: 'Publishes: location, diagnostics, usage \u00B7 Subscribes: OTA updates, recalls, personalisation' }},
      { id: 'factory', name: 'Factory / MES', proto: 'MQTT \u00B7 JMS', flows: '\u2190 \u2192 production events, quality',
        tip: { t: 'Factory & MES', d: 'Production line events, quality checks, and equipment telemetry. SAP AEM connects procurement data exchange to production workflows.', f: 'Publishes: production status, quality events \u00B7 Subscribes: orders, scheduling, part availability' }},
      { id: 'auction', name: 'Auction / remarketing', proto: 'WebSocket \u00B7 REST', flows: '\u2190 \u2192 bids, listings, results',
        tip: { t: 'Auction & remarketing', d: 'Real-time online auctions across 200+ locations with 25,000+ concurrent connections. Sub-second bidding latency across four data centres.', f: 'Publishes: bids, auction results \u00B7 Subscribes: listings, price updates, lot status' }},
      { id: 'fleet', name: 'Fleet / rental ops', proto: 'REST \u00B7 MQTT', flows: '\u2190 \u2192 reservations, returns, status',
        tip: { t: 'Fleet & rental operations', d: 'Reservations, checkouts, returns, and vehicle servicing all produce events consumed across the operation. Building toward real-time vehicle telemetry.', f: 'Publishes: reservations, returns, vehicle status \u00B7 Subscribes: availability, pricing, maintenance alerts' }}
    ],
    right: [
      { id: 'consumer-app', name: 'Consumer / driver app', proto: 'REST \u00B7 WebSocket', flows: '\u2190 status, alerts \u2192 commands',
        tip: { t: 'Consumer & driver app', d: 'Connected car telemetry creates a direct digital relationship with every driver. Foundation for personalised services, loyalty, and remote vehicle management.', f: 'Publishes: user preferences, remote commands \u00B7 Subscribes: vehicle status, alerts, service reminders' }},
      { id: 'sap-auto', name: 'SAP / ERP', proto: 'SAP AEM \u00B7 JMS', flows: '\u2190 \u2192 procurement, PI/PO, billing',
        tip: { t: 'SAP / ERP integration', d: 'SAP AEM for procurement event distribution and PI/PO workflow decoupling. Progressively replacing IBM MQ instances while maintaining interoperability.', f: 'Publishes: PO confirmations, invoices \u00B7 Subscribes: procurement requests, production triggers' }},
      { id: 'dealer', name: 'Dealer management', proto: 'REST', flows: '\u2190 inventory \u2192 orders, warranty',
        tip: { t: 'Dealer management systems', d: 'Dealer networks receive real-time inventory updates, warranty events, and recall notifications. Orders and warranty claims flow back to HQ.', f: 'Publishes: orders, warranty claims \u00B7 Subscribes: inventory, recalls, pricing updates' }},
      { id: 'analytics-auto', name: 'Analytics & ML', proto: 'Kafka bridge', flows: '\u2190 events \u2192 predictions',
        tip: { t: 'Analytics & ML', d: 'Vehicle telemetry and business events feed analytics for predictive maintenance, demand forecasting, and fleet optimisation.', f: 'Publishes: predictions, anomaly alerts \u00B7 Subscribes: vehicle telemetry, business events' }}
    ],
    deploy: [
      { id: 'd-prem', label: 'On-premises', sub: 'Factory / data centre', tip: 'On-premise for production systems and auction platforms with strict latency and data residency requirements.' },
      { id: 'd-cloud', label: 'Solace Cloud', sub: 'AWS \u00B7 Azure \u00B7 SAP BTP', tip: 'Cloud for connected vehicle scale, SAP BTP integration, and elastic consumer-facing services.' },
      { id: 'd-edge', label: 'In-vehicle', sub: 'Gateway \u00B7 dealership', tip: 'Lightweight brokers in vehicle gateways and at dealerships for local processing and store-and-forward.' }
    ]
  },

  "manufacturing-cpg": {
    title: 'Manufacturing & CPG event mesh pattern',
    description: 'Factory OT systems and enterprise IT exchange production, quality, and supply chain events bidirectionally through the mesh.',
    left: [
      { id: 'mes', name: 'MES / SCADA', proto: 'MQTT \u00B7 NATS', flows: '\u2190 \u2192 production data, quality events',
        tip: { t: 'MES & SCADA systems', d: 'Factory execution systems stream production events, quality checks, and equipment telemetry. A major chemical manufacturer modernised legacy MES for real-time data ingestion. An automotive parts maker bridges shopfloor via NATS to SAP AEM.', f: 'Publishes: production status, quality, equipment telemetry \u00B7 Subscribes: work orders, master data, scheduling' }},
      { id: 'erp-factory', name: 'SAP ECC / S4HANA', proto: 'SAP AEM \u00B7 JMS', flows: '\u2190 \u2192 master data, procurement, orders',
        tip: { t: 'SAP ERP systems', d: 'SAP event-enabling add-on generates events from ECC and S/4HANA. A global chemical company event-enabled SAP ECC connecting on-prem to Azure in real time. Another connects 11+ regional ERPs through AEM.', f: 'Publishes: master data changes, procurement events, production orders \u00B7 Subscribes: shopfloor events, quality data, demand signals' }},
      { id: 'supply-chain', name: 'Supply chain / logistics', proto: 'REST \u00B7 MQTT', flows: '\u2190 \u2192 inventory, shipments, demand',
        tip: { t: 'Supply chain & logistics', d: 'One of the world\\\'s largest food producers connects 300 distribution centres. A leading CPG company tracks 2,000 vessels from 100 carriers via a virtual ocean control tower. Real-time inventory and demand signals across the network.', f: 'Publishes: inventory levels, shipment events, demand signals \u00B7 Subscribes: production status, routing instructions, forecasts' }},
      { id: 'iot-factory', name: 'Factory IoT / sensors', proto: 'MQTT', flows: '\u2192 equipment health, environment',
        tip: { t: 'Factory IoT & sensors', d: 'Equipment health monitoring, environmental sensors, autonomous transport vehicles. A leading drive technology manufacturer uses Solace for equipment monitoring and autonomous factory transport.', f: 'Publishes: temperature, vibration, runtime, position \u00B7 Subscribes: alert thresholds, control commands' }}
    ],
    right: [
      { id: 'analytics-mfg', name: 'Analytics & AI', proto: 'Kafka bridge', flows: '\u2190 events \u2192 predictions, quality',
        tip: { t: 'Analytics & AI platforms', d: 'Operational events feed Databricks, Azure Data Lake, and Snowflake for predictive maintenance, quality prediction, and demand sensing. A global food producer uses AI-driven insights from real-time event streams.', f: 'Publishes: predictions, quality alerts, demand forecasts \u00B7 Subscribes: all production and supply chain events' }},
      { id: 'ecomm', name: 'eCommerce / CRM', proto: 'REST \u00B7 WebSocket', flows: '\u2190 orders, customers \u2192 updates',
        tip: { t: 'eCommerce & CRM systems', d: 'Product, pricing, and inventory data flows in real time to eCommerce and CRM platforms. A major CPG company event-enabled SAP to stream data to iPaaS, eCommerce, and CRM systems.', f: 'Publishes: orders, customer interactions \u00B7 Subscribes: product data, pricing, inventory availability' }},
      { id: 'partner-mfg', name: 'Partners / EDI', proto: 'REST \u00B7 JMS', flows: '\u2190 \u2192 orders, invoices, forecasts',
        tip: { t: 'Partner & EDI integration', d: 'Supplier and distributor integration. A global beverage company streams order events to prevent duplicate and lost orders that were costing hundreds of thousands per hour. EDI transactions flow through the event mesh.', f: 'Publishes: purchase orders, forecasts \u00B7 Subscribes: confirmations, invoices, shipping notices' }},
      { id: 'mdm', name: 'MDM / PLM', proto: 'REST \u00B7 SAP AEM', flows: '\u2190 \u2192 product data, recipes, specs',
        tip: { t: 'Master data & product lifecycle', d: 'A leading CPG manufacturer event-enabled MDM to publish once and reach every consumer in real time. Another replaced complex P2P integrations between ERP and PLM with a centralised event backbone.', f: 'Publishes: product master, BOM changes, recipe updates \u00B7 Subscribes: quality feedback, regulatory changes' }}
    ],
    deploy: [
      { id: 'd-prem', label: 'Factory edge', sub: 'On-prem \u00B7 air-gapped', tip: 'On-premise appliances in factories for low-latency OT integration. Handles MES, SCADA, and sensor data locally with guaranteed delivery.' },
      { id: 'd-cloud', label: 'Solace Cloud', sub: 'Azure \u00B7 AWS \u00B7 SAP BTP', tip: 'Cloud for analytics, partner connectivity, and SAP BTP integration. Leading manufacturers deploy hybrid architectures spanning on-prem and cloud.' },
      { id: 'd-dc', label: 'Corporate DC', sub: 'Enterprise integration', tip: 'Corporate data centre handles SAP integration, MDM distribution, and multi-regional ERP consolidation. Connected to factory and cloud via event mesh.' }
    ]
  }
};
