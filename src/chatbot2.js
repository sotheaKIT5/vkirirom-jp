import Vue from "vue/dist/vue.min";
import BotUI from "botui";
import "botui/build/botui.min.css";
import "botui/build/botui-theme-default.css";
export default function initBotApp() {
  // eslint-disable-next-line no-undef
  let botui = BotUI("my-bot", { vue: Vue });
  const axios = require("axios");
  var question_type = "";
  var customer_question = "";
  var company_name = "";
  var customer_name = "";
  var customer_email = "";
  var selected_type1 = false;
  var selected_type2 = false;

  botui.message
    .add({
      delay: 300,
      loading: true,
      content: "A2A Digitalへようこそ！"
    })
    .then(() => {
      botui.message
        .add({
          delay: 300,
          loading: true,
          content:
            "営業代行サービスにご興味お持ちいただきありがとうございます。以下ご回答頂いた内容に基づき、まずはメールにてご連絡いたします。"
        })
        .then(() => {
          init();
        });
    });

  var init = function() {
    return botui.message
      .add({
        delay: 300,
        loading: true,
        content: "ご質問の種類を選択してください。*複数選択できます"
      })
      .then(() => {
        return botui.action.button({
          action: [
            {
              text: "サービスの詳細について",
              value: "type1"
            },
            {
              text: "価格について",
              value: "type2"
            },
            {
              text: "その他",
              value: "type3"
            }
          ]
        });
      })
      .then(res => {
        if (res.value === "type1") {
          ftype1();
        } else if (res.value === "type2") {
          ftype2();
        } else if (res.value === "type3") {
          ftype3();
        }
      });
  };

  // Function Type1
  var ftype1 = () => {
    return botui.action
      .select({
        action: {
          placeholder: "サービスの詳細について（複数選択）",
          value: "",
          multipleselect: true,
          options: [
            {
              value: "どんなリストがどれくらいあるのか知りたい",
              text: "どんなリストがどれくらいあるのか知りたい"
            },
            {
              value: "作業内容について知りたい",
              text: "作業内容について知りたい"
            },
            {
              value: "期待される成果について知りたい",
              text: "期待される成果について知りたい"
            }
          ],
          button: {
            label: "OK"
          }
        }
      })
      .then(function(res) {
        selected_type1 = true;
        if (!selected_type2) {
          question_type = res.value;
          more_about_price();
        } else {
          question_type = res.value + ", " + question_type;
          fcustomer_question();
        }
      });
  };

  // Function Type2
  var ftype2 = () => {
    return botui.action
      .select({
        action: {
          placeholder: "価格について （複数選択）",
          value: "",
          multipleselect: true,
          options: [
            {
              value: "価格表が欲しい",
              text: "価格表が欲しい"
            },
            {
              value: "見積もりが欲しい",
              text: "見積もりが欲しい"
            }
          ],
          button: {
            label: "OK"
          }
        }
      })
      .then(function(res) {
        selected_type2 = true;
        if (!selected_type1) {
          question_type = res.value;
          more_about_service();
        } else {
          question_type = question_type + ", " + res.value;
          fcustomer_question();
        }
      });
  };

  // Function Type3
  var ftype3 = () => {
    question_type = "その他";
    fcustomer_question();
  };

  // Check is there more question about service
  var more_about_service = () => {
    return botui.message
      .add({
        delay: 300,
        loading: true,
        content: "他に聞きたいことはありますか？"
      })
      .then(() => {
        return botui.action.button({
          action: [
            {
              text: "サービスの詳細について",
              value: "type1"
            },
            {
              text: "特にない",
              value: "no"
            }
          ]
        });
      })
      .then(res => {
        if (res.value === "type1") {
          ftype1();
        } else if (res.value === "no") {
          fcustomer_question();
        }
      });
  };

  // Check is there more question about service
  var more_about_price = () => {
    return botui.message
      .add({
        delay: 300,
        loading: true,
        content: "他に聞きたいことはありますか？"
      })
      .then(() => {
        return botui.action.button({
          action: [
            {
              text: "価格について",
              value: "type2"
            },
            {
              text: "特にない",
              value: "no"
            }
          ]
        });
      })
      .then(res => {
        if (res.value === "type2") {
          ftype2();
        } else if (res.value === "no") {
          fcustomer_question();
        }
      });
  };

  // Customer Question
  var fcustomer_question = () => {
    return botui.message
      .add({
        delay: 500,
        loading: true,
        content:
          "ご質問の詳細についてご記載下さい。*ない場合は「なし」とご記入ください"
      })
      .then(() => {
        return botui.action.text({
          action: {
            placeholder: "質問を記入してください"
          }
        });
      })
      .then(res => {
        // eslint-disable-next-line no-undef
        customer_question = res.value;
        fcustomer_info();
      });
  };

  // Customer Info
  var fcustomer_info = () => {
    return botui.message
      .add({
        // second one
        delay: 500,
        loading: true,
        content: "御社名とお名前を教えて下さい。"
      })
      .then(() => {
        return botui.action.text({
          action: {
            placeholder: "会社名を記入してください"
          }
        });
      })
      .then(res => {
        company_name = res.value;
      })
      .then(() => {
        return botui.action.text({
          action: {
            placeholder: "お名前を記入してください"
          }
        });
      })
      .then(res => {
        customer_name = res.value;
        fcustomer_email();
      });
  };

  // Customer Email
  var fcustomer_email = () => {
    return botui.message
      .add({
        // second one
        delay: 500, // wait 1 sec.
        loading: true,
        content: "最後にメールアドレスを教えて下さい。"
      })
      .then(() => {
        // wait till its shown
        return botui.action.text({
          action: {
            placeholder: "メールアドレス"
          }
        });
      })
      .then(res => {
        emailValidation(res);
      });
  };

  //  Validate Email
  var emailValidation = function(res) {
    // eslint-disable-next-line no-useless-escape
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/;
    if (res.value.match(mailformat)) {
      customer_email = res.value;
      sendEmail();
      return res;
    } else {
      return emailInputAgain();
    }
  };

  var emailInputAgain = function() {
    return botui.message
      .add({
        delay: 500,
        loading: true,
        type: "html",
        content:
          "<p style='color: #F44336;'>メールアドレスが無効です。 有効なメールアドレスをもう一度入力してください。</p>"
      })
      .then(() => {
        // wait till its shown
        return botui.action.text({
          action: {
            placeholder: "メールアドレス"
          }
        });
      })
      .then(res => {
        return emailValidation(res);
      });
  };

  // Sendmail
  var sendEmail = function() {
    botui.message
      .add({
        human: true,
        content: "送信中..."
      })
      .then(send => {
        axios
          .post("https://a2a-digital-backend.herokuapp.com/api/chatbot", {
            question_type,
            customer_question,
            company_name,
            customer_name,
            customer_email
          })
          .then(function() {
            botui.message.remove(send);
            mail_sent();
          })
          .catch(function() {
            botui.message.remove(send);
            botui.message.add({
              type: "html",
              content:
                "<p style='color: #F44336;'>もう一度やり直してください</p>"
            });
            init();
          });
      });
  };

  var mail_sent = function() {
    return botui.message.add({
      delay: 500,
      loading: true,
      content: "ありがとうございました。担当よりメールにてご連絡いたします。"
    });
  };
}
