// Import Parse SDK (standard import)
import Parse from "parse";

// Initialize Parse with credentials from .env file
Parse.initialize(
  import.meta.env.VITE_PARSE_APP_ID, // Application ID
  import.meta.env.VITE_PARSE_JS_KEY // JavaScript Key
);

// Set the server URL
Parse.serverURL =
  import.meta.env.VITE_PARSE_SERVER_URL;

// Export Parse instance to use in other files
export default Parse;