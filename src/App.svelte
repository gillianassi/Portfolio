<script>
  import { Router, Route } from "svelte-routing";
  import Index from "./Routes/index.svelte";
  // @ts-ignore
  import About from "./Routes/about.svelte";
  import Footer from "./components/Footer.svelte";
import Navigation from "./partials/navigation.svelte";
</script>

<Router>
  <Navigation />
  <main class="overflow-x-hidden">
    <Route path="/" component="{Index}" />
    <Route path="/about" component="{About}" />
  </main>
  <Footer />
</Router>

<style global>
  @import url('https://fonts.googleapis.com/css2?family=Changa:wght@200;400;500;600;700&display=swap');
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
</style>
  