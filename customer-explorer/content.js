const CONTENT_EN = {
  aviation: {

stories: [
  {
    id: 'av1',
    subsector: 'Air Traffic Management',
    technology: {
      headline: 'A pan-European air traffic organisation replaced legacy messaging to connect 40+ national agencies in real time',
      outcome: 'By deploying an event-driven backbone using open standards like AMQP, this organisation now manages real-time flight schedules and aviation data across dozens of national air traffic control agencies — continuously calculating optimal flight path adjustments as conditions change.',
      detail: 'The previous system relied on proprietary, point-to-point integrations that were costly to maintain and slow to evolve. The move to an event mesh architecture decoupled producers and consumers of flight data, dramatically reducing the cost and complexity of onboarding new national partners. The system handles safety-critical data with sub-second latency across the continent.'
    },
    integration: {
      headline: 'Forty national air traffic systems connected through a single event platform — replacing years of point-to-point integration work',
      outcome: 'The integration team replaced fragmented, proprietary connections between national air traffic systems with a publish-subscribe backbone using AMQP. New agencies can now be onboarded without custom integration development.',
      detail: 'Before the migration, every new national partner required bespoke work. The event mesh standardised data exchange using open protocols, enabling the team to focus on business logic rather than connectivity plumbing. Flight schedule data, real-time surveillance feeds, and exception events all flow through a single platform — with topic-based routing allowing each agency to subscribe only to the data they need.'
    },
    business: {
      headline: 'Real-time flight coordination across 40+ countries — no more manual handoffs between national agencies',
      outcome: 'Operational teams across dozens of nations now share live flight data instantly, enabling collaborative decisions that keep airspace safe and efficient. Disruptions that once required phone calls and manual coordination are handled through automated event flows.',
      detail: 'The operational impact is significant: reduced flight delays mean lower fuel costs, better on-time performance for airlines, and fewer cascading disruptions. The platform calculates least-disruptive flight path adjustments continuously, sharing results with every relevant agency in real time.'
    },
    architect: {
      headline: 'Pan-European ATM rebuilt on event mesh: AMQP pub/sub connecting 40+ national systems with topic-level routing',
      outcome: 'The architecture uses PubSub+ as the messaging backbone with AMQP as the primary protocol. Topic-based routing enables fine-grained subscriptions — individual agencies subscribe at the level of specific airports or flight information regions rather than consuming full data feeds.',
      detail: 'Safety-critical, low-latency data distribution with built-in redundancy. Flight schedules, real-time position data, and exception events (track blocked, diversions, weather) all flow through the same event mesh. National agencies run heterogeneous local systems while sharing a common data fabric. The architecture was designed for future extensibility to SWIM standards.'
    }
  },
  {
    id: 'av2',
    subsector: 'Airlines',
    technology: {
      headline: 'A major airline migrated 100+ legacy messaging instances to the cloud — eliminating the outages that had grounded flights',
      outcome: 'Facing failed DR testing and legacy TIBCO and IBM MQ systems that were not cloud-ready, this airline deployed event brokers on-premise and in the cloud, connected via event mesh. The result: zero message loss across regions and a clear migration path away from vendor lock-in.',
      detail: 'The airline\'s previous messaging infrastructure had directly caused customer-impacting outages and flight delays — creating both revenue loss and reputational damage. By deploying the new platform alongside existing systems and bridging via event mesh, the migration happened incrementally. Multi-protocol support meant existing applications connected without rewriting.'
    },
    integration: {
      headline: 'An airline integration team bridged TIBCO, IBM MQ, and cloud-native systems into a single hybrid event mesh — no application rewrites',
      outcome: 'Multi-protocol support allowed existing JMS, AMQP, and REST applications to connect without code changes. The team delivered a hybrid on-prem/cloud architecture that maintains operations during a multi-year migration of 100+ legacy instances.',
      detail: 'The challenge was replacing middleware while the airline kept flying. Event Portal gave the team visibility into the entire event landscape, identifying which systems could migrate first. Connectors bridged old and new, enabling gradual transition over a risky cutover. Default TLS encryption and SOC-2 compliance were built in from the start.'
    },
    business: {
      headline: 'A major airline eliminated flight delays caused by messaging failures — after the old platform had caused reputational damage',
      outcome: 'Before the change, messaging platform failures directly caused flight delays, leading to revenue loss and passenger disruption. Since deploying the new platform, there has not been a single priority-one incident in the streaming layer.',
      detail: 'Flight delays cascade across routes, compounding revenue loss and customer frustration. The new platform delivers data in a guaranteed way, simplifying integration and reducing risk. Development cycles shortened because teams no longer need wrapper services for every REST interaction. Faster time to market for new digital services has become a competitive advantage.'
    },
    architect: {
      headline: 'Hybrid event mesh spanning on-prem and AWS: replacing TIBCO EMS and IBM MQ with zero-RPO cross-region replication',
      outcome: 'PubSub+ Event Brokers deployed on-premise and in AWS, connected via event mesh. Multi-protocol support (JMS, AMQP, MQTT, REST) allows legacy and modern applications to coexist. Built-in HA/DR delivers zero RPO and RTO without third-party products.',
      detail: 'The architecture addresses infrastructure reliability (cross-region replication, built-in failover), migration (Event Portal maps the event landscape, connectors bridge legacy), and security (default TLS, SOC-2). The event mesh pattern allows incremental workload migration while maintaining a single operational view.'
    }
  },
  {
    id: 'av3',
    subsector: 'Airports & Ground Infrastructure',
    technology: {
      headline: 'Asia-Pacific airports replaced siloed legacy systems with a unified event platform — accelerating new service rollout across terminals',
      outcome: 'Multiple airports across the region were running siloed IBM middleware with file-based and point-to-point integrations. By moving to a unified event platform, they broke down data silos across terminals and dramatically reduced the time to deploy new services.',
      detail: 'At one major hub, the same systems were duplicated across four terminals by different project teams. The unified event platform made data available once and consumable everywhere. At another airport, the incumbent IBM stack had caused outages due to failover issues. A developer portal now lets airline partners integrate through self-service.'
    },
    integration: {
      headline: 'From file-based to event-driven: airports consolidated legacy IBM middleware into a single integration backbone',
      outcome: 'Integration teams replaced archaic file-based data movement and point-to-point connections with a modern pub-sub backbone. Baggage handling, ground operations, flight information, and cargo systems now share data through events rather than batch transfers.',
      detail: 'At one airport, the transformation eliminated redundant data copies across terminals. The iPaaS layer (MuleSoft or webMethods) was combined with the event broker to handle both sync API calls and async event distribution. A key win was making events available via a developer portal — airline and ground handling partners can self-serve data access instead of raising integration requests.'
    },
    business: {
      headline: 'Airports eliminated terminal-by-terminal data silos — giving operations teams a real-time view of the entire airport',
      outcome: 'Before the transformation, a lack of integration meant limited visibility over airport operations. Operational teams now have a unified, real-time situational awareness picture — and can respond to incidents immediately.',
      detail: 'Reduced costs by eliminating system duplication across terminals, improved customer satisfaction through faster response to disruptions, and better collaboration with partners through shared data. At one innovative airport, the platform even powers a drone traffic management pilot.'
    },
    architect: {
      headline: 'Airport integration modernisation: iPaaS + event broker pattern replacing IBM middleware, with developer portal for partner self-service',
      outcome: 'The architecture pairs an iPaaS layer (API orchestration, transformations) with PubSub+ (async event distribution, queueing, guaranteed delivery). Events are published once and consumed by any system — flight info, baggage handling, ground ops, and external partners all subscribe to the same data streams.',
      detail: 'On-premise appliances handle latency-sensitive ground ops (fuelling, de-icing, runway handling). The developer portal enables partner self-service. Protocol support includes AMQP, REST, and MQTT — the last being critical for IoT sensors and ground equipment. One airport is using the platform as the SWIM backbone for drone UTM integration.'
    }
  }
,
  {
    id: 'av4',
    subsector: 'Aerospace & Defence',
    technology: {
      headline: 'Aerospace manufacturers connected MRO systems, supply chain compliance, and factory IoT through an event mesh — enabling real-time visibility across global production programmes',
      outcome: 'Aerospace manufacturing involves complex multi-tier supply chains with strict compliance requirements. The event mesh connects MRO (maintenance, repair, overhaul) systems, factory IoT sensors, and supply chain compliance tracking in real time across multiple production sites globally.',
      detail: 'Defence and aerospace companies operate in environments where data integrity and traceability are non-negotiable. Safety-critical data distribution requires guaranteed delivery with full audit trails. The event mesh handles both the high-volume telemetry from factory IoT and the lower-volume but mission-critical compliance events through a single infrastructure.'
    },
    integration: {
      headline: 'Aerospace integration teams connected SAP, MES, and supply chain compliance systems through event-driven architecture — replacing batch-driven production reporting',
      outcome: 'Production data from MES, quality events from inspection systems, and supply chain compliance signals from tier-1 and tier-2 suppliers all flow through the event mesh. SAP integration handles procurement and MRO workflows triggered by operational events.',
      detail: 'The integration challenge in aerospace is multi-party: OEMs, engine manufacturers, component suppliers, and MRO providers all need to exchange data in near real time. The event mesh provides a shared infrastructure where each party publishes and subscribes to relevant event topics without custom point-to-point integrations per relationship.'
    },
    business: {
      headline: 'Aerospace companies that can trace every component from supplier to aircraft in real time reduce compliance risk and accelerate production programmes',
      outcome: 'Regulatory compliance in aerospace requires end-to-end traceability. Batch-based reporting creates gaps where non-compliant components could enter production undetected. Real-time event flows from suppliers through manufacturing to assembly ensure compliance is continuous, not periodic.',
      detail: 'The business impact extends beyond compliance: real-time production visibility enables better capacity planning, reduces work-in-progress inventory, and accelerates time-to-delivery for aircraft programmes that can span years. Every day saved in the production cycle has significant financial value.'
    },
    architect: {
      headline: 'Aerospace event mesh: factory IoT via MQTT, SAP AEM for MRO and procurement, supply chain compliance events, multi-site production visibility',
      outcome: 'MQTT for factory IoT sensor ingestion. SAP AEM for MRO and procurement event flows. REST APIs for supplier compliance data exchange. Multi-site mesh connecting production facilities, assembly lines, and MRO centres globally. Guaranteed delivery with full audit trail for safety-critical events.',
      detail: 'Key patterns: multi-party event exchange between OEMs and suppliers; factory IoT for production monitoring; SAP integration for MRO lifecycle events; compliance event streaming with guaranteed delivery and audit; multi-site mesh spanning production facilities across countries; edge deployment at factory locations for local processing.'
    }
  },
  {
    id: 'av5',
    subsector: 'Aviation Technology',
    technology: {
      headline: 'Aviation technology providers built event-driven platforms for passenger servicing, crew management, and disruption handling — connecting airlines, airports, and ground handlers',
      outcome: 'Aviation technology platforms serve as the connective tissue between airlines, airports, and ground handling companies. Event-driven architecture enables real-time passenger rebooking during disruptions, crew scheduling updates, and baggage tracking across the entire journey — from check-in to arrival.',
      detail: 'The aviation ecosystem requires real-time coordination between dozens of independent systems and organisations. A flight delay triggers cascading events: passenger rebooking, crew reassignment, gate changes, baggage re-routing, catering adjustments, and fuel recalculation. The event mesh handles this cascade in real time rather than through sequential batch updates.'
    },
    integration: {
      headline: 'Aviation platform providers replaced legacy TIBCO and IBM MQ integrations with event mesh — connecting departure control, crew management, and passenger servicing systems',
      outcome: 'Legacy messaging platforms (TIBCO, IBM MQ) could not handle the volume and complexity of modern airline operations. The event mesh connects departure control systems, crew management, loyalty platforms, and passenger servicing through a single backbone with multi-protocol support.',
      detail: 'Integration patterns: IATA standard messaging for inter-airline and airport communication; JMS bridge for legacy airline systems; REST/WebSocket for modern passenger-facing applications; MQTT for IoT devices (self-service kiosks, bag tags, beacons). The event mesh normalises these diverse protocols into a unified event layer.'
    },
    business: {
      headline: 'When a flight is disrupted, every minute of delay in rebooking costs passenger satisfaction and revenue — event-driven platforms reduce disruption response from hours to minutes',
      outcome: 'Flight disruptions are inevitable. The competitive differentiator is how quickly an airline can respond: rebook passengers, reassign crew, update connections, and notify travellers. Airlines using event-driven platforms recover from disruptions faster, retain more passengers, and reduce compensation costs.',
      detail: 'Beyond disruption handling, real-time event flows enable personalised passenger experiences: lounge access offers triggered by delay events, meal preferences flowing to catering, and loyalty tier recognition at every touchpoint. The passenger experience becomes proactive rather than reactive.'
    },
    architect: {
      headline: 'Aviation platform architecture: departure control events, crew scheduling, passenger rebooking, loyalty integration — multi-protocol mesh connecting airlines, airports, and handlers',
      outcome: 'Event mesh connecting airline host systems, departure control, crew management, loyalty platforms, airport operational databases, and ground handler systems. IATA standard messaging alongside proprietary protocols. Multi-site deployment across airline hubs with cross-site event routing for connecting passenger journeys.',
      detail: 'Key patterns: disruption cascade management (one delay event triggers parallel rebooking, crew, gate, baggage, catering events); IATA Type B messaging bridge for legacy airline systems; multi-tenant architecture for platform providers serving multiple airlines; real-time loyalty event streaming; WebSocket push for passenger notifications; edge deployment at airport locations.'
    }
  }
],

values: {
  technology: [
    { title: 'Reduce vendor lock-in', text: 'Multi-protocol support (AMQP, JMS, MQTT, REST) means you are not tied to one vendor ecosystem. Your investment works with whatever comes next.' },
    { title: 'Migrate without disruption', text: 'Bridge legacy TIBCO, IBM MQ, or ActiveMQ into a hybrid event mesh. Migrate incrementally while keeping operations running.' },
    { title: 'Meet safety-critical SLAs', text: 'Built-in HA/DR with zero RPO replication, designed for environments where message loss or latency directly impacts safety.' },
    { title: 'Simplify the partner ecosystem', text: 'Developer portals and self-service data access replace weeks-long integration projects for airlines, ground handlers, and agencies.' }
  ],
  integration: [
    { title: 'Replace point-to-point with pub/sub', text: 'Stop building custom integrations for every consumer. Publish events once — baggage systems, flight displays, ground ops, and partners all subscribe independently.' },
    { title: 'Bridge legacy and modern', text: 'Existing JMS and AMQP applications connect without code changes. New services use REST or MQTT. Everything flows through one platform.' },
    { title: 'iPaaS + event broker together', text: 'Pair Solace with Boomi, MuleSoft, or webMethods for the best of both worlds: API orchestration for sync, event mesh for async.' },
    { title: 'Self-service partner onboarding', text: 'Developer portal lets airline partners and ground handlers discover and subscribe to events without raising integration tickets.' }
  ],
  business: [
    { title: 'Eliminate IT-driven flight delays', text: 'When messaging failures cause delays, costs cascade: revenue loss, reputational damage, passenger disruption. Event-driven infrastructure is designed for zero downtime.' },
    { title: 'Real-time situational awareness', text: 'Unified operational view across terminals, runways, and airspace. Operations teams respond to incidents in seconds instead of waiting for manual chains.' },
    { title: 'Faster time to new services', text: 'New digital services launch faster when data is already flowing in real time. Weeks of integration work become days.' },
    { title: 'Lower cost through consolidation', text: 'Stop duplicating systems across terminals and agencies. One event platform replaces dozens of point-to-point connections.' }
  ],
  architect: [
    { title: 'Event mesh for hybrid deployment', text: 'On-premise appliances for latency-sensitive ground ops, cloud brokers for elastic workloads, connected via resilient event mesh.' },
    { title: 'SWIM-ready architecture', text: 'Standards-based messaging (AMQP, REST, MQTT) aligns with SWIM and NextGen ATM initiatives. Build for today, interoperate tomorrow.' },
    { title: 'Topic-based fine-grained routing', text: 'Agencies subscribe to specific airports, flight info regions, or event types — not full feeds. Reduces bandwidth and enables precise data governance.' },
    { title: 'Multi-protocol without translation', text: 'JMS, REST microservices, MQTT IoT sensors, and AMQP partners all connect natively — no protocol bridging required at the infrastructure layer.' }
  ]
},

links: {
  technology: [
    { text: 'How a national air traffic provider modernised with SWIM', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'Watch: Event mesh for mission-critical aviation', url: 'https://solace.com/resources/', icon: 'video' },
    { text: 'Solace for transportation', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  integration: [
    { text: 'Technical brief: Replacing legacy middleware in aviation', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'iPaaS + event broker: architecture patterns', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'Aviation use cases on solace.com', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  business: [
    { text: 'How airports use real-time data to transform operations', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'Customer story: Eliminating outage-driven flight delays', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: 'What Solace makes possible in aviation', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  architect: [
    { text: 'Architecture guide: Event mesh for aviation', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'Technical deep dive: SWIM and event-driven ATM', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'Multi-protocol messaging explained', url: 'https://solace.com/products/event-broker/', icon: 'globe' }
  ]
}


  },

  logistics: {
stories: [
  {
    id: 'lo1',
    subsector: 'Ports & Maritime',
    technology: {
      headline: "The world's largest fully automated port runs its entire crane and vehicle fleet on an event-driven messaging backbone",
      outcome: "At a brand-new automated port, event brokers serve as the messaging backbone between applications, automated guided vehicles, yard cranes, and quay cranes \u2014 all communicating in real time within strict latency budgets over a private 5G network.",
      detail: "Designed event-first from the ground up. Thousands of concurrent connections to hardware and applications, with guaranteed delivery and low jitter. The operator focuses on running the port rather than worrying about whether infrastructure commands are getting through."
    },
    integration: {
      headline: "A fully automated port connected AGVs, cranes, and applications through a single messaging backbone \u2014 no integration middleware",
      outcome: "Rather than layering integration middleware between operational technology and applications, the event broker connects automated guided vehicles, yard cranes, and quay cranes directly. All equipment communicates via private 5G with strict latency guarantees.",
      detail: "Equipment publishes status events, applications subscribe. No message transformation in the critical path. The decision to avoid middleware was driven by the latency budget \u2014 commands to moving vehicles and cranes cannot tolerate ESB or iPaaS overhead."
    },
    business: {
      headline: "A port operator built the world's largest automated terminal \u2014 knowing every command to every crane and vehicle would arrive on time",
      outcome: "When you are moving containers with autonomous vehicles and robotic cranes, messaging reliability is not an IT metric \u2014 it is an operational safety requirement. The event-driven backbone gives confidence to run fully automated operations at scale.",
      detail: "By ensuring real-time, guaranteed communication between equipment and applications, the port operates with fewer manual interventions, lower labour costs, and higher throughput."
    },
    architect: {
      headline: "Fully automated port: Solace appliances as the real-time backbone for AGVs and cranes over private 5G, sub-millisecond latency",
      outcome: "On-premise appliances handle thousands of concurrent connections to AGVs, yard cranes, and quay cranes over private 5G. Architecture prioritises low latency and jitter \u2014 a missed command to a moving vehicle is a safety incident.",
      detail: "No iPaaS or ESB in the critical path. Equipment publishes telemetry and subscribes to commands directly through the broker. Guaranteed delivery with persistence. Greenfield deployment optimised purely for operational requirements."
    }
  },
  {
    id: 'lo2',
    subsector: 'Shipping & Supply Chain',
    technology: {
      headline: "A global shipping line event-enabled its master data \u2014 delivering instant booking confirmations and real-time container tracking",
      outcome: "By event-enabling MDM and source systems, this shipping company now instantly confirms booking allocations and notifies logistics partners of value-add services purchased during shipment.",
      detail: "IoT-based container tracking added: electronic components on each container collect location and condition data via the event platform. A separate initiative uses the platform for a digital twin of vessel operations."
    },
    integration: {
      headline: "A shipping line replaced batch MDM updates with real-time event streams \u2014 connecting booking, partner, and IoT systems in one platform",
      outcome: "The integration team event-enabled master data so changes \u2014 new bookings, service purchases, partner updates \u2014 flow as events in real time. IoT data from container sensors flows through the same platform.",
      detail: "Event-driven CDC from MDM systems published onto the event mesh. Booking confirmations, partner notifications, and container telemetry share the same infrastructure. The digital twin consumes operational events for simulation and recovery."
    },
    business: {
      headline: "Shipping customers get instant booking confirmation \u2014 and real-time visibility over every container at sea",
      outcome: "Customers no longer wait for batch processing to confirm bookings. Partners are notified immediately when a customer purchases a value-add service. Both the shipping line and customers can track individual containers in real time.",
      detail: "In an industry where booking confirmation used to take hours and container visibility was limited to port check-ins, real-time event flows create a fundamentally better experience."
    },
    architect: {
      headline: "Event-driven MDM + IoT container tracking + digital twin: a shipping line's three-layer event architecture",
      outcome: "Layer 1: CDC from MDM publishes booking and partner events. Layer 2: IoT devices on containers stream location data via MQTT. Layer 3: Digital twin consumes operational events for vessel simulation.",
      detail: "All three layers share PubSub+ infrastructure. IoT layer uses MQTT, routed via topics. MDM layer uses standard messaging protocols. Shared infrastructure reduces complexity versus running separate systems per domain."
    }
  },
  {
    id: 'lo3',
    subsector: 'Freight & Logistics',
    technology: {
      headline: "Freight and logistics companies replaced legacy middleware with hybrid integration platforms \u2014 unifying tracking and warehouse systems",
      outcome: "Multiple logistics companies migrated from Oracle SOA, database-embedded business logic, and on-premise queuing to modern hybrid architectures. Common theme: real-time freight tracking, unified visibility, and a path to cloud.",
      detail: "At one company, business logic in database stored procedures was extracted into event-driven workflows. At another, tightly coupled applications causing data loss were decoupled. iPaaS for orchestration plus event broker for reliable async has become the standard pattern."
    },
    integration: {
      headline: "From Oracle SOA to iPaaS + event broker: how logistics teams modernise TMS and WMS integration",
      outcome: "Teams migrated from Oracle SOA, embedded stored procedures, and on-premise ActiveMQ to Boomi + Solace. Result: reliable async messaging, sync and async pattern support, and a cloud migration path.",
      detail: "Boomi handles orchestration and transformations, Solace handles guaranteed messaging and event distribution. CDC from source systems feeds Snowflake for analytics via Kafka bridge. Topic filtering replaced static integrations."
    },
    business: {
      headline: "Logistics companies gained unified freight visibility and predictive tracking \u2014 replacing fragmented manual processes",
      outcome: "Fragmented tracking and manual processes were causing revenue loss. After modernisation, operators have unified, real-time visibility with predictive location tracking replacing reactive status checks.",
      detail: "Lower operational costs, faster time to service new integration requests, and the ability to offer predictive tracking as a value-add to customers."
    },
    architect: {
      headline: "Hybrid integration for logistics: Boomi + Solace with CDC, Kafka bridge, and Snowflake analytics",
      outcome: "iPaaS (Boomi) for sync orchestration, PubSub+ for async. CDC from source systems feeds both operational consumers and analytics via Kafka bridge to Snowflake. On-prem to Azure hybrid.",
      detail: "Pub/sub and request/reply patterns, IoT telemetry ingestion, topic filtering for dynamic routing. Supports both sync API and async event patterns \u2014 critical where some interactions need guaranteed request/reply and others are fire-and-forget."
    }
  }
,
  {
    id: 'lo4',
    subsector: 'Last-Mile Delivery',
    technology: {
      headline: 'A logistics company connected driver apps, route optimisation, and proof-of-delivery systems through event-driven architecture — closing the visibility gap in the final leg of delivery',
      outcome: 'Last-mile delivery is where logistics meets the customer. Driver apps publish location updates, delivery confirmations, and exception events via MQTT. Route optimisation systems consume these events and publish dynamic re-routing instructions. Customers receive real-time delivery tracking without polling.',
      detail: 'The last-mile challenge is scale and variability: thousands of drivers, millions of parcels, and constantly changing conditions (traffic, weather, customer availability). Event-driven architecture handles this dynamism — every delivery attempt, every status change, every exception publishes as an event that triggers immediate downstream actions rather than waiting for batch sync.'
    },
    integration: {
      headline: 'Last-mile integration teams connected driver mobile apps, warehouse dispatch, route engines, and customer notification systems through a single event backbone',
      outcome: 'The integration spans warehouse (dispatch events), fleet (driver location and status), route engine (optimisation instructions), and customer (tracking and notification). Each system publishes and subscribes to relevant events. New delivery partners onboard by subscribing to existing event topics.',
      detail: 'Key integration patterns: MQTT for driver app telemetry (location, battery, connectivity status); REST for warehouse dispatch events; WebSocket for real-time customer tracking; Kafka bridge for analytics (delivery time prediction, route optimisation ML models). The event mesh handles the bidirectional flow between dispatch and field operations.'
    },
    business: {
      headline: 'Customers expect real-time delivery tracking and accurate ETAs — event-driven last-mile logistics delivers both while reducing failed delivery attempts',
      outcome: 'Failed deliveries are expensive: return logistics, re-delivery attempts, and customer dissatisfaction. Real-time events enable proactive communication — customers know exactly when their delivery will arrive and can reschedule before a failed attempt occurs. Delivery success rates improve while operational costs decrease.',
      detail: 'The competitive advantage in last-mile is visibility: logistics providers that offer real-time tracking, accurate ETAs, and proactive exception handling win contracts over those that cannot. Event-driven architecture provides this visibility as a platform capability, not a per-customer integration project.'
    },
    architect: {
      headline: 'Last-mile event mesh: MQTT from driver apps, dispatch events from warehouse, dynamic routing, WebSocket customer tracking, and ML-based ETA prediction',
      outcome: 'MQTT for high-volume driver telemetry ingestion. Event mesh routes location updates to customer tracking (WebSocket), route optimisation (REST), and analytics (Kafka bridge). Dispatch events from warehouse management trigger driver assignment. Proof-of-delivery events close the loop back to order management and customer notification.',
      detail: 'Key patterns: massive fan-in from thousands of driver devices via MQTT; real-time ETA calculation consuming driver location + traffic + delivery queue events; customer tracking via WebSocket push (no polling); exception handling events triggering automated customer notification and re-routing; Kafka bridge for delivery analytics and ML model training.'
    }
  },
  {
    id: 'lo5',
    subsector: 'Postal & Parcel',
    technology: {
      headline: 'National postal operators modernised their integration infrastructure with event-driven architecture — connecting sorting centres, delivery networks, and customs across millions of parcels daily',
      outcome: 'National postal operators handle millions of parcels daily through complex networks of sorting centres, depots, and delivery routes. Event-driven architecture replaced batch-based tracking with real-time visibility across the entire network — from acceptance through sorting to last-mile delivery.',
      detail: 'The postal transformation extends beyond parcel tracking: modern postal operators are becoming logistics platforms, competing with private carriers on speed and visibility. Event-driven architecture enables the real-time data flows that this transformation requires — connecting legacy sorting infrastructure with modern digital services.'
    },
    integration: {
      headline: 'Postal integration teams connected legacy sorting machines, modern scanning systems, and digital customer platforms through event mesh — bridging decades-old infrastructure with cloud services',
      outcome: 'The integration challenge in postal is bridging legacy infrastructure (sorting machines, conveyor systems, legacy tracking databases) with modern expectations (real-time tracking, API access for eCommerce platforms, customs pre-clearance). The event mesh provides the protocol bridge between industrial OT and digital IT.',
      detail: 'Key integration patterns: JMS bridge for legacy sorting machine events; MQTT for modern scanning devices and IoT sensors; REST for eCommerce platform integration; cross-border event exchange for international parcels; SAP integration for finance and procurement. The event mesh handles the diversity of protocols and systems that postal networks accumulate over decades.'
    },
    business: {
      headline: 'National postal operators competing with private carriers need real-time parcel tracking and eCommerce integration — event-driven architecture closes the capability gap',
      outcome: 'eCommerce platforms choose carriers based on tracking visibility, delivery speed, and API integration. National postal operators that cannot offer real-time tracking lose volume to private carriers. Event-driven architecture provides the real-time visibility and API capability that eCommerce demands.',
      detail: 'The revenue model for postal operators is shifting from universal service to competitive logistics. Real-time event infrastructure enables premium services (guaranteed delivery windows, proactive notifications) that command higher margins while improving the base service for standard parcels.'
    },
    architect: {
      headline: 'Postal event mesh: legacy sorting machines via JMS, modern scanners via MQTT, eCommerce APIs via REST, cross-border customs exchange, and real-time tracking',
      outcome: 'Multi-protocol mesh bridging legacy sorting infrastructure (JMS) with modern scanning and IoT (MQTT). eCommerce platforms integrate via REST APIs. Cross-border event exchange for international parcel tracking and customs pre-clearance. Real-time tracking events pushed to customer platforms via WebSocket.',
      detail: 'Key patterns: high-volume event ingestion from sorting centres (millions of scan events daily); protocol bridge between legacy and modern systems; cross-border mesh for international postal networks; eCommerce API integration for marketplace platforms; customs pre-clearance event flows; multi-site deployment across national sorting and depot infrastructure.'
    }
  }
],
values: {
  technology: [
    { title: "Real-time operations, not batch", text: "Booking confirmations, freight tracking, and partner notifications happen in seconds, not hours." },
    { title: "Scale to IoT without a separate platform", text: "Container sensors, vehicle telemetry, and crane commands all flow through the same event infrastructure." },
    { title: "Hybrid cloud on your terms", text: "On-premise for latency-sensitive port operations, cloud for elastic analytics. Connected via event mesh." },
    { title: "Modernise without ripping out legacy", text: "Bridge Oracle SOA, IBM MQ, and database-embedded logic into event-driven flows incrementally." }
  ],
  integration: [
    { title: "iPaaS + event broker for logistics", text: "Boomi or MuleSoft for orchestration, Solace for guaranteed async messaging. Handles both TMS/WMS integration and real-time distribution." },
    { title: "CDC from source systems", text: "Event-enable MDM and source systems. Changes flow as events consumed by operational systems, analytics, and partner notifications simultaneously." },
    { title: "Guaranteed delivery for critical paths", text: "Freight events, crane commands, and booking confirmations cannot be lost. Persistent messaging replaces best-effort queuing." },
    { title: "Multi-protocol for diverse endpoints", text: "MQTT for IoT sensors, REST for partner APIs, JMS for legacy warehouse systems \u2014 single broker, no protocol translation." }
  ],
  business: [
    { title: "Faster customer response", text: "Instant booking confirmations, real-time shipment tracking, and proactive partner notifications replace batch-driven delays." },
    { title: "Visibility that drives revenue", text: "Unified freight tracking eliminates inconsistencies and enables predictive services you can sell to customers." },
    { title: "Automation confidence", text: "When AGVs, cranes, and autonomous systems depend on messaging, reliability is not optional. Designed for zero-downtime operations." },
    { title: "Lower integration costs", text: "Stop building custom point-to-point connections. Publish once, subscribe many \u2014 dramatically reducing integration effort." }
  ],
  architect: [
    { title: "Event-first for greenfield", text: "New automated facilities designed event-first. Equipment, applications, and analytics subscribe to a shared event backbone." },
    { title: "Kafka bridge for analytics", text: "Operational events flow through PubSub+ for real-time, then bridge to Kafka and Snowflake for analytics. One event, two patterns." },
    { title: "Sub-millisecond for OT, elastic for IT", text: "On-premise appliances for OT with strict latency budgets. Cloud brokers for elastic IT workloads. Same event mesh." },
    { title: "Topic-based routing at scale", text: "Dynamic topic filtering routes events without application logic. Container X to Partner Y, booking Z notifies Warehouse W." }
  ]
},
links: {
  technology: [
    { text: "How a global port runs on event-driven automation", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Watch: Real-time logistics with event mesh", url: "https://solace.com/resources/", icon: "video" },
    { text: "Solace for transportation and logistics", url: "https://solace.com/industries/transportation/", icon: "globe" }
  ],
  integration: [
    { text: "Technical brief: Boomi + Solace for logistics", url: "https://solace.com/resources/", icon: "doc" },
    { text: "CDC patterns for supply chain modernisation", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Logistics use cases on solace.com", url: "https://solace.com/industries/transportation/", icon: "globe" }
  ],
  business: [
    { text: "How logistics leaders use real-time data", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Customer story: Automating port operations", url: "https://solace.com/company/customers/", icon: "doc" },
    { text: "What Solace makes possible in logistics", url: "https://solace.com/industries/transportation/", icon: "globe" }
  ],
  architect: [
    { text: "Architecture guide: Event mesh for logistics", url: "https://solace.com/resources/", icon: "doc" },
    { text: "IoT + event broker: design patterns", url: "https://solace.com/resources/", icon: "doc" },
    { text: "PubSub+ broker specifications", url: "https://solace.com/products/event-broker/", icon: "globe" }
  ]
}

  },

  rail: {
stories: [
  {
    id: 'ra1',
    subsector: 'Rail Operations',
    technology: {
      headline: "A national railway runs 40+ real-time use cases on a single event platform \u2014 from driver info to tunnel supervision",
      outcome: "One of Europe's busiest rail operators uses event-driven messaging for 40+ use cases: train driver information, real-time position and speed, exception events, capacity planning, timetable management, shunting, and tunnel supervision.",
      detail: "What started as train position data expanded organically as teams discovered they could solve other problems with the same infrastructure. Distribution over low-capacity lines between remote operation centres was a challenge event architecture solved elegantly."
    },
    integration: {
      headline: "40+ railway systems consolidated into a single event-driven integration layer \u2014 publish once, consume everywhere",
      outcome: "Instead of separate integrations per use case, one event platform handles driver information, position tracking, exception events, timetable planning, and tunnel supervision through topic-based subscriptions.",
      detail: "Train position data published as events is consumed by driver info systems, planning tools, and operations centres simultaneously. Exception events flow with priority routing. Low-capacity lines between remote centres are served without overloading bandwidth."
    },
    business: {
      headline: "A railway manages real-time operations on a single platform that started with just one use case \u2014 and grew to 40+",
      outcome: "What began as a train position solution expanded to cover 40+ operational use cases. Each new use case leverages existing infrastructure rather than requiring a new integration project. The business benefit compounds over time.",
      detail: "Train drivers get real-time information, planners adjust capacity dynamically, operations centres respond to exceptions within seconds. The platform handles routine timetable distribution to safety-critical tunnel supervision."
    },
    architect: {
      headline: "40+ railway use cases on one event mesh: topic hierarchy for telemetry, exceptions, planning, and tunnel supervision",
      outcome: "A single PubSub+ deployment handles diverse use cases through topic hierarchy and filtering. High-frequency telemetry, priority exception events, different QoS for planning data, and native support for low-bandwidth remote links.",
      detail: "Real-time telemetry, operational commands, planning workflows, safety events, and inter-centre communication coexist. Topic hierarchy enables fine-grained subscriptions \u2014 operations centres subscribe only to their geographic region."
    }
  },
  {
    id: 'ra2',
    subsector: 'Rail Infrastructure',
    technology: {
      headline: "Rail operators replaced TIBCO and Mosquitto with event-driven platforms \u2014 modernising ERP, telemetry, and ticketing",
      outcome: "Multiple operators replaced legacy messaging (TIBCO BW/EMS, Mosquitto) with modern event platforms. Use cases: ERP integration, employee certification tracking, locomotive telemetry, and passenger check-in/check-out processing.",
      detail: "At one operator, TIBCO exiting the region forced complete replacement of the data integration hub supporting real-time employee certification (regulatory) and Oracle ERP migration. At another, Mosquitto lacked HA for locomotive telemetry. A European railway ensures check-in data reliably reaches billing \u2014 recovering previously lost revenue."
    },
    integration: {
      headline: "TIBCO, Mosquitto, and point-to-point connections replaced \u2014 unifying ERP, telemetry, and passenger systems on one platform",
      outcome: "Legacy middleware replaced with a modern event broker handling both enterprise integration (ERP, HR) and operational technology (locomotive sensors, passenger gates). One platform for IT and OT.",
      detail: "At one operator, the TIBCO hub supported real-time employee certification (checking qualifications before dispatching maintenance crews) and Oracle ERP data transfer. Both continued without interruption during the swap. Passenger check-in events now flow through SAP AEM to both billing and customer portals."
    },
    business: {
      headline: "A European railway recovered lost revenue by ensuring every passenger check-in reaches billing \u2014 reliably, every time",
      outcome: "Passengers checking in and out generate billing events. Previously, data was lost in fragile integrations \u2014 trips not charged, revenue lost. Event-driven decoupling now guarantees every check-in reaches billing and the customer portal.",
      detail: "Beyond billing, the same event data feeds the passenger portal and other systems. The platform turned a single-purpose billing integration into a multi-consumer event stream. Every recovered event is a recovered fare."
    },
    architect: {
      headline: "TIBCO-to-Solace migration: Oracle ERP, MQTT locomotive telemetry, and SAP AEM for passenger billing on one broker",
      outcome: "Unified event broker replaces TIBCO BW/EMS for enterprise and Mosquitto for MQTT telemetry. MQTT from locomotives, SAP AEM for passenger billing, standard messaging for ERP \u2014 all on one platform.",
      detail: "One operator feeds a Databricks data hub for analytics with plans for full event-driven streaming. MQTT replacement needed HA and scalability Mosquitto could not provide. SAP AEM decouples check-in source from billing (S/4HANA) and customer commerce through guaranteed persistence."
    }
  },
  {
    id: 'ra3',
    subsector: 'Smart Trains & IoT',
    technology: {
      headline: "Next-generation smart trains connect to back-end systems via onboard sensors \u2014 a capability that did not exist before",
      outcome: "Rail operators deploying new rolling stock are building real-time connections between train sensors and HQ for the first time. The challenge: ingesting IoT data from multiple train suppliers into a unified analytics and operations platform.",
      detail: "New smart trains connect via native REST. Existing ActiveMQ was unfit for this capability. At another operator, three train suppliers each bring different IT systems \u2014 the event broker provides a single ingestion point for IoT data flowing into Azure analytics."
    },
    integration: {
      headline: "Smart train IoT data from multiple suppliers, ingested through a single event broker into unified analytics",
      outcome: "Three different train suppliers each bring different IT systems. The event broker serves as the single ingestion point \u2014 normalising diverse IoT data into a unified stream for Azure analytics and operations.",
      detail: "Boomi was the incumbent but its native queuing was inadequate for rolling stock telemetry scale and reliability. Adding Solace provided guaranteed messaging and direct third-party integration. Topic-based routing replaced content-based routing for efficiency."
    },
    business: {
      headline: "Rail operators are turning smart trains into data-generating assets \u2014 enabling real-time fleet management for the first time",
      outcome: "New rolling stock with onboard sensors creates real-time visibility into train health, performance, and status. Operators can manage services in real time rather than relying on scheduled inspections.",
      detail: "Railways that previously had signalling integration but not rolling stock integration can now monitor entire fleets. Predictive maintenance, faster incident response, and better passenger information \u2014 from data that was not available before."
    },
    architect: {
      headline: "Connected trains: MQTT/REST from sensors, event broker ingestion, Kafka bridge to Azure data lake",
      outcome: "Onboard sensors connect via MQTT or REST to the event broker at HQ. Handles multi-supplier ingestion, normalises data, distributes to operations and analytics. Kafka bridge feeds Azure data lake.",
      detail: "Each train manufacturer delivers different IoT systems. The event broker abstracts diversity behind a consistent event model. ActiveMQ replaced for reliability. Boomi handles enterprise orchestration while Solace handles high-throughput sensor data."
    }
  }
,
  {
    id: 'ra4',
    subsector: 'Passenger Experience',
    technology: {
      headline: 'Rail operators connected passenger information, ticketing, and disruption management through event-driven architecture — delivering real-time updates across platforms, apps, and station displays',
      outcome: 'Passenger information systems consume events from train operations (delays, cancellations, platform changes) and publish real-time updates to station displays, mobile apps, and journey planners simultaneously. When a disruption occurs, passengers receive immediate notification across every channel.',
      detail: 'The passenger experience in rail depends on information accuracy and timeliness. Legacy batch-based passenger information meant delays between an operational event and the passenger being informed. Event-driven architecture closes this gap to seconds — a platform change publishes as an event and reaches every display, app, and announcement system simultaneously.'
    },
    integration: {
      headline: 'Rail passenger systems integration: ticketing, journey planning, disruption alerts, and accessibility services connected through a single event backbone',
      outcome: 'Ticketing systems, journey planners, disruption management, accessibility services, and retail/catering systems all connect through the event mesh. A train delay event triggers parallel updates to passenger information, connection protection, ticket validity extensions, and alternative transport arrangements.',
      detail: 'Key integration patterns: operational events from traffic management consumed by passenger information systems; ticketing events for gate control and revenue management; accessibility events matching passenger needs with train and station facilities; retail events for on-board catering and station services; multi-operator event exchange for through-ticketing and connections.'
    },
    business: {
      headline: 'Passengers who receive accurate, immediate disruption information trust the railway more — even when things go wrong, communication quality determines satisfaction',
      outcome: 'Research consistently shows that passenger satisfaction during disruptions depends more on information quality than on the disruption itself. Rail operators that provide immediate, accurate, personalised disruption information retain passenger trust and loyalty even when services are delayed.',
      detail: 'The business case extends to revenue: real-time ticketing events enable dynamic pricing, yield management, and promotional offers triggered by capacity availability. Connection protection (holding connecting services for delayed passengers) requires real-time event coordination between operators. Every improvement in passenger information quality reduces complaint handling costs.'
    },
    architect: {
      headline: 'Rail passenger architecture: operational events driving real-time passenger information, multi-channel distribution via WebSocket, ticketing integration, and multi-operator event exchange',
      outcome: 'Operational events from traffic management systems consumed by passenger information engines. Multi-channel distribution via WebSocket (apps), REST (journey planners), and direct feeds (station displays). Ticketing integration for gate control and revenue management. Multi-operator event exchange for through-ticketing.',
      detail: 'Key patterns: event-driven passenger information replacing polled data feeds; multi-channel fan-out from single operational event to displays, apps, announcements; connection protection via cross-operator event sharing; dynamic pricing consuming capacity and demand events; accessibility matching consuming train composition and station facility events.'
    }
  },
  {
    id: 'ra5',
    subsector: 'Rail Freight & Intermodal',
    technology: {
      headline: 'Rail freight operators connected intermodal terminals, wagon tracking, and customs systems through event-driven architecture — enabling real-time visibility across multi-modal supply chains',
      outcome: 'Rail freight involves coordination between terminals, shippers, rail operators, and customs authorities. Event-driven architecture provides real-time wagon tracking, terminal operations events, and automated customs pre-clearance — replacing phone calls and manual status updates with automated event flows.',
      detail: 'Intermodal freight (container transfers between rail, road, and sea) is particularly complex: each handover point is a potential visibility gap. The event mesh bridges these gaps by publishing container movement events at every stage — crane lifts, wagon assignments, departure, arrival, and customs clearance.'
    },
    integration: {
      headline: 'Rail freight integration teams connected terminal management, wagon tracking, and cross-border customs through event mesh — replacing EDI batch with real-time event exchange',
      outcome: 'Legacy EDI-based freight integration meant status updates were hours old by the time they reached shippers. The event mesh connects terminal operating systems, wagon tracking, train composition systems, and customs platforms in real time. Cross-border event exchange enables international freight visibility.',
      detail: 'Key integration patterns: terminal operating system events for container movements; wagon tracking via IoT/GPS; train composition events for loading and departure; customs pre-clearance event flows; shipper notification via REST/WebSocket; SAP integration for freight billing and revenue management.'
    },
    business: {
      headline: 'Rail freight operators competing with road transport need real-time tracking and reliable ETAs — event-driven visibility makes rail competitive for time-sensitive supply chains',
      outcome: 'Rail freight loses volume to road transport when shippers cannot get real-time visibility. Event-driven tracking and ETA prediction make rail competitive for supply chains that previously required road transport for visibility reasons. The modal shift also supports sustainability targets.',
      detail: 'The business case combines revenue growth (winning freight volumes from road), operational efficiency (better terminal utilisation through real-time coordination), and sustainability (supporting modal shift targets by making rail viable for more freight types). Real-time customs pre-clearance reduces border delays that make international rail freight uncompetitive.'
    },
    architect: {
      headline: 'Rail freight event mesh: terminal operations, wagon IoT tracking, train composition events, cross-border customs exchange, and shipper notification via REST/WebSocket',
      outcome: 'Terminal operating system events via JMS/REST. Wagon and container tracking via MQTT/IoT. Train composition and departure events from traffic management. Cross-border mesh for international freight customs exchange. Shipper portals consuming tracking events via WebSocket. SAP integration for freight billing.',
      detail: 'Key patterns: intermodal handover events bridging rail, road, and maritime visibility; cross-border event mesh for international freight corridors; terminal optimisation from real-time container position events; customs pre-clearance automation; IoT tracking for wagon and container condition monitoring (temperature, shock, door status).'
    }
  }
],
values: {
  technology: [
    { title: "One platform, many use cases", text: "Telemetry, billing, ERP, and operations planning all run on the same event infrastructure. Each new use case leverages what exists." },
    { title: "Replace legacy without disruption", text: "Bridge TIBCO, IBM MQ, Mosquitto, or ActiveMQ into a modern event mesh. Migrate incrementally while trains keep running." },
    { title: "Connected rolling stock", text: "New smart trains generate data legacy infrastructure cannot handle. Event architecture ingests, distributes, and analyses sensor data at scale." },
    { title: "Regulatory-grade reliability", text: "Employee certification, positive train control, and safety events demand guaranteed delivery. Built-in HA ensures no message loss." }
  ],
  integration: [
    { title: "Multi-supplier normalisation", text: "Different manufacturers, different systems. One event broker normalises diverse IoT streams into a consistent event model." },
    { title: "IT and OT on one platform", text: "Enterprise integration (ERP, HR, billing) and operational technology (sensors, signalling) on the same infrastructure." },
    { title: "SAP AEM for rail", text: "Passenger check-in events, billing integration, and master data through SAP Advanced Event Mesh \u2014 decoupling fragile chains." },
    { title: "Boomi + Solace for rail", text: "Boomi for enterprise orchestration, Solace for guaranteed messaging and IoT ingestion. Purpose-built for hybrid rail IT/OT." }
  ],
  business: [
    { title: "Revenue recovery", text: "Every lost check-in event is a lost fare. Guaranteed delivery ensures journey data reliably reaches billing, portals, and analytics." },
    { title: "Real-time service management", text: "Monitor your entire fleet in real time. Predictive maintenance, faster incident response, and better passenger information." },
    { title: "Operational compounding", text: "Each new use case costs less than the last. Train tracking expands to planning, safety, tunnel supervision, and beyond." },
    { title: "Safety and compliance", text: "Employee certification, positive train control, and safety-critical distribution for environments where compliance is non-negotiable." }
  ],
  architect: [
    { title: "Topic hierarchy for rail", text: "Geographic regions, train types, event categories \u2014 fine-grained subscriptions ensure each system gets only relevant data." },
    { title: "MQTT for telemetry, AMQP for enterprise", text: "Locomotives speak MQTT. Enterprise systems speak JMS or AMQP. Both connect natively without protocol translation." },
    { title: "Kafka bridge to data lake", text: "Real-time events through PubSub+, then bridge to Kafka and Azure for analytics. Operational and analytical paths share one source." },
    { title: "HA for safety-critical", text: "Positive train control, tunnel supervision, and exceptions demand zero message loss. Built-in HA with automatic failover." }
  ]
},
links: {
  technology: [
    { text: "How railways modernise with event-driven architecture", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Watch: Connected trains and real-time operations", url: "https://solace.com/resources/", icon: "video" },
    { text: "Solace for transportation", url: "https://solace.com/industries/transportation/", icon: "globe" }
  ],
  integration: [
    { text: "Technical brief: Replacing TIBCO in rail", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Boomi + Solace integration patterns", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Rail use cases on solace.com", url: "https://solace.com/industries/transportation/", icon: "globe" }
  ],
  business: [
    { text: "How rail operators turn data into advantage", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Customer story: Real-time railway operations", url: "https://solace.com/company/customers/", icon: "doc" },
    { text: "What Solace makes possible in rail", url: "https://solace.com/industries/transportation/", icon: "globe" }
  ],
  architect: [
    { text: "Architecture guide: Event mesh for rail", url: "https://solace.com/resources/", icon: "doc" },
    { text: "MQTT and IoT integration patterns", url: "https://solace.com/resources/", icon: "doc" },
    { text: "PubSub+ Event Broker specifications", url: "https://solace.com/products/event-broker/", icon: "globe" }
  ]
}

  },

  automotive: {
stories: [
  {
    id: 'au1',
    subsector: 'Connected Vehicles',
    technology: {
      headline: "A global automaker streams telemetry between millions of connected cars and its customer app",
      outcome: "One of the world's most recognised premium automakers uses event-driven messaging to exchange telemetry between connected cars and its consumer mobile app. This was the original deployment and has expanded to procurement, production, and SAP migration.",
      detail: "Beyond connected cars, the company now uses SAP Advanced Event Mesh for procurement data exchange and is planning to support their PI/PO migration, decoupling workflows and reducing IBM MQ instances."
    },
    integration: {
      headline: "An automaker expanded from connected cars to SAP integration on the same event platform",
      outcome: "What started as car-to-app telemetry now spans multiple business units. Procurement data exchange notifies partners in real time. PI/PO migration uses SAP AEM to decouple workflows, reducing IBM MQ dependence.",
      detail: "The team manages high-volume MQTT telemetry from vehicles, enterprise SAP events for procurement, and workflow decoupling for PI/PO migration. The same platform handles all three."
    },
    business: {
      headline: "A premium automaker turned connected cars into a platform \u2014 then extended real-time data to procurement and production",
      outcome: "Connected car telemetry created a direct digital relationship with every driver. That same approach now accelerates procurement and production workflows across the business.",
      detail: "The infrastructure built for connected cars became the foundation for enterprise-wide real-time data movement. Procurement partners get instant updates. Production workflows are decoupled from legacy middleware."
    },
    architect: {
      headline: "Connected cars via MQTT, SAP AEM for procurement and PI/PO, IBM MQ reduction \u2014 one automaker's multi-layer event architecture",
      outcome: "MQTT from vehicles to the consumer app. SAP AEM in BTP for procurement and PI/PO workflow decoupling. Architecture progressively replaces IBM MQ instances while maintaining interoperability.",
      detail: "Connected car layer handles millions of concurrent MQTT connections. SAP layer uses AEM for event-driven integration within BTP. All coexist on PubSub+, connected via event mesh across on-prem and cloud."
    }
  },
  {
    id: 'au2',
    subsector: 'Automotive Services',
    technology: {
      headline: "A vehicle auction platform modernised its messaging across 200+ locations in 11 countries \u2014 after the vendor was acquired",
      outcome: "Operating real-time auctions across 200+ locations with 25,000+ concurrent connections, this company faced a forced migration when its messaging vendor was acquired. They replaced the decade-old system while maintaining sub-second bidding latency.",
      detail: "The previous system had been in production for over a decade. The vendor acquisition created product roadmap uncertainty. Migration maintained real-time performance while enabling future hybrid and multi-cloud strategies."
    },
    integration: {
      headline: "A vehicle remarketing platform replaced WebMethods Nirvana across 4 data centres \u2014 25,000+ connections, zero auction disruption",
      outcome: "The team migrated from tightly coupled web-client-to-backend messaging to a modern event broker. 25,000+ connections across four DCs migrated without disrupting live auction operations.",
      detail: "The legacy architecture limited flexibility to modernise or scale. The new platform provides native multi-protocol support, enabling existing and future architectures to coexist during transition."
    },
    business: {
      headline: "When your vendor gets acquired: how a vehicle auction company turned a forced migration into a competitive upgrade",
      outcome: "Vendor acquisition created uncertainty about the messaging platform running real-time auctions. Rather than like-for-like replacement, the company used the forced migration to modernise \u2014 gaining multi-region resilience and a path to cloud.",
      detail: "For a business where sub-second latency directly impacts revenue, migration risk was real. Executed across 200+ locations without auction disruption."
    },
    architect: {
      headline: "Real-time auction platform: migrating across 4 DCs with 25K+ connections and sub-second latency requirements",
      outcome: "Four data centres, 25,000+ connections, sub-second latency. Migration while maintaining live auctions. Multi-protocol support enables gradual client-side migration.",
      detail: "Architecture addressed product longevity (replacing acquired vendor), integration brittleness (decoupling web clients), and cloud readiness (future hybrid deployment). Multi-region active-active for global operations."
    }
  },
  {
    id: 'au3',
    subsector: 'Mobility Platforms',
    technology: {
      headline: "A car-sharing platform rebuilt its monolith with event-driven architecture \u2014 and a rental giant connected its entire reservation flow in real time",
      outcome: "A car-sharing startup replaced a vendor monolith with event-driven architecture for speed and scalability. Meanwhile, one of the world's largest rental companies connected its entire reservation, checkout, and return flow through real-time events.",
      detail: "The car-sharing COTS system was hard to change. The rental company now produces events for every reservation, modification, and vehicle action \u2014 consumed in real time across the operation."
    },
    integration: {
      headline: "From monolithic COTS to event-driven: mobility companies rebuilding platforms for real-time operations",
      outcome: "Integration teams replaced vendor-locked monolithic systems with EDA. Reservations, vehicle status, and fleet operations flow as events consumed by multiple systems without point-to-point connections.",
      detail: "At the rental company, only new features initially use events, but the plan is to migrate existing applications once proven \u2014 an incremental adoption pattern that reduces risk."
    },
    business: {
      headline: "A car rental giant created a cohesive experience by connecting every touchpoint through real-time events",
      outcome: "Reservations, modifications, servicing, returns, and checkouts all produce events consumed in real time. Unified, responsive experience across every touchpoint in the rental journey.",
      detail: "Future state includes real-time vehicle telemetry from the fleet. Incremental adoption lets the business see value before committing to full platform migration."
    },
    architect: {
      headline: "Mobility platform modernisation: COTS-to-EDA migration, real-time reservations, and future vehicle telemetry",
      outcome: "EDA replaces monolithic COTS. Reservations and fleet operations published as events. New features event-native, existing apps migrated incrementally. Future: MQTT vehicle telemetry.",
      detail: "Car-sharing rebuild demonstrates full EDA platform design. Rental company demonstrates incremental adoption. Architecture extends from business events to IoT events."
    }
  }
,
  {
    id: 'au4',
    subsector: 'EV & Powertrain',
    technology: {
      headline: 'Automotive manufacturers built event-driven platforms connecting EV battery management, charging infrastructure, and powertrain data — enabling real-time vehicle health monitoring at scale',
      outcome: 'Electric vehicle manufacturers need real-time telemetry from battery management systems, charging sessions, and powertrain performance. The event mesh handles millions of vehicle-to-cloud events for battery health monitoring, charging optimisation, and over-the-air update coordination.',
      detail: 'The EV transformation creates new data volumes that internal combustion vehicles never generated: every charging session, every battery cell temperature reading, every regenerative braking event. Event-driven architecture handles this volume while connecting vehicle data to manufacturing (warranty analytics), service (predictive maintenance), and energy grid (smart charging coordination).'
    },
    integration: {
      headline: 'EV integration teams connected battery telemetry, charging networks, grid operators, and dealer management systems through a single event backbone',
      outcome: 'The EV ecosystem requires integration between vehicle systems, charging infrastructure operators, energy grid operators, and dealer/service networks. The event mesh provides a single backbone where each participant publishes and subscribes to relevant events without point-to-point connections per relationship.',
      detail: 'Key integration patterns: MQTT for vehicle telemetry (battery state, charging status, location); REST for charging network APIs; event-driven grid coordination for smart charging (load balancing, time-of-use optimisation); SAP integration for warranty claims and service scheduling; dealer management system updates via JMS.'
    },
    business: {
      headline: 'EV manufacturers that monitor battery health in real time can predict failures before they occur — reducing warranty costs and improving customer confidence in electric vehicles',
      outcome: 'Battery degradation is the primary concern for EV owners and the largest warranty exposure for manufacturers. Real-time battery health monitoring enables early intervention — software adjustments, proactive service appointments, or charging behaviour recommendations — before costly battery replacement is needed.',
      detail: 'Beyond warranty cost reduction, real-time vehicle data enables new revenue streams: usage-based insurance partnerships, energy grid services (vehicle-to-grid), and predictive maintenance subscriptions. The event-driven platform transforms the vehicle from a product sold once to a connected service generating ongoing value.'
    },
    architect: {
      headline: 'EV event mesh: MQTT from battery management systems, charging session events, grid coordination, OTA update distribution, and dealer integration',
      outcome: 'MQTT for high-volume vehicle telemetry ingestion from millions of connected EVs. Event mesh routes battery health data to analytics (Kafka bridge), service alerts to dealer systems (JMS), and charging coordination to grid operators (REST). Over-the-air update distribution uses topic-based targeting by vehicle model, region, and software version.',
      detail: 'Key patterns: massive fan-in from vehicle fleet via MQTT; battery analytics pipeline consuming real-time cell telemetry; smart charging coordination between vehicles, chargers, and grid operators; OTA update distribution with topic-based targeting; dealer notification for proactive service scheduling; cross-cloud deployment connecting vehicle cloud with enterprise cloud.'
    }
  },
  {
    id: 'au5',
    subsector: 'Fleet & Dealer Management',
    technology: {
      headline: 'Automotive companies connected dealer management systems, fleet operations, and customer portals through event-driven architecture — replacing batch-driven inventory and service updates',
      outcome: 'Dealer networks with hundreds or thousands of locations need real-time inventory visibility, service scheduling, and customer data synchronisation. The event mesh connects dealer management systems to central platforms, replacing overnight batch synchronisation with real-time event flows.',
      detail: 'Fleet management adds another dimension: rental companies, leasing firms, and corporate fleet operators need real-time vehicle status, location, and maintenance data. The event mesh handles both the dealer network (B2B) and fleet operations (B2B2C) through a single infrastructure.'
    },
    integration: {
      headline: 'Automotive integration teams connected dealer networks, fleet management platforms, and OEM systems through event mesh — replacing EDI and batch synchronisation',
      outcome: 'Legacy dealer integration relied on EDI and overnight batch files for inventory, pricing, warranty claims, and service records. Event-driven architecture enables real-time bidirectional data flow between OEM central systems and hundreds of independently operated dealer locations.',
      detail: 'Key integration patterns: vehicle inventory events from dealer to OEM (real-time stock visibility); pricing and incentive updates from OEM to dealer; warranty claim events triggering real-time approval workflows; service appointment scheduling consuming vehicle health data; fleet telematics integration for corporate and rental customers.'
    },
    business: {
      headline: 'A vehicle auction platform modernised messaging across 200+ locations — while rental companies use real-time fleet events to maximise vehicle utilisation',
      outcome: 'Vehicle auctions require real-time bidding, inventory updates, and transportation coordination across hundreds of locations. Rental companies need instant vehicle status to optimise fleet allocation. Both use cases demand reliable messaging at scale that legacy platforms could not provide.',
      detail: 'The business case spans the automotive value chain: OEMs need real-time dealer inventory for production planning; dealers need current pricing and incentive data for customer interactions; fleet operators need vehicle health data for maintenance scheduling. In every case, batch delays create operational inefficiency and missed revenue opportunities.'
    },
    architect: {
      headline: 'Automotive dealer and fleet architecture: hub-and-spoke from OEM to dealer locations, fleet telematics via MQTT, auction platform messaging, and SAP integration for warranty and finance',
      outcome: 'Hub-and-spoke topology with central OEM brokers and dealer locations connecting as clients or via edge brokers. Fleet telematics via MQTT for vehicle location, health, and utilisation. Auction platform using event mesh for real-time bidding across 200+ locations. SAP integration for warranty claims, parts ordering, and financial settlements.',
      detail: 'Key patterns: massive fan-out from OEM to dealer network (pricing, incentives, recalls); dealer-to-OEM event flow (inventory, sales, warranty claims); fleet telematics ingestion via MQTT; auction bidding events with guaranteed ordering; edge deployment at large dealer groups; multi-protocol support connecting legacy dealer systems (JMS, EDI bridge) with modern platforms (REST).'
    }
  }
],
values: {
  technology: [
    { title: "Connected vehicles at scale", text: "MQTT telemetry from millions of vehicles, processed in real time. Foundation for connected car apps, fleet management, and predictive services." },
    { title: "SAP modernisation for automotive", text: "SAP AEM for procurement, production, and PI/PO migration. Decouple legacy SAP workflows while reducing IBM MQ footprint." },
    { title: "Vendor independence", text: "When a messaging vendor gets acquired, you need a migration path. Multi-protocol event mesh avoids lock-in to any single vendor or cloud." },
    { title: "Incremental modernisation", text: "New features built event-native, existing applications migrated when ready. No big-bang replatforming required." }
  ],
  integration: [
    { title: "MQTT for vehicles, AMQP for enterprise", text: "Connected cars speak MQTT. SAP systems speak AMQP or JMS. Both connect natively through a single broker." },
    { title: "SAP AEM integration", text: "Procurement events, production workflows, and PI/PO migration through SAP Advanced Event Mesh. Decouple without disrupting SAP landscapes." },
    { title: "Multi-DC resilience", text: "Active-active across multiple data centres. Auction, reservation, and telemetry systems that cannot afford regional outages." },
    { title: "Incremental migration", text: "Bridge legacy messaging (IBM MQ, WebMethods, COTS) into the event mesh. Migrate one application at a time." }
  ],
  business: [
    { title: "Direct digital customer relationship", text: "Connected car telemetry creates a direct, real-time relationship with every driver. Foundation for personalised services." },
    { title: "Speed to market", text: "Event-driven architecture lets teams build independently. New mobility services launch without waiting for platform vendor changes." },
    { title: "Continuity during migration", text: "Replace legacy messaging without disrupting live operations. Auctions keep running, reservations keep flowing, cars stay connected." },
    { title: "Platform economics", text: "Infrastructure for connected cars extends to procurement, production, and fleet management. Each new use case costs less." }
  ],
  architect: [
    { title: "Event mesh for automotive", text: "On-prem for production, cloud for connected car scale, SAP BTP for enterprise. Connected via event mesh across all targets." },
    { title: "Multi-protocol at the edge", text: "MQTT from vehicles, REST from mobile apps, JMS from legacy enterprise. All native, no translation required." },
    { title: "Multi-region active-active", text: "Global operations across multiple DCs with cross-region replication. Sub-second latency for bidding, reservations, and telemetry." },
    { title: "COTS-to-EDA migration", text: "Replace monolithic vendor platforms with event-driven architecture. Publish domain events, let consumers evolve independently." }
  ]
},
links: {
  technology: [
    { text: "How automakers use event-driven architecture", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Watch: Connected vehicles and real-time mobility", url: "https://solace.com/resources/", icon: "video" },
    { text: "Solace for automotive", url: "https://solace.com/industries/transportation/", icon: "globe" }
  ],
  integration: [
    { text: "Technical brief: SAP AEM for automotive", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Migration patterns: legacy to event mesh", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Automotive use cases on solace.com", url: "https://solace.com/industries/transportation/", icon: "globe" }
  ],
  business: [
    { text: "How mobility leaders use real-time data", url: "https://solace.com/resources/", icon: "doc" },
    { text: "Customer story: Connected car platform", url: "https://solace.com/company/customers/", icon: "doc" },
    { text: "What Solace makes possible in automotive", url: "https://solace.com/industries/transportation/", icon: "globe" }
  ],
  architect: [
    { text: "Architecture guide: Event mesh for automotive", url: "https://solace.com/resources/", icon: "doc" },
    { text: "MQTT for connected vehicles: design patterns", url: "https://solace.com/resources/", icon: "doc" },
    { text: "PubSub+ specifications", url: "https://solace.com/products/event-broker/", icon: "globe" }
  ]
}

  },



  "manufacturing-cpg": {

stories: [
  {
    id: 'mc1',
    subsector: 'Food & Beverage Manufacturing',
    technology: {
      headline: 'A global food producer connected 100+ factories and 300 distribution centres through a real-time event mesh \u2014 powering Industry 5.0 operations',
      outcome: 'Danone built \u201cCortex\u201d \u2014 a real-time, event-driven digital ecosystem that connects factories, warehouses, and enterprise systems. Real-time insights enable faster, data-driven decision-making across global operations.',
      detail: 'Before Cortex, data from on-premises factory applications was siloed and difficult to integrate with cloud services. The event mesh now streams data in real time to AI and analytics platforms, enabling predictive quality, demand sensing, and supply chain optimisation. The platform has eliminated inefficient batch integrations, achieving significant cost savings while building the foundation for autonomous manufacturing.'
    },
    integration: {
      headline: 'Danone\u2019s integration team built a real-time digital backbone connecting 100+ factories to cloud analytics \u2014 replacing batch integrations with event streaming',
      outcome: 'The integration challenge was connecting on-premises factory systems (MES, SCADA, quality) with cloud-based analytics and AI platforms. The event mesh bridges on-prem and cloud, streaming operational data in real time without requiring factory systems to be rewritten.',
      detail: 'The architecture uses SAP AEM as the event transport layer, connecting SAP and non-SAP systems across 100+ production sites. Factory events flow to Azure-hosted analytics and ML models. The team can now deploy new integrations to additional factories rapidly \u2014 what used to take months of custom work is now configuration.'
    },
    business: {
      headline: 'Danone is driving Industry 5.0 transformation \u2014 with real-time visibility across 100+ factories and 300 distribution centres enabling AI-driven decisions',
      outcome: 'Real-time data from factories and distribution centres feeds AI models that optimise production scheduling, predict quality issues, and sense demand shifts. The business can respond to disruptions in hours rather than days.',
      detail: 'The cost savings from eliminating inefficient batch integrations were significant on their own. But the strategic value is the foundation for autonomous operations \u2014 factories that can self-optimise based on real-time signals from across the supply chain. Danone sees this as core to their Industry 5.0 vision.'
    },
    architect: {
      headline: 'Danone\u2019s Cortex: SAP AEM event mesh connecting 100+ factory MES/SCADA systems to Azure AI, with hybrid on-prem/cloud deployment',
      outcome: 'On-premise event brokers in factories collect MES, SCADA, and quality data. SAP AEM routes events to Azure-hosted analytics, ML models, and enterprise systems. The hybrid architecture keeps latency-sensitive factory operations local while streaming data to cloud for intelligence.',
      detail: 'The architecture is designed for scale: each new factory onboards by deploying a local broker and configuring topic subscriptions. No custom integration code per site. Events flow bidirectionally \u2014 factory data up to cloud analytics, and optimisation signals back down to production systems. The platform supports both real-time streaming and event-driven CDC from SAP systems.'
    }
  },
  {
    id: 'mc2',
    subsector: 'Consumer Goods (FMCG)',
    technology: {
      headline: 'Global CPG companies event-enabled their master data \u2014 eliminating synchronisation failures that were costing hundreds of thousands per hour',
      outcome: 'Multiple CPG manufacturers replaced fragile request/reply MDM synchronisation with event-driven streaming. At one company, a 700% spike in orders caused the existing Azure Service Bus and iPaaS platform to duplicate and lose orders \u2014 costing hundreds of thousands of dollars per hour. Event-driven messaging eliminated these failures.',
      detail: 'At another CPG giant, the MDM system was the single source of truth but relied on request/reply interactions that created synchronisation gaps across the ecosystem. Implementing event brokers on-premises and in Azure created a hybrid event mesh where MDM data publishes once and reaches every consumer in real time \u2014 complementing the existing API-led approach with streaming capabilities.'
    },
    integration: {
      headline: 'CPG integration teams replaced batch MDM synchronisation with event streaming \u2014 one publish, every system updated in real time',
      outcome: 'The pattern is consistent: MDM data that was previously synchronised via batch or request/reply now publishes as events. Product data, customer data, and pricing flow to ERP, eCommerce, CRM, and partner systems simultaneously without point-to-point connections.',
      detail: 'At one company, the integration team deployed Solace event brokers both in their data centres and Azure cloud, creating a hybrid event mesh that enhanced their integration platform with real-time streaming. At another, complex point-to-point integrations between ERP and Product Lifecycle Management were replaced with a centralised event backbone. EDI transactions with partners also flow through the same platform.'
    },
    business: {
      headline: 'A beverage company stopped losing hundreds of thousands of dollars per hour from duplicate and lost orders \u2014 by replacing fragile messaging with guaranteed delivery',
      outcome: 'When a 700% surge in orders from a key market hit the existing messaging platform, orders were duplicated and lost. The supply chain impact cascaded for days. After deploying event-driven messaging with guaranteed delivery, order spikes are handled reliably \u2014 no lost revenue, no supply chain disruption.',
      detail: 'The business framed it simply: they are a beverage company, not an IT company. They needed a messaging platform that handles bursts reliably without requiring constant operational attention. The event mesh delivers that \u2014 absorbing demand spikes, guaranteeing delivery, and letting the business focus on making and selling products.'
    },
    architect: {
      headline: 'Hybrid event mesh for CPG: on-prem + Azure event brokers for MDM streaming, with guaranteed delivery handling 700% order spikes',
      outcome: 'Event brokers deployed on-premises and in Azure, connected via event mesh. MDM publishes once \u2014 consumed by ERP, eCommerce, CRM, PLM, and partner EDI systems. Guaranteed persistence handles demand spikes without message loss or duplication.',
      detail: 'The architecture complements existing API-led integration (Boomi, MuleSoft) with event streaming for use cases where real-time and guaranteed delivery matter. The event mesh pattern allows the MDM to remain the source of truth while ensuring every downstream system has current data without polling or batch synchronisation.'
    }
  },
  {
    id: 'mc3',
    subsector: 'Industrial Manufacturing',
    technology: {
      headline: 'Manufacturers modernised legacy factory systems \u2014 connecting shopfloors to SAP and cloud analytics in real time for the first time',
      outcome: 'Multiple manufacturers replaced legacy MES platforms, batch-driven integrations, and proprietary middleware with event-driven architectures. The common outcome: real-time data flowing from factory floors to enterprise systems and cloud analytics, enabling predictive maintenance and production optimisation.',
      detail: 'At one chemical manufacturer, the legacy MES created bottlenecks that prevented real-time data ingestion from production lines. The new event-driven MES handles real-time data collection, rapid integration with new applications, and uninterrupted production operations. At an automotive parts maker, shopfloor systems now connect to SAP AEM via a NATS bridge for bidirectional exchange of production data, master data, and work order events.'
    },
    integration: {
      headline: 'Factory integration teams bridged shopfloor OT systems to SAP and cloud \u2014 replacing batch processes with bidirectional event flows',
      outcome: 'The integration pattern bridges operational technology (MES, SCADA, PLCs) with enterprise IT (SAP, Azure, Databricks) through the event mesh. Production data flows up, master data and work orders flow down. No more batch files or manual data entry between factory and enterprise.',
      detail: 'At one global manufacturer, 11+ legacy ERP systems across regions are being event-enabled through SAP AEM, with SAP Integration Suite handling transformation. At another, Software AG UIM was replaced with Solace across data centres and cloud, connecting different business units. The file-to-event capability is particularly valuable for edge environments where legacy systems only produce file outputs.'
    },
    business: {
      headline: 'Manufacturers are turning factory data into a strategic asset \u2014 with real-time production visibility replacing manual reporting and batch processes',
      outcome: 'Factory data that was previously trapped in on-premises MES systems now flows in real time to analytics platforms. Production managers see live dashboards instead of yesterday\u2019s spreadsheets. Quality issues are caught during production, not after.',
      detail: 'The business case compounds: predictive maintenance reduces unplanned downtime, real-time quality monitoring catches defects earlier in the process, and production scheduling optimises based on actual demand signals rather than forecasts. One manufacturer is using the platform to enable autonomous factory transport \u2014 a capability that was impossible without real-time event flows.'
    },
    architect: {
      headline: 'Factory-to-cloud architecture: MES/SCADA via MQTT and NATS bridge to SAP AEM, with Kafka bridge to Azure data lake for analytics',
      outcome: 'Shopfloor systems connect via MQTT, native REST, or NATS bridge to the event broker. SAP AEM handles enterprise integration (master data distribution, work orders, procurement). Kafka bridge feeds Azure Data Lake and Databricks for manufacturing analytics. The architecture spans on-prem factory, corporate data centre, and cloud.',
      detail: 'Key patterns: file-to-event conversion for legacy edge systems, NATS bridge for shopfloor protocols, SAP event-enabling add-on for ECC/S4HANA, and CDC from multiple regional ERP instances. The three-tier deployment (factory edge, corporate DC, cloud) is connected via dynamic message routing. Each tier handles the workloads appropriate to its environment \u2014 low-latency OT at the edge, enterprise integration in the DC, elastic analytics in the cloud.'
    }
  }
,
  {
    id: 'mc4',
    subsector: 'Supply Chain & Distribution',
    technology: {
      headline: 'A global CPG company built a virtual ocean control tower using event-driven architecture — tracking 2,000 vessels from 100 carriers in real time across their sea freight logistics',
      outcome: 'Sea freight logistics for large CPG companies involves thousands of vessels, hundreds of carriers, and millions of container movements. The virtual ocean control tower provides real-time visibility of each step in the sea freight supply chain — replacing batch-based tracking that was days behind actual vessel positions.',
      detail: 'The supply chain use case extends beyond ocean freight: distribution centres (one company operates 300), warehouse management, demand sensing, and distributor integration all benefit from event-driven architecture. Real-time inventory signals from distribution centres enable demand-responsive replenishment rather than forecast-driven allocation.'
    },
    integration: {
      headline: 'CPG supply chain teams connected carrier tracking, warehouse management, and demand planning through event mesh — with SAP AEM bridging ERP to logistics partners',
      outcome: 'The integration challenge in CPG supply chain is multi-party: carriers, warehouses, distributors, and retailers all need to exchange data in near real time. SAP AEM bridges the ERP to logistics partners. The event mesh handles the variety of protocols and data formats across the supply chain ecosystem.',
      detail: 'Key integration patterns: carrier tracking events from 100+ logistics partners; warehouse management events for inventory movements; SAP AEM for procurement, order management, and financial settlement; distributor integration for demand signals and order replenishment; cold chain monitoring for temperature-sensitive products.'
    },
    business: {
      headline: 'When a CPG company cannot see where its products are in the supply chain, it over-stocks to compensate — real-time visibility eliminates this expensive safety buffer',
      outcome: 'Supply chain invisibility drives excess inventory: if you cannot see where your products are, you hold more buffer stock to avoid stockouts. Real-time event flows from carriers, warehouses, and distributors provide the visibility that reduces safety stock while improving on-shelf availability.',
      detail: 'The financial impact is significant: one company identified that real-time supply chain visibility across 300 distribution centres could reduce inventory holding costs by millions annually. Demand sensing — consuming real-time POS data from retailers — enables production scheduling that responds to actual demand rather than forecasts.'
    },
    architect: {
      headline: 'CPG supply chain architecture: carrier tracking events, warehouse IoT, SAP AEM for ERP integration, demand sensing from retail POS, and virtual control tower analytics',
      outcome: 'Multi-party event mesh connecting carriers (100+ logistics partners), warehouses (300 distribution centres), distributors, and retail POS. SAP AEM bridges ERP to supply chain. Kafka bridge feeds analytics platforms for demand forecasting and supply chain optimisation. Cold chain MQTT sensors for temperature monitoring.',
      detail: 'Key patterns: multi-party event exchange with diverse protocol support per partner; SAP AEM for procurement and order-to-cash; virtual control tower consuming all supply chain events for real-time visibility; demand sensing from retail POS event streams; cold chain monitoring via MQTT; multi-region deployment for global supply chain operations.'
    }
  },
  {
    id: 'mc5',
    subsector: 'Chemicals & Materials',
    technology: {
      headline: 'Chemical and materials companies event-enabled SAP to connect on-premises ERP with cloud analytics — bridging process monitoring, safety systems, and regulatory compliance in real time',
      outcome: 'Chemical manufacturers need to bridge operational technology (process monitoring, safety systems, environmental sensors) with enterprise IT (SAP ERP, analytics, regulatory reporting). Event-driven architecture connects these worlds — a process alarm triggers both an immediate safety response and a compliance record simultaneously.',
      detail: 'Multiple chemical companies use SAP AEM to connect SAP ECC and S/4HANA to cloud platforms: one connects on-premises ERP to Azure in real time; another bridges 11+ regional ERPs through event-driven integration. The chemicals industry faces unique regulatory and safety requirements that demand auditable, guaranteed event delivery.'
    },
    integration: {
      headline: 'Chemical companies connected regional SAP instances, process control systems, and regulatory reporting through event mesh — replacing fragmented, batch-driven compliance',
      outcome: 'Large chemical companies often operate multiple regional ERP instances that need to share data for consolidated reporting, global procurement, and regulatory compliance. The event mesh connects these instances in real time, replacing overnight batch consolidation.',
      detail: 'Key integration patterns: SAP AEM connecting multiple regional ERP instances; process control events from DCS/SCADA bridged to enterprise IT; safety and environmental events with guaranteed delivery and audit trails; regulatory reporting consuming operational event streams; quality management events linking lab systems to production and SAP.'
    },
    business: {
      headline: 'Chemical companies operating across 11+ regional ERPs needed real-time data consolidation — batch processing created compliance gaps and delayed business decisions',
      outcome: 'Regional ERP fragmentation is common in chemicals: each plant or region operates its own SAP instance. Batch consolidation means headquarters sees yesterday\'s data. Event-driven integration provides real-time visibility across all regions for procurement, compliance, and financial reporting.',
      detail: 'The safety dimension is critical: environmental incidents, process deviations, and safety events must be reported in real time — both internally for immediate response and externally for regulatory compliance. Batch-based reporting creates windows where non-compliance goes undetected.'
    },
    architect: {
      headline: 'Chemicals event mesh: multi-instance SAP AEM connecting regional ERPs, process control events via OPC-UA/MQTT bridge, safety-critical event streaming, and regulatory reporting',
      outcome: 'SAP AEM connecting 11+ regional ERP instances for real-time data consolidation. OPC-UA and MQTT bridge for process control and safety system events. Guaranteed delivery for safety-critical and regulatory event streams. Cloud connectivity for analytics platforms (Azure, Snowflake). Multi-site mesh spanning production facilities globally.',
      detail: 'Key patterns: multi-instance SAP integration via AEM; OT-to-IT bridge for process control events; safety-critical event streaming with guaranteed delivery and full audit; regulatory event archival and reporting; quality management events linking lab systems to SAP; multi-region deployment for chemical companies operating across continents.'
    }
  }
],

values: {
  technology: [
    { title: 'Industry 5.0 foundation', text: 'Connect factories, warehouses, and enterprise systems with a real-time event mesh. The infrastructure for AI-driven manufacturing, predictive quality, and autonomous operations.' },
    { title: 'SAP integration without the complexity', text: 'SAP AEM event-enables S/4HANA and ECC without custom ABAP development. Master data, production events, and procurement flow as events to any consumer.' },
    { title: 'Handle demand spikes reliably', text: 'Guaranteed delivery absorbs 700% order surges without message loss or duplication. Your messaging platform should not be the bottleneck when demand peaks.' },
    { title: 'Modernise without stopping production', text: 'Bridge legacy MES, Software AG, Oracle SOA, and batch systems into event-driven flows incrementally. No big-bang migration, no production downtime.' }
  ],
  integration: [
    { title: 'Bridge OT and IT', text: 'Factory shopfloor systems (MES, SCADA, PLCs) speak MQTT and proprietary protocols. Enterprise systems speak JMS and REST. One event broker connects both worlds natively.' },
    { title: 'Event-enable SAP', text: 'SAP event-enabling add-on, SAP AEM, and SAP Integration Suite work together. Master data publishes once \u2014 consumed by production, eCommerce, CRM, and partner systems simultaneously.' },
    { title: 'iPaaS + event broker pattern', text: 'Boomi or MuleSoft for API orchestration, Solace for guaranteed async messaging. The combination handles both enterprise integration and real-time factory data.' },
    { title: 'Multi-regional ERP consolidation', text: 'Event mesh connects 11+ regional ERP instances, normalising data flows during SAP consolidation. Migrate regions incrementally while maintaining integration.' }
  ],
  business: [
    { title: 'Real-time supply chain visibility', text: 'Track materials, production, and distribution in real time across 100+ sites. Demand sensing and AI-driven optimisation replace manual forecasting.' },
    { title: 'Eliminate costly integration failures', text: 'Lost orders, duplicate transactions, and batch synchronisation gaps cost real money. Guaranteed event delivery eliminates these failures.' },
    { title: 'Faster time to new capabilities', text: 'New factory integrations, partner onboarding, and digital services deploy in days rather than months. The event mesh is the accelerator.' },
    { title: 'Predictive manufacturing', text: 'Real-time production data feeds ML models for quality prediction, maintenance scheduling, and yield optimisation. Move from reactive to predictive operations.' }
  ],
  architect: [
    { title: 'Three-tier deployment', text: 'Factory edge for low-latency OT, corporate DC for enterprise integration, cloud for elastic analytics. Connected via dynamic message routing across all tiers.' },
    { title: 'SAP AEM as the enterprise bus', text: 'SAP Advanced Event Mesh for event-driven integration within SAP BTP. Bridges SAP and non-SAP systems with guaranteed delivery and topic-based routing.' },
    { title: 'Multi-protocol for manufacturing', text: 'MQTT from factory sensors, NATS from shopfloor systems, JMS from legacy ERP, REST from cloud services. All native on one broker, no protocol translation.' },
    { title: 'Kafka bridge for analytics', text: 'Operational events flow through PubSub+ for real-time use cases, then bridge to Kafka, Databricks, and Snowflake for manufacturing analytics and data lake.' }
  ]
},

links: {
  technology: [
    { text: 'How Danone powers Industry 5.0 with Solace', url: 'https://solace.com/company/customers/danone/', icon: 'doc' },
    { text: 'Solace for manufacturing', url: 'https://solace.com/solutions/industries/manufacturing/', icon: 'globe' },
    { text: 'Manufacturing resources on solace.com', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  integration: [
    { text: 'How Danone built Cortex with event-driven architecture', url: 'https://solace.com/company/customers/danone/', icon: 'doc' },
    { text: 'SAP integration with Solace', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'iPaaS + event broker architecture patterns', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  business: [
    { text: 'Danone case study: Industry 5.0 transformation', url: 'https://solace.com/company/customers/danone/', icon: 'doc' },
    { text: 'How manufacturers use real-time data', url: 'https://solace.com/solutions/industries/manufacturing/', icon: 'globe' },
    { text: 'Manufacturing customer stories', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  architect: [
    { text: 'Architecture guide: Event mesh for manufacturing', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'SAP AEM technical deep dive', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'PubSub+ Event Broker specifications', url: 'https://solace.com/products/event-broker/', icon: 'globe' }
  ]
}


  },


  "retail": {

stories: [
  {
    id: 'rt1',
    subsector: 'Grocery & Mass Market',
    technology: {
      headline: 'A European grocery chain streams real-time master data to wireless devices in 6,000 stores \u2014 keeping product, pricing, and promotions accurate everywhere',
      outcome: 'This high-end grocery retailer needed real-time master data distribution from data centres to every store. The event-driven architecture streams product information, pricing, and promotional data to wireless handheld devices across 6,000 locations \u2014 ensuring every store has accurate, up-to-date information.',
      detail: 'In a competitive market dominated by discounters, this retailer competes on experience and product quality. Real-time data accuracy is essential: a price discrepancy or missing product information in-store directly impacts both revenue and brand reputation. The event mesh replaced batch-driven data synchronisation that was too slow for the pace of retail operations.'
    },
    integration: {
      headline: 'Retail integration teams are replacing batch data synchronisation with real-time event streaming to thousands of stores \u2014 from handheld devices to eCommerce',
      outcome: 'The integration pattern is consistent across multiple retailers: master data, pricing, and inventory changes publish as events from central systems and reach every store, kiosk, and digital channel in real time. No more waiting for overnight batch runs.',
      detail: 'At one retailer, the event mesh connects data centres to 6,000 stores via wireless devices. At another, a global event mesh links a Chinese marketplace (hosted in Alibaba Cloud) to a regional data centre. A home improvement chain bridges ActiveMQ at store edge to central Solace appliances in the data centre. The common thread: real-time, reliable distribution from HQ to edge.'
    },
    business: {
      headline: 'Retailers are eliminating the gap between head office decisions and store execution \u2014 price changes, promotions, and product updates reach every location in seconds',
      outcome: 'When a pricing decision is made at head office, it used to take hours or overnight batches to reach stores. Now it takes seconds. Promotions launch simultaneously across thousands of locations. Product information is consistent whether a customer checks online, in the app, or asks a store associate.',
      detail: 'The business impact is direct: fewer pricing errors at checkout, faster promotional launches, and a consistent customer experience across every channel. For retailers expanding internationally, the event mesh scales to new markets without rebuilding integration infrastructure for each country.'
    },
    architect: {
      headline: 'Hub-to-store event mesh: central brokers distributing master data to 6,000+ edge locations via topic-based routing, with store-level ActiveMQ bridging',
      outcome: 'Central event brokers in the data centre publish master data, pricing, and inventory events. Store-level systems subscribe by location, region, or product category via topic hierarchy. At some retailers, edge brokers or ActiveMQ instances at the store level bridge to the central mesh.',
      detail: 'The architecture handles massive fan-out: one publish event reaches thousands of subscribers simultaneously. Topic-based routing ensures each store receives only relevant data (its region, its product categories). Multi-cloud deployment connects on-premises data centres, hyperscaler-hosted eCommerce platforms, and even third-party marketplace clouds like Alibaba.'
    }
  },
  {
    id: 'rt2',
    subsector: 'Luxury & Fashion',
    technology: {
      headline: 'A global luxury goods company deployed an event mesh across thousands of factories and stores \u2014 enabling precision manufacturing and personalised customer experiences',
      outcome: 'One of the world\u2019s largest luxury goods companies is transforming into a real-time, data-driven enterprise. The global event mesh facilitates the flow of information about events and transactions occurring across thousands of factories and stores, both physical and digital.',
      detail: 'The event-driven approach enables a customer-centric business model where every touchpoint \u2014 from manufacturing a bespoke piece to a store interaction to an online browse \u2014 generates events that inform personalisation, inventory allocation, and service delivery. A major fashion retailer built what they call an enterprise-wide integration capability used across application domains, deployed alongside Kafka which handles their analytics workloads.'
    },
    integration: {
      headline: 'Fashion and luxury retailers built enterprise-wide event backbones \u2014 connecting store POS, eCommerce, supply chain, and manufacturing in a single integration layer',
      outcome: 'Multiple retailers are converging on the same pattern: an enterprise event backbone that replaces fragmented, domain-specific integrations. One fashion brand built their enterprise integration layer to reduce time-to-market for new applications by leveraging existing events rather than building new point-to-point connections.',
      detail: 'The integration complexity in fashion and luxury retail is significant: seasonal collections, global manufacturing, multi-brand portfolios, and high customer expectations for personalisation. Event-driven architecture decouples these domains. New brand acquisitions can onboard to the event mesh without deep integration work. Event Portal provides governance and discoverability across what becomes a very large event landscape.'
    },
    business: {
      headline: 'A luxury retailer identified \u00a325 million in excess inventory caused by their legacy data landscape \u2014 and is using real-time events to fix it',
      outcome: 'Poor data integration between buying, merchandising, and store systems resulted in an estimated \u00a325 million of excess inventory. With over 15 million store visitors per year, any impact on customer experience is treated as a top-priority incident. Real-time event flows are connecting these previously siloed systems.',
      detail: 'The business case extends beyond inventory: supplier onboarding complexity was creating risk that premium brands would be reluctant to supply. By streamlining data flows between procurement, merchandising, and store operations through events, both the inventory problem and the supplier experience improve simultaneously.'
    },
    architect: {
      headline: 'Global retail event mesh: multi-brand, multi-country, connecting POS, eCommerce, manufacturing, and CRM \u2014 with Kafka bridge for analytics',
      outcome: 'The architecture spans manufacturing facilities, distribution centres, physical stores, and digital channels across multiple brands and countries. POS events, online transactions, inventory movements, and manufacturing milestones all flow through the event mesh. Kafka is deployed alongside for analytics workloads.',
      detail: 'Key architectural decisions: the event mesh handles operational integration (real-time, guaranteed delivery) while Kafka handles analytical consumption (high-throughput streaming to data lakes). Event Portal provides governance across the full event landscape. Multi-protocol support connects legacy POS systems (JMS), modern microservices (REST), and IoT devices (MQTT) in stores.'
    }
  },
  {
    id: 'rt3',
    subsector: 'Omnichannel & BOPIS',
    technology: {
      headline: 'A major retailer deployed 450+ event-driven flows to unify the customer experience across in-store, mobile, and online \u2014 enabling click-and-collect, ship-from-store, and real-time product traceability',
      outcome: 'Disconnected supply and distribution systems caused unsold inventory and empty shelves. The retailer needed real-time data sharing between HQ, stores, and customer-facing apps. 450+ new event-driven flows unified the digital experience across all channels \u2014 in-store, mobile, and online.',
      detail: 'Omnichannel is not just a customer-facing concept. Behind the scenes, it requires real-time coordination between inventory systems, order management, fulfilment, and logistics. Buy online pick up in store (BOPIS), ship-from-store, and endless aisle all depend on real-time inventory visibility across every location. The event mesh provides this by streaming inventory and order events to every channel simultaneously.'
    },
    integration: {
      headline: 'Omnichannel integration teams connected in-store POS, eCommerce, mobile apps, and marketplace channels through a single event backbone \u2014 450+ event-driven flows replacing point-to-point connections',
      outcome: 'The integration challenge: every channel (store POS, eCommerce, mobile app, marketplace, loyalty) needed real-time access to inventory, pricing, and customer data. Point-to-point connections between each pair of systems were fragile and slow. The event mesh provides a single backbone where every system publishes events and every channel subscribes.',
      detail: 'Key integration patterns: inventory events publishing from warehouse and store systems, consumed by eCommerce (availability), mobile app (stock locator), and fulfilment (allocation); order events from any channel flowing to a single fulfilment engine; customer events from POS and digital channels feeding a unified loyalty platform. Real-time product traceability connects supplier, warehouse, and store for quality and recall management.'
    },
    business: {
      headline: 'Customers expect to buy online and pick up in store within hours \u2014 retailers without real-time inventory visibility across every location cannot deliver this promise',
      outcome: 'Click-and-collect, ship-from-store, and endless aisle all depend on one thing: knowing exactly what is in stock at every location in real time. Retailers with batch-driven inventory synchronisation cannot confidently promise same-day pickup because their stock data may be hours old. Event-driven inventory events close this gap.',
      detail: 'The revenue impact of omnichannel is significant: retailers offering BOPIS capture sales that would otherwise go to competitors with faster fulfilment. Ship-from-store turns every location into a mini distribution centre, reducing delivery times and shipping costs. Endless aisle extends the product range beyond physical shelf space. All require the same foundation: real-time event flows between every channel and every location.'
    },
    architect: {
      headline: 'Omnichannel architecture: real-time inventory events across stores, warehouses, and channels \u2014 enabling BOPIS, ship-from-store, and unified fulfilment from a single event mesh',
      outcome: 'Inventory events publish from every store and warehouse. Every channel (eCommerce, mobile, POS, marketplace) subscribes to real-time availability. Order events from any channel route to the optimal fulfilment location based on stock position and proximity. The event mesh handles the fan-out and routing that omnichannel requires.',
      detail: 'Key patterns: inventory event publishing from store POS and warehouse management systems; topic-based routing by location, product category, and channel; unified order event stream from all channels to fulfilment; customer event aggregation from POS, digital, and loyalty for unified profiles; real-time product traceability from supplier through warehouse to store for quality management and recall.'
    }
  },
  {
    id: 'rt4',
    subsector: 'Home Improvement & Trade',
    technology: {
      headline: 'Home improvement retailers deployed event brokers connecting store-level systems to central data centres \u2014 bridging ActiveMQ at the edge with enterprise messaging at HQ',
      outcome: 'A home improvement chain with hundreds of stores uses event brokers in the data centre to handle message traffic from all locations. Store-level ActiveMQ instances bridge to the central mesh, providing reliable bidirectional communication between HQ and every store.',
      detail: 'The B2B dimension is significant for home improvement: trade customers, contractors, and suppliers all need real-time ordering and availability data. Another retailer uses SAP AEM and Integration Suite to integrate S/4HANA with Salesforce for better customer experience. The event mesh handles both consumer-facing and trade-facing integration through a single backbone.'
    },
    integration: {
      headline: 'Home improvement integration teams bridge store-level ActiveMQ to central event mesh \u2014 with SAP AEM connecting ERP to CRM for trade customer experience',
      outcome: 'The integration pattern: central event brokers in the data centre, store-level ActiveMQ instances at the edge bridging via JMS. Master data, employee information, sales data, discounts, and command-and-control messages flow bidirectionally. SAP AEM connects S/4HANA to Salesforce for trade customer workflows.',
      detail: 'Key integration use cases: master data distribution from HQ to stores; employee and discount information pushed to POS; sales transaction data lifted from stores to the data centre; command-and-control for store system updates; SAP-to-Salesforce integration for B2B trade ordering. The architecture solves the challenge of managing reliable messaging across hundreds of remote locations.'
    },
    business: {
      headline: 'A home improvement chain serving trade and consumer customers needed reliable real-time messaging across hundreds of stores \u2014 the legacy platform could not scale',
      outcome: 'Store operations depend on reliable data flow: pricing, inventory, employee schedules, and customer history must be current at every location. The previous platform created vulnerabilities. The event mesh provides reliable, scalable messaging that supports both the in-store consumer experience and the B2B trade ordering workflow.',
      detail: 'For home improvement retailers with large B2B trade operations, integration speed directly impacts revenue: trade customers expect real-time availability and pricing. Delays or errors in order processing drive trade customers to competitors. The event mesh ensures trade and consumer channels both operate on current, accurate data.'
    },
    architect: {
      headline: 'Home improvement edge-to-core: ActiveMQ at store level, Solace appliances in data centre, JMS bridge, SAP AEM for B2B trade integration',
      outcome: 'Central Solace appliances in the data centre handle traffic from all stores. ActiveMQ at each store location bridges to the central mesh via JMS. Remote Java clients at stores connect for bidirectional messaging. SAP AEM bridges S/4HANA to Salesforce for trade customer workflows.',
      detail: 'Key patterns: hub-and-spoke with central data centre brokers and store-level edge messaging; JMS bridge from ActiveMQ at stores; command-and-control pattern for store system updates; master data fan-out from HQ to hundreds of locations; customer history lookup from stores to central systems; SAP-to-Salesforce integration via AEM for B2B ordering.'
    }
  },
  {
    id: 'rt5',
    subsector: 'Supply Chain & Demand Sensing',
    technology: {
      headline: 'Retailers are connecting POS transaction events, demand signals, and supplier systems in real time \u2014 enabling demand sensing that replaces forecast-driven replenishment with live signals',
      outcome: 'Traditional retail replenishment relies on forecasts based on historical data. Demand sensing uses real-time POS transaction events, foot traffic data, weather, and local events to dynamically adjust replenishment. The event mesh streams these signals from stores to supply chain systems continuously.',
      detail: 'The supply chain advantage compounds: real-time demand signals from thousands of stores feed supplier integration systems, enabling vendors to see actual consumption rather than periodic purchase orders. This reduces the bullwhip effect where small demand changes amplify into large swings across the supply chain.'
    },
    integration: {
      headline: 'Supply chain integration teams connected POS transaction streams, warehouse management, and supplier portals through event mesh \u2014 replacing batch replenishment with demand-driven flows',
      outcome: 'POS transaction events stream from stores to supply chain systems in real time. Warehouse management consumes demand signals for dynamic allocation. Supplier portals receive consumption-based replenishment triggers rather than periodic purchase orders. Kafka bridge feeds demand forecasting ML models.',
      detail: 'Key integration patterns: POS event streaming from thousands of store locations; warehouse management integration for real-time stock allocation; supplier event exchange for consumption-based replenishment; perishables management with temperature and freshness event monitoring; Kafka bridge for demand forecasting and markdown optimisation models.'
    },
    business: {
      headline: 'A grocery retailer reduced perishable waste by connecting real-time demand signals to supply chain replenishment \u2014 shelves stay stocked while spoilage drops',
      outcome: 'Perishable goods are the highest-waste category in grocery retail. Forecast-driven replenishment either over-stocks (leading to spoilage) or under-stocks (leading to lost sales). Real-time demand sensing from POS events, combined with freshness monitoring, optimises replenishment to match actual consumption patterns.',
      detail: 'The business case extends beyond perishables: real-time demand signals improve markdown timing (reducing clearance losses), promotional effectiveness (measuring sell-through in real time rather than next-day reports), and new product launches (adjusting distribution based on early sales signals). Retailers with demand sensing capabilities consistently outperform those relying on historical forecasts.'
    },
    architect: {
      headline: 'Demand sensing architecture: POS event streaming from thousands of stores, Kafka bridge for ML demand models, supplier event exchange, and perishables monitoring via IoT',
      outcome: 'POS systems publish transaction events via the event mesh. Kafka bridge feeds demand forecasting models in Snowflake or Databricks. Supplier portals consume demand signals via REST APIs. IoT sensors (temperature, humidity) monitor perishable conditions. The architecture enables both real-time operational decisions and ML-driven demand planning.',
      detail: 'Key patterns: high-volume POS event ingestion from thousands of store locations; topic hierarchy by store, category, and product for granular demand signals; Kafka bridge for ML model training and real-time inference; supplier event exchange for consumption-based replenishment; IoT sensors for cold chain and freshness monitoring; edge processing at distribution centres for local replenishment decisions.'
    }
  }
],

values: {
  technology: [
    { title: 'Real-time across every store', text: 'Master data, pricing, and inventory events reach thousands of store locations in seconds. No more overnight batch synchronisation or manual updates.' },
    { title: 'Omnichannel without the complexity', text: 'Connect in-store POS, eCommerce, mobile apps, and marketplace channels through a single event backbone. Every channel sees the same data in real time.' },
    { title: 'Replace legacy middleware safely', text: 'Migrate from TIBCO, BizTalk, WebMethods, or RabbitMQ without disrupting store operations. Multi-protocol support means existing applications connect without rewrites.' },
    { title: 'Scale for peak and growth', text: 'Handle Black Friday spikes, international expansion, and marketplace launches without infrastructure bottlenecks. The event mesh scales with your business.' }
  ],
  integration: [
    { title: 'Hub-to-store distribution', text: 'Central brokers publish, stores subscribe by location and category via topic hierarchy. Massive fan-out from one event to thousands of endpoints.' },
    { title: 'iPaaS + event broker', text: 'Pair Solace with MuleSoft, Boomi, or SAP Integration Suite. API orchestration for sync use cases, event mesh for real-time distribution and guaranteed delivery.' },
    { title: 'Edge-to-cloud connectivity', text: 'Store-level brokers or clients connect to central mesh. ActiveMQ bridge, remote Java clients, or direct cloud connection \u2014 flexible per store profile.' },
    { title: 'Event Portal for governance', text: 'As the event landscape grows across stores, brands, and channels, Event Portal provides discoverability and governance. Teams find and reuse existing events instead of building new integrations.' }
  ],
  business: [
    { title: 'Eliminate pricing and inventory errors', text: 'Real-time data synchronisation across every store and channel. No more checkout price mismatches or stock discrepancies that erode customer trust.' },
    { title: 'Faster promotional launches', text: 'Launch campaigns simultaneously across thousands of locations and digital channels. Go from decision to execution in minutes, not days.' },
    { title: 'Reduce excess inventory', text: 'Connect buying, merchandising, and store systems in real time. Better visibility drives better allocation decisions and reduces costly overstock.' },
    { title: 'Recover lost revenue from legacy failures', text: 'Cart abandonment from unreliable delivery estimates, lost orders from messaging failures, delayed promotions \u2014 modern event infrastructure eliminates these revenue leaks.' }
  ],
  architect: [
    { title: 'Topic hierarchy for retail', text: 'Store ID, region, product category, event type \u2014 fine-grained topic subscriptions ensure each store receives only relevant data. Reduces bandwidth and simplifies security.' },
    { title: 'Event mesh alongside Kafka', text: 'Event mesh for operational integration (guaranteed delivery, store connectivity). Kafka for analytics (high-throughput streaming to data lake). Same events, different consumption patterns.' },
    { title: 'Multi-protocol for legacy and modern', text: 'JMS from legacy POS, REST from microservices, MQTT from IoT sensors and RFID. All connect natively to the event broker without translation layers.' },
    { title: 'Active-active for zero downtime', text: 'Retail cannot afford messaging outages during trading hours. Active-active deployment across data centres with automatic failover and zero message loss.' }
  ]
},

links: {
  technology: [
    { text: 'Solace for retail', url: 'https://solace.com/solutions/industries/retail/', icon: 'globe' },
    { text: 'Retail resources on solace.com', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'How retailers use event-driven architecture', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  integration: [
    { text: 'Solace for retail', url: 'https://solace.com/solutions/industries/retail/', icon: 'globe' },
    { text: 'Architect guide: Retail digital transformation', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'SAP integration with Solace', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' }
  ],
  business: [
    { text: 'Solace for retail', url: 'https://solace.com/solutions/industries/retail/', icon: 'globe' },
    { text: 'How real-time data transforms retail', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'Retail customer stories', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  architect: [
    { text: 'Architect guide: EDA for retail', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'Solace for retail', url: 'https://solace.com/solutions/industries/retail/', icon: 'globe' },
    { text: 'Event broker specifications', url: 'https://solace.com/products/event-broker/', icon: 'globe' }
  ]
}


  },


  "financial": {

stories: [
  {
    id: 'fs1',
    subsector: 'Investment Banking & Trading',
    technology: {
      headline: 'A top-10 global investment bank streams 118 billion messages per day across 6 data centres \u2014 without a single message lost',
      outcome: 'This bank deployed over 50 event broker appliances in financial centres around the world, forming a global event mesh for their low-latency trading platform. The infrastructure handles over 118 billion messages daily across tens of thousands of application connections \u2014 completely seamlessly, with zero data loss.',
      detail: 'Multiple tier-1 banks have converged on the same pattern: a global event mesh connecting front, middle, and back office applications across FX, equities, fixed income, and post-trade processing. The event mesh replaces legacy messaging infrastructure (TIBCO Rendezvous, ActiveMQ Nirvana) that could not scale to modern trading volumes or support cloud migration.'
    },
    integration: {
      headline: 'Investment banks replaced TIBCO and Nirvana with a global event mesh \u2014 connecting front, middle, and back office across every trading desk',
      outcome: 'Integration teams at multiple global banks migrated from TIBCO Rendezvous, TIBCO EMS, and Nirvana to Solace event brokers. The event mesh handles market data distribution, trade execution, post-trade processing, and regulatory reporting through a single infrastructure layer.',
      detail: 'At one bank, multiple internal teams use Solace for different purposes: internal market data distribution, WebSocket connectivity for primary markets, sales-oriented use cases, and digital notification platforms. The common infrastructure eliminates the proliferation of messaging products that was creating operational complexity and compliance risk.'
    },
    business: {
      headline: 'A global bank processes 1.3 million messages per second, 24 hours a day \u2014 the event mesh replaced infrastructure that was causing outages and compliance breaches',
      outcome: 'Legacy messaging infrastructure was creating operational risk: outages during peak trading, regulatory compliance breaches from multicast-based messaging, and inability to scale for new instruments and markets. The event mesh eliminated these risks while supporting business growth.',
      detail: 'The business case in capital markets is risk reduction as much as cost savings. A messaging outage during trading hours can cost millions in lost revenue and regulatory penalties. The event mesh provides the reliability, low latency, and compliance-friendly architecture that trading operations demand.'
    },
    architect: {
      headline: 'Global trading event mesh: 50+ appliances across 6 data centres, microsecond latency, zero message loss, with Nirvana and TIBCO migration',
      outcome: 'Solace event broker appliances deployed in financial centres globally, connected via event mesh with microsecond latency. Handles market data distribution, order routing, post-trade, and regulatory reporting. Multi-protocol support (JMS, AMQP, REST, WebSocket) enables gradual migration from legacy platforms.',
      detail: 'The architecture replaces multicast-based messaging (TIBCO Rendezvous) which caused regulatory compliance issues, and proprietary platforms (Nirvana, ActiveMQ) that could not scale. Hardware appliances deliver deterministic low latency for price-sensitive workloads. Software brokers handle less latency-critical workloads in cloud. Both connect via the same event mesh.'
    }
  },
  {
    id: 'fs2',
    subsector: 'Retail Banking & Payments',
    technology: {
      headline: 'Retail banks and payment processors replaced fragile ESBs and batch systems with event-driven platforms \u2014 handling real-time payments at scale',
      outcome: 'Multiple banks and payment companies migrated from legacy ESBs, batch processes, and REST-only architectures to event-driven platforms. One bank adopted event-driven microservices to support a national payments mandate, with zero message loss as the top requirement. A payments network became the eventing backbone across all lines of business.',
      detail: 'The common driver: legacy integration could not handle the volume, speed, or reliability required for modern digital banking. One bank was failing at 200 transactions per second on their UPI channel. Another was losing client requests under peak load. Event-driven architecture solved the scaling problem while enabling real-time customer experiences that batch systems could not deliver.'
    },
    integration: {
      headline: 'Banking integration teams migrated from monolithic ESBs to event-driven microservices \u2014 reducing integration cycles from 7+ days to near-real-time',
      outcome: 'Legacy banks faced a common problem: introducing new products, offerings, or third-party integrations took over 7 days because core systems were not interconnected. Event-driven architecture decoupled these systems, enabling near-real-time integration between core banking, digital channels, and partner ecosystems.',
      detail: 'At a major Asian bank, the switch from monolithic applications to event-driven microservices was triggered by a national payments mandate requiring zero message loss. At a Singapore payments network, implementing new payment providers had been painfully slow \u2014 the event-driven backbone made onboarding new providers a configuration task. Latin American banks replaced tightly coupled REST/API Gateway patterns with event streaming for their banking platforms.'
    },
    business: {
      headline: 'Banks that were losing customers due to slow digital experiences now process payments and updates in real time \u2014 turning integration speed into competitive advantage',
      outcome: 'Customer satisfaction was directly impacted by legacy integration: invoice tracking was not real-time, digital banking interactions were slow, and payment failures during peak load drove customers to competitors. Event-driven architecture made real-time the default.',
      detail: 'For retail banks, the business case is customer retention and digital competitiveness. Fintechs set the expectation for instant experiences. Legacy banks that cannot match this speed lose customers. Event-driven integration enables the real-time notifications, instant balance updates, and seamless partner integrations that modern customers expect.'
    },
    architect: {
      headline: 'Retail banking modernisation: ESB-to-EDA migration with event-driven microservices, hybrid on-prem/cloud, and zero-message-loss guarantee',
      outcome: 'The architecture replaces monolithic ESBs with event-driven microservices. Core banking systems publish events consumed by digital channels, partner integrations, and analytics. Hybrid deployment spans on-premises core banking infrastructure and cloud-hosted digital services.',
      detail: 'Key patterns: event-driven microservices for payment processing (replacing monolithic transaction managers), event-enabled core banking (publishing account and transaction events), and hybrid event mesh connecting on-prem core to cloud digital channels. Zero message loss is non-negotiable for payment flows. Multi-protocol support connects legacy JMS-based core banking with modern REST and WebSocket digital channels.'
    }
  },
  {
    id: 'fs3',
    subsector: 'Exchanges & Trading Platforms',
    technology: {
      headline: 'Stock exchanges and trading platforms deployed event brokers at the core of their matching engines \u2014 distributing market data with microsecond precision',
      outcome: 'Multiple exchanges use Solace as critical infrastructure within their trading platforms. One deployed event brokers as part of its next-generation matching engine system, handling real-time disaster recovery replication. Another uses them to distribute market data to member brokers, lowering the technological barrier to entry for smaller firms.',
      detail: 'Trading platforms and FX brokers face a similar challenge: the legacy messaging infrastructure (often ActiveMQ) cannot scale for new sites, instruments, or customer onboarding. One FX trading platform replaced ActiveMQ across multiple global sites to form an event mesh streaming pricing and post-trade data with the low latency their business demands.'
    },
    integration: {
      headline: 'Exchanges and trading platforms replaced ActiveMQ and proprietary messaging with event mesh \u2014 connecting matching engines, market data, and post-trade across sites',
      outcome: 'Integration teams at exchanges and trading firms migrated from ActiveMQ, proprietary messaging, and point-to-point connections to event mesh architectures. The result: market data distribution, trade execution, and post-trade processing on a single platform with cross-site connectivity.',
      detail: 'At one exchange, the event broker handles real-time DR replication of key matching engine data. At an FX trading firm, the migration from ActiveMQ enabled deployment of new sites and instruments that were previously impossible \u2014 customer onboarding that took weeks now takes days. The event mesh pattern connects primary, DR, and international sites seamlessly.'
    },
    business: {
      headline: 'An exchange reduced the barrier to entry for member brokers \u2014 while a trading platform turned a forced ActiveMQ migration into a competitive upgrade',
      outcome: 'For exchanges, distributing market data efficiently makes the market more accessible to smaller brokers who cannot afford expensive filtering infrastructure. For trading platforms, the ability to rapidly onboard new customers and instruments directly drives revenue growth.',
      detail: 'In capital markets, the messaging infrastructure is not a back-office concern \u2014 it directly determines how many customers you can serve, how many instruments you can trade, and how fast you can enter new markets. Event mesh architecture turns infrastructure from a constraint into an accelerator.'
    },
    architect: {
      headline: 'Exchange-grade architecture: event brokers in matching engine infrastructure, real-time DR replication, multi-site event mesh for FX and derivatives',
      outcome: 'Hardware appliances deployed within exchange matching engine infrastructure for deterministic low latency. Real-time DR replication ensures zero data loss. Multi-site event mesh connects primary, DR, and international trading venues. Market data fan-out to thousands of member connections.',
      detail: 'Key architectural patterns: appliances for latency-critical matching engine integration, software brokers for market data distribution to members, cross-site event mesh for multi-venue trading. The KRX Exture 3.0 next-generation system represents continuous adoption through multiple platform generations \u2014 from Exture+ in 2014 to the current system.'
    }
  },
  {
    id: 'fs4',
    subsector: 'Asset Management',
    technology: {
      headline: 'Hedge funds and asset managers use Solace to stream internal model output, portfolio events, and risk signals across trading desks \u2014 with the low latency quantitative strategies demand',
      outcome: 'Quantitative trading firms and multi-strategy hedge funds require event infrastructure that can handle massive information flows in an event-driven manner, even through peak volatility. The platform scales to accommodate growing data volumes while working alongside existing C++ and Python trading systems.',
      detail: 'Asset managers are adopting Solace for use cases ranging from portfolio risk aggregation to AI-driven chatbots for advisor interfaces. One firm uses Solace to share internal model output across desks via topic-based distribution. The common requirement: deterministic low latency with guaranteed delivery for position and risk data.'
    },
    integration: {
      headline: 'Asset management integration teams connect OMS, EMS, risk engines, and market data through a single event mesh \u2014 replacing fragmented messaging across the investment lifecycle',
      outcome: 'The investment lifecycle involves order management, execution management, post-trade processing, risk calculation, and regulatory reporting \u2014 each historically running on different messaging infrastructure. The event mesh unifies these into a single backbone with topic-based routing.',
      detail: 'Integration patterns: market data distribution from multiple sources normalised through the event mesh; order and execution events flowing between OMS and EMS; real-time position updates to risk engines; portfolio event streaming for P&L attribution; regulatory reporting consuming trade events. Multi-protocol support connects legacy FIX-based systems alongside modern REST APIs.'
    },
    business: {
      headline: 'When markets spike, hedge funds need infrastructure that scales with volatility \u2014 not infrastructure that becomes the bottleneck',
      outcome: 'Peak and volatile market conditions are exactly when trading infrastructure matters most. Legacy messaging that cannot scale during market events forces firms to throttle or queue \u2014 both unacceptable for time-sensitive strategies. Event mesh handles burst volumes without degradation.',
      detail: 'The business case for asset managers is competitive edge: faster data distribution means better-informed trading decisions. Firms that can process more market signals in less time have an advantage. The event mesh also reduces operational risk \u2014 a messaging failure during volatile markets can result in significant losses.'
    },
    architect: {
      headline: 'Asset management event mesh: low-latency model distribution, OMS/EMS integration, real-time risk aggregation, and market data normalisation',
      outcome: 'Hardware appliances for latency-critical model distribution. Software brokers for risk aggregation and regulatory reporting. Topic-based routing ensures each desk receives only relevant signals. Multi-protocol support connects FIX, JMS, REST, and WebSocket consumers.',
      detail: 'Key patterns: topic hierarchy by asset class, strategy, and desk for fine-grained distribution; shared subscriptions for load-balanced consumption across risk calculation nodes; hardware appliances in co-location for market data; software brokers in cloud for regulatory reporting and analytics; cross-site mesh between primary trading venue and DR site.'
    }
  },
  {
    id: 'fs5',
    subsector: 'Insurance',
    technology: {
      headline: 'Insurance companies replaced batch-driven policy and claims processing with event-driven architecture \u2014 enabling real-time underwriting, instant notifications, and cloud migration',
      outcome: 'Legacy batch-oriented workflows meant policy changes, claims updates, and customer notifications took hours or overnight. Event-driven architecture enables real-time processing: a claim event triggers assessment, notification, and reserve adjustment simultaneously rather than sequentially.',
      detail: 'One insurer uses Solace to integrate all aspects of its product offerings, ensuring an optimal user experience for customers. Another uses it for on-premises to cloud integration and connectivity with their policy system provider. A global insurance arm of a major bank is building an event-driven exchange platform connecting operations across Latin America and internal cloud zones.'
    },
    integration: {
      headline: 'Insurance integration teams are event-enabling policy systems, claims platforms, and underwriting engines \u2014 connecting on-premises legacy with cloud-hosted digital channels',
      outcome: 'The insurance technology stack typically spans legacy policy administration (on-premises), modern claims platforms (cloud), underwriting engines, actuarial systems, and agent/broker portals. Event-driven architecture connects all of these without the fragile point-to-point integrations that break when any system changes.',
      detail: 'Integration patterns: policy lifecycle events (new business, endorsements, renewals, cancellations) publishing from administration systems; claims events triggering parallel workflows (assessment, notification, reserve, recovery); real-time underwriting data from external enrichment sources; agent portal updates via WebSocket push. Hybrid deployment bridges on-premises policy systems with cloud-hosted digital channels.'
    },
    business: {
      headline: 'Insurers that process claims in real time rather than overnight batches deliver faster payouts, better customer experience, and more accurate reserves',
      outcome: 'Customer expectations in insurance have shifted: policyholders expect instant confirmation, real-time claims tracking, and proactive notifications. Batch processing creates delays that drive customer dissatisfaction and operational inefficiency. Event-driven processing closes the gap.',
      detail: 'The business case extends to underwriting accuracy: real-time data from IoT devices, telematics, and external sources enables dynamic risk assessment rather than annual reviews. Insurers with real-time event infrastructure can offer usage-based and behaviour-based products that batch-oriented competitors cannot.'
    },
    architect: {
      headline: 'Insurance event mesh: policy administration events, claims workflow orchestration, real-time underwriting, hybrid on-prem/cloud spanning legacy and digital channels',
      outcome: 'On-premises policy administration systems publish lifecycle events via JMS bridge. Cloud-hosted claims platforms consume and publish via REST. Underwriting engines subscribe to enrichment data and publish risk assessments. Agent portals receive real-time updates via WebSocket. Event mesh spans on-premises and multiple cloud zones.',
      detail: 'Key patterns: policy lifecycle event streaming replacing batch extracts; parallel claims processing (multiple consumers triggered simultaneously from one claim event); real-time underwriting enrichment from external data sources; hybrid deployment bridging legacy on-prem to cloud digital channels; multi-region deployment for international insurance operations spanning Latin America, EMEA, and APAC.'
    }
  }
],

values: {
  technology: [
    { title: 'Microsecond latency for trading', text: 'Hardware appliances deliver deterministic low latency for price-sensitive workloads. Software brokers handle less critical workloads. Both connect via the same event mesh.' },
    { title: 'Zero message loss guarantee', text: 'Payment processing, trade execution, and regulatory reporting demand guaranteed delivery. Built-in HA/DR with zero RPO ensures no transaction is ever lost.' },
    { title: 'Replace legacy messaging safely', text: 'Migrate from TIBCO Rendezvous, ActiveMQ, Nirvana, or proprietary ESBs without disrupting live trading or payment operations. Multi-protocol support preserves existing application investments.' },
    { title: 'Scale from startup to global bank', text: 'The same platform handles a fintech processing 200 TPS and a tier-1 bank processing 118 billion messages per day. Architecture scales with the business.' }
  ],
  integration: [
    { title: 'Multi-protocol for financial services', text: 'JMS from legacy core banking, AMQP from trading systems, REST from digital channels, WebSocket for real-time client updates. All connect natively without translation.' },
    { title: 'ESB-to-EDA migration', text: 'Replace monolithic ESBs with event-driven microservices. Core banking, payments, and trading systems publish events consumed by any downstream application.' },
    { title: 'Global event mesh for trading', text: 'Connect trading venues, data centres, and cloud services across geographies. Microsecond cross-site latency for market data and order routing.' },
    { title: 'Hybrid on-prem and cloud', text: 'Core banking and matching engines stay on-premises. Digital channels and analytics run in cloud. Event mesh bridges both worlds with guaranteed delivery.' }
  ],
  business: [
    { title: 'Real-time digital banking', text: 'Instant balance updates, real-time notifications, and seamless partner integrations. Match fintech customer experiences without replacing core banking systems.' },
    { title: 'Risk reduction', text: 'Messaging outages during trading hours cost millions. Compliance breaches from legacy multicast carry regulatory penalties. Event mesh eliminates both risks.' },
    { title: 'Faster time to market', text: 'New payment providers, instruments, and markets onboard in days instead of weeks. Integration speed becomes competitive advantage.' },
    { title: 'Lower infrastructure complexity', text: 'Replace the proliferation of messaging products (TIBCO, ActiveMQ, Nirvana, IBM MQ) with a single event mesh. Fewer platforms to operate, secure, and audit.' }
  ],
  architect: [
    { title: 'Appliances for deterministic latency', text: 'Hardware event broker appliances in trading infrastructure for microsecond message delivery. Purpose-built for financial services workloads where latency matters.' },
    { title: 'Cross-site DR with zero RPO', text: 'Real-time replication between primary and DR sites. Matching engine data, trade state, and payment transactions continuously synchronised with zero data loss.' },
    { title: 'Event mesh across venues', text: 'Connect on-premises trading floors, co-location facilities, cloud analytics, and partner networks. Dynamic message routing handles cross-site topology automatically.' },
    { title: 'Regulatory-ready architecture', text: 'Unicast messaging replaces compliance-problematic multicast. Full audit trail, encryption in transit, and SOC-2 compliance built into the platform.' }
  ]
},

links: {
  technology: [
    { text: 'RBC Capital Markets case study', url: 'https://solace.com/company/customers/rbc/', icon: 'doc' },
    { text: 'Solace for financial services', url: 'https://solace.com/solutions/industries/financial-services/', icon: 'globe' },
    { text: 'Financial services resources', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  integration: [
    { text: 'RBC Capital Markets case study', url: 'https://solace.com/company/customers/rbc/', icon: 'doc' },
    { text: 'Solace for financial services', url: 'https://solace.com/solutions/industries/financial-services/', icon: 'globe' },
    { text: 'Legacy middleware migration patterns', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  business: [
    { text: 'RBC Capital Markets case study', url: 'https://solace.com/company/customers/rbc/', icon: 'doc' },
    { text: 'Solace for financial services', url: 'https://solace.com/solutions/industries/financial-services/', icon: 'globe' },
    { text: 'Financial services customer stories', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  architect: [
    { text: 'RBC Capital Markets case study', url: 'https://solace.com/company/customers/rbc/', icon: 'doc' },
    { text: 'Event broker specifications', url: 'https://solace.com/products/event-broker/', icon: 'globe' },
    { text: 'Solace for financial services', url: 'https://solace.com/solutions/industries/financial-services/', icon: 'globe' }
  ]
}


  },

  "energy": {

stories: [
  {
    id: 'eu1',
    subsector: 'Grid & Utilities',
    technology: {
      headline: 'A national grid operator replaced ActiveMQ with an event mesh for real-time equipment alerts, voltage monitoring, and emergency notifications across the transmission network',
      outcome: 'The existing integration environment relied on point-to-point patterns combining APIs, file transfers, and ActiveMQ with MySQL persistence. This could not scale for the real-time notification use cases the grid requires: equipment breakdowns, unstable voltage, switch events, and emergencies. The event mesh provides the infrastructural communication layer for all of these.',
      detail: 'The pattern repeats across utilities: a US electric utility serving 860,000 customers is replacing end-of-life BizTalk with event-driven architecture — critical during storm events when data volumes surge dramatically with outage notifications, alarms, and service restoration updates. A water utility uses SAP AEM with IoT smart meters for real-time water quality and quantity monitoring. Multiple utilities are replacing TIBCO EMS and Amazon MQ as part of broader integration modernisation.'
    },
    integration: {
      headline: 'Utilities are replacing TIBCO EMS, BizTalk, and ActiveMQ with event-driven platforms — pairing Solace with Boomi and SAP Integration Suite for hybrid integration',
      outcome: 'Integration teams across multiple utilities are converging on the same stack: Solace for real-time event streaming paired with an iPaaS (Boomi or SAP Integration Suite) for orchestration. One utility was the first customer onboarded to the joint Boomi Event Streams Enterprise product. Another is migrating from SAP PI/PO to SAP Integration Suite with AEM.',
      detail: 'The integration challenges are consistent: legacy middleware approaching end-of-support (BizTalk 2028, TIBCO EMS), point-to-point patterns that cannot scale, and the need to bridge operational technology (smart meters, grid sensors, SCADA) with enterprise IT (billing, CRM, analytics). The event mesh sits between OT and IT, handling the protocol translation and guaranteed delivery that utilities require.'
    },
    business: {
      headline: 'An electric utility serving 860,000 customers needed messaging that could handle storm-surge data volumes — outage notifications, alarms, and restoration updates in real time',
      outcome: 'During storm events, data volumes spike dramatically as outage notifications, equipment alarms, and service restoration updates flood the system simultaneously. The legacy BizTalk platform could not handle these surges. Event-driven architecture provides the elastic, reliable messaging that keeps customers informed and field crews coordinated during the moments that matter most.',
      detail: 'A water utility uses real-time monitoring to detect anomalies in water quality and predict maintenance needs — supporting sustainability goals while reducing operational costs. A national grid operator treats the event mesh as critical infrastructure: equipment breakdowns and voltage instability require sub-second notification to prevent cascading failures. The business case across utilities is clear: real-time event infrastructure is not optional, it is safety-critical.'
    },
    architect: {
      headline: 'Utility integration modernisation: ActiveMQ and BizTalk replaced with event mesh bridging SCADA, smart meters, and grid sensors to enterprise billing, CRM, and analytics',
      outcome: 'The architecture bridges operational technology (SCADA, smart meters, grid sensors, water quality monitors) to enterprise IT (SAP billing, CRM, analytics platforms). MQTT for IoT device ingestion, JMS for legacy system bridging, REST for modern applications. Active-active deployment for utilities where messaging outages have safety implications.',
      detail: 'Key patterns: IoT telemetry ingestion at scale via MQTT (smart meters, water sensors, grid monitors); protocol bridge from legacy ActiveMQ/TIBCO to modern event mesh; SAP AEM integration for billing and meter-to-cash processes; Boomi or SAP Integration Suite for orchestration alongside event streaming for real-time distribution. Storm-surge elasticity is a design requirement — the architecture must handle 10x normal volumes during extreme weather events.'
    }
  },
  {
    id: 'eu2',
    subsector: 'Energy Trading & Renewables',
    technology: {
      headline: 'An energy trading firm streams commodities market data between trading centres in real time — while a renewables company optimises its entire biomass supply chain to meet carbon targets',
      outcome: 'A commodities trading house uses Solace to distribute and synchronise market data and trades between its London and Geneva trading centres. Separately, a major renewables company is using event-driven architecture to optimise its biomass supply chain from forest to furnace — aiming to halve production and transportation costs to become profitable without government subsidies.',
      detail: 'An energy trading startup built its entire platform on Solace, choosing it for high-frequency, low-latency capabilities with robust slow-consumer handling. The HA setup supports trading algorithms that require real-time data. A European energy company uses SAP AEM with Integration Suite to build a natural gas activation portal — the previous SAP-only approach lacked the reliability needed for a customer-facing self-service platform.'
    },
    integration: {
      headline: 'Energy companies are event-enabling SAP for real-time activation portals, supply chain optimisation, and cross-site trading synchronisation',
      outcome: 'Multiple energy companies use SAP AEM as the integration backbone: one for a natural gas B2B activation portal combining SAP Integration Suite with AEM for reliable, high-quality customer experience. Another for HR integration across multiple downstream systems, replacing manual updates and polling with event-driven synchronisation.',
      detail: 'The trading use cases are architecturally distinct: cross-site data synchronisation requires guaranteed delivery with microsecond latency between geographic locations. The supply chain use cases (biomass logistics, equipment procurement) require integration between SAP, logistics providers, and operational systems. Both converge on the same event mesh — one infrastructure serving very different latency and reliability profiles.'
    },
    business: {
      headline: 'A renewables company must halve its supply chain costs by 2027 to stay profitable without subsidies — event-driven architecture is optimising every step from forest to furnace',
      outcome: 'Government subsidies for carbon-neutral energy expire, and the company must find internal efficiencies to remain viable. The largest cost is biomass fuel production and transportation. Event-driven architecture provides real-time visibility and optimisation across the entire supply chain — an initiative called Forest to Furnace.',
      detail: 'In energy trading, the business case is straightforward: market data and trade synchronisation between trading centres must be real-time, reliable, and resilient. For the natural gas company, the event-driven activation portal directly impacts customer acquisition — delays or failures in gas activation drive customers to competitors. Across energy, the pattern is the same: real-time data flow drives both operational efficiency and customer experience.'
    },
    architect: {
      headline: 'Energy trading and operations: cross-site event mesh for market data synchronisation, SAP AEM for supply chain and activation portals, HA for algorithmic trading',
      outcome: 'Trading architecture: event mesh connecting geographically distributed trading centres with guaranteed delivery and low latency. Operational architecture: SAP AEM bridging ERP to logistics, procurement, and customer portals. Both deployed with high availability — trading algorithms and customer-facing portals cannot tolerate downtime.',
      detail: 'Key patterns: cross-site mesh for trading (London-Geneva, multi-region); SAP AEM + Integration Suite for B2B portals (natural gas activation); supply chain event streaming for logistics optimisation (biomass from forest to furnace); HA software deployment for energy trading startups building algorithmic platforms. The architecture must support both the microsecond latency of trading and the guaranteed delivery of supply chain events.'
    }
  },
  {
    id: 'eu3',
    subsector: 'Oil & Gas Services',
    technology: {
      headline: 'An oilfield services company moved equipment health monitoring from batch-based local data centres to real-time cloud analytics — enabling predictive maintenance across global operations',
      outcome: 'Legacy IoT infrastructure confined health monitoring to on-premises data centres with limited analytical capabilities. The system could only provide basic notifications and batch reporting. By moving to event-driven cloud architecture, the company enabled real-time time-series analysis of equipment health data across global operations — shifting from reactive to predictive maintenance.',
      detail: 'A global mining company replaced its IBM and Oracle Fusion integration infrastructure with a next-generation event-driven platform to support real-time digital transformation across operations. A major oil company successfully proved an event mesh spanning SAP BTP public brokers and customer-controlled regions, connecting S/4HANA with Databricks, PowerBI, and Azure Data Lake for real-time analytics.'
    },
    integration: {
      headline: 'Energy and mining companies are building next-generation integration platforms — replacing IBM and Oracle with event-driven architecture for real-time field operations',
      outcome: 'A global mining company designed and delivered what they call their next-generation integration platform using Solace, replacing IBM and Oracle Fusion infrastructure that could not support event-driven digital transformation. An oilfield services company uses SAP AEM for condition-based maintenance: equipment telemetry triggers maintenance orders automatically in S/4HANA.',
      detail: 'The integration pattern in energy field operations: IoT sensors on equipment (pumps, turbines, drilling rigs, mining vehicles) publish telemetry via MQTT. The event mesh routes this to both real-time monitoring dashboards and SAP for automated maintenance workflows. Condition-based maintenance replaces scheduled maintenance — reducing costs while improving equipment uptime. The same mesh connects equipment master data, personnel, and order-to-cash processes.'
    },
    business: {
      headline: 'Mining and energy companies that relied on batch processes were missing real-time signals — higher production costs, more environmental damage, and delayed maintenance decisions',
      outcome: 'Without real-time event delivery, a mining company faced higher unit costs of production and greater environmental impact because operational decisions were based on stale data. Condition-based maintenance across oilfield operations means equipment is serviced when it needs it, not on arbitrary schedules — reducing both downtime and unnecessary maintenance costs.',
      detail: 'The predictive maintenance business case is significant: moving from batch-based health monitoring to real-time analytics enables early detection of equipment degradation before failure occurs. For mining operations, real-time integration across the value chain — from pit to port — drives both efficiency and environmental compliance. These are not incremental improvements; they represent a shift from reactive operations to data-driven decision making.'
    },
    architect: {
      headline: 'Industrial IoT event mesh: MQTT telemetry from field equipment to cloud analytics and SAP AEM for condition-based maintenance, spanning on-prem, BTP, and hyperscaler',
      outcome: 'The architecture spans three deployment zones: edge (field equipment, rigs, mine sites), customer-controlled regions (on-premises data centres, private cloud), and hyperscaler cloud (analytics, AI/ML). IoT telemetry published via MQTT at the edge flows through the event mesh to cloud-hosted analytics (Databricks, PowerBI, Azure Data Lake) and SAP for automated maintenance workflows.',
      detail: 'Key patterns: multi-broker mesh connecting SAP BTP brokers to customer-controlled brokers for data sovereignty; MQTT for high-volume equipment telemetry; SAP AEM for condition-based maintenance (sensor events trigger S/4HANA maintenance orders); CDC from S/4HANA to analytics platforms via event mesh; equipment master data distribution across global operations. The architecture must handle remote, high-latency environments (offshore rigs, remote mine sites) with store-and-forward capability.'
    }
  },
  {
    id: 'eu4',
    subsector: 'Mining & Resources',
    technology: {
      headline: 'A global mining company replaced IBM and Oracle Fusion with a next-generation event-driven integration platform \u2014 enabling real-time digital transformation across pit-to-port operations',
      outcome: 'The existing integration infrastructure could not support the event-driven digital transformation needed to improve performance across mining operations. The next-generation integration platform uses Solace to deliver real-time events across the entire value chain \u2014 from extraction through processing to port logistics.',
      detail: 'Without real-time event delivery, the company faced higher unit costs of production and greater environmental impact because operational decisions were based on stale data. Material management systems were double-handling materials due to inefficiencies. Real-time train scheduling and fleet telemetry replaced batch processes that could not respond to changing conditions on the fly.'
    },
    integration: {
      headline: 'Mining integration teams replaced IBM and Oracle Fusion with event-driven architecture \u2014 connecting fleet telemetry, scheduling, and SAP across remote mine sites',
      outcome: 'The integration challenge in mining spans extreme conditions: remote sites with intermittent connectivity, heavy equipment generating high-volume telemetry, and supply chain coordination from pit to port. The event mesh connects all of these with store-and-forward capability for remote locations.',
      detail: 'Key integration patterns: fleet telemetry from mining vehicles and equipment via MQTT; train scheduling events replacing batch-driven manifests; material tracking across processing stages; SAP integration for procurement and maintenance workflows. The event mesh bridges on-premises systems at mine sites with cloud-hosted analytics and enterprise applications.'
    },
    business: {
      headline: 'Higher production costs and environmental damage from batch-based operations \u2014 a mining company shifted to real-time event-driven integration to reduce both',
      outcome: 'Batch processes meant operational decisions were based on data that was hours or days old. Equipment was double-handled, schedules were inflexible, and environmental monitoring lagged. Real-time event flows across the value chain enable data-driven decisions that reduce costs, improve safety, and lower environmental impact.',
      detail: 'The business case for mining is operational efficiency at scale: every hour of equipment downtime costs significantly. Real-time fleet telemetry and predictive maintenance reduce unplanned downtime. Dynamic train scheduling optimises logistics. Environmental monitoring with real-time alerts ensures compliance and reduces remediation costs.'
    },
    architect: {
      headline: 'Mining event mesh: MQTT telemetry from heavy equipment, store-and-forward at remote sites, SAP integration, and cloud analytics across pit-to-port operations',
      outcome: 'Edge brokers at mine sites handle local processing and store-and-forward for intermittent satellite connectivity. MQTT for high-volume equipment telemetry. Event mesh bridges to cloud-hosted analytics (Databricks, Snowflake) and on-premises SAP for procurement and maintenance. Multi-site mesh connects mines, processing plants, rail, and port operations.',
      detail: 'Key architectural requirements: store-and-forward for remote sites with limited connectivity; high-volume MQTT ingestion from mining equipment; multi-site mesh spanning geographically distributed operations; SAP integration for maintenance and procurement workflows; environmental monitoring with real-time alerting; DR across sites for operational continuity.'
    }
  },
  {
    id: 'eu5',
    subsector: 'Water & Smart Infrastructure',
    technology: {
      headline: 'A water utility deployed IoT smart meters with SAP AEM for real-time water quality monitoring \u2014 enabling predictive maintenance and faster anomaly detection across the distribution network',
      outcome: 'The smart water platform combines IoT-driven smart meters with event-driven architecture for real-time monitoring of water quality and quantity. The system enables faster anomaly detection, predictive maintenance, and improved water management decisions \u2014 supporting sustainability and efficiency goals.',
      detail: 'Multiple utilities are modernising simultaneously: one is replacing a legacy billing system and migrating from SAP PI/PO to SAP Integration Suite with AEM. Another is migrating away from Amazon MQ and TIBCO EMS as part of broader integration modernisation. The common driver: legacy systems cannot support the real-time monitoring and customer experience that modern utilities require.'
    },
    integration: {
      headline: 'Water and electricity utilities are pairing SAP AEM with IoT platforms for real-time meter-to-cash \u2014 replacing batch billing with event-driven processing',
      outcome: 'Smart meter telemetry flows via MQTT to the event mesh, which routes readings to SAP for billing, to analytics for demand forecasting, and to customer portals for real-time usage dashboards. The meter-to-cash process becomes event-driven rather than batch-driven.',
      detail: 'Integration patterns: MQTT for smart meter ingestion at scale; SAP AEM bridging meter data to billing and CRM; new billing system integration via SAP Integration Suite and AEM; real-time customer notifications for usage, billing, and outage updates. The architecture replaces overnight batch billing with continuous event-driven processing.'
    },
    business: {
      headline: 'A water utility uses real-time monitoring to detect quality anomalies before they reach customers \u2014 supporting sustainability goals while reducing operational costs',
      outcome: 'Traditional water quality monitoring relied on periodic sampling. Real-time IoT monitoring detects anomalies as they occur \u2014 before contaminated water reaches customers. Predictive maintenance reduces pipe bursts and leaks. The operational efficiency gains directly support sustainability targets.',
      detail: 'For electricity utilities, the business case includes personalised pricing plans based on real-time consumption data, reducing customer attrition. One utility created more personalised pricing by combining real-time billing with meter telemetry. The customer experience improvement drives retention in increasingly competitive energy markets.'
    },
    architect: {
      headline: 'Smart utility architecture: MQTT from smart meters, SAP AEM for billing integration, real-time customer portals, and predictive maintenance from IoT event streams',
      outcome: 'MQTT for high-volume smart meter ingestion across the distribution network. SAP AEM bridges meter data to SAP billing. Customer portals receive real-time usage and billing events via WebSocket. Analytics platforms consume meter streams for demand forecasting and anomaly detection.',
      detail: 'Key patterns: smart meter MQTT ingestion at network scale; SAP PI/PO to Integration Suite migration with AEM for event streaming; real-time meter-to-cash replacing overnight batch; customer notification events for outages and billing; predictive maintenance from water quality and infrastructure sensor streams; DR for utilities where billing outages have regulatory consequences.'
    }
  }
],

values: {
  technology: [
    { title: 'Real-time grid and network operations', text: 'Equipment alerts, voltage monitoring, and emergency notifications flow in real time across the network. Sub-second response when it matters most.' },
    { title: 'OT-to-IT bridge', text: 'Connect SCADA, smart meters, and field sensors to enterprise billing, CRM, and analytics without custom middleware. MQTT for IoT, JMS for legacy, REST for modern apps.' },
    { title: 'Storm-surge resilience', text: 'Handle 10x normal message volumes during extreme weather events. Elastic architecture ensures outage notifications and restoration updates keep flowing when customers need them most.' },
    { title: 'Predictive maintenance at scale', text: 'Shift from batch-based health monitoring to real-time equipment analytics. Detect degradation before failure, reduce downtime, and optimise maintenance schedules.' }
  ],
  integration: [
    { title: 'Legacy middleware replacement', text: 'Migrate from TIBCO EMS, BizTalk, ActiveMQ, and Amazon MQ to modern event brokers. Multi-protocol support means existing applications connect without rewrites.' },
    { title: 'SAP AEM for energy', text: 'Event-enable SAP for meter-to-cash, condition-based maintenance, supply chain, and customer portals. Pairs with SAP Integration Suite for orchestration.' },
    { title: 'iPaaS + event mesh', text: 'Boomi Event Streams Enterprise or SAP Integration Suite for orchestration. Solace for real-time event distribution and guaranteed delivery. Best of both worlds.' },
    { title: 'Cross-site synchronisation', text: 'Trading centres, operational sites, and cloud regions connected via event mesh. Guaranteed delivery with geographic redundancy for mission-critical energy operations.' }
  ],
  business: [
    { title: 'Safety-critical reliability', text: 'Grid operators and utilities treat the event mesh as critical infrastructure. Equipment failures and voltage instability require sub-second notification to prevent cascading outages.' },
    { title: 'Supply chain optimisation', text: 'Real-time visibility from source to delivery — biomass logistics, fuel transport, equipment procurement. Event-driven operations cut costs and meet sustainability targets.' },
    { title: 'Customer experience', text: 'Self-service portals for gas activation, real-time outage updates for electricity customers, smart meter data for personalised billing. Events power the customer-facing experience.' },
    { title: 'Regulatory and sustainability', text: 'Real-time operational data supports carbon reporting, environmental compliance, and regulatory submissions. Auditable event streams for every operational decision.' }
  ],
  architect: [
    { title: 'Edge-to-cloud telemetry', text: 'MQTT from field devices, rigs, and mine sites. Store-and-forward for remote and high-latency environments. Event mesh routes telemetry to cloud analytics and SAP.' },
    { title: 'Multi-broker mesh', text: 'SAP BTP brokers, customer-controlled brokers, and hyperscaler-hosted brokers connected in a single mesh. Data sovereignty and latency requirements met by deployment topology.' },
    { title: 'Protocol bridge for OT', text: 'SCADA systems, legacy historians, and industrial protocols bridge to the event mesh. OPC-UA to MQTT, Modbus to REST — connecting operational technology to enterprise IT.' },
    { title: 'High availability for critical infra', text: 'Active-active deployment for utilities and grid operators. Zero message loss for safety-critical notifications. Automatic failover with no manual intervention.' }
  ]
},

links: {
  technology: [
    { text: 'Solace for energy & utilities', url: 'https://solace.com/solutions/industries/', icon: 'globe' },
    { text: 'IoT event streaming', url: 'https://solace.com/solutions/use-cases/', icon: 'doc' },
    { text: 'Customer success stories', url: 'https://solace.com/company/customers/', icon: 'doc' }
  ],
  integration: [
    { text: 'SAP integration with Solace', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'Solace for energy & utilities', url: 'https://solace.com/solutions/industries/', icon: 'globe' },
    { text: 'Legacy middleware migration', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  business: [
    { text: 'Customer success stories', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: 'Solace for energy & utilities', url: 'https://solace.com/solutions/industries/', icon: 'globe' },
    { text: 'Event-driven architecture overview', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  architect: [
    { text: 'Event broker specifications', url: 'https://solace.com/products/event-broker/', icon: 'globe' },
    { text: 'SAP integration with Solace', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'Solace platform overview', url: 'https://solace.com/products/platform/', icon: 'globe' }
  ]
}


  },

  "telecom": {

stories: [
  {
    id: 'tc1',
    subsector: 'Mobile Network Operators',
    technology: {
      headline: 'A mobile operator serving hundreds of millions of subscribers replaced TIBCO EMS after it crashed on production launch day — the event mesh now handles the scale their legacy platform could not',
      outcome: 'TIBCO EMS was selected as the messaging layer for order-to-activation, notification engine, master data management, POS, and customer platform. It could not scale to the initial production volume and crashed on go-live day. The event mesh replacement handles the full volume across all use cases reliably.',
      detail: 'The pattern repeats across telcos: one operator serving 80 million wireless subscribers needed account updates to reach the correct locale within 10 seconds — the legacy system was taking minutes. Another operator with hundreds of millions of prepaid subscribers was straining its benefit provisioning system during rapid growth, causing delays when customers tried to add funds or request customised plans.'
    },
    integration: {
      headline: 'Telco integration teams replaced TIBCO EMS and WebMethods with a unified event mesh — connecting order-to-activation, billing, CRM, and notification systems',
      outcome: 'Multiple telcos had fragmented integration landscapes: in-house development, WebMethods, MFT, and other redundant technologies across the organisation. This created dependency on scarce expertise, poor developer productivity, high maintenance costs, and increasing system outages. The event mesh consolidated messaging into a single platform.',
      detail: 'The integration use cases span the entire telco stack: order-to-activation workflows, notification engines, common logging feeds, master data management, POS systems, and customer platforms. One operator event-enabled their entire prepaid stack. Another uses the event mesh for SAP SuccessFactors integration with identity management. The common thread: replacing fragmented, unreliable messaging with a single event backbone that every system connects to.'
    },
    business: {
      headline: 'When a prepaid subscriber cannot add funds to their phone, they switch carriers — a major operator fixed this by replacing the messaging platform that was causing the failures',
      outcome: 'Prepaid subscribers rely on the ability to add funds instantly. Rapid subscriber growth was straining the benefit provisioning system, creating delays that directly drove churn. The event-driven platform handles the scale reliably, ensuring customers can always complete transactions.',
      detail: 'For telcos competing on customer experience, messaging infrastructure reliability directly impacts revenue. System outages during peak hours lose subscribers. Slow account updates frustrate customers. The business case for modernising messaging infrastructure is measured in reduced churn and increased ARPU, not just IT cost savings.'
    },
    architect: {
      headline: 'Telco-scale event mesh: TIBCO EMS and WebMethods replacement handling order-to-activation, notifications, and master data for hundreds of millions of subscribers',
      outcome: 'Software event brokers deployed across data centres, replacing TIBCO EMS and WebMethods. Multi-protocol support connects legacy JMS applications, modern REST microservices, and MQTT IoT devices. The architecture handles the massive fan-out required for subscriber notifications and the guaranteed delivery required for order-to-activation.',
      detail: 'Key patterns: subscriber-scale fan-out for notifications and benefit provisioning; guaranteed delivery for order-to-activation workflows; master data distribution from BSS/OSS to downstream systems; decoupled logging via event streaming to Splunk; multi-data-centre deployment with replication for HA. The architecture must handle burst traffic (prepaid top-ups during peak hours) and sustained high-throughput (continuous notification streams).'
    }
  },
  {
    id: 'tc2',
    subsector: 'Platform & Digital Services',
    technology: {
      headline: 'A telco built a reusable event-driven logging library shipped with every microservice — decoupling application performance from log infrastructure',
      outcome: 'Rather than bringing a logging platform in-line with application performance, this operator decoupled log producers from consumers using the event mesh. A reusable library ships with every microservice, publishing logs as events. The log aggregation platform subscribes independently — application latency is unaffected regardless of log volume.',
      detail: 'Technology companies in the telco ecosystem are adopting the same patterns: one built an event-driven platform to support consumption-based licensing and real-time data availability across internal systems. Another event-enabled Salesforce to distribute security notifications and knowledge articles across distributed teams. The common theme: event-driven architecture as a platform capability, not a point solution.'
    },
    integration: {
      headline: 'Technology providers in the telco ecosystem event-enabled Salesforce, connected multi-cloud applications, and built consumption-based platforms on event-driven architecture',
      outcome: 'Integration teams are using the event mesh to solve multi-cloud connectivity challenges: applications on AWS, Azure, and on-premises connected through a single event layer. REST, JMS, and AMQP applications all connect natively. Point-to-point integrations between cloud providers eliminated.',
      detail: 'The integration pattern extends beyond traditional telco: technology vendors serving telco customers use event-driven architecture internally to accelerate innovation. Event-enabling Salesforce distributes CRM data to product, support, and security teams in real time. Consumption-based licensing models require real-time usage metering that batch processes cannot support.'
    },
    business: {
      headline: 'Telcos facing declining voice and SMS revenue are using event-driven architecture to build data-led businesses — Open API frameworks, partner ecosystems, and real-time analytics',
      outcome: 'Traditional voice and SMS revenue is declining. Telcos are transforming into data-led businesses through Open API frameworks that connect with partners, modernised analytics platforms, and new digital services. Event-driven architecture provides the real-time data distribution these new business models require.',
      detail: 'The business transformation is fundamental: from infrastructure provider to platform business. Open APIs let partners build on telco data and connectivity. Real-time analytics enable new monetisation of network data. Event-driven architecture provides the technical foundation for both — real-time, reliable, and scalable data distribution to an ecosystem of internal and external consumers.'
    },
    architect: {
      headline: 'Multi-cloud event mesh for telco platform transformation: AWS and Azure connected, microservices logging decoupled, Salesforce event-enabled, Open API ecosystem',
      outcome: 'The architecture connects applications across multiple cloud providers (AWS, Azure) and on-premises through a single event mesh. Microservices publish domain events and logs via a common library. Salesforce events distribute to downstream consumers. Open API frameworks expose network capabilities to partners.',
      detail: 'Key patterns: multi-cloud mesh eliminating provider-specific point-to-point connections; reusable event publishing libraries embedded in microservice templates; Salesforce event-enabling for CRM data distribution; decoupled logging architecture (producers write events, Splunk subscribes independently); consumption-based metering via real-time event streams.'
    }
  },
  {
    id: 'tc3',
    subsector: 'Middleware Consolidation',
    technology: {
      headline: 'A major Japanese telco simplified redundant integration technologies — reducing system outages while unlocking developer productivity across the organisation',
      outcome: 'Redundant integration technologies (in-house development, WebMethods, MFT) were deployed across the organisation. This created dependency on scarce expertise, poor developer productivity, high maintenance costs, and increasing outages in both number, severity, and duration. Consolidating onto a modern event platform simplified operations and improved reliability.',
      detail: 'Telcos are also extending Solace into adjacent industries: one is building scalable IoT infrastructure for an automotive OEM based on Solace Cloud, tested extensively for MQTT5, scalability, and monitoring. Another is entering the aviation market by offering SWIM-based flight controller solutions using Solace as the messaging backbone — demonstrating how telco infrastructure expertise translates to mission-critical domains.'
    },
    integration: {
      headline: 'Telcos are consolidating fragmented middleware — replacing WebMethods, in-house tools, and MFT with a single event platform that every development team can use',
      outcome: 'The integration landscape at large telcos often includes five or more messaging and integration technologies, each maintained by different teams with different expertise. Consolidating onto a shared event platform eliminates the silos: every team uses the same infrastructure, with consistent monitoring, security, and governance.',
      detail: 'SAP integration is a growing use case: one European telco uses SAP AEM with Cloud Integration for hire-to-retire workflows, connecting SuccessFactors to identity management. Employee experience management (Medallia) integration is planned next. The pattern is familiar from other industries: SAP event-enabling as the starting point, expanding to adjacent systems over time.'
    },
    business: {
      headline: 'System outages at a major telco were increasing in number, severity, and duration — middleware consolidation reversed the trend while cutting operational costs',
      outcome: 'The business impact of fragmented middleware was measured in outages: more frequent, more severe, and longer to resolve. Each technology required different expertise, creating bottlenecks when issues arose. Consolidation reduced the operational risk and freed engineering capacity for innovation rather than maintenance.',
      detail: 'Telcos are also creating new revenue streams by offering Solace-based infrastructure to enterprise customers: IoT platforms for automotive, SWIM solutions for aviation, and managed connectivity services. The event mesh becomes both an internal operational platform and a product capability sold to customers.'
    },
    architect: {
      headline: 'Telco middleware consolidation: WebMethods, MFT, and in-house tools replaced with unified event mesh — plus SAP AEM for HR workflows and IoT platform for enterprise customers',
      outcome: 'The architecture consolidates multiple messaging and integration technologies into a single event mesh. SAP AEM handles HR and enterprise workflows (SuccessFactors, identity management). The same Solace Cloud infrastructure serves internal telco operations and external IoT/connectivity products for enterprise customers.',
      detail: 'Key patterns: middleware consolidation reducing operational complexity; SAP AEM for hire-to-retire and employee experience workflows; Solace Cloud as infrastructure for enterprise IoT products (automotive, aviation); MQTT5 for next-generation IoT connectivity; multi-protocol support connecting legacy WebMethods applications during migration.'
    }
  }
,
  {
    id: 'tc4',
    subsector: 'IoT & Enterprise Services',
    technology: {
      headline: 'Telcos are building IoT connectivity platforms on event-driven architecture — offering managed event mesh as a service to automotive, smart city, and industrial customers',
      outcome: 'Telecommunications companies are extending their infrastructure expertise into IoT platforms: one is building scalable IoT infrastructure for an automotive OEM, tested extensively for MQTT5, scalability, and monitoring. The event mesh becomes both internal infrastructure and a product offered to enterprise customers.',
      detail: 'The telco-as-platform model uses Solace Cloud as the foundation for IoT connectivity services: automotive telematics, smart city sensor networks, and industrial IoT monitoring. MQTT5 support enables advanced features like shared subscriptions, message expiry, and request-response patterns that enterprise IoT requires.'
    },
    integration: {
      headline: 'Telco platform teams built enterprise IoT services by combining network connectivity with event-driven data distribution — onboarding enterprise customers through standardised MQTT5 APIs',
      outcome: 'The integration model: enterprise customers connect their IoT devices via the telco network, and the managed event mesh handles data distribution, protocol translation, and integration with enterprise backend systems. Standardised MQTT5 APIs make onboarding repeatable.',
      detail: 'Key integration patterns: MQTT5 for device connectivity with QoS levels per use case; event mesh for routing telemetry to customer analytics platforms; protocol translation between IoT protocols and enterprise REST/JMS; multi-tenant architecture isolating customer data while sharing infrastructure; API gateway integration for partner access.'
    },
    business: {
      headline: 'Telcos are creating new revenue from managed IoT platforms — event mesh infrastructure becomes a product, not just a cost centre',
      outcome: 'Traditional telco revenue from connectivity is declining. Managed IoT platforms generate higher-margin revenue by offering not just connectivity but data distribution, event processing, and integration as a service. Enterprise customers pay for the platform capability, not just the network pipe.',
      detail: 'The revenue model shifts from per-device connectivity fees to platform subscription: customers pay for event throughput, topic management, and integration services. The same Solace Cloud infrastructure serves multiple enterprise customers (automotive, industrial, smart city) with tenant isolation.'
    },
    architect: {
      headline: 'Telco IoT platform: Solace Cloud multi-tenant event mesh, MQTT5 device connectivity, enterprise customer isolation, and API gateway integration',
      outcome: 'Solace Cloud deployed as multi-tenant IoT platform infrastructure. MQTT5 for device connectivity with per-customer topic isolation. Event mesh routes device telemetry to customer-specific analytics endpoints. API gateway provides managed access for enterprise customers and partners.',
      detail: 'Key patterns: multi-tenant architecture with topic-based customer isolation; MQTT5 for advanced IoT features (shared subscriptions, message expiry); Solace Cloud for managed infrastructure; API gateway integration for enterprise customer onboarding; protocol bridging between IoT protocols and enterprise messaging; scalability tested for automotive-grade device volumes.'
    }
  },
  {
    id: 'tc5',
    subsector: 'SAP & Enterprise Workflows',
    technology: {
      headline: 'Telcos are using SAP AEM for hire-to-retire HR workflows and employee experience management — event-enabling SuccessFactors, identity management, and Medallia integration',
      outcome: 'A major European telco uses SAP AEM with Cloud Integration for hire-to-retire workflows: SuccessFactors events trigger identity management updates, access provisioning, and equipment allocation. Employee experience management via Medallia integration is planned as the next expansion.',
      detail: 'SAP event-enabling in telcos follows the same pattern as other industries but at telco scale: tens of thousands of employees, multiple geographies, and complex HR systems spanning acquired companies. The event mesh handles the volume and complexity while providing guaranteed delivery for compliance-sensitive HR events.'
    },
    integration: {
      headline: 'Telco HR integration teams event-enabled SuccessFactors with SAP AEM — connecting identity management, access provisioning, and employee experience platforms',
      outcome: 'The hire-to-retire workflow: a hiring event in SuccessFactors triggers identity creation in the directory, access provisioning for systems and buildings, equipment allocation, and welcome communications — all from a single event rather than manual handoffs between HR, IT, and facilities teams.',
      detail: 'Key integration patterns: SAP AEM for SuccessFactors event streaming; Cloud Integration for transformation and orchestration; identity management system consuming employee lifecycle events; Medallia integration for real-time employee experience feedback; multi-geography deployment for international telco HR operations.'
    },
    business: {
      headline: 'When employee onboarding takes days instead of hours because HR, IT, and facilities systems are disconnected — event-driven integration automates the entire lifecycle',
      outcome: 'Manual onboarding processes create delays: new employees wait days for system access, equipment, and building passes. Event-driven hire-to-retire means a single hiring event cascades to every system simultaneously — the employee is productive from day one.',
      detail: 'The business case extends to employee experience: telcos competing for talent need smooth onboarding, responsive HR services, and proactive employee engagement. Event-driven integration enables the real-time, automated HR operations that modern employees expect from technology companies.'
    },
    architect: {
      headline: 'Telco HR architecture: SAP AEM for SuccessFactors events, Cloud Integration for transformation, identity management, Medallia for employee experience, multi-geography deployment',
      outcome: 'SAP AEM bridges SuccessFactors to downstream HR systems. Cloud Integration handles data transformation between SAP and non-SAP systems. Identity management consumes employee lifecycle events for automated provisioning. Medallia integration for real-time employee sentiment. Multi-geography deployment spanning international telco operations.',
      detail: 'Key patterns: SAP AEM for HR event streaming; CPI/AEM adapter for bidirectional SuccessFactors integration; automated identity lifecycle (create, modify, disable) from HR events; employee experience events from Medallia feeding back to HR analytics; guaranteed delivery for compliance-sensitive HR data; multi-region deployment for international HR operations.'
    }
  }
],

values: {
  technology: [
    { title: 'Subscriber-scale reliability', text: 'Handle hundreds of millions of subscribers with guaranteed message delivery. No more TIBCO crashes on launch day or WebMethods outages during peak hours.' },
    { title: 'Multi-cloud connectivity', text: 'Connect applications across AWS, Azure, and on-premises through a single event mesh. Eliminate provider-specific point-to-point integrations.' },
    { title: 'Middleware consolidation', text: 'Replace fragmented TIBCO, WebMethods, MFT, and in-house tools with one platform. Reduce operational complexity, outage frequency, and dependency on scarce expertise.' },
    { title: 'Platform for new business models', text: 'Open APIs, IoT connectivity, partner ecosystems — event-driven architecture provides the real-time foundation for data-led transformation.' }
  ],
  integration: [
    { title: 'BSS/OSS event-enabling', text: 'Order-to-activation, billing, CRM, and notification systems connected through a single event backbone. Every system publishes events; every system subscribes.' },
    { title: 'SAP AEM for telco HR', text: 'SuccessFactors hire-to-retire, identity management, and employee experience workflows event-enabled through SAP AEM and Cloud Integration.' },
    { title: 'Decoupled microservices', text: 'Reusable event publishing libraries shipped with every microservice. Logging, tracing, and domain events flow through the mesh without coupling services.' },
    { title: 'Multi-protocol native', text: 'JMS from legacy BSS, REST from microservices, MQTT from IoT devices, AMQP from partner integrations. All connect natively to the same event broker.' }
  ],
  business: [
    { title: 'Reduce subscriber churn', text: 'Instant benefit provisioning, real-time account updates, reliable notifications. When the messaging platform fails, subscribers leave.' },
    { title: 'New revenue from platform services', text: 'Offer Solace-based IoT platforms, SWIM solutions, and managed connectivity to enterprise customers. The event mesh becomes a product, not just infrastructure.' },
    { title: 'Lower operational risk', text: 'Fewer middleware platforms means fewer outages, faster resolution, and less dependency on specialists. Consolidation reduces risk and frees engineering capacity.' },
    { title: 'Data-led transformation', text: 'Real-time data distribution powers the analytics, partner APIs, and digital services that replace declining voice and SMS revenue.' }
  ],
  architect: [
    { title: 'Subscriber-scale fan-out', text: 'Massive parallel distribution of notifications, benefit updates, and account changes to hundreds of millions of endpoints. Topic-based filtering ensures each subscriber gets only relevant events.' },
    { title: 'Multi-DC replication', text: 'Active-active deployment across data centres for zero-downtime subscriber services. Automatic failover with no message loss.' },
    { title: 'IoT and MQTT5', text: 'Next-generation IoT connectivity for automotive, smart city, and enterprise customers. MQTT5 support for advanced features like shared subscriptions and message expiry.' },
    { title: 'Gradual middleware migration', text: 'Side-by-side deployment with legacy WebMethods and TIBCO. Protocol bridge connects existing applications. Migrate workloads incrementally without big-bang cutover.' }
  ]
},

links: {
  technology: [
    { text: 'Solace for telecommunications', url: 'https://solace.com/solutions/industries/', icon: 'globe' },
    { text: 'Customer success stories', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: 'Event mesh explained', url: 'https://solace.com/what-is-an-event-mesh/', icon: 'doc' }
  ],
  integration: [
    { text: 'SAP integration with Solace', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'Solace for telecommunications', url: 'https://solace.com/solutions/industries/', icon: 'globe' },
    { text: 'Platform overview', url: 'https://solace.com/products/platform/', icon: 'doc' }
  ],
  business: [
    { text: 'Customer success stories', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: 'Solace for telecommunications', url: 'https://solace.com/solutions/industries/', icon: 'globe' },
    { text: 'Industries we serve', url: 'https://solace.com/solutions/industries/', icon: 'globe' }
  ],
  architect: [
    { text: 'Event broker specifications', url: 'https://solace.com/products/event-broker/', icon: 'globe' },
    { text: 'Solace platform overview', url: 'https://solace.com/products/platform/', icon: 'globe' },
    { text: 'IoT event streaming', url: 'https://solace.com/solutions/use-cases/', icon: 'doc' }
  ]
}


  },

  "lifesciences": {

stories: [
  {
    id: 'ls1',
    subsector: 'Pharma & SAP Migration',
    technology: {
      headline: 'A global pharma company uses event-driven architecture to power its SAP S/4HANA migration — master data, product lifecycle, and HR events flowing across the enterprise',
      outcome: 'The SAP ECC to S/4HANA migration triggered an overhaul of all integration points. The event mesh handles master data management, product lifecycle management, and hire-to-retire workflows. Events from SAP connect to Veeva, SuccessFactors, Salesforce, and Snowflake through a single backbone.',
      detail: 'SAP-driven adoption is the dominant pattern in pharma: one company synchronises material master data from SAP MDG to partner systems across plants. Another identified event-driven architecture as the better approach for application operations and is building a global Messaging as a Service capability. A third automates candidate hiring by streaming SuccessFactors events through SAP Build Process Automation.'
    },
    integration: {
      headline: 'Pharma integration teams are event-enabling SAP for S/4HANA migrations — connecting MDM, PLM, and HR across on-premises plants and cloud platforms',
      outcome: 'Multiple pharma companies are using SAP AEM as the integration backbone for their S/4HANA migrations. Master data, product lifecycle changes, and HR events publish from SAP and reach every downstream system — Veeva for CRM, SuccessFactors for HR, Snowflake for analytics, and plant-level systems for manufacturing.',
      detail: 'The integration complexity in pharma is significant: regulatory requirements mean data must be traceable and auditable. Multi-site manufacturing requires consistent master data across plants. Clinical and commercial systems (Veeva, Salesforce) need real-time product and customer data. Event-driven architecture decouples all of these while maintaining guaranteed delivery and audit trails.'
    },
    business: {
      headline: 'Pharma companies migrating to S/4HANA are using events to break data silos between R&D, manufacturing, and commercial — accelerating time to market for new therapies',
      outcome: 'SAP migrations in pharma are not just IT upgrades — they are business transformation programmes. By event-enabling the ERP during migration, companies unlock real-time data flows between R&D (product lifecycle), manufacturing (material master), and commercial (Veeva, Salesforce) that were previously batch-driven.',
      detail: 'The business impact: product changes propagate to manufacturing and commercial systems in real time rather than overnight. HR workflows for a company with tens of thousands of employees process in seconds rather than manual handoffs. Material master updates reach every plant simultaneously rather than one at a time. These are the operational improvements that justify the S/4HANA investment.'
    },
    architect: {
      headline: 'Pharma S/4HANA migration architecture: SAP AEM connecting MDG, PLM, and SuccessFactors to Veeva, Snowflake, and plant systems via event mesh',
      outcome: 'SAP AEM as the event backbone for S/4HANA migration. ASAPIO connectors event-enable ECC during the transition period. Events flow to Veeva (CRM), SuccessFactors (HR), Snowflake (analytics), and plant-level MES. Boomi or MuleSoft handles transformation where needed.',
      detail: 'Key patterns: SAP MDG publishing material master changes as events; PLM changes triggering updates to manufacturing, HR LMS, and marketing simultaneously; hire-to-retire events from SuccessFactors flowing to identity management and downstream systems; CDC from S/4HANA to Snowflake via event mesh. The architecture must support GxP compliance requirements with full auditability of event flows.'
    }
  },
  {
    id: 'ls2',
    subsector: 'Medical Devices & Clinical',
    technology: {
      headline: 'A medical device company deployed an event mesh connecting on-premises factories, cloud services, and hospital edge locations — enabling real-time clinical data flows',
      outcome: 'The company requires an event mesh connecting three distinct environments: on-premises data centres, cloud services, and edge locations at hospitals. The goal is to modernise their integration landscape by becoming more event-driven, using ASAPIO to event-enable SAP ECC and MuleSoft for transformation.',
      detail: 'A healthcare technology company is transforming its cloud-based clinical platform from database-backed to event-driven architecture using Solace. Clinical data events flow between platform components at scale. In manufacturing, a joint venture company uses Solace within its MES for real-time data collection, demonstrating performance in instantaneous large-volume data transmission.'
    },
    integration: {
      headline: 'Healthcare and medtech companies are bridging factory MES, clinical platforms, and SAP using event-driven architecture — with hospital edge connectivity for real-time patient data',
      outcome: 'The integration challenge in healthcare spans from factory floor (manufacturing medical devices) to hospital bedside (clinical data). Event-driven architecture connects MES systems publishing production data, SAP ECC event-enabled via ASAPIO, MuleSoft handling transformations, and Salesforce for CRM — all through a single event mesh that extends to hospital edge locations.',
      detail: 'A clinical platform built on a traditional database architecture is migrating to event-driven as it scales. Clinical data events — patient records, device readings, treatment updates — flow between platform components in real time. The event mesh provides the reliability and auditability that healthcare data regulations demand.'
    },
    business: {
      headline: 'Medical device companies connecting factories to hospitals in real time are enabling new service models — from selling products to delivering outcomes',
      outcome: 'When a medical device company can stream data from the factory where a device is made, through the supply chain, to the hospital where it is used, and back again — entirely new business models become possible. Predictive maintenance, usage-based billing, and real-time clinical feedback loops all depend on this end-to-end event flow.',
      detail: 'For healthcare platforms serving hospitals, the business case is patient safety and clinical efficiency. When clinical data events flow in real time between platform components, clinicians see current information rather than stale records. For MES operations, real-time data collection at manufacturing scale means quality issues are caught immediately rather than in batch review.'
    },
    architect: {
      headline: 'Healthcare event mesh: on-prem SAP and MES, cloud clinical platforms, and hospital edge — connected via ASAPIO, MuleSoft, and Salesforce integration',
      outcome: 'Three-zone architecture: on-premises (SAP ECC via ASAPIO, factory MES), cloud (clinical platforms, Salesforce CRM, analytics), and edge (hospital locations with lightweight brokers). MuleSoft handles data transformation. The event mesh provides guaranteed delivery and audit trails required for healthcare regulatory compliance.',
      detail: 'Key patterns: ASAPIO for SAP ECC event-enabling without core modifications; MuleSoft for complex data transformations between clinical and enterprise systems; edge deployment at hospitals for local clinical data processing with store-and-forward to cloud; MES integration for real-time manufacturing data collection; Salesforce micro-integration for CRM events. GxP and HIPAA compliance requirements shape the architecture.'
    }
  },
  {
    id: 'ls3',
    subsector: 'Corporate & Master Data',
    technology: {
      headline: 'A healthcare company separated from its parent used event-driven architecture to migrate S/4HANA data through Snowflake — maintaining business continuity during the corporate split',
      outcome: 'During a major corporate separation, the new company needed daily and real-time data from the parent company\'s S/4HANA system. SAP AEM enabled data to flow from the parent\'s S/4 into Snowflake, where it was shared with the new entity and loaded into their own S/4 system. Business continuity was maintained throughout the separation.',
      detail: 'The pattern of using events for corporate transitions is distinctive: product lifecycle changes from a PLM system flow to sales channels, HR learning management, and marketing analytics. Customer master data from Veeva and Salesforce publishes in a standard format and reaches Snowflake, ServiceNow, and M3 through the event mesh with Boomi as iPaaS. These are complex, multi-system integration challenges solved by publish-once, consume-many.'
    },
    integration: {
      headline: 'Life sciences companies use event mesh with Boomi for multi-system master data distribution — Veeva, Salesforce, Snowflake, ServiceNow, and M3 all connected',
      outcome: 'Customer master data from Veeva and Salesforce publishes events in a standard format. Snowflake, ServiceNow, and M3 subscribe and receive updates in real time. Boomi handles the iPaaS layer. The event mesh provides guaranteed delivery between all systems without point-to-point connections.',
      detail: 'Product lifecycle management is another key integration pattern: when a product changes in the PLM system, events trigger updates to sales channel catalogues, HR learning management (for new training requirements), and marketing analytics — all from a single publish. Production master data distributes via Solace and Boomi to manufacturing systems. The common thread: complex multi-system distribution where batch updates are too slow and point-to-point connections too fragile.'
    },
    business: {
      headline: 'When a healthcare company separates from its parent, event-driven architecture ensures the data keeps flowing — no disruption to patients, partners, or operations',
      outcome: 'Corporate separations in healthcare carry unique risk: patient data, product information, and supply chain relationships must transfer without disruption. Event-driven architecture provided the data bridge between parent and child company during separation, ensuring business continuity for operations that directly impact patient care.',
      detail: 'Beyond corporate events, the business case for event-driven master data distribution is operational efficiency: product changes that took days to propagate now take seconds. Customer updates in CRM reach service management instantly. Training requirements triggered by product changes reach HR automatically. Each of these was previously a manual process or overnight batch — the event mesh eliminates the lag.'
    },
    architect: {
      headline: 'Life sciences master data architecture: Veeva and Salesforce publishing customer events, Snowflake and ServiceNow subscribing, Boomi transforming, SAP AEM bridging S/4HANA',
      outcome: 'Customer master data events from Veeva/Salesforce flow through the event mesh in a standardised format. Snowflake subscribes for analytics, ServiceNow for service management, M3 for ERP. SAP AEM bridges S/4HANA for order and material data. Boomi provides iPaaS transformation. The architecture handles corporate separation data flows (parent S/4 → Snowflake → child S/4).',
      detail: 'Key patterns: standardised event formats for customer master data across CRM sources; multi-consumer distribution without point-to-point connections; PLM event-enabling for product lifecycle changes triggering downstream updates; Snowflake as a data sharing intermediary during corporate separations; Boomi as the iPaaS transformation layer alongside event mesh for distribution.'
    }
  }
,
  {
    id: 'ls4',
    subsector: 'Hospital & Clinical Systems',
    technology: {
      headline: 'A healthcare technology company is transforming its cloud-based clinical platform from database-backed to event-driven architecture — enabling real-time clinical data flows at scale',
      outcome: 'The clinical platform serves hospitals with patient records, device readings, and treatment management. As it scales to more hospitals and more data, the database-backed architecture cannot keep pace. Event-driven architecture enables real-time clinical data exchange between platform components without database bottlenecks.',
      detail: 'The healthcare IoT dimension adds volume: connected medical devices in hospitals publish vital signs, infusion status, and alarm events continuously. A medical device company is building an event mesh connecting on-premises factories, cloud services, and hospital edge locations — the actual hospitals become edge deployment sites in the event mesh topology.'
    },
    integration: {
      headline: 'Clinical integration teams are connecting hospital systems, medical devices, and cloud platforms through event-driven architecture — with edge deployment at hospital locations',
      outcome: 'The integration challenge in healthcare spans from medical devices at the bedside to cloud-hosted analytics and EHR systems. Event-driven architecture connects these with guaranteed delivery and the auditability that clinical data regulations require. Edge brokers at hospital locations handle local processing for latency-sensitive clinical workflows.',
      detail: 'Key integration patterns: medical device telemetry via MQTT; HL7 FHIR event streaming for clinical data exchange; edge deployment at hospitals for local clinical workflow processing; cloud analytics for population health and clinical research; EHR integration for patient record updates; guaranteed delivery with full audit trail for regulatory compliance.'
    },
    business: {
      headline: 'When clinical data flows in real time between platform components, clinicians see current patient information — not data that is minutes or hours old',
      outcome: 'Clinical decision-making depends on current data. A vital sign change, a medication administration, or a lab result that takes minutes to propagate between systems creates a window where clinicians may act on stale information. Event-driven architecture closes this gap for patient safety.',
      detail: 'The business model for healthcare technology companies is also shifting: from selling software licences to providing outcome-based services. Real-time event infrastructure enables the monitoring, alerting, and analytics capabilities that outcome-based models require. Predictive analytics consuming live clinical event streams can identify at-risk patients before adverse events occur.'
    },
    architect: {
      headline: 'Clinical platform architecture: medical device MQTT telemetry, HL7 FHIR event streaming, hospital edge deployment, cloud analytics, and guaranteed delivery for clinical data',
      outcome: 'MQTT for medical device telemetry ingestion at hospital locations. HL7 FHIR events for clinical data exchange between platform components. Edge brokers at hospitals for local processing. Cloud-hosted analytics for population health and research. Guaranteed delivery with audit trail for regulatory compliance (HIPAA, GDPR).',
      detail: 'Key patterns: three-zone deployment (hospital edge, cloud platform, enterprise analytics); medical device MQTT ingestion with local processing at edge; HL7 FHIR event streaming for interoperability; guaranteed delivery for clinical data integrity; audit trail for regulatory compliance; store-and-forward for hospitals with intermittent cloud connectivity.'
    }
  },
  {
    id: 'ls5',
    subsector: 'Manufacturing & Quality',
    technology: {
      headline: 'Life sciences manufacturers deployed event-driven MES integration for real-time production data collection — achieving performance that batch reporting could not match',
      outcome: 'A joint venture manufacturing company deployed Solace within its MES for real-time data collection, demonstrating excellent performance in instantaneous large-volume data transmission. Various forms of data collection and delivery operate in real time rather than periodic batch uploads.',
      detail: 'Quality management in life sciences manufacturing is uniquely demanding: GxP regulations require that every production parameter is recorded, traceable, and auditable. Event-driven architecture handles this by publishing quality events as they occur — temperature deviations, batch completions, equipment calibrations — rather than accumulating them in batch logs.'
    },
    integration: {
      headline: 'Life sciences manufacturing teams connected MES, quality management, and production master data through event mesh — with Boomi for distribution to downstream systems',
      outcome: 'Production master data distributes via event mesh and Boomi integration platform to manufacturing systems. Quality events from MES flow to quality management systems for real-time batch release decisions. Equipment calibration events trigger compliance workflows automatically.',
      detail: 'Key integration patterns: MES event streaming for real-time production data; quality management events for batch release and deviation handling; equipment calibration and maintenance events; production master data distribution via Boomi; SAP integration for batch record management and regulatory submission; environmental monitoring for cleanroom conditions.'
    },
    business: {
      headline: 'In life sciences manufacturing, a batch deviation detected in real time can be corrected — a deviation detected hours later in batch reporting means the entire batch may be lost',
      outcome: 'The cost of a lost batch in pharmaceutical or medical device manufacturing is significant: raw materials, production time, and the opportunity cost of delayed product availability. Real-time quality monitoring enables immediate intervention when parameters deviate, potentially saving the batch rather than discovering the issue after the fact.',
      detail: 'Regulatory inspection readiness is another driver: GxP auditors expect real-time traceability. Companies with event-driven production records can demonstrate compliance immediately rather than reconstructing batch histories from multiple systems. This reduces audit duration and regulatory risk.'
    },
    architect: {
      headline: 'Life sciences manufacturing architecture: MES event streaming, quality management integration, production master data via Boomi, cleanroom environmental monitoring, and GxP audit trail',
      outcome: 'MES publishes production events in real time for quality monitoring and batch record management. Boomi distributes production master data to downstream systems. Environmental monitoring (temperature, humidity, particle count) via MQTT from cleanroom sensors. SAP integration for batch records and regulatory submission. Full event audit trail for GxP compliance.',
      detail: 'Key patterns: real-time MES event streaming replacing batch reporting; quality event triggers for automated deviation handling; environmental monitoring via MQTT sensors; production master data distribution via Boomi + event mesh; GxP-compliant audit trail with guaranteed delivery; SAP integration for regulatory submission and batch record management.'
    }
  }
],

values: {
  technology: [
    { title: 'SAP S/4HANA migration backbone', text: 'Event-enable your ERP during S/4HANA migration. Master data, product lifecycle, and HR events flow to every downstream system through a single event mesh.' },
    { title: 'Factory to hospital connectivity', text: 'Connect on-premises MES and SAP, cloud clinical platforms, and hospital edge locations through one event fabric. Three zones, one mesh.' },
    { title: 'GxP-ready architecture', text: 'Guaranteed delivery, full audit trails, and data traceability built into the platform. Meet regulatory requirements without bolting on compliance as an afterthought.' },
    { title: 'Clinical data in real time', text: 'Patient records, device readings, and treatment updates flow between platform components in real time. Clinicians see current data, not stale records.' }
  ],
  integration: [
    { title: 'SAP AEM + ASAPIO', text: 'Event-enable SAP ECC and S/4HANA without core modifications. Master data, PLM, and HR events publish to any consumer — Veeva, Snowflake, SuccessFactors, plant systems.' },
    { title: 'Boomi + event mesh', text: 'Boomi for iPaaS transformation, Solace for real-time distribution. Customer master data from Veeva/Salesforce reaches Snowflake, ServiceNow, and M3 via standardised events.' },
    { title: 'Multi-system master data', text: 'Publish customer, product, and material master data once. Every downstream system subscribes. No point-to-point connections between Veeva, SAP, Snowflake, and ServiceNow.' },
    { title: 'Edge for clinical locations', text: 'Lightweight brokers at hospitals and clinics for local clinical data processing. Store-and-forward to cloud when connectivity is intermittent.' }
  ],
  business: [
    { title: 'Accelerate S/4HANA ROI', text: 'Event-enabling during migration unlocks real-time data flows between R&D, manufacturing, and commercial. The business transformation justifies the IT investment.' },
    { title: 'Product lifecycle speed', text: 'Product changes propagate to manufacturing, sales, training, and marketing in real time. Launch new therapies faster with consistent data across every system.' },
    { title: 'Business continuity', text: 'Corporate separations, mergers, and system migrations keep data flowing without disruption. Patients, partners, and operations are unaffected.' },
    { title: 'Compliance by design', text: 'Auditable event streams, guaranteed delivery, and data traceability. Meet GxP, HIPAA, and regulatory requirements through architecture, not manual processes.' }
  ],
  architect: [
    { title: 'Three-zone deployment', text: 'On-premises (SAP, MES, legacy), cloud (analytics, CRM, clinical platforms), and edge (hospitals, clinics). Event mesh spans all three with consistent security and governance.' },
    { title: 'Standardised event formats', text: 'Customer, product, and material master data published in canonical formats. Any consumer subscribes without custom mapping. Schema governance via Event Portal.' },
    { title: 'Corporate separation patterns', text: 'Parent S/4 → event mesh → Snowflake data sharing → child S/4. Bidirectional data flow maintained during transition with full audit trail.' },
    { title: 'iPaaS + event mesh', text: 'Boomi or MuleSoft for complex transformations. Solace for reliable, real-time distribution. Each handles what it does best — transformation vs streaming.' }
  ]
},

links: {
  technology: [
    { text: 'Solace for healthcare & life sciences', url: 'https://solace.com/solutions/industries/', icon: 'globe' },
    { text: 'SAP integration with Solace', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'Customer success stories', url: 'https://solace.com/company/customers/', icon: 'doc' }
  ],
  integration: [
    { text: 'SAP integration with Solace', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'Event Portal', url: 'https://solace.com/products/portal/', icon: 'globe' },
    { text: 'Platform overview', url: 'https://solace.com/products/platform/', icon: 'doc' }
  ],
  business: [
    { text: 'Customer success stories', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: 'Solace for healthcare & life sciences', url: 'https://solace.com/solutions/industries/', icon: 'globe' },
    { text: 'Why Solace', url: 'https://solace.com/company/', icon: 'globe' }
  ],
  architect: [
    { text: 'Event broker specifications', url: 'https://solace.com/products/event-broker/', icon: 'globe' },
    { text: 'SAP integration with Solace', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'Solace platform overview', url: 'https://solace.com/products/platform/', icon: 'globe' }
  ]
}


  },

  "public-sector": {

stories: [
  {
    id: 'ps1',
    subsector: 'Citizen Services',
    technology: {
      headline: 'A national government modernised citizen services integration — replacing months-long notification delays with real-time event-driven data sharing across agencies',
      outcome: 'A national healthcare system discovered that death notifications took 6-9 months to reach all 14 health districts, causing significant waste as services continued to be allocated to deceased citizens. Event-driven architecture reduced this to real-time notification across every district simultaneously.',
      detail: 'The pattern applies across government: one national government uses Solace to integrate multiple internal systems in support of a Benefits Delivery Modernization initiative, enhancing services for citizens. A Middle Eastern government streamlined multi-step citizen processes (marriage, retirement benefits) that previously involved manual handoffs between agencies. A regional government in Europe replaced unreliable infrastructure for tax payment notifications. In every case, the citizen experience improved because data moved between agencies in real time.'
    },
    integration: {
      headline: 'Government integration teams are replacing siloed databases and point-to-point connections with event-driven data exchange — enabling real-time cross-agency coordination',
      outcome: 'Government agencies need to exchange data frequently, but approaches vary: email, SFTP, APIs, and custom integrations create an inconsistent, fragile landscape. A unified event-driven data exchange provides a standard way for every agency to publish and subscribe to events — no custom integration per pair.',
      detail: 'One government technology agency identified the core problem: each agency implemented data exchange differently, making inter-agency coordination slow and inefficient. The event mesh provides a unified approach: agencies publish events in standard formats, other agencies subscribe. A port authority replaced a centralised Sybase database that had become a bottleneck — multiple systems reading and writing to shared tables — with decoupled event-driven communication.'
    },
    business: {
      headline: 'When government notifications take months instead of seconds, citizens pay the price — event-driven architecture closes the gap between agencies',
      outcome: 'The human impact of slow government data sharing is real: healthcare services allocated to deceased citizens for months, marriage processes delayed by manual handoffs between agencies, tax notifications failing to reach citizens. Event-driven architecture transforms these from multi-month processes to near-real-time coordination.',
      detail: 'For government IT modernisation contractors, the business case is equally clear: legacy synchronous architectures create poor citizen experiences and are costly to maintain. Event-driven architecture enables the responsiveness citizens expect from digital government while reducing the operational cost of inter-agency coordination.'
    },
    architect: {
      headline: 'Cross-agency event mesh: standardised event formats for citizen lifecycle events, multi-department subscription, secure data exchange with classification controls',
      outcome: 'The architecture: agencies publish citizen lifecycle events (birth, death, marriage, address change, benefit eligibility) in standardised formats. Other agencies subscribe based on their mandate. Security classification controls ensure each agency sees only the data it is authorised to access. The mesh spans on-premises government data centres and secured cloud environments.',
      detail: 'Key patterns: standardised event schemas for citizen data across agencies; topic-based access control aligned to security classifications; on-premises deployment for classified workloads; cloud deployment for citizen-facing services; guaranteed delivery for regulatory and compliance notifications; audit trails for every event exchange between agencies.'
    }
  },
  {
    id: 'ps2',
    subsector: 'Border & Defence',
    technology: {
      headline: 'A border security agency replaced non-HA IBM MQ infrastructure at a major international airport — ensuring immigration and checkpoint systems never go down',
      outcome: 'The existing Secure Data Exchange Gateway at the airport used IBM MQ with a data diode in a non-HA configuration. When the single system failed, border operations were impacted. The event mesh provides high-availability data exchange between airport systems and backend immigration systems with guaranteed delivery.',
      detail: 'Border and defence agencies have unique requirements: classified data handling, air-gapped networks, and zero tolerance for downtime. One border agency uses Solace for various border security operations and plans to exchange events with the broader federal government. A defence science agency operates Solace in classified environments. A government digital office deploys surveillance monitoring infrastructure across departments.'
    },
    integration: {
      headline: 'Defence and border agencies replaced IBM MQ and centralised databases with secure event mesh — connecting immigration, surveillance, and inter-agency systems',
      outcome: 'Legacy integration in government often relies on centralised databases or point-to-point MQ connections that create single points of failure. One port authority replaced a centralised Sybase database with event-driven communication — eliminating the bottleneck where multiple systems competed for access to shared tables.',
      detail: 'The integration challenge in defence and border security is compounded by security requirements: data diodes, air-gapped networks, and classification controls. The event mesh operates within these constraints while providing the reliability and performance that critical infrastructure demands. Cross-agency event exchange enables border agencies to coordinate with other government departments without custom integration per pair.'
    },
    business: {
      headline: 'When immigration systems go down at an international airport, the impact is immediate — HA event infrastructure eliminates the single point of failure',
      outcome: 'Airport immigration processing cannot tolerate downtime. The previous non-HA architecture meant a single system failure impacted border operations at one of the world\'s busiest airports. High-availability event mesh ensures continuous operation with automatic failover.',
      detail: 'For port and maritime authorities, the business case is operational efficiency: replacing a centralised database that had become slow and unreliable with event-driven communication that scales to multiple sites. For border agencies, the value is national security: reliable, real-time data exchange between checkpoints and backend systems, with the ability to extend to cross-government event sharing.'
    },
    architect: {
      headline: 'Secure government event mesh: HA deployment replacing IBM MQ at border checkpoints, data diode integration, classified network support, multi-site port authority connectivity',
      outcome: 'HA event brokers deployed at border checkpoints with automatic failover. Data diode integration for one-way classified data flows. Multi-site deployment for port authorities connecting on-premises and cloud systems. Cross-government event exchange via secure mesh connectivity between departments.',
      detail: 'Key patterns: HA replacing non-HA IBM MQ for immigration checkpoints; data diode compatibility for classified environments; multi-site deployment for distributed government operations; centralised database replacement with event-driven decoupling; secure cross-agency event exchange with topic-based access control; on-premises deployment for classified workloads with optional cloud connectivity for unclassified services.'
    }
  },
  {
    id: 'ps3',
    subsector: 'Smart Infrastructure',
    technology: {
      headline: 'A public housing authority monitors sensors across 10,000+ buildings in real time — lifts, water, power, gas, and solar panels all connected through an event mesh',
      outcome: 'Over 10,000 residential blocks equipped with sensors for lifts, water meters, power meters, gas meters, and solar panels — but no central monitoring. The event mesh provides real-time visibility across the entire estate, enabling predictive maintenance and rapid response to faults.',
      detail: 'Smart city infrastructure is a growing public sector use case: a state transport department uses Solace for active traffic management — incident response, congestion management, and road information distribution. A national meteorological service publishes weather data via a SWIM-based information exchange. A national weather service implements the WMO\'s next-generation global weather data sharing framework. A city government built a real-time happiness meter for citizen sentiment analysis.'
    },
    integration: {
      headline: 'Smart city and infrastructure agencies connect thousands of IoT sensors, traffic systems, and weather stations through event-driven platforms — replacing manual monitoring with real-time automation',
      outcome: 'Public sector IoT integration spans buildings (10,000+ blocks of sensors), roads (active traffic management), weather (global meteorological data exchange), and citizen services (real-time sentiment). The event mesh handles the volume and variety of IoT data while connecting to enterprise systems for automated response.',
      detail: 'A state transport authority uses SAP AEM to expose API-based interaction channels for thousands of asset providers — the Transport Asset Custodian Platform built on SAP consulting. A university system uses Solace for enrollment shock absorption across 10 campuses — handling the surge when course registration opens and thousands of students enrol simultaneously.'
    },
    business: {
      headline: 'When a lift breaks in a public housing block, the authority knows in seconds — not when a resident calls to complain. Smart infrastructure saves time, money, and citizen trust',
      outcome: 'Without real-time monitoring, equipment faults in public buildings were only discovered when residents reported problems. Real-time sensor data enables predictive maintenance: detect degradation before failure, dispatch maintenance proactively, and reduce the cost and citizen impact of reactive repairs.',
      detail: 'The business case extends across smart city infrastructure: real-time traffic management reduces congestion and improves incident response times. Global weather data sharing improves forecast accuracy and disaster preparedness. University enrollment systems that handle peak load smoothly improve the student experience and reduce administrative burden. In every case, real-time event infrastructure transforms public services from reactive to proactive.'
    },
    architect: {
      headline: 'Smart city event mesh: MQTT from 10,000+ building sensors, traffic management systems, and weather stations — connected to SAP, analytics, and citizen-facing applications',
      outcome: 'MQTT for high-volume IoT ingestion from building sensors, traffic systems, and weather stations. Event mesh routes telemetry to real-time dashboards, predictive maintenance systems, and citizen notification platforms. SAP AEM for asset management integration. Cloud deployment for analytics and citizen-facing services.',
      detail: 'Key patterns: MQTT for massive IoT fan-in from distributed sensors; topic hierarchy by location, asset type, and severity for efficient routing; SAP AEM for asset custodian platforms; elastic scaling for burst events (enrollment periods, weather emergencies, traffic incidents); integration with global standards (WMO WIS 2.0, aviation SWIM) for cross-border data exchange.'
    }
  },
  {
    id: 'ps4',
    subsector: 'Transport & Infrastructure',
    technology: {
      headline: 'State transport authorities deployed event-driven platforms for active traffic management \u2014 real-time incident response, congestion monitoring, and road network coordination',
      outcome: 'A state transport department uses Solace as part of its smarter roads initiative, providing real-time active traffic management for incident response and congestion. Another uses SAP AEM to expose API-based interaction channels for thousands of asset providers through a Transport Asset Custodian Platform.',
      detail: 'Public transport infrastructure generates massive event volumes: traffic sensors, signal controllers, toll systems, and passenger information displays all publish and consume events continuously. The event mesh handles this volume while connecting to SAP for asset management and to public-facing information systems for traveller updates.'
    },
    integration: {
      headline: 'Transport agencies are using SAP AEM to build asset custodian platforms \u2014 connecting thousands of infrastructure providers through standardised event-driven APIs',
      outcome: 'A Transport Asset Custodian Platform built on SAP AEM exposes API-based interaction channels for thousands of asset providers. The platform standardises how infrastructure data flows between asset owners, maintenance contractors, and the transport authority.',
      detail: 'Integration patterns: SAP AEM for asset lifecycle management; MQTT for traffic sensor and signal data; REST APIs for partner and contractor integration; real-time passenger information from operational events. The architecture must handle both steady-state traffic monitoring and surge events during incidents or extreme weather.'
    },
    business: {
      headline: 'Smarter roads mean faster incident response, reduced congestion, and better-informed travellers \u2014 all powered by real-time event flows across the transport network',
      outcome: 'Active traffic management reduces congestion costs, improves incident response times, and provides travellers with real-time information. The transport authority acts as a broker connecting road operators, emergency services, and public information systems through a shared event layer.',
      detail: 'The business case for transport authorities combines citizen service improvement (better travel information, faster incident response) with operational efficiency (automated signal management, predictive maintenance of infrastructure). Real-time event infrastructure transforms reactive transport management into proactive network optimisation.'
    },
    architect: {
      headline: 'Transport infrastructure event mesh: traffic sensors and signals via MQTT, SAP AEM for asset management, real-time passenger information, and multi-agency coordination',
      outcome: 'MQTT for traffic sensor ingestion across the road network. SAP AEM for asset custodian platform connecting thousands of infrastructure providers. WebSocket for real-time passenger information displays. REST APIs for emergency services and contractor integration. Multi-site deployment across transport management centres.',
      detail: 'Key patterns: high-volume sensor ingestion from distributed traffic infrastructure; SAP AEM for standardised asset lifecycle events; multi-agency event sharing between transport, emergency, and information services; elastic scaling for incident and weather surge events; on-premises deployment in transport management centres with cloud connectivity for public-facing services.'
    }
  },
  {
    id: 'ps5',
    subsector: 'Meteorology & Environment',
    technology: {
      headline: 'National meteorological services are implementing next-generation global weather data sharing \u2014 replacing legacy systems with event-driven SWIM-based information exchange',
      outcome: 'The World Meteorological Organization\u2019s WIS 2.0 framework uses modern web technologies to replace the older Global Telecommunication System (GTS) for sharing weather, climate, and water data among member nations. National agencies are implementing this using Solace for reliable, real-time data distribution.',
      detail: 'A national weather service implements WIS 2.0 for global meteorological data exchange. Another government agency is building a meteorological SWIM (System Wide Information Management) to facilitate information exchange \u2014 serving the same purpose as aviation SWIM but for environmental monitoring. Real-time environmental data supports disaster preparedness, climate monitoring, and public safety.'
    },
    integration: {
      headline: 'Environmental agencies connect weather stations, air quality monitors, and satellite data through event-driven platforms \u2014 replacing file-based data exchange with real-time streaming',
      outcome: 'Legacy meteorological data sharing relied on file transfers and batch processes. Event-driven architecture enables real-time streaming of weather observations, forecasts, warnings, and climate data between national agencies, research institutions, and public safety systems.',
      detail: 'Integration patterns: WMO WIS 2.0 standards-based event exchange; MQTT for automated weather station telemetry; real-time warning dissemination to civil protection agencies; cross-border data sharing between national meteorological services; integration with aviation SWIM for coordinated airspace and weather information.'
    },
    business: {
      headline: 'When severe weather warnings reach agencies minutes faster, lives are saved \u2014 real-time meteorological data sharing replaces the delays of legacy file transfer systems',
      outcome: 'The speed of weather warning dissemination directly impacts public safety. Legacy file-based systems introduced delays that could mean the difference between timely evacuation and late response. Real-time event-driven data sharing ensures warnings reach civil protection agencies, media, and public alert systems within seconds.',
      detail: 'Beyond emergency response, real-time environmental monitoring supports climate research, agricultural planning, energy grid management (wind and solar forecasting), and aviation safety. The business case spans multiple government functions that all benefit from the same real-time environmental data streams.'
    },
    architect: {
      headline: 'Environmental event mesh: WMO WIS 2.0 standards, MQTT from weather stations, cross-border data sharing, and real-time warning dissemination to civil protection',
      outcome: 'Standards-based event exchange following WMO WIS 2.0 specifications. MQTT for automated weather station telemetry ingestion. Cross-border mesh connecting national meteorological services. Real-time warning distribution to civil protection, aviation, and media. Integration with aviation SWIM for coordinated information management.',
      detail: 'Key patterns: WMO WIS 2.0 compliance for international interoperability; high-volume MQTT ingestion from distributed weather stations; topic-based filtering by region, hazard type, and severity for targeted warning distribution; cross-border event mesh for international meteorological data exchange; integration with aviation SWIM standards; archival event streaming to climate research databases.'
    }
  }
],

values: {
  technology: [
    { title: 'Cross-agency data exchange', text: 'Standardised event formats for citizen data. Agencies publish and subscribe without custom integration per pair. Real-time coordination replaces months-long notification delays.' },
    { title: 'Smart city IoT at scale', text: '10,000+ buildings, traffic networks, weather stations — all publishing sensor data through a single event mesh. Real-time monitoring replaces manual inspection.' },
    { title: 'Classified and secure', text: 'Deploy in air-gapped networks, integrate with data diodes, and enforce classification-based access control. Built for the security requirements of defence and border agencies.' },
    { title: 'HA for critical infrastructure', text: 'Immigration checkpoints, traffic management, and emergency services cannot tolerate downtime. Active-active deployment with automatic failover and zero message loss.' }
  ],
  integration: [
    { title: 'IBM MQ replacement', text: 'Replace non-HA IBM MQ at border checkpoints and government facilities with HA event mesh. Multi-protocol support connects legacy systems without rewrites.' },
    { title: 'SAP AEM for government', text: 'Transport asset management, benefits delivery, and HR workflows event-enabled through SAP AEM and Cloud Integration.' },
    { title: 'IoT sensor integration', text: 'MQTT from building sensors, traffic systems, and weather stations. High-volume ingestion with topic-based routing to monitoring, analytics, and automated response systems.' },
    { title: 'Centralised database decoupling', text: 'Replace shared databases where multiple agencies read and write to the same tables. Event-driven communication eliminates contention and single points of failure.' }
  ],
  business: [
    { title: 'Citizen experience', text: 'Benefits delivered faster, notifications in real time, processes that took months completed in days. Event-driven government serves citizens better.' },
    { title: 'National security', text: 'Border operations, immigration processing, and inter-agency intelligence sharing operate reliably with zero downtime. HA infrastructure for mission-critical operations.' },
    { title: 'Predictive public infrastructure', text: 'Detect equipment failures before they impact citizens. Proactive maintenance of lifts, water systems, power, and transport infrastructure.' },
    { title: 'Operational efficiency', text: 'Eliminate manual data handoffs between agencies. Reduce the cost of maintaining fragmented integration infrastructure. Free capacity for digital transformation.' }
  ],
  architect: [
    { title: 'Security classification controls', text: 'Topic-based access control aligned to government security classifications. Each agency accesses only authorised data. Full audit trail for every inter-agency exchange.' },
    { title: 'Multi-tier deployment', text: 'Classified workloads on-premises in air-gapped networks. Citizen-facing services in secured cloud. Event mesh spans both with appropriate security boundaries.' },
    { title: 'Global standards support', text: 'WMO WIS 2.0 for weather data, aviation SWIM for meteorological information, Open API for transport asset management. Standards-based event exchange.' },
    { title: 'Burst scaling', text: 'University enrollment surges, weather emergencies, traffic incidents — elastic architecture handles 10x normal volumes without degradation.' }
  ]
},

links: {
  technology: [
    { text: 'Solace for public sector', url: 'https://solace.com/solutions/industries/', icon: 'globe' },
    { text: 'Customer success stories', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: 'Event mesh explained', url: 'https://solace.com/what-is-an-event-mesh/', icon: 'doc' }
  ],
  integration: [
    { text: 'SAP integration with Solace', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'IoT event streaming', url: 'https://solace.com/solutions/use-cases/', icon: 'doc' },
    { text: 'Platform overview', url: 'https://solace.com/products/platform/', icon: 'doc' }
  ],
  business: [
    { text: 'Customer success stories', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: 'Solace for public sector', url: 'https://solace.com/solutions/industries/', icon: 'globe' },
    { text: 'Why Solace', url: 'https://solace.com/company/', icon: 'globe' }
  ],
  architect: [
    { text: 'Event broker specifications', url: 'https://solace.com/products/event-broker/', icon: 'globe' },
    { text: 'Solace platform overview', url: 'https://solace.com/products/platform/', icon: 'globe' },
    { text: 'IoT event streaming', url: 'https://solace.com/solutions/use-cases/', icon: 'doc' }
  ]
}


  },


  "exploring": {
stories: [
  {
    id: 'ex1',
    subsector: 'Digital Backbone',
    technology: {
      headline: 'The real-time digital backbone \u2014 how enterprises are building a unified event layer that connects every system, cloud, and data source in motion',
      outcome: 'Forward-thinking enterprises are moving beyond point-to-point integration toward a real-time digital backbone: a single event layer that connects operational systems, cloud services, partner ecosystems, and AI/ML pipelines. Every business event flows through one fabric and reaches every system that needs it, instantly.',
      detail: 'This is not just faster integration. It is a fundamentally different architecture where data moves in real time by default, not by request. The backbone becomes the foundation for real-time AI: ML models consume live event streams for fraud detection, demand forecasting, predictive maintenance, and personalisation.'
    },
    integration: {
      headline: 'A real-time digital backbone replaces the patchwork of point-to-point integrations with a single event layer \u2014 every system publishes once, every consumer subscribes',
      outcome: 'Integration teams are shifting from building individual connections between systems to establishing a shared event backbone. Any system can publish events. Any system can subscribe. New consumers onboard without touching the producer.',
      detail: 'The practical impact: when a new analytics platform, AI model, or partner integration needs access to events, there is no new integration project. The events are already flowing. The new consumer simply subscribes.'
    },
    business: {
      headline: 'Enterprises with a real-time digital backbone make decisions in milliseconds, not hours \u2014 and are building the foundation for AI that acts on live data',
      outcome: 'Batch processing creates a gap between what is happening and what you know. A real-time digital backbone closes that gap. Pricing decisions, inventory allocation, fraud detection, and customer interactions all operate on live data.',
      detail: 'Real-time data is the foundation for AI that acts, not just analyses. Fraud models that score transactions as they happen. Demand forecasting that adjusts to live signals. Personalisation engines that respond to what a customer is doing right now.'
    },
    architect: {
      headline: 'Real-time digital backbone: a unified event mesh spanning on-prem, multi-cloud, and edge \u2014 with event streams feeding operational systems and AI/ML pipelines simultaneously',
      outcome: 'Event brokers deployed across on-premises data centres, multiple clouds, and edge locations, connected into a single logical event mesh. Every business event is published once and dynamically routed to operational consumers, analytics platforms, and AI/ML pipelines.',
      detail: 'Key design principles: publish once, consume many; topic-based dynamic routing; multi-protocol support (JMS, AMQP, MQTT, REST, WebSocket); Kafka bridge for streaming analytics; Event Portal for governance and discoverability.'
    }
  },
  {
    id: 'ex2',
    subsector: 'Platform Integration',
    technology: {
      headline: 'Build once, consume everywhere \u2014 how event mesh turns integration from a project into a platform capability',
      outcome: 'Enterprises using Solace are shifting from project-based integration to platform-based integration. When SAP publishes an order event, it reaches the warehouse, the analytics platform, the partner portal, and the customer app \u2014 all from a single publish.',
      detail: 'SAP event-enabling is the most common starting point: using SAP AEM or ASAPIO, enterprises event-enable their ERP without modifying core SAP. The same pattern extends to any system. Each system publishes its events once. The event mesh handles routing to every consumer.'
    },
    integration: {
      headline: 'SAP event-enabling as the universal starting point \u2014 event-enable your ERP once, and every consumer gets real-time data without new integration projects',
      outcome: 'SAP sits at the centre of most enterprises. Event-enabling it turns the ERP from a data silo into a real-time event source. Master data, orders, inventory, and financial events publish once and reach every downstream system automatically.',
      detail: 'The pattern works regardless of what SAP connects to: Snowflake for analytics, Salesforce for CRM, Boomi or MuleSoft for API orchestration, Kafka for streaming. Integration teams report that subsequent consumers onboard in days or hours because the events are already flowing.'
    },
    business: {
      headline: 'When integration becomes a platform, new business capabilities launch in days instead of months \u2014 starting with the systems you already have',
      outcome: 'Every new business initiative used to start with an integration project. With event mesh as a platform, the data is already flowing. New capabilities plug into existing event streams and launch faster.',
      detail: 'The business impact compounds over time. The first use case delivers incremental value. But the tenth use case, built on the same event backbone, launches in a fraction of the time and cost.'
    },
    architect: {
      headline: 'Event mesh as integration platform: SAP AEM at the core, multi-protocol fanout, topic-based routing, with Event Portal for governance and discoverability',
      outcome: 'SAP publishes events via AEM or ASAPIO. The event mesh routes them by topic to any consumer \u2014 analytics, CRM, warehouse, mobile apps. New consumers subscribe to existing topics without touching the producer.',
      detail: 'Key advantages: topic hierarchy for fine-grained filtering; Event Portal for event catalogue and governance; multi-protocol support for legacy and modern consumers; guaranteed delivery between producer and consumer.'
    }
  },
  {
    id: 'ex3',
    subsector: 'Middleware Modernisation',
    technology: {
      headline: 'Middleware modernisation \u2014 extending legacy messaging infrastructure into a hybrid, multi-cloud event mesh without disrupting what already works',
      outcome: 'Enterprises running TIBCO, IBM MQ, WebMethods, RabbitMQ, or ActiveMQ are not ripping and replacing. They are extending: connecting legacy messaging into a broader event mesh that spans cloud, on-premises, and edge.',
      detail: 'The modernisation approach is incremental. Solace brokers bridge to existing messaging platforms via native protocol support. Legacy applications do not need to be rewritten. They publish and subscribe through the event mesh using the protocols they already speak.'
    },
    integration: {
      headline: 'Integration teams are modernising middleware incrementally \u2014 bridging TIBCO, IBM MQ, and RabbitMQ into a unified event mesh without rewriting applications',
      outcome: 'Deploy Solace alongside existing messaging, bridge legacy applications via native protocol support, and gradually shift workloads as business needs evolve. No big-bang cutover. No application rewrites.',
      detail: 'Multi-protocol support is the enabler: JMS from TIBCO and IBM MQ, AMQP from RabbitMQ, REST from microservices, MQTT from IoT \u2014 all through the same event broker. One platform to monitor, secure, and govern.'
    },
    business: {
      headline: 'Middleware modernisation reduces operational risk and cost \u2014 without the business disruption of a rip-and-replace migration',
      outcome: 'Legacy messaging platforms create growing risk: end-of-support timelines, escalating licence costs, inability to support cloud workloads. Modernisation addresses all of these without disrupting the business applications that depend on them.',
      detail: 'Enterprises report 40-60% TCO reduction when consolidating from multiple messaging platforms to a single event mesh, while gaining capabilities like multi-cloud deployment and real-time analytics.'
    },
    architect: {
      headline: 'Incremental middleware modernisation: multi-protocol bridge from TIBCO/IBM MQ/RabbitMQ into hybrid event mesh with zero application rewrites',
      outcome: 'Solace event brokers deployed alongside existing messaging. JMS bridge connects TIBCO EMS and IBM MQ. AMQP bridge connects RabbitMQ. New applications connect via REST, MQTT, or WebSocket. All traffic flows through a unified event mesh.',
      detail: 'Key patterns: side-by-side deployment during transition; topic mapping from legacy queue names; gradual workload migration; active-active DR that the legacy platform may not have supported.'
    }
  },
  {
    id: 'ex4',
    subsector: 'Legacy Platform Migration',
    technology: {
      headline: 'Enterprises replaced TIBCO, BizTalk, WebMethods, and RabbitMQ with modern event brokers \u2014 scaling to thousands of connected locations without disrupting operations',
      outcome: 'Multiple enterprises migrated away from legacy messaging platforms that could not scale or meet real-time requirements. One replaced TIBCO EMS to reduce TCO and enable multi-cloud deployment. Another replaced BizTalk which could not scale. A third replaced WebMethods to connect 1,800 locations.',
      detail: 'The migration drivers are consistent: legacy platforms that cannot handle the volume or speed modern business demands, vendor lock-in limiting cloud adoption, and increasing maintenance costs with declining vendor support. The event mesh provides a migration path that preserves existing application investments while enabling new real-time capabilities.'
    },
    integration: {
      headline: 'Integration teams migrated from TIBCO, BizTalk, and WebMethods to event-driven platforms \u2014 multi-protocol support meant existing applications connected without rewrites',
      outcome: 'The integration teams executed middleware replacements while operations continued. Multi-protocol support meant existing JMS applications connected without rewrites. Migration from synchronous API-led approaches to event-driven patterns was often driven by real-world failures exposing the limitations of sync-only integration.',
      detail: 'The replacement architecture typically pairs the event broker with existing iPaaS (MuleSoft, Boomi) for API orchestration, adding event streaming for use cases where sync-only integration was failing. Multi-protocol support (JMS, AMQP, REST, MQTT) enables incremental migration rather than big-bang cutover.'
    },
    business: {
      headline: 'When the messaging platform becomes the bottleneck for the business \u2014 not just for IT \u2014 the case for modernisation is clear',
      outcome: 'Legacy messaging limitations directly impact revenue: cart abandonment from unreliable systems, lost orders from messaging failures, delayed operations from platforms that cannot scale. Modern event infrastructure eliminates these revenue leaks.',
      detail: 'At one organisation, the integration platform was holding back digital transformation. At another, volatile demand during COVID exposed the limitations of sync-only integration. In every case, the business case for replacement was driven by business impact, not just IT preference.'
    },
    architect: {
      headline: 'Legacy middleware migration: TIBCO EMS, BizTalk, WebMethods, and RabbitMQ replaced with event mesh spanning data centre, cloud, and 1,800+ edge nodes',
      outcome: 'Central brokers in the data centre or cloud, with locations connecting as clients or via edge brokers. Multi-protocol support (JMS for legacy, REST for modern, MQTT for IoT) enables incremental migration. Active-active DR for environments where downtime means lost revenue.',
      detail: 'Key technical drivers: BizTalk end-of-support; TIBCO EMS TCO versus modern alternatives; WebMethods limitations in multi-cloud; RabbitMQ scaling failures under peak load. The architecture pairs event broker with iPaaS for orchestration.'
    }
  },
  {
    id: 'ex5',
    subsector: 'SAP Event-Enabling',
    technology: {
      headline: 'Enterprises are using SAP AEM to stream real-time master data from ERP to every downstream system \u2014 replacing batch-driven data synchronisation across the organisation',
      outcome: 'SAP AEM streams product, pricing, and operational data from SAP to thousands of endpoints in real time. Multiple enterprises use AEM with ASAPIO for non-SAP system integration. The pattern is consistent: SAP as the event source, everything else as subscribers.',
      detail: 'The SAP event-enabling pattern works at enterprise scale: thousands of consuming endpoints, multiple cloud and on-premises environments, and high-frequency data updates. The event mesh handles the massive fan-out from one SAP publish to thousands of subscribers across the organisation.'
    },
    integration: {
      headline: 'Integration teams event-enabled SAP for master data, order management, and partner connectivity \u2014 with Boomi or MuleSoft handling orchestration alongside the event mesh',
      outcome: 'The integration stack: SAP AEM or ASAPIO for event-enabling the ERP, Boomi or MuleSoft for API orchestration and transformation, and the event mesh for real-time distribution. Master data changes, order events, and operational updates publish from SAP and reach every downstream system.',
      detail: 'SAP event-enabling patterns: master data distribution to operational systems; Kafka connector for CDC to analytics platforms; Salesforce integration via AEM; partner connectivity including third-party cloud platforms; Boomi or MuleSoft for complex transformations.'
    },
    business: {
      headline: 'When operational data takes hours to propagate from SAP to downstream systems, decisions are made on stale information \u2014 event-enabling fixes this in real time',
      outcome: 'Batch-driven data synchronisation creates windows where different systems show different information. Changes take hours to propagate. Event-driven SAP integration closes this gap to seconds \u2014 every system sees current data simultaneously.',
      detail: 'The impact is direct: operational errors from stale data, delayed decisions from lagging information, and inconsistent customer experiences across channels. Real-time SAP event-enabling ensures every system operates on current, accurate information.'
    },
    architect: {
      headline: 'SAP event-enabling architecture: SAP AEM + ASAPIO for ERP events, Boomi/MuleSoft for orchestration, Kafka bridge for analytics, multi-environment fan-out',
      outcome: 'SAP AEM or ASAPIO event-enables the ERP without core modifications. Master data, order, and operational events publish to the event mesh. Systems subscribe via JMS, REST, or WebSocket. Kafka bridge feeds analytics platforms.',
      detail: 'Key patterns: ASAPIO for SAP ECC event-enabling during S/4HANA transition; SAP AEM for native S/4HANA event streaming; massive fan-out handling thousands of endpoints; Boomi or MuleSoft for complex transformations; Kafka bridge for CDC to analytics; multi-cloud event mesh for partner connectivity.'
    }
  }
],

values: {
  technology: [
    { title: 'Real-time by default', text: 'Every business event flows in real time across your entire enterprise. No more batch delays, no more stale data driving critical decisions.' },
    { title: 'Foundation for real-time AI', text: 'ML models consume live event streams for fraud detection, demand forecasting, and personalisation. The event mesh provides the data pipeline AI needs.' },
    { title: 'Hybrid and multi-cloud', text: 'Deploy across on-premises, AWS, Azure, GCP, and edge locations. One logical event mesh spanning every environment.' },
    { title: 'Modernise without disruption', text: 'Extend legacy messaging (TIBCO, IBM MQ, RabbitMQ) into a modern event mesh. No rip-and-replace. Existing applications connect via native protocols.' }
  ],
  integration: [
    { title: 'Multi-protocol native', text: 'JMS, AMQP, MQTT, REST, WebSocket \u2014 all supported natively. Legacy and modern applications connect without translation layers.' },
    { title: 'SAP event-enabling', text: 'Event-enable SAP via AEM or ASAPIO. Master data, orders, and inventory publish as events and reach every consumer.' },
    { title: 'Platform, not project', text: 'Shift from building individual integrations to establishing a shared event backbone. New consumers onboard in hours.' },
    { title: 'Event Portal governance', text: 'Catalogue, discover, and govern every event across the enterprise. Teams find and reuse existing events.' }
  ],
  business: [
    { title: 'Faster time to value', text: 'New business capabilities launch in days, not months. The event backbone means data is already flowing.' },
    { title: 'Lower total cost of ownership', text: 'Consolidate multiple messaging platforms into one. 40-60% TCO reduction while gaining cloud and real-time AI capabilities.' },
    { title: 'Reduced operational risk', text: 'Replace end-of-support platforms, eliminate single points of failure, and gain active-active DR.' },
    { title: 'AI-ready infrastructure', text: 'Real-time event streams are the data foundation AI needs. Build the backbone today that AI-driven operations will require tomorrow.' }
  ],
  architect: [
    { title: 'Event mesh topology', text: 'Brokers across data centres, clouds, and edge connected into a single logical mesh with dynamic message routing.' },
    { title: 'Topic-based routing', text: 'Hierarchical topic structure enables fine-grained subscriptions. Consumers receive exactly the events they need.' },
    { title: 'Kafka coexistence', text: 'Event mesh for operational integration. Kafka for streaming analytics. Kafka bridge connects both.' },
    { title: 'Zero-downtime migration', text: 'Side-by-side deployment with legacy messaging. Protocol bridges connect existing applications. Gradual workload migration.' }
  ]
},

links: {
  technology: [
    { text: 'Solace platform overview', url: 'https://solace.com/products/platform/', icon: 'globe' },
    { text: 'Event mesh explained', url: 'https://solace.com/what-is-an-event-mesh/', icon: 'doc' },
    { text: 'Customer success stories', url: 'https://solace.com/company/customers/', icon: 'doc' }
  ],
  integration: [
    { text: 'SAP integration with Solace', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'Event Portal', url: 'https://solace.com/products/portal/', icon: 'globe' },
    { text: 'Platform overview', url: 'https://solace.com/products/platform/', icon: 'doc' }
  ],
  business: [
    { text: 'Customer success stories', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: 'Why Solace', url: 'https://solace.com/company/', icon: 'globe' },
    { text: 'Industries we serve', url: 'https://solace.com/solutions/industries/', icon: 'globe' }
  ],
  architect: [
    { text: 'Event broker specifications', url: 'https://solace.com/products/event-broker/', icon: 'globe' },
    { text: 'Event mesh explained', url: 'https://solace.com/what-is-an-event-mesh/', icon: 'doc' },
    { text: 'Solace platform overview', url: 'https://solace.com/products/platform/', icon: 'globe' }
  ]
}

  },
};

// ============ JAPANESE CONTENT ============
const CONTENT_JA = {
  aviation: {

stories: [
  {
    id: 'av1',
    technology: {
      headline: '欧州全域の航空交通管理機関が40カ国以上の国家機関をリアルタイムで接続するためにレガシーメッセージングを刷新',
      outcome: 'AMQP などのオープン標準を使用したイベント駆動型バックボーンを展開することで、この組織は数十の国家航空管制機関にわたってリアルタイムのフライトスケジュールと航空データを管理し、状況の変化に応じて最適なフライトパスを継続的に計算しています。',
      detail: '以前のシステムは、メンテナンスコストが高く変更が困難な独自のポイントツーポイント統合に依存していました。イベントメッシュアーキテクチャへの移行により、フライトデータのプロデューサーとコンシューマーが分離され、新たな国家パートナーのオンボーディングにかかるコストと複雑さが大幅に削減されました。このシステムは安全性の高いデータを大陸全体でサブ秒のレイテンシで処理しています。'
    },
    integration: {
      headline: '40の国家航空管制システムを単一のイベントプラットフォームで接続 — 長年のポイントツーポイント統合作業を一掃',
      outcome: '統合チームは、国家航空管制システム間の断片的な独自接続を、AMQP を使用したパブリッシュ・サブスクライブバックボーンに置き換えました。新しい機関のオンボーディングに、カスタム統合開発は不要になりました。',
      detail: '移行前は、新たな国家パートナーごとに専用の作業が必要でした。イベントメッシュはオープンプロトコルを使用したデータ交換を標準化し、チームが接続のプロビジョニングではなくビジネスロジックに集中できるようにしました。フライトスケジュールデータ、リアルタイム監視フィード、例外イベントがすべて単一プラットフォームを通じて流れ、トピックベースのルーティングにより各機関は必要なデータのみをサブスクライブできます。'
    },
    business: {
      headline: '40カ国以上でのリアルタイム飛行調整 — 国家機関間の手動引き継ぎが不要に',
      outcome: '数十カ国の運用チームがライブフライトデータを即座に共有し、空域の安全と効率を維持するための協調的な意思決定が可能になりました。かつては電話や手動調整が必要だった混乱が、自動化されたイベントフローで処理されるようになりました。',
      detail: '運用面への影響は大きく、フライト遅延の削減により燃料コストが低下し、航空会社の定時運航率が向上し、連鎖的な混乱が減少しました。プラットフォームは最も混乱の少ないフライトパス調整をリアルタイムで継続的に計算し、その結果を関連する全機関と共有しています。'
    },
    architect: {
      headline: '汎欧州 ATM をイベントメッシュ上で再構築：AMQP パブ/サブで40以上の国家システムをトピックレベルのルーティングで接続',
      outcome: 'アーキテクチャは PubSub+ をメッセージングバックボーンとして使用し、AMQP をプライマリプロトコルとして採用しています。トピックベースのルーティングにより細粒度なサブスクリプションが可能で、各機関はフルデータフィードを受信するのではなく、特定の空港やフライト情報地域レベルでサブスクライブできます。',
      detail: '組み込みの冗長性を持つ安全性重視の低レイテンシデータ配信。フライトスケジュール、リアルタイム位置データ、例外イベント（航路閉鎖、ダイバート、天候）がすべて同じイベントメッシュを流れます。国家機関はそれぞれ異なるローカルシステムを運用しながら、共通のデータファブリックを共有しています。アーキテクチャは将来の SWIM 標準への拡張を見据えて設計されています。'
    }
  },
  {
    id: 'av2',
    technology: {
      headline: '大手航空会社が100以上のレガシーメッセージングインスタンスをクラウドに移行 — 運航停止を引き起こしていた障害を排除',
      outcome: 'DR テストの失敗とクラウド非対応のレガシー TIBCO および IBM MQ システムに直面したこの航空会社は、オンプレミスとクラウドにイベントブローカーを展開し、イベントメッシュで接続しました。結果として、リージョン間でメッセージロストゼロを実現し、ベンダーロックインからの脱却への明確な移行パスを確立しました。',
      detail: '以前のメッセージングインフラは、顧客への直接的な影響をもたらす障害やフライト遅延を引き起こし、収益の損失とブランドへのダメージをもたらしていました。既存システムと並行して新しいプラットフォームを展開し、イベントメッシュでブリッジすることで、移行は段階的に実施されました。マルチプロトコルサポートにより、既存のアプリケーションは書き直しなしに接続できました。'
    },
    integration: {
      headline: '航空会社の統合チームが TIBCO、IBM MQ、クラウドネイティブシステムを単一のハイブリッドイベントメッシュに統合 — アプリケーションの書き直し不要',
      outcome: 'マルチプロトコルサポートにより、既存の JMS、AMQP、REST アプリケーションはコード変更なしに接続できました。チームは100以上のレガシーインスタンスを数年かけて移行する間、運用を維持するハイブリッドオンプレミス/クラウドアーキテクチャを提供しました。',
      detail: '課題は航空会社が運航を続けながらミドルウェアを置き換えることでした。Event Portal によってチームはイベント全体の状況を把握し、最初に移行できるシステムを特定できました。コネクターが新旧をブリッジし、リスクの高い一括切り替えではなく段階的な移行を可能にしました。デフォルトの TLS 暗号化と SOC-2 コンプライアンスは最初から組み込まれていました。'
    },
    business: {
      headline: '大手航空会社がメッセージング障害によるフライト遅延を排除 — かつてはブランド損害をもたらしていた旧プラットフォームを刷新',
      outcome: '変更前は、メッセージングプラットフォームの障害がフライト遅延を直接引き起こし、収益損失と乗客への影響をもたらしていました。新しいプラットフォームの展開以降、ストリーミングレイヤーでの優先度1インシデントは一件も発生していません。',
      detail: 'フライト遅延はルート全体に波及し、収益損失と顧客の不満を複合的に引き起こします。新しいプラットフォームはデータを確実に配信し、統合を簡素化し、リスクを低減します。開発サイクルは短縮されました。チームはすべての REST インタラクションにラッパーサービスを構築する必要がなくなったためです。新しいデジタルサービスの市場投入スピードが競争優位性となっています。'
    },
    architect: {
      headline: 'オンプレミスと AWS にまたがるハイブリッドイベントメッシュ：TIBCO EMS と IBM MQ をゼロ RPO のクロスリージョンレプリケーションで置き換え',
      outcome: 'PubSub+ Event Brokers をオンプレミスと AWS に展開し、イベントメッシュで接続。マルチプロトコルサポート（JMS、AMQP、MQTT、REST）によりレガシーと最新のアプリケーションが共存可能。組み込みの HA/DR によりサードパーティ製品不要でゼロ RPO・RTO を実現。',
      detail: 'アーキテクチャはインフラの信頼性（クロスリージョンレプリケーション、組み込みフェイルオーバー）、移行（Event Portal がイベント全体をマッピング、コネクターがレガシーをブリッジ）、セキュリティ（デフォルト TLS、SOC-2）に対応。イベントメッシュパターンにより、単一の運用ビューを維持しながらワークロードを段階的に移行できます。'
    }
  },
  {
    id: 'av3',
    technology: {
      headline: 'アジア太平洋の空港がサイロ化したレガシーシステムを統一イベントプラットフォームに移行 — ターミナル間の新サービス展開を加速',
      outcome: '地域内の複数の空港が、ファイルベースおよびポイントツーポイント統合を持つサイロ化した IBM ミドルウェアで運営されていました。統一イベントプラットフォームへの移行により、ターミナル間のデータサイロを解消し、新サービスの展開時間を大幅に短縮しました。',
      detail: 'ある主要ハブでは、異なるプロジェクトチームによって同じシステムが4つのターミナルに重複して展開されていました。統一イベントプラットフォームによりデータを一度作成してどこでも利用できるようになりました。別の空港では、既存の IBM スタックがフェイルオーバーの問題による障害を引き起こしていました。現在、開発者ポータルにより航空会社パートナーがセルフサービスで統合できます。'
    },
    integration: {
      headline: 'ファイルベースからイベント駆動型へ：空港がレガシー IBM ミドルウェアを単一の統合バックボーンに統合',
      outcome: '統合チームは時代遅れのファイルベースデータ転送とポイントツーポイント接続を、最新のパブ/サブバックボーンに置き換えました。手荷物処理、地上業務、フライト情報、貨物システムがバッチ転送ではなくイベントを通じてデータを共有するようになりました。',
      detail: 'ある空港では、変革によりターミナル間の冗長なデータのコピーが排除されました。iPaaS レイヤー（MuleSoft または webMethods）がイベントブローカーと組み合わさり、同期 API 呼び出しと非同期イベント配信の両方を処理しています。重要な成果は、開発者ポータルを通じてイベントを利用可能にしたこと — 航空会社と地上ハンドリングパートナーが統合リクエストを提出することなくデータアクセスをセルフサービスで行えるようになりました。'
    },
    business: {
      headline: '空港がターミナル単位のデータサイロを排除 — 運用チームに空港全体のリアルタイムビューを提供',
      outcome: '変革前は、統合の欠如により空港運営の可視性が限られていました。運用チームは今、統合されたリアルタイムの状況認識を持ち、インシデントに即座に対応できます。',
      detail: 'ターミナル間のシステム重複排除によるコスト削減、混乱への迅速な対応による顧客満足度向上、共有データによるパートナーとの連携強化。ある先進的な空港では、プラットフォームがドローン交通管理パイロットの基盤にもなっています。'
    },
    architect: {
      headline: '空港統合のモダナイゼーション：iPaaS + イベントブローカーパターンで IBM ミドルウェアを置き換え、パートナーセルフサービス用の開発者ポータルを整備',
      outcome: 'アーキテクチャは iPaaS レイヤー（API オーケストレーション、トランスフォーメーション）と PubSub+（非同期イベント配信、キューイング、確実な配信）を組み合わせています。イベントは一度パブリッシュされ、どのシステムでも利用可能 — フライト情報、手荷物処理、地上業務、外部パートナーがすべて同じデータストリームをサブスクライブしています。',
      detail: 'オンプレミスアプライアンスがレイテンシ重視の地上業務（給油、除氷、滑走路ハンドリング）を処理。開発者ポータルによりパートナーのセルフサービスを実現。プロトコルサポートには AMQP、REST、MQTT が含まれ、最後の MQTT は IoT センサーと地上設備に重要です。ある空港では、ドローン UTM 統合のための SWIM バックボーンとしてプラットフォームを活用しています。'
    }
  }
],

values: {
  technology: [
    { title: 'ベンダーロックインの解消', text: 'マルチプロトコルサポート（AMQP、JMS、MQTT、REST）により、特定のベンダーエコシステムに縛られません。あなたの投資は将来何が来ても機能し続けます。' },
    { title: '中断なしの移行', text: 'レガシーの TIBCO、IBM MQ、ActiveMQ をハイブリッドイベントメッシュにブリッジ。運用を継続しながら段階的に移行できます。' },
    { title: '安全性重視の SLA に対応', text: 'メッセージロストや遅延が安全に直接影響する環境向けに設計された、ゼロ RPO レプリケーションを備えた組み込みの HA/DR。' },
    { title: 'パートナーエコシステムの簡素化', text: '開発者ポータルとセルフサービスデータアクセスにより、航空会社、地上ハンドラー、機関との数週間かかっていた統合プロジェクトが不要になります。' }
  ],
  integration: [
    { title: 'ポイントツーポイントをパブ/サブで置き換え', text: 'コンシューマーごとにカスタム統合を構築するのをやめましょう。イベントを一度パブリッシュすれば — 手荷物システム、フライトディスプレイ、地上業務、パートナーがそれぞれ独立してサブスクライブできます。' },
    { title: 'レガシーとモダンをブリッジ', text: '既存の JMS と AMQP アプリケーションはコード変更なしに接続。新しいサービスは REST または MQTT を使用。すべてが一つのプラットフォームを流れます。' },
    { title: 'iPaaS + イベントブローカーの組み合わせ', text: 'Solace を Boomi、MuleSoft、または webMethods と組み合わせて両者の長所を活かす：同期には API オーケストレーション、非同期にはイベントメッシュ。' },
    { title: 'パートナーのセルフサービスオンボーディング', text: '開発者ポータルにより航空会社パートナーと地上ハンドラーが統合チケットを発行することなくイベントを発見・サブスクライブできます。' }
  ],
  business: [
    { title: 'IT 起因のフライト遅延を排除', text: 'メッセージング障害が遅延を引き起こすと、コストは連鎖的に拡大します：収益損失、ブランドへのダメージ、乗客への影響。イベント駆動型インフラはゼロダウンタイムのために設計されています。' },
    { title: 'リアルタイムの状況認識', text: 'ターミナル、滑走路、空域にわたる統合された運用ビュー。運用チームが手動チェーンを待つのではなく、数秒以内にインシデントに対応できます。' },
    { title: '新サービスの市場投入を加速', text: 'データがリアルタイムで流れていれば、新しいデジタルサービスの立ち上げが速くなります。数週間の統合作業が数日になります。' },
    { title: '統合によるコスト削減', text: 'ターミナルと機関をまたいだシステムの重複をなくしましょう。一つのイベントプラットフォームが数十のポイントツーポイント接続を置き換えます。' }
  ],
  architect: [
    { title: 'ハイブリッド展開のためのイベントメッシュ', text: 'レイテンシ重視の地上業務にはオンプレミスアプライアンス、弾力的なワークロードにはクラウドブローカー、resilient なイベントメッシュで接続。' },
    { title: 'SWIM 対応アーキテクチャ', text: '標準ベースのメッセージング（AMQP、REST、MQTT）は SWIM と NextGen ATM イニシアチブに準拠。今日のために構築し、明日のために相互運用。' },
    { title: 'トピックベースの細粒度ルーティング', text: '機関はフルフィードではなく、特定の空港、フライト情報地域、またはイベントタイプをサブスクライブ。帯域幅を削減し、正確なデータガバナンスを実現。' },
    { title: '変換なしのマルチプロトコル', text: 'JMS、REST マイクロサービス、MQTT IoT センサー、AMQP パートナーがすべてネイティブに接続 — インフラ層でのプロトコルブリッジングは不要。' }
  ]
},

links: {
  technology: [
    { text: '国家航空交通管理機関が SWIM でモダナイゼーションを実現した方法', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: '動画：ミッションクリティカルな航空向けイベントメッシュ', url: 'https://solace.com/resources/', icon: 'video' },
    { text: '交通・運輸向け Solace', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  integration: [
    { text: 'テクニカルブリーフ：航空分野でのレガシーミドルウェア刷新', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'iPaaS + イベントブローカー：アーキテクチャパターン', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'solace.com の航空ユースケース', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  business: [
    { text: '空港がリアルタイムデータで運営を変革する方法', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'お客様事例：障害起因のフライト遅延を排除', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: '航空分野で Solace が実現できること', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  architect: [
    { text: 'アーキテクチャガイド：航空向けイベントメッシュ', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'テクニカルディープダイブ：SWIM とイベント駆動型 ATM', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'マルチプロトコルメッセージングの解説', url: 'https://solace.com/products/event-broker/', icon: 'globe' }
  ]
}

  },

  logistics: {
stories: [
  {
    id: 'lo1',
    technology: {
      headline: '世界最大の完全自動化港湾が、クレーンと車両フリートの全体をイベント駆動型メッセージングバックボーン上で運営',
      outcome: '新設の自動化港湾では、イベントブローカーがアプリケーション、自動搬送車（AGV）、ヤードクレーン、岸壁クレーン間のメッセージングバックボーンとして機能し、プライベート 5G ネットワーク上で厳格なレイテンシ予算内でリアルタイムに通信しています。',
      detail: 'ゼロから完全にイベントファーストで設計。ハードウェアとアプリケーションへの数千の同時接続、保証配信と低ジッタを実現。オペレーターはインフラコマンドが確実に届くかどうかを心配することなく、港湾の運営に集中できます。'
    },
    integration: {
      headline: '完全自動化港湾が AGV、クレーン、アプリケーションを単一のメッセージングバックボーンで接続 — 統合ミドルウェア不要',
      outcome: '運用技術とアプリケーションの間に統合ミドルウェアを重ねる代わりに、イベントブローカーが AGV、ヤードクレーン、岸壁クレーンを直接接続。すべての機器が厳格なレイテンシ保証のもとプライベート 5G で通信しています。',
      detail: '機器はステータスイベントをパブリッシュし、アプリケーションがサブスクライブします。クリティカルパスにメッセージ変換なし。ミドルウェアを避けた決定はレイテンシ予算に基づいています — 移動中の車両やクレーンへのコマンドは ESB や iPaaS のオーバーヘッドを許容できません。'
    },
    business: {
      headline: '港湾事業者が世界最大の自動化ターミナルを構築 — すべてのクレーンと車両へのコマンドが確実に届くという確信のもとで',
      outcome: '自律走行車両とロボットクレーンでコンテナを移動する場合、メッセージングの信頼性は IT 指標ではなく、運用上の安全要件です。イベント駆動型バックボーンにより、完全自動化された大規模オペレーションを確信を持って実行できます。',
      detail: '機器とアプリケーション間のリアルタイムで保証された通信を確保することで、港湾は手動介入を減らし、人件費を下げ、スループットを高めて運営しています。'
    },
    architect: {
      headline: '完全自動化港湾：プライベート 5G 上の AGV とクレーン向けリアルタイムバックボーンとしての Solace アプライアンス、サブミリ秒レイテンシ',
      outcome: 'オンプレミスアプライアンスがプライベート 5G を通じて AGV、ヤードクレーン、岸壁クレーンへの数千の同時接続を処理。アーキテクチャは低レイテンシと低ジッタを優先 — 移動中の車両への欠落コマンドは安全インシデントになります。',
      detail: 'クリティカルパスに iPaaS や ESB なし。機器はテレメトリをパブリッシュし、ブローカーを通じてコマンドを直接サブスクライブ。持続性のある保証配信。完全に運用要件に最適化されたグリーンフィールド展開。'
    }
  },
  {
    id: 'lo2',
    technology: {
      headline: 'グローバル海運会社がマスターデータをイベント対応化 — 即時の予約確認とリアルタイムコンテナ追跡を実現',
      outcome: 'MDM とソースシステムをイベント対応化することで、この海運会社は予約割り当てを即座に確認し、輸送中に購入した付加価値サービスをロジスティクスパートナーに通知できるようになりました。',
      detail: 'IoT ベースのコンテナ追跡を追加：各コンテナの電子部品がイベントプラットフォームを通じて位置情報と状態データを収集。別のイニシアチブでは、船舶運航のデジタルツインにプラットフォームを活用しています。'
    },
    integration: {
      headline: '海運会社がバッチ MDM 更新をリアルタイムイベントストリームに置き換え — 予約、パートナー、IoT システムを一つのプラットフォームで接続',
      outcome: '統合チームはマスターデータをイベント対応化し、変更（新予約、サービス購入、パートナー更新）がリアルタイムでイベントとして流れるようにしました。コンテナセンサーからの IoT データも同じプラットフォームを流れます。',
      detail: 'MDM システムからのイベント駆動型 CDC がイベントメッシュにパブリッシュ。予約確認、パートナー通知、コンテナテレメトリが同じインフラを共有。デジタルツインがシミュレーションと復旧のために運用イベントを消費します。'
    },
    business: {
      headline: '海運顧客が即時の予約確認を受け取り — 海上のすべてのコンテナをリアルタイムで追跡',
      outcome: '顧客はバッチ処理が予約を確認するのを待つ必要がなくなりました。顧客が輸送中に付加価値サービスを購入すると、パートナーに即座に通知されます。海運会社と顧客の両方が個々のコンテナをリアルタイムで追跡できます。',
      detail: 'かつて予約確認に数時間かかり、コンテナの可視性が港のチェックインに限られていた業界において、リアルタイムのイベントフローが根本的に優れた体験を生み出しています。'
    },
    architect: {
      headline: 'イベント駆動型 MDM + IoT コンテナ追跡 + デジタルツイン：海運会社の3層イベントアーキテクチャ',
      outcome: 'レイヤー1：MDM からの CDC が予約・パートナーイベントをパブリッシュ。レイヤー2：コンテナの IoT デバイスが MQTT 経由で位置データをストリーミング。レイヤー3：デジタルツインが船舶シミュレーション用に運用イベントを消費。',
      detail: '3つのレイヤーがすべて PubSub+ インフラを共有。IoT レイヤーはトピックを通じてルーティングされる MQTT を使用。MDM レイヤーは標準メッセージングプロトコルを使用。共有インフラにより、ドメインごとに個別のシステムを運用する複雑さが軽減されます。'
    }
  },
  {
    id: 'lo3',
    technology: {
      headline: '貨物・物流会社がレガシーミドルウェアをハイブリッド統合プラットフォームに置き換え — 追跡・倉庫システムを統合',
      outcome: '複数の物流会社が Oracle SOA、データベース組み込みビジネスロジック、オンプレミスキューイングから最新のハイブリッドアーキテクチャに移行。共通のテーマ：リアルタイム貨物追跡、統一された可視性、クラウドへの移行パス。',
      detail: 'ある会社では、データベースのストアドプロシージャのビジネスロジックがイベント駆動型ワークフローに抽出されました。別の会社では、データロストを引き起こしていた密結合アプリケーションが分離されました。オーケストレーションに iPaaS、信頼性の高い非同期に イベントブローカーという組み合わせが標準パターンになっています。'
    },
    integration: {
      headline: 'Oracle SOA から iPaaS + イベントブローカーへ：物流チームが TMS・WMS 統合をモダナイズする方法',
      outcome: 'チームは Oracle SOA、組み込みストアドプロシージャ、オンプレミス ActiveMQ から Boomi + Solace に移行。結果：信頼性の高い非同期メッセージング、同期・非同期パターンのサポート、クラウド移行パス。',
      detail: 'Boomi がオーケストレーションとトランスフォーメーションを担当し、Solace が保証メッセージングとイベント配信を担当。ソースシステムからの CDC が Kafka ブリッジを通じて Snowflake に分析データを供給。トピックフィルタリングが静的統合を置き換えました。'
    },
    business: {
      headline: '物流会社が統一された貨物可視性と予測追跡を実現 — 断片的な手動プロセスを置き換え',
      outcome: '断片的な追跡と手動プロセスが収益損失を引き起こしていました。モダナイゼーション後、オペレーターは統一されたリアルタイムの可視性を持ち、事後対応的なステータス確認ではなく予測的な位置追跡が可能になりました。',
      detail: '運用コストの低下、新しい統合リクエストへの対応時間の短縮、そして予測追跡を顧客への付加価値として提供できる能力。'
    },
    architect: {
      headline: '物流向けハイブリッド統合：Boomi + Solace、CDC、Kafka ブリッジ、Snowflake 分析',
      outcome: '同期オーケストレーションに iPaaS（Boomi）、非同期に PubSub+。ソースシステムからの CDC が Kafka ブリッジを通じて Snowflake への分析用に、運用コンシューマーの両方に供給。オンプレミスから Azure へのハイブリッド。',
      detail: 'パブ/サブとリクエスト/リプライパターン、IoT テレメトリの取り込み、動的ルーティングのためのトピックフィルタリング。同期 API と非同期イベントパターンの両方をサポート — 一部のインタラクションでは保証されたリクエスト/リプライが必要で、他はファイア・アンド・フォゲットという場合に重要です。'
    }
  }
],
values: {
  technology: [
    { title: 'バッチではなくリアルタイム運用', text: '予約確認、貨物追跡、パートナー通知が数時間ではなく数秒で処理されます。' },
    { title: '別個のプラットフォームなしで IoT にスケール', text: 'コンテナセンサー、車両テレメトリ、クレーンコマンドがすべて同じイベントインフラを流れます。' },
    { title: '自分のペースでハイブリッドクラウドへ', text: 'レイテンシ重視の港湾業務にはオンプレミス、弾力的な分析にはクラウド。イベントメッシュで接続。' },
    { title: 'レガシーを取り除かずにモダナイズ', text: 'Oracle SOA、IBM MQ、データベース組み込みロジックをイベント駆動型フローに段階的にブリッジ。' }
  ],
  integration: [
    { title: '物流向け iPaaS + イベントブローカー', text: 'オーケストレーションには Boomi または MuleSoft、保証された非同期メッセージングには Solace。TMS/WMS 統合とリアルタイム配信の両方を処理。' },
    { title: 'ソースシステムからの CDC', text: 'MDM とソースシステムをイベント対応化。変更が運用システム、分析、パートナー通知に同時にイベントとして届きます。' },
    { title: 'クリティカルパスの保証配信', text: '貨物イベント、クレーンコマンド、予約確認はロストできません。永続メッセージングがベストエフォートのキューイングを置き換えます。' },
    { title: '多様なエンドポイントのためのマルチプロトコル', text: 'IoT センサーには MQTT、パートナー API には REST、レガシー倉庫システムには JMS — 単一ブローカー、プロトコル変換不要。' }
  ],
  business: [
    { title: '顧客対応の迅速化', text: '即時の予約確認、リアルタイムの出荷追跡、プロアクティブなパートナー通知がバッチ遅延を置き換えます。' },
    { title: '収益を生む可視性', text: '統一された貨物追跡が不整合を排除し、顧客に販売できる予測サービスを実現します。' },
    { title: '自動化への信頼', text: 'AGV、クレーン、自律システムがメッセージングに依存する場合、信頼性はオプションではありません。ゼロダウンタイム運用のために設計されています。' },
    { title: '統合コストの削減', text: 'カスタムのポイントツーポイント接続の構築をやめましょう。一度パブリッシュして多数がサブスクライブ — 統合工数を大幅に削減。' }
  ],
  architect: [
    { title: 'グリーンフィールドのためのイベントファースト', text: '新しい自動化施設はイベントファーストで設計。機器、アプリケーション、分析が共有のイベントバックボーンをサブスクライブ。' },
    { title: '分析のための Kafka ブリッジ', text: '運用イベントがリアルタイムに PubSub+ を流れ、その後 Kafka と Snowflake に分析用にブリッジ。一つのイベント、二つのパターン。' },
    { title: 'OT にはサブミリ秒、IT には弾力性', text: '厳格なレイテンシ予算を持つ OT 向けオンプレミスアプライアンス。弾力的な IT ワークロード向けクラウドブローカー。同じイベントメッシュ。' },
    { title: 'スケールするトピックベースルーティング', text: 'アプリケーションロジックなしでイベントを動的トピックフィルタリングでルーティング。コンテナ X をパートナー Y へ、予約 Z が倉庫 W に通知。' }
  ]
},
links: {
  technology: [
    { text: 'グローバル港湾がイベント駆動型自動化で運営される方法', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: '動画：イベントメッシュによるリアルタイム物流', url: 'https://solace.com/resources/', icon: 'video' },
    { text: '交通・物流向け Solace', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  integration: [
    { text: 'テクニカルブリーフ：物流向け Boomi + Solace', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'サプライチェーンモダナイゼーションのための CDC パターン', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'solace.com の物流ユースケース', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  business: [
    { text: '物流リーダーがリアルタイムデータを活用する方法', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'お客様事例：港湾業務の自動化', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: '物流分野で Solace が実現できること', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  architect: [
    { text: 'アーキテクチャガイド：物流向けイベントメッシュ', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'IoT + イベントブローカー：設計パターン', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'PubSub+ ブローカー仕様', url: 'https://solace.com/products/event-broker/', icon: 'globe' }
  ]
}

  },

  rail: {
stories: [
  {
    id: 'ra1',
    technology: {
      headline: '国有鉄道が単一のイベントプラットフォーム上で40以上のリアルタイムユースケースを実行 — 運転士情報からトンネル監視まで',
      outcome: 'ヨーロッパで最も利用者が多い鉄道事業者の一つが、40以上のユースケースにイベント駆動型メッセージングを活用しています：列車運転士情報、リアルタイムの位置・速度、例外イベント、輸送力計画、時刻表管理、入換、トンネル監視。',
      detail: '列車位置データから始まったものが、チームが同じインフラで他の問題を解決できることに気づき有機的に拡張しました。遠隔操作センター間の低容量回線上での配信は、イベントアーキテクチャが優雅に解決した課題でした。'
    },
    integration: {
      headline: '40以上の鉄道システムを単一のイベント駆動型統合レイヤーに統合 — 一度パブリッシュしてどこでも消費',
      outcome: 'ユースケースごとに個別の統合を行う代わりに、一つのイベントプラットフォームが運転士情報、位置追跡、例外イベント、時刻表計画、トンネル監視をトピックベースのサブスクリプションで処理しています。',
      detail: 'イベントとしてパブリッシュされた列車位置データは、運転士情報システム、計画ツール、運用センターが同時に消費します。例外イベントは優先ルーティングで流れます。遠隔センター間の低容量回線がネイティブに処理されます。'
    },
    business: {
      headline: '鉄道会社が一つのユースケースから始まり40以上に成長した単一プラットフォームでリアルタイム運用を管理',
      outcome: '列車位置ソリューションとして始まったものが40以上の運用ユースケースに拡張。各新ユースケースが新しい統合プロジェクトを必要とするのではなく、既存のインフラを活用。ビジネス上のメリットが時間とともに複合的に増加しています。',
      detail: '列車運転士がリアルタイム情報を受け取り、計画担当者が輸送力を動的に調整し、運用センターが数秒以内に例外に対応。プラットフォームは定常的な時刻表配信から安全性の高いトンネル監視まで処理しています。'
    },
    architect: {
      headline: '一つのイベントメッシュ上の40以上の鉄道ユースケース：テレメトリ、例外、計画、トンネル監視のためのトピック階層',
      outcome: '単一の PubSub+ 展開がトピック階層とフィルタリングを通じて多様なユースケースを処理。高頻度テレメトリ、優先例外イベント、計画データの異なる QoS、低帯域幅リモートリンクのネイティブサポート。',
      detail: 'リアルタイムテレメトリ、運用コマンド、計画ワークフロー、安全イベント、センター間通信が共存。トピック階層により細粒度サブスクリプションが可能 — 運用センターは自分の地理的地域のみをサブスクライブします。'
    }
  },
  {
    id: 'ra2',
    technology: {
      headline: '鉄道事業者が TIBCO と Mosquitto をイベント駆動型プラットフォームに置き換え — ERP、テレメトリ、発券のモダナイゼーション',
      outcome: '複数の事業者がレガシーメッセージング（TIBCO BW/EMS、Mosquitto）を最新のイベントプラットフォームに置き換えました。ユースケース：ERP 統合、従業員資格追跡、機関車テレメトリ、旅客チェックイン/チェックアウト処理。',
      detail: 'ある事業者では、TIBCO が地域から撤退することにより、リアルタイム従業員資格（規制上）と Oracle ERP 移行をサポートするデータ統合ハブの完全な置き換えが必要になりました。別の事業者では、Mosquitto が機関車テレメトリの HA を欠いていました。欧州の鉄道会社はチェックインデータが確実に課金に届くことを保証し、以前の失われた収益を回収しています。'
    },
    integration: {
      headline: 'TIBCO、Mosquitto、ポイントツーポイント接続を置き換え — ERP、テレメトリ、旅客システムを一つのプラットフォームで統合',
      outcome: 'レガシーミドルウェアが、エンタープライズ統合（ERP、HR）と運用技術（機関車センサー、旅客ゲート）の両方を処理する最新のイベントブローカーに置き換えられました。IT と OT のための一つのプラットフォーム。',
      detail: 'ある事業者では、TIBCO ハブがリアルタイム従業員資格確認（保守クルーを派遣する前に資格を確認）と Oracle ERP データ転送をサポートしていました。両方とも切り替え中に中断なく継続されました。旅客チェックインイベントは現在 SAP AEM を通じて課金とカスタマーポータルの両方に流れています。'
    },
    business: {
      headline: '欧州の鉄道会社がすべての旅客チェックインが確実に課金に届くことを保証することで失われた収益を回収',
      outcome: '旅客のチェックイン・チェックアウトが課金イベントを生成します。以前は脆弱な統合でデータが失われていました — 乗車料金が請求されず、収益が損失。イベント駆動型の分離により、すべてのチェックインが課金とカスタマーポータルに確実に届くことが保証されました。',
      detail: '課金を超えて、同じイベントデータが旅客ポータルや他のシステムに供給されます。プラットフォームは単一目的の課金統合をマルチコンシューマーイベントストリームに変換しました。回収されたすべてのイベントが回収された運賃です。'
    },
    architect: {
      headline: 'TIBCO から Solace への移行：Oracle ERP、MQTT 機関車テレメトリ、SAP AEM による旅客課金を一つのブローカーで',
      outcome: '統合イベントブローカーがエンタープライズ向けに TIBCO BW/EMS を、MQTT テレメトリ向けに Mosquitto を置き換え。機関車からの MQTT、旅客課金向け SAP AEM、ERP 向け標準メッセージング — すべて一つのプラットフォームで。',
      detail: 'ある事業者は完全なイベント駆動型ストリーミングへの計画を持ちながら、分析のために Databricks データハブにフィードしています。MQTT の置き換えは Mosquitto が提供できなかった HA とスケーラビリティを必要としていました。SAP AEM がチェックインソースを課金（S/4HANA）と保証持続性を通じたカスタマーコマースから分離します。'
    }
  },
  {
    id: 'ra3',
    technology: {
      headline: '次世代スマート列車が車載センサーを通じてバックエンドシステムと接続 — 以前は存在しなかった機能',
      outcome: '新しい車両を導入している鉄道事業者は、列車センサーと本部をリアルタイムで接続する機能を初めて構築しています。課題：複数の列車メーカーからの IoT データを統合された分析・運用プラットフォームに取り込むこと。',
      detail: '新しいスマート列車はネイティブ REST で接続。既存の ActiveMQ はこの機能には不適切でした。別の事業者では、3社の列車メーカーがそれぞれ異なる IT システムを持ち — イベントブローカーが Azure 分析に流れる IoT データの単一取り込みポイントを提供しています。'
    },
    integration: {
      headline: '複数サプライヤーからのスマート列車 IoT データを単一のイベントブローカーを通じて統合分析に取り込み',
      outcome: '3社の異なる列車メーカーがそれぞれ異なる IT システムを持っています。イベントブローカーが単一の取り込みポイントとして機能 — 多様な IoT データを Azure 分析と運用のための統一ストリームに正規化しています。',
      detail: 'Boomi が既存のシステムでしたが、そのネイティブキューイングは車両テレメトリのスケールと信頼性には不十分でした。Solace を追加することで、保証メッセージングと直接のサードパーティ統合が提供されました。トピックベースのルーティングがコンテンツベースのルーティングを効率性のために置き換えました。'
    },
    business: {
      headline: '鉄道事業者がスマート列車をデータ生成資産に変換 — 初めてリアルタイムフリート管理が可能に',
      outcome: '車載センサーを持つ新しい車両が、列車の健全性、性能、ステータスのリアルタイム可視性を生み出します。事業者は定期点検に依存するのではなく、リアルタイムでサービスを管理できます。',
      detail: '以前は信号統合はあったが車両統合がなかった鉄道会社が、今では全フリートを監視できます。予測保守、迅速なインシデント対応、より優れた旅客情報 — これまで入手できなかったデータから。'
    },
    architect: {
      headline: 'コネクテッドトレイン：センサーからの MQTT/REST、イベントブローカー取り込み、Azure データレークへの Kafka ブリッジ',
      outcome: '車載センサーが MQTT または REST で本部のイベントブローカーに接続。マルチサプライヤーの取り込みを処理し、データを正規化し、運用と分析に配信。Kafka ブリッジが Azure データレークに供給。',
      detail: '各列車メーカーが異なる IoT システムを提供。イベントブローカーが多様性を一貫したイベントモデルの背後に抽象化。信頼性のために ActiveMQ を置き換え。Boomi がエンタープライズオーケストレーションを処理し、Solace が高スループットのセンサーデータを処理。'
    }
  }
],
values: {
  technology: [
    { title: '一つのプラットフォーム、多数のユースケース', text: 'テレメトリ、課金、ERP、運用計画がすべて同じイベントインフラで動作。各新ユースケースが既存のものを活用します。' },
    { title: '中断なしにレガシーを置き換え', text: 'TIBCO、IBM MQ、Mosquitto、ActiveMQ を最新のイベントメッシュにブリッジ。列車が走り続けながら段階的に移行。' },
    { title: 'コネクテッド車両', text: '新しいスマート列車はレガシーインフラが処理できないデータを生成します。イベントアーキテクチャがセンサーデータをスケールで取り込み、配信、分析します。' },
    { title: '規制グレードの信頼性', text: '従業員資格確認、ポジティブトレインコントロール、安全イベントは保証配信が必要です。組み込みの HA によりメッセージロストなし。' }
  ],
  integration: [
    { title: 'マルチサプライヤーの正規化', text: '異なるメーカー、異なるシステム。一つのイベントブローカーが多様な IoT ストリームを一貫したイベントモデルに正規化します。' },
    { title: '一つのプラットフォームで IT と OT', text: 'エンタープライズ統合（ERP、HR、課金）と運用技術（センサー、信号）が同じインフラで動作。' },
    { title: '鉄道向け SAP AEM', text: '旅客チェックインイベント、課金統合、SAP Advanced Event Mesh によるマスターデータ — 脆弱なチェーンを分離。' },
    { title: '鉄道向け Boomi + Solace', text: 'エンタープライズオーケストレーションに Boomi、保証メッセージングと IoT 取り込みに Solace。ハイブリッド鉄道 IT/OT のために特別設計。' }
  ],
  business: [
    { title: '収益回収', text: 'チェックインイベントを失うことは運賃を失うことです。保証配信によりジャーニーデータが確実に課金、ポータル、分析に届きます。' },
    { title: 'リアルタイムサービス管理', text: 'フリート全体をリアルタイムで監視。予測保守、迅速なインシデント対応、より優れた旅客情報。' },
    { title: '運用コストの複利効果', text: '各新ユースケースのコストが以前より低くなります。列車追跡が計画、安全、トンネル監視、その他に拡張。' },
    { title: '安全とコンプライアンス', text: '従業員資格確認、ポジティブトレインコントロール、コンプライアンスが交渉の余地のない環境向け安全性重視の配信。' }
  ],
  architect: [
    { title: '鉄道のためのトピック階層', text: '地理的地域、列車タイプ、イベントカテゴリ — 細粒度サブスクリプションにより各システムが関連データのみを受信します。' },
    { title: 'テレメトリに MQTT、エンタープライズに AMQP', text: '機関車は MQTT を使用。エンタープライズシステムは JMS または AMQP を使用。プロトコル変換なしにどちらもネイティブに接続。' },
    { title: 'データレークへの Kafka ブリッジ', text: 'リアルタイムイベントが PubSub+ を流れ、その後 Kafka と Azure に分析用にブリッジ。運用と分析パスが一つのソースを共有。' },
    { title: '安全性重視の HA', text: 'ポジティブトレインコントロール、トンネル監視、例外はメッセージロストゼロを要求。自動フェイルオーバーを備えた組み込みの HA。' }
  ]
},
links: {
  technology: [
    { text: '鉄道会社がイベント駆動型アーキテクチャでモダナイズする方法', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: '動画：コネクテッドトレインとリアルタイム運用', url: 'https://solace.com/resources/', icon: 'video' },
    { text: '交通・運輸向け Solace', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  integration: [
    { text: 'テクニカルブリーフ：鉄道での TIBCO 置き換え', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'Boomi + Solace 統合パターン', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'solace.com の鉄道ユースケース', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  business: [
    { text: '鉄道事業者がデータを競争優位に変える方法', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'お客様事例：リアルタイム鉄道運用', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: '鉄道分野で Solace が実現できること', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  architect: [
    { text: 'アーキテクチャガイド：鉄道向けイベントメッシュ', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'MQTT と IoT 統合パターン', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'PubSub+ Event Broker 仕様', url: 'https://solace.com/products/event-broker/', icon: 'globe' }
  ]
}

  },

  automotive: {
stories: [
  {
    id: 'au1',
    technology: {
      headline: 'グローバル自動車メーカーが数百万台のコネクテッドカーと顧客アプリ間でテレメトリをストリーミング',
      outcome: '世界で最も認知された高級自動車メーカーの一つが、コネクテッドカーと消費者向けモバイルアプリ間でテレメトリを交換するためにイベント駆動型メッセージングを使用しています。これが最初の展開であり、調達、生産、SAP 移行に拡張されました。',
      detail: 'コネクテッドカーを超えて、会社は現在調達データ交換に SAP Advanced Event Mesh を使用し、PI/PO 移行をサポートしてワークフローを分離し、IBM MQ インスタンスを削減する計画を立てています。'
    },
    integration: {
      headline: '自動車メーカーが同じイベントプラットフォームでコネクテッドカーから SAP 統合まで拡張',
      outcome: '車-アプリ間のテレメトリとして始まったものが複数の事業部門に広がりました。調達データ交換がパートナーにリアルタイムで通知します。PI/PO 移行が SAP AEM を使用してワークフローを分離し、IBM MQ への依存を削減しています。',
      detail: 'チームは車両からの大容量 MQTT テレメトリ、調達向けエンタープライズ SAP イベント、PI/PO 移行のためのワークフロー分離を管理しています。同じプラットフォームが3つすべてを処理します。'
    },
    business: {
      headline: '高級自動車メーカーがコネクテッドカーをプラットフォームに変換 — そのリアルタイムデータアプローチを調達と生産に拡張',
      outcome: 'コネクテッドカーのテレメトリがすべてのドライバーとの直接デジタル関係を生み出しました。同じアプローチが今やビジネス全体の調達と生産ワークフローを加速しています。',
      detail: 'コネクテッドカーのために構築されたインフラがエンタープライズ全体のリアルタイムデータ移動の基盤になりました。調達パートナーが即時の更新を受け取ります。生産ワークフローがレガシーミドルウェアから分離されました。'
    },
    architect: {
      headline: 'MQTT によるコネクテッドカー、調達と PI/PO 向け SAP AEM、IBM MQ 削減 — 一自動車メーカーの多層イベントアーキテクチャ',
      outcome: '消費者アプリへの車両からの MQTT。BTP の調達と PI/PO ワークフロー分離のための SAP AEM。アーキテクチャが相互運用性を維持しながら IBM MQ インスタンスを段階的に置き換えます。',
      detail: 'コネクテッドカーレイヤーが数百万の同時 MQTT 接続を処理。SAP レイヤーが BTP 内のイベント駆動型統合に AEM を使用。すべてが PubSub+ 上で共存し、オンプレミスとクラウド間でイベントメッシュで接続されます。'
    }
  },
  {
    id: 'au2',
    technology: {
      headline: '車両オークションプラットフォームが11カ国200以上の拠点でメッセージングをモダナイズ — ベンダーが買収された後に',
      outcome: '200以上の拠点で25,000以上の同時接続によるリアルタイムオークションを運営するこの会社は、メッセージングベンダーが買収された際に強制的な移行に直面しました。サブ秒の入札レイテンシを維持しながら10年以上稼働していたシステムを置き換えました。',
      detail: '以前のシステムは10年以上本番環境に存在していました。ベンダーの買収により製品ロードマップの不確実性が生じました。移行は将来のハイブリッドおよびマルチクラウド戦略を実現しながらリアルタイム性能を維持しました。'
    },
    integration: {
      headline: '車両リマーケティングプラットフォームが4つのデータセンターにわたって WebMethods Nirvana を置き換え — 25,000以上の接続、オークション中断なし',
      outcome: 'チームは密結合したウェブクライアント-バックエンドメッセージングから最新のイベントブローカーに移行。4つの DC にまたがる25,000以上の接続がライブオークション運営を中断することなく移行されました。',
      detail: 'レガシーアーキテクチャがモダナイゼーションやスケールの柔軟性を制限していました。新しいプラットフォームはネイティブマルチプロトコルサポートを提供し、既存および将来のアーキテクチャが移行中に共存できます。'
    },
    business: {
      headline: 'ベンダーが買収されたとき：車両オークション会社が強制移行を競争上のアップグレードに変換',
      outcome: 'ベンダー買収によりリアルタイムオークションを動かすメッセージングプラットフォームについての不確実性が生まれました。単純な同等の置き換えではなく、会社は強制移行をモダナイゼーションの機会として活用 — マルチリージョンの回復性とクラウドへのパスを獲得しました。',
      detail: 'サブ秒のレイテンシがビジネスの収益に直接影響する場合、移行リスクは現実でした。200以上の拠点にわたってオークションを中断することなく実行されました。'
    },
    architect: {
      headline: 'リアルタイムオークションプラットフォーム：25K以上の接続とサブ秒レイテンシ要件を持つ4つの DC にまたがる移行',
      outcome: '4つのデータセンター、25,000以上の接続、サブ秒レイテンシ。ライブオークションを維持しながらの移行。マルチプロトコルサポートが段階的なクライアント側移行を可能にします。',
      detail: 'アーキテクチャが製品の継続性（買収されたベンダーの置き換え）、統合の脆弱性（ウェブクライアントの分離）、クラウド対応性（将来のハイブリッド展開）に対応。グローバル運営のためのマルチリージョンアクティブ-アクティブ。'
    }
  },
  {
    id: 'au3',
    technology: {
      headline: 'カーシェアリングプラットフォームがイベント駆動型アーキテクチャでモノリスを再構築 — レンタル大手がリアルタイムイベントで予約フロー全体を接続',
      outcome: 'カーシェアリングのスタートアップがスピードとスケーラビリティのためにベンダーモノリスをイベント駆動型アーキテクチャに置き換えました。一方、世界最大のレンタル会社の一つが、予約、チェックアウト、返却フロー全体をリアルタイムイベントで接続しました。',
      detail: 'カーシェアリングの COTS システムは変更が困難でした。レンタル会社は現在、すべての予約、変更、車両アクションのイベントを生成し — 運営全体でリアルタイムに消費されています。'
    },
    integration: {
      headline: 'モノリシック COTS からイベント駆動型へ：モビリティ会社がリアルタイム運用のためにプラットフォームを再構築',
      outcome: '統合チームがベンダーロックされたモノリシックシステムを EDA に置き換えました。予約、車両ステータス、フリート運用がポイントツーポイント接続なしに複数のシステムで消費されるイベントとして流れます。',
      detail: 'レンタル会社では、最初は新機能のみがイベントを使用しますが、実証されたら既存アプリケーションを移行する計画 — リスクを減らす段階的な採用パターンです。'
    },
    business: {
      headline: 'カーレンタル大手がリアルタイムイベントですべてのタッチポイントを接続することで一貫した体験を創出',
      outcome: '予約、変更、サービス、返却、チェックアウトがすべてリアルタイムで消費されるイベントを生成。レンタルジャーニーのすべてのタッチポイントにわたって統一された応答性の高い体験。',
      detail: '将来の状態はフリートからのリアルタイム車両テレメトリを含みます。段階的な採用により、ビジネスは完全なプラットフォーム移行にコミットする前に価値を見ることができます。'
    },
    architect: {
      headline: 'モビリティプラットフォームのモダナイゼーション：COTS から EDA への移行、リアルタイム予約、将来の車両テレメトリ',
      outcome: 'EDA がモノリシック COTS を置き換え。予約とフリート運用がイベントとしてパブリッシュ。新機能はイベントネイティブ、既存アプリは段階的に移行。将来：MQTT 車両テレメトリ。',
      detail: 'カーシェアリングの再構築が完全な EDA プラットフォーム設計を実証。レンタル会社が段階的採用を実証。アーキテクチャがビジネスイベントから IoT イベントまで拡張。'
    }
  }
],
values: {
  technology: [
    { title: 'スケールするコネクテッドカー', text: '数百万台の車両からの MQTT テレメトリをリアルタイムで処理。コネクテッドカーアプリ、フリート管理、予測サービスの基盤。' },
    { title: '自動車向け SAP モダナイゼーション', text: '調達、生産、PI/PO 移行向け SAP AEM。IBM MQ のフットプリントを削減しながらレガシー SAP ワークフローを分離。' },
    { title: 'ベンダー独立性', text: 'メッセージングベンダーが買収されたとき、移行パスが必要です。マルチプロトコルイベントメッシュが単一ベンダーやクラウドへのロックインを避けます。' },
    { title: '段階的なモダナイゼーション', text: '新機能をイベントネイティブに構築し、準備ができたら既存アプリケーションを移行。大規模な再プラットフォーミングは不要。' }
  ],
  integration: [
    { title: '車両には MQTT、エンタープライズには AMQP', text: 'コネクテッドカーは MQTT を使用。SAP システムは AMQP または JMS を使用。どちらも単一ブローカーを通じてネイティブに接続。' },
    { title: 'SAP AEM 統合', text: 'SAP Advanced Event Mesh を通じた調達イベント、生産ワークフロー、PI/PO 移行。SAP ランドスケープを中断することなく分離。' },
    { title: 'マルチ DC 回復性', text: '複数のデータセンターにわたるアクティブ-アクティブ。地域的な障害を許容できないオークション、予約、テレメトリシステム。' },
    { title: '段階的な移行', text: 'レガシーメッセージング（IBM MQ、WebMethods、COTS）をイベントメッシュにブリッジ。一度に一つのアプリケーションを移行。' }
  ],
  business: [
    { title: '直接のデジタル顧客関係', text: 'コネクテッドカーのテレメトリがすべてのドライバーとの直接リアルタイム関係を生み出します。パーソナライズされたサービスの基盤。' },
    { title: '市場投入スピード', text: 'イベント駆動型アーキテクチャによりチームが独立して構築できます。新しいモビリティサービスがプラットフォームベンダーの変更を待たずに立ち上がります。' },
    { title: '移行中の継続性', text: 'ライブ運用を中断することなくレガシーメッセージングを置き換え。オークションが継続し、予約が流れ続け、車が接続されたまま。' },
    { title: 'プラットフォーム経済', text: 'コネクテッドカーのインフラが調達、生産、フリート管理に拡張。各新ユースケースのコストが低くなります。' }
  ],
  architect: [
    { title: '自動車向けイベントメッシュ', text: '生産にはオンプレミス、コネクテッドカースケールにはクラウド、エンタープライズには SAP BTP。すべてのターゲットにわたってイベントメッシュで接続。' },
    { title: 'エッジでのマルチプロトコル', text: '車両からは MQTT、モバイルアプリからは REST、レガシーエンタープライズからは JMS。すべてネイティブ、変換不要。' },
    { title: 'マルチリージョンアクティブ-アクティブ', text: 'クロスリージョンレプリケーションを持つ複数の DC にまたがるグローバル運営。入札、予約、テレメトリのサブ秒レイテンシ。' },
    { title: 'COTS から EDA への移行', text: 'モノリシックベンダープラットフォームをイベント駆動型アーキテクチャに置き換え。ドメインイベントをパブリッシュし、コンシューマーが独立して進化できるようにします。' }
  ]
},
links: {
  technology: [
    { text: '自動車メーカーがイベント駆動型アーキテクチャを活用する方法', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: '動画：コネクテッドカーとリアルタイムモビリティ', url: 'https://solace.com/resources/', icon: 'video' },
    { text: '自動車向け Solace', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  integration: [
    { text: 'テクニカルブリーフ：自動車向け SAP AEM', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: '移行パターン：レガシーからイベントメッシュへ', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'solace.com の自動車ユースケース', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  business: [
    { text: 'モビリティリーダーがリアルタイムデータを活用する方法', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'お客様事例：コネクテッドカープラットフォーム', url: 'https://solace.com/company/customers/', icon: 'doc' },
    { text: '自動車分野で Solace が実現できること', url: 'https://solace.com/industries/transportation/', icon: 'globe' }
  ],
  architect: [
    { text: 'アーキテクチャガイド：自動車向けイベントメッシュ', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'コネクテッドカー向け MQTT：設計パターン', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'PubSub+ 仕様', url: 'https://solace.com/products/event-broker/', icon: 'globe' }
  ]
}

  },

  "manufacturing-cpg": {

stories: [
  {
    id: 'mc1',
    technology: {
      headline: 'グローバル食品メーカーが100以上の工場と300の流通センターをリアルタイムイベントメッシュで接続 — Industry 5.0 オペレーションを実現',
      outcome: 'Danone は「Cortex」を構築しました — 工場、倉庫、エンタープライズシステムを接続するリアルタイムのイベント駆動型デジタルエコシステム。リアルタイムのインサイトにより、グローバルオペレーション全体でより速くデータ主導の意思決定が可能になっています。',
      detail: 'Cortex 以前は、オンプレミスの工場アプリケーションのデータはサイロ化されており、クラウドサービスとの統合が困難でした。イベントメッシュは現在、AI と分析プラットフォームにリアルタイムでデータをストリーミングし、予測品質、需要センシング、サプライチェーン最適化を実現しています。プラットフォームは非効率なバッチ統合を排除し、大幅なコスト削減を達成しながら自律製造の基盤を構築しています。'
    },
    integration: {
      headline: 'Danone の統合チームが100以上の工場をクラウド分析に接続するリアルタイムデジタルバックボーンを構築 — バッチ統合をイベントストリーミングに置き換え',
      outcome: '統合の課題は、オンプレミスの工場システム（MES、SCADA、品質）をクラウドベースの分析・AI プラットフォームと接続することでした。イベントメッシュがオンプレミスとクラウドをブリッジし、工場システムを書き直すことなくリアルタイムで運用データをストリーミングしています。',
      detail: 'アーキテクチャは SAP AEM をイベント転送レイヤーとして使用し、100以上の生産拠点にわたって SAP と非 SAP システムを接続しています。工場のイベントが Azure ホストの分析と ML モデルに流れます。チームは追加の工場への新しい統合を迅速に展開できるようになりました — 以前は数ヶ月かかっていたカスタム作業が今は設定になっています。'
    },
    business: {
      headline: 'Danone が Industry 5.0 変革を推進 — 100以上の工場と300の流通センターにわたるリアルタイム可視性が AI 主導の意思決定を実現',
      outcome: '工場と流通センターからのリアルタイムデータが、生産スケジュールを最適化し、品質問題を予測し、需要の変化を感知する AI モデルに供給されます。ビジネスは数日ではなく数時間で混乱に対応できます。',
      detail: '非効率なバッチ統合の排除によるコスト削減だけでも大きな価値がありました。しかし戦略的な価値は自律的なオペレーションの基盤 — サプライチェーン全体のリアルタイム信号に基づいて自己最適化できる工場です。Danone はこれを Industry 5.0 ビジョンの核心と位置づけています。'
    },
    architect: {
      headline: 'Danone の Cortex：Azure AI に接続する100以上の工場 MES/SCADA システムへの SAP AEM イベントメッシュ、ハイブリッドオンプレミス/クラウド展開',
      outcome: '工場のオンプレミスイベントブローカーが MES、SCADA、品質データを収集。SAP AEM がイベントを Azure ホストの分析、ML モデル、エンタープライズシステムにルーティング。ハイブリッドアーキテクチャがレイテンシ重視の工場運営をローカルに保ちながら、インテリジェンス向けにクラウドにデータをストリーミングします。',
      detail: 'アーキテクチャはスケール向けに設計：各新工場がローカルブローカーをデプロイしてトピックサブスクリプションを設定することでオンボーディング。サイトごとのカスタム統合コードなし。イベントは双方向に流れます — 工場データがクラウド分析に上がり、最適化シグナルが生産システムに下ります。プラットフォームは SAP システムからのリアルタイムストリーミングとイベント駆動型 CDC の両方をサポートします。'
    }
  },
  {
    id: 'mc2',
    technology: {
      headline: 'グローバル CPG 企業がマスターデータをイベント対応化 — 時間あたり数十万ドルのコストをもたらしていた同期失敗を排除',
      outcome: '複数の CPG メーカーが脆弱なリクエスト/リプライ MDM 同期をイベント駆動型ストリーミングに置き換えました。ある会社では、注文が700%急増したことで既存の Azure Service Bus と iPaaS プラットフォームが注文を重複・損失させ、時間あたり数十万ドルのコストを発生させました。イベント駆動型メッセージングによってこれらの失敗が排除されました。',
      detail: '別の大手 CPG 企業では、MDM システムが唯一の信頼できる情報源でしたが、エコシステム全体で同期のギャップを生み出すリクエスト/リプライ操作に依存していました。オンプレミスと Azure の両方にイベントブローカーを実装することで、MDM データが一度パブリッシュされてすべてのコンシューマーにリアルタイムで届くハイブリッドイベントメッシュが生まれ、既存の API 主導アプローチをストリーミング機能で補完しています。'
    },
    integration: {
      headline: 'CPG 統合チームがバッチ MDM 同期をイベントストリーミングに置き換え — 一度のパブリッシュですべてのシステムをリアルタイム更新',
      outcome: 'パターンは一貫しています：以前バッチまたはリクエスト/リプライで同期されていた MDM データが今はイベントとしてパブリッシュされます。製品データ、顧客データ、価格がポイントツーポイント接続なしに ERP、eコマース、CRM、パートナーシステムに同時に流れます。',
      detail: 'ある会社では、統合チームがデータセンターと Azure クラウドの両方に Solace イベントブローカーをデプロイし、リアルタイムストリーミングで統合プラットフォームを強化するハイブリッドイベントメッシュを作成しました。別の会社では、ERP と製品ライフサイクル管理間の複雑なポイントツーポイント統合が集中型イベントバックボーンに置き換えられました。パートナーとの EDI トランザクションも同じプラットフォームを流れます。'
    },
    business: {
      headline: '飲料会社が確実な配信で脆弱なメッセージングを置き換えることで、時間あたり数十万ドルの注文重複・損失を防止',
      outcome: '主要市場からの注文が700%急増して既存のメッセージングプラットフォームを直撃したとき、注文が重複・損失しました。サプライチェーンへの影響は数日間継続しました。保証配信を持つイベント駆動型メッセージングをデプロイしてから、注文の急増が確実に処理されています — 収益の損失も、サプライチェーンの混乱もありません。',
      detail: 'ビジネスはシンプルに表現しました：彼らは IT 企業ではなく飲料会社です。常時の運用管理を必要とせずにバーストを確実に処理するメッセージングプラットフォームが必要でした。イベントメッシュはそれを提供します — 需要スパイクを吸収し、配信を保証し、ビジネスが製品の製造と販売に集中できるようにします。'
    },
    architect: {
      headline: 'CPG 向けハイブリッドイベントメッシュ：MDM ストリーミング向けオンプレミス + Azure イベントブローカー、700%の注文スパイクを処理する保証配信',
      outcome: 'オンプレミスと Azure に展開されたイベントブローカー、イベントメッシュで接続。MDM が一度パブリッシュ — ERP、eコマース、CRM、PLM、パートナー EDI システムが消費。保証された持続性がメッセージロストや重複なしに需要スパイクを処理。',
      detail: 'アーキテクチャは既存の API 主導統合（Boomi、MuleSoft）をリアルタイムと保証配信が重要なユースケースのためのイベントストリーミングで補完します。イベントメッシュパターンにより MDM が信頼できる情報源であり続けながら、すべてのダウンストリームシステムがポーリングやバッチ同期なしに最新データを持てることを保証します。'
    }
  },
  {
    id: 'mc3',
    technology: {
      headline: 'メーカーがレガシー工場システムをモダナイズ — ショップフロアを SAP とクラウド分析に初めてリアルタイム接続',
      outcome: '複数のメーカーがレガシー MES プラットフォーム、バッチ駆動統合、独自ミドルウェアをイベント駆動型アーキテクチャに置き換えました。共通の成果：工場からエンタープライズシステムとクラウド分析にリアルタイムで流れるデータ、予測保守と生産最適化の実現。',
      detail: 'ある化学メーカーでは、レガシー MES が生産ラインからのリアルタイムデータ取り込みを妨げるボトルネックを生んでいました。新しいイベント駆動型 MES がリアルタイムデータ収集、新しいアプリケーションとの迅速な統合、途切れのない生産運用を処理します。自動車部品メーカーでは、ショップフロアシステムが双方向の生産データ、マスターデータ、作業指示イベント交換のために NATS ブリッジ経由で SAP AEM に接続されました。'
    },
    integration: {
      headline: '工場統合チームがショップフロア OT システムを SAP とクラウドにブリッジ — バッチプロセスを双方向イベントフローに置き換え',
      outcome: '統合パターンは、イベントメッシュを通じて運用技術（MES、SCADA、PLC）をエンタープライズ IT（SAP、Azure、Databricks）にブリッジします。生産データが上流に、マスターデータと作業指示が下流に流れます。工場とエンタープライズ間のバッチファイルや手動データ入力はもはや不要です。',
      detail: '某グローバルメーカーでは、地域にわたる11以上のレガシー ERP システムが SAP AEM を通じてイベント対応化され、SAP Integration Suite がトランスフォーメーションを処理しています。別の会社では、Software AG UIM がデータセンターとクラウドにわたって Solace に置き換えられ、異なる事業部門を接続しています。レガシーシステムがファイル出力のみを生成するエッジ環境では、ファイルからイベントへの変換機能が特に価値があります。'
    },
    business: {
      headline: 'メーカーが工場データを戦略資産に変換 — 手動レポートとバッチプロセスをリアルタイム生産可視性で置き換え',
      outcome: '以前はオンプレミス MES システムに閉じ込められていた工場データが、リアルタイムで分析プラットフォームに流れます。生産マネージャーは昨日のスプレッドシートではなくライブダッシュボードを確認します。品質問題が生産後ではなく生産中に発見されます。',
      detail: 'ビジネスケースが積み重なります：予測保守が計画外ダウンタイムを削減し、リアルタイム品質監視がプロセスの早い段階で欠陥を発見し、生産スケジュールが予測ではなく実際の需要信号に基づいて最適化されます。あるメーカーはリアルタイムイベントフローなしには不可能だった機能である自律的な工場搬送にプラットフォームを活用しています。'
    },
    architect: {
      headline: '工場からクラウドへのアーキテクチャ：MQTT と NATS ブリッジ経由で SAP AEM に接続する MES/SCADA、分析向け Azure データレークへの Kafka ブリッジ',
      outcome: 'ショップフロアシステムが MQTT、ネイティブ REST、または NATS ブリッジ経由でイベントブローカーに接続。SAP AEM がエンタープライズ統合（マスターデータ配信、作業指示、調達）を処理。Kafka ブリッジが製造分析のために Azure Data Lake と Databricks に供給。アーキテクチャはオンプレミス工場、企業データセンター、クラウドにまたがります。',
      detail: '主要パターン：レガシーエッジシステム向けファイルからイベントへの変換、ショップフロアプロトコル向け NATS ブリッジ、ECC/S4HANA 向け SAP イベント対応アドオン、複数地域 ERP インスタンスからの CDC。3層展開（工場エッジ、企業 DC、クラウド）が動的メッセージルーティングで接続。各層がその環境に適したワークロードを処理 — エッジで低レイテンシ OT、DC でエンタープライズ統合、クラウドで弾力的な分析。'
    }
  }
],

values: {
  technology: [
    { title: 'Industry 5.0 の基盤', text: '工場、倉庫、エンタープライズシステムをリアルタイムイベントメッシュで接続。AI 主導製造、予測品質、自律オペレーションのためのインフラ。' },
    { title: '複雑さなしの SAP 統合', text: 'SAP AEM がカスタム ABAP 開発なしに S/4HANA と ECC をイベント対応化。マスターデータ、生産イベント、調達がどのコンシューマーにもイベントとして流れます。' },
    { title: '需要スパイクを確実に処理', text: '保証配信がメッセージロストや重複なしに700%の注文急増を吸収。需要がピークに達したときにメッセージングプラットフォームがボトルネックになるべきではありません。' },
    { title: '生産を止めずにモダナイズ', text: 'レガシー MES、Software AG、Oracle SOA、バッチシステムを段階的にイベント駆動型フローにブリッジ。大規模移行なし、生産ダウンタイムなし。' }
  ],
  integration: [
    { title: 'OT と IT をブリッジ', text: '工場ショップフロアシステム（MES、SCADA、PLC）は MQTT と独自プロトコルを使用。エンタープライズシステムは JMS と REST を使用。一つのイベントブローカーが両方の世界をネイティブに接続。' },
    { title: 'SAP のイベント対応化', text: 'SAP イベント対応アドオン、SAP AEM、SAP Integration Suite が連携。マスターデータが一度パブリッシュ — 生産、eコマース、CRM、パートナーシステムが同時に消費。' },
    { title: 'iPaaS + イベントブローカーパターン', text: 'API オーケストレーションに Boomi または MuleSoft、保証された非同期メッセージングに Solace。組み合わせがエンタープライズ統合とリアルタイム工場データの両方を処理。' },
    { title: 'マルチリージョン ERP 統合', text: 'イベントメッシュが SAP 統合中に11以上の地域 ERP インスタンスを接続し、データフローを正規化。統合を維持しながら地域を段階的に移行。' }
  ],
  business: [
    { title: 'リアルタイムサプライチェーン可視性', text: '100以上の拠点にわたって材料、生産、流通をリアルタイムで追跡。需要センシングと AI 主導最適化が手動予測を置き換えます。' },
    { title: 'コストのかかる統合失敗の排除', text: '注文損失、重複トランザクション、バッチ同期ギャップは実際のコストをもたらします。保証されたイベント配信がこれらの失敗を排除します。' },
    { title: '新機能への迅速な対応', text: '新しい工場統合、パートナーオンボーディング、デジタルサービスが数ヶ月ではなく数日でデプロイ。イベントメッシュがアクセラレーターです。' },
    { title: '予測製造', text: 'リアルタイム生産データが品質予測、保守スケジュール、歩留まり最適化のための ML モデルに供給。事後対応から予測的なオペレーションへ。' }
  ],
  architect: [
    { title: '3層展開', text: '低レイテンシ OT には工場エッジ、エンタープライズ統合には企業 DC、弾力的な分析にはクラウド。すべての層にわたって動的メッセージルーティングで接続。' },
    { title: 'エンタープライズバスとしての SAP AEM', text: 'SAP BTP 内のイベント駆動型統合のための SAP Advanced Event Mesh。保証配信とトピックベースルーティングで SAP と非 SAP システムをブリッジ。' },
    { title: '製造向けマルチプロトコル', text: '工場センサーからは MQTT、ショップフロアシステムからは NATS、レガシー ERP からは JMS、クラウドサービスからは REST。すべて一つのブローカーでネイティブ、プロトコル変換なし。' },
    { title: '分析のための Kafka ブリッジ', text: '運用イベントがリアルタイムユースケースのために PubSub+ を流れ、製造分析とデータレークのために Kafka、Databricks、Snowflake にブリッジ。' }
  ]
},

links: {
  technology: [
    { text: 'Danone が Solace で Industry 5.0 を実現する方法', url: 'https://solace.com/company/customers/danone/', icon: 'doc' },
    { text: '製造向け Solace', url: 'https://solace.com/solutions/industries/manufacturing/', icon: 'globe' },
    { text: 'solace.com の製造リソース', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  integration: [
    { text: 'Danone がイベント駆動型アーキテクチャで Cortex を構築した方法', url: 'https://solace.com/company/customers/danone/', icon: 'doc' },
    { text: 'Solace による SAP 統合', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'iPaaS + イベントブローカーアーキテクチャパターン', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  business: [
    { text: 'Danone 事例：Industry 5.0 変革', url: 'https://solace.com/company/customers/danone/', icon: 'doc' },
    { text: 'メーカーがリアルタイムデータを活用する方法', url: 'https://solace.com/solutions/industries/manufacturing/', icon: 'globe' },
    { text: '製造分野のお客様事例', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  architect: [
    { text: 'アーキテクチャガイド：製造向けイベントメッシュ', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'SAP AEM テクニカルディープダイブ', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' },
    { text: 'PubSub+ Event Broker 仕様', url: 'https://solace.com/products/event-broker/', icon: 'globe' }
  ]
}


  },


  "retail": {

stories: [
  {
    id: 'rt1',
    technology: {
      headline: '欧州の食品スーパーが6,000店舗のワイヤレスデバイスにリアルタイムのマスターデータをストリーミング — あらゆる場所で商品、価格、プロモーション情報を正確に維持',
      outcome: 'この高級食品スーパーは、データセンターから全店舗へのリアルタイムマスターデータ配信を必要としていました。イベント駆動型アーキテクチャが6,000拠点の無線ハンドヘルドデバイスに商品情報、価格設定、プロモーションデータをストリーミングし、すべての店舗が正確で最新の情報を持てるようにしています。',
      detail: 'ディスカウンターが支配する競争の激しい市場で、この小売業者は体験と商品品質で競争しています。リアルタイムのデータ精度は不可欠です：店舗での価格の不一致や商品情報の欠落は、収益とブランドの評判の両方に直接影響します。イベントメッシュは小売業務のペースに対して遅すぎたバッチ駆動のデータ同期を置き換えました。'
    },
    integration: {
      headline: '小売統合チームがバッチデータ同期をリアルタイムイベントストリーミングに置き換え — 数千の店舗にハンドヘルドデバイスから eコマースまで配信',
      outcome: '統合パターンは複数の小売業者で一貫しています：マスターデータ、価格設定、在庫変更が中央システムからイベントとしてパブリッシュされ、すべての店舗、キオスク、デジタルチャネルにリアルタイムで届きます。一夜のバッチ処理を待つ必要がなくなりました。',
      detail: 'ある小売業者では、イベントメッシュがデータセンターから6,000店舗にワイヤレスデバイス経由で接続しています。別の業者では、グローバルイベントメッシュが中国のマーケットプレイス（Alibaba Cloud でホスト）を地域データセンターにリンクしています。ホームセンターチェーンが店舗エッジの ActiveMQ をデータセンターの中央 Solace アプライアンスにブリッジしています。共通のスレッド：本部からエッジへのリアルタイムで信頼性の高い配信。'
    },
    business: {
      headline: '小売業者が本部の意思決定と店舗実行の間のギャップを排除 — 価格変更、プロモーション、商品更新が数秒ですべての拠点に届く',
      outcome: '価格の意思決定が本部で行われると、以前は数時間または一夜のバッチを経てから店舗に届いていました。今は数秒です。プロモーションが数千の拠点で同時に開始されます。顧客がオンライン、アプリ、または店舗スタッフに尋ねるかどうかにかかわらず、商品情報が一貫しています。',
      detail: 'ビジネスへの影響は直接的です：チェックアウトでの価格エラーの減少、より速いプロモーション開始、すべてのチャネルにわたる一貫した顧客体験。国際展開を進める小売業者にとって、イベントメッシュは各国の統合インフラを再構築することなく新しい市場にスケールします。'
    },
    architect: {
      headline: 'ハブから店舗へのイベントメッシュ：トピックベースルーティングで6,000以上のエッジ拠点にマスターデータを配信する中央ブローカー、店舗レベル ActiveMQ ブリッジ付き',
      outcome: 'データセンターの中央イベントブローカーがマスターデータ、価格設定、在庫イベントをパブリッシュ。店舗レベルのシステムがトピック階層で拠点、地域、または商品カテゴリ別にサブスクライブ。一部の小売業者では、店舗レベルのエッジブローカーまたは ActiveMQ インスタンスが中央メッシュにブリッジしています。',
      detail: 'アーキテクチャが大規模なファンアウトを処理：一つのパブリッシュイベントが数千のサブスクライバーに同時に届きます。トピックベースルーティングにより各店舗が関連データのみを受信（その地域、その商品カテゴリ）。マルチクラウド展開がオンプレミスデータセンター、ハイパースケーラーでホストされた eコマースプラットフォーム、さらには Alibaba のようなサードパーティのマーケットプレイスクラウドを接続します。'
    }
  },
  {
    id: 'rt2',
    technology: {
      headline: 'グローバル高級品企業が数千の工場と店舗にわたってイベントメッシュを展開 — 精密製造とパーソナライズされた顧客体験を実現',
      outcome: '世界最大の高級品企業の一つが、リアルタイムのデータ主導型エンタープライズに変革しています。グローバルイベントメッシュが、物理的なものからデジタルのものまで数千の工場と店舗で発生しているイベントとトランザクションに関する情報の流れを促進しています。',
      detail: 'イベント駆動型アプローチは、製造からビスポークの製品、店舗での対話、オンラインでの閲覧まで、すべてのタッチポイントがパーソナライゼーション、在庫配分、サービス提供を知らせるイベントを生成する顧客中心のビジネスモデルを実現します。ある大手ファッション小売業者は、アプリケーションドメイン全体で使用されるエンタープライズ全体の統合機能を構築し、分析ワークロードを処理する Kafka と並行して展開しました。'
    },
    integration: {
      headline: 'ファッション・高級品小売業者がエンタープライズ全体のイベントバックボーンを構築 — 店舗 POS、eコマース、サプライチェーン、製造を単一の統合レイヤーで接続',
      outcome: '複数の小売業者が同じパターンに収束しています：断片的なドメイン固有統合を置き換えるエンタープライズイベントバックボーン。あるファッションブランドは、新しいポイントツーポイント接続を構築するのではなく既存のイベントを活用することで新しいアプリケーションの市場投入時間を短縮するためにエンタープライズ統合レイヤーを構築しました。',
      detail: 'ファッションと高級品小売における統合の複雑さは大きい：季節のコレクション、グローバル製造、マルチブランドポートフォリオ、そしてパーソナライゼーションへの顧客の高い期待。イベント駆動型アーキテクチャがこれらのドメインを分離します。新しいブランドの買収がイベントメッシュに深い統合作業なしにオンボーディングできます。Event Portal が非常に大きくなるイベント全体にわたってガバナンスと発見可能性を提供します。'
    },
    business: {
      headline: '高級小売業者がレガシーデータ環境によって引き起こされた2,500万ポンドの過剰在庫を特定 — リアルタイムイベントでそれを解決',
      outcome: '買付、マーチャンダイジング、店舗システム間の貧弱なデータ統合が推定2,500万ポンドの過剰在庫をもたらしました。年間1,500万人以上の来店客を持ち、顧客体験への影響はいかなるものも最優先のインシデントとして扱われます。リアルタイムイベントフローがこれまでサイロ化されていたシステムを接続しています。',
      detail: 'ビジネスケースは在庫を超えます：サプライヤーオンボーディングの複雑さがプレミアムブランドの供給を躊躇させるリスクを生み出していました。イベントを通じた調達、マーチャンダイジング、店舗運営間のデータフローを合理化することで、在庫問題とサプライヤー体験の両方が同時に改善します。'
    },
    architect: {
      headline: 'グローバル小売イベントメッシュ：POS、eコマース、製造、CRM を接続するマルチブランド・マルチ国展開、Kafka ブリッジによる分析',
      outcome: 'アーキテクチャは複数のブランドと国にわたる製造施設、流通センター、物理店舗、デジタルチャネルに及びます。POS イベント、オンライントランザクション、在庫変動、製造マイルストーンがすべてイベントメッシュを流れます。Kafka が分析ワークロード向けに並行展開されています。',
      detail: '主要なアーキテクチャ上の決定：イベントメッシュが運用統合（リアルタイム、保証配信）を処理し、Kafka が分析消費（データレークへの高スループットストリーミング）を処理します。Event Portal がイベント全体のガバナンスを提供します。マルチプロトコルサポートが店舗のレガシー POS システム（JMS）、モダンなマイクロサービス（REST）、IoT デバイス（MQTT）を接続します。'
    }
  },
  {
    id: 'rt3',
    technology: {
      headline: '小売業者がレガシーミドルウェア — TIBCO、BizTalk、WebMethods、RabbitMQ — を数千の店舗接続にスケールする最新のイベントブローカーに置き換え',
      outcome: '複数の小売業者がスケールできず、リアルタイム要件を満たせなかったレガシーメッセージングプラットフォームから移行しました。ある業者は TCO 削減とマルチクラウド展開を実現するために TIBCO EMS を置き換えました。別の業者は店舗から本部へのリアルタイムデータ交換にスケールできなかった Microsoft BizTalk を置き換えました。3番目の業者は1,800店舗の拠点を接続するために WebMethods を置き換えました。',
      detail: '移行のドライバーは小売業者間で驚くほど一致しています：現代の小売が要求するボリュームやスピードを処理できないレガシープラットフォーム、クラウド採用を制限するベンダーロックイン、ベンダーサポートが低下する中での増大するメンテナンスコスト。イベントメッシュアプローチは既存のアプリケーション投資を保護しながら新しいリアルタイム機能を実現する移行パスを提供します。'
    },
    integration: {
      headline: '小売統合チームが TIBCO、BizTalk、WebMethods からイベント駆動型プラットフォームに移行 — 店舗運営を中断することなく',
      outcome: '統合チームは店舗が運営を継続しながらミドルウェアの置き換えを実施しました。マルチプロトコルサポートにより既存の JMS アプリケーションが書き直しなしに接続できました。ある小売業者では、同期 API 主導アプローチ（MuleSoft）からイベント駆動型パターンへの移行が、COVID 期間中の変動する売上がシンクロニーのみの統合の限界を露わにしたことで推進されました。',
      detail: 'あるホームセンターチェーンでは、イベントブローカーがサポート終了に近づいてリアルタイム要件を満たせなかった Microsoft BizTalk を置き換えました。ある急速オイル交換フランチャイズでは、1,800の店舗がリモートクライアントとして中央ブローカーに接続し、マスターデータ、従業員情報、コマンドアンドコントロール更新を受信しています。ある写真印刷小売業者は、ピーク注文期間中に確実にスケールできなかった RabbitMQ を置き換えました。'
    },
    business: {
      headline: 'あるオンライン小売業者がメッセージングプラットフォームが配送時間を保証できなかったためにチェックアウトで顧客を失っていた — それを置き換えることで収益を回収',
      outcome: '顧客がカートを放棄していました。ピーク期間中に印刷写真の配送時間を計算・保証できなかったためです。レガシーの RabbitMQ プラットフォームは確実にスケールできませんでした。イベント駆動型メッセージングに置き換えた後、リアルタイムの配送時間計算と予測可能なフルフィルメントが失われた収益を回収しました。',
      detail: 'パターンが小売全体で繰り返されます：レガシーメッセージングの限界が収益に直接影響。ある大手ホームセンター小売業者では、統合プラットフォームがデジタルトランスフォーメーションの妨げとなり、ブランドの評判が危険にさらされていました。あるカーサービスフランチャイズでは、店舗システムの更新と顧客履歴の検索が不確実でした。いずれの場合も、置き換えのビジネスケースは明確でした：メッセージングプラットフォームが IT だけでなくビジネスのボトルネックになっていました。'
    },
    architect: {
      headline: '小売でのレガシーミドルウェア移行：TIBCO EMS、BizTalk、WebMethods、RabbitMQ をデータセンター、クラウド、1,800以上の店舗エッジノードにわたるイベントメッシュに置き換え',
      outcome: 'アーキテクチャパターン：データセンターまたはクラウドの中央ブローカー、店舗拠点がクライアントまたはエッジブローカー経由で接続。マルチプロトコルサポート（レガシーには JMS、モダンには REST、IoT には MQTT）が段階的な移行を可能にします。ダウンタイムが売上損失を意味する小売業者向けのアクティブ-アクティブ DR。',
      detail: '主要な技術的ドライバー：BizTalk のサポート終了とスケール不足；最新の代替と比較した TIBCO EMS の TCO；マルチクラウドでの WebMethods の限界；ピーク負荷下での RabbitMQ のスケーリング失敗。置き換えアーキテクチャは通常、API オーケストレーションのための既存の iPaaS（MuleSoft、Boomi）とイベントブローカーを組み合わせ、シンクロニーのみの統合が失敗していたユースケースにイベントストリーミングを追加します。'
    }
  }
],

values: {
  technology: [
    { title: 'すべての店舗にリアルタイム', text: 'マスターデータ、価格設定、在庫イベントが数秒で数千の店舗拠点に届きます。一夜のバッチ同期や手動更新はもはや不要です。' },
    { title: 'オムニチャネルを複雑さなしに', text: '単一のイベントバックボーンを通じて店舗 POS、eコマース、モバイルアプリ、マーケットプレイスチャネルを接続。すべてのチャネルがリアルタイムで同じデータを参照します。' },
    { title: 'レガシーミドルウェアを安全に置き換え', text: '店舗運営を中断することなく TIBCO、BizTalk、WebMethods、RabbitMQ から移行。マルチプロトコルサポートにより既存のアプリケーションが書き直しなしに接続できます。' },
    { title: 'ピークと成長にスケール', text: 'ブラックフライデーのスパイク、国際展開、マーケットプレイス立ち上げをインフラのボトルネックなしに処理。イベントメッシュがビジネスとともにスケールします。' }
  ],
  integration: [
    { title: 'ハブから店舗への配信', text: '中央ブローカーがパブリッシュし、店舗がトピック階層で拠点とカテゴリでサブスクライブ。一つのイベントから数千のエンドポイントへの大規模なファンアウト。' },
    { title: 'iPaaS + イベントブローカー', text: 'MuleSoft、Boomi、または SAP Integration Suite と Solace を組み合わせる。同期ユースケースには API オーケストレーション、リアルタイム配信と保証配信にはイベントメッシュ。' },
    { title: 'エッジからクラウドへの接続', text: '店舗レベルのブローカーまたはクライアントが中央メッシュに接続。ActiveMQ ブリッジ、リモート Java クライアント、または直接クラウド接続 — 店舗プロファイルごとに柔軟。' },
    { title: 'ガバナンスのための Event Portal', text: 'イベント全体が店舗、ブランド、チャネルにわたって成長するにつれて、Event Portal が発見可能性とガバナンスを提供。チームが新しい統合を構築するのではなく既存のイベントを見つけて再利用します。' }
  ],
  business: [
    { title: '価格・在庫エラーの排除', text: 'すべての店舗とチャネルにわたるリアルタイムデータ同期。チェックアウトでの価格不一致や在庫の不整合が顧客の信頼を損なわなくなります。' },
    { title: 'プロモーション開始の迅速化', text: '数千の拠点とデジタルチャネルで同時にキャンペーンを開始。意思決定から実行まで数日ではなく数分で。' },
    { title: '過剰在庫の削減', text: '買付、マーチャンダイジング、店舗システムをリアルタイムで接続。より良い可視性がより良い配分決定を促し、コストのかかる過剰在庫を削減します。' },
    { title: 'レガシー障害からの失われた収益の回収', text: '不確実な配送見積もりによるカート放棄、メッセージング障害による注文損失、遅延したプロモーション — 最新のイベントインフラがこれらの収益の漏れを排除します。' }
  ],
  architect: [
    { title: '小売のためのトピック階層', text: '店舗 ID、地域、商品カテゴリ、イベントタイプ — 細粒度トピックサブスクリプションにより各店舗が関連データのみを受信。帯域幅を削減しセキュリティを簡素化します。' },
    { title: 'Kafka と並行するイベントメッシュ', text: '運用統合には イベントメッシュ（保証配信、店舗接続）。分析には Kafka（データレークへの高スループットストリーミング）。同じイベント、異なる消費パターン。' },
    { title: 'レガシーとモダンのためのマルチプロトコル', text: 'レガシー POS からは JMS、マイクロサービスからは REST、IoT センサーと RFID からは MQTT。すべてが変換レイヤーなしにイベントブローカーにネイティブに接続。' },
    { title: 'ゼロダウンタイムのためのアクティブ-アクティブ', text: '小売は営業時間中のメッセージング停止を許容できません。自動フェイルオーバーとゼロメッセージロストを持つデータセンター間のアクティブ-アクティブ展開。' }
  ]
},

links: {
  technology: [
    { text: '小売向け Solace', url: 'https://solace.com/solutions/industries/retail/', icon: 'globe' },
    { text: 'solace.com の小売リソース', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: '小売業者がイベント駆動型アーキテクチャを活用する方法', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  integration: [
    { text: '小売向け Solace', url: 'https://solace.com/solutions/industries/retail/', icon: 'globe' },
    { text: 'アーキテクトガイド：小売デジタル変革', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: 'Solace による SAP 統合', url: 'https://solace.com/solutions/technology/sap/', icon: 'globe' }
  ],
  business: [
    { text: '小売向け Solace', url: 'https://solace.com/solutions/industries/retail/', icon: 'globe' },
    { text: 'リアルタイムデータが小売を変革する方法', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: '小売分野のお客様事例', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  architect: [
    { text: 'アーキテクトガイド：小売向け EDA', url: 'https://solace.com/resources/', icon: 'doc' },
    { text: '小売向け Solace', url: 'https://solace.com/solutions/industries/retail/', icon: 'globe' },
    { text: 'イベントブローカー仕様', url: 'https://solace.com/products/event-broker/', icon: 'globe' }
  ]
}


  },


  "financial": {

stories: [
  {
    id: 'fs1',
    technology: {
      headline: 'トップ10のグローバル投資銀行が6つのデータセンターにわたって1日あたり1,180億件のメッセージをストリーミング — メッセージロストゼロ',
      outcome: 'この銀行は世界の金融センターに50以上のイベントブローカーアプライアンスを展開し、低レイテンシ取引プラットフォームのためのグローバルイベントメッシュを形成しました。インフラは毎日数万のアプリケーション接続にわたって1,180億件以上のメッセージを処理しています — 完全にシームレスに、ゼロデータロストで。',
      detail: '複数のティア1銀行が同じパターンに収束しています：FX、株式、債券、ポストトレード処理にわたるフロント、ミドル、バックオフィスアプリケーションを接続するグローバルイベントメッシュ。イベントメッシュは現代の取引ボリュームにスケールできず、クラウド移行をサポートできなかったレガシーメッセージングインフラ（TIBCO Rendezvous、ActiveMQ Nirvana）を置き換えます。'
    },
    integration: {
      headline: '投資銀行が TIBCO と Nirvana をグローバルイベントメッシュに置き換え — すべての取引デスクにわたってフロント、ミドル、バックオフィスを接続',
      outcome: '複数のグローバル銀行の統合チームが TIBCO Rendezvous、TIBCO EMS、Nirvana から Solace イベントブローカーに移行しました。イベントメッシュが市場データ配信、取引執行、ポストトレード処理、規制報告を単一のインフラレイヤーで処理しています。',
      detail: 'ある銀行では、複数の内部チームが異なる目的で Solace を使用しています：内部市場データ配信、プライマリーマーケット向け WebSocket 接続、セールス向けユースケース、デジタル通知プラットフォーム。共通インフラが運用の複雑さとコンプライアンスリスクを生んでいたメッセージング製品の増殖を排除します。'
    },
    business: {
      headline: 'グローバル銀行が1秒あたり130万件のメッセージを24時間処理 — イベントメッシュが障害とコンプライアンス違反を引き起こしていたインフラを置き換え',
      outcome: 'レガシーメッセージングインフラは運用上のリスクを生み出していました：ピーク取引中の障害、マルチキャストベースのメッセージングからの規制コンプライアンス違反、新しい商品と市場へのスケール不能。イベントメッシュはビジネス成長をサポートしながらこれらのリスクを排除しました。',
      detail: 'キャピタルマーケットにおけるビジネスケースはコスト削減と同様にリスク低減です。取引時間中のメッセージング停止は収益と規制ペナルティで数百万ドルのコストになる可能性があります。イベントメッシュは取引運営が必要とする信頼性、低レイテンシ、コンプライアンスに配慮したアーキテクチャを提供します。'
    },
    architect: {
      headline: 'グローバル取引イベントメッシュ：6つのデータセンターにわたる50以上のアプライアンス、マイクロ秒レイテンシ、ゼロメッセージロスト、Nirvana と TIBCO 移行付き',
      outcome: '世界中の金融センターに Solace イベントブローカーアプライアンスをデプロイし、マイクロ秒レイテンシでイベントメッシュで接続。市場データ配信、注文ルーティング、ポストトレード、規制報告を処理。マルチプロトコルサポート（JMS、AMQP、REST、WebSocket）がレガシープラットフォームからの段階的な移行を可能にします。',
      detail: 'アーキテクチャは規制コンプライアンス問題を引き起こしたマルチキャストベースのメッセージング（TIBCO Rendezvous）と、スケールできなかった独自プラットフォーム（Nirvana、ActiveMQ）を置き換えます。ハードウェアアプライアンスが価格に敏感なワークロードに決定論的低レイテンシを提供。ソフトウェアブローカーがクラウドのあまりレイテンシに敏感でないワークロードを処理。どちらも同じイベントメッシュで接続されます。'
    }
  },
  {
    id: 'fs2',
    technology: {
      headline: '小売銀行と決済処理会社が脆弱な ESB とバッチシステムをイベント駆動型プラットフォームに置き換え — リアルタイム決済をスケールで処理',
      outcome: '複数の銀行と決済会社がレガシー ESB、バッチプロセス、REST のみのアーキテクチャからイベント駆動型プラットフォームに移行しました。ある銀行は国家決済義務をサポートするためにイベント駆動型マイクロサービスを採用し、ゼロメッセージロストが最重要要件でした。ある決済ネットワークがすべての事業部門にわたるイベンティングバックボーンになりました。',
      detail: '共通のドライバー：レガシー統合が現代のデジタルバンキングに必要なボリューム、スピード、信頼性を処理できませんでした。ある銀行は UPI チャネルで毎秒200トランザクションで失敗していました。別の銀行はピーク負荷下でクライアントリクエストを失っていました。イベント駆動型アーキテクチャがスケーリング問題を解決しながら、バッチシステムが提供できなかったリアルタイム顧客体験を実現しました。'
    },
    integration: {
      headline: '銀行統合チームがモノリシック ESB からイベント駆動型マイクロサービスに移行 — 統合サイクルを7日以上からほぼリアルタイムに短縮',
      outcome: 'レガシー銀行が直面した共通の問題：コアシステムが相互接続されていなかったため、新しい製品、サービス、サードパーティ統合の導入に7日以上かかっていました。イベント駆動型アーキテクチャがこれらのシステムを分離し、コアバンキング、デジタルチャネル、パートナーエコシステム間のほぼリアルタイムの統合を実現しました。',
      detail: 'ある主要アジアの銀行では、モノリシックアプリケーションからイベント駆動型マイクロサービスへの切り替えが、ゼロメッセージロストを要求する国家決済義務によって引き起こされました。Singaporeの決済ネットワークでは、新しい決済プロバイダーのオンボーディングが非常に遅かった — イベント駆動型バックボーンにより新しいプロバイダーのオンボーディングが設定作業になりました。ラテンアメリカの銀行はバンキングプラットフォームのために密結合した REST/API ゲートウェイパターンをイベントストリーミングに置き換えました。'
    },
    business: {
      headline: '遅いデジタル体験で顧客を失っていた銀行がリアルタイムで決済と更新を処理 — 統合スピードを競争優位に転換',
      outcome: '顧客満足度がレガシー統合によって直接影響を受けていました：請求書追跡がリアルタイムでなく、デジタルバンキングのインタラクションが遅く、ピーク負荷での決済失敗が顧客を競合他社に追いやっていました。イベント駆動型アーキテクチャがリアルタイムをデフォルトにしました。',
      detail: '小売銀行にとってのビジネスケースは顧客維持とデジタル競争力です。フィンテックが即時体験の期待を設定しています。このスピードに対応できないレガシー銀行は顧客を失います。イベント駆動型統合が現代の顧客が期待するリアルタイム通知、即時残高更新、シームレスなパートナー統合を実現します。'
    },
    architect: {
      headline: '小売銀行モダナイゼーション：イベント駆動型マイクロサービス、ハイブリッドオンプレミス/クラウド、ゼロメッセージロスト保証を持つ ESB から EDA への移行',
      outcome: 'アーキテクチャがモノリシック ESB をイベント駆動型マイクロサービスに置き換えます。コアバンキングシステムがデジタルチャネル、パートナー統合、分析によって消費されるイベントをパブリッシュします。ハイブリッド展開がオンプレミスのコアバンキングインフラとクラウドホストのデジタルサービスにまたがります。',
      detail: '主要パターン：決済処理のためのイベント駆動型マイクロサービス（モノリシックトランザクションマネージャーの置き換え）、イベント対応コアバンキング（口座・トランザクションイベントのパブリッシュ）、オンプレミスコアをクラウドデジタルチャネルに接続するハイブリッドイベントメッシュ。決済フローにはゼロメッセージロストが交渉不可能です。マルチプロトコルサポートがレガシー JMS ベースのコアバンキングとモダンな REST と WebSocket のデジタルチャネルを接続します。'
    }
  },
  {
    id: 'fs3',
    technology: {
      headline: '証券取引所と取引プラットフォームがマッチングエンジンのコアにイベントブローカーを展開 — マイクロ秒精度で市場データを配信',
      outcome: '複数の取引所が Solace を取引プラットフォームの重要なインフラとして使用しています。ある取引所は次世代マッチングエンジンシステムの一部としてイベントブローカーをデプロイし、リアルタイムの災害復旧レプリケーションを処理しています。別の取引所はメンバーブローカーへの市場データ配信に使用し、中小企業の参入障壁を下げています。',
      detail: '取引プラットフォームと FX ブローカーは類似の課題に直面しています：レガシーメッセージングインフラ（多くの場合 ActiveMQ）が新しいサイト、商品、顧客オンボーディングにスケールできません。ある FX 取引プラットフォームは複数のグローバルサイトにわたって ActiveMQ を置き換え、ビジネスが要求する低レイテンシで価格設定とポストトレードデータをストリーミングするイベントメッシュを形成しました。'
    },
    integration: {
      headline: '取引所と取引プラットフォームが ActiveMQ と独自メッセージングをイベントメッシュに置き換え — マッチングエンジン、市場データ、ポストトレードをサイト間で接続',
      outcome: '取引所と取引会社の統合チームが ActiveMQ、独自メッセージング、ポイントツーポイント接続からイベントメッシュアーキテクチャに移行しました。結果：単一プラットフォームでのクロスサイト接続を持つ市場データ配信、取引執行、ポストトレード処理。',
      detail: 'ある取引所では、イベントブローカーが主要なマッチングエンジンデータのリアルタイム DR レプリケーションを処理しています。ある FX 取引会社では、ActiveMQ からの移行により以前は不可能だった新しいサイトと商品のデプロイが可能になりました — 数週間かかっていた顧客オンボーディングが数日になりました。イベントメッシュパターンがプライマリ、DR、国際サイトをシームレスに接続します。'
    },
    business: {
      headline: '取引所がメンバーブローカーの参入障壁を引き下げ — 取引プラットフォームが強制的な ActiveMQ 移行を競争上のアップグレードに転換',
      outcome: '取引所にとって、効率的な市場データ配信は高価なフィルタリングインフラを購入できない中小ブローカーにも市場をより開かれたものにします。取引プラットフォームにとって、新しい顧客と商品を迅速にオンボーディングできる能力が収益成長を直接推進します。',
      detail: 'キャピタルマーケットにおいて、メッセージングインフラはバックオフィスの懸念ではありません — それはどれだけ多くの顧客にサービスを提供できるか、どれだけ多くの商品を取引できるか、どれだけ速く新しい市場に参入できるかを直接決定します。イベントメッシュアーキテクチャがインフラを制約からアクセラレーターに変えます。'
    },
    architect: {
      headline: '取引所グレードアーキテクチャ：マッチングエンジンインフラのイベントブローカー、リアルタイム DR レプリケーション、FX とデリバティブのためのマルチサイトイベントメッシュ',
      outcome: '決定論的低レイテンシのための取引所マッチングエンジンインフラへのハードウェアアプライアンス展開。リアルタイム DR レプリケーションによりゼロデータロスを保証。プライマリ、DR、国際取引会場を接続するマルチサイトイベントメッシュ。何千ものメンバー接続への市場データファンアウト。',
      detail: '主要アーキテクチャパターン：レイテンシ重視のマッチングエンジン統合のためのアプライアンス、メンバーへの市場データ配信のためのソフトウェアブローカー、マルチ会場取引のためのクロスサイトイベントメッシュ。KRX Exture 3.0 次世代システムは2014年の Exture+ から現在のシステムまで複数のプラットフォーム世代を通じた継続的な採用を表しています。'
    }
  }
],

values: {
  technology: [
    { title: '取引のためのマイクロ秒レイテンシ', text: 'ハードウェアアプライアンスが価格に敏感なワークロードに決定論的低レイテンシを提供。ソフトウェアブローカーがあまり重要でないワークロードを処理。どちらも同じイベントメッシュで接続。' },
    { title: 'ゼロメッセージロスト保証', text: '決済処理、取引執行、規制報告は保証配信を要求します。ゼロ RPO を持つ組み込みの HA/DR がトランザクションを絶対に失わないことを保証します。' },
    { title: 'レガシーメッセージングを安全に置き換え', text: 'ライブ取引や決済オペレーションを中断することなく TIBCO Rendezvous、ActiveMQ、Nirvana、独自 ESB から移行。マルチプロトコルサポートが既存のアプリケーション投資を保護します。' },
    { title: 'スタートアップからグローバル銀行まで', text: '同じプラットフォームが毎秒200トランザクションを処理するフィンテックと1日あたり1,180億件のメッセージを処理するティア1銀行を処理します。アーキテクチャがビジネスとともにスケールします。' }
  ],
  integration: [
    { title: '金融サービスのためのマルチプロトコル', text: 'レガシーコアバンキングからの JMS、取引システムからの AMQP、デジタルチャネルからの REST、リアルタイムクライアント更新のための WebSocket。すべてが変換なしにネイティブに接続。' },
    { title: 'ESB から EDA への移行', text: 'モノリシック ESB をイベント駆動型マイクロサービスに置き換え。コアバンキング、決済、取引システムがあらゆるダウンストリームアプリケーションが消費するイベントをパブリッシュします。' },
    { title: '取引のためのグローバルイベントメッシュ', text: '地理をまたいで取引会場、データセンター、クラウドサービスを接続。市場データと注文ルーティングのためのマイクロ秒クロスサイトレイテンシ。' },
    { title: 'ハイブリッドオンプレミスとクラウド', text: 'コアバンキングとマッチングエンジンはオンプレミスに。デジタルチャネルと分析はクラウドで実行。イベントメッシュが保証配信で両方の世界をブリッジします。' }
  ],
  business: [
    { title: 'リアルタイムデジタルバンキング', text: '即時の残高更新、リアルタイム通知、シームレスなパートナー統合。コアバンキングシステムを置き換えることなくフィンテックの顧客体験に対応。' },
    { title: 'リスク低減', text: '取引時間中のメッセージング停止は数百万ドルのコストになります。レガシーマルチキャストからのコンプライアンス違反は規制ペナルティを伴います。イベントメッシュが両方のリスクを排除します。' },
    { title: '市場投入の迅速化', text: '新しい決済プロバイダー、商品、市場が数週間ではなく数日でオンボーディングされます。統合スピードが競争優位性になります。' },
    { title: 'インフラの複雑さの低減', text: 'メッセージング製品（TIBCO、ActiveMQ、Nirvana、IBM MQ）の増殖を単一のイベントメッシュに置き換え。運用、セキュリティ、監査するプラットフォームが少なくなります。' }
  ],
  architect: [
    { title: '決定論的レイテンシのためのアプライアンス', text: 'マイクロ秒のメッセージ配信のための取引インフラへのハードウェアイベントブローカーアプライアンス。レイテンシが重要な金融サービスワークロードのために特別設計。' },
    { title: 'ゼロ RPO のクロスサイト DR', text: 'プライマリと DR サイト間のリアルタイムレプリケーション。マッチングエンジンデータ、取引ステート、決済トランザクションがゼロデータロストで継続的に同期。' },
    { title: '会場をまたぐイベントメッシュ', text: 'オンプレミスの取引フロア、コロケーション施設、クラウド分析、パートナーネットワークを接続。動的メッセージルーティングがクロスサイトトポロジーを自動処理。' },
    { title: '規制対応アーキテクチャ', text: 'コンプライアンス問題のあるマルチキャストをユニキャストメッセージングに置き換え。完全な監査証跡、転送中の暗号化、プラットフォームに組み込まれた SOC-2 コンプライアンス。' }
  ]
},

links: {
  technology: [
    { text: 'RBC Capital Markets 事例', url: 'https://solace.com/company/customers/rbc/', icon: 'doc' },
    { text: '金融サービス向け Solace', url: 'https://solace.com/solutions/industries/financial-services/', icon: 'globe' },
    { text: '金融サービスリソース', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  integration: [
    { text: 'RBC Capital Markets 事例', url: 'https://solace.com/company/customers/rbc/', icon: 'doc' },
    { text: '金融サービス向け Solace', url: 'https://solace.com/solutions/industries/financial-services/', icon: 'globe' },
    { text: 'レガシーミドルウェア移行パターン', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  business: [
    { text: 'RBC Capital Markets 事例', url: 'https://solace.com/company/customers/rbc/', icon: 'doc' },
    { text: '金融サービス向け Solace', url: 'https://solace.com/solutions/industries/financial-services/', icon: 'globe' },
    { text: '金融サービスのお客様事例', url: 'https://solace.com/resources/', icon: 'doc' }
  ],
  architect: [
    { text: 'RBC Capital Markets 事例', url: 'https://solace.com/company/customers/rbc/', icon: 'doc' },
    { text: 'イベントブローカー仕様', url: 'https://solace.com/products/event-broker/', icon: 'globe' },
    { text: '金融サービス向け Solace', url: 'https://solace.com/solutions/industries/financial-services/', icon: 'globe' }
  ]
}


  },
};


// ============ UNIFIED DISPATCHER ============
function getContent(role, industry, lang) {
  var dataset = (lang === 'ja') ? CONTENT_JA : CONTENT_EN;
  var ind = dataset[industry];
  if (!ind) return null;
  return {
    stories: ind.stories.map(function(s) {
      return { id: s.id, subsector: s.subsector || '', headline: s[role].headline, outcome: s[role].outcome, detail: s[role].detail };
    }),
    values: ind.values[role] || [],
    links: ind.links[role] || []
  };
}
