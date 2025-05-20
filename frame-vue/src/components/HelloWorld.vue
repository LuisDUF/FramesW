<template>
  <v-container fluid class="pa-0 ma-0">
    <v-container fluid class="pa-0 ma-0 mb-15">
      <div class="hero">
        <v-container>
          <div class="d-flex flex-column align-center justify-center" style="gap: 0; width: 100%; margin-top: 5vw;">
            <p class="text-center ma-0 hammersmith-one-regular" style="color: aliceblue; font-size: 5vw; line-height: 1;">
              Organiza tus concursos con SCITRACK
            </p>
            <p class="ma-0 text-center mt-10 px-8 " style=" color: aliceblue; width: 85%; font-size: 1.8vw;">
              Organiza y optimiza tus concursos de proyectos con SciTrack, la plataforma ideal para gestionar cada etapa del proceso.
            </p>
          </div>
        </v-container>
      </div>
    </v-container>

    <v-container class="full-page-center" fluid style="gap: 0; width: 100vw;">
      <v-row no-gutters class="align-center justify-center" style="width: 100%;">
        <v-col cols="5" class="pe-12">
          <v-card flat tile>
            <p style="font-weight: bold; font-size: 1.4vw;">JUSTO A TU MEDIDA</p>
            <p style="font-size: 1.4vw; text-align: justify; width: 100%;">
              Diseñado para simplificar la gestión de concursos en instituciones de nivel medio superior y superior, SciTrack te ayuda a organizar cada detalle mientras garantizas el cumplimiento de los lineamientos y estándares académicos.
            </p>
            <ul style="font-size: 1.4vw;">
              <li>Plataforma intuitiva y fácil de usar.</li>
              <li>Seguridad de datos con encriptación avanzada.</li>
              <li>Soporte y asistencia 24/7.</li>
              <li>Implementación rápida y sin complicaciones.</li>
              <li>Actualizaciones periódicas con nuevas funcionalidades.</li>
            </ul>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card flat tile>
            <img src="../señora.png" alt="" style="width: 100%;">
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Envianos un correo</span>
        </v-card-title>

        <v-card-text>
          <v-form @submit.prevent="sendEmail">
            <v-text-field
              label="Su correo..."
              v-model="form.from"
              type="email"
              required
            ></v-text-field>

            <v-text-field
              label="Asunto..."
              v-model="form.subject"
              type="text"
              required
            ></v-text-field>

            <v-textarea
              label="Mensaje..."
              v-model="form.message"
              required
            ></v-textarea>

            <v-card-actions class="justify-end">
              <v-btn color="blue darken-1" text @click="dialog = false">Cancelar</v-btn>
              <v-btn color="green darken-1 " type="submit" @click="dialog = false">Enviar</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Footer -->
    <v-footer
      color="#062A78"
      v-bind="localAttrs"
      class="pa-0 d-flex align-center justify-center"
      style="position: absolute; width: 100%; color: #062A78;"
    >
      <v-card-text class="white--text d-flex" style="width: fit-content;">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down mr-2"
          contain
          min-width="100"
          src="../SCITRACK.png"
          width="100"
        />
        <p class="pa-0 ma-0 pt-1" style="width: auto;"> - {{ new Date().getFullYear() }}</p>
      </v-card-text>

      <v-card-text class="white--text" style="width: fit-content;">
        <v-btn icon @click="dialog = true">
          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down mr-2"
            contain
            min-width="50"
            src="../mail.png"
            width="50"
          />
        </v-btn>
      </v-card-text>
    </v-footer>

  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    dialog: false,
    form: {
      from: '',
      to: '',
      subject: '',
      message: ''
    },
    ecosystem: [],
    importantLinks: [],
    whatsNext: []
  }),
  methods: {
    async sendEmail() {
      try {
        const response = await fetch('/send_email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: this.form.from,
            to: 'r401.mc@gmail.com', 
            subject: this.form.subject,
            mesage: this.form.message 
          })
        });

        if (!response.ok) {
          throw new Error('Failed to send email');
        }

        const result = await response.json(); 
        console.log('Success:', result);
        this.dialog = false;
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  }
};
</script>

<style scoped>
.hero {
  background: url('../pdro.png');
  background-size: cover;
  height: 73.5vh;
  width: 100vw;
}
.hammersmith-one-regular {
  font-family: "Hammersmith One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>