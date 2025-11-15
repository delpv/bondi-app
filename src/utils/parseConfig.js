// Import Parse SDK (standard import)
import Parse from "parse";

// Initialize Parse with credentials from .env file
Parse.initialize(
  import.meta.env.VITE_PARSE_APP_ID, // Application ID
  import.meta.env.VITE_PARSE_JS_KEY // JavaScript Key
);

// THIS IS THE KEY LINE — it must match your Back4App server
Parse.serverURL = import.meta.env.VITE_PARSE_SERVER_URL;
// Export so it can be used anywhere in your app
export default Parse;
