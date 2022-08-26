<script>
  import { Router, Route } from "svelte-routing";
  import Index from "./Routes/index.svelte";
  // @ts-ignore
  import About from "./Routes/about.svelte";
  import Contact from "./Routes/contact.svelte";
  import Footer from "./partials/Footer.svelte";
  import Navigation from "./partials/navigation.svelte";

  import 'highlight.js/styles/atom-one-dark.css';
  import "./markdown/MarkDown.css";

</script>

<Router>
  <Navigation />
  
  <main class=" overflow-x-hidden">
    <Route path="/" component="{Index}" />
    <Route path="/about" component="{About}" />
    <Route path="/contact" component="{Contact}" />
  </main>
  
  <Footer />
  
</Router>


<style global>
  @import url('https://fonts.googleapis.com/css2?family=Changa:wght@200;400;500;600;700&display=swap');
  @tailwind utilities;
    @tailwind components;
    @tailwind base;



</style>
  