const HIGHLIGHT_COLOR = "rgba(136, 8, 8, 0.3)";
const BORDER_COLOR = "rgba(136, 8, 8, 0.6)";
const BORDER_WIDTH = 1;

export function MapPoints() {
  const MAP = {
    name: "human-map",
    areas: [
      {
        name: "Pectoralis major",
        shape: "poly",
        coords: [
          114, 168, 116, 179, 121, 186, 127, 192, 135, 193, 144, 193, 155, 189,
          163, 188, 171, 187, 179, 189, 187, 192, 195, 189, 202, 187, 209, 182,
          212, 174, 213, 164, 211, 155, 203, 144, 191, 137, 181, 133, 171, 135,
          163, 137, 153, 135, 143, 135, 133, 137, 124, 143, 118, 155,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Biceps brachii right",
        shape: "poly",
        coords: [
          110, 175, 95, 187, 89, 202, 86, 217, 86, 235, 90, 244, 101, 238, 105,
          226, 113, 212, 114, 195,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Biceps brachii left",
        shape: "poly",
        coords: [
          217, 173, 215, 180, 216, 194, 214, 204, 213, 212, 222, 229, 227, 235,
          234, 243, 238, 232, 238, 214, 235, 200, 229, 186,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Anterior deltoid right",
        shape: "poly",
        coords: [
          91, 200, 97, 188, 104, 180, 111, 172, 115, 159, 121, 147, 132, 134,
          117, 136, 113, 131, 102, 137, 94, 146, 89, 160, 89, 177,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Anterior deltoid left",
        shape: "poly",
        coords: [
          229, 188, 222, 178, 215, 169, 215, 157, 206, 145, 191, 135, 206, 133,
          215, 130, 226, 137, 233, 143, 238, 153, 239, 169, 237, 184, 235, 200,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Anterior deltoid back right",
        shape: "poly",
        coords: [
          341, 182, 347, 163, 353, 154, 360, 147, 369, 145, 387, 140, 374, 137,
          358, 133, 349, 139, 342, 150, 340, 163,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Anterior deltoid back left",
        shape: "poly",
        coords: [
          491, 175, 490, 153, 486, 143, 481, 138, 473, 133, 460, 137, 445, 140,
          459, 146, 470, 148, 478, 154, 485, 163,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Serratus anterior right",
        shape: "poly",
        coords: [
          137, 193, 130, 193, 123, 187, 117, 172, 114, 187, 113, 200, 119, 213,
          123, 204,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Serratus anterior left",
        shape: "poly",
        coords: [
          362, 251, 365, 238, 366, 227, 369, 215, 371, 198, 369, 181, 360, 166,
          348, 161, 345, 173, 342, 183, 342, 196, 340, 211, 341, 225, 343, 236,
          350, 242,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Serratus anterior right",
        shape: "poly",
        coords: [
          470, 255, 469, 235, 466, 221, 462, 206, 460, 192, 465, 179, 471, 167,
          479, 163, 486, 165, 491, 173, 491, 188, 493, 199, 494, 213, 493, 226,
          492, 235, 486, 243,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Rectus abdominis",
        shape: "poly",
        coords: [
          164, 188, 156, 189, 144, 194, 139, 203, 139, 214, 138, 225, 138, 237,
          141, 248, 145, 272, 155, 298, 161, 312, 166, 316, 171, 313, 177, 304,
          183, 290, 187, 275, 189, 263, 188, 249, 190, 234, 191, 218, 193, 206,
          191, 197, 186, 191, 175, 188,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Gastrocnemius left",
        shape: "poly",
        coords: [
          389, 415, 384, 433, 380, 444, 379, 459, 378, 479, 381, 496, 389, 517,
          397, 533, 402, 549, 406, 561, 408, 569, 413, 576, 414, 569, 412, 542,
          414, 525, 415, 512, 416, 501, 416, 490, 415, 474, 411, 458, 408, 448,
          401, 436,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Gastrocnemius right",
        shape: "poly",
        coords: [
          447, 412, 442, 426, 438, 434, 431, 445, 425, 453, 424, 464, 423, 476,
          421, 492, 422, 505, 424, 520, 427, 534, 427, 549, 427, 562, 430, 577,
          433, 568, 437, 548, 439, 534, 443, 521, 452, 506, 457, 492, 457, 469,
          454, 448, 453, 433,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Gluteus maximus",
        shape: "poly",
        coords: [
          421, 306, 411, 291, 403, 282, 393, 279, 383, 279, 375, 288, 369, 301,
          366, 315, 361, 324, 359, 338, 363, 370, 365, 347, 366, 331, 369, 321,
          373, 335, 375, 360, 379, 345, 389, 339, 400, 339, 411, 335, 416, 328,
          422, 335, 440, 337, 453, 338, 458, 344, 458, 362, 461, 380, 465, 359,
          467, 335, 465, 317, 463, 305, 458, 294, 451, 282, 444, 279, 432, 291,
          426, 298, 422, 302,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Trapezius",
        shape: "poly",
        coords: [
          429, 97, 423, 88, 416, 85, 408, 91, 398, 104, 386, 114, 376, 122, 358,
          133, 369, 135, 386, 137, 387, 146, 387, 161, 389, 177, 391, 189, 398,
          200, 405, 211, 411, 224, 418, 228, 422, 221, 425, 211, 432, 196, 440,
          181, 443, 163, 443, 150, 446, 140, 460, 137, 470, 134, 451, 123, 442,
          114, 435, 108,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Quadriceps femoris right",
        shape: "poly",
        coords: [
          130, 289, 129, 306, 119, 323, 112, 340, 109, 351, 110, 360, 112, 376,
          116, 393, 120, 412, 122, 428, 127, 438, 138, 440, 150, 435, 158, 427,
          158, 418, 157, 407, 157, 394, 154, 379, 151, 363, 147, 347, 140, 321,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Quadriceps femoris left",
        shape: "poly",
        coords: [
          203, 290, 200, 306, 198, 318, 194, 329, 190, 340, 183, 355, 176, 376,
          172, 390, 169, 403, 169, 421, 171, 428, 176, 431, 184, 432, 191, 432,
          196, 431, 200, 427, 203, 418, 207, 406, 211, 389, 215, 371, 217, 354,
          217, 337, 212, 320, 207, 305,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
      {
        name: "Biceps femoris right",
        shape: "poly",
        coords: [
          203, 290, 200, 306, 198, 318, 194, 329, 190, 340, 183, 355, 176, 376,
          172, 390, 169, 403, 169, 421, 171, 428, 176, 431, 184, 432, 191, 432,
          196, 431, 200, 427, 203, 418, 207, 406, 211, 389, 215, 371, 217, 354,
          217, 337, 212, 320, 207, 305,
        ],
        fillColor: HIGHLIGHT_COLOR,
        strokeColor: BORDER_COLOR,
        lineWidth: BORDER_WIDTH,
      },
    ],
  };
  return MAP;
}