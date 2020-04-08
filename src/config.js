const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-9162udxjvfco"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "http://notes-api.adamdelrosso.me/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_i7irLQyb0",
    APP_CLIENT_ID: "50lv560sojqdncoaul4e1647ib",
    IDENTITY_POOL_ID: "us-east-2:b37be4db-124e-4daf-a3ab-ac790ed1dbd5"
  }
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "http://notes-api.adamdelrosso.me/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_zDLld0BGH",
    APP_CLIENT_ID: "4gvm0hedo3be6ooeu2d2aedm38",
    IDENTITY_POOL_ID: "us-east-2:fced9b25-fc14-47da-8ad1-91c983e4e09c"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};