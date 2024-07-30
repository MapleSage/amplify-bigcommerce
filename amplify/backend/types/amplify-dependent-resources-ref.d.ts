export type AmplifyDependentResourcesAttributes = {
  "api": {
    "bcApi": {
      "ApiName": "string",
      "RootUrl": "string"
    },
    "uninstallApi": {
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "auth": {
    "CognitoStores": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "AppClientSecret": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "CognitoStoresCreateAuthChallenge": {
      "Arn": "string",
      "Name": "string",
      "Region": "string"
    },
    "CognitoStoresDefineAuthChallenge": {
      "Arn": "string",
      "Name": "string",
      "Region": "string"
    },
    "CognitoStoresPreSignup": {
      "Arn": "string",
      "Name": "string",
      "Region": "string"
    },
    "CognitoStoresVerifyAuthChallengeResponse": {
      "Arn": "string",
      "Name": "string",
      "Region": "string"
    },
    "bcApiClient": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "Name": "string",
      "Region": "string"
    },
    "bcApiLambda": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "Name": "string",
      "Region": "string"
    },
    "retrieveSecret": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "Name": "string",
      "Region": "string"
    },
    "uninstallLambda": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "hosting": {
    "S3AndCloudFront": {
      "CloudFrontDistributionID": "string",
      "CloudFrontDomainName": "string",
      "CloudFrontSecureURL": "string",
      "HostingBucketName": "string",
      "Region": "string",
      "S3BucketSecureURL": "string",
      "WebsiteURL": "string"
    }
  },
  "storage": {
    "DynamoStores": {
      "Arn": "string",
      "Name": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "Region": "string",
      "StreamArn": "string"
    }
  }
}