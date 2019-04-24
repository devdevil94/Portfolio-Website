import Highway from "@dogstudio/highway";
import PageTransition from "./transition";

const H = new Highway.Core({
  transitions: {
    default: PageTransition
  }
});
