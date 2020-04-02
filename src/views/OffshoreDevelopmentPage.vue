<template>
  <div>
    <vue-headful
      :title="title"
      :description="description"
      :keywords="keywords"
    />
    <tagline
      :title="tagline[0]"
      :description="tagline[1]"
      :imgSrc="tagline[2]"
    />
    <v-container>
      <p class="my-12">
        企業の成長スピードを考えると、技術的面とコスト面の二つの理由からソフトウェア開発をオフショアリングすることは自然なビジネスの動きです。シンプルなコーディングからカスタム開発、ソフトウェアのサポートとメンテナンス、モバイルアプリケーションの開発、ウェブサイトの設計から開発まで、さまざまなソフトウェア開発をオフショアすることができます。IT人材不足の中で、より高いスキルを持つIT人材を確保することが難しくなっています。オフショア開発を利用することで、このような課題から解放されるだけでなく、
        より短い時間でより高品質のソフトウェアを手に入れることができます。これにより、最終的に開発期間が短縮され、製品化までの期間も短縮されます。
      </p>
      <v-row class="mx-1">
        <service-card
          v-for="(service, id) in services"
          :key="id"
          :img-url="service.imageSrc"
          :title="service.title"
          :description="service.description"
        >
          <v-row :style="'display' + ':' + service.tagVisibility">
            <v-col cols="12" class="pr-0 py-1">
              <span class="font-size-12 font-weight-bold">重点分野:</span>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-chip
                v-for="(tag, id) in service.tags"
                :key="id"
                class="chip ma-1 pa-1"
                color="#E6F0F6"
                label
                text-color="primary"
              >
                <span class="ma-0" v-html="tag" />
              </v-chip>
            </v-col>
          </v-row>
        </service-card>
      </v-row>
    </v-container>
    <v-container>
      <section-title>ツール</section-title>
      <p class="text-center">
        以下のツールを利用してシステム開発やITサービスをご提供しています。
      </p>
      <v-row>
        <v-col
          cols="4"
          sm="2"
          v-for="(technology, id) in technologies"
          :key="id"
          class="pb-12"
        >
          <v-img
            contain
            max-height="90"
            max-width="150"
            :src="getAsset(technology.imageSrc)"
            :title="technology.title"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const ServiceCard = () =>
  import(/* webpackMode: "eager" */ "@/components/ServiceCard.vue");
const SectionTitle = () =>
  import(/* webpackMode: "eager" */ "@/components/SectionTitle.vue");
const Tagline = () =>
  import(/* webpackMode: "eager" */ "@/components/Tagline.vue");
