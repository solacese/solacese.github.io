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
    { name: 'SEW-EURODRIVE', url: 'https://solace.com/company/customers/', style: 'font-size:10px;font-weight:600;letter-spacing:0.04em' }
  ],
  retail: [
    { name: 'SCHWARZ / LIDL', url: 'https://solace.com/company/customers/', style: 'font-size:12px;font-weight:700;letter-spacing:0.04em;text-align:center;line-height:1.3' },
    { name: 'EDEKA', url: 'https://solace.com/company/customers/', style: 'font-size:15px;font-weight:700;letter-spacing:0.08em' },
    { name: 'dm-drogerie', url: 'https://solace.com/company/customers/', style: 'font-size:12px;font-weight:600;letter-spacing:0.04em' },
    { name: 'HORNBACH', url: 'https://solace.com/company/customers/', style: 'font-size:12px;font-weight:700;letter-spacing:0.06em' },
    { name: 'MENARDS', url: 'https://solace.com/company/customers/', style: 'font-size:13px;font-weight:700;letter-spacing:0.06em' },
    { name: 'EUROSPIN', url: 'https://solace.com/company/customers/', style: 'font-size:13px;font-weight:600;letter-spacing:0.06em' },
    { name: 'COATES HIRE', url: 'https://solace.com/company/customers/', style: 'font-size:11px;font-weight:600;letter-spacing:0.06em' },
    { name: 'LES MOUSQUETAIRES', url: 'https://solace.com/company/customers/', style: 'font-size:9px;font-weight:600;letter-spacing:0.04em;text-align:center;line-height:1.3' }
  ],
  financial: [
    { name: 'RBC CAPITAL MARKETS', url: 'https://solace.com/company/customers/rbc/', style: 'font-size:9px;font-weight:700;letter-spacing:0.04em;text-align:center;line-height:1.3' },
    { name: 'BARCLAYS', url: 'https://solace.com/company/customers/', style: 'font-size:13px;font-weight:700;letter-spacing:0.08em' },
    { name: 'LSE', url: 'https://solace.com/company/customers/', style: 'font-size:20px;font-weight:800;letter-spacing:0.04em' },
    { name: 'KRX', url: 'https://solace.com/company/customers/', style: 'font-size:20px;font-weight:800;letter-spacing:0.04em' },
    { name: 'BSE INDIA', url: 'https://solace.com/company/customers/', style: 'font-size:13px;font-weight:700;letter-spacing:0.06em' },
    { name: 'TSX', url: 'https://solace.com/company/customers/', style: 'font-size:20px;font-weight:800;letter-spacing:0.04em' },
    { name: 'AKUNA CAPITAL', url: 'https://solace.com/company/customers/', style: 'font-size:11px;font-weight:600;letter-spacing:0.04em;text-align:center;line-height:1.3' },
    { name: 'CIBC', url: 'https://solace.com/company/customers/', style: 'font-size:18px;font-weight:800;letter-spacing:0.04em' }
  ]
};

var LOGO_EXTRA_COUNT = {
  aviation: 20,
  logistics: 20,
  rail: 20,
  automotive: 20,
  "manufacturing-cpg": 30,
  retail: 40,
  financial: 90
};

