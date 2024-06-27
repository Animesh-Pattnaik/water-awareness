const API_KEY = ""; // Add your API key here

async function getToken() {
  const response = await fetch("https://iam.cloud.ibm.com/identity/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`,
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch access token: ${response.statusText}`);
  }
  return await response.json();
}

export async function checkPotability(formData) {
  try {
    const tokenResponse = await getToken();
    const payload = {
      input_data: [
        {
          fields: [
            "pH",
            "Hardness",
            "Solids",
            "Chloramines",
            "Sulfate",
            "Conductivity",
            "Organic_carbon",
            "Trihalomethanes",
            "Turbidity",
          ],
          values: [
            [
              parseFloat(formData.pH),
              parseFloat(formData.Hardness),
              parseFloat(formData.Solids),
              parseFloat(formData.Chloramines),
              parseFloat(formData.Sulfate),
              parseFloat(formData.Conductivity),
              parseFloat(formData.Organic_carbon),
              parseFloat(formData.Trihalomethanes),
              parseFloat(formData.Turbidity),
            ],
          ],
        },
      ],
    };

    const scoring_url =
      "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/13ecb52f-1e47-46a9-aad7-9e9a89f200e5/predictions?version=2021-05-01";

    const response = await fetch(scoring_url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenResponse.access_token}`,
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error checking potability: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error checking potability:", error);
    throw error;
  }
}