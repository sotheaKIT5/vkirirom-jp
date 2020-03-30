<template>
  <v-container id="management">
    <section-title>グループ経営チーム</section-title>
    <v-row class="d-flex px-3 px-md-0">
      <management-card
        v-for="(people, id) in management"
        :key="id"
        :img-src="people.imgSrc"
        :name="people.name"
        :position="people.position"
        :self-intro="people.selfIntro"
      />
    </v-row>
  </v-container>
</template>

<script>
import SectionTitle from "../SectionTitle";
import ManagementCard from "../ManagementCard";
export default {
  name: "ManagementSection",
  components: { ManagementCard, SectionTitle },
  data() {
    return {
      management: [
        {
          imgSrc: "images/people/person-1.png",
          name: "猪塚　武",
          position:
            "CEO vKirirom Pte. Ltd.<br />vKirirom Japan株式会社 代表取締役",
          selfIntro:
            "1967年、香川生まれ<br />早稲田大学理工学部物理学科、東京工業大学大学院理工学研究科修了<br />アンダーセンコンサルティング（現：アクセンチュア）を経て1998年に株式会社デジタルフォレストを創業。日本一のアクセス解析ソフトを作り、2009年にNTTコムに事業売却。ASEANに移住し2012年にvKirirom事業をスタート。世界的な起業家組織EOの日本支部会長、アジアの理事を歴任、現プノンペン支部会長。"
        },
        {
          imgSrc: "images/people/person-6.png",
          name: "Hicki Okamoto",
          position:
            "Director vKirirom Pte. Ltd.<br />事業開発・リゾート事業担当副社長",
          selfIntro:
            "1971年、大阪生まれ<br />米国ペンシルベニア大学を卒業後、アクセンチュア、ソフトバンクにてコンサルタント、ビジネスデベロップメントマネージャーを経て、マイクロソフトシアトルにてストラテジー、グローバルセールス部門でのリーダシップロールを歴任。2018年に本プロジェクトに参画し、リゾート部門、事業開発部門の責任者。"
        },
        {
          imgSrc: "images/people/person-5.png",
          name: "別宮 健三郎",
          position:
            "Director vKirirom Pte. Ltd.<br />キリロム工科大学担当副社長<br />vKirirom Japan株式会社 監査役",
          selfIntro:
            "1976年、大阪生まれ<br />2004年アクセンチュア株式会社に入社。以降、製造・流通本部、戦略コンサルティング本部に所属し、13年間にわたり経営コンサルティン業務に従事。2017年より本プロジェクトに参画し、キリロム工科大学における産学連携部門を担当。"
        },
        {
          imgSrc: "images/people/person-7.png",
          name: "安田 幸正",
          position: "CFO  vKirirom Pte. Ltd.",
          selfIntro:
            "1965年、愛知県生まれ<br />中央大学理工学部卒業後、山一證券株式会社に入社。以降一貫して経理・財務部門での経験を積み、英国法人での勤務後メリルリンチ日本証券に入社、東京、シンガポール勤務を経て、2014年より三菱UFJモルガン・スタンレーPB証券のCFOを務め、2019年より本プロジェクトにCFOとして参加し、グループ全体の財務戦略を担当"
        },
        {
          imgSrc: "images/people/person-3.png",
          name: "黒瀬 千尋",
          position: "vKirirom Japan株式会社 取締役",
          selfIntro:
            "982年、北海道生まれ<br />筑波大学卒業後、人材派遣会社を経て、業務コンサルテ<br />ィング会社に入社。ERP導入を始め、組織/業務改革プロ<br />ジェクトを推進。2015年より本プロジェクト参画し、社<br />長室長を担当。2018年よりvKirirom Japan株式会社取締役。"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
