export type Language = "es" | "en";

interface DiceRule {
  dado: number;
  resultado: string;
}

export interface Translation {
  team: string;
  music: string;
  name: string;
  objetive: string;
  rules: string;
  voidLord: string;
  achivements: string;
  home: string;
  contact: string;
  hallOfFame: string;
  credits: string;
  info: string;
  homeTitle: string;
  homeExpl: string;
  homeThanks: string;
  homeGames: string;
  information: string;
  contactDoubt: string;
  writeUs: string;
  hallTitle: string;
  hallDate: string;
  hallLoad: string;
  hallNoPlayer: string;
  TTRInfoTitle: string;
  TTR_description: string;
  TTR_rules_intro: string;
  TTR_rules: DiceRule[];
  TTR_primera_victoria: string;
  TTR_victoria_estelar: string;
  TTR_juego_ninos: string;
  TTR_victoria_inapelable: string;
  TTR_en_serio: string;
  TTR_primera_victoria_expl: string;
  TTR_victoria_estelar_expl: string;
  TTR_juego_ninos_expl: string;
  TTR_victoria_inapelable_expl: string;
  TTR_afk_expl: string;
  TTR_en_serio_expl: string;
  TTR_void_lord: string;
  TTR_credit_title: string;
  development: string;
  designArt: string;
  script: string;
  translations: string;
  testers: string;
  privacy: string;
  cookies: string;
  legalNotice: string;
}