var ARCHITECTURE = {
  aviation: {
    title: '航空イベントメッシュパターン',
    description: '航空エコシステム全体のシステムがイベントメッシュを通じてパブリッシュとサブスクライブを行います。任意のノードをクリックしてデータフローを確認してください。',
    left: [
      { id: 'atm', name: '航空交通管理', proto: 'AMQP \u00B7 SWIM', flows: '\u2190 \u2192 フライトデータ、空域イベント',
        tip: { t: '航空交通管理', d: 'フライトスケジュール、監視データ、空域調整。Eurocontrol は AMQP を使用して Solace 経由で40以上の国家機関を双方向接続しています。', f: 'パブリッシュ：フライト計画、監視 \u00B7 サブスクライブ：国境アラート、計算済み航路' }},
      { id: 'airline', name: '航空会社運営', proto: 'JMS \u00B7 REST', flows: '\u2190 \u2192 乗務員、混乱、ロイヤルティ',
        tip: { t: '航空会社運営', d: '乗務員スケジューリング、混乱の連鎖、ロイヤルティ更新、予約イベント。航空会社が100以上のレガシー TIBCO/IBM MQ インスタンスをハイブリッドイベントメッシュに置き換えました。', f: 'パブリッシュ：混乱、スケジュール変更 \u00B7 サブスクライブ：気象、ゲート割り当て、乗務員空き状況' }},
      { id: 'airport', name: '空港地上業務', proto: 'MQTT \u00B7 REST', flows: '\u2190 \u2192 ゲート、手荷物、旅客フロー',
        tip: { t: '空港地上業務', d: '手荷物システム、ゲート管理、小売、地上交通。主要空港がリアルタイム旅客フローのためにサイロ化した IBM ミドルウェアを置き換えるために Solace を使用しています。', f: 'パブリッシュ：ゲート変更、手荷物状況 \u00B7 サブスクライブ：フライト更新、セキュリティアラート' }},
      { id: 'iot', name: 'IoT・センサー', proto: 'MQTT', flows: '\u2192 テレメトリ、気象、滑走路',
        tip: { t: 'IoT・センサーネットワーク', d: '滑走路センサー、気象観測所、ドローン UTM フィード、コネクテッド地上車両。サブ秒レイテンシでの高容量 MQTT テレメトリ。', f: 'パブリッシュ：テレメトリ、気象、位置 \u00B7 サブスクライブ：コマンド、しきい値' }}
    ],
    right: [
      { id: 'national', name: '国家機関', proto: 'AMQP', flows: '\u2190 \u2192 国境を越えた調整',
        tip: { t: '国家機関', d: '各国が特定のトピック（例：自国空域のフライト）をサブスクライブし、ローカルデータをパブリッシュします。新しい機関のオンボーディングはコードではなく設定です。', f: 'パブリッシュ：国家データ、ローカルアラート \u00B7 サブスクライブ：大陸フィード、空域でフィルタリング' }},
      { id: 'pax', name: '旅客体験', proto: 'WebSocket \u00B7 REST', flows: '\u2190 状況、ゲート \u2192 フィードバック',
        tip: { t: '旅客体験', d: 'WebSocket を通じてモバイルアプリ、空港ディスプレイ、キオスクへのリアルタイムプッシュ。ゲート変更、手荷物追跡、遅延アラートが数秒で旅客に届きます。', f: 'パブリッシュ：フィードバック、チェックイン \u00B7 サブスクライブ：フライト状況、ゲート、手荷物追跡' }},
      { id: 'analytics', name: '分析・データレイク', proto: 'Kafka ブリッジ', flows: '\u2190 イベント \u2192 強化されたシグナル',
        tip: { t: '分析・データレイク', d: '予測保守、需要予測、ダッシュボードのために Kafka とクラウドデータレーク（Snowflake、Azure Synapse）にブリッジされたイベントストリーム。', f: 'パブリッシュ：強化されたシグナル、予測 \u00B7 サブスクライブ：生の運用イベント' }},
      { id: 'sap', name: 'SAP / ERP', proto: 'SAP AEM', flows: '\u2190 \u2192 調達、MRO、財務',
        tip: { t: 'SAP / ERP 統合', d: 'SAP Advanced Event Mesh が調達、MRO 作業指示、財務をリアルタイムの運用トリガーに接続。保守アラートが部品注文を自動的にトリガーします。', f: 'パブリッシュ：PO 確認、在庫 \u00B7 サブスクライブ：保守トリガー、運用イベント' }}
    ],
    deploy: [
      { id: 'd-prem', label: 'オンプレミス', sub: 'エアギャップ / 安全性重視', tip: 'ANS プロバイダーや防衛などの安全性重視の環境向け。クラウド依存なしのセキュア施設内のソフトウェアブローカー。' },
      { id: 'd-cloud', label: 'Solace Cloud', sub: 'AWS \u00B7 Azure \u00B7 GCP', tip: '99.99% SLA の自動スケーリングマネージドサービス。ほとんどの航空会社と空港のモダナイゼーションプロジェクトがここに展開。' },
      { id: 'd-edge', label: 'エッジ', sub: '飛行場 / 低レイテンシ', tip: 'サブミリ秒のローカル処理のための飛行場サイドの軽量ブローカー。動的メッセージルーティング経由でより広いメッシュに接続。' }
    ]
  },

  logistics: {
    title: '物流イベントメッシュパターン',
    description: '倉庫、フリート、港湾、パートナーシステムがメッシュを通じて双方向にイベントを交換します。',
    left: [
      { id: 'port', name: '港湾自動化', proto: 'MQTT \u00B7 ネイティブ', flows: '\u2190 \u2192 AGV コマンド、クレーンテレメトリ',
        tip: { t: '港湾自動化', d: '自動搬送車、ヤードクレーン、岸壁クレーンがプライベート 5G を通じてイベントブローカー経由で通信。安全性重視のコマンドにサブミリ秒レイテンシ。', f: 'パブリッシュ：機器テレメトリ、ステータス \u00B7 サブスクライブ：移動コマンド、スケジューリング' }},
      { id: 'wms', name: '倉庫 / TMS', proto: 'JMS \u00B7 REST', flows: '\u2190 \u2192 在庫、出荷',
        tip: { t: '倉庫・輸送管理', d: 'TMS と WMS システムが Boomi + Solace 経由でイベント駆動型フローに Oracle SOA とデータベース組み込みロジックから移行しました。', f: 'パブリッシュ：出荷状況、在庫変更 \u00B7 サブスクライブ：注文、ルーティング指示' }},
      { id: 'vessel', name: '船舶・フリート業務', proto: 'MQTT \u00B7 REST', flows: '\u2190 \u2192 予約、追跡、デジタルツイン',
        tip: { t: '船舶・フリート業務', d: '海運会社が即時の予約確認のために MDM をイベント対応化。IoT コンテナ追跡と船舶シミュレーションのためのデジタルツイン。', f: 'パブリッシュ：船舶位置、コンテナテレメトリ \u00B7 サブスクライブ：予約イベント、ルーティング変更' }},
      { id: 'iot-log', name: 'コンテナ IoT', proto: 'MQTT', flows: '\u2192 位置、温度、ステータス',
        tip: { t: 'コンテナ IoT センサー', d: '各コンテナの電子部品が位置情報と状態データを収集し、イベントプラットフォームを通じて MQTT でストリーミング。', f: 'パブリッシュ：GPS、温度、衝撃、湿度 \u00B7 サブスクライブ：アラートしきい値' }}
    ],
    right: [
      { id: 'partner', name: 'パートナー / 顧客ポータル', proto: 'REST \u00B7 WebSocket', flows: '\u2190 通知 \u2192 予約',
        tip: { t: 'パートナー・顧客ポータル', d: '即時の予約確認、付加価値サービスのパートナー通知、顧客ポータルへのリアルタイム出荷可視性プッシュ。', f: 'パブリッシュ：予約、サービスリクエスト \u00B7 サブスクライブ：確認、ステータス更新、追跡' }},
      { id: 'customs', name: '税関・コンプライアンス', proto: 'REST', flows: '\u2190 申告 \u2192 通関イベント',
        tip: { t: '税関・コンプライアンス', d: '出荷イベントが自動的に税関申告をトリガー。通関イベントが出荷ステータスを更新し、リリースを可能にします。', f: 'パブリッシュ：通関ステータス \u00B7 サブスクライブ：出荷マニフェスト、申告' }},
      { id: 'analytics-log', name: '分析 (Snowflake)', proto: 'Kafka ブリッジ', flows: '\u2190 イベント \u2192 予測',
        tip: { t: '分析・データレイク', d: 'ソースシステムからの CDC が Kafka ブリッジを通じて Snowflake に供給。運用イベントストリームからの予測追跡と需要予測。', f: 'パブリッシュ：予測、異常 \u00B7 サブスクライブ：CDC 経由のすべての運用イベント' }},
      { id: 'lastmile', name: 'ラストマイル配送', proto: 'MQTT \u00B7 REST', flows: '\u2190 \u2192 ドライバー状況、配送証明',
        tip: { t: 'ラストマイル配送', d: 'ドライバーアプリ、ルート最適化、配送証明イベントがリアルタイムで物流チェーンの最終区間を接続。', f: 'パブリッシュ：配送確認、ドライバー位置 \u00B7 サブスクライブ：ルート変更、出荷指示' }}
    ],
    deploy: [
      { id: 'd-prem', label: 'オンプレミス', sub: '港湾 / 倉庫', tip: 'レイテンシ重視の港湾自動化と倉庫業務向けオンプレミスアプライアンス。プライベート 5G 接続。' },
      { id: 'd-cloud', label: 'Solace Cloud', sub: 'AWS \u00B7 Azure', tip: 'パートナー接続、顧客ポータル、弾力的な分析ワークロード向けマネージドサービス。' },
      { id: 'd-edge', label: 'エッジ / 車両', sub: 'トラック \u00B7 コンテナ', tip: 'ローカル処理とストア・アンド・フォワードのための車両上および流通センターの軽量ブローカー。' }
    ]
  },
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
    title: '鉄道・交通イベントメッシュパターン',
    description: '列車運行、旅客システム、インフラ管理が統一されたイベントバックボーンを共有します。',
    left: [
      { id: 'train', name: '列車テレメトリ', proto: 'MQTT \u00B7 REST', flows: '\u2192 位置、速度、健全性',
        tip: { t: '列車テレメトリ', d: '車載センサーが車両から位置、速度、健全性データをストリーミング。複数の列車メーカーが単一の取り込みポイントを通じて正規化されます。', f: 'パブリッシュ：位置、速度、診断、ドア状態 \u00B7 サブスクライブ：コマンド、速度制限' }},
      { id: 'traffic', name: '交通管理', proto: 'AMQP \u00B7 JMS', flows: '\u2190 \u2192 時刻表、例外、入換',
        tip: { t: '交通管理', d: 'SBB が一つのイベントプラットフォームで40以上のユースケースを運用：運転士情報、時刻表管理、輸送力計画、入換、トンネル監視。', f: 'パブリッシュ：時刻表変更、線路状態 \u00B7 サブスクライブ：列車位置、例外イベント' }},
      { id: 'passenger', name: '旅客システム', proto: 'REST \u00B7 SAP AEM', flows: '\u2190 \u2192 チェックイン、課金、ポータル',
        tip: { t: '旅客システム', d: 'チェックイン/チェックアウトイベントが SAP AEM を通じて課金（S/4HANA）と顧客ポータルに流れます。欧州の鉄道会社がすべてのチェックインが確実に課金に届くことを保証することで失われた収益を回収しました。', f: 'パブリッシュ：チェックインイベント、乗車データ \u00B7 サブスクライブ：運賃計算、サービスアラート' }},
      { id: 'safety', name: '安全・信号', proto: 'AMQP', flows: '\u2190 \u2192 トンネル監視、PTC',
        tip: { t: '安全・信号', d: '安全性重視のイベント：トンネル監視、ポジティブトレインコントロール、保守派遣前の従業員資格確認。ゼロメッセージロスト保証。', f: 'パブリッシュ：線路状態、安全アラート \u00B7 サブスクライブ：列車位置、速度、資格ステータス' }}
    ],
    right: [
      { id: 'ops-centre', name: '運用センター', proto: 'AMQP \u00B7 REST', flows: '\u2190 \u2192 地域業務、例外',
        tip: { t: '運用センター', d: '各センターがトピック階層で自分の地理的地域をサブスクライブ。遠隔センター間の低帯域幅リンクがネイティブに処理されます。', f: 'パブリッシュ：派遣決定、速度制限 \u00B7 サブスクライブ：地域列車データ、例外イベント' }},
      { id: 'driver-info', name: '運転士情報', proto: 'REST \u00B7 MQTT', flows: '\u2190 リアルタイムアラート、時刻表',
        tip: { t: '運転士情報システム', d: '列車運転士がリアルタイムの時刻表更新、速度制限、線路状態、例外アラートを運転台システムに直接受け取ります。', f: 'サブスクライブ：時刻表更新、線路状態、速度制限、例外アラート' }},
      { id: 'erp-rail', name: 'SAP / Oracle ERP', proto: 'SAP AEM \u00B7 JMS', flows: '\u2190 \u2192 保守、HR、課金',
        tip: { t: 'ERP 統合', d: 'TIBCO から Solace への移行が Oracle ERP と SAP システムをブリッジしました。従業員資格（規制上）、MRO スケジューリング、課金がすべてイベントを通じて流れます。', f: 'パブリッシュ：作業指示、資格 \u00B7 サブスクライブ：保守トリガー、課金イベント' }},
      { id: 'analytics-rail', name: 'データレイク (Databricks)', proto: 'Kafka ブリッジ', flows: '\u2190 イベント \u2192 予測保守',
        tip: { t: '分析・データレイク', d: '運用イベントが予測保守、パフォーマンス分析、フリート最適化のために Databricks/Azure データレークに供給されます。', f: 'パブリッシュ：予測、フリートインサイト \u00B7 サブスクライブ：すべてのテレメトリと運用イベント' }}
    ],
    deploy: [
      { id: 'd-prem', label: 'オンプレミス', sub: '運用センター / 線路沿い', tip: '接続が限られた安全性重視の運用センターと線路沿いシステム向けオンプレミス。' },
      { id: 'd-cloud', label: 'Solace Cloud', sub: 'Azure \u00B7 AWS', tip: '分析、旅客向けサービス、弾力的なワークロード向けクラウド。イベントメッシュ経由でオンプレミスと接続。' },
      { id: 'd-edge', label: '車上', sub: '列車 \u00B7 駅', tip: '本部へのストア・アンド・フォワードを持つローカル処理のための列車上と駅の軽量ブローカー。' }
    ]
  },

  automotive: {
    title: '自動車・モビリティイベントメッシュパターン',
    description: 'コネクテッドカー、工場システム、ビジネスアプリケーションがメッシュを通じてリアルタイムでデータを交換します。',
    left: [
      { id: 'vehicle', name: 'コネクテッドカー', proto: 'MQTT', flows: '\u2190 \u2192 テレメトリ、OTA、診断',
        tip: { t: 'コネクテッドカー', d: '数百万台のコネクテッドカーが MQTT 経由で消費者向けアプリにテレメトリをストリーミング。元のコネクテッドカー展開が調達と生産に拡張されました。', f: 'パブリッシュ：位置、診断、使用状況 \u00B7 サブスクライブ：OTA 更新、リコール、パーソナライゼーション' }},
      { id: 'factory', name: '工場 / MES', proto: 'MQTT \u00B7 JMS', flows: '\u2190 \u2192 生産イベント、品質',
        tip: { t: '工場・MES', d: '生産ラインイベント、品質チェック、設備テレメトリ。SAP AEM が調達データ交換を生産ワークフローに接続します。', f: 'パブリッシュ：生産ステータス、品質イベント \u00B7 サブスクライブ：注文、スケジューリング、部品在庫' }},
      { id: 'auction', name: 'オークション / リマーケティング', proto: 'WebSocket \u00B7 REST', flows: '\u2190 \u2192 入札、出品、結果',
        tip: { t: 'オークション・リマーケティング', d: '200以上の拠点にわたって25,000以上の同時接続でリアルタイムオンラインオークション。4つのデータセンターにわたるサブ秒の入札レイテンシ。', f: 'パブリッシュ：入札、オークション結果 \u00B7 サブスクライブ：出品、価格更新、ロット状態' }},
      { id: 'fleet', name: 'フリート / レンタル業務', proto: 'REST \u00B7 MQTT', flows: '\u2190 \u2192 予約、返却、状態',
        tip: { t: 'フリート・レンタル業務', d: '予約、チェックアウト、返却、車両サービスがすべて運営全体で消費されるイベントを生成。リアルタイム車両テレメトリに向けて構築中。', f: 'パブリッシュ：予約、返却、車両状態 \u00B7 サブスクライブ：在庫状況、価格、保守アラート' }}
    ],
    right: [
      { id: 'consumer-app', name: '消費者 / ドライバーアプリ', proto: 'REST \u00B7 WebSocket', flows: '\u2190 状態、アラート \u2192 コマンド',
        tip: { t: '消費者・ドライバーアプリ', d: 'コネクテッドカーのテレメトリがすべてのドライバーとの直接デジタル関係を生み出します。パーソナライズされたサービス、ロイヤルティ、リモート車両管理の基盤。', f: 'パブリッシュ：ユーザー設定、リモートコマンド \u00B7 サブスクライブ：車両状態、アラート、サービスリマインダー' }},
      { id: 'sap-auto', name: 'SAP / ERP', proto: 'SAP AEM \u00B7 JMS', flows: '\u2190 \u2192 調達、PI/PO、課金',
        tip: { t: 'SAP / ERP 統合', d: '調達イベント配信と PI/PO ワークフロー分離のための SAP AEM。相互運用性を維持しながら IBM MQ インスタンスを段階的に置き換えます。', f: 'パブリッシュ：PO 確認、請求書 \u00B7 サブスクライブ：調達リクエスト、生産トリガー' }},
      { id: 'dealer', name: 'ディーラー管理', proto: 'REST', flows: '\u2190 在庫 \u2192 注文、保証',
        tip: { t: 'ディーラー管理システム', d: 'ディーラーネットワークがリアルタイムの在庫更新、保証イベント、リコール通知を受け取ります。注文と保証クレームが本部に戻ります。', f: 'パブリッシュ：注文、保証クレーム \u00B7 サブスクライブ：在庫、リコール、価格更新' }},
      { id: 'analytics-auto', name: '分析・ML', proto: 'Kafka ブリッジ', flows: '\u2190 イベント \u2192 予測',
        tip: { t: '分析・ML', d: '車両テレメトリとビジネスイベントが予測保守、需要予測、フリート最適化のための分析に供給されます。', f: 'パブリッシュ：予測、異常アラート \u00B7 サブスクライブ：車両テレメトリ、ビジネスイベント' }}
    ],
    deploy: [
      { id: 'd-prem', label: 'オンプレミス', sub: '工場 / データセンター', tip: '厳格なレイテンシとデータ所在地要件を持つ生産システムとオークションプラットフォーム向けオンプレミス。' },
      { id: 'd-cloud', label: 'Solace Cloud', sub: 'AWS \u00B7 Azure \u00B7 SAP BTP', tip: 'コネクテッドカースケール、SAP BTP 統合、弾力的な消費者向けサービスのためのクラウド。' },
      { id: 'd-edge', label: '車内', sub: 'ゲートウェイ \u00B7 ディーラー', tip: 'ローカル処理とストア・アンド・フォワードのための車両ゲートウェイとディーラーの軽量ブローカー。' }
    ]
  },

  "manufacturing-cpg": {
    title: '製造・CPG イベントメッシュパターン',
    description: '工場 OT システムとエンタープライズ IT がメッシュを通じて生産、品質、サプライチェーンイベントを双方向に交換します。',
    left: [
      { id: 'mes', name: 'MES / SCADA', proto: 'MQTT \u00B7 NATS', flows: '\u2190 \u2192 生産データ、品質イベント',
        tip: { t: 'MES・SCADA システム', d: '工場実行システムが生産イベント、品質チェック、設備テレメトリをストリーミング。大手化学メーカーがリアルタイムデータ取り込みのためにレガシー MES をモダナイズしました。自動車部品メーカーが NATS ブリッジ経由で SAP AEM にショップフロアをブリッジしています。', f: 'パブリッシュ：生産ステータス、品質、設備テレメトリ \u00B7 サブスクライブ：作業指示、マスターデータ、スケジューリング' }},
      { id: 'erp-factory', name: 'SAP ECC / S4HANA', proto: 'SAP AEM \u00B7 JMS', flows: '\u2190 \u2192 マスターデータ、調達、注文',
        tip: { t: 'SAP ERP システム', d: 'SAP イベント対応アドオンが ECC と S/4HANA からイベントを生成。大手化学会社がオンプレミスを Azure にリアルタイム接続するために SAP ECC をイベント対応化。別の会社が AEM を通じて11以上の地域 ERP を接続。', f: 'パブリッシュ：マスターデータ変更、調達イベント、生産指示 \u00B7 サブスクライブ：ショップフロアイベント、品質データ、需要シグナル' }},
      { id: 'supply-chain', name: 'サプライチェーン / 物流', proto: 'REST \u00B7 MQTT', flows: '\u2190 \u2192 在庫、出荷、需要',
        tip: { t: 'サプライチェーン・物流', d: '世界最大の食品メーカーの一つが300の流通センターを接続。大手 CPG 企業が仮想海洋管制塔を通じて100社以上のキャリアから2,000隻を追跡。ネットワーク全体のリアルタイム在庫と需要シグナル。', f: 'パブリッシュ：在庫レベル、出荷イベント、需要シグナル \u00B7 サブスクライブ：生産ステータス、ルーティング指示、予測' }},
      { id: 'iot-factory', name: '工場 IoT / センサー', proto: 'MQTT', flows: '\u2192 設備健全性、環境',
        tip: { t: '工場 IoT・センサー', d: '設備健全性監視、環境センサー、自律搬送車。大手ドライブ技術メーカーが設備監視と自律工場搬送に Solace を使用。', f: 'パブリッシュ：温度、振動、稼働時間、位置 \u00B7 サブスクライブ：アラートしきい値、制御コマンド' }}
    ],
    right: [
      { id: 'analytics-mfg', name: '分析・AI', proto: 'Kafka ブリッジ', flows: '\u2190 イベント \u2192 予測、品質',
        tip: { t: '分析・AI プラットフォーム', d: '運用イベントが予測保守、品質予測、需要センシングのために Databricks、Azure Data Lake、Snowflake に供給。大手食品メーカーがリアルタイムイベントストリームからの AI 主導インサイトを使用。', f: 'パブリッシュ：予測、品質アラート、需要予測 \u00B7 サブスクライブ：すべての生産・サプライチェーンイベント' }},
      { id: 'ecomm', name: 'eコマース / CRM', proto: 'REST \u00B7 WebSocket', flows: '\u2190 注文、顧客 \u2192 更新',
        tip: { t: 'eコマース・CRM システム', d: '製品、価格、在庫データがリアルタイムで eコマースと CRM プラットフォームに流れます。大手 CPG 企業が SAP をイベント対応化して iPaaS、eコマース、CRM システムにデータをストリーミング。', f: 'パブリッシュ：注文、顧客インタラクション \u00B7 サブスクライブ：製品データ、価格、在庫状況' }},
      { id: 'partner-mfg', name: 'パートナー / EDI', proto: 'REST \u00B7 JMS', flows: '\u2190 \u2192 注文、請求書、予測',
        tip: { t: 'パートナー・EDI 統合', d: 'サプライヤーとディストリビューターの統合。大手飲料会社が時間あたり数十万ドルのコストをもたらしていた注文の重複と損失を防ぐために注文イベントをストリーミング。EDI トランザクションがイベントメッシュを流れます。', f: 'パブリッシュ：発注書、予測 \u00B7 サブスクライブ：確認書、請求書、出荷通知' }},
      { id: 'mdm', name: 'MDM / PLM', proto: 'REST \u00B7 SAP AEM', flows: '\u2190 \u2192 製品データ、レシピ、仕様',
        tip: { t: 'マスターデータ・製品ライフサイクル', d: '大手 CPG メーカーが MDM をイベント対応化して一度パブリッシュしてすべてのコンシューマーにリアルタイムで届くようにしました。別の会社が ERP と PLM 間の複雑なポイントツーポイント統合を集中型イベントバックボーンに置き換えました。', f: 'パブリッシュ：製品マスター、BOM 変更、レシピ更新 \u00B7 サブスクライブ：品質フィードバック、規制変更' }}
    ],
    deploy: [
      { id: 'd-prem', label: '工場エッジ', sub: 'オンプレミス \u00B7 エアギャップ', tip: '低レイテンシ OT 統合のための工場内オンプレミスアプライアンス。保証配信で MES、SCADA、センサーデータをローカル処理。' },
      { id: 'd-cloud', label: 'Solace Cloud', sub: 'Azure \u00B7 AWS \u00B7 SAP BTP', tip: '分析、パートナー接続、SAP BTP 統合向けクラウド。大手メーカーがオンプレミスとクラウドにまたがるハイブリッドアーキテクチャを展開。' },
      { id: 'd-dc', label: '企業 DC', sub: 'エンタープライズ統合', tip: '企業データセンターが SAP 統合、MDM 配信、マルチリージョン ERP 統合を処理。工場とクラウドにイベントメッシュで接続。' }
    ]
  },

  retail: {
    title: '小売・eコマースイベントメッシュパターン',
    description: '店舗システム、eコマースプラットフォーム、エンタープライズアプリケーションが在庫、価格、顧客イベントを双方向に交換します。',
    left: [
      { id: 'pos', name: '店舗 POS・デバイス', proto: 'JMS \u00B7 MQTT', flows: '\u2190 \u2192 トランザクション、在庫、価格',
        tip: { t: '店舗 POS・デバイス', d: 'POS システム、ハンドヘルドスキャナー、セルフチェックアウトキオスク、RFID リーダー。リアルタイムのトランザクションイベントが上流に流れ、価格と製品データが数千の拠点に下流に流れます。', f: 'パブリッシュ：トランザクション、在庫数、スキャンイベント \u00B7 サブスクライブ：価格更新、製品データ、プロモーション' }},
      { id: 'ecomm-rt', name: 'eコマース・マーケットプレイス', proto: 'REST \u00B7 WebSocket', flows: '\u2190 \u2192 注文、カタログ、在庫',
        tip: { t: 'eコマース・マーケットプレイス', d: 'オンラインストア、モバイルアプリ、サードパーティマーケットプレイス。グローバルな小売業者が Alibaba Cloud の中国マーケットプレイスを地域データセンターにイベントメッシュで接続。', f: 'パブリッシュ：オンライン注文、閲覧イベント、レビュー \u00B7 サブスクライブ：在庫状況、価格、フルフィルメントステータス' }},
      { id: 'supply-rt', name: 'サプライチェーン・倉庫', proto: 'REST \u00B7 JMS', flows: '\u2190 \u2192 出荷、補充、需要',
        tip: { t: 'サプライチェーン・倉庫', d: '流通センター、倉庫管理、サプライヤー統合。店舗レベルの需要に基づくリアルタイムの補充シグナルがバッチ駆動の配分を置き換えます。', f: 'パブリッシュ：出荷状況、在庫受け入れ、需要シグナル \u00B7 サブスクライブ：発注書、配分指示' }},
      { id: 'iot-rt', name: '店舗内 IoT・センサー', proto: 'MQTT', flows: '\u2192 来客数、棚センサー、RFID',
        tip: { t: '店舗内 IoT・センサー', d: '来客カウンター、スマート棚、RFID 追跡、環境センサー。店舗全体の数千のデバイスからの MQTT テレメトリ。', f: 'パブリッシュ：来客数、棚重量、RFID 読み取り、温度 \u00B7 サブスクライブ：アラートしきい値、設定' }}
    ],
    right: [
      { id: 'mdm-rt', name: 'マスターデータ / PIM', proto: 'SAP AEM \u00B7 REST', flows: '\u2190 \u2192 製品、価格、プロモーション',
        tip: { t: 'マスターデータ・製品情報', d: '中央の製品、価格設定、プロモーションデータが一度パブリッシュされ、すべての店舗、チャネル、パートナーが消費。バッチ同期をリアルタイムイベント配信に置き換えます。', f: 'パブリッシュ：製品変更、価格更新、キャンペーン開始 \u00B7 サブスクライブ：品質フィードバック、店舗レベル修正' }},
      { id: 'crm-loyalty', name: 'CRM・ロイヤルティ', proto: 'REST \u00B7 WebSocket', flows: '\u2190 顧客イベント \u2192 オファー',
        tip: { t: 'CRM・ロイヤルティプラットフォーム', d: '顧客プロファイル、ロイヤルティポイント、パーソナライズされたオファー、マーケティングオートメーション。店舗からのトランザクションイベントがリアルタイムのロイヤルティ更新とターゲットオファーをトリガー。', f: 'パブリッシュ：パーソナライズされたオファー、ロイヤルティ更新 \u00B7 サブスクライブ：購入イベント、顧客インタラクション' }},
      { id: 'erp-rt', name: 'SAP / ERP', proto: 'SAP AEM \u00B7 JMS', flows: '\u2190 \u2192 注文、財務、在庫',
        tip: { t: 'SAP / ERP 統合', d: 'マスターデータ配信、注文処理、財務統合のための SAP AEM。複数の小売業者が SAP イベント対応化を使用して ERP データをリアルタイムでストリーミング。', f: 'パブリッシュ：注文確認、財務転記 \u00B7 サブスクライブ：販売トランザクション、在庫変動' }},
      { id: 'analytics-rt', name: '分析・データレイク', proto: 'Kafka ブリッジ', flows: '\u2190 イベント \u2192 需要予測',
        tip: { t: '分析・データレイク', d: 'トランザクションイベント、在庫変動、顧客インタラクションが需要予測、マーチャンダイジング分析、パーソナライゼーションモデルのために Snowflake、Databricks、Azure Synapse にストリーミング。', f: 'パブリッシュ：需要予測、レコメンデーション \u00B7 サブスクライブ：すべてのトランザクションと運用イベント' }}
    ],
    deploy: [
      { id: 'd-store', label: '店舗 / エッジ', sub: 'POS \u00B7 キオスク \u00B7 IoT', tip: '店舗レベルの軽量ブローカーまたはリモートクライアント。POS と IoT のローカル処理と中央メッシュへのストア・アンド・フォワード。' },
      { id: 'd-cloud-rt', label: 'ハイパースケーラークラウド', sub: 'AWS \u00B7 Azure \u00B7 GCP', tip: 'eコマース、マーケットプレイス接続、弾力的なワークロード向けクラウドホストブローカー。国際的な小売運営のためのマルチリージョン。' },
      { id: 'd-dc-rt', label: 'データセンター', sub: '本社 \u00B7 流通', tip: 'マスターデータ配信、ERP 統合、数千の拠点へのハブ・トゥ・ストアのファンアウトを処理する中央データセンターブローカー。' }
    ]
  },

  financial: {
    title: '金融サービスイベントメッシュパターン',
    description: '取引システム、コアバンキング、決済ネットワーク、デジタルチャネルが市場データ、トランザクション、規制イベントを双方向に交換します。',
    left: [
      { id: 'trading', name: '取引システム', proto: 'JMS \u00B7 AMQP', flows: '\u2190 \u2192 注文、執行、ポジション',
        tip: { t: '取引システム', d: '株式、FX、債券、デリバティブのフロントオフィス取引プラットフォーム。イベントブローカーがマイクロ秒レイテンシで注文ルーティング、執行イベント、ポジション更新を処理。', f: 'パブリッシュ：注文、執行、ポジション更新 \u00B7 サブスクライブ：市場データ、リスク制限、参照データ' }},
      { id: 'core-banking', name: 'コアバンキング', proto: 'JMS \u00B7 REST', flows: '\u2190 \u2192 口座、トランザクション、残高',
        tip: { t: 'コアバンキングシステム', d: 'レガシーコアバンキングプラットフォームが口座とトランザクションイベントをリアルタイムにパブリッシュ。新製品の統合に7日以上かかっていた銀行が、イベント駆動型マイクロサービス経由でほぼリアルタイムにオンボーディングできるようになりました。', f: 'パブリッシュ：口座イベント、トランザクション確認 \u00B7 サブスクライブ：支払い指示、顧客更新' }},
      { id: 'payments', name: '決済ネットワーク', proto: 'REST \u00B7 JMS', flows: '\u2190 \u2192 承認、決済',
        tip: { t: '決済ネットワーク・プロセッサー', d: 'リアルタイムの支払い承認、決済、清算。大手カードネットワークがリアルタイム決済承認に Solace を使用。決済プロセッサーがイベントバックボーンを使用して新しいプロバイダーを迅速にオンボーディング。', f: 'パブリッシュ：承認結果、決済イベント \u00B7 サブスクライブ：支払いリクエスト、不正シグナル' }},
      { id: 'exchange', name: '取引所・マッチング', proto: 'ネイティブ \u00B7 AMQP', flows: '\u2190 \u2192 市場データ、DR レプリケーション',
        tip: { t: '取引所・マッチングエンジン', d: '取引所マッチングエンジンインフラ内にイベントブローカーを展開。マッチングエンジン状態のリアルタイム DR レプリケーションとメンバーブローカーへの市場データ配信を処理。', f: 'パブリッシュ：市場データ、取引確認 \u00B7 サブスクライブ：注文、メンバー接続イベント' }}
    ],
    right: [
      { id: 'digital-ch', name: 'デジタルチャネル', proto: 'WebSocket \u00B7 REST', flows: '\u2190 \u2192 残高、アラート、コマンド',
        tip: { t: 'デジタルバンキングチャネル', d: 'モバイルアプリ、オンラインバンキング、顧客ポータルが WebSocket プッシュ経由でリアルタイムの残高更新、トランザクション通知、パーソナライズされたオファーを受け取ります。', f: 'パブリッシュ：顧客アクション、設定 \u00B7 サブスクライブ：残高更新、アラート、オファー' }},
      { id: 'risk-compliance', name: 'リスク・コンプライアンス', proto: 'JMS \u00B7 REST', flows: '\u2190 制限 \u2192 取引/トランザクションイベント',
        tip: { t: 'リスク・コンプライアンス', d: 'リアルタイムのリスク計算、規制報告、コンプライアンス監視。取引とトランザクションイベントがポジション制限、エクスポージャー計算、規制提出のためにリスクエンジンにストリーミング。', f: 'パブリッシュ：リスク制限、コンプライアンスアラート \u00B7 サブスクライブ：すべての取引とトランザクションイベント' }},
      { id: 'partner-fs', name: 'パートナー・フィンテック', proto: 'REST \u00B7 WebSocket', flows: '\u2190 \u2192 API、データフィード、統合',
        tip: { t: 'パートナー・フィンテック統合', d: 'オープンバンキング API、フィンテックパートナーシップ、サードパーティデータプロバイダー。イベント駆動型統合により深いシステム統合なしに新しいパートナーの迅速なオンボーディングが可能。', f: 'パブリッシュ：API イベント、データフィード \u00B7 サブスクライブ：パートナーリクエスト、外部市場データ' }},
      { id: 'analytics-fs', name: '分析・レポーティング', proto: 'Kafka ブリッジ', flows: '\u2190 イベント \u2192 モデル、レポート',
        tip: { t: '分析・規制報告', d: 'トランザクションイベント、市場データ、リスク指標が分析、ML ベースの不正検知、規制報告のためにデータレークにストリーミング。Kafka ブリッジが二重消費パターンを可能にします。', f: 'パブリッシュ：不正アラート、モデル出力 \u00B7 サブスクライブ：すべてのトランザクションと市場イベント' }}
    ],
    deploy: [
      { id: 'd-dc-fs', label: 'オンプレミス', sub: '取引フロア \u00B7 データセンター', tip: '決定論的低レイテンシのための取引インフラへのハードウェアアプライアンス。コアバンキングシステムが保証配信でオンプレミスに残ります。' },
      { id: 'd-cloud-fs', label: 'ハイパースケーラークラウド', sub: 'AWS \u00B7 Azure \u00B7 GCP', tip: 'デジタルバンキング、パートナー API、弾力的な分析ワークロード向けクラウドホストブローカー。グローバル運営のためのマルチリージョン。' },
      { id: 'd-colo', label: 'コロケーション', sub: '取引所近接', tip: '最小レイテンシの市場データと注文ルーティングのための取引所隣接コロケーション施設にブローカーを展開。' }
    ]
  }
};
