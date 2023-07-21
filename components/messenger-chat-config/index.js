const MessengerChatConfig = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
                window.fbAsyncInit = function() {
                  FB.init({
                    appId: '671138315032314',
                    xfbml: true,
                    version: 'v11.0'
                  });
                };
                (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
              `,
      }}
    />
  </>
);

export default MessengerChatConfig;
