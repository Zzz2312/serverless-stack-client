const dev = {
  STRIPE_KEY: "pk_test_rzjPlWqEo5CPq5T4hICDH9ZK00hI5GoVSF",
  s3: {
    REGION: "us-east-1",
    BUCKET: "z-notes-app-2-api-dev-attachmentsbucket-50ixjhr1yf2t"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://funt2pq35a.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_moE30G04H",
    APP_CLIENT_ID: "6sedu43k9917lqge3ftqog3sqc",
    IDENTITY_POOL_ID: "us-east-1:95787c94-60fc-4523-b642-19cc460886bf"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_rzjPlWqEo5CPq5T4hICDH9ZK00hI5GoVSF",
  s3: {
    REGION: "us-east-1",
    BUCKET: "z-notes-app-2-api-prod-attachmentsbucket-etb3nf3tq6da"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://j8dkwyjjwl.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_HjRth3dkP",
    APP_CLIENT_ID: "71knn7stidgm3tpgm2ptki75re",
    IDENTITY_POOL_ID: "us-east-1:83470783-91ba-41b9-9d5e-e29b89fc90fb"
  }
};

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};