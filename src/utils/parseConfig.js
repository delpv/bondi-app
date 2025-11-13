// Import Parse SDK (standard import)
import Parse from "parse";

// Initialize Parse with credentials from .env file
Parse.initialize(
  import.meta.env.VITE_PARSE_APP_ID, // Application ID
  import.meta.env.VITE_PARSE_JS_KEY // JavaScript Key
);

// Export so it can be used anywhere in your app
export default Parse;
