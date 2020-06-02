export default {
    s3: {
        REGION: "us-east-1", 
        BUCKET: "z-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://gatow4m7ki.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_RQY8OLe2r",
        APP_CLIENT_ID: "3hu3f9mkpffv35gn4dc92d6r5j",
        IDENTITY_POOL_ID: "us-east-1:e81682f9-67a3-41ce-8466-2a446cd718ba" 
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_rzjPlWqEo5CPq5T4hICDH9ZK00hI5GoVSF"
};