import { Background } from './Background';
export const LoaderConfig = {
    backGround : require("../sprites/Gamesprite/BG.png"),
    Bottom : require("../sprites/Bottom.png"),
    Sprint : require("../sprites/Gamesprite/PlayButton.png"),
    Char0 :  require("../sprites/Gamesprite/Char1.png"),
    Char1 :  require("../sprites/Gamesprite/Char2.png"),
    Char2 :  require("../sprites/Gamesprite/Char3.png"),
    Char3 :  require("../sprites/Gamesprite/Char4.png"),
    Char4 :  require("../sprites/Gamesprite/Char5.png"),
    Char5 :  require("../sprites/Gamesprite/Char6.png"),
    Char6 :  require("../sprites/Gamesprite/Char7.png"),
    Char7 :  require("../sprites/Gamesprite/Char8.png"),
    Char8 :  require("../sprites/Gamesprite/Char9.png"),
    Char9 :  require("../sprites/Gamesprite/Char10.png"),
    arrL : require("../sprites/Gamesprite/LeftButton.png"),
    arrR : require("../sprites/Gamesprite/RightButton.png"),
    frame : require("../sprites/Gamesprite/Frame.png"),
    whiteBG : require("../sprites/whiteBG.png"),
    ButtonBg  :require("../sprites/Gamesprite/ButtonBG.png"),
    ButtonBg1  :require("../sprites/Gamesprite/ButtonBG1.png"),
    ButtonBg2  :require("../sprites/Gamesprite/ButtonBG2.png"),
    symbolSlot  :require("../sprites/symbolSlot.png"),






    

};

export const staticData = {
    // logoURL: "https://cccdn.b-cdn.net/1584464368856.png",
    logoURL: require("/static/logo.png").default,
    Background: require("/static/Background.png").default,


};

export const fontData = ["Inter"];



export const LoaderSoundConfig: any = {
bgMusic : require("../sounds/BgMusic.mp3"),
onSpin : require("../sounds/onStartCoin.mp3"),
onWin : require("../sounds/winMusic.mp3"),
};

export const preloaderConfig = {
    // startLogo: require("../sprites/Logo.png")
}