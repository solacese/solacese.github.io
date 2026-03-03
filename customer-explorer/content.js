const CONTENT = {
  aviation: {

stories: [
  {
    id: 'av1',
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

};

function getContent(role, industry) {
  var ind = CONTENT[industry];
  if (!ind) return null;
  return {
    stories: ind.stories.map(function(s) {
      return { id: s.id, headline: s[role].headline, outcome: s[role].outcome, detail: s[role].detail };
    }),
    values: ind.values[role] || [],
    links: ind.links[role] || []
  };
}