export default {
  name: "OffshoreDevelopmentPage",
  components: { Tagline, SectionTitle, ServiceCard },
  data() {
    return {
      title: "オフショア開発 | A2Aデジタルジャパン",
      description:
        "私たちはユーザのご要望に合わせて様々なオフショアソフトウェア開発をご提供しています。",
      keywords:
        "A2Aデジタルジャパン,デジタル,IT開発,アジア,アジア・デジタルトランスフォーメーション,アジアDX,オフショア開発,業務改善,システム開発,リバースイノベーション,Reverse Innovation,技術革新,産学協同,産業革命4.0,研究開発,Research & Development,R&D,AI,人工知能,IoT,クラウドコンピューティング,Cloud Computing,RPA, Blockchain ,ブロックチェーン,PWA,VR/AR, Odoo ERP, Cyber Security,サイバーセキュリティ,アプリケーション開発,モバイル",
      tagline: [
        "オフショア開発",
        "私たちはユーザのご要望に合わせて様々なオフショアソフトウェア開発をご提供しています",
        "images/service/service-tagline.png"
      ],
      technologies: [
        {
          imageSrc: "images/technology/tensorflow.png",
          title: "TensorFlow"
        },
        {
          imageSrc: "images/technology/opencv.png",
          title: "OpenCV"
        },
        {
          imageSrc: "images/technology/vuejs.png",
          title: "VueJS"
        },
        {
          imageSrc: "images/technology/postgre-sql.png",
          title: "PostgreSQL"
        },
        {
          imageSrc: "images/technology/python.png",
          title: "Python"
        },
        {
          imageSrc: "images/technology/unity.png",
          title: "Unity"
        },
        {
          imageSrc: "images/technology/aws.png",
          title: "AWS - Cloud Computing Services"
        },
        {
          imageSrc: "images/technology/google-cloud.png",
          title: "Google Cloud Platform"
        },
        {
          imageSrc: "images/technology/digital-ocean.png",
          title: "DigitalOcean"
        },
        {
          imageSrc: "images/technology/c-plus-plus.png",
          title: "C++"
        },
        {
          imageSrc: "images/technology/ethereum.png",
          title: "Ethereum"
        },
        {
          imageSrc: "images/technology/maya.png",
          title: "Autodesk Maya"
        },
        {
          imageSrc: "images/technology/docker.png",
          title: "Docker"
        },
        {
          imageSrc: "images/technology/steam-vr.png",
          title: "SteamVR"
        },
        {
          imageSrc: "images/technology/arduino-yun.png",
          title: "ArduinoYun"
        }
      ],
      services: [
        {
          imageSrc: "images/service/ai.png",
          title: "人工知能（AI）開発",
          description:
            "人工知能（AI）は、機械、特にコンピューターシステムによる人間の知能プロセスのシミュレーションです。 認識オブジェクト、チャット自動化のためのチャットボット、テクノロジーによる音声検出、GAN AI（Generative Adversarial Network）などのカスタマーエクスペリエンスを強化できます。 A2AデジタルAIが提供するサービスを使用することで、ビジネスを改善し、顧客との対話を自動化して、ビジネスの作業効率を向上させることができます。",
          tags: [
            "オブジェクト検出",
            "音声認識",
            "自然言語処理",
            "予測分析",
            "GAN(敵対的生成ネットワーク)"
          ]
        },
        {
          imageSrc: "images/service/iot.png",
          title: "IoT開発",
          description:
            "IoT（Internet of Thingsモノのインターネット）とは、様々な「モノ（物）」がインターネットに接続され、情報交換することにより相互に制御する仕組みです。<br />日常生活で使う様々なものに各種センサーを付けて、インターネットを介しモニターしたり、モノをコントロールしたりすることにより安全で快適な生活を実現しようとしています",
          tagVisibility: "none"
        },
        {
          imageSrc: "images/service/blockchain.png",
          title: "ブロックチェーン",
          description:
            "ブロックチェーンは、データベースに似た分散型データベースですが、特定の管理機関（Googleのような会社、小さな会社、または個人）によって制御されるのではなく、世界中に配置されている複数のデータベースに分散しており、インターネットに接続しているユーザ同士が管理します。",
          tags: ["HyperLedgerブロックチェーン", "Ethereum（イーサリアム)"]
        },
        {
          imageSrc: "images/service/cc.png",
          title: "クラウドコンピューティング",
          description:
            "クラウド コンピューティングとはコンピューティング サービス (サーバー、ストレージ、データベース、ネットワーク、ソフトウェア、分析、インテリジェンスなど) をインターネット (“クラウド”) 経由で配信して、迅速なイノベーション、柔軟なリソース、スケール メリットを提供することです。使用するクラウド サービスに対してのみ費用を支払うことで、運用コストを削減し、インフラストラクチャをより効率的に実行し、ビジネス ニーズの変化に合わせてスケーリングすることができます。",
          tags: [
            "Google Cloud Platform (GCP)",
            "DigitalOcean",
            "Amazon Web Service (AWS)"
          ]
        },
        {
          imageSrc: "images/service/rpa.png",
          title: "RPA導入サポート",
          description:
            "ロボティックプロセスオートメーション(Robotic Process Automation)、通称RPAは、これまで人間のみが対応可能と想定されていた作業、もしくはより高度な作業を、人間に代わって実施できるルールエンジンやAI、機械学習等を含む認知技術を活用して代行・代替する技術です。RPAは比較的簡単にかつ迅速に設計、テスト、および実装することができるため、少ない予算の中で開発することが可能です。",
          tagVisibility: "none"
        },
        {
          imageSrc: "images/service/pwa.png",
          title: "PWA(Progressive Web Apps)開発",
          description:
            "PWAとは「Progressive Web Apps」の略で、Webサイトをネイティブアプリ（Apple StoreやGoogle Playなどでダウンロードできるアプリ）のようにスマホにインストールできるアプリ、またはその技術のことを言います。<br />オフラインでの作業、プッシュ通知、デバイスハードウェアのアクセスなど、ネイティブアプリと同じ機能を実装することができます。",
          tags: ["Reliable", "Responsive", "Engaging", "Secure"]
        },
        {
          imageSrc: "images/service/arvr.png",
          title: "VR/AR開発",
          description:
            "VRは「Virtual Reality」の略で、「人工現実感」や「仮想現実」と訳されます。HTC Vive、Oculus Go / RiftなどのVRデバイスを使用して、視界の360°を完全なバーチャル空間に移動した体験ができます。<br />ARとは「Augmented Reality」の略で、一般的に「拡張現実」と訳されます。実在する風景にバーチャルの視覚情報を重ねて表示することで、目の前にある世界を“仮想的に拡張する”というものです",
          tags: [
            "Oculus Go 開発",
            "HTC Vive 開発",
            "Hololens 開発",
            "Mobile AR 開発"
          ]
        },
        {
          imageSrc: "images/service/odoo.png",
          title: "Odoo ERP導入",
          description:
            "OdooはベルギーのOdoo S.A.社が開発している、世界で最も人気のあるオープンソースの業務アプリケーションスイートです。<br />機能を豊富に備え、操作性、拡張性、保守性の各面で優れており、圧倒的なコストパフォーマンスを誇ります。カバー領域は、従来のERPパッケージ守備範囲を越え、CMS、eコマース、イベント管理、ヘルプデスク等、多岐にわたります。多通貨・多言語をサポートするため、日本だけでなく、海外拠点での利用にも適しています。<br />利用形態は、クラウド（Odoo社の SaaSや、 その他事業者のクラウドサービスなど利用）とオンプレミスの何れにも対応可能です。<br />世界1,850社（2019年4月時点）のパートナーがユーザ企業のOdoo導入・運用をサポートしています。",
          tags: [
            "会計管理",
            "顧客管理（CRM）",
            "販売管理",
            "POS (Point of Sale)",
            "人事管理（HR）",
            "ホテルマネジメント",
            "在庫管理"
          ]
        },
        {
          imageSrc: "images/service/marketing.png",
          title: "デジタルマーケティング",
          description:
            "デジタルマーケティングには、電子デバイスやインターネットを使用するすべてのマーケティング活動が含まれます。検索エンジン、ソーシャルメディア、電子メール、その他のWebサイトなどのデジタルチャネルを活用して、企業と顧客とつながりを促進します",
          tags: [
            "ウェブ開発",
            "モバイルアプリケーション開発 ",
            "SEO/SEM",
            "SNSマーケティング支援",
            "動画編集",
            "Ad Operation",
            "Googleアナリティクス",
            "グラフィックデザイン"
          ]
        },
        {
          imageSrc: "images/service/cybersecurity.png",
          title: "サイバーセキュリティ",
          description:
            "サイバーセキュリティは、コンピューター、サーバー、モバイルデバイス、電子システム、ネットワーク、およびデータを悪意のある攻撃から守るための技術です。 情報技術セキュリティまたは電子情報セキュリティとも呼ばれます。",
          tags: ["セキュリティエンジニア", "セキュリティトレーニング人材"]
        }
      ]
    };
  },
  methods: {
    getAsset(path) {
      return require("@/assets/" + path);
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~vuetify/src/styles/styles'
.chip
  font-size: 12px !important
  height: auto !important
  text-align: center
@media #{map-get($display-breakpoints, 'md-and-up')}
  .title
    font-size: 45px !important
    margin-bottom: 20px
  .description
    font-size: 20px !important
  .chip
    font-size: 16px !important
    height: auto !important
    text-align: center
</style>