export const translations = {  
  es: {
    legalNotice: "Aviso Legal",
    privacy: "Privacidad",
    cookies: "Cookies",
    team: "El equipo",
    music: "Música",
    name: "Nombre",
    objetive: "Objetivo",
    rules: "Reglas",
    voidLord: "Señor del vacio",
    achivements: "Logros",
    home: "Inicio",
    contact: "Contacto",
    hallOfFame: "Salón de la fama",
    credits: "Créditos",
    info: "Información",
    homeTitle: "Estudio indie de videojuegos",
    homeExpl: "Bienvenido a nuestra web oficial. Revisa los salones de la fama de cada juego y descubre si eres de esos pocos jugadores que han superado un reto legendario.",
    homeThanks:"Los juegos y aplicaciones de WoAiDa han sido desarrollados con ilusión, dedicación y mucho cariño por un equipo muy pequeño. Gracias por apoyar nuestro trabajo y formar parte de esta aventura.",
    homeGames: "Nuestros juegos",
    information: "Información",
    contactDoubt: "¿Tienes alguna duda o sugerencia? Escríbenos.",
    writeUs: "Escríbenos a",
    hallTitle: "Bienvenido al salón de la fama. Aquí estan los jugadores que han logrado vencer al señor del vacio",
    hallDate: "Fecha de consecución",
    hallLoad: "Cargando jugadores...",
    hallNoPlayer: "No hay jugadores registrados aún",
    TTRInfoTitle: "Sobre el juego",
    TTR_description: "Tic Tac Random le da la vuelta al clásico tres en raya: los eventos aleatorios asociados al dado y las traits hacen que cada partida diferente.",
    TTR_rules_intro: "Lo más probable en una partida de tres en raya es acabar en empate, por eso en este juego hemos añadido el dado. Después de que un jugador coloque una ficha, debe tirarlo y desencadenar uno de los 6 resultados posibles:",
    TTR_rules: [
      { dado: 1, resultado: "Elige una ficha del rival para eliminarla" },
      { dado: 2, resultado: "Se vuelve a tirar el dado" },
      { dado: 3, resultado: "Elige una ficha propia para eliminarla" },
      { dado: 4, resultado: "No sucede nada" },
      { dado: 5, resultado: "Puedes poner una ficha más y tirar de nuevo el dado" },
      { dado: 6, resultado: "Pierdes la ficha que acabas de poner" },
    ],
    TTR_primera_victoria: "Primera victoria",
    TTR_victoria_estelar: "Triunfo estelar",
    TTR_juego_ninos: "Juego de niños",
    TTR_victoria_inapelable: "Victoria inapelable",
    TTR_en_serio: "¿En serio?",
    TTR_primera_victoria_expl: "Gana tu primera partida",
    TTR_victoria_estelar_expl: "Gana una partida contra la máquina en el nivel de dificultad demente",
    TTR_juego_ninos_expl: "Gana una partida contra la máquina con el menor nivel de dificultad posible",
    TTR_victoria_inapelable_expl: "Gana una partida contra la máquina con al menos 150 puntos de dificultad",
    TTR_afk_expl: "Pierde una partida contra la máquina sin hacer ningún movimiento",
    TTR_en_serio_expl: "Pierde una partida contra la máquina con el menor nivel de dificultad posible",
    TTR_void_lord: "El objetivo final del juego es vencer al jefe final, el Señor del vacio, un despiadado enemigo que cuenta con poderosas habilidades, algunas de las cuales podrás robarle si consigues vencerle. Para poder retarle primero debes superar los 6 logros del juego.",
    TTR_credit_title: "Creado por WoAiDa",
    development: "Desarrollo",
    designArt: "Diseño y arte",
    script: "Guión",
    translations: "Traducciones",
    testers:"Testers",

  },
  en: {
    legalNotice: "Legal Notice",
    privacy: "Privacy",
    cookies: "Cookies",
    team: "The team",
    music: "Music",
    name: "Name",
    objetive: "Objetive",
    voidLord: "Lord of the void",
    rules: "Rules",
    achivements: "Achivements",
    home: "Home",
    contact: "Contact",
    hallOfFame: "Hall of Fame",
    credits: "Credits",
    info: "Info",
    homeTitle: "Indie video game studio",
    homeExpl: "Welcome to our official website. Check out the halls of fame for each game and find out if you are one of the few players who have achieved a legendary challenge.",
    homeThanks: "WoAiDa’s games and apps have been developed with passion, dedication, and a great deal of love by a very small team. Thank you for supporting our work and being part of this adventure.",
    homeGames: "Our games",
    information: "Information",
    contactDoubt: "Do you have any questions or suggestions? Write to us.",
    writeUs: "Write to us at",
    hallTitle: "Welcome to the Hall of Fame. Here are the players who have managed to defeat the Lord of the Void.",
    hallDate: "Date obtained",
    hallLoad: "Loading players...",
    hallNoPlayer: "No players registered yet",
    TTRInfoTitle: "About the game",
    TTR_description: "Tic Tac Random puts a twist on classic Tic-Tac-Toe: random events linked to the die and special traits make every game different.",
    TTR_rules_intro: "The most likely outcome in a game of tic-tac-toe is a draw, which is why we've added a die to this game. After a player places a piece, they must roll the die and trigger one of 6 possible outcomes:",
    TTR_rules: [
      { dado: 1, resultado: "Choose one of your opponent's pieces to remove" },
      { dado: 2, resultado: "Roll the die again" },
      { dado: 3, resultado: "Choose one of your own pieces to remove" },
      { dado: 4, resultado: "Nothing happens" },
      { dado: 5, resultado: "You can place an extra piece and roll the die again" },
      { dado: 6, resultado: "You lose the piece you just placed" },
    ],
    TTR_primera_victoria: "First victory",
    TTR_victoria_estelar: "Stellar triumph",
    TTR_juego_ninos: "Child's play",
    TTR_victoria_inapelable: "Undeniable victory",
    TTR_en_serio: "Seriously?",
    TTR_primera_victoria_expl: "Win your first game",
    TTR_victoria_estelar_expl: "Win a game against the AI on the Insane difficulty level",
    TTR_juego_ninos_expl: "Win a game against the AI on the lowest difficulty level",
    TTR_victoria_inapelable_expl: "Win a game against the AI with a score of at least 150 points",
    TTR_afk_expl: "Lose a game against the AI without making a single move",
    TTR_en_serio_expl: "Lose a game against the AI on the lowest difficulty level",
    TTR_void_lord: "The game's ultimate goal is to defeat the final boss, the Void Lord—a ruthless enemy possessing powerful abilities, some of which you can steal if you manage to defeat him. To challenge him, you must first complete the game's six achievements.",
    TTR_credit_title: "Created by WoAiDa",
    development: "Development",
    designArt: "Art and design",
    script: "Script",
    translations: "Translations",
    testers:"Testers",
  },
} satisfies Record<Language, Translation>;

export type TranslationKey = keyof typeof translations["es"];
