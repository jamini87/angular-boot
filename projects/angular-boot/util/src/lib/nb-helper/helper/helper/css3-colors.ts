import {isNullOrUndefined} from '../../../nb-util';

export class Css3Colors {
  public static REDS = class {
    public static indianRed = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'IndianRed';
      }
      else return 'rgba(205,92,92,' + alpha + ')';
    };

    public static lightCoral = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightCoral';
      }
      else return 'rgba(240,128,128,' + alpha + ')';
    };
    public static salmon = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Salmon';
      }
      else return 'rgba(250,128,114,' + alpha + ')';
    };
    public static darkSalmon = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkSalmon';
      }
      else return 'rgba(233,150,122,' + alpha + ')';
    };
    public static lightSalmon = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightSalmon';
      }
      else return 'rgba(255,160,122,' + alpha + ')';
    };
    public static crimson = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Crimson';
      }
      else return 'rgba(220,20,60,' + alpha + ')';
    };
    public static red = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Red';
      }
      else return 'rgba(255,0,0,' + alpha + ')';
    };
    public static fireBrick = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'FireBrick';
      }
      else return 'rgba(178,34,34,' + alpha + ')';
    };

    public static darkRed = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkRed';
      }
      else return 'rgba(139,0,0,' + alpha + ')';
    };
  };

  public static PINKS = class {
    public static pink = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Pink';
      }
      else return 'rgba(255,192,203,' + alpha + ')';
    };
    public static lightPink = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightPink';
      }
      else return 'rgba(255,182,193,' + alpha + ')';
    };
    public static hotPink = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'HotPink';
      }
      else return 'rgba(255,105,180,' + alpha + ')';
    };
    public static deepPink = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DeepPink';
      }
      else return 'rgba(255,20,147,' + alpha + ')';
    };
    public static mediumVioletRed = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MediumVioletRed';
      }
      else return 'rgba(199,21,133,' + alpha + ')';
    };
    public static PaleVioletRed = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'PaleVioletRed';
      }
      else return 'rgba(219,112,147,' + alpha + ')';
    };
  };

  public static ORANGES = class {

    public static coral = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Coral';
      }
      else return 'rgba(255,127,80,' + alpha + ')';
    };

    public static tomato = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Tomato';
      }
      else return 'rgba(255,99,71,' + alpha + ')';
    };

    public static orangeRed = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'OrangeRed';
      }
      else return 'rgba(255,69,0,' + alpha + ')';
    };

    public static darkOrange = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkOrange';
      }
      else return 'rgba(255,140,0,' + alpha + ')';
    };

    public static orange = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Orange';
      }
      else return 'rgba(255,165,0,' + alpha + ')';
    };
  };

  public static YELLOWS = class {

    public static gold = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Gold';
      }
      else return 'rgba(255,215,0,' + alpha + ')';
    };

    public static yellow = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Yellow';
      }
      else return 'rgba(255,255,0,' + alpha + ')';
    };

    public static lightYellow = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightYellow';
      }
      else return 'rgba(255,255,224,' + alpha + ')';
    };

    public static lemonChiffon = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LemonChiffon';
      }
      else return 'rgba(255,250,205,' + alpha + ')';
    };

    public static lightGoldenrodYellow = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightGoldenrodYellow';
      }
      else return 'rgba(250,250,210,' + alpha + ')';
    };

    public static papayaWhip = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'PapayaWhip';
      }
      else return 'rgba(255,239,213,' + alpha + ')';
    };

    public static moccasin = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Moccasin';
      }
      else return 'rgba(255,228,181,' + alpha + ')';
    };

    public static peachPuff = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'PeachPuff';
      }
      else return 'rgba(255,218,185,' + alpha + ')';
    };

    public static paleGoldenrod = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'PaleGoldenrod';
      }
      else return 'rgba(238,232,170,' + alpha + ')';
    };

    public static khaki = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Khaki';
      }
      else return 'rgba(240,230,140,' + alpha + ')';
    };

    public static darkKhaki = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkKhaki';
      }
      else return 'rgba(189,183,107,' + alpha + ')';
    };
  };

  public static Purples = class {
    public static lavender = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Lavender';
      }
      else return 'rgba(230,230,250,' + alpha + ')';
    };

    public static thistle = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Thistle';
      }
      else return 'rgba(216,191,216,' + alpha + ')';
    };
    public static plum = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Plum';
      }
      else return 'rgba(221,160,221,' + alpha + ')';
    };
    public static violet = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Violet';
      }
      else return 'rgba(238,130,238,' + alpha + ')';
    };
    public static orchid = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Orchid';
      }
      else return 'rgba(218,112,214,' + alpha + ')';
    };

    public static fuchsia = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Fuchsia';
      }
      else return 'rgba(255,0,255,' + alpha + ')';
    };

    public static magenta = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Magenta';
      }
      else return 'rgba(255,0,255,' + alpha + ')';
    };

    public static mediumOrchid = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MediumOrchid';
      }
      else return 'rgba(186,85,211,' + alpha + ')';
    };

    public static mediumPurple = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MediumPurple';
      }
      else return 'rgba(147,112,219,' + alpha + ')';
    };

    public static blueViolet = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'BlueViolet';
      }
      else return 'rgba(138,43,226,' + alpha + ')';
    };

    public static darkViolet = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkViolet';
      }
      else return 'rgba(148,0,211,' + alpha + ')';
    };
    public static darkOrchid = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkOrchid';
      }
      else return 'rgba(153,50,204,' + alpha + ')';
    };

    public static darkMagenta = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkMagenta';
      }
      else return 'rgba(139,0,139,' + alpha + ')';
    };

    public static purple = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Purple';
      }
      else return 'rgba(128,0,128,' + alpha + ')';
    };

    public static rebeccaPurple = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'RebeccaPurple';
      }
      else return 'rgba(102,51,153,' + alpha + ')';
    };

    public static indigo = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Indigo';
      }
      else return 'rgba(75,0,130,' + alpha + ')';
    };
    public static mediumSlateBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MediumSlateBlue';
      }
      else return 'rgba(123,104,238,' + alpha + ')';
    };
    public static slateBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'SlateBlue';
      }
      else return 'rgba(106,90,205,' + alpha + ')';
    };

    public static darkSlateBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkSlateBlue';
      }
      else return 'rgba(72,61,139,' + alpha + ')';
    };
  };

  public static GREENS = class {
    public static greenYellow = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'GreenYellow';
      }
      else return 'rgba(173,255,47,' + alpha + ')';
    };

    public static chartreuse = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Chartreuse';
      }
      else return 'rgba(127,255,0,' + alpha + ')';
    };

    public static lawnGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LawnGreen';
      }
      else return 'rgba(124,252,0,' + alpha + ')';
    };

    public static lime = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Lime';
      }
      else return 'rgba(0,255,0,' + alpha + ')';
    };

    public static limeGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LimeGreen';
      }
      else return 'rgba(50,205,50,' + alpha + ')';
    };

    public static paleGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'PaleGreen';
      }
      else return 'rgba(152,251,152,' + alpha + ')';
    };

    public static lightGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightGreen';
      }
      else return 'rgba(144,238,144,' + alpha + ')';
    };

    public static mediumSpringGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MediumSpringGreen';
      }
      else return 'rgba(0,250,154,' + alpha + ')';
    };

    public static springGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'SpringGreen';
      }
      else return 'rgba(0,255,127,' + alpha + ')';
    };

    public static mediumSeaGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MediumSeaGreen';
      }
      else return 'rgba(60,179,113,' + alpha + ')';
    };
    public static seaGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'SeaGreen';
      }
      else return 'rgba(46,139,87,' + alpha + ')';
    };

    public static forestGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'ForestGreen';
      }
      else return 'rgba(34,139,34,' + alpha + ')';
    };

    public static green = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Green';
      }
      else return 'rgba(0,128,0,' + alpha + ')';
    };

    public static darkGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkGreen';
      }
      else return 'rgba(0,100,0,' + alpha + ')';
    };

    public static yellowGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'YellowGreen';
      }
      else return 'rgba(154,205,50,' + alpha + ')';
    };

    public static oliveDrab = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'OliveDrab';
      }
      else return 'rgba(107,142,35,' + alpha + ')';
    };

    public static olive = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Olive';
      }
      else return 'rgba(128,128,0,' + alpha + ')';
    };

    public static darkOliveGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkOliveGreen';
      }
      else return 'rgba(85,107,47,' + alpha + ')';
    };

    public static mediumAquamarine = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MediumAquamarine';
      }
      else return 'rgba(102,205,170,' + alpha + ')';
    };

    public static darkSeaGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkSeaGreen';
      }
      else return 'rgba(143,188,143,' + alpha + ')';
    };

    public static lightSeaGreen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightSeaGreen';
      }
      else return 'rgba(32,178,170,' + alpha + ')';
    };

    public static darkCyan = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkCyan';
      }
      else return 'rgba(0,139,139,' + alpha + ')';
    };

    public static teal = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Teal';
      }
      else return 'rgba(0,128,128,' + alpha + ')';
    };
  };

  public static BLUES_CYANS = class {
    public static aqua = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Aqua';
      }
      else return 'rgba(0,255,255,' + alpha + ')';
    };
    public static cyan = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Cyan';
      }
      else return 'rgba(0,255,255,' + alpha + ')';
    };

    public static lightCyan = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightCyan';
      }
      else return 'rgba(224,255,255,' + alpha + ')';
    };

    public static paleTurquoise = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'PaleTurquoise';
      }
      else return 'rgba(175,238,238,' + alpha + ')';
    };
    public static aquamarine = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Aquamarine';
      }
      else return 'rgba(127,255,212,' + alpha + ')';
    };
    public static turquoise = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Turquoise';
      }
      else return 'rgba(64,224,208,' + alpha + ')';
    };
    public static mediumTurquoise = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MediumTurquoise';
      }
      else return 'rgba(72,209,204,' + alpha + ')';
    };
    public static darkTurquoise = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkTurquoise';
      }
      else return 'rgba(0,206,209,' + alpha + ')';
    };
    public static cadetBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'CadetBlue';
      }
      else return 'rgba(95,158,160,' + alpha + ')';
    };

    public static steelBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'SteelBlue';
      }
      else return 'rgba(70,130,180,' + alpha + ')';
    };

    public static lightSteelBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightSteelBlue';
      }
      else return 'rgba(176,196,222,' + alpha + ')';
    };
    public static powderBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'PowderBlue';
      }
      else return 'rgba(176,224,230,' + alpha + ')';
    };

    public static lightBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightBlue';
      }
      else return 'rgba(173,216,230,' + alpha + ')';
    };

    public static skyBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'SkyBlue';
      }
      else return 'rgba(135,206,235,' + alpha + ')';
    };

    public static lightSkyBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightSkyBlue';
      }
      else return 'rgba(135,206,250,' + alpha + ')';
    };

    public static deepSkyBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DeepSkyBlue';
      }
      else return 'rgba(0,191,255,' + alpha + ')';
    };

    public static dodgerBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DodgerBlue';
      }
      else return 'rgba(30,144,255,' + alpha + ')';
    };
    public static cornflowerBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'CornflowerBlue';
      }
      else return 'rgba(100,149,237,' + alpha + ')';
    };

    public static royalBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'RoyalBlue';
      }
      else return 'rgba(65,105,225,' + alpha + ')';
    };

    public static blue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Blue';
      }
      else return 'rgba(0,0,255,' + alpha + ')';
    };

    public static mediumBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MediumBlue';
      }
      else return 'rgba(0,0,205,' + alpha + ')';
    };

    public static darkBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkBlue';
      }
      else return 'rgba(0,0,139,' + alpha + ')';
    };

    public static navy = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Navy';
      }
      else return 'rgba(0,0,128,' + alpha + ')';
    };
    public static midnightBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MidnightBlue';
      }
      else return 'rgba(25,25,112,' + alpha + ')';
    };
  };

  public static BROWNS = class {
    public static cornsilk = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Cornsilk';
      }
      else return 'rgba(255,248,220,' + alpha + ')';
    };

    public static blanchedAlmond = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'BlanchedAlmond';
      }
      else return 'rgba(255,235,205,' + alpha + ')';
    };
    public static bisque = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Bisque';
      }
      else return 'rgba(255,228,196,' + alpha + ')';
    };
    public static navajoWhite = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'NavajoWhite';
      }
      else return 'rgba(255,222,173,' + alpha + ')';
    };
    public static wheat = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Wheat';
      }
      else return 'rgba(245,222,179,' + alpha + ')';
    };

    public static burlyWood = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'BurlyWood';
      }
      else return 'rgba(222,184,135,' + alpha + ')';
    };

    public static tan = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Tan';
      }
      else return 'rgba(210,180,140,' + alpha + ')';
    };

    public static rosyBrown = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'RosyBrown';
      }
      else return 'rgba(188,143,143,' + alpha + ')';
    };

    public static sandyBrown = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'SandyBrown';
      }
      else return 'rgba(244,164,96,' + alpha + ')';
    };
    public static goldenrod = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Goldenrod';
      }
      else return 'rgba(218,165,32,' + alpha + ')';
    };
    public static darkGoldenrod = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkGoldenrod';
      }
      else return 'rgba(184,134,11,' + alpha + ')';
    };
    public static peru = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Peru';
      }
      else return 'rgba(205,133,63,' + alpha + ')';
    };
    public static chocolate = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Chocolate';
      }
      else return 'rgba(210,105,30,' + alpha + ')';
    };
    public static saddleBrown = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'SaddleBrown';
      }
      else return 'rgba(139,69,19,' + alpha + ')';
    };
    public static sienna = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Sienna';
      }
      else return 'rgba(160,82,45,' + alpha + ')';
    };

    public static brown = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Brown';
      }
      else return 'rgba(165,42,42,' + alpha + ')';
    };

    public static maroon = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Maroon';
      }
      else return 'rgba(128,0,0,' + alpha + ')';
    };
  };

  public static WHITES = class {

    public static white = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'White';
      }
      else return 'rgba(255,255,255,' + alpha + ')';
    };

    public static snow = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Snow';
      }
      else return 'rgba(255,250,250,' + alpha + ')';
    };

    public static honeydew = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Honeydew';
      }
      else return 'rgba(240,255,240,' + alpha + ')';
    };

    public static mintCream = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MintCream';
      }
      else return 'rgba(245,255,250,' + alpha + ')';
    };

    public static azure = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Azure';
      }
      else return 'rgba(240,255,255,' + alpha + ')';
    };

    public static aliceBlue = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'AliceBlue';
      }
      else return 'rgba(240,248,255,' + alpha + ')';
    };

    public static ghostWhite = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'GhostWhite';
      }
      else return 'rgba(248,248,255,' + alpha + ')';
    };

    public static whiteSmoke = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'WhiteSmoke';
      }
      else return 'rgba(245,245,245,' + alpha + ')';
    };

    public static seashell = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Seashell';
      }
      else return 'rgba(255,245,238,' + alpha + ')';
    };

    public static beige = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Beige';
      }
      else return 'rgba(245,245,220,' + alpha + ')';
    };

    public static oldLace = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'OldLace';
      }
      else return 'rgba(253,245,230,' + alpha + ')';
    };

    public static floralWhite = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'FloralWhite';
      }
      else return 'rgba(255,250,240,' + alpha + ')';
    };

    public static ivory = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Ivory';
      }
      else return 'rgba(255,255,240,' + alpha + ')';
    };

    public static antiqueWhite = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'AntiqueWhite';
      }
      else return 'rgba(250,235,215,' + alpha + ')';
    };
    public static linen = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Linen';
      }
      else return 'rgba(250,240,230,' + alpha + ')';
    };
    public static lavenderBlush = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LavenderBlush';
      }
      else return 'rgba(255,240,245,' + alpha + ')';
    };

    public static mistyRose = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'MistyRose';
      }
      else return 'rgba(255,228,225,' + alpha + ')';
    };
  };

  public static GRAYS = class {

    public static gainsboro = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Gainsboro';
      }
      else return 'rgba(220,220,220,' + alpha + ')';
    };

    public static lightGray = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightGray';
      }
      else return 'rgba(211,211,211,' + alpha + ')';
    };

    // public static lightGrey = (alpha?: number) => {
    //   if (isNullOrUndefined(alpha)) {
    //     return 'LightGrey';
    //   }
    //   else return 'rgba(211,211,211,' + alpha + ')';
    // };

    public static silver = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Silver';
      }
      else return 'rgba(192,192,192,' + alpha + ')';
    };

    public static darkGray = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkGray';
      }
      else return 'rgba(169,169,169,' + alpha + ')';
    };

    // public static darkGrey = (alpha?: number) => {
    //   if (isNullOrUndefined(alpha)) {
    //     return 'DarkGrey';
    //   }
    //   else return 'rgba(169,169,169,' + alpha + ')';
    // };

    public static gray = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Gray';
      }
      else return 'rgba(128,128,128,' + alpha + ')';
    };

    // public static grey = (alpha?: number) => {
    //   if (isNullOrUndefined(alpha)) {
    //     return 'Grey';
    //   }
    //   else return 'rgba(128,128,128,' + alpha + ')';
    // };

    public static dimGray = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DimGray';
      }
      else return 'rgba(105,105,105,' + alpha + ')';
    };

    // public static dimGrey = (alpha?: number) => {
    //   if (isNullOrUndefined(alpha)) {
    //     return 'DimGrey';
    //   }
    //   else return 'rgba(105,105,105,' + alpha + ')';
    // };

    public static lightSlateGray = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'LightSlateGray';
      }
      else return 'rgba(119,136,153,' + alpha + ')';
    };

    // public static lightSlateGrey = (alpha?: number) => {
    //   if (isNullOrUndefined(alpha)) {
    //     return 'LightSlateGrey';
    //   }
    //   else return 'rgba(119,136,153,' + alpha + ')';
    // };

    public static slateGray = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'SlateGray';
      }
      else return 'rgba(112,128,144,' + alpha + ')';
    };

    // public static slateGrey = (alpha?: number) => {
    //   if (isNullOrUndefined(alpha)) {
    //     return 'SlateGrey';
    //   }
    //   else return 'rgba(112,128,144,' + alpha + ')';
    // };

    public static darkSlateGray = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'DarkSlateGray';
      }
      else return 'rgba(47,79,79,' + alpha + ')';
    };

    // public static darkSlateGrey = (alpha?: number) => {
    //   if (isNullOrUndefined(alpha)) {
    //     return 'DarkSlateGrey';
    //   }
    //   else return 'rgba(47,79,79,' + alpha + ')';
    // };

    public static black = (alpha?: number) => {
      if (isNullOrUndefined(alpha)) {
        return 'Black';
      }
      else return 'rgba(0,0,0,' + alpha + ')';
    };
  };
}
