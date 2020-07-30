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

  botui.message
    .add({
      content:
        "A2A Digitalへようこそ！営業代行サービスにご興味お持ちいただきありがとうございます。"
    })
    .then(() => {
      init();
    });

  var init = function() {
    return botui.message
      .add({
        // second one
        delay: 500, // wait 1 sec.
        loading: true,
        content: "ご質問の種類を選択してください。"
      })
      .then(() => {
        return botui.action.button({
          delay: 500,
          loading: true,
          action: [
            {
              text: "サービスの詳細について",
              value: "detail_of_service"
            },
            {
              text: "価格について",
              value: "about_price"
            },
            {
              text: "その他",
              value: "other"
            }
          ]
        });
      })
      .then(res => {
        question_type = res.text;
        fcustomer_question();
      });
  };

  // Customer Question
  var fcustomer_question = () => {
    return botui.message
      .add({
        delay: 500,
        loading: true,
        content: "ご質問の詳細について教えて下さい。"
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
          // show 'text' action
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
      content: "ざいました。担当よりメールでご連絡いたしありがとうごます。"
    });
  };
}
