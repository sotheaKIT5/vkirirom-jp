import Vue from "vue/dist/vue.min";
import BotUI from "botui";
import "botui/build/botui.min.css";
import "botui/build/botui-theme-default.css";
export default function initBotApp() {
  // eslint-disable-next-line no-undef
  let botui = BotUI("my-bot", { vue: Vue });
  const axios = require("axios");
  var cust_choices = {};
  var userEmail;
  var userName;
  var userNumber;

  botui.message
    .add({ content: "こんにちは、A2Aデジタルジャパンへようこそ！" })
    .then(() => {
      init();
    });

  var init = function() {
    return botui.message
      .add({
        // second one
        delay: 1000, // wait 1 sec.
        loading: true,
        content: "サービスを選択してください"
      })
      .then(() => {
        return botui.action.button({
          // let the user perform an action
          delay: 1000,
          loading: true,
          action: [
            {
              text: "Cloud Crew",
              value: "cloud_crew"
            },
            {
              text: "オフショア開発",
              value: "service2"
            },
            {
              text: "エンジニア採用",
              value: "service3"
            }
          ]
        });
      })
      .then(res => {
        // eslint-disable-next-line no-unused-vars,no-undef
        cust_choices.service = res.text;
        if (res.value === "cloud_crew") {
          fcloud_crew();
        } else if (res.value === "service2") {
          fservice2();
          // eslint-disable-next-line no-empty
        } else if (res.value === "service3") {
          fservice3();
        }
      });
  };

  //////////////////////////////////////////////// First ////////////////////////////////////////////////////////////////////////////////
  // eslint-disable-next-line camelcase
  var fcloud_crew = function() {
    return botui.message
      .add({
        // second one
        delay: 1000, // wait 1 sec.
        loading: true,
        content: "サービスの詳細を選択してください"
      })
      .then(() => {
        return botui.action.button({
          // let the user perform an action
          delay: 1000,
          loading: true,
          action: [
            {
              text: "時間単位で簡易作業できるエンジニアがほしい",
              value: "cloud_service1_1"
            },
            {
              text: "開発案件をそのまま発注したい",
              value: "cloud_service1_2"
            },
            {
              text: "自社のバーチャルエンジニア組織として活用したい",
              value: "cloud_service1_3"
            }
          ]
        });
      })
      .then(res => {
        if (res.value === "cloud_service1_1") {
          // eslint-disable-next-line no-undef
          cust_choices.service2 = res.text;
          // alert('Service 2'+cust_choices.service2)
          fcloud_crew1_1();
        } else if (res.value === "cloud_service1_2") {
          cust_choices.service2 = res.text;
          // eslint-disable-next-line no-undef
          fcloud_crew1_2();
        } else if (res.value === "cloud_service1_3") {
          cust_choices.service2 = res.text;
          // eslint-disable-next-line no-undef
          fcloud_crew1_3();
        }
      });
  };
  // ////////////////////////////////////////////// Second  ////////////////////////////////////////////////////////////////////////////////
  var fservice2 = function() {
    return botui.message
      .add({
        // second one
        delay: 1000, // wait 1 sec.
        loading: true,
        content: "サービスを選択してください"
      })
      .then(() => {
        return botui.action
          .button({
            // let the user perform an action
            delay: 1000,
            loading: true,
            action: [
              {
                text: "人工知能（AI）開発",
                value: "official_developent1"
              },
              {
                text: "IoT開発",
                value: "official_developent2"
              },
              {
                text: "ブロックチェーン",
                value: "official_developent3"
              },
              {
                text: "クラウドコンピューティング",
                value: "official_developent4"
              },
              {
                text: "RPA導入サポート",
                value: "official_developent5"
              },
              {
                text: "PWA(Progressive Web Apps)開発",
                value: "official_developent6"
              },
              {
                text: "VR/AR開発",
                value: "official_developent7"
              },
              {
                text: "Odoo ERP導入",
                value: "official_developent8"
              },
              {
                text: "デジタルマーケティング",
                value: "official_developent9"
              },
              {
                text: "サイバーセキュリティ",
                value: "official_developent10"
              }
            ]
          })
          .then(res => {
            if (res.value === "official_developent1") {
              // eslint-disable-next-line no-undef
              cust_choices.service2 = res.text;
              // alert('Service 2'+cust_choices.service2)
              fofficial_developent1_1();
            } else if (res.value === "official_developent2") {
              // eslint-disable-next-line no-undef
              cust_choices.service2 = res.text;
              fofficial_developent1_2();
            } else if (res.value === "official_developent3") {
              // eslint-disable-next-line no-undef
              cust_choices.service2 = res.text;
              fofficial_developent1_3();
            } else if (res.value === "official_developent4") {
              // eslint-disable-next-line no-undef
              cust_choices.service2 = res.text;
              fofficial_developent1_4();
            } else if (res.value === "official_developent5") {
              // eslint-disable-next-line no-undef
              cust_choices.service2 = res.text;
              fofficial_developent1_5();
            } else if (res.value === "official_developent6") {
              // eslint-disable-next-line no-undef
              cust_choices.service2 = res.text;
              fofficial_developent1_6();
            } else if (res.value === "official_developent7") {
              // eslint-disable-next-line no-undef
              cust_choices.service2 = res.text;
              fofficial_developent1_7();
            } else if (res.value === "official_developent8") {
              // eslint-disable-next-line no-undef
              cust_choices.service2 = res.text;
              fofficial_developent1_8();
            } else if (res.value === "official_developent9") {
              // eslint-disable-next-line no-undef
              cust_choices.service2 = res.text;
              fofficial_developent1_9();
            } else if (res.value === "official_developent10") {
              // eslint-disable-next-line no-undef
              cust_choices.service2 = res.text;
              fofficial_developent1_10();
            }
          });
      });
  };

  ////////////////////////////////////////////////////////////////// First 01 ///////////////////////////////////////////////////////////////
  var fcloud_crew1_1 = function() {
    fperonal_info();
  };
  ////////////////////////////////////////////////////////////////// First 02 ///////////////////////////////////////////////////////////////
  var fcloud_crew1_2 = function() {
    fperonal_info();
  };
  ////////////////////////////////////////////////////////////////// First 03 ///////////////////////////////////////////////////////////////
  var fcloud_crew1_3 = function() {
    fperonal_info();
  };
  /////////////////////////////////////////////////////////////////// Second 01 ///////////////////////////////////////////////////////////////
  var fofficial_developent1_1 = function() {
    fperonal_info();
  };
  /////////////////////////////////////////////////////////////////// Second 02 ///////////////////////////////////////////////////////////////
  var fofficial_developent1_2 = function() {
    fperonal_info();
  };
  /////////////////////////////////////////////////////////////////// Second 03 ///////////////////////////////////////////////////////////////
  var fofficial_developent1_3 = function() {
    fperonal_info();
  };
  /////////////////////////////////////////////////////////////////// Second 04 ///////////////////////////////////////////////////////////////
  var fofficial_developent1_4 = function() {
    fperonal_info();
  };
  /////////////////////////////////////////////////////////////////// Second 05 ///////////////////////////////////////////////////////////////
  var fofficial_developent1_5 = function() {
    fperonal_info();
  };
  /////////////////////////////////////////////////////////////////// Second 06 ///////////////////////////////////////////////////////////////
  var fofficial_developent1_6 = function() {
    fperonal_info();
  };
  /////////////////////////////////////////////////////////////////// Second 07 ///////////////////////////////////////////////////////////////
  var fofficial_developent1_7 = function() {
    fperonal_info();
  };
  /////////////////////////////////////////////////////////////////// Second 08 ///////////////////////////////////////////////////////////////
  var fofficial_developent1_8 = function() {
    fperonal_info();
  };
  /////////////////////////////////////////////////////////////////// Second 09 ///////////////////////////////////////////////////////////////
  var fofficial_developent1_9 = function() {
    fperonal_info();
  };
  /////////////////////////////////////////////////////////////////// Second 10 ///////////////////////////////////////////////////////////////
  var fofficial_developent1_10 = function() {
    fperonal_info();
  };
  // /////////////////////////////////////////////////////////////////// Third ///////////////////////////////////////////////////////////////
  var fservice3 = function() {
    return botui.message
      .add({
        // second one
        delay: 1000, // wait 1 sec.
        loading: true,
        content: "サービスの詳細を選択してください"
      })
      .then(() => {
        return botui.action.button({
          // let the user perform an action
          delay: 1000,
          loading: true,
          action: [
            {
              text: "客先常駐型ITエンジニア",
              value: "hire_service1_1"
            },
            {
              text: "新興国IT人材マッチングサイト運営",
              value: "hire_service1_2"
            },
            {
              text: "奨学金スポンサープログラム",
              value: "hire_service1_3"
            }
          ]
        });
      })
      .then(res => {
        if (res.value === "hire_service1_1") {
          // eslint-disable-next-line no-undef
          cust_choices.service2 = res.text;
          // alert('Service 2'+cust_choices.service2)
          fhire_service1_1();
        } else if (res.value === "hire_service1_2") {
          cust_choices.service2 = res.text;
          // eslint-disable-next-line no-undef
          fhire_service1_2();
        } else if (res.value === "hire_service1_3") {
          cust_choices.service2 = res.text;
          // eslint-disable-next-line no-undef
          fhire_service1_3();
        }
      });
  };
  ///////////////////////////////////////////////////////////////////// Third 01 ///////////////////////////////////////////////////////////////
  var fhire_service1_1 = function() {
    fperonal_info();
  };
  ///////////////////////////////////////////////////////////////////// Third 02 ///////////////////////////////////////////////////////////////
  var fhire_service1_2 = function() {
    fperonal_info();
  };
  ///////////////////////////////////////////////////////////////////// Third 03 ///////////////////////////////////////////////////////////////
  var fhire_service1_3 = function() {
    fperonal_info();
  };
  ///////////////////////////////////////////////////////////////////// Last ///////////////////////////////////////////////////////////////
  // eslint-disable-next-line camelcase
  var fperonal_info = function() {
    return botui.message
      .add({
        // show a message
        delay: 1000,
        loading: true,
        content: "メールアドレスを名前を入力してください。"
      })
      .then(() => {
        // wait till its shown
        return botui.action.text({
          // show 'text' action
          action: {
            placeholder: "メールアドレス"
          }
        });
      })
      .then(res => {
        var email = emailValidation(res);
        return email;
      })
      .then(res => {
        userEmail = res.value;
        return botui.message.add({
          // show a message
          delay: 1000,
          loading: true,
          content: "お名前を入力してください"
        });
      })
      .then(() => {
        // wait till its shown
        return botui.action.text({
          // show 'text' action
          action: {
            placeholder: "氏名"
          }
        });
      })
      .then(res => {
        userName = res.value;
        return botui.message.add({
          // show a message
          delay: 1000,
          loading: true,
          content: "電話番号を入力してください（ハイフンは不要です）"
        });
      })
      .then(() => {
        // wait till its shown
        return botui.action.text({
          // show 'text' action
          action: {
            placeholder: "電話番号"
          }
        });
      })
      .then(res => {
        var phone_number = phoneNumberValidation(res);
        return phone_number;
      })
      .then(res => {
        userNumber = res.value;
        var services = "";
        for (var key in cust_choices) {
          services = services + cust_choices[key] + "<br> ";
        }
        return services;
      })
      .then(services => {
        return botui.message.add({
          // show a message
          delay: 1000,
          loading: true,
          type: "html",
          // eslint-disable-next-line no-undef
          content: `- <b> 氏名 </b> : ${userName} <br><br>- <b>電話番号</b> : ${userNumber} <br><br>- <b> メールアドレス </b> : ${userEmail} <br><br>- <b> ご要望頂いたサービスはこちらです </b> : <br> ${services}`
        });
      })
      .then(() => {
        return botui.message.add({
          // second one
          delay: 1000, // wait 1 sec.
          loading: true,
          content: "お問い合わせ内容を送信してよろしいですか ?"
        });
      })
      .then(() => {
        return botui.action.button({
          // let the user perform an action
          delay: 1000,
          loading: true,
          action: [
            {
              text: "はい",
              value: "yes"
            },
            {
              text: "いいえ",
              value: "no"
            }
          ]
        });
      })
      .then(res => {
        if (res.value === "yes") {
          sendEmail();
          return botui.message.add({
            // second one
            delay: 1000, // wait 1 sec.
            loading: true,
            content: "お問い合わせいただきありがとうございました。"
          });
        } else if (res.value === "no") {
          for (var key in cust_choices) {
            cust_choices[key] = "";
          }
          init();
        }
      });
  };

  ////////////////////////  Validate Email /////////////////////////////
  var emailValidation = function(res) {
    // eslint-disable-next-line no-useless-escape
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/;
    if (res.value.match(mailformat)) {
      return res;
    } else {
      return emailInputAgain();
    }
  };

  var emailInputAgain = function() {
    return botui.message
      .add({
        // show a message
        delay: 1000,
        loading: true,
        content:
          "メールアドレスが無効です。 有効なメールアドレスをもう一度入力してください。"
      })
      .then(() => {
        // wait till its shown
        return botui.action.text({
          // show 'text' action
          action: {
            placeholder: "メールアドレス"
          }
        });
      })
      .then(res => {
        return emailValidation(res);
      });
  };

  ////////////////////////  Validate Phone Number /////////////////////////////
  var phoneNumberValidation = function(res) {
    // alert(res.value);
    var phoneno = /^[0-9]{9,11}$/;
    if (res.value.match(phoneno)) {
      return res;
    } else {
      return phoneInputAgain();
    }
  };

  var phoneInputAgain = function() {
    return botui.message
      .add({
        // show a message
        delay: 1000,
        loading: true,
        content: "電話番号に誤りがあります。正しい電話番号を入力してください。"
      })
      .then(() => {
        // wait till its shown
        return botui.action.text({
          // show 'text' action
          action: {
            placeholder: "電話番号"
          }
        });
      })
      .then(res => {
        return phoneNumberValidation(res);
      });
  };

  ///////////////////////////////////////////////////////////////////// Sendmail /////////////////////////////////////////////////////////////
  var sendEmail = function() {
    var services = "";
    for (var key in cust_choices) {
      services = services + "\n " + cust_choices[key];
    }
    axios
      .post("https://a2a-digital-backend.herokuapp.com/api/send-email-japan", {
        first_name: userName,
        last_name: "",
        email: userEmail,
        phoneNumber: userNumber,
        message: "From Chatbot",
        purpose: services
      })
      .then(function(response) {
        // currentObj.output = response.data;
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch(function(error) {
        // currentObj.output = error;
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
}
