const API_KEY = "";


const scoring_url = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/13ecb52f-1e47-46a9-aad7-9e9a89f200e5/predictions?version=2021-05-01";
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getToken() {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("POST", "https://iam.cloud.ibm.com/identity/token");
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Accept", "application/json");
    req.send(`grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`);

    req.onload = () => {
      if (req.status >= 200 && req.status < 300) {
        console.log("Token received:", JSON.parse(req.responseText).access_token);
        resolve(JSON.parse(req.responseText).access_token);
      } else {
        reject(req.statusText);
      }
    };

    req.onerror = () => reject(req.statusText);
  });
}

function apiPost(scoring_url, token, payload) {
  return new Promise((resolve, reject) => {
    const oReq = new XMLHttpRequest();
    oReq.open("POST", scoring_url);
    oReq.setRequestHeader("Accept", "application/json");
    oReq.setRequestHeader("Authorization", `Bearer ${token}`);
    oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    oReq.send(payload);

    oReq.onload = () => {
      if (oReq.status >= 200 && oReq.status < 300) {
        console.log("API response:", JSON.parse(oReq.responseText));
        resolve(JSON.parse(oReq.responseText));
      } else {
        reject(oReq.statusText);
      }
    };

    oReq.onerror = () => reject(oReq.statusText);
  });
}

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const token = await getToken();
      const payload = JSON.stringify({
        "input_data": [
          {
            "fields": [
              "ph",
              "Hardness",
              "Solids",
              "Chloramines",
              "Sulfate",
              "Conductivity",
              "Organic_carbon",
              "Trihalomethanes",
              "Turbidity"
            ],
            "values": [Object.values(req.body).map(value => parseFloat(value))]
          }
        ]
      });

      console.log("Payload sent to API:", payload);

      const response = await apiPost(scoring_url, token, payload);
      const values = response.predictions[0].values[0][0]; // Adjust according to your response structure
      console.log("Potability result:", values);
      res.status(200).json({ result: values });
    } catch (error) {
      console.error("Error in API route:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
