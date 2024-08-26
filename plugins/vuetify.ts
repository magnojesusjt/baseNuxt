import { createVuetify } from "vuetify";
import "vuetify/styles";
import { md3 } from "vuetify/blueprints";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    blueprint: md3,
  });

  nuxtApp.vueApp.use(vuetify);
});
