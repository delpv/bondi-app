// Import Parse SDK
import Parse from "parse/dist/parse.min.js";

// Initialize with your Back4App keys
Parse.initialize(
    "JhB5FwxCJnm9LOkEugEuabuD5aXq2nvjnAX9eIAO",
    "DfcVQS5DNB5AzEUw8Wpd63cIuv6hZPrHchSQHzSB"
);
Parse.serverURL = "https://parseapi.back4app.com/";

// Export so it can be used anywhere in your app
export default Parse;