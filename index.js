const express = require("express");
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const app = express();
const port = 3000;

// Replace with your Key Vault name
const keyVaultName = "<your-keyvault-name>";
const keyVaultUrl = `https://${keyVaultName}.vault.azure.net`;

const credential = new DefaultAzureCredential();
const client = new SecretClient(keyVaultUrl, credential);

app.get("/get-secret", async (req, res) => {
    try {
        const secret = await client.getSecret("username");
        res.json({ username: secret.value });
    } catch (error) {
        console.error("Error fetching secret:", error);
        res.status(500).json({ error: "Failed to fetch secret" });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
