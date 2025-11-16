// Import Parse SDK (standard import)
import Parse from "parse";

// Initialize Parse with credentials from .env file
Parse.initialize(
  import.meta.env.VITE_PARSE_APP_ID, // Application ID
  import.meta.env.VITE_PARSE_JS_KEY // JavaScript Key
);

<<<<<<< HEAD
// THIS IS THE KEY LINE — it must match your Back4App server
Parse.serverURL = import.meta.env.VITE_PARSE_SERVER_URL;
// Export so it can be used anywhere in your app
export default Parse;
=======
// Set the server URL
Parse.serverURL =
  import.meta.env.VITE_PARSE_SERVER_URL;

// Export Parse instance to use in other files
export default Parse;
>>>>>>> fb28215a0f9a558d12196340cf89e188465d7ff9
