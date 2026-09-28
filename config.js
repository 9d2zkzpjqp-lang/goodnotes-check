window.KLAUSURCHECK_CONFIG = {
  title: "Goodnotes-Check",
  className: "9. Klasse",
  topic: "Start in die Tabletklasse",
  datasetId: "goodnotes-workshop-9-2026-09",
  version: "1.1.0",

  usageMode: "diagnose",

  // Für den kurzen Einstieg ist kein Verlauf über mehrere Messzeitpunkte nötig.
  history: {
    enabled: false,
    autoMinutes: 2
  },

  // Fragen und Wünsche der Lerngruppe können gegenseitig hochgestimmt werden.
  upvotesEnabled: true,

  competencies: [
    {
      id: "organisation",
      title: "Notizbücher und Ordner organisieren",
      info: "Ein Notizbuch oder einen Ordner anlegen, sinnvoll benennen, verschieben und so ablegen, dass du deine Materialien schnell wiederfindest."
    },
    {
      id: "werkzeuge",
      title: "Schreiben, markieren und korrigieren",
      info: "Stift, Textmarker, Radierer und Rückgängig-Funktion sicher nutzen und die wichtigsten Schreibwerkzeuge passend auswählen."
    },
    {
      id: "lasso",
      title: "Lasso-Werkzeug und Inhalte bearbeiten",
      info: "Handschrift, Bilder oder andere Inhalte auswählen, verschieben, kopieren sowie – je nach Inhalt – Größe oder Darstellung ändern."
    },
    {
      id: "seiten_pdf",
      title: "Seiten und PDFs importieren und verwalten",
      info: "PDFs oder Arbeitsblätter importieren sowie Seiten hinzufügen, verschieben, kopieren, neu anordnen oder löschen."
    },
    {
      id: "export",
      title: "Dokumente oder Seiten exportieren und teilen",
      info: "Eine Seite oder ein Dokument zum Beispiel als PDF exportieren und für eine Abgabe oder Weitergabe bereitstellen."
    },
    {
      id: "backup",
      title: "Automatische Sicherung (Auto Backup) einrichten und prüfen",
      info: "Wissen, wozu die automatische Sicherung dient, welchen Cloud-Speicher sie nutzt und wie du kontrollierst, ob deine Goodnotes-Dokumente erfolgreich gesichert werden."
    }
  ],

  // Bestehendes Supabase-Projekt des Lernstandschecks.
  // Der Publishable Key ist für Browser-Code vorgesehen.
  supabaseUrl: "https://tgokrdtlvtfyxaqscuwx.supabase.co",
  supabasePublishableKey: "sb_publishable_YKnRHgSUgHx6dj-wDHWvOA_OKEFAaaW"
};
