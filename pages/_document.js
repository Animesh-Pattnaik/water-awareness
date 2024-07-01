import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>{/* Other head elements can go here */}</Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.watsonAssistantChatOptions = {
    integrationID: "f13b71d9-20f3-4bb7-b7f7-4a4a5cee3830", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "97b7eaa0-fd0b-4d41-8be9-0d52884d0c25", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
